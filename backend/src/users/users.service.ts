import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Role } from './../role.enum';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) { }
  async create(createUserDto: CreateUserDto) {
    let role: Role;
    if (createUserDto.email.includes('.ac.id') || createUserDto.email.includes('.edu')) {
      role = Role.TEACHER;
    } else {
      role = Role.STUDENT;
    }

    const data: any = {
      email: createUserDto.email,
      password: createUserDto.password,
      role: role,
      roleId: createUserDto.roleId,
    };

    if (role === Role.TEACHER) {
      data.teacher = {
        connect: {
          id: createUserDto.roleId,
        },
      };
    } else if (role === Role.STUDENT) {
      data.student = {
        connect: {
          id: createUserDto.roleId,
        },
      };
    }

    const newUser = await this.prisma.user.create({ data });
    return newUser;
  }


  async findAll() {
    return await this.prisma.user.findMany({
      include: {
        teacher: true,
        student: true,
      },
    });
  }


  async findOne(id: string) {
    return await this.prisma.user.findUnique({
      where: { id },
      include: {
        teacher: true,
        student: true,
      },
    });
  }


  async update(id: string, updateUserDto: UpdateUserDto) {
    const data: any = {
      ...updateUserDto,
      roleId: updateUserDto.roleId as never,
    };

    return await this.prisma.user.update({
      where: { id },
      data,
    });
  }

  async remove(id: string) {
    return await this.prisma.user.delete({
      where: { id },
    });
  }
}
