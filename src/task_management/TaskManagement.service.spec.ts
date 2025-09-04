import { TestingModule, Test } from '@nestjs/testing';
import TaskManagementService from './TaskManagement.service';

describe('Teste do Task Management Service', () => {
  let task_management_service: TaskManagementService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TaskManagementService],
    }).compile();

    task_management_service = module.get<TaskManagementService>(
      TaskManagementService,
    );
  });

  it('Deve adicionar a Task ao final', () => {
    task_management_service.createNewTask({
      deadline: '02/09/2025',
      name: 'teste',
      status: 'em progresso',
      description: 'Iniciar testes',
    });

    const tasks = task_management_service.getTasks();

    expect(tasks[tasks.length - 1]).toStrictEqual({
      deadline: '02/09/2025',
      name: 'teste',
      status: 'em progresso',
      description: 'Iniciar testes',
    });
  });

  it('Deve concluir a task', () => {
    task_management_service.createNewTask({
      deadline: '02/09/2025',
      name: 'teste',
      status: 'em progresso',
      description: 'Iniciar testes',
    });
    task_management_service.concludeTask(0);

    const tasks = task_management_service.getTasks();

    expect(tasks[0]).toStrictEqual({
      deadline: '02/09/2025',
      name: 'teste',
      status: 'concluido',
      description: 'Iniciar testes',
    });
  });
});
