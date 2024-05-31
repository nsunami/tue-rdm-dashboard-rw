-- CreateEnum
CREATE TYPE "DefinedTypeName" AS ENUM ('dataset', 'software');

-- CreateTable
CREATE TABLE "Item" (
    "id" SERIAL NOT NULL,
    "figshare_url" TEXT,
    "description" TEXT NOT NULL,
    "funding" TEXT,
    "version" INTEGER NOT NULL,
    "status" TEXT,
    "size" BIGINT,
    "created_date" TIMESTAMP(3) NOT NULL,
    "modified_date" TIMESTAMP(3) NOT NULL,
    "is_public" BOOLEAN NOT NULL,
    "is_confidential" BOOLEAN NOT NULL,
    "is_metadata_record" BOOLEAN NOT NULL,
    "confidential_reason" TEXT,
    "metadata_reason" TEXT,
    "tags" TEXT[],
    "references" TEXT[],
    "has_linked_file" BOOLEAN NOT NULL,
    "citation" TEXT,
    "is_embargoed" BOOLEAN NOT NULL,
    "embargo_date" TIMESTAMP(3),
    "embargo_type" TEXT,
    "embargo_title" TEXT,
    "embargo_reason" TEXT,
    "uuid" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "doi" TEXT NOT NULL,
    "handle" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "published_date" TIMESTAMP(3) NOT NULL,
    "thumb" TEXT NOT NULL,
    "defined_type" INTEGER NOT NULL,
    "defined_type_name" "DefinedTypeName" NOT NULL,
    "group_id" INTEGER NOT NULL,
    "url_private_api" TEXT NOT NULL,
    "url_public_api" TEXT NOT NULL,
    "url_private_html" TEXT NOT NULL,
    "url_public_html" TEXT NOT NULL,
    "resource_title" TEXT NOT NULL,
    "resource_doi" TEXT NOT NULL,
    "agreed_to_deposit_agreement" BOOLEAN NOT NULL,
    "agreed_to_publish" BOOLEAN NOT NULL,
    "licenseId" INTEGER NOT NULL,
    "timelineId" INTEGER NOT NULL,

    CONSTRAINT "Item_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Author" (
    "id" SERIAL NOT NULL,
    "uuid" TEXT,
    "full_name" TEXT,
    "is_active" BOOLEAN,
    "url_name" TEXT,
    "orcid_id" TEXT,

    CONSTRAINT "Author_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "parent_id" INTEGER,
    "parent_uuid" TEXT,
    "path" TEXT NOT NULL,
    "source_id" INTEGER,
    "taxonomy_id" INTEGER,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CustomField" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "value" TEXT[],

    CONSTRAINT "CustomField_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EmbargoOption" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "EmbargoOption_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "File" (
    "id" SERIAL NOT NULL,
    "uuid" TEXT,
    "name" TEXT NOT NULL,
    "size" BIGINT NOT NULL,
    "is_link_only" BOOLEAN NOT NULL,
    "is_incomplete" BOOLEAN NOT NULL,
    "download_url" TEXT NOT NULL,
    "supplied_md5" TEXT,
    "computed_md5" TEXT NOT NULL,

    CONSTRAINT "File_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FundingList" (
    "id" SERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "grant_code" TEXT NOT NULL,
    "funder_name" TEXT,
    "is_user_defined" INTEGER,
    "url" TEXT,

    CONSTRAINT "FundingList_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "License" (
    "id" SERIAL NOT NULL,
    "value" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "License_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Timeline" (
    "id" SERIAL NOT NULL,
    "posted" TIMESTAMP(3) NOT NULL,
    "revision" TIMESTAMP(3),
    "submission" TIMESTAMP(3),
    "firstOnline" TIMESTAMP(3) NOT NULL,
    "publisherPublication" TIMESTAMP(3),

    CONSTRAINT "Timeline_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_AuthorToItem" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_CategoryToItem" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_CustomFieldToItem" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_EmbargoOptionToItem" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_FileToItem" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_FundingListToItem" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Item_doi_key" ON "Item"("doi");

-- CreateIndex
CREATE UNIQUE INDEX "_AuthorToItem_AB_unique" ON "_AuthorToItem"("A", "B");

-- CreateIndex
CREATE INDEX "_AuthorToItem_B_index" ON "_AuthorToItem"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CategoryToItem_AB_unique" ON "_CategoryToItem"("A", "B");

-- CreateIndex
CREATE INDEX "_CategoryToItem_B_index" ON "_CategoryToItem"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CustomFieldToItem_AB_unique" ON "_CustomFieldToItem"("A", "B");

-- CreateIndex
CREATE INDEX "_CustomFieldToItem_B_index" ON "_CustomFieldToItem"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_EmbargoOptionToItem_AB_unique" ON "_EmbargoOptionToItem"("A", "B");

-- CreateIndex
CREATE INDEX "_EmbargoOptionToItem_B_index" ON "_EmbargoOptionToItem"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_FileToItem_AB_unique" ON "_FileToItem"("A", "B");

-- CreateIndex
CREATE INDEX "_FileToItem_B_index" ON "_FileToItem"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_FundingListToItem_AB_unique" ON "_FundingListToItem"("A", "B");

-- CreateIndex
CREATE INDEX "_FundingListToItem_B_index" ON "_FundingListToItem"("B");

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_licenseId_fkey" FOREIGN KEY ("licenseId") REFERENCES "License"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_timelineId_fkey" FOREIGN KEY ("timelineId") REFERENCES "Timeline"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AuthorToItem" ADD CONSTRAINT "_AuthorToItem_A_fkey" FOREIGN KEY ("A") REFERENCES "Author"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AuthorToItem" ADD CONSTRAINT "_AuthorToItem_B_fkey" FOREIGN KEY ("B") REFERENCES "Item"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToItem" ADD CONSTRAINT "_CategoryToItem_A_fkey" FOREIGN KEY ("A") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToItem" ADD CONSTRAINT "_CategoryToItem_B_fkey" FOREIGN KEY ("B") REFERENCES "Item"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CustomFieldToItem" ADD CONSTRAINT "_CustomFieldToItem_A_fkey" FOREIGN KEY ("A") REFERENCES "CustomField"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CustomFieldToItem" ADD CONSTRAINT "_CustomFieldToItem_B_fkey" FOREIGN KEY ("B") REFERENCES "Item"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EmbargoOptionToItem" ADD CONSTRAINT "_EmbargoOptionToItem_A_fkey" FOREIGN KEY ("A") REFERENCES "EmbargoOption"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EmbargoOptionToItem" ADD CONSTRAINT "_EmbargoOptionToItem_B_fkey" FOREIGN KEY ("B") REFERENCES "Item"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FileToItem" ADD CONSTRAINT "_FileToItem_A_fkey" FOREIGN KEY ("A") REFERENCES "File"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FileToItem" ADD CONSTRAINT "_FileToItem_B_fkey" FOREIGN KEY ("B") REFERENCES "Item"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FundingListToItem" ADD CONSTRAINT "_FundingListToItem_A_fkey" FOREIGN KEY ("A") REFERENCES "FundingList"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FundingListToItem" ADD CONSTRAINT "_FundingListToItem_B_fkey" FOREIGN KEY ("B") REFERENCES "Item"("id") ON DELETE CASCADE ON UPDATE CASCADE;
