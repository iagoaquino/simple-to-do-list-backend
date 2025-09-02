import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { TaskDTO } from './dto/Task.dto';
import { ResponsePattern } from 'src/response_pattern.interface';
import TaskManagementService from './TaskManagement.service';

@Controller('tasks')
export default class TaskManagementController {
  constructor(
    private readonly task_management_service: TaskManagementService,
  ) {}

  @Get()
  async getAll(): Promise<ResponsePattern<Array<TaskDTO>>> {
    try {
      return {
        success: true,
        message: 'Dados enviados com sucesso',
        content: this.task_management_service.getTasks(),
      };
    } catch (err) {
      return {
        success: false,
        message: err,
        content: null,
      };
    }
  }

  @Post()
  async create(@Body() task: TaskDTO): Promise<ResponsePattern<null>> {
    try {
      this.task_management_service.createNewTask(task);
      return {
        success: true,
        message: 'Nova task criada',
        content: null,
      };
    } catch (err) {
      return {
        success: false,
        message: err,
        content: null,
      };
    }
  }

  @Patch('/:id/done')
  async concludeTask(@Param('id') id: number) {
    try {
      this.task_management_service.concludeTask(id);
      return {
        success: true,
        message: 'Task marcada como concluida',
        content: null,
      };
    } catch (err) {
      return {
        success: false,
        message: err,
        content: null,
      };
    }
  }
}
