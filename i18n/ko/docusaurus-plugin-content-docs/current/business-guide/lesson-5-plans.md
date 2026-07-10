---
title: '5과: 계획 설계하기'
sidebar_position: 6
_i18n_hash: 8c58dfd0a186bd585f43342bc4ea4f43
---
# Lesson 5: 플랜 설계하기 {#lesson-5-designing-your-plans}

플랜 단계는 단순히 가격 수준을 의미하는 것이 아닙니다. 이는 고객님의 틈새 시장 고객들이 실제로 어떻게 운영되는지를 반영합니다. 이번 레슨에서는 다양한 단계에 있는 피트니스 비즈니스의 실제 필요에 맞는 제품 플랜을 설계해 보겠습니다.

## 어디까지 진행했나요 {#where-we-left-off}

FitSite에는 세 가지 템플릿(Studio Essential, Gym Pro, Fitness Chain)이 준비되어 있습니다. 이제 고객이 무엇에 접근할 수 있고 얼마를 지불해야 하는지를 결정하는 플랜을 만듭니다.

## 고객 세그먼트로 생각하기 {#thinking-in-customer-segments}

대부분의 사람들이 저지르는 실수는 기술적 기능(저장 공간, 대역폭, 페이지 수)을 중심으로 플랜을 설계하는 것입니다. 고객님의 틈새 시장 고객들은 그런 방식으로 생각하지 않습니다. 체육관 주인은 자신의 사업을 운영하는 데 무엇이 필요한지 생각합니다.

피트니스 스튜디오의 경우, 세 가지 자연스러운 세그먼트가 존재합니다.

| 세그먼트 | 특징 | 필요한 것 |
|---------|-------------|----------------|
| **개인 트레이너 / 소규모 스튜디오** | 직원 1~3명, 단일 위치, 시작 단계 | 전문적인 웹사이트, 수업 정보, 문의 양식 |
| **기존 체육관** | 직원 5~20명, 단일 위치, 성장 단계 | 위 모든 것 + 예약 기능, 블로그, 갤러리, 맞춤 도메인 |
| **피트니스 체인** | 다중 위치, 확립된 브랜드 | 위 모든 것 + 멀티사이트, 위치 페이지, 직원 디렉토리 |

플랜은 임의의 기능 묶음이 아니라, 이 세그먼트에 맞춰져야 합니다.

## FitSite 플랜 만들기 {#creating-the-fitsite-plans}

각 플랜에 대해 **Ultimate Multisite > Products > Add Product**로 이동합니다.

### Plan 1: FitSite Starter -- $49/month {#plan-1-fitsite-starter----49month}

**타겟**: 개인 트레이너 및 소규모 스튜디오

**Description tab**:
- Name: FitSite Starter
- Description: "개인 트레이너나 소규모 스튜디오가 온라인에서 전문적으로 보이도록 필요한 모든 것."

**General tab**:
- Product type: Plan
- Customer role: Administrator

**Site Templates tab**:
- Allow site templates: Enabled
- Available templates: Studio Essential only

**Limitations**:
- Sites: 1
- Disk space: 1 GB
- Custom domain: Disabled (uses `studioname.fitsite.com`)

**Plugins tab**:
- Contact form plugin: Force Activate
- SEO plugin: Force Activate
- Booking plugin: Not Available (upgrade incentive)

**Themes tab**:
- Your selected theme: Force Activate
- All other themes: Hidden

### Plan 2: FitSite Growth -- $99/month {#plan-2-fitsite-growth----99month}

**타겟**: 기존 단일 위치 체육관

**Description tab**:
- Name: FitSite Growth
- Description: "온라인 입지를 강화하고 새로운 회원을 유치할 준비가 된 기존 체육관을 위한 플랜입니다."

**Site Templates tab**:
- Available templates: Studio Essential and Gym Pro

**Limitations**:
- Sites: 1
- Disk space: 5 GB
- Custom domain: Enabled

**Plugins tab**:
- Starter의 모든 기능 + 다음 기능:
- Booking plugin: Force Activate
- Gallery plugin: Force Activate
- Blog functionality: Available

