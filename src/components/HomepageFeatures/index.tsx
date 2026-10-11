import type { CSSProperties, ReactNode } from "react";
import Heading from "@theme/Heading";
import Icon, { type IconName } from "@site/src/components/Icon";
import { CHROME_URL } from "@site/src/constants";
import styles from "./styles.module.css";

type Item = { icon: IconName; title: string; text: string };

// LEAP, the method behind the product.
const Method: (Item & { en: string })[] = [
  {
    icon: "book",
    title: "學習",
    en: "Learn",
    text: "透過精選影片與 Podcast 的重點摘要，理解一項職場能力與它的應用方法。",
  },
  {
    icon: "repeat",
    title: "實踐",
    en: "Execute",
    text: "把所學轉化為工作中的具體行動，每天完成一個小練習，例如在會議中先釐清需求，或練習給出建設性回饋。",
  },
  {
    icon: "chart",
    title: "反思",
    en: "Assess",
    text: "回顧行動的結果、辨識盲點，在實踐日誌記下情境與下次調整方向，找出可以做得更好的地方。",
  },
  {
    icon: "award",
    title: "證明",
    en: "Prove",
    text: "把真實的工作經驗整理成 STAR 故事，累積面試、升遷與績效考核時能具體呈現的能力證據。",
  },
];

const Compare: [string, string][] = [
  ["看完一堂課", "學完後採取一個行動"],
  ["收藏一支影片", "把知識用在真實情境"],
  ["記住一個方法", "實踐並反思方法的效果"],
  ["完成學習時數", "累積實戰案例與成果"],
  ["背好面試答案", "從真實經驗整理 STAR 故事"],
];

