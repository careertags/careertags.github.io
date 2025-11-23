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
        支援 104、1111、Yourator、CakeResume、LinkedIn、Indeed
        等平台看到心儀職缺，一鍵收藏並支援匯出功能，不用再手動複製貼上到 Excel
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
        透過社群協作，整理各職位從資淺到資深的技能樹與學習資源。
        從工程師、設計師、PM
        到行銷，你能快速核對自己與職缺的差距，知道該補強什麼技能
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
