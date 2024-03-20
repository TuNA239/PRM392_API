import express from 'express';
import * as dotenv from 'dotenv';
import connectDB from './config/database.js';
import cors from 'cors';
import routes from './routes/index.js';

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/category', routes.categoriesRouter);
app.use('/api/product', routes.productsRouter);
app.use('/api/account', routes.accountsRouter);
app.use('/api/order', routes.ordersRouter);
app.use('/api/shipping', routes.shippingRouter);



const PORT = process.env.PORT || 9999;

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on port ${PORT}`);
});