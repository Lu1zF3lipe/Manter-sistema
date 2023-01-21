-- CreateTable
CREATE TABLE "SystemData" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT,
    "acronym" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "descrition" TEXT NOT NULL,
    "crated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "SystemControl" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "status" TEXT NOT NULL,
    "editor_name" TEXT NOT NULL,
    "justification" TEXT NOT NULL,
    "system_data_id" INTEGER NOT NULL,
    "crated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "SystemControl_system_data_id_fkey" FOREIGN KEY ("system_data_id") REFERENCES "SystemData" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "SystemData_email_key" ON "SystemData"("email");
