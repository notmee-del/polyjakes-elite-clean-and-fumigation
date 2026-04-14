import Stripe from 'stripe';

// This only runs on the server — never in the browser
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2026-03-25.dahlia',
});
