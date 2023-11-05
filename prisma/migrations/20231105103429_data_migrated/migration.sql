/*
  Warnings:

  - You are about to drop the column `tripDates` on the `Trip` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Trip" DROP COLUMN "tripDates";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "active" BOOLEAN NOT NULL DEFAULT false;

-- CreateTable
CREATE TABLE "RequestDestination" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT,
    "emailId" TEXT,
    "mobileNumber" TEXT,
    "destination" TEXT,

    CONSTRAINT "RequestDestination_pkey" PRIMARY KEY ("id")
);
