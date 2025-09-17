import { PartialType } from "@nestjs/mapped-types";
import { CreateTaskDto } from "./create-task.dto";

// Reusa los campos del create pero todos opcionales
export class UpdateTaskDto extends PartialType(CreateTaskDto) {}
