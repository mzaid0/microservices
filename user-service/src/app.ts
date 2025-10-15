
import cors from 'cors';
import dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import authRoutes from "./routes/auth.route"

dotenv.config({ path: './.env', });

export const envMode = process.env.NODE_ENV?.trim() || 'DEVELOPMENT';
const port = process.env.PORT || 3000;

const app = express();

app.use(
  helmet({
    contentSecurityPolicy: envMode !== "DEVELOPMENT",
    crossOriginEmbedderPolicy: envMode !== "DEVELOPMENT",
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: ' * ', credentials: true }));

app.use("/api/auth", authRoutes)


app.listen(port, () => console.log('👤 User Service is working on Port:' + port + ' in ' + envMode + ' Mode.'));
