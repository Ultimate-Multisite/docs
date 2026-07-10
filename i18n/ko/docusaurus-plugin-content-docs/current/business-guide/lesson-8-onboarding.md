---
title: '8과: 고객 온보딩'
sidebar_position: 9
_i18n_hash: 5b71133bebf067164c77d33db7c81806
---
# 레슨 8: 고객 온보딩 {#lesson-8-customer-onboarding}

고객이 가입하도록 만드는 것은 절반의 작업일 뿐입니다. 만약 고객이 로그인했지만 압도당하거나 다시 돌아오지 않는다면, 그들은 이미 우리를 떠난 것입니다. 이 레슨에서는 새로운 가입자를 활동적이고 참여하는 고객으로 변화시키는 경험을 설계합니다.

## 지금까지 다룬 내용 {#where-we-left-off}

FitSite는 완벽하게 브랜드화되었고 작동하는 결제 흐름을 갖추었습니다. 이제는 피트니스 스튜디오 오너가 가입을 완료하고 처음으로 자신의 새 사이트에 접속했을 때 어떤 일이 발생하는지에 초점을 맞춥니다.

## 온보딩이 중요한 이유 {#why-onboarding-matters}

가입 후 처음 30분은 고객이 머무를지, 아니면 이탈할지를 결정합니다. 다음 세 가지 중 어떤 경우에 놓이느냐에 따라 고객의 반응이 달라집니다.

- 로그인해서 이미 피트니스 웹사이트처럼 보이는 사이트를 보는 경우 → 머무름
- 다음에 무엇을 해야 할지 정확히 아는 경우 → 머무름
- 일반적인 WordPress 대시보드에서 길을 잃었다고 느끼는 경우 → 이탈

레슨 4에서 다룬 니치 템플릿이 첫 번째 포인트를 처리합니다. 이 레슨은 두 번째 포인트를 처리합니다.

## 첫 로그인 경험 {#the-first-login-experience}

### 환영 대시보드 위젯 (Welcome Dashboard Widget) {#welcome-dashboard-widget}

새로운 고객을 환영하고 설정 과정을 안내하는 맞춤 대시보드 위젯을 만드세요. 이 위젯은 고객이 처음 로그인할 때 눈에 잘 띄게 배치되어야 합니다.

**FitSite 빠른 시작:**

1. **스튜디오 이름 및 로고 추가** -- 커스터마이저 또는 사이트 식별(Site Identity) 설정 링크
2. **클래스 일정 업데이트** -- 클래스 페이지 편집기로 직접 연결
3. **트레이너 추가** -- 트레이너 페이지 편집기로 연결
4. **연락처 정보 설정** -- 연락처 페이지 편집기로 연결
5. **사이트 미리 보기** -- 프론트엔드 링크

각 단계는 관련 페이지나 설정으로 직접 연결됩니다. 메뉴를 헤매지 않도록 해야 합니다.

### 대시보드 단순화 {#simplify-the-dashboard}

새로운 고객에게 모든 WordPress 메뉴 항목을 보여줄 필요는 없습니다. 다음 사항들을 고려해 보세요.

- 피트니스 사이트 관리와 관련 없는 메뉴 항목 숨기기 (예: 사용하지 않는 경우 댓글)
- 가장 자주 사용되는 항목을 맨 앞으로 배치하도록 메뉴 재정렬
- 니치에 맞는 의미 있는 사용자 지정 메뉴 레이블 추가 ("외모" 대신 "내 스튜디오"와 같은)

[Plugin & Theme Manager](/addons/plugin-and-theme-manager) 애드온을 사용하면 고객이 무엇을 보게 할지 제어하는 데 도움이 될 수 있습니다.

## 환영 이메일 시퀀스 (Welcome Email Sequence) {#welcome-email-sequence}

단일 환영 이메일만으로는 충분하지 않습니다. 고객이 첫 주를 보내는 동안 안내하는 시퀀스를 설정해야 합니다.

### 이메일 1: 환영 (가입 직후) {#email-1-welcome-immediately-after-signup}

- 제목: "FitSite에 오신 것을 환영합니다 -- 스튜디오 웹사이트가 활성화되었습니다"
- 내용: 로그인 링크, 빠른 시작 단계, 도움말 자료 링크
- 톤: 기대감, 격려, 피트니스 관련

### 이메일 2: 빠른 성공 경험 (Day 1) {#email-2-quick-wins-day-1}

- 제목: "FitSite에서 가장 먼저 해야 할 3가지"
- 내용: 로고 추가, 홈페이지 히어로 이미지 업데이트, 클래스 일정 추가
- 클릭해야 할 정확한 위치를 보여주는 스크린샷 포함

### 이메일 3: 나만의 공간으로 만들기 (Day 3) {#email-3-make-it-yours-day-3}

