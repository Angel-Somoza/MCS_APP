import { IsString, IsEmail, IsOptional, IsInt, Min } from 'class-validator';
// Importamos decoradores de validación de la librería class-validator
// IsString -> verifica que el valor sea una cadena de texto
// IsEmail -> verifica que el valor sea un correo válido
// IsOptional -> marca que la propiedad es opcional
// IsInt -> verifica que el valor sea un número entero
// Min -> verifica que el valor sea mayor o igual a un mínimo

export class CreateUserDto {
// DTO = Data Transfer Object
// Se usa para definir cómo deben lucir los datos que recibimos al crear un usuario
  @IsString()
  // Valida que 'name' sea un texto
  name: string;

  @IsEmail()
  // Valida que 'email' sea un correo electrónico válido
  email: string;

  @IsOptional()
  @IsInt()
  @Min(0)
  // 'age' es opcional, debe ser un número entero y mayor o igual a 0
  age?: number;
}