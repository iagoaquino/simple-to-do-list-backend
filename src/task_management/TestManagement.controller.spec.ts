import TaskManagementController from './TaskManagement.controller';
import { Test, TestingModule } from '@nestjs/testing';
import TaskManagementService from './TaskManagement.service';
import { ResponsePattern } from 'src/response_pattern.interface';
import { TaskDTO } from './dto/Task.dto';

describe('Teste do Task Management Controller', () => {
  let task_management_controller: TaskManagementController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TaskManagementService],
      controllers: [TaskManagementController],
    }).compile();

    task_management_controller = module.get<TaskManagementController>(
      TaskManagementController,
    );
  });

  it('Testando response pattern', async () => {
    const response_get_all = await task_management_controller.getAll();
    const response_create_task = await task_management_controller.create({
      deadline: '02/09/2025',
      name: 'teste',
      status: 'em progresso',
      description: 'Iniciar testes',
    });
    const response_conclude_task =
      await task_management_controller.concludeTask(0);

    expect(typeof response_get_all).toBe(
      typeof {
        success: true,
        message: '',
        content: {
          deadline: '02/09/2025',
          name: 'teste',
          status: 'em progresso',
          description: 'Iniciar testes',
        },
      },
    );

    expect(typeof response_create_task).toBe(
      typeof {
        success: true,
        message: '',
        content: null,
      },
    );

    expect(typeof response_conclude_task).toBe(
      typeof {
        success: true,
        message: '',
        content: null,
      },
    );
  });

  it('Testando conclusão de uma tarefa inexistente', async () => {
    const response = await task_management_controller.concludeTask(1);
    expect(response.success).toBe(false);
  });
});
