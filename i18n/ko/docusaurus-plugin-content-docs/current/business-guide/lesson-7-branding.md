---
title: '제7강: 나만의 것으로 만들기'
sidebar_position: 8
_i18n_hash: 90013fc79a9cbb15283ce89b688002b1
---
# Lesson 7: 자신만의 것으로 만들기

고객들이 "어떤 WordPress 플러그인을 사용하고 있다"고 느끼게 해서는 안 됩니다. 그들은 마치 자신들의 산업에 맞춰 구축된 플랫폼, 즉 FitSite를 사용하고 있다고 느껴야 합니다. 이 레슨에서는 브랜딩, 화이트 라벨링, 그리고 플랫폼이 마치 하나의 완성된 제품처럼 느껴지도록 만드는 방법을 다룹니다.

## 진행 상황 복습 {#where-we-left-off}

FitSite는 플랜 선택부터 실제 사이트까지 피트니스 스튜디오 사장님들을 안내하는 작동하는 결제 흐름을 갖추고 있습니다. 이제 전체 경험이 하나의 통일되고 브랜드화된 제품처럼 느껴지도록 만듭니다.

## 플랫폼 도메인 {#your-platform-domain}

브랜드의 기반은 도메인입니다. FitSite의 경우:

- **메인 도메인**: `fitsite.com` (마케팅 사이트 및 네트워크 루트)
- **고객 사이트**: `studioname.fitsite.com` (서브도메인)
- **커스텀 도메인**: Growth 및 Pro 플랜의 고객은 자신들의 도메인을 연결할 수 있습니다.

### 도메인 설정하기 {#setting-up-your-domain}

1. 플랫폼 도메인을 등록합니다.
2. 호스팅 제공업체에 연결합니다.
3. 고객 서브도메인을 위해 와일드카드 DNS (`*.fitsite.com`)를 구성합니다.
4. 와일드카드 SSL이 활성화되었는지 확인합니다.

자세한 지침은 [How to Configure Domain Mapping](/user-guide/domain-mapping/how-to-configure-domain-mapping)을 참조하세요.

## 관리자 경험 화이트 라벨링 {#white-labeling-the-admin-experience}

피트니스 스튜디오 사장님이 사이트 대시보드에 로그인할 때, WordPress나 Ultimate Multisite의 브랜딩이 아닌, 귀사의 브랜드가 보여야 합니다.

### 커스텀 로그인 페이지 {#custom-login-page}

WordPress 로그인 페이지를 사용자 정의하여 다음 내용을 표시합니다:

- FitSite 로고
- 피트니스에 적합한 배경 이미지
- 귀사의 브랜드 색상

### 대시보드 브랜딩 {#dashboard-branding}

[Admin Page Creator](/addons/admin-page-creator) 애드온이나 커스텀 CSS를 사용하여 다음을 수행합니다:

- WordPress 로고를 FitSite 로고로 교체합니다.
- 관리자 색상 구성을 브랜드에 맞게 사용자 정의합니다.
- 피트니스 관련 빠른 링크 및 도움말 자료가 포함된 커스텀 대시보드 위젯을 추가합니다.

### 커스텀 관리자 페이지 {#custom-admin-pages}

피트니스 스튜디오 사장님들에게 가장 관련성이 높은 작업을 전면에 내세우는 커스텀 관리자 페이지를 만드는 것을 고려해 보세요:

- "클래스 일정 편집하기"
- "트레이너 프로필 업데이트하기"
- "내 사이트 보기"

이렇게 하면 표준 WordPress 메뉴에 숨겨져 있는 대신, 니치(niche) 관련 작업들을 전면에 배치함으로써 학습 곡선을 줄일 수 있습니다.

## 커뮤니케이션 브랜딩 {#branding-your-communications}

모든 이메일, 송장, 알림은 귀사의 브랜드를 강화해야 합니다.

### 시스템 이메일 {#system-emails}

**Ultimate Multisite > Settings > Emails**로 이동하여 모든 시스템 이메일을 사용자 정의합니다:

