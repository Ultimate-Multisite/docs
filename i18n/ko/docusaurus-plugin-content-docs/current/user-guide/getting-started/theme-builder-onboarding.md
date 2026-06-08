---
title: 테마 빌더 온보딩 플로우
sidebar_position: 17
_i18n_hash: 67d84d7e08c2ccfaa459bba0c40cb1ea
---
# 테마 빌더 온보딩 과정

Superdav AI Agent v1.12.0은 사용자가 초기 설정을 할 때 맞춤형 블록 테마를 만들 수 있도록 안내하는 **테마 빌더 온보딩 과정**을 도입했습니다. 이 기능은 기존의 Site Builder 모드를 대체하여 더욱 유연하고 에이전트의 도움을 받는 방식으로 개선되었습니다.

## 테마 빌더 온보딩 과정이란 무엇인가요?

테마 빌더 온보딩 과정은 다음과 같은 기능을 수행하는 대화형 설정 마법사입니다.

- 디자인 결정 사항(색상, 타이포그래피, 레이아웃)을 안내합니다.
- 사이트의 시각적 아이덴티티 선호도를 파악합니다.
- 사용자의 요구에 맞춰 맞춤형 블록 테마를 생성합니다.
- 완료되면 테마를 자동으로 활성화합니다.

이 과정은 질문을 던지고 테마를 점진적으로 구축하는 **Setup Assistant agent**에 의해 구동됩니다.

## 테마 빌더 온보딩 시작하기

### 첫 실행 설정

Superdav AI Agent를 새로운 WordPress 설치에 처음 실행하면 다음과 같은 화면을 보게 됩니다.

```
Welcome to Superdav AI Agent!

What would you like to do?
1. Build a custom theme (Theme Builder)
2. Use an existing theme
3. Skip setup for now
```

**"Build a custom theme"**을 선택하여 테마 빌더 온보딩 과정으로 진입하세요.

### 수동 활성화

원할 때 언제든지 다음 명령어를 요청하여 테마 빌더 온보딩을 시작할 수도 있습니다.

```
"Start the Theme Builder onboarding"
```

또는

```
"Help me create a custom theme"
```

## 온보딩 단계

### 1단계: 모드 선택

Setup Assistant agent가 선호하는 방식을 묻습니다.

```
How would you like to build your theme?
- Guided (I'll ask questions and build it for you)
- Hands-on (I'll show you options and you decide)
```

대부분의 사용자에게는 **Guided mode**를 권장합니다. 이 모드에서는 agent가 사용자의 산업 및 목표에 기반하여 디자인 추천을 해줍니다.

### 2단계: 사이트 사양 지정

다음과 같은 내용에 대해 질문을 받게 됩니다.

- **Site purpose**: 이커머스, 블로그, 포트폴리오, SaaS 등
- **Target audience**: 방문자는 누구인가요?
- **Brand colors**: 주 색상 및 보조 색상 (또는 "잘 모르겠어요")
- **Tone**: 전문적인, 창의적인, 재미있는, 미니멀한 등

이 정보는 **site_brief** 메모리에 저장되며, agent가 향후 세션에서 참조하는 자료가 됩니다.

### 3단계: 디자인 시스템 결정

agent가 디자인 토큰(design token) 선택 과정을 안내합니다.

- **Typography**: 글꼴 계열(serif, sans-serif, monospace) 및 크기 스케일
- **Color palette**: 주 색상, 보조 색상, 강조 색상, 중립 색상
- **Spacing**: 컴팩트, 일반, 또는 여유로운 레이아웃
- **Motion**: 애니메이션 및 전환 효과 (원하는 경우)

### 4단계: 테마 생성

Setup Assistant agent는 다음 요소들로 맞춤형 블록 테마의 기본 구조(scaffold)를 만듭니다.

- 모든 디자인 토큰이 포함된 `theme.json`
- 일반적인 레이아웃(홈페이지, 블로그, 문의)을 위한 블록 템플릿
- 디자인 시스템과 일치하는 사용자 지정 블록 스타일
- 테마 메타데이터 및 WordPress 지원 선언

### 5단계: 활성화 및 확인

