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
import { EnumCashflowContractAccount } from "./EnumCashflowContractAccount";
import {
  IsEnum,
  IsOptional,
  IsDate,
  IsNumber,
  ValidateNested,
  IsString,
  IsBoolean,
} from "class-validator";
import { Type } from "class-transformer";
import { EnumCashflowContractBusinessEntity } from "./EnumCashflowContractBusinessEntity";
import { CashflowContractCreateNestedManyWithoutCashflowContractsInput } from "./CashflowContractCreateNestedManyWithoutCashflowContractsInput";
import { EnumCashflowContractCategories } from "./EnumCashflowContractCategories";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
import { CashflowContractWhereUniqueInput } from "./CashflowContractWhereUniqueInput";
import { EnumCashflowContractTerm } from "./EnumCashflowContractTerm";
import { UserCreateNestedManyWithoutCashflowContractsInput } from "./UserCreateNestedManyWithoutCashflowContractsInput";
@InputType()
class CashflowContractCreateInput {
  @ApiProperty({
    required: false,
    enum: EnumCashflowContractAccount,
  })
  @IsEnum(EnumCashflowContractAccount)
  @IsOptional()
  @Field(() => EnumCashflowContractAccount, {
    nullable: true,
  })
  account?: "FoxrunDeliveryEnt" | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  acquisitionDate?: Date | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  amountPerTerm?: number | null;

  @ApiProperty({
    required: false,
    enum: EnumCashflowContractBusinessEntity,
  })
  @IsEnum(EnumCashflowContractBusinessEntity)
  @IsOptional()
  @Field(() => EnumCashflowContractBusinessEntity, {
    nullable: true,
  })
  businessEntity?: "FoxRunDelivery" | "Quantize" | "HybridInnovations" | null;

  @ApiProperty({
    required: false,
    type: () => CashflowContractCreateNestedManyWithoutCashflowContractsInput,
  })
  @ValidateNested()
  @Type(() => CashflowContractCreateNestedManyWithoutCashflowContractsInput)
  @IsOptional()
  @Field(() => CashflowContractCreateNestedManyWithoutCashflowContractsInput, {
    nullable: true,
  })
  cashflowContracts?: CashflowContractCreateNestedManyWithoutCashflowContractsInput;

  @ApiProperty({
    required: false,
    enum: EnumCashflowContractCategories,
    isArray: true,
  })
  @IsEnum(EnumCashflowContractCategories, {
    each: true,
  })
  @IsOptional()
  @Field(() => [EnumCashflowContractCategories], {
    nullable: true,
  })
  categories?: Array<
    | "SoftwareSubscription"
    | "Misc"
    | "Income"
    | "Deposit"
    | "Withdrawal"
    | "OperatingCost"
    | "LoanPayment"
  >;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  customServiceName?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  expenseDate?: Date | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isSeries?: boolean | null;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  manager?: UserWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  notes?: string | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  oneTimeOnly?: boolean | null;

  @ApiProperty({
    required: false,
    type: () => CashflowContractWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CashflowContractWhereUniqueInput)
  @IsOptional()
  @Field(() => CashflowContractWhereUniqueInput, {
    nullable: true,
  })
  series?: CashflowContractWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  serviceName?: string | null;

  @ApiProperty({
    required: false,
    enum: EnumCashflowContractTerm,
  })
  @IsEnum(EnumCashflowContractTerm)
  @IsOptional()
  @Field(() => EnumCashflowContractTerm, {
    nullable: true,
  })
  term?:
    | "Monthly"
    | "Quarterly"
    | "Yearly"
    | "UsersMonthly"
    | "UsersQuarterly"
    | null;

  @ApiProperty({
    required: false,
    type: () => UserCreateNestedManyWithoutCashflowContractsInput,
  })
  @ValidateNested()
  @Type(() => UserCreateNestedManyWithoutCashflowContractsInput)
  @IsOptional()
  @Field(() => UserCreateNestedManyWithoutCashflowContractsInput, {
    nullable: true,
  })
  users?: UserCreateNestedManyWithoutCashflowContractsInput;
}
export { CashflowContractCreateInput };
