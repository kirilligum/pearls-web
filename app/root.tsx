import type { LinksFunction } from "@remix-run/cloudflare";
import { cssBundleHref } from "@remix-run/css-bundle";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  Link,
} from "@remix-run/react";

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <header className="bg-gray-100 p-5 mb-5">
          <h1>Pearls of Wisdom</h1>
          <nav>
            <ul className="list-none p-0">
              <li className="inline mr-5"><Link to="/">Home</Link></li>
              <li className="inline mr-5"><Link to="/whitepaper">Whitepaper</Link></li>
              <li className="inline mr-5"><Link to="/pitchdeck">Pitchdeck</Link></li>
              <li className="inline mr-5"><Link to="/dapp">dApp</Link></li>
            </ul>
          </nav>
        </header>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
