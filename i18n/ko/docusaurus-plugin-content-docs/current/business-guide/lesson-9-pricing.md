---
title: '제9강: 수익을 위한 가격 책정'
sidebar_position: 10
_i18n_hash: 0f58d92d3effcc1ffc1f62104d21cdcc
---
# Lesson 9: 수익을 위한 가격 책정 {#lesson-9-pricing-for-profit}

Lesson 5에서 FitSite 플랜의 초기 가격을 설정했습니다. 이제 수익을 늘리고, 업그레이드를 장려하며, 이탈률을 줄이는 기술을 사용하여 가격 전략을 다듬어 보겠습니다.

## 어디까지 진행했나요 {#where-we-left-off}

FitSite에는 플랜, 템플릿, 결제 과정, 브랜딩, 온보딩 기능이 갖춰졌습니다. 초기 가격은 월 $49/$99/$199였습니다. 이제 이 가격들이 더 열심히 일하도록 만들어야 합니다.

## 틈새 플랫폼을 위한 가격 책정 원칙 {#pricing-principles-for-niche-platforms}

### 비용이 아닌 가치에 기반하여 가격 책정하기 {#price-on-value-not-cost}

호스팅 비용은 고객 사이트당 $5~$15일 수 있습니다. 그렇다고 해서 가격을 $20으로 책정해야 한다는 의미는 아닙니다. 판매하는 것은 호스팅 자체가 아닙니다. 다음을 판매하는 것입니다:

- 맞춤 제작 시 $2,000~$5,000이 들 법한 전문 피트니스 웹사이트
- 고객이 신경 쓸 필요가 없는 지속적인 유지보수, 업데이트 및 보안
- 일반적인 빌더가 제공하지 않는 틈새 시장 특화 기능
- 해당 산업에 맞춰 구축된 플랫폼이 주는 신뢰도

제공하는 비용이 아니라, 제공하는 가치에 기반하여 가격을 책정하세요.

### 대안과 비교하여 가격 책정하기 (앵커링) {#anchor-to-alternatives}

피트니스 스튜디오 소유자가 FitSite를 평가할 때, 다음 항목들과 비교합니다:

- **웹 개발자 고용**: 초기 $2,000~$5,000 + 월 $50~$100 유지보수 비용
- **Wix/Squarespace**: 월 $16~$45이지만, 피트니스 특화 기능이 없고 직접 구축해야 함
- **아무것도 하지 않기**: 온라인에서 찾을 수 없어 회원들을 잃게 됨

월 $49~$199의 FitSite는 개발자보다 저렴하고, 일반 빌더보다 기능이 뛰어나며, 웹사이트가 없는 것보다는 비교할 수 없을 만큼 좋습니다.

## 가격 변형 구현하기 {#implementing-price-variations}

연간 가격은 고객의 약속을 유도하고 이탈률을 낮춥니다. 각 플랜의 **Price Variations** 탭으로 이동하여 연간 옵션을 추가하세요:

| Plan | Monthly | Annual (per month) | Annual Total | Savings |
|------|---------|-------------------|--------------|---------|
| Starter | $49/mo | $39/mo | $468/year | 20% off |
| Growth | $99/mo | $79/mo | $948/year | 20% off |
| Pro | $199/mo | $159/mo | $1,908/year | 20% off |

