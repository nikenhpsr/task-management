import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const teacher = await prisma.teacher.create({
        data: {
            id: "teacher1",
        },
    });

    const student = await prisma.student.create({
        data: {
            id: "student1",
        },
    });

    const teacherUser = await prisma.user.create({
        data: {
            email: "teacher1@example.com",
            password: "password",
            role: "TEACHER",
            roleId: teacher.id,
        },
    });

    const studentUser = await prisma.user.create({
        data: {
            email: "student1@example.com",
            password: "password",
            role: "STUDENT",
            roleId: student.id,
        },
    });

    const task = await prisma.task.create({
        data: {
            id: "task1",
            title: "Task 1",
            description: "Description 1",
            deadlineDate: new Date(),
            studentId: student.id,
            teacherId: teacher.id,
        },
    });

    const submission = await prisma.submission.create({
        data: {
            id: "submission1",
            taskId: task.id,
            studentId: student.id,
            teacherId: teacher.id,
            grade: 85,
        },
    });

    console.log({ teacher, student, task, teacherUser, studentUser, submission });
}

main()
    .catch((e) => {
        throw e;
    })
    .finally(async () => {
        await prisma.$disconnect();
    });