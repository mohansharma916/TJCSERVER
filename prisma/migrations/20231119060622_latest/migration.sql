/*
  Warnings:

  - You are about to drop the `RequestDestination` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `tripDate` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Made the column `userId` on table `Booking` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Booking" DROP CONSTRAINT "Booking_userId_fkey";

-- AlterTable
ALTER TABLE "Booking" ADD COLUMN     "tripDate" TEXT NOT NULL,
ALTER COLUMN "userId" SET NOT NULL,
ALTER COLUMN "passengers" DROP NOT NULL;

-- DropTable
DROP TABLE "RequestDestination";

-- CreateTable
CREATE TABLE "QueryDestination" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT,
    "emailId" TEXT,
    "mobileNumber" TEXT,
    "destination" TEXT,

    CONSTRAINT "QueryDestination_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
