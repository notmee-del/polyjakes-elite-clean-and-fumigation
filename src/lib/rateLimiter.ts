import { RateLimiterMemory } from 'rate-limiter-flexible';

// Max 10 requests per minute per IP
const rateLimiter = new RateLimiterMemory({
  points: 10,
  duration: 60,
});

export async function checkRateLimit(identifier: string): Promise<boolean> {
  try {
    await rateLimiter.consume(identifier);
    return true; // allowed
  } catch {
    return false; // blocked
  }
}