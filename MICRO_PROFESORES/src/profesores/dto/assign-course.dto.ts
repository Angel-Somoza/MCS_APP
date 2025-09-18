import { IsInt, Min } from "class-validator";
export class AssignCourseDto {
  @IsInt() @Min(1)
  courseId: number;
}
