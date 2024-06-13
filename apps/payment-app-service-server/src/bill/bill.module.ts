import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { BillModuleBase } from "./base/bill.module.base";
import { BillService } from "./bill.service";
import { BillController } from "./bill.controller";
import { BillResolver } from "./bill.resolver";

@Module({
  imports: [BillModuleBase, forwardRef(() => AuthModule)],
  controllers: [BillController],
  providers: [BillService, BillResolver],
  exports: [BillService],
})
export class BillModule {}
