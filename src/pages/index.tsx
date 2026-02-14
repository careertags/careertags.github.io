import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--success button--lg"
            to="https://chromewebstore.google.com/detail/careertags/hgbdlhjfbbklmcibbnecaoijkhmaeeop?hl=zh-tw"
          >
            免費下載
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="https://chromewebstore.google.com/detail/careertags/hgbdlhjfbbklmcibbnecaoijkhmaeeop?hl=zh-tw"
          >
            免費下載
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="一鍵收藏跨平台職缺和學習資源，系統化管理你的求職進度及職涯成長"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
      <iframe
        src="https://careertags.substack.com/embed"
        width="100%"
        height="320"
        style={{
          border: "1px solid #EEE",
          maxWidth: "100%",
          margin: "0 auto",
          display: "block",
        }}
        frameBorder="0"
        scrolling="no"
      ></iframe>
    </Layout>
  );
}
