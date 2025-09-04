import { BadRequestException, Injectable } from '@nestjs/common';
import { TaskDTO } from './dto/Task.dto';

@Injectable()
export default class TaskManagementService {
  constructor() {}

  private task_list: Array<TaskDTO> = [];
  private concluded_list: Array<TaskDTO> = [];

  public createNewTask(CreateTaskDto: TaskDTO) {
    this.task_list.push(CreateTaskDto);
  }

  public getTasks() {
    return this.task_list;
  }

  public concludeTask(id: number) {
    if (id > this.task_list.length - 1) {
      throw new BadRequestException(`Task de ID numero ${id} não existe`);
    }
    this.task_list[id]['status'] = 'concluido';
  }

  public getConcludedTask() {
    return this.concluded_list;
  }
}
