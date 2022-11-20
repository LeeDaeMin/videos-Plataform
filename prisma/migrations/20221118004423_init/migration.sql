/*
  Warnings:

  - You are about to drop the column `comentarioId` on the `user_comentario` table. All the data in the column will be lost.
  - You are about to drop the `comentario` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `videoId` to the `user_comentario` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `comentario` DROP FOREIGN KEY `comentario_videoId_fkey`;

-- DropForeignKey
ALTER TABLE `user_comentario` DROP FOREIGN KEY `user_comentario_comentarioId_fkey`;

-- AlterTable
ALTER TABLE `user_comentario` DROP COLUMN `comentarioId`,
    ADD COLUMN `videoId` INTEGER NOT NULL;

-- DropTable
DROP TABLE `comentario`;

-- AddForeignKey
ALTER TABLE `user_comentario` ADD CONSTRAINT `user_comentario_videoId_fkey` FOREIGN KEY (`videoId`) REFERENCES `video`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