function MethodSection() {
  return (
    <section className="ct-section">
      <div className="container">
        <div className="ct-section-head">
          <span className="ct-eyebrow">核心方法</span>
          <Heading as="h2">LEAP 職涯躍升法</Heading>
          <p>
            軟實力不是看會的，是練出來的。每天 15
            分鐘是開始行動的門檻，真正的成長，來自持續實踐、誠實反思，以及一次次累積下來的成果。
          </p>
        </div>
        <ol className={styles.method}>
          {Method.map((m, i) => (
            <li key={m.en} className={styles.methodItem}>
              <div className={styles.methodHead}>
                <Icon name={m.icon} size={22} className={styles.icon} />
                <span className={styles.index}>
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className={styles.itemTitle}>
                {m.title}
                <span className={styles.methodEn}>{m.en}</span>
              </h3>
              <p className={styles.itemText}>{m.text}</p>
            </li>
          ))}
        </ol>

        <div className={styles.compare}>
          <h3 className={styles.compareTitle}>不只學會，更要做得到、說得出</h3>
          <table className={styles.compareTable}>
            <thead>
              <tr>
                <th>一般學習平台</th>
                <th>CareerTags</th>
              </tr>
            </thead>
            <tbody>
              {Compare.map(([usual, ours]) => (
                <tr key={usual}>
                  <td>{usual}</td>
                  <td>{ours}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className={styles.compareNote}>
            CareerTags 不取代線上課程、影片、Podcast
            或閱讀，而是連接「學到的知識」與「實際做出的改變」。
          </p>
        </div>
      </div>
    </section>
  );
}

// The product's flow, in order, from a goal to stories worth telling.
const Flow: Item[] = [
  {
    icon: "target",
    title: "選擇職涯目標",
    text: "從社會新鮮人、轉職、重返職場、升遷加薪到新手主管等九種情境選擇目前的階段，並可指定產品經理、軟體工程師、行銷企劃等 11 種目標職位。",
  },
  {
    icon: "compass",
    title: "技能分析",
    text: "依目標職位或收藏的職缺列出所需技能，對照你的學習紀錄，標示已學習、學習中與待加強。",
  },
  {
    icon: "book",
    title: "推薦學習資源",
    text: "針對待加強的技能推薦精選影片與 Podcast，每則附重點摘要、精華內容與三項行動計劃。",
  },
  {
    icon: "bell",
    title: "排定練習",
    text: "從行動計劃挑一項，排定在哪個場合、什麼時間練習。時間到了會通知你，並附上這則內容的重點。",
  },
  {
    icon: "notebook",
    title: "實踐日誌",
    text: "練習後記下結果、情境與下次的調整。日期與時間可以補記和修改，連續學習天數與每週紀錄呈現你的節奏。",
  },
  {
    icon: "award",
    title: "職場故事",
    text: "把實踐日誌整理成 STAR 架構（情境、任務、行動、結果），記下發生時間，面試、升遷與年度考核時直接引用。",
  },
  {
    icon: "growth",
    title: "持續成長",
    text: "職涯階段改變時，更新目標與目標職位，重新檢視技能缺口，進入下一輪的學習與實踐。",
  },
];

function FlowSection() {
  return (
    <section className="ct-section ct-section--surface">
      <div className="container">
        <div className="ct-section-head">
          <span className="ct-eyebrow">使用流程</span>
          <Heading as="h2">從目標到成果的職涯準備流程</Heading>
          <p>
            選定目標後，CareerTags
            找出技能缺口、推薦對應內容，再透過排定練習與實踐日誌累積經驗，最後整理成能在面試與考核中說出口的故事。
          </p>
        </div>
        <ol className={styles.flow}>
          {Flow.map((step, i) => (
            <li key={step.title} className={styles.flowItem}>
              <span className={styles.flowIndex}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className={styles.itemTitle}>
                  <Icon name={step.icon} size={20} className={styles.icon} />
                  {step.title}
                </h3>
                <p className={styles.itemText}>{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

// The twelve topics of the resource library, as the data API names them,
// in the app's colours. Each holds 30 items (data-api 2.13.0).
const Topics: { title: string; subtitle: string; accent: string }[] = [
  { title: "溝通與協作", subtitle: "清楚表達、說服他人，跨部門把事做成", accent: "#4F7CFF" },
  { title: "職涯發展", subtitle: "找到方向、累積職涯資本，走得長遠", accent: "#00A88F" },
  { title: "領導與管理", subtitle: "帶人授權、給予回饋，打造團隊文化", accent: "#F2C94C" },
  { title: "思考與決策", subtitle: "拆解問題、批判思考，做出好的判斷", accent: "#D6457A" },
  { title: "生產力與習慣", subtitle: "管好時間與專注，養成習慣、推進專案", accent: "#8BC34A" },
  { title: "心態與成長", subtitle: "培養韌性與主動性，認識自己與價值觀", accent: "#F2994A" },
  { title: "求職與轉職", subtitle: "寫好履歷、面試談薪，順利轉換跑道", accent: "#9B51E0" },
  { title: "商業與產品", subtitle: "商業與產品思維、行銷，起步創業副業", accent: "#EB5757" },
  { title: "AI 與數位素養", subtitle: "提示技巧、AI Agent 協作與資料分析", accent: "#2D9CDB" },
  { title: "身心健康", subtitle: "紓解壓力、預防倦怠，顧好睡眠與體能", accent: "#00ACC1" },
  { title: "人際關係", subtitle: "經營家人、伴侶與友誼，建立真實連結", accent: "#FF8A80" },
  { title: "投資與理財", subtitle: "記帳預算、儲蓄投資，把收入變成資產", accent: "#219653" },
];

function TopicsSection() {
  return (
    <section className="ct-section">
      <div className="container">
        <div className="ct-section-head">
          <span className="ct-eyebrow">學習主題</span>
          <Heading as="h2">12 大主題，涵蓋職場與生活</Heading>
          <p>
            精選 TED、Harvard Business Review、Big Think、Hidden Brain、Y
            Combinator 等英文影片與 Podcast，目前收錄 360 則、涵蓋 31
            項職場技能。每則附中文重點摘要、精華內容與行動計劃，影片與節目本身維持原始來源播放。
          </p>
        </div>
        <ol className={styles.topics}>
          {Topics.map((topic, i) => (
            <li
              key={topic.title}
              className={styles.topic}
              style={{ "--topic-accent": topic.accent } as CSSProperties}
            >
              <div className={styles.topicHead}>
                <span className={styles.topicIndex}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className={styles.topicCount}>30 則</span>
              </div>
              <h3 className={styles.topicTitle}>{topic.title}</h3>
              <p className={styles.topicText}>
                {topic.subtitle.split(/(?<=[，、])/).map((part) => (
                  <span key={part} className="ct-phrase">
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

const AppFeatures: Item[] = [
  {
    icon: "play",
    title: "影片與 Podcast",
    text: "YouTube 影片在 App 內播放並顯示字幕，Podcast 可背景播放、快轉與調整速度。",
  },
  {
    icon: "shuffle",
    title: "扭蛋",
    text: "不知道從哪裡開始時，隨機挑一則今天就學。",
  },
  {
    icon: "bell",
    title: "排定練習與每日提醒",
    text: "為行動計劃排定練習時間，或設定每天固定時間、指定主題的學習提醒。",
  },
  {
    icon: "notebook",
    title: "實踐日誌與職場故事",
    text: "記下每次實踐並可編輯日期時間，整理成 STAR 故事，匯出 Markdown 或 CSV。",
  },
  {
    icon: "briefcase",
    title: "職缺收藏",
    text: "在 App 內瀏覽 104、Yourator、Cake、LinkedIn 職缺直接擷取，也能從分享選單或手動加入。",
  },
  {
    icon: "globe",
    title: "繁體中文與英文",
    text: "介面與每則內容的摘要、精華和行動計劃，都有兩種語言。",
  },
];

const ExtensionFeatures: Item[] = [
  {
    icon: "bookmark",
    title: "一鍵儲存職缺",
    text: "在 104、Yourator、Cake、LinkedIn 的職缺頁面，自動帶入職位、公司、地點與薪資。",
  },
  {
    icon: "board",
    title: "職缺看板",
    text: "看板與列表兩種檢視，拖曳卡片更新狀態：想投、已投遞、已讀取、面試中、錄取、未錄取。",
  },
  {
    icon: "compass",
    title: "技能分析",
    text: "從收藏的職缺讀出所需技能，標示待加強的項目，並推薦對應的學習內容。",
  },
  {
    icon: "download",
    title: "CSV 匯入與匯出",
    text: "匯入時可以略過重複或更新既有職缺，並先自動備份。",
  },
  {
    icon: "book",
    title: "學習與紀錄",
    text: "同樣的 12 大主題內容、行動計劃、實踐日誌與職場故事，在瀏覽器裡也能使用。",
  },
];

function FeatureList({ items }: { items: Item[] }) {
  return (
    <ul className={styles.featureList}>
      {items.map((f) => (
        <li key={f.title} className={styles.feature}>
          <Icon name={f.icon} size={20} className={styles.icon} />
          <div>
            <h4 className={styles.featureTitle}>{f.title}</h4>
            <p className={styles.itemText}>{f.text}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

function ProductsSection() {
  return (
    <section className="ct-section ct-section--surface">
      <div className="container">
        <div className="ct-section-head">
          <span className="ct-eyebrow">產品</span>
          <Heading as="h2">手機上學習與練習，瀏覽器裡管理求職</Heading>
          <p>
            App 與 Chrome
            擴充功能使用同一套內容與方法。通勤時在手機上學一則、排定練習；找工作時在瀏覽器收藏職缺、看技能缺口。
          </p>
        </div>
        <div className={styles.products}>
          <article className={styles.product}>
            <header className={styles.productHead}>
              <Icon name="device" size={22} className={styles.icon} />
              <div>
                <h3 className={styles.productTitle}>iOS 與 Android App</h3>
                <p className={styles.productStatus}>即將上線</p>
              </div>
            </header>
            <FeatureList items={AppFeatures} />
          </article>
          <article className={styles.product}>
            <header className={styles.productHead}>
              <Icon name="globe" size={22} className={styles.icon} />
              <div>
                <h3 className={styles.productTitle}>Chrome 擴充功能</h3>
                <p className={styles.productStatus}>
                  已上架 Chrome 線上應用程式商店
                </p>
              </div>
            </header>
            <FeatureList items={ExtensionFeatures} />
            <a
              href={CHROME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ct-button ct-button--primary"
            >
              免費安裝
              <Icon name="arrow" size={18} />
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}

const Privacy: Item[] = [
  {
    icon: "lock",
    title: "不需要帳號",
    text: "打開就能使用，不必註冊或登入。",
  },
  {
    icon: "device",
    title: "資料留在你的裝置",
    text: "收藏、職缺、實踐日誌與職場故事，都存在你的手機或瀏覽器裡。",
  },
  {
    icon: "download",
    title: "隨時帶走",
    text: "職缺可以匯出成 CSV，實踐日誌與職場故事可以匯出成 Markdown 或 CSV。",
  },
];

function PrivacySection() {
  return (
    <section className="ct-section">
      <div className="container">
        <div className="ct-section-head">
          <span className="ct-eyebrow">隱私</span>
          <Heading as="h2">免註冊，資料存在你的裝置</Heading>
        </div>
        <ul className={styles.privacy}>
          {Privacy.map((p) => (
            <li key={p.title} className={styles.feature}>
              <Icon name={p.icon} size={20} className={styles.icon} />
              <div>
                <h3 className={styles.featureTitle}>{p.title}</h3>
                <p className={styles.itemText}>{p.text}</p>
              </div>
            </li>
          ))}
        </ul>
        <p className={styles.privacyNote}>
          Chrome
          擴充功能可提供匿名使用統計，只包含使用了哪些功能，不含任何文字、網址或職缺內容，可在「我的目標」頁面關閉。詳見
          <a href="/privacy">隱私權政策</a>。
        </p>
      </div>
    </section>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <>
      <MethodSection />
      <FlowSection />
      <TopicsSection />
      <ProductsSection />
      <PrivacySection />
    </>
  );
}
