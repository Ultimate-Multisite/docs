---
title: 網站規格技能
sidebar_position: 18
_i18n_hash: 7470e8d04c1f380b3dca6ba5559b34f5
---
# 網站規格功能 (Site Specification Skill)

**網站規格功能**是一種結構化的方法，用於捕捉您網站的目標、受眾和品牌識別度。這些資訊會儲存在您的 **site_brief** 記憶體中，代理（agents）會在不同工作階段參考它，從而提供一致且具備情境意識的協助。

## 什麼是網站規格？

網站規格就是記錄以下內容的過程：

- **網站目的 (Site purpose)**：您的網站是做什麼的，以及它存在的理由
- **目標受眾 (Target audience)**：誰會造訪您的網站，以及他們需要什麼
- **品牌識別度 (Brand identity)**：您的顏色、語氣和視覺風格
- **商業目標 (Business goals)**：您的網站成功的樣貌是什麼
- **內容結構 (Content structure)**：您的網站是如何組織的

這些規格會成為您的 **site_brief**，這是一個持久的記憶體，代理會使用它來了解您的網站背景。

## 為什麼要使用網站規格？

### 跨工作階段的一致性

如果沒有 site_brief，您每次開始新的工作階段，都需要重新解釋網站的目的。有了它，代理會立即了解：

- 您的網站目標和受眾
- 您的品牌顏色和語氣
- 您的內容結構
- 您的商業目標

### 更佳的建議

代理會利用您的 site_brief 來：

- 建議與您的網站目的相符的功能
- 推薦符合您目標的內容結構
- 提出與您的品牌一致的設計
- 避免建議不相容的功能

### 更快的上手速度

新的代理（或在新的工作階段中的代理）可以透過閱讀您的 site_brief 來快速掌握知識，而不是不斷提出澄清問題。

## 啟動網站規格

### 在 Theme Builder 上手流程中

當您進入 **Theme Builder onboarding flow** 時，網站規格功能會自動啟動。Setup Assistant 代理會提出問題並建立您的 site_brief。

### 手動啟動

您可以在任何時間開始網站規格：

```
"Let's define my site specification"
```

或

```
"Help me create a site brief"
```

## 網站規格流程

### 步驟 1：網站目的

代理會詢問：

```
What is your site's primary purpose?
- E-commerce store
- Blog or content site
- Portfolio or showcase
- SaaS application
- Community or forum
- Other: [describe]
```

您可以選擇一個類別，或描述您自己的目的。

### 步驟 2：目標受眾

```
Who is your primary audience?
- Consumers / general public
- Business professionals
- Developers / technical users
- Students / educators
- Other: [describe]

What are their main needs?
```

### 步驟 3：品牌識別度

```
What are your brand colors?
- Primary color: [color picker or hex code]
- Secondary color: [color picker or hex code]
- Accent color: [optional]

How would you describe your brand tone?
- Professional / corporate
- Creative / artistic
- Playful / casual
- Minimal / modern
- Warm / friendly
```

### 步驟 4：商業目標

```
What does success look like for your site?
- Generate leads
- Sell products
- Build community
- Share knowledge
- Establish authority
- Other: [describe]

What's your primary metric?
- Revenue
- User engagement
- Content reach
- Conversions
- Other
```

### 步驟 5：內容結構

```
How is your content organized?
- Flat (all content at same level)
- Hierarchical (categories and subcategories)
- Chronological (blog-style)
- Product-based (catalog)
- Other: [describe]

What content types do you use?
- Blog posts
- Product pages
- Case studies
- Documentation
- Videos
- Other
```

## 您的 site_brief 記憶體

完成網站規格後，您的資訊會以 **site_brief** 的形式儲存在您的代理記憶體中。這是一個結構化的記錄，包含：

