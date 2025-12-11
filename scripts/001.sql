CREATE TABLE "user" (
  "id" serial PRIMARY KEY,
  "first_name" varchar NOT NULL,
  "last_name" varchar NOT NULL,
  "email" varchar NOT NULL,
  "password_hash" text NOT NULL,
  "id_role" int NOT NULL,
  "created_at" timestamp NOT NULL,
  "phone_number" varchar NOT NULL,
  "adress" varchar NOT NULL,
  "city" varchar NOT NULL,
  "country" varchar NOT NULL,
  "id_card" varchar(255) NOT NULL
);

CREATE TABLE "patient" (
  "id_user" int NOT NULL,
  "social_security" varchar NOT NULL,
  "date_of_birth" date NOT NULL
);

CREATE TABLE "doctor" (
  "id_user" int NOT NULL,
  "consultation_price" float NOT NULL,
  "siret_number" varchar NOT NULL,
  "hourly" text NOT NULL,
  "profile_picture" varchar(255),
  "pro_card" varchar(255) NOT NULL
);

CREATE TABLE "currency" (
  "id" serial PRIMARY KEY,
  "name" varchar NOT NULL
);

CREATE TABLE "speciality" (
  "id" serial PRIMARY KEY,
  "name" varchar(255) NOT NULL
);

CREATE TABLE "speciality_doctor" (
  "id_user" int NOT NULL,
  "id_speciality" int NOT NULL,
  "consultation_time_min" date NOT NULL,
  "consultation_time_max" date NOT NULL,
  "price_max" float NOT NULL,
  "price_min" float NOT NULL,
  "id_currency" int NOT NULL,
  "is_active" boolean NOT NULL
);

CREATE TABLE "language" (
  "id" serial,
  "name" varchar(255) NOT NULL
);

CREATE TABLE "doctor_language" (
  "id_user" int NOT NULL,
  "id_language" int NOT NULL
);

CREATE TABLE "dispensary" (
  "id_user" int NOT NULL,
  "license_pharmacy" varchar(255) NOT NULL,
  "hourly" text NOT NULL,
  "siret_number" varchar NOT NULL
);

CREATE TABLE "prescription" (
  "id" serial PRIMARY KEY,
  "id_patient" int NOT NULL,
  "id_doctor" int NOT NULL,
  "path" varchar NOT NULL,
  "creation_date" date NOT NULL,
  "validation_date" date NOT NULL,
  "isRenew" boolean NOT NULL,
  "renew_number" int
);

CREATE TABLE "role" (
  "id" serial PRIMARY KEY NOT NULL,
  "name" varchar NOT NULL
);

CREATE TABLE "prescription_dispensary" (
  "id_dispensary" int NOT NULL,
  "id_prescription" int NOT NULL,
  "date" date,
  "is_available" bool
);

ALTER TABLE "role" ADD CONSTRAINT "user_role" FOREIGN KEY ("id") REFERENCES "user" ("id_role");

ALTER TABLE "patient" ADD FOREIGN KEY ("id_user") REFERENCES "user" ("id") ON DELETE CASCADE;

ALTER TABLE "doctor" ADD FOREIGN KEY ("id_user") REFERENCES "user" ("id") ON DELETE CASCADE;

ALTER TABLE "prescription_dispensary" ADD FOREIGN KEY ("id_dispensary") REFERENCES "dispensary" ("id_user");

ALTER TABLE "prescription_dispensary" ADD FOREIGN KEY ("id_prescription") REFERENCES "prescription" ("id");

ALTER TABLE "prescription" ADD FOREIGN KEY ("id_doctor") REFERENCES "doctor" ("id_user");

ALTER TABLE "prescription" ADD FOREIGN KEY ("id_patient") REFERENCES "patient" ("id_user");

ALTER TABLE "dispensary" ADD FOREIGN KEY ("id_user") REFERENCES "user" ("id") ON DELETE CASCADE;

ALTER TABLE "speciality_doctor" ADD FOREIGN KEY ("id_user") REFERENCES "doctor" ("id_user");

ALTER TABLE "doctor_language" ADD FOREIGN KEY ("id_user") REFERENCES "doctor" ("id_user");

ALTER TABLE "doctor_language" ADD FOREIGN KEY ("id_language") REFERENCES "language" ("id");

ALTER TABLE "speciality_doctor" ADD FOREIGN KEY ("id_speciality") REFERENCES "speciality" ("id");

ALTER TABLE "speciality_doctor" ADD FOREIGN KEY ("id_currency") REFERENCES "currency" ("id");
