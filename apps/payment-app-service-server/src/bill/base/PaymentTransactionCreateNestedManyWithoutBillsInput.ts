/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { PaymentTransactionWhereUniqueInput } from "../../paymentTransaction/base/PaymentTransactionWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class PaymentTransactionCreateNestedManyWithoutBillsInput {
  @Field(() => [PaymentTransactionWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PaymentTransactionWhereUniqueInput],
  })
  connect?: Array<PaymentTransactionWhereUniqueInput>;
}

export { PaymentTransactionCreateNestedManyWithoutBillsInput as PaymentTransactionCreateNestedManyWithoutBillsInput };