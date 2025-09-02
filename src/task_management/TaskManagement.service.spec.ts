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
      date: new Date(2, 9, 2025),
      hour: '10:15',
      description: 'Iniciar testes',
    });

    const tasks = task_management_service.getTasks();

    expect(tasks[tasks.length - 1]).toStrictEqual({
      date: new Date(2, 9, 2025),
      hour: '10:15',
      description: 'Iniciar testes',
    });
  });

  it('Deve concluir a task', () => {
    task_management_service.createNewTask({
      date: new Date(2, 9, 2025),
      hour: '10:15',
      description: 'Iniciar testes',
    });
    task_management_service.concludeTask(0);

    const ongoin_tasks = task_management_service.getTasks();
    const concluded_tasks = task_management_service.getConcludedTask();

    expect(concluded_tasks[concluded_tasks.length - 1]).toStrictEqual({
      date: new Date(2, 9, 2025),
      hour: '10:15',
      description: 'Iniciar testes',
    });

    expect(ongoin_tasks.length).toBe(0);
  });
});
