/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { BillWhereUniqueInput } from "../../bill/base/BillWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class BillUpdateManyWithoutOrdersInput {
  @Field(() => [BillWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [BillWhereUniqueInput],
  })
  connect?: Array<BillWhereUniqueInput>;

  @Field(() => [BillWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [BillWhereUniqueInput],
  })
  disconnect?: Array<BillWhereUniqueInput>;

  @Field(() => [BillWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [BillWhereUniqueInput],
  })
  set?: Array<BillWhereUniqueInput>;
}

export { BillUpdateManyWithoutOrdersInput as BillUpdateManyWithoutOrdersInput };
