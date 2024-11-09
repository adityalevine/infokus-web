import express from "express";
import cors from "cors";
import { errorMiddleware } from "../error/error-middleware.js";
import { authRoute } from "../routes/auth-route.js";
import { categoryRoute } from "../routes/category-route.js";
import { imageRoute } from "../routes/image-route.js";
import { env } from "../utils/env.js";
import { packageRoute } from "../routes/package-route.js";
import { timeRoute } from "../routes/time-route.js";
import { addonRoute } from "../routes/addon-route.js";
import { reservationRoute } from "../routes/reservation-route.js";
import { transactionRoute } from "../routes/transcation-route.js";
import { reviewRoute } from "../routes/review-route.js";

export const app = express();

app.use(cors());
app.use(express.json());

app.use(authRoute);
app.use(categoryRoute);
app.use(imageRoute);
app.use(packageRoute);
app.use(timeRoute);
app.use(addonRoute);
app.use(reservationRoute);
app.use(transactionRoute);
app.use(reviewRoute);

app.use(errorMiddleware);

let message = "";
if (env.NODE_ENV === "development") {
  message = "Hello from development!";
} else if (env.NODE_ENV === "production") {
  message = "Hello from production!";
}

app.get("/v1", (req, res) => {
  res.status(200).send({
    status: "success",
    code: 200,
    message: message,
  });
});
