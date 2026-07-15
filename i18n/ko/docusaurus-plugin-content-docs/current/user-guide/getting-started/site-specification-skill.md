---
title: 사이트 사양 기술
sidebar_position: 18
_i18n_hash: 7470e8d04c1f380b3dca6ba5559b34f5
---
# 사이트 명세 기능

**사이트 명세 기능(Site Specification skill)**은 사이트의 목표, 대상 고객, 브랜드 정체성을 체계적으로 파악하는 접근 방식입니다. 이 정보는 **site_brief** 메모리에 저장되며, 에이전트가 세션 전반에 걸쳐 이를 참조하여 일관성 있고 상황에 맞는 도움을 제공할 수 있게 합니다.

## 사이트 명세란 무엇인가요? {#what-is-site-specification}

사이트 명세는 다음 사항들을 문서화하는 과정입니다.

- **사이트 목적**: 사이트가 무엇을 하며 왜 존재하는지
- **대상 고객**: 누가 사이트를 방문하며 그들이 무엇을 필요로 하는지
- **브랜드 정체성**: 사용되는 색상, 어조, 시각적 스타일
- **비즈니스 목표**: 사이트의 성공이 어떤 모습인지
- **콘텐츠 구조**: 사이트가 어떻게 구성되어 있는지

이 명세가 바로 **site_brief**가 되며, 에이전트가 사이트의 맥락을 이해하는 데 사용하는 영구적인 메모리 역할을 합니다.

## 사이트 명세를 사용해야 하는 이유 {#why-use-site-specification}

### 세션 간 일관성 유지 {#consistency-across-sessions}

site_brief가 없다면, 새로운 세션을 시작할 때마다 사이트의 목적을 다시 설명해야 합니다. site_brief가 있으면, 에이전트는 다음 사항들을 즉시 이해합니다.

- 사이트의 목표와 대상 고객
- 브랜드 색상과 어조
- 콘텐츠 구조
- 비즈니스 목표

### 더 나은 추천 {#better-recommendations}

에이전트는 site_brief를 사용하여 다음을 수행합니다.

- 사이트 목적에 맞는 기능 제안
- 목표에 부합하는 콘텐츠 구조 추천
- 브랜드와 일관된 디자인 제안
- 호환되지 않는 기능 제안 방지

### 빠른 온보딩 {#faster-onboarding}

새로운 에이전트(또는 새로운 세션의 에이전트)는 명확히 질문을 할 필요 없이 site_brief를 읽는 것만으로 빠르게 업무에 적응할 수 있습니다.

## 사이트 명세 시작하기 {#initiating-site-specification}

### 테마 빌더 온보딩 중 {#during-theme-builder-onboarding}

사이트 명세 기능은 **테마 빌더 온보딩 흐름(Theme Builder onboarding flow)** 중에 자동으로 시작됩니다. 설정 도우미 에이전트가 질문을 하고 site_brief를 구축합니다.

### 수동 시작 {#manual-initiation}

언제든지 사이트 명세를 시작할 수 있습니다.

```
"Let's define my site specification"
```

또는

```
"Help me create a site brief"
```

## 사이트 명세 과정 {#the-site-specification-process}

### 1단계: 사이트 목적 {#step-1-site-purpose}

에이전트가 질문합니다.

```
What is your site's primary purpose?
- E-commerce store
- Blog or content site
- Portfolio or showcase
- SaaS application
- Community or forum
- Other: [describe]
```

카테고리를 선택하거나 자체 목적을 설명할 수 있습니다.

### 2단계: 대상 고객 {#step-2-target-audience}

```
Who is your primary audience?
- Consumers / general public
- Business professionals
- Developers / technical users
- Students / educators
- Other: [describe]

What are their main needs?
```

### 3단계: 브랜드 정체성 {#step-3-brand-identity}

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

### 4단계: 비즈니스 목표 {#step-4-business-goals}

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

### 5단계: 콘텐츠 구조 {#step-5-content-structure}

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

## site_brief 메모리 {#your-sitebrief-memory}

사이트 명세가 완료되면, 사용자의 정보는 에이전트 메모리에 **site_brief**로 저장됩니다. 여기에는 다음을 포함하는 구조화된 기록이 있습니다.

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

## site_brief 보기 및 업데이트하기 {#viewing-and-updating-your-sitebrief}

### site_brief 보기 {#view-your-sitebrief}

에이전트에게 다음을 요청하세요.

```
"Show me my site brief"
```

또는

```
"What do you know about my site?"
```

에이전트가 저장된 명세를 표시해 줄 것입니다.

### site_brief 업데이트하기 {#update-your-sitebrief}

사이트가 진화함에 따라, 명세를 업데이트할 수 있습니다.

