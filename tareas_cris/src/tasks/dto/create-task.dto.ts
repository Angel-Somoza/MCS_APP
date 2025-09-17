import { IsBoolean, IsNotEmpty, IsOptional, IsString, MaxLength } from "class-validator";

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(200)
  title: string; // obligatorio

  @IsString()
  @IsOptional()
  description?: string; // opcional

  @IsBoolean()
  @IsOptional()
  done?: boolean; // si no lo mandan, queda en false
}
