/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import * as gqlUserRoles from "../../auth/gqlUserRoles.decorator";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { CreateExpenseArgs } from "./CreateExpenseArgs";
import { UpdateExpenseArgs } from "./UpdateExpenseArgs";
import { DeleteExpenseArgs } from "./DeleteExpenseArgs";
import { ExpenseFindManyArgs } from "./ExpenseFindManyArgs";
import { ExpenseFindUniqueArgs } from "./ExpenseFindUniqueArgs";
import { Expense } from "./Expense";
import { User } from "../../user/base/User";
import { ExpenseService } from "../expense.service";

@graphql.Resolver(() => Expense)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ExpenseResolverBase {
  constructor(
    protected readonly service: ExpenseService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Expense",
    action: "read",
    possession: "any",
  })
  async _expensesMeta(
    @graphql.Args() args: ExpenseFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @graphql.Query(() => [Expense])
  @nestAccessControl.UseRoles({
    resource: "Expense",
    action: "read",
    possession: "any",
  })
  async expenses(
    @graphql.Args() args: ExpenseFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Expense[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Expense",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => Expense, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Expense",
    action: "read",
    possession: "own",
  })
  async expense(
    @graphql.Args() args: ExpenseFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Expense | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Expense",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => Expense)
  @nestAccessControl.UseRoles({
    resource: "Expense",
    action: "create",
    possession: "any",
  })
  async createExpense(
    @graphql.Args() args: CreateExpenseArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Expense> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "Expense",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"Expense"} creation is forbidden for roles: ${roles}`
      );
    }
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        approver: args.data.approver
          ? {
              connect: args.data.approver,
            }
          : undefined,

        requester: args.data.requester
          ? {
              connect: args.data.requester,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Expense)
  @nestAccessControl.UseRoles({
    resource: "Expense",
    action: "update",
    possession: "any",
  })
  async updateExpense(
    @graphql.Args() args: UpdateExpenseArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Expense | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Expense",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"Expense"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      // @ts-ignore
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          approver: args.data.approver
            ? {
                connect: args.data.approver,
              }
            : undefined,

          requester: args.data.requester
            ? {
                connect: args.data.requester,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Expense)
  @nestAccessControl.UseRoles({
    resource: "Expense",
    action: "delete",
    possession: "any",
  })
  async deleteExpense(
    @graphql.Args() args: DeleteExpenseArgs
  ): Promise<Expense | null> {
    try {
      // @ts-ignore
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => User, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Expense",
    action: "read",
    possession: "any",
  })
  async approver(
    @graphql.Parent() parent: Expense,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<User | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "User",
    });
    const result = await this.service.getApprover(parent.id);

    if (!result) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.ResolveField(() => User, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Expense",
    action: "read",
    possession: "any",
  })
  async requester(
    @graphql.Parent() parent: Expense,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<User | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "User",
    });
    const result = await this.service.getRequester(parent.id);

    if (!result) {
      return null;
    }
    return permission.filter(result);
  }
}
