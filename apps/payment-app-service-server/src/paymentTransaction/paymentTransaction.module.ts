import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PaymentTransactionModuleBase } from "./base/paymentTransaction.module.base";
import { PaymentTransactionService } from "./paymentTransaction.service";
import { PaymentTransactionController } from "./paymentTransaction.controller";
import { PaymentTransactionResolver } from "./paymentTransaction.resolver";

@Module({
  imports: [PaymentTransactionModuleBase, forwardRef(() => AuthModule)],
  controllers: [PaymentTransactionController],
  providers: [PaymentTransactionService, PaymentTransactionResolver],
  exports: [PaymentTransactionService],
})
export class PaymentTransactionModule {}