- 제목: "피트니스 사이트를 돋보이게 만드세요"
- 내용: 색상 사용자 지정, 트레이너 사진 추가, 스튜디오 스토리 작성
- 플랫폼에서 멋진 피트니스 사이트 예시 링크

### 이메일 4: 오픈 (Day 7) {#email-4-go-live-day-7}

- 제목: "FitSite를 세상과 공유할 준비가 되셨나요?"
- 내용: 공유하기 전에 확인해야 할 체크리스트, 커스텀 도메인 연결 방법 (Growth/Pro 사용 시), 소셜 공유 팁

:::tip 이메일 자동화
[Webhooks](/user-guide/integrations/webhooks) 또는 [Zapier](/user-guide/integrations/zapier)를 사용하여 이메일 마케팅 플랫폼을 통해 이메일을 트리거하세요. 이렇게 하면 타이밍에 대한 통제력이 높아지고 참여도를 추적할 수 있습니다.
:::

## 도움말 자료 (Help Resources) {#help-resources}

피트니스 스튜디오 오너들이 실제로 묻는 질문에 답하는 니치별 도움말 콘텐츠를 만드세요.

### 지식 기반 문서 (Knowledge Base Articles) {#knowledge-base-articles}

- "클래스 일정을 업데이트하는 방법"
- "트레이너 프로필 추가 및 편집하기"
- "스튜디오 로고 및 색상 변경하기"
- "자체 도메인 이름 연결하기" (Growth/Pro 고객용)
- "사이트에 예약 위젯 추가하기"

이 문서는 비기술적인 사용자를 대상으로 작성해야 합니다. 스크린샷을 사용하세요. WordPress 전문 용어는 피하세요.

### 비디오 워크스루 (Video Walkthroughs) {#video-walkthroughs}

다음 내용을 보여주는 짧은(2~3분) 화면 녹화 영상:

- 첫 로그인 및 오리엔테이션
- 홈페이지 편집
- 클래스 일정 업데이트
- 새 트레이너 추가

이것들이 완벽하게 제작된 프로덕션일 필요는 없습니다. 명확하고, 도움이 되며, 니치에 특화된 것이 중요합니다.

## 계정 페이지 (The Account Page) {#the-account-page}

Ultimate Multisite에는 고객이 구독을 관리하는 고객용 [Account Page](/user-guide/client-management/account-page)가 포함되어 있습니다. 이 페이지를 다음과 같이 맞춤 설정하세요.

- 현재 FitSite 플랜 표시
- 피트니스 관련 혜택과 함께 업그레이드 옵션 표시
- 청구 내역 및 인보이스 다운로드 제공
- 도움말 자료 링크

## 온보딩 성공 측정하기 {#measuring-onboarding-success}

온보딩이 제대로 작동하는지 알기 위해 다음 지표들을 추적하세요.

- **활성화율 (Activation rate)**: 가입자 중 실제로 첫 주 안에 사이트를 맞춤 설정하는 비율은 얼마인가요?
- **첫 주 로그인 횟수 (First-week logins)**: 새로운 고객은 첫 주 동안 몇 번 로그인하나요?
- **신규 고객 지원 티켓 수 (Support tickets from new customers)**: 양이 많다는 것은 온보딩 과정에 공백이 있다는 의미입니다.
- **체험판-유료 전환율 (Trial-to-paid conversion)**: 체험판을 제공하는 경우, 몇 퍼센트가 유료로 전환되나요?

## FitSite 네트워크 현황 {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured + branded)
├── Platform Domain (fitsite.com + wildcard SSL)
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products (Starter, Growth, Pro + Order Bumps)
├── Checkout Flow (niche-specific, tested)
├── Branding (login, dashboard, emails, invoices, marketing site)
├── Customer Onboarding
│   ├── Quick Start dashboard widget
│   ├── Simplified dashboard for fitness site management
│   ├── 4-email welcome sequence
│   ├── Niche-specific knowledge base
│   ├── Video walkthroughs
│   └── Customized account page
└── Ready for pricing strategy (next lesson)
```

## 이번 레슨에서 구축한 것 {#what-we-built-this-lesson}

- 빠른 시작 위젯이 포함된 **안내형 첫 로그인 경험**
- 피트니스 사이트 관리 작업에 초점을 맞춘 **단순화된 대시보드**
- 고객이 첫 주를 보내는 동안 안내하는 **환영 이메일 시퀀스**
- 비기술적인 피트니스 스튜디오 오너를 위해 작성된 **니치별 도움말 자료**
- 경험을 추적하고 개선하기 위한 **온보딩 지표**

---

**다음:** [레슨 9: 수익을 위한 가격 책정](lesson-9-pricing) -- 수익을 극대화하고 이탈률을 최소화하기 위해 가격 책정 전략을 다듬습니다.
