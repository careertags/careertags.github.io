import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Png?: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "一鍵收藏跨平台職缺和學習資源",
    Png: require("@site/static/img/save-icon.png").default,
    description: (
      <>
        保障隱私，免登入求職平台。一鍵收藏跨平台職缺和學習資源並支援匯出功能，不用再手動複製貼上
      </>
    ),
  },
  {
    title: "系統化管理投遞狀態和學習進度",
    Png: require("@site/static/img/dashboard-icon.png").default,
    description: (
      <>
        視覺化看板清楚掌握投遞狀態和學習進度。為每筆書籤加入筆記和標籤，不再因為資訊爆炸感到焦慮內耗
      </>
    ),
  },
  {
    title: "打造你的職涯知識庫",
    Png: require("@site/static/img/skill-tree-icon.png").default,
    description: (
      <>
        本地端儲存書籤，打造你的專屬職涯知識庫，有系統記錄自己的成長。同時支援匯入匯出分享學習資源
      </>
    ),
  },
];

function Feature({ title, Png, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className={styles.glassCard}>
        <div className={styles.iconWrap}>
          <img src={Png} className={styles.featurePng} role="img" alt={title} />
        </div>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDesc}>{description}</p>
      </div>
    </div>
  );
}

function ProductShowcase(): ReactNode {
  const features = [
    {
      image: "/img/cover-1.jpg",
      title: "✅ 一鍵收藏跨平台職缺",
      description:
        "瀏覽跨平台職缺時，直接點擊瀏覽器擴充功能即可自動擷取職位、公司、薪資等資訊並儲存",
    },
    {
      image: "/img/cover-2.jpg",
      title: "📋 視覺化看板，系統化管理你的求職進度",
      description:
        "以看板或列表模式管理所有職缺，拖曳更新應徵狀態：已收藏 → 已投遞 → 已讀取 → 面試中 → 收到 Offer / 無聲卡",
    },
    {
      image: "/img/cover-3.jpg",
      title: "📚 一鍵打造你的個人成長學習知識庫",
      description:
        "收藏 YouTube 影片、線上課程、書籍、Podcast、文章等，建立集合分類（如「PM 學習」、「面試準備」），追蹤學習進度",
    },
    {
      image: "/img/cover-4.jpg",
      title: "🔍 探索推薦精選職涯成長學習資源",
      description:
        "內建職涯發展、個人成長、職場軟實力、AI 應用、求職轉職等分類的精選學習資源，幫助你持續進步",
    },
    {
      image: "/img/cover-5.jpg",
      title: "📤 支援本地端資料匯入匯出安全又放心",
      description: "支援 CSV 匯出備份職缺，輕鬆轉移和分享資料",
    },
  ];

  return (
    <section className={styles.showcase}>
      <div className="container">
        <div className={styles.sectionLabel}>
          <span className="ct-section-badge">功能特色</span>
          <Heading as="h2">一個工具，搞定職涯成長</Heading>
        </div>
        {features.map((feature, idx) => (
          <div
            key={idx}
            className={clsx(
              styles.showcaseRow,
              idx % 2 === 1 && styles.showcaseRowReverse
            )}
          >
            <div className={styles.showcaseImageWrap}>
              <img
                src={feature.image}
                alt={feature.title}
                className={styles.showcaseImage}
              />
            </div>
            <div className={styles.showcaseTextWrap}>
              <h3 className={styles.showcaseTitle}>{feature.title}</h3>
              <p className={styles.showcaseDesc}>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <>
      <section className={styles.features}>
        <div className="container">
          <div className={styles.featuresPreamble}>
            <span className="ct-section-badge">核心優勢</span>
            <Heading as="h2">為何選擇 CareerTags？</Heading>
          </div>
          <div className="row">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
      <ProductShowcase />
    </>
  );
}

