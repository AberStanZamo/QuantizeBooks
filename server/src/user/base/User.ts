/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Expense } from "../../expense/base/Expense";
import { ValidateNested, IsOptional, IsDate, IsString } from "class-validator";
import { Type } from "class-transformer";
import { CashflowContract } from "../../cashflowContract/base/CashflowContract";
@ObjectType()
class User {
  @ApiProperty({
    required: false,
    type: () => [Expense],
  })
  @ValidateNested()
  @Type(() => Expense)
  @IsOptional()
  approvedExpenses?: Array<Expense>;

  @ApiProperty({
    required: false,
    type: () => [CashflowContract],
  })
  @ValidateNested()
  @Type(() => CashflowContract)
  @IsOptional()
  cashflowContract?: Array<CashflowContract>;

  @ApiProperty({
    required: false,
    type: () => [CashflowContract],
  })
  @ValidateNested()
  @Type(() => CashflowContract)
  @IsOptional()
  cashflowContractsManager?: Array<CashflowContract>;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: false,
    type: () => [Expense],
  })
  @ValidateNested()
  @Type(() => Expense)
  @IsOptional()
  expenses?: Array<Expense>;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  firstName!: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  lastName!: string | null;

  @ApiProperty({
    required: true,
    type: [String],
  })
  @IsString({
    each: true,
  })
  @Field(() => [String])
  roles!: Array<string>;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  username!: string;
}
export { User };
