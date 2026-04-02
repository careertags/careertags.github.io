import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

function StatsBar(): ReactNode {
  const stats = [
    { value: "5+", label: "支援的求職平台" },
    { value: "10+", label: "支援的學習資源平台" },
    { value: "免費", label: "完全免費下載使用" },
    { value: "隱私", label: "本地儲存、無需登入" },
    { value: "一鍵", label: "快速收藏、零摩擦" },
  ];
  return (
    <div className="ct-stats-bar">
      {stats.map((s, i) => (
        <div key={i} className="ct-stat-item">
          <span className="ct-stat-value">{s.value}</span>
          <span className="ct-stat-label">{s.label}</span>
        </div>
      ))}
    </div>
  );
}

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
            className="margin-left--sm button button--secondary button--lg"
            to="/resources"
          >
            開始學習
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
      <StatsBar />
      <main>
        <HomepageFeatures />
      </main>
      <div className="ct-newsletter-wrap">
        <iframe
          src="https://careertags.substack.com/embed"
          width="100%"
          height="320"
          style={{ maxWidth: "680px", margin: "0 auto", display: "block" }}
          frameBorder="0"
          scrolling="no"
        ></iframe>
      </div>
    </Layout>
  );
}
