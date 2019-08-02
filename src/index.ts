/** @format */
// tslint:disable:no-console

import http from "http";

// tslint:disable-next-line:no-var-requires
let app = require("./server").default;

const server = http.createServer(app);

let currentApp = app;

server.listen(
  (process.env.PORT || 3000) as number,
  ((error: Error) => {
    if (error) {
      console.log(error);
    }

    console.log("🚀 started");
  }) as any
);

if (module.hot) {
  console.log("✅  Server-side HMR Enabled!");

  module.hot.accept("./server", () => {
    console.log("🔁  HMR Reloading `./server`...");

    try {
      app = require("./server").default;
      server.removeListener("request", currentApp);
      server.on("request", app);
      currentApp = app;
    } catch (error) {
      console.error(error);
    }
  });
}
