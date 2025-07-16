/*
  Warnings:

  - You are about to drop the `create` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "create";

-- CreateTable
CREATE TABLE "User" (
    "Id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "city" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_Id_key" ON "User"("Id");
