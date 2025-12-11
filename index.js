import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { MongoClient, ObjectId } from "mongodb";
import admin from "firebase-admin";
import fs from "fs";

dotenv.config();

const app = express();

// ✔ Get user's orders
app.get("/orders", verifyFirebaseToken, async (req, res) => {
  const orders = await Orders.find({ userEmail: req.user.email }).toArray();
  res.json(orders);
});

// =============================
//         ROOT
// =============================
app.get("/", (_, res) => {
  res.send("📚 Book Store API is running...");
});

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});