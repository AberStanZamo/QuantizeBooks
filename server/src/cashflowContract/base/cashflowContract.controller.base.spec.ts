import { Test } from "@nestjs/testing";
import { INestApplication, HttpStatus, ExecutionContext } from "@nestjs/common";
import request from "supertest";
import { MorganModule } from "nest-morgan";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { CashflowContractController } from "../cashflowContract.controller";
import { CashflowContractService } from "../cashflowContract.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  acquisitionDate: new Date(),
  amountPerTerm: 42.42,
  createdAt: new Date(),
  customServiceName: "exampleCustomServiceName",
  expenseDate: new Date(),
  id: "exampleId",
  isSeries: "true",
  notes: "exampleNotes",
  oneTimeOnly: "true",
  serviceName: "exampleServiceName",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  acquisitionDate: new Date(),
  amountPerTerm: 42.42,
  createdAt: new Date(),
  customServiceName: "exampleCustomServiceName",
  expenseDate: new Date(),
  id: "exampleId",
  isSeries: "true",
  notes: "exampleNotes",
  oneTimeOnly: "true",
  serviceName: "exampleServiceName",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    acquisitionDate: new Date(),
    amountPerTerm: 42.42,
    createdAt: new Date(),
    customServiceName: "exampleCustomServiceName",
    expenseDate: new Date(),
    id: "exampleId",
    isSeries: "true",
    notes: "exampleNotes",
    oneTimeOnly: "true",
    serviceName: "exampleServiceName",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  acquisitionDate: new Date(),
  amountPerTerm: 42.42,
  createdAt: new Date(),
  customServiceName: "exampleCustomServiceName",
  expenseDate: new Date(),
  id: "exampleId",
  isSeries: "true",
  notes: "exampleNotes",
  oneTimeOnly: "true",
  serviceName: "exampleServiceName",
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

describe("CashflowContract", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: CashflowContractService,
          useValue: service,
        },
      ],
      controllers: [CashflowContractController],
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

  test("POST /cashflowContracts", async () => {
    await request(app.getHttpServer())
      .post("/cashflowContracts")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        acquisitionDate: CREATE_RESULT.acquisitionDate.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        expenseDate: CREATE_RESULT.expenseDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /cashflowContracts", async () => {
    await request(app.getHttpServer())
      .get("/cashflowContracts")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          acquisitionDate: FIND_MANY_RESULT[0].acquisitionDate.toISOString(),
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          expenseDate: FIND_MANY_RESULT[0].expenseDate.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /cashflowContracts/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/cashflowContracts"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /cashflowContracts/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/cashflowContracts"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        acquisitionDate: FIND_ONE_RESULT.acquisitionDate.toISOString(),
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        expenseDate: FIND_ONE_RESULT.expenseDate.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
