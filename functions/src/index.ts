import * as functions from "firebase-functions";
import * as express from "express";
import next from "next";

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev: false, conf: { distDir: "../.next" } });
const handle = app.getRequestHandler();

export const nextApp = functions.https.onRequest(async (req, res) => {
  await app.prepare();
  return handle(req, res);
});
