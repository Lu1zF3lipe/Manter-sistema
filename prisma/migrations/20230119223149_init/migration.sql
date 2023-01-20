-- CreateTable
CREATE TABLE "SystemData" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "acronym" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "descrition" TEXT NOT NULL,
    "systemControlId" INTEGER,
    "crated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "SystemData_systemControlId_fkey" FOREIGN KEY ("systemControlId") REFERENCES "SystemControl" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "SystemControl" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "status" TEXT NOT NULL DEFAULT 'ativo',
    "last_user_edit" TEXT NOT NULL,
    "justify_last_edit" TEXT NOT NULL DEFAULT 'never modified',
    "upadate_at" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "SystemData_email_key" ON "SystemData"("email");

-- CreateIndex
CREATE UNIQUE INDEX "SystemData_systemControlId_key" ON "SystemData"("systemControlId");
