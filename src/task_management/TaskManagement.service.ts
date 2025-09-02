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
    const task: TaskDTO = this.task_list[id];
    this.concluded_list.push(task);
    this.task_list.splice(id, 1);
  }

  public getConcludedTask() {
    return this.concluded_list;
  }
}
