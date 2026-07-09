---
title: 내장 에이전트
sidebar_position: 12
_i18n_hash: a89717a9bbb03aa1da4d264e01acf11a
---
# 기본 제공 에이전트 {#built-in-agents}

Gratis AI Agent v1.9.0에는 다섯 가지 기본 제공 에이전트가 포함되어 있으며, 각 에이전트는 해당 영역의 일반적인 작업에 맞춘 집중 도구 세트, 맞춤형 시스템 프롬프트, 시작 제안이 미리 구성되어 있습니다. 에이전트를 전환하면 사용자가 별도로 구성하지 않아도 어시스턴트가 할 수 있는 작업과 응답 방식이 바뀝니다. Superdav AI Agent v1.18.0은 관련 통합이 구성된 경우 이러한 워크플로에 일정 인식 도구, 알림 기록, 승인 게이트, SMS 알림을 추가할 수 있습니다.

## 에이전트란? {#what-is-an-agent}

각 에이전트는 다음을 결합한 이름 있는 구성 프로필입니다.

- **도구** — 에이전트가 호출할 수 있도록 허용된 기능(예: 콘텐츠 작성자는 게시물 생성 기능에 접근할 수 있고, 디자인 스튜디오는 CSS 및 theme.json 기능에 접근할 수 있음)
- **시스템 프롬프트** — 에이전트의 어조, 우선순위, 제약 조건을 설정하는 지침
- **제안** — 빠르게 시작할 수 있도록 채팅 인터페이스에 표시되는 미리 작성된 프롬프트

## 에이전트 선택기 접근하기 {#accessing-the-agent-picker}

1. WordPress 관리자 사이드바에서 **Gratis AI Agent** 패널을 엽니다.
2. 채팅 헤더 왼쪽 위의 **에이전트 아이콘**을 클릭합니다(아이콘은 활성 에이전트를 반영하도록 변경됩니다).
3. **에이전트 선택기**가 양식 테이블 오버레이로 열립니다. 각 에이전트는 아이콘, 이름, 한 줄 설명과 함께 나열됩니다.
4. 에이전트 행을 클릭하여 활성화합니다. 채팅 헤더가 즉시 업데이트됩니다.

대화 중에도 에이전트를 전환할 수 있습니다. 새 에이전트의 시스템 프롬프트는 다음 메시지부터 적용됩니다.

## 다섯 가지 기본 제공 에이전트 {#the-five-built-in-agents}

### 콘텐츠 작성자 {#content-writer}

**초점:** 게시물, 페이지, 문의 양식 생성 및 편집.

**사용 가능한 도구:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`. Superdav AI Agent v1.18.0 통합이 활성화된 경우, 구성된 캘린더 컨텍스트, 승인 게이트, 알림, SMS 알림 도구도 승인된 워크플로에서 사용할 수 있습니다.

**잘하는 작업:**
- 브리프나 개요를 바탕으로 블로그 게시물 초안 작성 및 게시
- 새 사이트를 위한 랜딩 페이지 묶음 생성
- 문의 및 상담 양식 구축
- URL 또는 검색을 통해 게시물의 특성 이미지 설정
- 구성된 Google Calendar 컨텍스트를 바탕으로 이벤트 후속 메시지를 초안 작성한 다음, 알림을 보내기 전에 승인을 위해 일시 중지

**시작 제안:**
- *WordPress 멀티사이트의 장점에 대한 500단어 블로그 게시물을 작성하세요.*
- *소개, 서비스, 문의 페이지를 만들고 게시하세요.*
- *문의 페이지에 예약 문의 양식을 추가하세요.*
- *내일 구성된 캘린더 이벤트의 참석자를 위한 알림 초안을 작성하고, 보내기 전에 승인을 기다리세요.*

---

### 사이트 빌더 {#site-builder}

**초점:** 단일 프롬프트에서 시작하는 종단 간 웹사이트 생성.

**사용 가능한 도구:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`. Superdav AI Agent v1.18.0에서는 관리자가 활성화한 곳에서 구성된 관리형 서비스, 승인, 알림, 캘린더, SMS 도구를 사용할 수 있습니다.

**잘하는 작업:**
- 설명된 비즈니스 유형에 맞는 다단계 사이트 구축 계획 생성
- 각 단계(구조, 콘텐츠, 내비게이션, 디자인)를 자율적으로 실행
- 수동 개입 없이 계획 중간의 오류에서 복구
- 구축 과정의 일부로 추천 plugin 설치
- 채팅 인터페이스에서 직접 문의 양식 생성(Superdav AI Agent v1.10.0+)
- 승인 게이트와 알림 기록이 활성화된 경우 중복 알림 없이 출시 알림 또는 참석자 후속 조치 조율

**시작 제안:**
- *갤러리 게시물 유형, 예약 페이지, 문의 양식이 있는 사진 포트폴리오 사이트를 구축하세요.*
- *온라인 메뉴, 영업시간, 테이블 예약 문의 양식이 있는 레스토랑 웹사이트를 만드세요.*
- *서비스 페이지, 포트폴리오 섹션, 블로그가 있는 프리랜서 컨설팅 사이트를 설정하세요.*
- *사이트 빌더를 사용하여 문의 페이지에 문의 양식을 추가하세요.*
- *사이트 출시 체크리스트가 승인된 후, 구성된 이해관계자 연락처로 SMS 알림을 보내세요.*

