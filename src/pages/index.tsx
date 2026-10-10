import type { ReactNode } from "react";
import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

function StatsBar(): ReactNode {
  const stats = [
    { value: "15 分鐘", label: "每日學習時間" },
    { value: "12 大", label: "學習主題" },
    { value: "140+ 則", label: "精選影片與 Podcast" },
    { value: "11 個", label: "目標職位技能模型" },
    { value: "本機", label: "資料儲存，免註冊登入" },
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

const CHROME_URL =
  "https://chromewebstore.google.com/detail/careertags/hgbdlhjfbbklmcibbnecaoijkhmaeeop?hl=zh-tw";
// null until the app is live; its badge is then dimmed, with a note below.
const APP_STORE_URL: string | null = null;
const GOOGLE_PLAY_URL: string | null = null;

function StoreBadge({
  href,
  src,
  alt,
}: {
  href: string | null;
  src: string;
  alt: string;
}) {
  const img = <img src={src} alt={alt} className={styles.storeBadge} />;
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.storeBadgeLink}
      >
        {img}
      </a>
    );
  }
  return (
    <span className={clsx(styles.storeBadgeLink, styles.storeBadgeSoon)}>
      {img}
    </span>
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
        <p className={styles.heroLead}>
          <span>從學習、實踐、反思到證明，</span>
          <span>將軟實力轉化為日常行動，</span>
          <span>讓每一次實踐都成為職涯與個人成長的累積</span>
        </p>
        <p className={styles.heroLeap}>
          <b>L</b>earn. <b>E</b>xecute. <b>A</b>ssess. <b>P</b>rove.
        </p>
        <div className={styles.ctaGroup}>
          <a
            href={CHROME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.chromeCta}
          >
            <img
              src="/img/chrome-store.svg"
              alt=""
              className={styles.chromeCtaIcon}
            />
            <span className={styles.chromeCtaText}>
              <span className={styles.chromeCtaLine1}>免費安裝</span>
              <span className={styles.chromeCtaLine2}>
                Chrome 線上應用程式商店
              </span>
            </span>
          </a>
          <div className={styles.storeBadges}>
            <StoreBadge
              href={APP_STORE_URL}
              src="/img/app-store.png"
              alt="Download on the App Store"
            />
            <StoreBadge
              href={GOOGLE_PLAY_URL}
              src="/img/google-play.png"
              alt="Get it on Google Play"
            />
          </div>
          {(!APP_STORE_URL || !GOOGLE_PLAY_URL) && (
            <p className={styles.storeNote}>iOS 與 Android App 即將上線</p>
          )}
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
      description="CareerTags 職涯書籤：每天 15 分鐘，躍升你的職涯。結合精選學習資源、每天 15 分鐘小行動、實戰日誌與 STAR 職場故事庫，以 LEAP（學習、實踐、反思、證明）把溝通、協作、思考與領導變成可累積的職涯成果。提供 Chrome 擴充功能與 iOS、Android App。"
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
