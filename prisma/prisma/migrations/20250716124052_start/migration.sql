-- CreateTable
CREATE TABLE "create" (
    "Id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "city" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "create_Id_key" ON "create"("Id");
