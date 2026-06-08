---
title: 내장 에이전트
sidebar_position: 12
_i18n_hash: 4852fdc3ddd1a44a574c100846e84dc5
---
# 내장 에이전트

Gratis AI Agent v1.9.0에는 다섯 가지 내장 에이전트가 포함되어 있습니다. 각 에이전트는 특정 도구 세트, 맞춤형 시스템 프롬프트, 그리고 해당 분야의 일반적인 작업에 맞는 시작 제안으로 미리 설정되어 있습니다. 에이전트를 전환하면 사용자가 별도로 설정할 필요 없이 어시스턴트가 할 수 있는 작업과 응답 방식이 달라집니다.

## 에이전트란 무엇인가요?

각 에이전트는 다음 요소들을 결합한 이름이 지정된 설정 프로필입니다.

- **도구(Tools)** — 에이전트가 호출할 수 있는 기능(예: 콘텐츠 라이터는 게시물 생성 기능에 접근할 수 있고, 디자인 스튜디오는 CSS 및 theme.json 기능에 접근할 수 있습니다)
- **시스템 프롬프트(System prompt)** — 에이전트의 어조, 우선순위, 제약 조건을 설정하는 지침
- **제안(Suggestions)** — 빠르게 시작할 수 있도록 채팅 인터페이스에 표시되는 미리 작성된 프롬프트

## 에이전트 선택기 사용하기

1. WordPress 관리자 사이드바에서 **Gratis AI Agent** 패널을 엽니다.
2. 채팅 헤더의 왼쪽 상단에 있는 **에이전트 아이콘**을 클릭합니다 (활성 에이전트를 반영하여 아이콘이 변경됩니다).
3. **Agent Picker**가 폼-테이블 오버레이로 열립니다. 각 에이전트는 아이콘, 이름, 한 줄 설명과 함께 나열됩니다.
4. 에이전트 행을 클릭하여 활성화합니다. 채팅 헤더가 즉시 업데이트됩니다.

대화 중간에도 에이전트를 전환할 수 있습니다. 새 에이전트의 시스템 프롬프트는 다음 메시지부터 적용됩니다.

## 다섯 가지 내장 에이전트

### Content Writer (콘텐츠 라이터)

**초점:** 게시물, 페이지 및 문의 양식 작성 및 편집.

**사용 가능한 도구:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`

**강점:**
- 개요나 브리프를 바탕으로 블로그 게시물 초안 작성 및 발행
- 신규 사이트를 위한 랜딩 페이지 일괄 생성
- 문의 및 연락 양식 구축
- URL 또는 검색을 통해 게시물에 대표 이미지 설정

**시작 제안:**
- *WordPress 멀티사이트의 이점에 대한 500단어 블로그 게시물을 작성해 주세요.*
- *소개, 서비스, 문의 페이지를 만들고 발행해 주세요.*
- *문의 페이지에 예약 문의 양식을 추가해 주세요.*

---

### Site Builder (사이트 빌더)

**초점:** 단일 프롬프트로 엔드투엔드 웹사이트 생성.

**사용 가능한 도구:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`

**강점:**
- 설명된 비즈니스 유형에 대한 다단계 사이트 빌드 계획 생성
- 각 단계를 자율적으로 실행 — 구조, 콘텐츠, 탐색, 디자인
- 수동 개입 없이 계획 중간의 오류 복구
- 빌드 과정의 일부로 권장 플러그인 설치
- 채팅 인터페이스에서 직접 문의 양식 생성 (Superdav AI Agent v1.10.0 이상)

**시작 제안:**
- *갤러리 포스트 타입, 예약 페이지, 문의 양식이 포함된 사진 포트폴리오 사이트를 구축해 주세요.*
- *온라인 메뉴, 영업시간, 테이블 예약 문의 양식이 있는 레스토랑 웹사이트를 만들어 주세요.*
- *서비스 페이지, 포트폴리오 섹션, 블로그가 있는 프리랜서 컨설팅 사이트를 설정해 주세요.*
- *사이트 빌더를 사용하여 문의 페이지에 연락 양식을 추가해 주세요.*

---

### Design Studio (디자인 스튜디오)

**초점:** 색상, 타이포그래피, CSS 및 블록 패턴을 이용한 시각적 커스터마이징.

**사용 가능한 도구:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**강점:**
- 이름이 지정된 테마 프리셋(minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog) 적용
- theme.json을 통한 전역 타이포그래피 및 색상 팔레트 미세 조정
- 브랜드별 오버라이드를 위한 사용자 지정 CSS 주입
- 페이지 스크린샷을 찍고 디자인 문제를 검토

**시작 제안:**
- *warm-editorial 프리셋을 적용한 다음, 기본 색상을 #2d6a4f로 설정해 주세요.*
- *홈페이지 스크린샷을 찍고 개선할 점을 알려주세요.*
- *전체 너비 배경 이미지와 중앙 정렬된 제목이 있는 재사용 가능한 히어로 블록 패턴을 만들어 주세요.*

---

### Plugin Manager (플러그인 관리자)

**초점:** WordPress 플러그인 검색, 설치 및 관리.

**사용 가능한 도구:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**강점:**
- 설명된 사용 사례에 가장 적합한 플러그인 추천
- 레지스트리에서 기능 묶음(ability packs) 설치
- 카테고리별 사용 가능한 기능 목록 탐색

**시작 제안:**
- *멤버십 디렉터리를 위한 최고의 플러그인은 무엇인가요?*
- *WooCommerce 기능 묶음을 설치해 주세요.*
- *사용 가능한 모든 이커머스 기능 묶음을 보여주세요.*

---

### Support Assistant (지원 어시스턴트)

**초점:** 사이트 콘텐츠, 설정 및 WordPress 구성에 대한 질문 답변.

**사용 가능한 도구:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**강점:**
- 현재 사이트 설정 및 옵션 조회
- 사이트에 구성된 포스트 타입, 택소노미, 메뉴 설명
- 실시간 값을 읽어 "이 설정은 무엇을 하나요?"와 같은 질문에 답변
- 변경을 가하기 전에 읽기 전용 진단 계층 역할 수행

**시작 제안:**
- *이 사이트에서 현재 활성화된 플러그인과 설정은 무엇인가요?*
- *이 사이트에 등록된 모든 사용자 정의 포스트 타입을 나열해 주세요.*
- *어떤 탐색 메뉴가 존재하며 어디에 할당되어 있나요?*

---

## 에이전트 커스터마이징

각 내장 에이전트는 `gratis_ai_agent_agents` 필터를 통해 확장하거나 대체할 수 있습니다.

### 기존 에이전트에 사용자 지정 시스템 프롬프트 추가하기

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### 새 에이전트 등록하기

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

새 에이전트는 필터가 실행된 직후 Agent Picker에 나타납니다.

### 내장 에이전트 제거하기

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