```json
{
  "site_purpose": "E-commerce store for handmade jewelry",
  "target_audience": "Women aged 25-45, interested in sustainable fashion",
  "brand_colors": {
    "primary": "#8B4513",
    "secondary": "#D2B48C",
    "accent": "#2F4F4F"
  },
  "brand_tone": "Warm, artisanal, sustainable",
  "business_goals": ["Generate sales", "Build brand loyalty"],
  "primary_metric": "Revenue",
  "content_structure": "Product catalog with blog",
  "content_types": ["Product pages", "Blog posts", "Customer stories"]
}
```

## 查看和更新您的 site_brief

### 查看您的 site_brief

請詢問代理：

```
"Show me my site brief"
```

或

```
"What do you know about my site?"
```

代理將會顯示您儲存的規格。

### 更新您的 site_brief

如果您的網站有所發展，您可以更新它：

```
"Update my site brief: we're now targeting B2B customers"
```

或

```
"Refresh my site specification"
```

這將會使用您現有的資訊重新執行網站規格功能。

## 代理如何使用 site_brief

### 設計建議

當您要求進行設計更改時，代理會參考您的 site_brief：

```
You: "Redesign my homepage"
Agent: "Based on your site brief, you're targeting women aged 25-45
with a warm, artisanal tone. I'll create a design that emphasizes
your handmade jewelry and sustainable values."
```

### 功能建議

代理會根據您的目標建議功能：

```
You: "What features should I add?"
Agent: "For an e-commerce store focused on customer loyalty,
I'd recommend: loyalty program, customer reviews, email newsletter,
and product recommendations."
```

### 內容結構

代理會根據您的結構提出內容組織建議：

```
You: "How should I organize my blog?"
Agent: "Since you use a product catalog with blog, I'd suggest
organizing posts by product category and creating 'styling guides'
that showcase multiple products together."
```

## 最佳實踐

### 具體化

不要只說「一般受眾」，請描述您的實際受眾：

- ✓ "Women aged 25-45, interested in sustainable fashion"
- ✗ "Everyone"

### 定期更新

隨著您的網站發展，請更新您的 site_brief：

- 當您轉向新的受眾時
- 當您增加新的產品線時
- 當您的品牌識別度改變時
- 當您的商業目標轉變時

### 使用一致的術語

在不同工作階段使用相同的術語：

- ✓ 永遠說「sustainable jewelry」（不要交替使用「eco-friendly jewelry」和「green products」）
- ✓ 始終以相同的方式指稱您的受眾

### 包含背景資訊

提供有助於代理理解您決策的背景資訊：

- "We're targeting professionals who value quality over price" (我們鎖定的是重視品質而非價格的專業人士)
- "Our audience is tech-savvy and expects modern design" (我們的受眾精通科技，期待現代設計)
- "We're a bootstrapped startup, so we need cost-effective solutions" (我們是一個自籌資金的初創公司，所以需要具成本效益的解決方案)

## 與 Theme Builder Onboarding 的關係

網站規格功能整合在 **Theme Builder onboarding flow** 中。當您完成上手流程時，您提供的資訊會自動創建您的 site_brief。

如果您想獨立執行網站規格，您也可以這樣做：

- 在初始設定後，精修您的規格
- 隨著網站發展，更新您的 site_brief
- 在開始 Theme Builder 之前，建立詳細的規格

## 疑難排解

**我的 site_brief 沒有被使用**
- 確認代理是否可以存取記憶體
- 請代理「recall my site brief」（回想我的 site brief）
- 檢查您的設定中是否已啟用記憶體功能

**我想用一個新的 site_brief 從頭開始**
- 請代理：「Clear my site brief and start fresh」（清除我的 site brief 並重新開始）
- 然後再次執行網站規格功能

**代理的建議與我的 site_brief 不符**
- 請代理：「review my site brief」（審閱我的 site brief）
- 如果您的 site_brief 過時，請更新它
- 在您的請求中提供額外的背景資訊

## 下一步

定義完網站規格後：

1. **使用 Theme Builder**：根據您的 site_brief 創建客製化主題
2. **精修設計**：使用 Design System Aesthetics skill 進行詳細設計工作
3. **規劃內容**：要求代理提供內容結構建議
4. **建立功能**：要求與您的商業目標一致的功能
