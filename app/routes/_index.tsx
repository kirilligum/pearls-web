import type { MetaFunction } from "@remix-run/cloudflare";

export const meta: MetaFunction = () => {
  return [
    { title: "Pearls of Wisdom" },
    { name: "description", content: "Transparent, Decentralized, Peer-Reviewed Data for Teaching AI" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1><b>Pearls of Wisdom</b></h1>
      <h2>Transparent, Decentralized, Peer-Reviewed Data for Teaching AI</h2>
      <h3>Abstract</h3>
      <p> Pearls of Wisdom (Pearls) is a blockchain platform for the creation and peer-review of datasets, essential for AI teaching and alignment. This approach addresses prevalent AI challenges such as mistrust in training, data quality issues, content attribution, and high entry costs. Pearls draws inspiration from the success stories of open collaborative projects that rely on public knowledge, such as Wikipedia, open-source ML libraries, and Linux; these projects have outperformed their closed counterparts. The process involves content creators or AI generating a variety of data objects, including prompt-responses, images, and texts. Peer-review is facilitated through reviewer selection, communication management, and a blind consensus for data validation. All data, blockchain addresses, and review details are transparently available on the blockchain. The platform rewards content creators, reviewers, AI model developers, and users with reputation enhancement, visibility of impact, and monetary gains. This platform offers flexibility, scalability, cost-effectiveness, and transparency, ensuring a high return on investment in quality data, which is significantly more valuable than expenditures on GPU resources. Besides open-source use, revenue-generating examples of usage include creating product-related data, akin to content marketing, and AI DAO delegates. </p>
      <h3>The white paper and test dApp are in the works and will be coming soon...</h3>
      <a href="https://twitter.com/kirill_igum">https://twitter.com/kirill_igum</a>
    </div>
  );
}
