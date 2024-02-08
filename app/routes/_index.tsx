import type { MetaFunction } from "@remix-run/cloudflare";
import Giscus from '@giscus/react';
import type { LinksFunction } from "@remix-run/node"; // or cloudflare/deno
import { useState } from 'react';



import styles from "~/styles/giscus.css";
export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
];


export const meta: MetaFunction = () => {
  return [
    { title: "Pearls of Wisdom" },
    { name: "description", content: "Transparent, Decentralized, Peer-Reviewed Data for Teaching AI" },
  ];
};

const CollapsibleGoogleForm = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  const containerStyle = {
    textAlign: 'left' as const, // Aligns the content to the left
  };

  const iframeStyle = {
    marginHeight: '0',
    marginWidth: '0',
    border: 'none', // To remove border
    width: '640px',
    height: '100%', // Make the iframe take up the full height
  };

  return (
    <div style={containerStyle}>
      <button onClick={toggleOpen} style={{ marginBottom: '10px' }}>
        {isOpen ? 'Hide Form' : 'Get email updates'}
      </button>
      <div>
        {isOpen && (
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSe9-UV6XPC8bweSDM822qayq7g6zLIOE0xLxknI58D-pTB0mQ/viewform?embedded=true"
            style={iframeStyle}
            title="Google Form"
          >
            Loading…
          </iframe>
        )}
      </div>
    </div>
  );
};

const CollapsibleGiscus = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  const containerStyle = {
    textAlign: 'left' as const, // Aligns the content to the left
  };

  return (
    <div style={containerStyle}>
      <button onClick={toggleOpen} style={{ marginBottom: '10px' }}>
        {isOpen ? 'Hide comments' : 'Show comments'}
      </button>
      <div>
        {isOpen && (
          <div
            style={{ maxWidth: "640" }}
          >
            <Giscus
              id="comments"
              repo="kirilligum/pearls-web"
              repoId="R_kgDOLMgr6Q"
              category="web"
              categoryId="DIC_kwDOLMgr6c4Cc3qe"
              mapping="specific"
              term="web comments"
              reactionsEnabled="1"
              emitMetadata="0"
              inputPosition="top"
              theme="light"
              lang="en"
              loading="lazy"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1><b>Pearls of Wisdom</b></h1>
      <h2>Cultivating transparent, decentralized, peer-reviewed data for teaching and aligning AI</h2>
      <h3>Abstract</h3>
      <p> Pearls of Wisdom (Pearls) is a blockchain protocol for the creation and peer-review of datasets, essential for AI teaching and alignment. This approach addresses prevalent AI challenges such as mistrust in training, data quality issues, content attribution, and high entry costs. Pearls draws inspiration from the success stories of open collaborative projects that rely on public knowledge, such as Wikipedia, open-source ML libraries, and Linux; these projects have outperformed their closed counterparts. The process involves content creators or AI generating a variety of data objects, including prompt-responses, images, and texts. Peer-review is facilitated through reviewer selection, communication management, and a blind consensus for data validation. All data, blockchain addresses, and review details are transparently available on the blockchain. The platform rewards content creators, reviewers, AI model developers, and users with reputation enhancement, visibility of impact, and monetary gains. This platform offers flexibility, scalability, cost-effectiveness, and transparency, ensuring a high return on investment in quality data, which is significantly more valuable than expenditures on GPU resources. Besides open-source use, revenue-generating examples of usage include creating product-related data, akin to content marketing, and AI DAO delegates. </p>
      <h3>The white paper and the test dApp are in the works and will be coming soon...</h3>
      <a href="https://twitter.com/kirill_igum">https://twitter.com/kirill_igum</a>

      <CollapsibleGoogleForm />
      <CollapsibleGiscus />
    </div>
  );
}
