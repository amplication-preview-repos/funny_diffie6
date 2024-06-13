/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsOptional, ValidateNested, IsEnum } from "class-validator";
import { BillWhereUniqueInput } from "../../bill/base/BillWhereUniqueInput";
import { Type } from "class-transformer";
import { EnumPaymentTransactionStatus } from "./EnumPaymentTransactionStatus";
import { TipCreateNestedManyWithoutPaymentTransactionsInput } from "./TipCreateNestedManyWithoutPaymentTransactionsInput";

@InputType()
class PaymentTransactionCreateInput {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  amount?: number | null;

  @ApiProperty({
    required: false,
    type: () => BillWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => BillWhereUniqueInput)
  @IsOptional()
  @Field(() => BillWhereUniqueInput, {
    nullable: true,
  })
  bill?: BillWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    enum: EnumPaymentTransactionStatus,
  })
  @IsEnum(EnumPaymentTransactionStatus)
  @IsOptional()
  @Field(() => EnumPaymentTransactionStatus, {
    nullable: true,
  })
  status?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: () => TipCreateNestedManyWithoutPaymentTransactionsInput,
  })
  @ValidateNested()
  @Type(() => TipCreateNestedManyWithoutPaymentTransactionsInput)
  @IsOptional()
  @Field(() => TipCreateNestedManyWithoutPaymentTransactionsInput, {
    nullable: true,
  })
  tips?: TipCreateNestedManyWithoutPaymentTransactionsInput;
}

export { PaymentTransactionCreateInput as PaymentTransactionCreateInput };