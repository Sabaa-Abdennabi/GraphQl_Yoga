-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "role" TEXT NOT NULL DEFAULT 'USER'
);

-- CreateTable
CREATE TABLE "Cv" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "userId" INTEGER,
    CONSTRAINT "Cv_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Skill" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "designation" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_CvToSkill" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_CvToSkill_A_fkey" FOREIGN KEY ("A") REFERENCES "Cv" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_CvToSkill_B_fkey" FOREIGN KEY ("B") REFERENCES "Skill" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "_CvToSkill_AB_unique" ON "_CvToSkill"("A", "B");

-- CreateIndex
CREATE INDEX "_CvToSkill_B_index" ON "_CvToSkill"("B");
