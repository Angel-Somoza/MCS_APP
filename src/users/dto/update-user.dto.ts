import { PartialType } from '@nestjs/mapped-types';
// Importamos PartialType, que crea un tipo derivado donde todas las propiedades son opcionales
// Es útil para actualizar datos sin requerir todos los campos

import { CreateUserDto } from './create-user.dto';
// Importamos el DTO de creación de usuario

export class UpdateUserDto extends PartialType(CreateUserDto) {}
// Creamos un DTO para actualizar usuarios
// Hereda todas las propiedades de CreateUserDto pero las hace opcionales
// Esto significa que al actualizar un usuario, no es obligatorio enviar todos los campos