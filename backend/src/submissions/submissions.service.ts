import { Injectable } from '@nestjs/common';
import { CreateSubmissionDto } from './dto/create-submission.dto';
import { UpdateSubmissionDto } from './dto/update-submission.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SubmissionsService {
  constructor(private prisma: PrismaService) { }
  create(createSubmissionDto: CreateSubmissionDto) {
    return this.prisma.submission.create({ data: createSubmissionDto });
  }

  findAll() {
    return this.prisma.submission.findMany({ include: { task: true } });
  }

  findOne(id: string) {
    return this.prisma.submission.findUnique({ where: { id: id }, include: { task: true } });
  }

  update(id: string, updateSubmissionDto: UpdateSubmissionDto) {
    return this.prisma.submission.update({ where: { id: id }, data: updateSubmissionDto });
  }

  remove(id: string) {
    return this.prisma.submission.delete({ where: { id: id } });
  }
}
