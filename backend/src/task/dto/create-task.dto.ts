import { ApiProperty } from "@nestjs/swagger";

export class CreateTaskDto {
    @ApiProperty()
    title: string;

    @ApiProperty()
    description: string;

    @ApiProperty()
    deadlineDate: Date

    @ApiProperty()
    studentId: string

    @ApiProperty()
    teacherId: string
}