```
"Update my site brief: we're now targeting B2B customers"
```

또는

```
"Refresh my site specification"
```

이렇게 하면 기존 정보를 시작점으로 사용하여 사이트 명세 기능이 다시 실행됩니다.

## 에이전트가 site_brief를 사용하는 방법 {#how-agents-use-sitebrief}

### 디자인 추천 {#design-recommendations}

디자인 변경을 요청할 때, 에이전트는 site_brief를 참조합니다.

```
You: "Redesign my homepage"
Agent: "Based on your site brief, you're targeting women aged 25-45
with a warm, artisanal tone. I'll create a design that emphasizes
your handmade jewelry and sustainable values."
```

### 기능 제안 {#feature-suggestions}

에이전트는 목표에 맞는 기능을 제안합니다.

```
You: "What features should I add?"
Agent: "For an e-commerce store focused on customer loyalty,
I'd recommend: loyalty program, customer reviews, email newsletter,
and product recommendations."
```

### 콘텐츠 구조 {#content-structure}

에이전트는 구조를 기반으로 콘텐츠 구성을 제안합니다.

```
You: "How should I organize my blog?"
Agent: "Since you use a product catalog with blog, I'd suggest
organizing posts by product category and creating 'styling guides'
that showcase multiple products together."
```

## 모범 사례 {#best-practices}

### 구체적으로 작성하세요 {#be-specific}

"일반적인 대상 고객" 대신 실제 대상 고객을 설명하세요.

- ✓ "Women aged 25-45, interested in sustainable fashion"
- ✗ "Everyone"

### 정기적으로 업데이트하세요 {#update-regularly}

사이트가 진화함에 따라 site_brief를 업데이트하세요.

- 새로운 대상 고객으로 전환할 때
- 새로운 제품 라인을 추가할 때
- 브랜드 정체성이 변경될 때
- 비즈니스 목표가 바뀔 때

### 일관된 용어를 사용하세요 {#use-consistent-terminology}

세션 전반에 걸쳐 같은 용어를 사용하세요.

- ✓ 항상 "sustainable jewelry"라고 말하세요 ( "eco-friendly jewelry"나 "green products"는 사용하지 마세요)
- ✓ 대상 고객을 항상 같은 방식으로 언급하세요

### 맥락을 포함하세요 {#include-context}

에이전트가 사용자의 결정을 이해하는 데 도움이 되는 배경 정보를 제공하세요.

- "저희는 가격보다 품질을 중요하게 생각하는 전문가를 대상으로 합니다."
- "저희 고객은 기술에 익숙하며 현대적인 디자인을 기대합니다."
- "저희는 자력으로 운영하는 스타트업이므로 비용 효율적인 솔루션이 필요합니다."

## 테마 빌더 온보딩과의 관계 {#relationship-to-theme-builder-onboarding}

사이트 명세 기능은 **테마 빌더 온보딩 흐름**에 통합되어 있습니다. 온보딩을 완료하면, 제공한 정보로 site_brief가 자동으로 생성됩니다.

원한다면 독립적으로 사이트 명세를 실행할 수도 있습니다.

- 초기 설정 후 명세를 다듬고 싶을 때
- 사이트가 진화함에 따라 site_brief를 업데이트하고 싶을 때
- 테마 빌더를 시작하기 전에 상세한 명세를 만들고 싶을 때

## 문제 해결 {#troubleshooting}

**site_brief가 사용되지 않아요**
- 에이전트가 메모리에 접근할 수 있는지 확인하세요.
- 에이전트에게 "recall my site brief"라고 요청해 보세요.
- 설정에서 메모리가 활성화되어 있는지 확인하세요.

**새로운 site_brief로 처음부터 시작하고 싶어요**
- 에이전트에게 "Clear my site brief and start fresh"라고 요청하세요.
- 그런 다음 사이트 명세를 다시 실행하세요.

**에이전트가 site_brief와 맞지 않는 추천을 해요**
- 에이전트에게 "review my site brief"라고 요청하세요.
- site_brief가 오래되었다면 업데이트하세요.
- 요청에 추가적인 맥락을 제공하세요.

## 다음 단계 {#next-steps}

사이트 명세를 정의한 후:

1. **테마 빌더 사용**: site_brief를 기반으로 맞춤 테마를 만드세요.
2. **디자인 다듬기**: 상세한 디자인 작업을 위해 디자인 시스템 미학(Design System Aesthetics) 기능을 사용하세요.
3. **콘텐츠 계획**: 에이전트에게 콘텐츠 구조 추천을 요청하세요.
4. **기능 구축**: 비즈니스 목표에 맞는 기능을 요청하세요.
