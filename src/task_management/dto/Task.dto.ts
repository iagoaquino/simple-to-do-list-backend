import { IsIn, IsNotEmpty, IsOptional } from 'class-validator';

export class TaskDTO {
  @IsOptional()
  deadline: string;

  @IsNotEmpty({ message: 'Nome não pode estar vazio' })
  name: string;

  @IsNotEmpty({ message: 'Estado não pode estar vazio' })
  @IsIn(['em progresso', 'concluido'])
  status: 'em progresso' | 'concluido';

  @IsOptional()
  description: string;
}