**Up & Downgrades tab**:
- Plan group: FitSite Plans
- Product order: 2

### Plan 3: FitSite Pro -- $199/month {#plan-3-fitsite-pro----199month}

**타겟**: 다중 위치 피트니스 체인

**Description tab**:
- Name: FitSite Pro
- Description: "여러 위치를 가진 피트니스 브랜드를 위한 완벽한 플랫폼입니다."

**Site Templates tab**:
- Available templates: All three templates

**Limitations**:
- Sites: 5 (위치별 1개)
- Disk space: 20 GB
- Custom domain: Enabled

**Plugins tab**:
- Growth의 모든 기능 + 다음 기능:
- All premium plugins: Force Activate

**Up & Downgrades tab**:
- Plan group: FitSite Plans
- Product order: 3

## 플랜 그룹 설정하기 {#setting-up-the-plan-group}

플랜 그룹을 설정하면 고객이 FitSite 플랜군 내에서만 업그레이드하거나 다운그레이드할 수 있도록 보장합니다. 각 플랜의 **Up & Downgrades** 탭에서 다음을 수행합니다.

1. **Plan Group**을 세 플랜 모두 "FitSite Plans"로 설정합니다.
2. **Product Order**를 1 (Starter), 2 (Growth), 3 (Pro)으로 설정합니다.

이렇게 하면 명확한 업그레이드 경로가 생성됩니다: Starter → Growth → Pro.

## 주문 추가 상품 (Order Bumps) 추가하기 {#adding-order-bumps}

주문 추가 상품은 결제 과정에서 제공되는 추가 옵션 상품입니다. FitSite의 경우 다음을 고려해 보세요.

- **Extra Storage Pack** ($19/month) -- 추가 5 GB 디스크 공간
- **Priority Support** ($29/month) -- 더 빠른 응답 시간
- **Additional Site** ($39/month) -- 플랜이 허용하는 것보다 더 많은 사이트가 필요한 고객용

이 상품들을 Ultimate Multisite에서 **Package** 유형의 제품으로 생성하고 관련 플랜과 연결합니다.

## 이 구조가 작동하는 이유 {#why-this-structure-works}

- **Starter**는 진입 장벽을 낮춥니다. (저렴한 가격, 간단한 제공, 트레이너가 빠르게 온라인에 진출할 수 있게 함)
- **Growth**는 체육관이 실제로 요청하는 기능을 추가합니다. (예약, 갤러리, 맞춤 도메인)
- **Pro**는 다중 위치 지원이 필요한 고가치 세그먼트를 공략합니다.
- **주문 추가 상품**은 핵심 플랜을 복잡하게 만들지 않으면서 고객이 맞춤 설정할 수 있게 합니다.
- **명확한 업그레이드 경로**는 고객이 떠나는 대신 함께 성장한다는 의미입니다.

## 현재 FitSite 네트워크 구성 {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured)
├── Hosting with wildcard SSL + domain mapping
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products
│   ├── FitSite Starter ($49/mo) → Studio Essential template
│   ├── FitSite Growth ($99/mo) → Studio Essential + Gym Pro templates
│   ├── FitSite Pro ($199/mo) → All templates
│   └── Order Bumps (Extra Storage, Priority Support, Additional Site)
└── Ready for checkout configuration (next lesson)
```

## 이번 레슨에서 구축한 것 {#what-we-built-this-lesson}

- 실제 피트니스 비즈니스 세그먼트에 매핑된 **세 가지 플랜 단계**
- Ultimate Multisite의 플러그인 및 템플릿 제어를 사용한 **기능 제한(Feature gating)**
- 명확한 업그레이드 경로를 가진 **플랜 그룹**
- 추가 수익을 위한 **주문 추가 상품**
- 기술 사양이 아닌 고객 가치에 기반한 **가격 구조**

---

**다음:** [Lesson 6: 회원가입 경험](lesson-6-checkout) -- 피트니스 스튜디오 오너를 유료 고객으로 전환시키는 결제 흐름을 구축합니다.
