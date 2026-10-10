import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import Icon, { type IconName } from "@site/src/components/Icon";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  icon: IconName;
  description: ReactNode;
};

// The product's flow, in order: goal, skills, resources, practice, records,
// stories, then growing on from there. The last step spans the row.
const FeatureList: FeatureItem[] = [
  {
    title: "選擇職涯目標",
    icon: "target",
    description: (
      <>
        從求職、轉職、重返職場、升遷到新任主管等九種情境中選擇目前階段，並可指定目標職位。
      </>
    ),
  },
  {
    title: "技能分析",
    icon: "compass",
    description: (
      <>
        依目標職位或已收藏的職缺，比對所需技能與既有練習紀錄，找出待加強的項目。
      </>
    ),
  },
  {
    title: "推薦學習資源",
    icon: "book",
    description: (
      <>
        針對待加強的技能與目前階段，推薦對應主題的精選影片與 Podcast，每則附重點摘要與行動計劃。
      </>
    ),
  },
  {
    title: "定期練習",
    icon: "repeat",
    description: (
      <>
        每天 15 分鐘，選定行動計劃並實際執行。每日提醒協助你維持固定的練習節奏。
      </>
    ),
  },
  {
    title: "學習紀錄",
    icon: "chart",
    description: (
      <>
        記錄每次練習的情境、結果與調整方向，累積連續學習天數，掌握自己的成長軌跡。
      </>
    ),
  },
  {
    title: "職場故事",
    icon: "award",
    description: (
      <>
        將練習成果整理為 STAR 架構（情境、任務、行動、結果），在面試、升遷與年度考核時提出具體案例。
      </>
    ),
  },
  {
    title: "持續成長",
    icon: "growth",
    description: (
      <>
        職涯階段改變時，隨時更新目標與目標職位，重新檢視技能缺口，讓學習與練習持續累積，進入下一輪成長。
      </>
    ),
  },
];

function Feature({
  title,
  icon,
  description,
  step,
  wide,
}: FeatureItem & { step: number; wide?: boolean }) {
  return (
    <div
      className={clsx(
        "col",
        wide ? "col--12" : "col--4",
        styles.featureCol,
        wide && styles.featureColWide,
      )}
    >
      <div className={clsx(styles.glassCard, wide && styles.glassCardWide)}>
        <div className={styles.cardHead}>
          <div className={styles.iconWrap}>
            <Icon name={icon} size={26} className={styles.featureIcon} />
          </div>
          <span className={styles.stepNo}>
            {String(step).padStart(2, "0")}
          </span>
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
      image: "/img/cover-4.jpg",
      title: "12 大主題精選內容",
      description:
        "涵蓋溝通與協作、職涯發展、領導與管理、思考與決策、AI 與數位素養、身心健康、投資與理財等主題。精選影片與 Podcast，每則皆附重點摘要與行動計劃。",
    },
    {
      image: "/img/cover-3.jpg",
      title: "學習紀錄與每日提醒",
      description:
        "收藏內容、勾選行動計劃、撰寫實戰日誌，搭配連續學習天數與每日提醒，建立穩定的學習習慣。",
    },
    {
      image: "/img/cover-1.jpg",
      title: "跨平台職缺收藏",
      description:
        "支援 104、Yourator、Cake 與 LinkedIn。瀏覽職缺時點擊擴充功能，即可自動擷取職位、公司與薪資資訊。",
    },
    {
      image: "/img/cover-2.jpg",
      title: "職缺看板",
      description:
        "以看板或列表管理應徵進度，從收藏、投遞、面試到錄取一目了然。每個職缺皆可檢視所需技能、待加強項目與相關的職場故事。",
    },
    {
      image: "/img/cover-5.jpg",
      title: "資料儲存於本機",
      description:
        "無需註冊或登入，所有資料皆儲存在你的裝置上。職缺紀錄支援 CSV 匯出與匯入。",
    },
  ];



  return (
    <section className={styles.showcase}>
      <div className="container">
        <div className={styles.sectionLabel}>
          <span className="ct-section-badge">功能特色</span>
          <Heading as="h2">學習與求職，在同一個地方管理</Heading>
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
            <span className="ct-section-badge">核心功能</span>
            <Heading as="h2">從目標到成果的職涯準備流程</Heading>
            <p className={styles.featuresLead}>
              選擇職涯目標後，CareerTags
              會分析技能缺口並推薦對應的學習資源，透過定期練習與學習紀錄累積實戰經驗，整理成可以在面試與考核中引用的職場故事，並隨著職涯發展持續成長。
            </p>
          </div>
          <div className="row">
            {FeatureList.map((props, idx) => (
              <Feature
                key={idx}
                step={idx + 1}
                wide={idx === FeatureList.length - 1}
                {...props}
              />
            ))}
          </div>
        </div>
      </section>
      <ProductShowcase />
    </>
  );
}
