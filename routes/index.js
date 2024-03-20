import categoriesRouter from "./category.route.js";
import productsRouter from "./product.route.js";
import accountsRouter from "./account.route.js";
import ordersRouter from "./order.route.js";
import shippingRouter from "./shipping.route.js";   

const router = {
    categoriesRouter,
    productsRouter,
    accountsRouter,
    ordersRouter,
    shippingRouter
}

export default router;