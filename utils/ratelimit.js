//rateLimit module from express
import rateLimit from "express-rate-limit";

export const chatLimiter = rateLimit({
    windowMs: 60 * 1000, // 1 minute
    max: 10,             // 20 requests
    message: {
        success: false,
        message: "Too many requests. Try again in a minute."
    },
    standardHeaders: true,
});