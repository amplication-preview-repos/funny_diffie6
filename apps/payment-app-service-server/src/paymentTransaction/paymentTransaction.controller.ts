import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PaymentTransactionService } from "./paymentTransaction.service";
import { PaymentTransactionControllerBase } from "./base/paymentTransaction.controller.base";

@swagger.ApiTags("paymentTransactions")
@common.Controller("paymentTransactions")
export class PaymentTransactionController extends PaymentTransactionControllerBase {
  constructor(
    protected readonly service: PaymentTransactionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
