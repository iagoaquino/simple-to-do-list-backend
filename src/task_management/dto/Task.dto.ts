import { IsNotEmpty } from 'class-validator';

export class TaskDTO {
  @IsNotEmpty({ message: 'Data não pode estar vazio' })
  date: Date;

  @IsNotEmpty({ message: 'Hora não pode estar vazio' })
  hour: String;

  @IsNotEmpty({ message: 'Uma descrição é necessaria' })
  description: string;
}
