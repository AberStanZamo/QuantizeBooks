import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { CashflowContractResolverBase } from "./base/cashflowContract.resolver.base";
import { CashflowContract } from "./base/CashflowContract";
import { CashflowContractService } from "./cashflowContract.service";

@graphql.Resolver(() => CashflowContract)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class CashflowContractResolver extends CashflowContractResolverBase {
  constructor(
    protected readonly service: CashflowContractService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
