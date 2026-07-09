---
title: '6강: 가입 경험'
sidebar_position: 7
_i18n_hash: a5c16cdd9b4e53a69e138df7bb042411
---
# Lesson 6: 가입 경험 구축 {#lesson-6-the-signup-experience}

결제 과정은 관심이 수익으로 바뀌는 지점입니다. 혼란스럽거나 일반적인 가입 과정은 고객을 놓치게 만듭니다. 고객의 언어로 말하고 손쉽게 느껴지는, 특정 분야에 특화된 흐름이 고객을 전환시킵니다.

## 진행 상황 확인 {#where-we-left-off}

FitSite에는 템플릿과 요금제가 설정되어 있습니다. 이제 피트니스 스튜디오 사장님들을 실제 유료 고객으로 전환시키는 회원가입 및 결제 경험을 구축할 차례입니다.

## 회원가입 흐름 이해하기 {#understanding-the-registration-flow}

Ultimate Multisite의 결제 양식은 완전히 사용자 정의가 가능한 다단계 양식입니다. FitSite의 경우, 다음과 같은 흐름을 원합니다.

1. 피트니스 비즈니스에 맞춰진 느낌을 줄 것
2. 필요한 정보만 수집할 것
3. 고객이 가능한 한 빨리 작동하는 사이트를 갖게 할 것

전체 기술 참고 자료는 [The Registration Flow](/user-guide/configuration/the-registration-flow)를 참고하세요.

## FitSite 결제 과정 디자인하기 {#designing-the-fitsite-checkout}

**Ultimate Multisite > Checkout Forms**로 이동하여 새 양식을 만드세요.

### Step 1: 요금제 선택 {#step-1-plan-selection}

피트니스 스튜디오 사장님이 가장 먼저 보는 것은 그들이 이해할 수 있는 용어로 제시된 요금제여야 합니다.

- **Pricing Table** 필드를 추가하세요.
- 세 가지 FitSite 요금제가 모두 표시되도록 설정하세요.
- Lesson 5에서 작성한 요금제 설명이 여기에 나타납니다. 기술적 기능이 아닌, 피트니스 비즈니스 요구 사항에 초점을 맞춰 작성했는지 확인하세요.

:::tip 니치(Niche) 언어가 중요합니다
"저장 공간 1GB"는 체육관 사장님에게 아무 의미가 없습니다. "전문 스튜디오 웹사이트에 필요한 모든 것"이 모든 것을 의미합니다. 요금제 설명은 고객의 언어로 작성하세요.
:::

### Step 2: 템플릿 선택 {#step-2-template-selection}

요금제를 선택한 후, 고객은 시작할 템플릿을 고릅니다.

- **Template Selection** 필드를 추가하세요.
- 사용 가능한 템플릿은 고객이 선택한 요금제(Lesson 5에서 설정됨)에 따라 필터링됩니다.
- 각 템플릿은 피트니스에 특화된 디자인을 보여주는 미리보기 이미지를 가져야 합니다.

### Step 3: 계정 생성 {#step-3-account-creation}

이 단계는 최소한으로 유지하세요. 다음 정보만 수집합니다.

- 이메일 주소
- 비밀번호
- 스튜디오/비즈니스 이름 (이것이 사이트 이름이 됩니다)

가입 시 필요하지 않은 정보는 묻지 마세요. 추가 필드는 전환율을 떨어뜨립니다.

### Step 4: 사이트 설정 {#step-4-site-setup}

- **Site title**: Step 3에서 입력한 스튜디오 이름으로 미리 채우기(Pre-fill) 합니다.
- **Site URL**: 스튜디오 이름으로부터 자동 생성합니다 (예: `ironworks.fitsite.com`).

### Step 5: 결제 {#step-5-payment}

- **Payment** 필드를 추가하세요.
- 결제 게이트웨이를 설정하세요 ([Stripe](/user-guide/payment-gateways/stripe)는 구독 결제에 권장됩니다).
- Lesson 5에서 오더 범프(order bumps)를 만들었다면, 결제 단계 전에 **Order Bump** 필드를 추가하세요.

### Step 6: 확인 메시지 {#step-6-confirmation}

- 피트니스에 특화된 언어로 확인 메시지를 사용자 정의하세요.
- 예시: "피트니스 스튜디오 웹사이트가 생성되고 있습니다. 몇 초 후에 새 사이트로 리디렉션됩니다."

## 기간 선택 토글 추가하기 {#adding-a-period-selection-toggle}

요금제에 가격 변동(월별 대 연간)을 설정했다면, 고객이 결제 기간을 전환할 수 있도록 결제 양식에 **Period Selection** 필드를 추가하세요. 지침은 [Checkout Forms](/user-guide/configuration/checkout-forms#adding-a-period-selection-toggle)를 참고하세요.

## 결제 설정하기 {#configuring-payment}

아직 결제 게이트웨이를 설정하지 않았다면:

1. **Ultimate Multisite > Settings > Payment Gateways**로 이동합니다.
2. [Stripe 설정 가이드](/user-guide/payment-gateways/stripe) 또는 선호하는 게이트웨어를 따릅니다.
3. 테스트 결제를 사용하여 전체 결제 흐름을 테스트합니다.

결제가 계정으로 어떻게 들어오는지에 대한 자세한 내용은 [Getting Paid](/user-guide/payment-gateways/getting-paid)를 참고하세요.

## 흐름 테스트하기 {#testing-the-flow}

다음 단계로 넘어가기 전에, 전체 테스트 가입을 완료하세요.

1. 시크릿/개인 브라우저 창에서 결제 양식을 엽니다.
2. 요금제를 선택합니다.
3. 템플릿을 선택합니다.
4. 계정을 생성합니다.
5. 결제를 완료합니다 (테스트 모드 사용).
6. 사이트가 올바른 템플릿으로 생성되었는지 확인합니다.

다음 사항을 확인하세요:

- [ ] 요금제 설명이 명확하고 니치에 특화되어 있는지
- [ ] 템플릿 미리보기가 피트니스에 적합한 디자인을 보여주는지
- [ ] 사이트 URL이 스튜디오 이름으로부터 올바르게 생성되는지
- [ ] 결제가 성공적으로 처리되는지
- [ ] 고객이 선택한 템플릿이 적용된 작동하는 사이트에 도착하는지
- [ ] 확인 이메일이 피트니스에 특화된 언어를 사용하는지

## 현재 FitSite 네트워크 구성 {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured)
├── Hosting with wildcard SSL + domain mapping
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products (Starter, Growth, Pro + Order Bumps)
├── Checkout Flow
│   ├── Plan selection with niche-specific descriptions
│   ├── Template selection with fitness previews
│   ├── Minimal account creation
│   ├── Payment via Stripe
│   └── Fitness-specific confirmation
└── Ready for branding (next lesson)
```

## 이번 레슨에서 구축한 것 {#what-we-built-this-lesson}

- 피트니스 스튜디오 사장님에게 맞춘 **다단계 결제 양식**
- 가입 흐름 전반에 걸친 **니치 특화 언어**
- **최소한의 마찰** — 필수 필드만, 작동하는 사이트로의 빠른 경로
- 테스트 검증이 포함된 **결제 통합**
- 요금제 선택부터 작동하는 사이트까지의 **테스트된 엔드투엔드 흐름**

---

**다음:** [Lesson 7: Making It Yours](lesson-7-branding) — 플랫폼을 자체 브랜드화하고 FitSite를 브랜드로 확립합니다.
