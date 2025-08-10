/*
  Warnings:

  - You are about to drop the column `subject` on the `ContactSubmission` table. All the data in the column will be lost.
  - The primary key for the `Program` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `type` on the `Program` table. All the data in the column will be lost.
  - The `id` column on the `Program` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `type` to the `ContactSubmission` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `ContactSubmission` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `programId` on the `Course` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `creditHours` to the `Program` table without a default value. This is not possible if the table is not empty.
  - Added the required column `degreeType` to the `Program` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Course" DROP CONSTRAINT "Course_programId_fkey";

-- AlterTable
ALTER TABLE "ContactSubmission" DROP COLUMN "subject",
ADD COLUMN     "education" TEXT,
ADD COLUMN     "phone" TEXT,
ADD COLUMN     "programId" INTEGER,
ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'PENDING',
ADD COLUMN     "type" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Course" DROP COLUMN "programId",
ADD COLUMN     "programId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Program" DROP CONSTRAINT "Program_pkey",
DROP COLUMN "type",
ADD COLUMN     "creditHours" TEXT NOT NULL,
ADD COLUMN     "degreeType" TEXT NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Program_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_programId_fkey" FOREIGN KEY ("programId") REFERENCES "Program"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContactSubmission" ADD CONSTRAINT "ContactSubmission_programId_fkey" FOREIGN KEY ("programId") REFERENCES "Program"("id") ON DELETE SET NULL ON UPDATE CASCADE;
