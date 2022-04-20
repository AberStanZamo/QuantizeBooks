import { Test } from "@nestjs/testing";
import { INestApplication, HttpStatus, ExecutionContext } from "@nestjs/common";
import request from "supertest";
import { MorganModule } from "nest-morgan";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { ExpenseController } from "../expense.controller";
import { ExpenseService } from "../expense.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  amount: 42.42,
  approval: new Date(),
  createdAt: new Date(),
  id: "exampleId",
  notes: "exampleNotes",
  paid: new Date(),
  purchaseDate: new Date(),
  title: "exampleTitle",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  amount: 42.42,
  approval: new Date(),
  createdAt: new Date(),
  id: "exampleId",
  notes: "exampleNotes",
  paid: new Date(),
  purchaseDate: new Date(),
  title: "exampleTitle",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    amount: 42.42,
    approval: new Date(),
    createdAt: new Date(),
    id: "exampleId",
    notes: "exampleNotes",
    paid: new Date(),
    purchaseDate: new Date(),
    title: "exampleTitle",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  amount: 42.42,
  approval: new Date(),
  createdAt: new Date(),
  id: "exampleId",
  notes: "exampleNotes",
  paid: new Date(),
  purchaseDate: new Date(),
  title: "exampleTitle",
  updatedAt: new Date(),
};

const service = {
  create() {
    return CREATE_RESULT;
  },
  findMany: () => FIND_MANY_RESULT,
  findOne: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

describe("Expense", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: ExpenseService,
          useValue: service,
        },
      ],
      controllers: [ExpenseController],
      imports: [MorganModule.forRoot(), ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /expenses", async () => {
    await request(app.getHttpServer())
      .post("/expenses")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        approval: CREATE_RESULT.approval.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        paid: CREATE_RESULT.paid.toISOString(),
        purchaseDate: CREATE_RESULT.purchaseDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /expenses", async () => {
    await request(app.getHttpServer())
      .get("/expenses")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          approval: FIND_MANY_RESULT[0].approval.toISOString(),
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          paid: FIND_MANY_RESULT[0].paid.toISOString(),
          purchaseDate: FIND_MANY_RESULT[0].purchaseDate.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /expenses/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/expenses"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /expenses/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/expenses"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        approval: FIND_ONE_RESULT.approval.toISOString(),
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        paid: FIND_ONE_RESULT.paid.toISOString(),
        purchaseDate: FIND_ONE_RESULT.purchaseDate.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
