import rateLimit from 'express-rate-limit';

// Set rate limit
export const apiLimiter = rateLimit({
    windowMs: 3 * 60 * 1000, // 3 mins
    max: 30, // Maximum 30 requests per IP in 3 minutes
    handler: (req, res) => {
        res.status(429).json({
          status: 409,
          error: 'Too many requests, please try again later.'
        });
  }});
  