- **보내는 사람 이름**: FitSite
- **보내는 사람 이메일**: hello@fitsite.com
- **이메일 템플릿**: 브랜드 색상과 로고를 사용합니다.
- **언어**: 피트니스 관련 내용으로 통일합니다.

사용자 정의해야 할 주요 이메일:

| 이메일 | 일반 버전 | FitSite 버전 |
|-------|----------------|-----------------|
| 환영 | "새 사이트가 준비되었습니다" | "귀사의 피트니스 스튜디오 웹사이트가 라이브되었습니다" |
| 결제 영수증 | "결제가 접수되었습니다" | "FitSite 구독료 결제 확인되었습니다" |
| 체험 만료 | "체험 기간이 곧 만료됩니다" | "FitSite 체험 기간이 3일 남았습니다. 스튜디오 웹사이트를 계속 운영하세요" |

### 송장 {#invoices}

다음 내용을 포함하여 송장 템플릿을 사용자 정의합니다:

- FitSite 로고 및 브랜드 색상
- 귀사의 비즈니스 정보
- 피트니스 관련 제품 이름 (일반적인 플랜 ID가 아닌)

## 고객용 사이트 {#the-customer-facing-site}

메인 도메인(`fitsite.com`)에는 플랫폼을 판매하는 마케팅 사이트가 필요합니다. 이것은 Ultimate Multisite 네트워크 관리와는 별개이며, 귀사 비즈니스의 공개적인 얼굴입니다.

주요 페이지:

- **홈페이지**: 피트니스 비즈니스를 위한 명확한 가치 제안
- **기능**: FitSite가 피트니스 용어로 무엇을 하는지
- **가격**: 니치에 특화된 기능 비교가 포함된 세 가지 플랜
- **예시**: 플랫폼으로 구축된 사이트 전시
- **가입**: 결제 양식으로 연결되는 링크

:::tip 귀사의 마케팅 사이트는 네트워크 사이트가 될 수 있습니다
마케팅 사이트를 자체 네트워크 내의 사이트로 만드세요. 이렇게 하면 동일한 대시보드에서 관리할 수 있고, 자체 플랫폼의 역량을 보여줄 수 있습니다.
:::

## 고객을 위한 커스텀 도메인 {#custom-domain-for-customers}

커스텀 도메인을 포함하는 플랜의 고객들을 위해, 이 과정을 명확하게 문서화해야 합니다:

1. 고객이 도메인을 등록하거나 등록업체로 이전합니다.
2. 고객이 DNS를 업데이트하여 귀사 플랫폼을 가리키도록 합니다 (정확한 레코드 제공).
3. Ultimate Multisite가 도메인 매핑 및 SSL을 처리합니다.

이 과정에 대해, 기술 지식이 없는 피트니스 스튜디오 사장님들을 대상으로 작성된 도움말 문서나 지식 기반 항목을 만드세요.

## 현재 FitSite 네트워크 구성 {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (서브도메인 모드)
├── Ultimate Multisite (설정 및 브랜딩 완료)
├── Platform Domain (fitsite.com + 와일드카드 SSL)
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products (Starter, Growth, Pro + Order Bumps)
├── Checkout Flow (니치 특화, 테스트 완료)
├── Branding
│   ├── Custom login page
│   ├── Branded admin dashboard
│   ├── Niche-specific system emails
│   ├── Branded invoices
│   └── Marketing site on fitsite.com
└── Ready for onboarding flow (다음 레슨)
```

## 이번 레슨에서 구축한 것 {#what-we-built-this-lesson}

- 브랜딩된 경험을 위한 **플랫폼 도메인 및 DNS** 구성
- FitSite 브랜딩이 적용된 **화이트 라벨 관리자 페이지**
- **맞춤형 커뮤니케이션** — 이메일, 송장, 알림 모두 브랜드 통일
- FitSite를 피트니스 스튜디오 사장님들에게 판매하는 **마케팅 사이트**
- 자체 도메인을 원하는 고객을 위한 **커스텀 도메인 문서화**

---

**다음:** [Lesson 8: 고객 온보딩](lesson-8-onboarding) — 신규 가입자를 활동적이고 행복한 고객으로 전환하는 경험을 설계합니다.
