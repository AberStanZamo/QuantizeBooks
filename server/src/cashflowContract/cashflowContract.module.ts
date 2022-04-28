import { Module } from "@nestjs/common";
import { CashflowContractModuleBase } from "./base/cashflowContract.module.base";
import { CashflowContractService } from "./cashflowContract.service";
import { CashflowContractController } from "./cashflowContract.controller";
import { CashflowContractResolver } from "./cashflowContract.resolver";

@Module({
  imports: [CashflowContractModuleBase],
  controllers: [CashflowContractController],
  providers: [CashflowContractService, CashflowContractResolver],
  exports: [CashflowContractService],
})
export class CashflowContractModule {}
