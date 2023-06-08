
CREATE TABLE "teachers" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "name" VARCHAR(255),
  "start_date" DATE,
  "end_date" DATE,
  "is_active" BOOLEAN DEFAULT TRUE
);

CREATE TABLE "assistance_requests" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "assignment_id" INTEGER,
  "student_id" INTEGER,
  "teacher_id" INTEGER,
  "created_at" TIMESTAMP,
  "started_at" TIMESTAMP,
  "completed_at" TIMESTAMP,
  "student_feedback" TEXT,
  "teacher_feedback" TEXT
);

ALTER TABLE "assistance_requests" ADD FOREIGN KEY ("assignment_id") REFERENCES "assignments" ("id") ON DELETE CASCADE;

ALTER TABLE "assistance_requests" ADD FOREIGN KEY ("student_id") REFERENCES "students" ("id") ON DELETE CASCADE;

ALTER TABLE "assistance_requests" ADD FOREIGN KEY ("teacher_id") REFERENCES "teachers" ("id") ON DELETE CASCADE;
