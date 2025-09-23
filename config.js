import { MongoClient } from "mongodb";

const client = new MongoClient("mongodb://localhost:27017");

let db;

export async function connectDB() {
  await client.connect();
  db = client.db("college");
  console.log("✅ Connected to MongoDB");
}

export function getDB() {
  if (!db) throw new Error("Database not initialized!");
  return db;
}