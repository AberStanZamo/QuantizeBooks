import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CashflowContractService } from "./cashflowContract.service";
import { CashflowContractControllerBase } from "./base/cashflowContract.controller.base";

@swagger.ApiTags("cashflowContracts")
@common.Controller("cashflowContracts")
export class CashflowContractController extends CashflowContractControllerBase {
  constructor(
    protected readonly service: CashflowContractService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
