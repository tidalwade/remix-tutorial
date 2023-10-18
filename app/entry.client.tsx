/**
 * By default, Remix will handle hydrating your app on the client for you.
 * You are free to delete this file if you'd like to, but if you ever want it revealed again, you can run `npx remix reveal` ✨
 * For more information, see https://remix.run/file-conventions/entry.client
 */

import { RemixBrowser } from "@remix-run/react";
import { startTransition, StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";

startTransition(() => {
  // if the browser supports SW (all modern browsers do it)
  // if ("serviceWorker" in navigator) {
  //   window.addEventListener("load", () => {
  //     // we will register it after the page complete the load
  //     navigator.serviceWorker
  //       .register("/sw.js")
  //       .then((reg) => console.log("Success: ", reg.scope))
  //       .catch((err) => console.log("Failure: ", err));
  //   });
  // }
  const checkForUpdate = (registration: any) => {
    registration.update();
  };

  if ("serviceWorker" in navigator) {
    // After service worker registration
    navigator.serviceWorker.register("/sw.js").then((registration) => {
      // Check for updates every minute (60,000 milliseconds)
      setInterval(() => {
        checkForUpdate(registration);
      }, 60000);

      // If a new service worker is detected and installed
      registration.addEventListener("updatefound", () => {
        const installingWorker = registration.installing;

        installingWorker!.onstatechange = () => {
          if (
            installingWorker!.state === "installed" &&
            navigator.serviceWorker.controller
          ) {
            // A new version is available

            // Option 1: Notify the user
            // displayUpdateNotification();

            // Option 2: Force reload the page
            window.location.reload();
          }
        };
      });
    });
  }

  hydrateRoot(
    document,
    <StrictMode>
      <RemixBrowser />
    </StrictMode>
  );
});
