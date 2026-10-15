import { useEffect, useState, type ReactNode } from "react";
import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Icon, { type IconName } from "@site/src/components/Icon";
import { CHROME_URL } from "@site/src/constants";

import styles from "./index.module.css";

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
      <a href={href} target="_blank" rel="noopener noreferrer">
        {img}
      </a>
    );
  }
  return <span className={styles.storeBadgeSoon}>{img}</span>;
}

const MOCK_VIDEO_ID = "R1vskiVDwl4";

/// The next Thursday, as the app writes a planned practice: "10月22日（週四）".
/// Worked out in the browser, so the example never shows a date gone by.
function useNextThursday(): string {
  const [label, setLabel] = useState("週四");
  useEffect(() => {
    const d = new Date();
    d.setDate(d.getDate() + (((4 - d.getDay() + 7) % 7) || 7));
    setLabel(`${d.getMonth() + 1}月${d.getDate()}日（週四）`);
  }, []);
  return label;
}

// What the app's content page looks like, drawn in HTML: a real item from
// the catalogue (communication-collaboration, yt-R1vskiVDwl4) with its
// summary and action plan, the first action practised, the next scheduled.
// The video plays like it does in the app: the YouTube player loads only
// once it is tapped.
function PhoneMock() {
  const [playing, setPlaying] = useState(false);
  const thursday = useNextThursday();
  const actions = [
    {
      text: "下次一對一時把手機收起來，至少問三個以「什麼」或「如何」開頭的問題",
      done: true,
    },
    {
      text: "下次同事分享困擾時，忍住不講自己類似的故事，改成再多問他一個問題",
      planned: `${thursday}上午 10:00`,
    },
    { text: "這週被問到沒把握的事時，直接說「我不知道」，不要用猜的" },
  ];
  const tabs: { icon: IconName; label: string }[] = [
    { icon: "book", label: "學習" },
    { icon: "briefcase", label: "職缺" },
    { icon: "heart", label: "收藏" },
    { icon: "chart", label: "紀錄" },
    { icon: "settings", label: "設定" },
  ];
  return (
    <div className={styles.phone}>
      <div className={styles.screen}>
        <div className={styles.appBar}>
          <Icon name="chevronLeft" size={18} />
          <span className={styles.topicChip}>溝通與協作</span>
          <Icon name="bookmark" size={18} />
        </div>
        <div className={styles.player}>
          {playing ? (
            <iframe
              className={styles.playerFrame}
              src={`https://www.youtube-nocookie.com/embed/${MOCK_VIDEO_ID}?autoplay=1&playsinline=1&rel=0`}
              title="Celeste Headlee: 10 ways to have a better conversation | TED"
              allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
              allowFullScreen
            />
          ) : (
            <button
              type="button"
              className={styles.playerCover}
              style={{
                backgroundImage: `url(https://i.ytimg.com/vi/${MOCK_VIDEO_ID}/hqdefault.jpg)`,
              }}
              onClick={() => setPlaying(true)}
              aria-label="播放影片：讓對話更好的 10 個方法"
            >
              <span className={styles.playButton}>
                <Icon name="playTriangle" size={20} />
              </span>
              <span className={styles.duration}>11:28</span>
            </button>
          )}
        </div>
        <div className={styles.screenBody}>
          <p className={styles.itemTitle}>讓對話更好的 10 個方法</p>
          <p className={styles.itemMeta}>TED · Celeste Headlee · 入門</p>

          <p className={styles.blockLabel}>重點摘要</p>
          <p className={styles.hook}>
            好的對話不靠裝出專心的樣子，而是真的投入當下、保持好奇、願意傾聽。
          </p>

          <p className={styles.blockLabel}>行動計劃</p>
          <ul className={styles.actions}>
            {actions.map((a) => (
              <li key={a.text} className={styles.action}>
                <span
                  className={clsx(styles.checkbox, a.done && styles.checked)}
                >
                  {a.done && <Icon name="check" size={12} />}
                </span>
                <div>
                  <p className={clsx(styles.actionText, a.done && styles.done)}>
                    {a.text}
                  </p>
                  {a.done && <span className={styles.practised}>已練 1 次</span>}
                  {a.planned && (
                    <span className={styles.planned}>
                      <Icon name="bell" size={11} />
                      {a.planned}
                    </span>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <nav className={styles.tabBar}>
          {tabs.map((t, i) => (
            <span key={t.label} className={clsx(styles.tab, i === 0 && styles.tabActive)}>
              <Icon name={t.icon} size={17} />
              {t.label}
            </span>
          ))}
        </nav>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <header className={styles.hero}>
      <div className={clsx("container", styles.heroInner)}>
        <div className={styles.heroText}>
          <span className="ct-eyebrow">Chrome 擴充功能・iOS・Android</span>
          <Heading as="h1" className={styles.heroTitle}>
            每天 15 分鐘，
            <br />
            躍升你的職涯
          </Heading>
          <p className={styles.heroLead}>
            <span className="ct-phrase">從學習、實踐、反思到證明，</span>
            <span className="ct-phrase">將軟實力轉化為日常行動，</span>
            <span className="ct-phrase">
              讓每一次實踐都成為職涯與個人成長的累積
            </span>
          </p>
          <p className={styles.heroLeap}>
            <b>L</b>earn <span>/</span> <b>E</b>xecute <span>/</span>{" "}
            <b>A</b>ssess <span>/</span> <b>P</b>rove
          </p>
          <div className={styles.ctaRow}>
            <a
              href={CHROME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ct-button ct-button--primary"
            >
              <img src="/img/chrome-store.svg" alt="" width={22} height={22} />
              免費安裝 Chrome 擴充功能
            </a>
            <a href="/about" className="ct-button ct-button--ghost">
              了解產品
            </a>
          </div>
          <div className={styles.stores}>
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
            {(!APP_STORE_URL || !GOOGLE_PLAY_URL) && (
              <span className={styles.storeNote}>iOS 與 Android App 即將上線</span>
            )}
          </div>
        </div>
        <PhoneMock />
      </div>
    </header>
  );
}

function Stats() {
  const stats = [
    { value: "9", label: "種職涯情境" },
    { value: "12", label: "學習主題" },
    { value: "360", label: "則精選影片與 Podcast" },
    { value: "31", label: "項職場技能" },
    { value: "11", label: "個目標職位技能模型" },
  ];
  return (
    <section className={styles.stats}>
      <div className="container">
        <dl className={styles.statsGrid}>
          {stats.map((s) => (
            <div key={s.label} className={styles.stat}>
              <dt className={styles.statValue}>{s.value}</dt>
              <dd className={styles.statLabel}>{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Newsletter() {
  return (
    <section className="ct-section ct-section--surface">
      <div className="container">
        <div className={clsx("ct-section-head", styles.newsletterHead)}>
          <span className="ct-eyebrow">電子報</span>
          <Heading as="h2">訂閱 CareerTags 電子報</Heading>
          <p>新收錄的內容、可以在工作中試試看的行動，以及產品更新，寄到你的信箱。</p>
        </div>
        <iframe
          className={styles.newsletter}
          src="https://careertags.substack.com/embed"
          title="CareerTags 電子報訂閱"
          height="320"
          frameBorder="0"
          scrolling="no"
        />
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="CareerTags 職涯書籤：每天 15 分鐘，躍升你的職涯。精選 360 則英文影片與 Podcast 的中文重點摘要與行動計劃，搭配排定練習、實踐日誌、STAR 職場故事、目標職位技能分析與職缺管理。提供 Chrome 擴充功能與 iOS、Android App，免註冊，資料存在你的裝置。"
    >
      <Hero />
      <Stats />
      <main>
        <HomepageFeatures />
      </main>
      <Newsletter />
    </Layout>
  );
}
