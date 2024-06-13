import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PaymentTransactionServiceBase } from "./base/paymentTransaction.service.base";

@Injectable()
export class PaymentTransactionService extends PaymentTransactionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
