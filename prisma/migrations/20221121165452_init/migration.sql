/*
  Warnings:

  - You are about to drop the column `comentario` on the `user_comentario` table. All the data in the column will be lost.
  - You are about to drop the column `perfil` on the `usuario` table. All the data in the column will be lost.
  - You are about to drop the column `titulo` on the `video` table. All the data in the column will be lost.
  - You are about to drop the column `visualizaciones` on the `video` table. All the data in the column will be lost.
  - You are about to drop the `contenido_extra` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `comment` to the `user_comentario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `video` table without a default value. This is not possible if the table is not empty.
  - Added the required column `view` to the `video` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `contenido_extra` DROP FOREIGN KEY `contenido_extra_videoId_fkey`;

-- AlterTable
ALTER TABLE `user_comentario` DROP COLUMN `comentario`,
    ADD COLUMN `comment` VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE `usuario` DROP COLUMN `perfil`,
    ADD COLUMN `profile` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `video` DROP COLUMN `titulo`,
    DROP COLUMN `visualizaciones`,
    ADD COLUMN `title` VARCHAR(191) NOT NULL,
    ADD COLUMN `view` INTEGER NOT NULL;

-- DropTable
DROP TABLE `contenido_extra`;

-- CreateTable
CREATE TABLE `BonusContent` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `videoId` INTEGER NOT NULL,
    `descripcion` VARCHAR(191) NOT NULL,
    `file` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `BonusContent` ADD CONSTRAINT `BonusContent_videoId_fkey` FOREIGN KEY (`videoId`) REFERENCES `video`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
