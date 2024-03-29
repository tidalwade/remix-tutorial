import React from "react";
import type { LinksFunction } from "@remix-run/node";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import stylesheet from "~/tailwind.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" href="./images/logo.png" />
        <link rel="manifest" href="./manifest.json" />
        <Meta />
        <Links />
      </head>
      <body>
        <Layout>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </Layout>
      </body>
    </html>
  );
}

function Layout({ children }: { children: any }) {
  return (
    <>
      <nav className="px-10 pt-5">
        <Link to="/" prefetch="intent" className="text-2xl font-semibold">
          Movie<span className="text-teal-500">DB</span>
        </Link>
      </nav>
      <main>{children}</main>
    </>
  );
}
