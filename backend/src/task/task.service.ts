import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TaskService {
  constructor(private prisma: PrismaService) { }
  create(createTaskDto: CreateTaskDto) {
    return this.prisma.task.create({ data: createTaskDto });
  }

  findAll() {
    return this.prisma.task.findMany({ include: { submissions: true } });
  }

  findOne(id: string) {
    return this.prisma.task.findUnique({ where: { id: id }, include: { submissions: true } });
  }

  update(id: string, updateTaskDto: UpdateTaskDto) {
    return this.prisma.task.update({ where: { id: id }, data: updateTaskDto });
  }

  remove(id: string) {
    return this.prisma.task.delete({ where: { id } });
  }
}
