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
import { BillWhereUniqueInput } from "../../bill/base/BillWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { BillUpdateManyWithoutOrdersInput } from "./BillUpdateManyWithoutOrdersInput";
import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";

@InputType()
class OrderUpdateInput {
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
    type: () => BillUpdateManyWithoutOrdersInput,
  })
  @ValidateNested()
  @Type(() => BillUpdateManyWithoutOrdersInput)
  @IsOptional()
  @Field(() => BillUpdateManyWithoutOrdersInput, {
    nullable: true,
  })
  bills?: BillUpdateManyWithoutOrdersInput;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  items?: InputJsonValue;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  prices?: InputJsonValue;
}

export { OrderUpdateInput as OrderUpdateInput };