고객이 월별 및 연간 청구 간에 전환할 수 있도록 결제 양식에 **Period Selection** 필드를 추가하세요. [Checkout Forms](/user-guide/configuration/checkout-forms#adding-a-period-selection-toggle)를 참조하세요.

### 연간 가격 책정이 효과적인 이유 {#why-annual-pricing-works}

- **당신에게**: 선지급 현금 확보, 낮은 이탈률 (연간 결제 고객은 중도 해지할 가능성이 낮음)
- **고객에게**: 실질적인 절약, 예산 예측 가능성

## 설정 비용 (Setup Fees) {#setup-fees}

직접 설정 작업이 포함된 플랜에는 일회성 설정 비용을 고려해 보세요:

- **Starter**: 설정 비용 없음 (진입 장벽 제거)
- **Growth**: $99 설정 비용 (맞춤 도메인 설정 및 초기 컨설팅 포함)
- **Pro**: $299 설정 비용 (다중 위치 설정 및 온보딩 통화 포함)

각 플랜의 가격 책정 섹션에서 설정 비용을 구성하세요. 자세한 내용은 [Creating Your First Subscription Product](/user-guide/configuration/creating-your-first-subscription-product)을 참조하세요.

## 체험 기간 (Trial Periods) {#trial-periods}

체험 기간을 제공하면 가입 장벽을 낮출 수 있지만, 전환 실패의 위험을 초래합니다. FitSite의 경우:

- Starter 플랜에만 **7일 무료 체험** 제공
- Growth 및 Pro 플랜에는 체험 기간 없음 (이 고객들은 더 높은 의지를 가지고 있어 결제할 것이라고 예상함)

Starter 플랜의 가격 책정 섹션에서 **Offer Trial** 토글을 활성화하고 기간을 7일로 설정하여 체험 기간을 구성하세요.

### 체험 기간을 전환율로 높이는 방법 {#making-trials-convert}

체험 기간이 효과를 보려면 고객이 체험 기간 동안 가치를 경험해야 합니다. 온보딩 시퀀스(Lesson 8)가 여기서 매우 중요합니다. 환영 이메일은 7일 이내에 참여를 유도하도록 시간 계획을 세워야 합니다.

## 할인 코드 (Discount Codes) {#discount-codes}

특정 목적을 위해 전략적인 할인 코드를 만드세요:

- **FITLAUNCH** -- 첫 3개월 30% 할인 (런칭 프로모션용)
- **ANNUAL20** -- 연간 플랜 20% 할인 (이미 할인되지 않은 경우)
- **REFERRAL** -- 1개월 무료 (고객 추천용)

**Ultimate Multisite > Discount Codes**로 이동하여 이를 생성하세요. 전체 가이드는 [Creating Discount Codes](/user-guide/configuration/creating-discount-codes)를 참조하세요.

:::tip 기본적으로 할인을 제공하지 마세요
할인은 영구적인 요소가 아니라 전략적인 도구여야 합니다. 모두에게 할인을 제공한다면, 그것은 할인이 아니라 실제 가격입니다. 특정 캠페인, 추천, 기간 한정 프로모션에 사용하세요.
:::

## 세금 처리 (Tax Handling) {#tax-handling}

세금 징수가 필요한 관할 지역에서 운영하는 경우:

1. **Ultimate Multisite > Settings > Taxes**에서 세금 요율을 구성하세요.
2. 플랜에 세금 카테고리를 적용하세요.
3. 인보이스에 세금이 올바르게 표시되는지 확인하세요.

자세한 구성은 [Tax Handling](/user-guide/payment-gateways/tax-handling)을 참조하세요. 국제 고객을 대상으로 한다면, EU 규정 준수를 위해 [VAT addon](/addons/vat)을 고려해 보세요.

## 가격 검토하기 {#reviewing-your-pricing}

런칭 후에는 분기별로 가격을 재검토하세요. 다음 사항들을 살펴보세요:

- **플랜별 전환율**: Starter의 전환율은 좋은데 Growth의 전환율이 낮다면, 두 플랜 간의 간격이 너무 클 수 있습니다.
- **업그레이드율**: Starter에서 Growth로 업그레이드하는 고객이 적다면, Growth 플랜이 충분한 추가 가치를 제공하지 못할 수 있습니다.
- **플랜별 이탈률**: 연간 고객의 이탈률이 낮다면, 연간 가격을 더 적극적으로 홍보하세요.
- **경쟁사 가격**: 대안들은 얼마를 청구하고 있나요? 우리가 올바르게 포지셔닝되어 있나요?

## 지금까지 구축한 FitSite 네트워크 {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured + branded)
├── Platform Domain (fitsite.com + wildcard SSL)
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products
│   ├── FitSite Starter ($49/mo or $468/yr) + 7-day trial
│   ├── FitSite Growth ($99/mo or $948/yr) + $99 setup fee
│   ├── FitSite Pro ($199/mo or $1,908/yr) + $299 setup fee
│   └── Order Bumps + Discount Codes
├── Checkout Flow (with period selection toggle)
├── Branding (login, dashboard, emails, invoices, marketing site)
├── Customer Onboarding (Quick Start, emails, help resources)
├── Pricing Strategy
│   ├── Annual discounts (20% off)
│   ├── Strategic setup fees
│   ├── 7-day trial on Starter
│   ├── Discount codes for campaigns and referrals
│   └── Tax configuration
└── Ready for launch (next lesson)
```

## 이번 레슨에서 구축한 것 {#what-we-built-this-lesson}

- 약속을 유도하기 위한 20% 할인 연간 가격 책정
- 온보딩 노력을 충당하기 위한 상위 티어의 설정 비용
- 가입 장벽을 낮추기 위한 엔트리 레벨 플랜의 체험 기간
- 런칭, 추천, 캠페인을 위한 전략적 할인 코드
- 규정 준수 결제를 위한 세금 구성
- 지속적인 최적화를 위한 가격 검토 프레임워크

---

**다음:** [Lesson 10: Launch Day](lesson-10-launch) -- 런칭 전 체크리스트 및 서비스 시작.
