import { MongoClient } from "mongodb";

// const client = new MongoClient("mongodb://localhost:27017");
const client = new MongoClient("mongodb+srv://mubashardev0204_db_user:1eBdJ0c7jDoupbGc@cluster0.tvy8koz.mongodb.net/");

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