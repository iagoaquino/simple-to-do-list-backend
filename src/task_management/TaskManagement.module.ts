import TaskManagementController from './TaskManagement.controller';
import TaskManagementService from './TaskManagement.service';
import { Module } from '@nestjs/common';

@Module({
  controllers: [TaskManagementController],
  providers: [TaskManagementService],
})
export default class TaskManagementModule {}
