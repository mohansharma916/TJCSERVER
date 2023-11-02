/*
  Warnings:

  - You are about to drop the column `capacity` on the `Trip` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "STATUS" AS ENUM ('APPROVED', 'PENDING', 'REJECTED');

-- AlterTable
ALTER TABLE "Trip" DROP COLUMN "capacity",
ALTER COLUMN "TripId" DROP NOT NULL,
ALTER COLUMN "TripTittle" DROP NOT NULL,
ALTER COLUMN "TripDuration" DROP NOT NULL,
ALTER COLUMN "TripPhoto" DROP NOT NULL,
ALTER COLUMN "TripMainImage" DROP NOT NULL,
ALTER COLUMN "TripPickAndDrop" DROP NOT NULL,
ALTER COLUMN "TripDescription" SET DEFAULT ARRAY[]::JSONB[],
ALTER COLUMN "Itineary" SET DEFAULT ARRAY[]::JSONB[],
ALTER COLUMN "Dates" SET DEFAULT ARRAY[]::JSONB[],
ALTER COLUMN "Inclusion" SET DEFAULT ARRAY[]::JSONB[],
ALTER COLUMN "Exclusion" SET DEFAULT ARRAY[]::JSONB[];

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "paymentReceived" DROP NOT NULL;
