import * as Sentry from "@sentry/nextjs";
export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    // await import('./sentry.server.config');

    Sentry.init({
      dsn: "https://83aa26ad37928cc636dd49dbd38c5866@o4507300387684352.ingest.us.sentry.io/4507300389126144",

      // Adjust this value in production, or use tracesSampler for greater control
      tracesSampleRate: 1,

      // Setting this option to true will print useful information to the console while you're setting up Sentry.
      debug: false,

      // Uncomment the line below to enable Spotlight (https://spotlightjs.com)
      // spotlight: process.env.NODE_ENV === 'development',

    });
  }

  if (process.env.NEXT_RUNTIME === 'edge') {
    // await import('./sentry.edge.config');
    Sentry.init({
      dsn: "https://83aa26ad37928cc636dd49dbd38c5866@o4507300387684352.ingest.us.sentry.io/4507300389126144",
    
      // Adjust this value in production, or use tracesSampler for greater control
      tracesSampleRate: 1,
    
      // Setting this option to true will print useful information to the console while you're setting up Sentry.
      debug: false,
    });
  }
}
