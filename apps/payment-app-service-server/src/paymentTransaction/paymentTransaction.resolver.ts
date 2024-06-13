import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PaymentTransactionResolverBase } from "./base/paymentTransaction.resolver.base";
import { PaymentTransaction } from "./base/PaymentTransaction";
import { PaymentTransactionService } from "./paymentTransaction.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PaymentTransaction)
export class PaymentTransactionResolver extends PaymentTransactionResolverBase {
  constructor(
    protected readonly service: PaymentTransactionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
