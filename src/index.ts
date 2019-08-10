/** @format */
/* eslint-disable @typescript-eslint/no-explicit-any */

import http from "http";

let app = require("./server.tsx").default;

const server = http.createServer(app);

let currentApp = app;

server.listen(
  (process.env.PORT || 3000) as number,
  ((error: Error): void => {
    if (error) {
      console.log(error);
    }

    console.log("🚀 started");
  }) as any
);

if (module.hot) {
  console.log("✅  Server-side HMR Enabled!");

  module.hot.accept(
    "./server",
    (): void => {
      console.log("🔁  HMR Reloading `./server`...");

      try {
        app = require("./server").default;
        server.removeListener("request", currentApp);
        server.on("request", app);
        currentApp = app;
      } catch (error) {
        console.error(error);
      }
    }
  );
}
