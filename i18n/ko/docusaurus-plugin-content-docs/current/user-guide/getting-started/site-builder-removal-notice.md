---
title: Site Builder Mode Removal Notice
sidebar_position: 19
_i18n_hash: 3abf37d17f19e045e9d9da3ffe8e3179
---
# 사이트 빌더 모드 제거 공지 {#site-builder-mode-removal-notice}

**Superdav AI Agent v1.12.0에서 사이트 빌더 모드가 제거되었습니다.** 사이트 빌더 모드를 사용하셨다면, 테마 생성 및 사이트 설정을 위해 **Setup Assistant agent**로 마이그레이션해야 합니다.

## 무엇이 바뀌었나요? {#what-happened}

### 사이트 빌더 모드 (구 버전) {#site-builder-mode-legacy}

사이트 빌더 모드는 다음 기능을 위한 마법사(wizard) 기반 인터페이스였습니다.

- 템플릿을 이용한 사이트 생성
- 기본 설정 구성
- 테마 선택
- 초기 콘텐츠 설정

### 무엇으로 대체되었나요? {#what-replaced-it}

**Setup Assistant agent**가 이제 모든 사이트 빌더 기능을 다음 기능을 통해 처리합니다.

- 더 유연하고 에이전트가 안내하는 설정 방식
- 향상된 테마 맞춤 설정 옵션
- Theme Builder 온보딩과의 통합
- 향후 세션을 위한 지속적인 site_brief 메모리

## 사이트 빌더 모드를 사용하셨다면 {#if-you-were-using-site-builder-mode}

### 사이트는 안전합니다 {#your-sites-are-safe}

- 사이트 빌더 모드로 생성된 기존 사이트는 계속 작동합니다.
- 데이터 손실이나 사이트 중단은 없습니다.
- 평소처럼 사이트를 관리할 수 있습니다.

### Setup Assistant Agent로 마이그레이션하세요 {#migrate-to-setup-assistant-agent}

새로운 사이트 설정이나 테마 변경이 필요할 때는 Setup Assistant agent를 사용하세요.

```
"Help me set up a new site"
```

또는

```
"Start the Theme Builder onboarding"
```

Setup Assistant agent는 더 많은 유연성을 제공하면서 동일한 기능을 수행합니다.

## 비교: 사이트 빌더 vs. Setup Assistant {#comparison-site-builder-vs-setup-assistant}

| 기능 | 사이트 빌더 (제거됨) | Setup Assistant (새 기능) |
|---------|----------------------|----------------------|
| 설정 방식 | 마법사 양식 | 에이전트 대화 |
| 테마 선택 | 미리 정의된 템플릿 | 맞춤 생성 |
| 맞춤 설정 | 제한된 옵션 | 전체 디자인 시스템 |
| 사이트 개요 (Site brief) | 저장되지 않음 | 지속적인 메모리 |
| 향후 세션 | 설정 반복 | 저장된 site_brief 사용 |
| 유연성 | 고정된 워크플로우 | 적응형 대화 |

## Setup Assistant Agent로 마이그레이션하기 {#migrating-to-setup-assistant-agent}

### 새 사이트의 경우 {#for-new-sites}

사이트 빌더 모드를 사용하는 대신 다음을 따르세요.

1. 요청: "Help me set up a new site"
2. Setup Assistant agent가 다음 과정을 안내합니다:
   - 사이트 목적 및 목표
   - 대상 고객
   - 브랜드 아이덴티티
   - 테마 생성
   - 초기 설정

### 기존 사이트의 경우 {#for-existing-sites}

사이트 빌더 모드로 만든 기존 사이트가 있는 경우:

1. 그대로 계속 사용할 수 있습니다.
2. 테마를 업데이트하려면 다음을 요청하세요: "Redesign my site"
3. Setup Assistant agent가 새 테마를 만드는 것을 도와줍니다.
4. 사이트 데이터는 변경되지 않습니다.

### 테마 변경의 경우 {#for-theme-changes}

사이트 빌더 모드의 테마 선택 대신:

