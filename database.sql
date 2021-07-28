
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "progression" (
	"id" SERIAL PRIMARY KEY,
	"progression_name" VARCHAR (255) NOT NULL,
	"amount_of_chords" INT NOT NULL,
	"user_id" INT REFERENCES "user" NOT NULL,
	"tempo" INT NOT NULL,
	"beat_per_measure" INT NOT NULL,
	"beat_value" INT NOT NULL
);

CREATE TABLE "chord" (
	"id" SERIAL PRIMARY KEY,
	"progression_id" INT NOT NULL,
	"root_note" VARCHAR (20) NOT NULL,
	"chord_number" INT NOT NULL,
	"chord_quality" VARCHAR (100) NOT NULL,
	"octave" INT NOT NULL
);

INSERT INTO "progression" ("progression_name", "amount_of_chords", "user_id", "tempo", "beat_per_measure", "beat_value")
VALUES ('progression 1-1',4,1,120,4,4), ('progression 1-2', 8, 1, 80,4,4), ('progression 2-3', 8, 2, 80,4,4), ('progression 2-4', 8, 2, 80,4,4);

INSERT INTO "chord" ("progression_id", "root_note", "chord_number", "chord_quality", "octave")
	VALUES (5,'C',1,'major',2), (5,'C',2,'major',2), (5,'C',3,'major',2), (5,'C',4,'major',2), (6,'C',1,'major',2), (6,'C',2,'major',2), (6,'C',3,'major',2), (6,'C',4,'major',2), (6,'C',5,'major',2), (6,'C',6,'major',2), (6,'C',7,'major',2), (6,'C',8,'major',2), (7,'C',1,'major',2), (7,'C',2,'major',2), (7,'C',3,'major',2), (7,'C',4,'major',2), (7,'C',5,'major',2), (7,'C',6,'major',2), (7,'C',7,'major',2), (7,'C',8,'major',2), (8,'C',1,'major',2), (8,'C',2,'major',2), (8,'C',3,'major',2), (8,'C',4,'major',2), (8,'C',5,'major',2), (8,'C',6,'major',2), (8,'C',7,'major',2), (8,'C',8,'major',2);

SELECT * FROM "progression" ORDER BY "id" DESC LIMIT 1;