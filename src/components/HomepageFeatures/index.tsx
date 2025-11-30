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
        免登入求職平台，一鍵收藏跨平台職缺（104、1111、Yourator、Cake、LinkedIn、Indeed
        等平台）並支援匯出功能 ，不用再手動複製貼上到 Excel/Notion
      </>
    ),
  },
  {
    title: "系統化管理投遞狀態",
    Png: require("@site/static/img/dashboard-icon.png").default,
    description: (
      <>
        已收藏 → 已投遞 → 已讀取 → 面試中 → Offer /
        無聲卡，視覺化看板清楚追蹤每個職缺的進度。為每個機會加入註記：面試心得、公司觀察、薪資談判等
      </>
    ),
  },
  {
    title: "你的職涯知識庫",
    Png: require("@site/static/img/skill-tree-icon.png").default,
    description: (
      <>
        一鍵收藏書籍、課程、影音等連結，有系統記錄自己的成長，同時透過社群協作相互分享推薦學習資源。
        支援匯入推薦學習資源，打造你的專屬職涯知識庫
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

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