테마가 자동으로 활성화되며 다음과 같은 메시지를 보게 됩니다.

```
✓ Your custom theme is now live!
  Theme name: [Your Site Name] Theme
  Colors: [Primary] / [Secondary]
  Typography: [Font Family]

  Visit your site to see the new design.
```

이후 사이트를 방문하여 테마가 올바르게 표시되는지 확인할 수 있습니다.

## 사이트 사양 지정 및 site_brief 메모리

온보딩 과정 동안, agent는 사이트의 사양을 **site_brief** 메모리 카테고리에 저장합니다. 여기에는 다음 내용이 포함됩니다.

- 사이트 목적 및 목표
- 타겟 오디언스
- 브랜드 색상 및 톤
- 디자인 선호도
- 콘텐츠 구조

### site_brief가 중요한 이유

향후 세션에서 agent는 site_brief를 참조하여 다음을 수행합니다.

- 변경 사항 전반에 걸쳐 디자인 일관성 유지
- 사이트 목적에 맞는 기능 제안
- 상황에 맞는 추천 제공
- 설정 질문 반복 방지

### site_brief 확인하기

agent에게 다음을 요청할 수 있습니다.

```
"Show me my site brief"
```

또는

```
"What do you know about my site?"
```

agent가 저장된 사이트 사양을 표시해 줄 것입니다.

## 온보딩 후 맞춤 설정하기

테마 빌더 온보딩이 완료된 후에는 다음 작업을 수행할 수 있습니다.

### 디자인 시스템 미학(Design System Aesthetics) 스킬 사용

디자인 개선을 요청하세요.

```
"Refine the typography to be more modern"
```

또는

```
"Adjust the color palette to be warmer"
```

**Design System Aesthetics skill**은 목표 지향적인 디자인 업데이트 과정을 안내합니다.

### theme.json 직접 편집하기

고급 사용자의 경우, `/wp-content/themes/[theme-name]/theme.json` 파일을 편집하여 다음을 조정할 수 있습니다.

- 색상 토큰
- 타이포그래피 스케일
- 간격 값
- 테두리 및 그림자 정의

### 사용자 지정 블록 템플릿 생성하기

WordPress 블록 에디터를 사용하여 다음을 위한 사용자 지정 템플릿을 만드세요.

- 홈페이지 레이아웃
- 블로그 게시물 페이지
- 제품 페이지
- 문의 양식

## 비교: 이전 vs. 새로운 온보딩

| Feature | Site Builder (Legacy) | Theme Builder (New) |
|---------|----------------------|-------------------|
| Setup method | Wizard-based form | Agent-guided conversation |
| Theme generation | Limited templates | Custom scaffolding |
| Design tokens | Manual entry | Guided decisions |
| Flexibility | Fixed options | Customizable |
| Future updates | Not referenced | Stored in site_brief |

## 문제 해결

**온보딩 과정이 완료되지 않았을 때**
- 과정 재시작: "Start the Theme Builder onboarding"을 요청하세요.
- WordPress 설치가 최신 상태인지 확인하세요.
- Setup Assistant agent가 활성화되었는지 확인하세요.

**site_brief가 사용되지 않을 때**
- agent가 메모리에 접근할 수 있는지 확인하세요.
- agent에게 "recall my site brief"를 요청하세요.
- 설정에서 메모리가 활성화되었는지 확인하세요.

**생성된 테마가 선호도와 맞지 않을 때**
- Design System Aesthetics skill을 사용하여 개선하세요.
- agent에게 "regenerate the theme with [specific changes]"를 요청하세요.
- 정밀한 제어를 위해 theme.json을 직접 편집하세요.

## 다음 단계

테마 빌더 온보딩을 완료한 후:

1. **사이트 확인**: 사이트를 방문하여 새로운 테마를 확인하세요.
2. **디자인 개선**: Design System Aesthetics skill을 사용하여 조정하세요.
3. **콘텐츠 추가**: 사이트 콘텐츠 구축을 시작하세요.
4. **기능 탐색**: scaffold-block-theme 및 activate-theme과 같은 다른 agent 기능을 학습하세요.
