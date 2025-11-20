import ratelimit from "../config/upstash.js";

const RateLimiterimport = async (req,res,next) => {
    try{
        const {success} = await ratelimit.limit(
            "my-limit-key"
        )
        if (!success){
            return res.status(429).json({ message: "Too many requests. Please try again later." });
        }

        next();
    }
    catch(err){
        console.log("Error in rate limiter middleware " + err);
        next(err)
    }
}

export default RateLimiterimport;