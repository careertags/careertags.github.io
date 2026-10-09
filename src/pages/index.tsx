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
    { value: "10 分鐘", label: "每天一則精選影片或 Podcast" },
    { value: "9 種", label: "職涯目標，從求職到在職成長" },
    { value: "11 個", label: "目標職位的技能藍圖" },
    { value: "4 大", label: "求職平台一鍵收藏職缺" },
    { value: "安全", label: "資料存在本機，支援匯出匯入" },
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
      description="每天 10 分鐘，打造你的職場軟實力。設定職涯目標、找出技能缺口、記錄實戰日誌，把練習累積成面試和升遷用得上的職場故事"
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
