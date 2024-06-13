import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TipModuleBase } from "./base/tip.module.base";
import { TipService } from "./tip.service";
import { TipController } from "./tip.controller";
import { TipResolver } from "./tip.resolver";

@Module({
  imports: [TipModuleBase, forwardRef(() => AuthModule)],
  controllers: [TipController],
  providers: [TipService, TipResolver],
  exports: [TipService],
})
export class TipModule {}
