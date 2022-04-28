import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { CashflowContractServiceBase } from "./base/cashflowContract.service.base";

@Injectable()
export class CashflowContractService extends CashflowContractServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
