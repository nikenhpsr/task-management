/*
  Warnings:

  - You are about to drop the column `isTeacher` on the `User` table. All the data in the column will be lost.
  - Added the required column `role` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `roleId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('TEACHER', 'STUDENT');

-- AlterTable
ALTER TABLE "User" DROP COLUMN "isTeacher",
ADD COLUMN     "role" "Role" NOT NULL,
ADD COLUMN     "roleId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "teacher_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Teacher"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "student_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
