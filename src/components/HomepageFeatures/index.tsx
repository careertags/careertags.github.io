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
    title: "跨平台一鍵收藏",
    Png: require("@site/static/img/save-icon.png").default,
    description: (
      <>
        保障隱私，免登入求職平台。一鍵收藏跨平台職缺（104、1111、Yourator、Cake、LinkedIn
        等平台）並支援匯出功能 ，不用再手動複製貼上
      </>
    ),
  },
  {
    title: "系統化管理投遞狀態",
    Png: require("@site/static/img/dashboard-icon.png").default,
    description: (
      <>
        視覺化看板清楚掌握求職進度（已收藏 → 已投遞 → 已讀取 → 面試中 → Offer /
        無聲卡）。為每個機會加入註記：面試筆記、薪資談判等，不再焦慮等待回覆
      </>
    ),
  },
  {
    title: "打造你的職涯知識庫",
    Png: require("@site/static/img/skill-tree-icon.png").default,
    description: (
      <>
        本地端儲存書籤，打造你的專屬職涯知識庫（支援書籍、線上課程、YouTube
        影音等），有系統記錄自己的成長。同時支援匯入匯出分享推薦學習資源
      </>
    ),
  },
];

function Feature({ title, Png, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img src={Png} className={styles.featurePng} role="img" />
      </div>
      <br />
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

function ProductShowcase(): ReactNode {
  const features = [
    {
      image: "/img/cover-1.jpg",
      title: "一鍵收藏跨平台職缺",
      description: "支援 104、1111、Yourator、Cake、LinkedIn 等平台",
    },
    {
      image: "/img/cover-2.jpg",
      title: "系統化管理投遞狀態",
      description: "視覺化看板清楚掌握求職進度",
    },
    {
      image: "/img/cover-3.jpg",
      title: "本地端儲存免登入",
      description: "隱私優先，免登入使用",
    },
    {
      image: "/img/cover-4.jpg",
      title: "支援匯入匯出好方便",
      description:
        "無痛匯入試算表筆記工具（Excel、Google Sheets 等），打造你的第二大腦",
    },
  ];

  return (
    <section className={styles.showcase}>
      <div className="container">
        <Heading as="h2" className="text--center margin-bottom--lg">
          功能特色
        </Heading>
        <div className="row">
          {features.map((feature, idx) => (
            <div key={idx} className="col col--6 margin-bottom--lg">
              <div className={styles.featureCard}>
                <img
                  src={feature.image}
                  alt={feature.title}
                  className={styles.featureImage}
                />
                <div className={styles.featureContent}>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
        <br />
        <br />
        <ProductShowcase />
      </div>
    </section>
  );
}
