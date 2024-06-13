/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PaymentTransactionWhereUniqueInput } from "./PaymentTransactionWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { PaymentTransactionUpdateInput } from "./PaymentTransactionUpdateInput";

@ArgsType()
class UpdatePaymentTransactionArgs {
  @ApiProperty({
    required: true,
    type: () => PaymentTransactionWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PaymentTransactionWhereUniqueInput)
  @Field(() => PaymentTransactionWhereUniqueInput, { nullable: false })
  where!: PaymentTransactionWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => PaymentTransactionUpdateInput,
  })
  @ValidateNested()
  @Type(() => PaymentTransactionUpdateInput)
  @Field(() => PaymentTransactionUpdateInput, { nullable: false })
  data!: PaymentTransactionUpdateInput;
}

export { UpdatePaymentTransactionArgs as UpdatePaymentTransactionArgs };