import { Module } from '@nestjs/common';
import { OrderItemsModule } from './order-items/order-items.module';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';

@Module({
  imports: [OrderItemsModule],
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class OrdersModule {}
