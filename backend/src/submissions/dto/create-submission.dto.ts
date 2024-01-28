import { ApiProperty } from "@nestjs/swagger";

export class CreateSubmissionDto {
    @ApiProperty()
    taskId: string;

    @ApiProperty()
    studentId: string;

    @ApiProperty()
    teacherId: string;

    @ApiProperty({ required: false })
    grade?: number;
}