---

### 디자인 스튜디오 {#design-studio}

**초점:** 시각적 사용자 지정 — 색상, 타이포그래피, CSS, 블록 패턴.

**사용 가능한 도구:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**잘하는 작업:**
- 이름이 지정된 theme 프리셋 적용(minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)
- theme.json을 통해 전역 타이포그래피와 색상 팔레트 미세 조정
- 브랜드별 재정의를 위한 사용자 지정 CSS 삽입
- 페이지의 스크린샷을 찍고 디자인 문제 검토

**시작 제안:**
- *warm-editorial 프리셋을 적용한 다음 기본 색상을 #2d6a4f로 설정하세요.*
- *홈페이지 스크린샷을 찍고 무엇을 개선하면 좋을지 알려 주세요.*
- *전체 너비 배경 이미지와 중앙 정렬 제목이 있는 재사용 가능한 히어로 블록 패턴을 만드세요.*

### Plugin 관리자 {#plugin-manager}

**초점:** WordPress plugins 검색, 설치 및 관리.

**사용 가능한 도구:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**잘하는 작업:**
- 설명된 사용 사례에 가장 적합한 plugin 추천
- 레지스트리에서 기능 팩 설치
- 카테고리별로 사용 가능한 기능 카탈로그 탐색

**시작 제안:**
- *멤버십 디렉터리에 가장 적합한 plugin은 무엇인가요?*
- *WooCommerce 기능 팩을 설치하세요.*
- *사용 가능한 모든 전자상거래 기능 팩을 보여 주세요.*

---

### 지원 어시스턴트 {#support-assistant}

**초점:** 사이트 콘텐츠, 설정, WordPress 구성에 대한 질문 답변.

**사용 가능한 도구:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**잘하는 작업:**
- 현재 사이트 설정 및 옵션 조회
- 사이트에 구성된 게시물 유형, 택소노미, 메뉴 설명
- 실시간 값을 읽어 "이 설정은 무엇을 하나요?" 질문에 답변
- 변경하기 전에 읽기 전용 진단 계층 역할 수행

**시작 제안:**
- *현재 이 사이트에서 활성화된 plugin과 설정은 무엇인가요?*
- *이 사이트에 등록된 모든 custom post type을 나열하세요.*
- *어떤 내비게이션 메뉴가 있으며 어디에 할당되어 있나요?*

---

## Superdav 자동화 통합 {#superdav-automation-integrations}

Superdav AI Agent v1.18.0 통합이 구성되면, 내장 agent가 더 안전한 일정 인식 자동화 워크플로에 참여할 수 있습니다:

- **Google Calendar 읽기 도구**를 통해 agent가 후속 작업을 작성하기 전에 구성된 캘린더와 이벤트를 검사할 수 있습니다.
- **연락처 및 참석자 매핑**은 이벤트 참가자를 WordPress 사용자 또는 알려진 연락처와 매칭하는 데 도움이 됩니다.
- **사람 승인 게이트**는 승인된 사용자가 검토하고 확인할 때까지 민감한 작업을 일시 중지합니다.
- **리마인더 기록**은 예약된 작업이 재시도되거나 반복될 때 중복 알림을 방지합니다.
- **TextBee SMS 알림**은 SMS 자격 증명과 워크플로 권한이 활성화된 경우에만 구성된 문자 메시지를 전송합니다.

권장 워크플로: agent에게 메시지 또는 작업을 준비하도록 요청하고, 승인 프롬프트를 검토한 다음, 승인된 작업이 재개되도록 허용하세요. 반복 리마인더의 경우 동일한 이벤트 또는 연락처에 반복적으로 알림이 전송되지 않도록 리마인더 중복 제거를 활성화된 상태로 유지하세요.

---

## Agent 사용자 지정 {#customising-agents}

각 내장 agent는 `gratis_ai_agent_agents` filter를 통해 확장하거나 교체할 수 있습니다.

### 기존 agent에 사용자 지정 시스템 프롬프트 추가 {#adding-a-custom-system-prompt-to-an-existing-agent}

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### 새 agent 등록 {#registering-a-new-agent}

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    $agents['seo-specialist'] = [
        'name'          => 'SEO Specialist',
        'description'   => 'Optimises posts and pages for search engines.',
        'icon'          => 'dashicons-search',
        'tools'         => [ 'get_option', 'set_option', 'create_post', 'update_post', 'list_post_types' ],
        'system_prompt' => 'You are an SEO specialist. Focus on keyword optimisation, meta descriptions, and structured data.',
        'suggestions'   => [
            'Review the homepage title and meta description.',
            'Suggest title tag improvements for the five most recent posts.',
        ],
    ];
    return $agents;
} );
```

새 agent는 filter가 실행된 직후 Agent Picker에 표시됩니다.

### 내장 agent 제거 {#removing-a-built-in-agent}

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
