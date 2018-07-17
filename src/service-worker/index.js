/* eslint-disable no-console */

import { register } from "register-service-worker";

// If you change the route, please make sure to fix your workbox-webpack-plugin setup
// on your production config.
export const WORKER_FILE_NAME = "/js/service-worker.js";

export const registerWorker = () => {
  if (process.env.NODE_ENV !== "production") return undefined;

  return register(WORKER_FILE_NAME, {
    ready() {
      console.log(
        `App is being served from cache by a service worker.
           For more details, visit https://goo.gl/AFskqB`
      );
    },
    cached() {
      console.log("Content has been cached for offline use.");
    },
    updated() {
      console.log("New content is available; please refresh.");
    },
    offline() {
      console.log(
        "No internet connection found. App is running in offline mode."
      );
    },
    error(error) {
      console.error("Error during service worker registration:", error);
    },
  });
};
