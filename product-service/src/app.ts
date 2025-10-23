
import cors from 'cors';
import dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import categoryRoutes from './routes/categories.route';
import productRoutes from './routes/products.route';
// Example: Import shared validators
import { validator, type Validator } from "microservices-shared";
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

app.use('/api', productRoutes);
app.use('/api', categoryRoutes);

// Example route showing shared validator usage
app.post('/api/test-validation', (req, res) => {
    try {
        // Use shared validator
        const validatedData = validator.registerSchema.parse(req.body) as Validator['RegisterUser'];
        res.json({ success: true, data: validatedData });
    } catch {
        res.status(400).json({ success: false, error: 'Validation failed' });
    }
});

app.listen(port, () => console.log('📦 Product Service is working on Port:' + port + ' in ' + envMode + ' Mode.'));
