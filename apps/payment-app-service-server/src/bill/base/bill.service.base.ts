/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Bill as PrismaBill,
  Order as PrismaOrder,
  PaymentTransaction as PrismaPaymentTransaction,
  User as PrismaUser,
} from "@prisma/client";

export class BillServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.BillCountArgs, "select">): Promise<number> {
    return this.prisma.bill.count(args);
  }

  async bills<T extends Prisma.BillFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.BillFindManyArgs>
  ): Promise<PrismaBill[]> {
    return this.prisma.bill.findMany<Prisma.BillFindManyArgs>(args);
  }
  async bill<T extends Prisma.BillFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.BillFindUniqueArgs>
  ): Promise<PrismaBill | null> {
    return this.prisma.bill.findUnique(args);
  }
  async createBill<T extends Prisma.BillCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.BillCreateArgs>
  ): Promise<PrismaBill> {
    return this.prisma.bill.create<T>(args);
  }
  async updateBill<T extends Prisma.BillUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.BillUpdateArgs>
  ): Promise<PrismaBill> {
    return this.prisma.bill.update<T>(args);
  }
  async deleteBill<T extends Prisma.BillDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.BillDeleteArgs>
  ): Promise<PrismaBill> {
    return this.prisma.bill.delete(args);
  }

  async findOrders(
    parentId: string,
    args: Prisma.OrderFindManyArgs
  ): Promise<PrismaOrder[]> {
    return this.prisma.bill
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .orders(args);
  }

  async findPaymentTransactions(
    parentId: string,
    args: Prisma.PaymentTransactionFindManyArgs
  ): Promise<PrismaPaymentTransaction[]> {
    return this.prisma.bill
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .paymentTransactions(args);
  }

  async getOrder(parentId: string): Promise<PrismaOrder | null> {
    return this.prisma.bill
      .findUnique({
        where: { id: parentId },
      })
      .order();
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.bill
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
