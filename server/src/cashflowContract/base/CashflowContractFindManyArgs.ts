/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CashflowContractWhereInput } from "./CashflowContractWhereInput";
import { Type } from "class-transformer";
import { CashflowContractOrderByInput } from "./CashflowContractOrderByInput";

@ArgsType()
class CashflowContractFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => CashflowContractWhereInput,
  })
  @Field(() => CashflowContractWhereInput, { nullable: true })
  @Type(() => CashflowContractWhereInput)
  where?: CashflowContractWhereInput;

  @ApiProperty({
    required: false,
    type: [CashflowContractOrderByInput],
  })
  @Field(() => [CashflowContractOrderByInput], { nullable: true })
  @Type(() => CashflowContractOrderByInput)
  orderBy?: Array<CashflowContractOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { CashflowContractFindManyArgs };