import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  description: ReactNode;
};

// 從設定目標、找出缺口，到練習並累積成可以說的故事。
const FeatureList: FeatureItem[] = [
  {
    title: "🎯 我的目標",
    description: (
      <>
        社會新鮮人、正在找工作、在職想轉職、升遷加薪、新手主管、創業副業……選出你現在的狀態，首頁就會推薦對應的主題和下一步
      </>
    ),
  },
  {
    title: "🧭 技能缺口分析",
    description: (
      <>
        選一個目標職位，或用收藏的職缺，看出這份工作最看重哪些技能、你已經練過哪些、還差哪幾項
      </>
    ),
  },
  {
    title: "📝 實戰日誌",
    description: (
      <>
        每天 10 分鐘看完一則精選影片或 Podcast，挑一個行動計劃實際去做，再回來記下情境、結果和調整
      </>
    ),
  },
  {
    title: "⭐ 職場故事",
    description: (
      <>
        把一次實戰經驗整理成 STAR 故事（情境、任務、行動、結果），面試、升遷、自評時就有具體例子可說
      </>
    ),
  },
];

function Feature({ title, description }: FeatureItem) {
  return (
    <div className={clsx("col col--3")}>
      <div className={styles.glassCard}>
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
        "在 104、Yourator、Cake、LinkedIn 瀏覽職缺時，直接點擊瀏覽器擴充功能即可自動擷取職位、公司、薪資等資訊並儲存",
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
              idx % 2 === 1 && styles.showcaseRowReverse,
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
            <span className="ct-section-badge">全新功能</span>
            <Heading as="h2">從設定目標，到有故事可說</Heading>
            <p className={styles.featuresLead}>
              選好你的職涯目標，CareerTags
              幫你找出技能缺口、每天練一點，再把練習累積成面試和升遷時用得上的職場故事
            </p>
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
