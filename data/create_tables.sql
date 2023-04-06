/* CREATION DE LA STRUCTURE DE LA BDD OKANBAN */

-- BEGINNING OF TRANSACTION
BEGIN;

-- first we delete the tables if they already exist
DROP TABLE IF EXISTS "list", "card", "tag", "card_has_tag";

CREATE TABLE "list" (
  "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "name" TEXT NOT NULL,
  "position" INTEGER NOT NULL DEFAULT 0, --if no value is given it will be 0
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP, --date type with time zones
  "updated_at" TIMESTAMPTZ
);

CREATE TABLE "card" (
  "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "title" TEXT NOT NULL,
  "color" TEXT,
  "position" INTEGER NOT NULL DEFAULT 0,
  "list_id" INTEGER NOT NULL REFERENCES "list"("id") ON DELETE CASCADE,
  --ON DELETE CASCADE: to delete child entries linked to parent entry (with foreign key)
  --when parent entry is deleted
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMPTZ
);

CREATE TABLE "tag" (
  "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "name" TEXT NOT NULL,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMPTZ
);

CREATE TABLE "card_has_tag" (
  "card_id" INTEGER NOT NULL REFERENCES "card"("id") ON DELETE CASCADE,
  "tag_id" INTEGER NOT NULL REFERENCES "tag"("id") ON DELETE CASCADE,

  UNIQUE ("card_id", "tag_id") --each association card_id+tag_id is unique
);

-- END OF TRANSACTION
-- IF A QUERY FAILS IN THE TRANSACTION IT STOPS & DB GOES BACK TO STATE BEFORE THE TRANSACTION
COMMIT;

