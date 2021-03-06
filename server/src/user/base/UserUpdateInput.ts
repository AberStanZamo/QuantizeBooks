/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ExpenseUpdateManyWithoutUsersInput } from "./ExpenseUpdateManyWithoutUsersInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { CashflowContractUpdateManyWithoutUsersInput } from "./CashflowContractUpdateManyWithoutUsersInput";
@InputType()
class UserUpdateInput {
  @ApiProperty({
    required: false,
    type: () => ExpenseUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => ExpenseUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => ExpenseUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  approvedExpenses?: ExpenseUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => CashflowContractUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => CashflowContractUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => CashflowContractUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  cashflowContract?: CashflowContractUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => CashflowContractUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => CashflowContractUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => CashflowContractUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  cashflowContractsManager?: CashflowContractUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => ExpenseUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => ExpenseUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => ExpenseUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  expenses?: ExpenseUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  firstName?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  lastName?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  password?: string;

  @ApiProperty({
    required: false,
    type: [String],
  })
  @IsString({
    each: true,
  })
  @IsOptional()
  @Field(() => [String], {
    nullable: true,
  })
  roles?: Array<string>;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  username?: string;
}
export { UserUpdateInput };
