import { IsBoolean, IsEmail, IsNotEmpty, IsOptional, IsString, MaxLength } from "class-validator";

export class CreateProfesorDto {
  @IsString() @IsNotEmpty() @MaxLength(150)
  nombre: string;

  @IsEmail() @MaxLength(180)
  email: string;

  @IsString() @IsOptional() @MaxLength(30)
  telefono?: string;

  @IsBoolean() @IsOptional()
  activo?: boolean;
}
