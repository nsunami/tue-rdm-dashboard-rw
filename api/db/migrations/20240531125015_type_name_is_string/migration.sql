/*
  Warnings:

  - Changed the type of `defined_type_name` on the `Item` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Item" DROP COLUMN "defined_type_name",
ADD COLUMN     "defined_type_name" TEXT NOT NULL;

-- DropEnum
DROP TYPE "DefinedTypeName";
