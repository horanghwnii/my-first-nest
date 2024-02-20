import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountsModule } from './contexts/accounts/accounts.module';
import { CartItemsModule } from './contexts/carts/cart-items/cart-items.module';
import { OrdersModule } from './contexts/orders/orders.module';
import { ProductsModule } from './contexts/products/products.module';
import { PrismaModule } from './db/prisma/prisma.module';

@Module({
  imports: [
    AccountsModule,
    ProductsModule,
    OrdersModule,
    CartItemsModule,
    CartItemsModule,
    PrismaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
