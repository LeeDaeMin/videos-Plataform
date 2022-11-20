/*
  Warnings:

  - Made the column `perfil` on table `usuario` required. This step will fail if there are existing NULL values in that column.
  - Made the column `src` on table `video` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `usuario` MODIFY `perfil` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `video` MODIFY `src` VARCHAR(191) NOT NULL;
