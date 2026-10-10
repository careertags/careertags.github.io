import type { CSSProperties, ReactNode } from "react";
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

// LEAP, the method behind the flow: what each part of the product is for.
const MethodList: (FeatureItem & { en: string })[] = [
  {
    title: "學習",
    en: "Learn",
    icon: "book",
    description: (
      <>
        透過精選影片與 Podcast 的重點摘要，理解一項職場能力與它的應用方法。
      </>
    ),
  },
  {
    title: "實踐",
    en: "Execute",
    icon: "repeat",
    description: (
      <>
        把所學轉化為工作中的具體行動，每天完成一個小練習，例如在會議中先釐清需求，或練習給出建設性回饋。
      </>
    ),
  },
  {
    title: "反思",
    en: "Assess",
    icon: "chart",
    description: (
      <>
        回顧行動的結果、辨識盲點，在實戰日誌記下情境與下次調整方向，找出可以做得更好的地方。
      </>
    ),
  },
  {
    title: "證明",
    en: "Prove",
    icon: "award",
    description: (
      <>
        把真實的工作經驗整理成 STAR 故事，累積面試、升遷與績效考核時能具體呈現的能力證據。
      </>
    ),
  },
];

const CompareRows: [string, string][] = [
  ["看完一堂課", "學完後採取一個行動"],
  ["收藏一支影片", "把知識用在真實情境"],
  ["記住一個方法", "實踐並反思方法的效果"],
  ["完成學習時數", "累積實戰案例與成果"],
  ["背好面試答案", "從真實經驗整理 STAR 故事"],
];

function Method(): ReactNode {
  return (
    <section className={styles.method}>
      <div className="container">
        <div className={styles.featuresPreamble}>
          <span className="ct-section-badge">核心方法</span>
          <Heading as="h2">LEAP 職涯躍升法</Heading>
          <p className={styles.featuresLead}>
            軟實力不是看會的，是練出來的。LEAP 是「躍升」的意思：每天 15 分鐘是開始行動的門檻，真正的成長，來自持續實踐、誠實反思，以及一次次累積下來的成果
          </p>
        </div>
        <div className="row">
          {MethodList.map(({ en, ...props }, idx) => (
            <div
              key={idx}
              className={clsx("col", "col--3", styles.featureCol, styles.methodCol)}
            >
              <div className={styles.glassCard}>
                <div className={styles.cardHead}>
                  <div className={styles.iconWrap}>
                    <Icon name={props.icon} size={26} className={styles.featureIcon} />
                  </div>
                  <span className={styles.stepNo}>
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className={styles.cardTitle}>
                  {props.title} <span className={styles.methodEn}>{en}</span>
                </h3>
                <p className={styles.cardDesc}>{props.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.compare}>
          <Heading as="h3" className={styles.compareTitle}>
            不只學會，更要做得到、說得出
          </Heading>
          <table className={styles.compareTable}>
            <thead>
              <tr>
                <th>一般學習平台</th>
                <th>CareerTags</th>
              </tr>
            </thead>
            <tbody>
              {CompareRows.map(([usual, ours]) => (
                <tr key={usual}>
                  <td>{usual}</td>
                  <td>{ours}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className={styles.compareNote}>
            CareerTags 不取代線上課程、影片、Podcast 或閱讀，而是連接「學到的知識」與「實際做出的改變」。
          </p>
        </div>
      </div>
    </section>
  );
}

// The twelve topics of the resource library, as the data API names them,
// with how many videos and podcast episodes each holds (data-api 2.8.0).
const TopicList: { title: string; subtitle: string; accent: string; count: number }[] = [
  { title: "溝通與協作", subtitle: "清楚表達、說服他人，跨部門把事做成", accent: "#4F7CFF", count: 24 },
  { title: "職涯發展", subtitle: "找到方向、累積職涯資本，走得長遠", accent: "#00A88F", count: 18 },
  { title: "領導與管理", subtitle: "帶人授權、給予回饋，打造團隊文化", accent: "#F2C94C", count: 19 },
  { title: "思考與決策", subtitle: "拆解問題、批判思考，做出好的判斷", accent: "#D6457A", count: 24 },
  { title: "生產力與習慣", subtitle: "管好時間與專注，養成習慣、推進專案", accent: "#8BC34A", count: 19 },
  { title: "心態與成長", subtitle: "培養韌性與主動性，認識自己與價值觀", accent: "#F2994A", count: 15 },
  { title: "求職與轉職", subtitle: "寫好履歷、面試談薪，順利轉換跑道", accent: "#9B51E0", count: 19 },
  { title: "商業與產品", subtitle: "商業與產品思維、行銷，起步創業副業", accent: "#EB5757", count: 21 },
  { title: "AI 與數位素養", subtitle: "提示技巧、AI Agent 協作與資料分析", accent: "#2D9CDB", count: 18 },
  { title: "身心健康", subtitle: "紓解壓力、預防倦怠，顧好睡眠與體能", accent: "#00ACC1", count: 15 },
  { title: "人際關係", subtitle: "經營家人、伴侶與友誼，建立真實連結", accent: "#FF8A80", count: 14 },
  { title: "投資與理財", subtitle: "記帳預算、儲蓄投資，把收入變成資產", accent: "#219653", count: 14 },
];

function Topics(): ReactNode {
  return (
    <section className={styles.topics}>
      <div className="container">
        <div className={styles.featuresPreamble}>
          <span className="ct-section-badge">學習主題</span>
          <Heading as="h2">12 大主題，涵蓋職場與生活</Heading>
          <p className={styles.featuresLead}>
            <span className={styles.phrase}>
              精選 TED、Harvard Business Review、Y Combinator 等英文經典影片與 Podcast，
            </span>
            <span className={styles.phrase}>
              目前收錄 140 多則、涵蓋 31 項職場技能，
            </span>
            <span className={styles.phrase}>每則附中文重點摘要、精華與行動計劃。</span>
          </p>
        </div>
        <ol className={styles.topicGrid}>
          {TopicList.map((topic, idx) => (
            <li
              key={topic.title}
              className={styles.topicCard}
              style={{ "--topic-accent": topic.accent } as CSSProperties}
            >
              <div className={styles.topicHead}>
                <span className={styles.topicNo}>
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span className={styles.topicCount}>{topic.count} 則</span>
              </div>
              <h3 className={styles.topicTitle}>{topic.title}</h3>
              <p className={styles.topicSubtitle}>
                {topic.subtitle.split(/(?<=[，、])/).map((part) => (
                  <span key={part} className={styles.phrase}>
                    {part}
                  </span>
                ))}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function ProductShowcase(): ReactNode {
  const features = [
    {
      image: "/img/cover-4.jpg",
      title: "12 大主題精選內容",
      description:
        "依主題瀏覽精選影片與 Podcast，先讀重點摘要與精華，再挑一個行動計劃開始練習。完成的行動會記錄在學習紀錄中。",
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
      <Method />
      <section className={styles.features}>
        <div className="container">
          <div className={styles.featuresPreamble}>
            <span className="ct-section-badge">使用流程</span>
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
      <Topics />
      <ProductShowcase />
    </>
  );
}
