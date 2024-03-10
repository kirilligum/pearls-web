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
      by <a href="https://twitter.com/kirill_igum">https://twitter.com/kirill_igum</a>
      <h2>Cultivating transparent, decentralized, peer-reviewed data for teaching and aligning AI</h2>
      <h3>Abstract</h3>
      <p> Pearls of Wisdom (Pearls) is a blockchain protocol for the creation and peer-review of datasets, essential for AI teaching and alignment. This approach addresses prevalent AI challenges such as mistrust in training, data quality issues, content attribution, and high entry costs. Pearls draws inspiration from the success stories of open collaborative projects that rely on public knowledge, such as Wikipedia, open-source ML libraries, and Linux; these projects have outperformed their closed counterparts. The process involves content creators or AI generating a variety of data objects, including prompt-responses, images, and texts. Peer-review is facilitated through reviewer selection, communication management, and a blind consensus for data validation. All data, blockchain addresses, and review details are transparently available on the blockchain. The platform rewards content creators, reviewers, AI model developers, and users with reputation enhancement, visibility of impact, and monetary gains. This platform offers flexibility, scalability, cost-effectiveness, and transparency, ensuring a high return on investment in quality data, which is significantly more valuable than expenditures on GPU resources. Besides open-source use, revenue-generating examples of usage include creating product-related data, akin to content marketing, and AI DAO delegates. </p>
      <h3>The test dApp is in the works and will be coming soon...</h3>
      Here is the first prototype built during LightLink 2024-02-04 hackathon
      https://github.com/kirilligum/lightlink-hackathon-20240204-ai-data-peer-review/blob/main/README.md
      <h3>The white paper and the test dApp are in the works and will be coming soon...</h3>
      <h3>Introduction</h3>

      A number of papers showed that training large language models on high quality data can be 10x-100x more effective then spending resources on GPU compute.
      [Training language models to follow instructions with human feedback](https://arxiv.org/abs/2203.02155) by OpenAI paper showed that access to a high quality data is 10-100x more cost effective.
      [Textbooks Are All You Need](https://arxiv.org/abs/2306.11644) used crafted "textbook quality" data and suppressed models 10x larger in size that were trained on 100x more data.
      [LIMA: Less Is More for Alignment](https://arxiv.org/abs/2305.11206) fine-tuned LLaMa on just 1000 carefully curated prompts and responses
      The models trained on high quality data perform better on tests; furthermore, high-quality data reduces hallucination, improves the logic, reduces computational cost, mitigates bias, and improves generalization, accuracy, interpretability, and security.
      One part that makes the data high-quality is the content, which includes knowledge, logical-flow, and alignment.
      The other part is the format.
      ChatGPT's popularity is due to embracing the new format: instruction-response.
      In the last year, a number of new data-labeling companies that specialize on creating instruction-tuning datasets appeared; in addition to established data-labeling companies creating instruction-tuning products.
      These data-labeling companies provide various graphical tools, LLM assistance, human labellers, and tools to manage the labellers.
      With LLMs becoming more powerful, LLM assistance in labling became highly helpful; however, one should also be aware of its limitations.
      While LLM assistance reduces the cost of generating data and techniques, such as, constitutional AI, concept mapping (chain-of-thought), and usage of tools, significantly increased the performance of the models, the contribution of synthetic data is based on probabilistic knowledge and shallow logic.
      Therefore, the LLM assistance can only be complimentary to the human-created data -- humans need to review the data for hallucinations, and guidelines.
      Nonetheless, the research on synthetic dataset is moving fast and replacing generic human labellers with a great success; the effect of this replacement is that the human data has to be of higher quality; some labellers get paid $60/hr and have PhDs.
      Since taching of LLM favors diversity, a lableling company would not be able to keep a large number of specialized labelers on staff and would have to have to commission experts for small consulting work.
      Similar to how wikipedia quickly replaced britanica and similar diverse knowledge aggregation companies with a stuff of researchers, in teaching-ai, crowdsoucing will replace labaling companies with a full time staff.
      Crowd-knowledge platforms like quora, stackoverflow, and wikipedia, as well as, academic collaboration showed that contributors are motivated mostly by increasing personal reputation, followed by altruism and monetary compensation.
      Academic publishing system is the most successful system for creating and managing the highest quality knowledge; even for-profit leaders in technology such as Google, Microsoft, Facebook, prefer to publish academic papers rather than keeping their research private.
      In contrasst to wikipedia, quora, and stackoverflow, academic publishing is decentralized -- there are a number of journals with no central autority, the articles are duplicated in multiple locations: journals' websites, arxiv, researchgate, personal websites, and even iligal sources sci-hub that is highly utilized, the reputation system "citation index" is a well known algorithm that anyone can run, similar to smart contract.
      Building a similar academic-style decentralized peer-review system would require building multiple data-labeling companies and an open standard for reputtation.
      Furthermore, governing such ecosystem would require multiple channels of communication and a commetie.
      DAOs, smart-contracts, and blockchain already has infrastructre to build a system like that at a fraction of a cost.
      In our system, GoodPrompt, we have grants that are similar to journals -- grants have guidelines, requirements, and a smart-contract to manage reviewers, the data is multiplied, and transparency allows for building reputation systems.
      In additions to the same features as academic peer-review system, GoodPrompt allows compensating authors and reviewers right away or based on usage due to transparency of the data, trusted logic of a smart-contract, and micropayments.

      <CollapsibleGoogleForm />
      <CollapsibleGiscus />
    </div>
  );
}
