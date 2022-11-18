/*
  Warnings:

  - You are about to drop the column `comentario` on the `comentario` table. All the data in the column will be lost.
  - Added the required column `comentario` to the `user_comentario` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `comentario` DROP COLUMN `comentario`;

-- AlterTable
ALTER TABLE `user_comentario` ADD COLUMN `comentario` VARCHAR(255) NOT NULL;
