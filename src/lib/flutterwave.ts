// This only runs on the server — never in the browser
const Flutterwave = require('flutterwave-node-v3');

export const flw = new Flutterwave(
  process.env.FLW_SECRET_KEY!,
  process.env.NEXT_PUBLIC_FLW_PUBLIC_KEY!
);