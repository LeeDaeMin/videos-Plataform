/*
  Warnings:

  - Added the required column `comentario` to the `comentario` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `comentario` ADD COLUMN `comentario` VARCHAR(255) NOT NULL;
