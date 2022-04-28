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
import { CashflowContractWhereInput } from "./CashflowContractWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class CashflowContractListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => CashflowContractWhereInput,
  })
  @ValidateNested()
  @Type(() => CashflowContractWhereInput)
  @IsOptional()
  @Field(() => CashflowContractWhereInput, {
    nullable: true,
  })
  every?: CashflowContractWhereInput;

  @ApiProperty({
    required: false,
    type: () => CashflowContractWhereInput,
  })
  @ValidateNested()
  @Type(() => CashflowContractWhereInput)
  @IsOptional()
  @Field(() => CashflowContractWhereInput, {
    nullable: true,
  })
  some?: CashflowContractWhereInput;

  @ApiProperty({
    required: false,
    type: () => CashflowContractWhereInput,
  })
  @ValidateNested()
  @Type(() => CashflowContractWhereInput)
  @IsOptional()
  @Field(() => CashflowContractWhereInput, {
    nullable: true,
  })
  none?: CashflowContractWhereInput;
}
export { CashflowContractListRelationFilter };