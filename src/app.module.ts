import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import TaskManagementModule from './task_management/TaskManagement.module';

@Module({
  imports: [TaskManagementModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
