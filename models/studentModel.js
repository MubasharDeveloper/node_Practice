import { getDB } from "../config.js";

export async function getAllStudents() {
  const db = getDB();
  return await db.collection("students").find().toArray();
}

export async function createStudent(student) {
  const db = getDB();
  return db.collection("students").insertOne(student);
}
