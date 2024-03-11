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
        <header style={{ background: '#f0f0f0', padding: '20px', marginBottom: '20px' }}>
          <h1>Pearls of Wisdom</h1>
          <nav>
            <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
              <li style={{ display: 'inline', marginRight: '20px' }}><Link to="/">Home</Link></li>
              <li style={{ display: 'inline', marginRight: '20px' }}><Link to="/whitepaper">Whitepaper</Link></li>
              <li style={{ display: 'inline', marginRight: '20px' }}><Link to="/pitchdeck">Pitchdeck</Link></li>
              <li style={{ display: 'inline', marginRight: '20px' }}><Link to="/dapp">dApp</Link></li>
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