1. 요청: "Change my theme"
2. Setup Assistant agent가 다음을 수행합니다:
   - 디자인 선호도에 대해 질문합니다.
   - 맞춤 테마를 생성합니다.
   - 사이트에 활성화합니다.

## 주요 차이점 {#key-differences}

### 사이트 빌더 모드 {#site-builder-mode}

```
1. 템플릿 선택
2. 테마 선택
3. 기본 설정 구성
4. 완료
```

### Setup Assistant Agent {#setup-assistant-agent}

```
1. 사이트 목적 설명
2. 대상 고객 정의
3. 디자인 선호도 선택
4. 에이전트가 맞춤 테마 생성
5. 에이전트가 테마 활성화
6. 향후 세션을 위해 site_brief 저장
```

## Setup Assistant Agent의 장점 {#benefits-of-setup-assistant-agent}

### 더 유연함 {#more-flexible}

- 사이트를 자연어로 설명할 수 있습니다.
- 맞춤형 추천을 받을 수 있습니다.
- 특정 요구 사항에 맞춰 조정됩니다.

### 더 나은 맞춤 설정 {#better-customization}

- 맞춤 테마 생성
- 디자인 시스템 결정
- 지속적인 디자인 토큰

### 지속적인 메모리 {#persistent-memory}

- site_brief가 저장됩니다.
- 향후 에이전트가 사이트를 이해합니다.
- 설정 정보를 반복할 필요가 없습니다.

### 통합된 워크플로우 {#integrated-workflow}

- Theme Builder 온보딩
- Design System Aesthetics skill
- Ability Visibility controls
- 모든 것이 원활하게 함께 작동합니다.

## 문제 해결 {#troubleshooting}

### 사이트 빌더 모드를 찾을 수 없어요 {#i-cant-find-site-builder-mode}

사이트 빌더 모드는 제거되었습니다. 대신 Setup Assistant agent를 사용하세요:

```
"Help me set up a new site"
```

### 사이트 빌더로 만든 사이트를 재현하고 싶어요 {#i-want-to-recreate-a-site-from-site-builder}

Setup Assistant agent를 사용하여 재현할 수 있습니다:

1. 요청: "Help me set up a new site"
2. 원래 사이트의 목적과 디자인을 설명합니다.
3. 에이전트가 유사한 테마를 생성할 것입니다.
4. site_brief가 향후 참고를 위해 저장됩니다.

### 기존 사이트 빌더 사이트가 작동하지 않아요 {#my-existing-site-builder-site-isnt-working}

사이트 빌더 모드로 만든 기존 사이트는 계속 작동합니다. 문제가 발생한다면:

1. 테마가 여전히 활성화되어 있는지 확인하세요.
2. 플러그인이 활성화되어 있는지 확인하세요.
3. WordPress 오류 로그를 확인하세요.
4. 문제가 지속되면 지원팀에 문의하세요.

### 예전 사이트 빌더 템플릿을 계속 사용할 수 있나요? {#can-i-still-use-my-old-site-builder-templates}

사이트 빌더 템플릿은 더 이상 제공되지 않습니다. 하지만:

- 기존 사이트는 계속 작동합니다.
- Setup Assistant agent를 사용하여 유사한 사이트를 재현할 수 있습니다.
- Setup Assistant agent는 더 많은 맞춤 설정 옵션을 제공합니다.

## 다음 단계 {#next-steps}

1. **새 사이트의 경우**: Setup Assistant agent를 사용하세요.
2. **기존 사이트의 경우**: 그대로 계속 사용하세요.
3. **테마 변경의 경우**: Setup Assistant agent에게 도움을 요청하세요.
4. **디자인 개선의 경우**: Design System Aesthetics skill을 사용하세요.

## 관련 주제 {#related-topics}

- **Theme Builder Onboarding**: 맞춤 테마를 위한 안내 설정
- **Setup Assistant Agent**: 에이전트가 안내하는 사이트 설정
- **Site Specification Skill**: 사이트의 목표와 대상 고객 정의
- **Design System Aesthetics Skill**: 사이트의 시각적 정체성 개선
