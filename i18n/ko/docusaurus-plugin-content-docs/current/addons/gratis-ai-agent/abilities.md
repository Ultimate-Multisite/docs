---
title: 기능 참조
sidebar_position: 2
_i18n_hash: 1a83460648ea789162af417c6b11eecc
---
# Abilities 참조

Abilities는 Gratis AI Agent가 사용자의 WordPress 설치에서 호출할 수 있는 원자적 작업입니다. 각 ability는 JSON 스키마를 노출하는 등록된 PHP 클래스입니다. agent는 런타임에 이 스키마를 읽어 어떤 매개변수가 필요한지, ability가 무엇을 반환하는지 이해합니다.

이 페이지는 Gratis AI Agent v1.9.0에 포함되어 제공되는 모든 abilities를 문서화합니다.

---

## 사용자 정의 글 유형 {#custom-post-types}

이 abilities는 agent를 통해 등록된 사용자 정의 글 유형(CPT)을 관리합니다. 등록 정보는 WordPress 옵션 테이블에 유지되므로 plugin 비활성화 및 재활성화 후에도 유지됩니다.

### `register_post_type` {#registerposttype}

새 사용자 정의 글 유형을 등록합니다.

**매개변수**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | 글 유형 키(최대 20자, 대문자 없음, 공백 없음) |
| `singular_label` | string | Yes | 사람이 읽을 수 있는 단수 이름, 예: `Portfolio Item` |
| `plural_label` | string | Yes | 사람이 읽을 수 있는 복수 이름, 예: `Portfolio Items` |
| `public` | boolean | No | 글 유형을 공개적으로 접근할 수 있는지 여부. 기본값 `true` |
| `supports` | array | No | 지원할 기능: `title`, `editor`, `thumbnail`, `excerpt`, `comments`, `revisions`, `custom-fields`. 기본값 `["title","editor"]` |
| `has_archive` | boolean | No | 글 유형 아카이브 페이지를 활성화할지 여부. 기본값 `false` |
| `menu_icon` | string | No | 관리자 메뉴 아이콘용 Dashicons 클래스 또는 URL. 기본값 `"dashicons-admin-post"` |
| `rewrite_slug` | string | No | 글 유형의 URL slug. 기본값은 `slug` |

**예시**

```json
{
  "slug": "portfolio",
  "singular_label": "Portfolio Item",
  "plural_label": "Portfolio Items",
  "public": true,
  "supports": ["title", "editor", "thumbnail"],
  "has_archive": true,
  "menu_icon": "dashicons-portfolio"
}
```

**반환값** `{ "success": true, "slug": "portfolio" }`

---

### `list_post_types` {#listposttypes}

agent가 등록한 모든 사용자 정의 글 유형을 반환합니다.

**매개변수** — 없음

**반환값**

```json
{
  "post_types": [
    {
      "slug": "portfolio",
      "singular_label": "Portfolio Item",
      "plural_label": "Portfolio Items",
      "public": true
    }
  ]
}
```

---

### `delete_post_type` {#deleteposttype}

agent가 이전에 등록한 사용자 정의 글 유형의 등록을 해제합니다. 해당 유형의 기존 글은 database에 남아 있지만 더 이상 글 유형을 통해 접근할 수 없습니다.

**매개변수**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | 제거할 글 유형 키 |

**반환값** `{ "success": true, "slug": "portfolio" }`

---

## 사용자 정의 분류 {#custom-taxonomies}

이 abilities는 사용자 정의 분류를 관리합니다. CPT와 마찬가지로 분류 등록 정보도 유지됩니다.

### `register_taxonomy` {#registertaxonomy}

새 사용자 정의 분류를 등록합니다.

**매개변수**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | 분류 키(최대 32자) |
| `singular_label` | string | Yes | 사람이 읽을 수 있는 단수 이름, 예: `Project Category` |
| `plural_label` | string | Yes | 사람이 읽을 수 있는 복수 이름, 예: `Project Categories` |
| `post_types` | array | Yes | 이 분류가 연결되어야 하는 글 유형 slug |
| `hierarchical` | boolean | No | 카테고리 스타일이면 `true`, 태그 스타일이면 `false`. 기본값 `true` |
| `public` | boolean | No | 용어를 공개적으로 접근할 수 있는지 여부. 기본값 `true` |
| `rewrite_slug` | string | No | 분류의 URL slug. 기본값은 `slug` |

**예시**

```json
{
  "slug": "project-category",
  "singular_label": "Project Category",
  "plural_label": "Project Categories",
  "post_types": ["portfolio"],
  "hierarchical": true
}
```

**반환값** `{ "success": true, "slug": "project-category" }`

---

### `list_taxonomies` {#listtaxonomies}

agent가 등록한 모든 사용자 정의 분류를 반환합니다.

**매개변수** — 없음

**반환값**

```json
{
  "taxonomies": [
    {
      "slug": "project-category",
      "singular_label": "Project Category",
      "post_types": ["portfolio"],
      "hierarchical": true
    }
  ]
}
```

---

### `delete_taxonomy` {#deletetaxonomy}

agent가 이전에 등록한 사용자 정의 분류의 등록을 해제합니다.

**매개변수**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | 제거할 분류 키 |

**반환값** `{ "success": true, "slug": "project-category" }`

---

## 디자인 시스템 {#design-system}

디자인 시스템 abilities는 사용자 정의 CSS부터 block 패턴과 site 로고까지 WordPress site의 시각적 표현을 수정합니다.

### `inject_custom_css` {#injectcustomcss}

`wp_add_inline_style`을 통해 site의 `<head>`에 CSS를 추가합니다. CSS는 `gratis_ai_agent_custom_css` 옵션에 저장되며 ability가 재설정될 때 깔끔하게 대기열에서 제거됩니다.

**매개변수**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `css` | string | Yes | 삽입할 유효한 CSS |
| `label` | string | No | 이 CSS 블록의 사람이 읽을 수 있는 label로, debug logs에서 사용됩니다. 기본값 `"agent-injected"` |
| `replace` | boolean | No | `true`이면 이전에 삽입된 모든 CSS를 대체합니다. 기본값 `false`(추가) |

**예시**

```json
{
  "css": ":root { --primary: #1a1a2e; --accent: #e94560; } body { font-family: 'Inter', sans-serif; }",
  "label": "brand-colours",
  "replace": false
}
```

**반환값** `{ "success": true, "bytes": 96 }`

---

### `add_block_pattern` {#addblockpattern}

WordPress 패턴 라이브러리에 재사용 가능한 block 패턴을 등록합니다.

**매개변수**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | 패턴 식별자, 예: `gratis/hero-dark` |
| `title` | string | Yes | 편집기에 표시되는 사람이 읽을 수 있는 패턴 이름 |
| `content` | string | Yes | 패턴용 직렬화된 block 마크업(HTML) |
| `categories` | array | No | 패턴 카테고리 slug, 예: `["featured", "hero"]` |
| `description` | string | No | 패턴 선택기에 표시되는 짧은 설명 |
| `keywords` | array | No | 검색 키워드 |

**반환값** `{ "success": true, "slug": "gratis/hero-dark" }`

---

### `list_block_patterns` {#listblockpatterns}

agent가 등록한 모든 block 패턴을 나열합니다.

**매개변수** — 없음

**반환값**

```json
{
  "patterns": [
    {
      "slug": "gratis/hero-dark",
      "title": "Dark Hero",
      "categories": ["hero"]
    }
  ]
}
```

---

### `set_site_logo` {#setsitelogo}

WordPress 사이트 로고를 지정된 첨부 파일 ID 또는 원격 이미지 URL로 설정합니다. URL이 제공되면 이미지를 다운로드하여 미디어 라이브러리로 가져옵니다.

**매개변수**

| 매개변수 | 유형 | 필수 | 설명 |
|---|---|---|---|
| `attachment_id` | integer | 아니요 | 기존 미디어 라이브러리 첨부 파일의 ID |
| `url` | string | 아니요 | 가져와서 로고로 설정할 원격 이미지 URL |

`attachment_id` 또는 `url` 중 하나를 제공해야 합니다.

**반환값** `{ "success": true, "attachment_id": 42 }`

---

### `apply_theme_json_preset` {#applythemejsonpreset}

이름이 지정된 색상/타이포그래피 프리셋을 활성 테마의 `theme.json`(또는 `global-styles`)에 적용합니다. 프리셋은 Gratis AI Agent 팀에서 유지 관리하는 엄선된 번들입니다.

**매개변수**

| 매개변수 | 유형 | 필수 | 설명 |
|---|---|---|---|
| `preset` | string | 예 | 프리셋 이름, 예: `minimal-dark`, `warm-editorial`, `corporate-blue` |
| `merge` | boolean | 아니요 | `true`이면 기존 값을 교체하지 않고 병합합니다. 기본값은 `false`입니다 |

**사용 가능한 프리셋**

| 프리셋 | 설명 |
|---|---|
| `minimal-dark` | 거의 검은 배경, 흰색 텍스트, 단일 강조 색상 |
| `warm-editorial` | 따뜻한 미색 배경, 세리프 제목, 흙빛 강조 색상 |
| `corporate-blue` | 전문적인 타이포그래피가 적용된 네이비와 흰색 팔레트 |
| `vibrant-startup` | 밝은 그라데이션, 둥근 모서리, 현대적인 산세리프 글꼴 |
| `classic-blog` | 중립적인 회색, 편안한 줄 높이, 전통적인 레이아웃 간격 |

**반환값** `{ "success": true, "preset": "minimal-dark" }`

---

## 전역 스타일 {#global-styles}

전역 스타일 기능은 WordPress 전역 스타일 API를 통해 theme.json 값을 읽고 쓰며, 사이트 전체의 모든 블록과 템플릿에 영향을 줍니다.

### `get_global_styles` {#getglobalstyles}

현재 전역 스타일 구성을 반환합니다.

**매개변수**

| 매개변수 | 유형 | 필수 | 설명 |
|---|---|---|---|
| `path` | string | 아니요 | 특정 값에 대한 JSON 포인터, 예: `/color/palette` 또는 `/typography/fontSizes`. 생략하면 전체 객체를 반환합니다. |

**반환값** 전체 전역 스타일 객체 또는 `path`의 값입니다.

---

### `set_global_styles` {#setglobalstyles}

전역 스타일 구성에서 하나 이상의 값을 업데이트합니다.

**매개변수**

| 매개변수 | 유형 | 필수 | 설명 |
|---|---|---|---|
| `path` | string | 예 | 설정할 값에 대한 JSON 포인터, 예: `/color/palette` |
| `value` | any | 예 | 새 값 |

**예시** — 팔레트에 색상 추가

```json
{
  "path": "/color/palette",
  "value": [
    { "slug": "primary", "color": "#1a1a2e", "name": "Primary" },
    { "slug": "accent",  "color": "#e94560", "name": "Accent" }
  ]
}
```

**반환값** `{ "success": true, "path": "/color/palette" }`

---

### `reset_global_styles` {#resetglobalstyles}

에이전트가 적용한 모든 전역 스타일 변경 사항을 초기화하여 테마 기본값을 복원합니다.

**매개변수** — 없음

**반환값** `{ "success": true }`

---

## 내비게이션 메뉴 {#navigation-menus}

내비게이션 메뉴 기능은 WordPress 내비게이션 메뉴와 해당 항목을 생성하고 관리합니다.

### `create_menu` {#createmenu}

새 WordPress 내비게이션 메뉴를 생성합니다.

**매개변수**

| 매개변수 | 유형 | 필수 | 설명 |
|---|---|---|---|
| `name` | string | 예 | 메뉴 이름, 예: `Primary Navigation` |
| `location` | string | 아니요 | 이 메뉴를 할당할 테마 위치, 예: `primary` |

**반환값** `{ "success": true, "menu_id": 7 }`

---

### `update_menu` {#updatemenu}

메뉴 이름을 변경하거나 테마 위치에 다시 할당합니다.

**매개변수**

| 매개변수 | 유형 | 필수 | 설명 |
|---|---|---|---|
| `menu_id` | integer | 예 | 업데이트할 메뉴의 ID |
| `name` | string | 아니요 | 새 메뉴 이름 |
| `location` | string | 아니요 | 할당하거나 다시 할당할 테마 위치 |

**반환값** `{ "success": true, "menu_id": 7 }`

---

### `add_menu_item` {#addmenuitem}

기존 내비게이션 메뉴에 항목을 추가합니다.

**매개변수**

| 매개변수 | 유형 | 필수 | 설명 |
|---|---|---|---|
| `menu_id` | integer | 예 | 대상 메뉴의 ID |
| `type` | string | 예 | 항목 유형: `custom`, `post_type` 또는 `taxonomy` |
| `title` | string | 아니요 | 메뉴 항목의 레이블(`custom` 유형에는 필수) |
| `url` | string | 아니요 | `custom` 항목의 URL |
| `object_id` | integer | 아니요 | `post_type`/`taxonomy` 항목의 게시물 ID 또는 용어 ID |
| `parent_id` | integer | 아니요 | 이 항목을 중첩할 상위 메뉴 항목 ID |
| `position` | integer | 아니요 | 메뉴에서 0부터 시작하는 위치 |

**반환값** `{ "success": true, "item_id": 12 }`

---

### `remove_menu_item` {#removemenuitem}

내비게이션 메뉴에서 항목을 제거합니다.

**매개변수**

| 매개변수 | 유형 | 필수 | 설명 |
|---|---|---|---|
| `item_id` | integer | 예 | 제거할 메뉴 항목 ID |

**반환값** `{ "success": true, "item_id": 12 }`

---

### `list_menus` {#listmenus}

할당된 테마 위치를 포함하여 모든 WordPress 내비게이션 메뉴를 나열합니다.

**매개변수** — 없음

**반환값**

```json
{
  "menus": [
    {
      "menu_id": 7,
      "name": "Primary Navigation",
      "location": "primary",
      "item_count": 5
    }
  ]
}
```

---

## 옵션 관리 {#options-management}

옵션 기능은 `get_option` / `update_option`을 통해 WordPress 옵션을 읽고 씁니다. 기본 제공 안전 차단 목록은 중요한 설정이 실수로 수정되는 것을 방지합니다.

### `get_option` {#getoption}

WordPress 옵션을 읽습니다.

**매개변수**

| 매개변수 | 유형 | 필수 | 설명 |
|---|---|---|---|
| `option_name` | string | 예 | 옵션 키, 예: `blogname` |

**반환값** `{ "option_name": "blogname", "value": "My Site" }`

`option_name`이 안전 차단 목록에 있으면 오류를 반환합니다.

---

### `set_option` {#setoption}

WordPress 옵션을 씁니다.

**매개변수**

| 매개변수 | 유형 | 필수 | 설명 |
|---|---|---|---|
| `option_name` | string | 예 | 옵션 키 |
| `value` | any | 예 | 새 값(배열/객체의 경우 자동으로 직렬화됨) |
| `autoload` | string | 아니요 | `"yes"` 또는 `"no"`. 기본값은 기존 autoload 설정을 유지합니다 |

`option_name`이 안전 차단 목록에 있으면 오류를 반환합니다.

**반환값** `{ "success": true, "option_name": "blogname" }`

---

### `delete_option` {#deleteoption}

WordPress 옵션을 삭제합니다.

**매개변수**

| 매개변수 | 유형 | 필수 | 설명 |
|---|---|---|---|
| `option_name` | string | 예 | 삭제할 옵션 키 |

`option_name`이 안전 차단 목록에 있으면 오류를 반환합니다.

**반환값** `{ "success": true, "option_name": "my_custom_option" }`

---

### `list_options` {#listoptions}

패턴과 일치하는 WordPress 옵션을 나열합니다.

**매개변수**

| 매개변수 | 유형 | 필수 | 설명 |
|---|---|---|---|
| `pattern` | string | 아니요 | 옵션 이름을 필터링할 SQL LIKE 패턴입니다. 예: `gratis_%`. 생략하면 모든 옵션을 반환합니다(대규모 데이터베이스에서는 주의해서 사용). |
| `limit` | integer | 아니요 | 최대 결과 수입니다. 기본값 `50`, 최대 `500` |

**반환값**

```json
{
  "options": [
    { "option_name": "gratis_ai_agent_version", "autoload": "yes" }
  ],
  "total": 1
}
```

---

## 콘텐츠 관리 {#content-management}

콘텐츠 관리 기능은 WordPress 게시물과 페이지를 만들고 편집합니다. 게시물 ID가 반환되므로 다중 기능 계획의 후속 단계에서 생성된 콘텐츠를 참조할 수 있습니다.

### `create_post` {#createpost}

새 WordPress 게시물, 페이지 또는 사용자 지정 게시물 유형 항목을 만듭니다.

**매개변수**

| 매개변수 | 유형 | 필수 | 설명 |
|---|---|---|---|
| `title` | string | 예 | 게시물 제목 |
| `content` | string | 아니요 | 게시물 본문 — 일반 텍스트, HTML 또는 직렬화된 블록 마크업을 허용합니다 |
| `status` | string | 아니요 | `draft`, `publish`, `pending`, `private`. 기본값 `draft` |
| `post_type` | string | 아니요 | 게시물 유형 슬러그입니다. 예: `post`, `page` 또는 등록된 모든 CPT. 기본값 `post` |
| `excerpt` | string | 아니요 | 아카이브와 검색 결과에 표시되는 짧은 요약 |
| `categories` | array | 아니요 | 할당할 카테고리 이름 또는 ID의 배열 |
| `tags` | array | 아니요 | 할당할 태그 이름 또는 ID의 배열 |
| `author` | integer | 아니요 | 게시물 작성자로 설정할 WordPress 사용자 ID입니다. 기본값은 현재 사용자입니다 |
| `date` | string | 아니요 | ISO 8601 형식의 게시 날짜입니다. 예: `2026-05-01T09:00:00` |
| `page_template` | string | 아니요 | 이 게시물 또는 페이지에 할당할 템플릿 파일입니다. 예: `page-full-width.php`. `post_type`이 `page`이거나 페이지 템플릿을 지원하는 CPT인 경우에만 의미가 있습니다. |

**예시**

```json
{
  "title": "Welcome to Our New Site",
  "content": "<!-- wp:paragraph --><p>Hello world!</p><!-- /wp:paragraph -->",
  "status": "publish",
  "post_type": "page",
  "page_template": "page-full-width.php"
}
```

**반환값** `{ "success": true, "post_id": 42, "permalink": "https://example.com/welcome/" }`

---

### `update_post` {#updatepost}

기존 WordPress 게시물 또는 페이지를 업데이트합니다.

**매개변수**

| 매개변수 | 유형 | 필수 | 설명 |
|---|---|---|---|
| `post_id` | integer | 예 | 업데이트할 게시물의 ID |
| `title` | string | 아니요 | 새 게시물 제목 |
| `content` | string | 아니요 | 새 게시물 본문 |
| `status` | string | 아니요 | 새 상태: `draft`, `publish`, `pending`, `private` |
| `excerpt` | string | 아니요 | 새 요약문 |
| `categories` | array | 아니요 | 전체 카테고리 목록을 이 이름 또는 ID 배열로 바꿉니다 |
| `tags` | array | 아니요 | 전체 태그 목록을 이 이름 또는 ID 배열로 바꿉니다 |
| `page_template` | string | 아니요 | 이 게시물 또는 페이지에 할당할 새 템플릿 파일입니다. 예: `page-full-width.php`. 템플릿 할당을 제거하고 theme 기본값으로 되돌리려면 빈 문자열을 전달하세요. |

**예시** — 생성 후 템플릿 변경

```json
{
  "post_id": 42,
  "page_template": "page-full-width.php"
}
```

**반환값** `{ "success": true, "post_id": 42 }`

---

### `batch_create_posts` {#batchcreateposts}

단일 기능 호출로 여러 게시물을 만들어 site 구축 또는 대량 콘텐츠 가져오기 중 왕복을 줄입니다. 게시물은 순서대로 생성되며, 하나가 실패해도 나머지는 계속 진행되고 실패는 결과 배열에 보고됩니다.

**매개변수**

| 매개변수 | 유형 | 필수 | 설명 |
|---|---|---|---|
| `posts` | array | 예 | 게시물 객체의 배열이며, 각 객체는 `create_post`와 동일한 매개변수를 허용합니다 |
| `stop_on_error` | boolean | 아니요 | `true`이면 첫 번째 실패 후 처리를 중지합니다. 기본값 `false` |

**예시**

```json
{
  "posts": [
    {
      "title": "About Us",
      "post_type": "page",
      "status": "publish",
      "page_template": "page-full-width.php"
    },
    {
      "title": "Services",
      "post_type": "page",
      "status": "publish"
    },
    {
      "title": "Contact",
      "post_type": "page",
      "status": "publish"
    }
  ]
}
```

**반환값**

```json
{
  "created": 3,
  "failed": 0,
  "results": [
    { "success": true, "post_id": 42, "title": "About Us" },
    { "success": true, "post_id": 43, "title": "Services" },
    { "success": true, "post_id": 44, "title": "Contact" }
  ]
}
```

---

### `set_featured_image` {#setfeaturedimage}

기존 게시물 또는 페이지에 대표 이미지(게시물 썸네일)를 할당합니다. 기존 Media Library 첨부 파일 ID 또는 원격 이미지 URL을 허용합니다. URL이 제공되면 이미지가 자동으로 다운로드되어 가져와집니다.

**매개변수**

| 매개변수 | 유형 | 필수 | 설명 |
|---|---|---|---|
| `post_id` | integer | 예 | 업데이트할 게시물 또는 페이지의 ID |
| `attachment_id` | integer | 아니요 | 기존 Media Library 첨부 파일의 ID |
| `url` | string | 아니요 | 가져와서 대표 이미지로 설정할 원격 이미지 URL |
| `alt_text` | string | 아니요 | URL에서 가져온 경우 첨부 파일에 적용할 대체 텍스트 |

`attachment_id` 또는 `url` 중 하나를 제공해야 합니다.

**반환값** `{ "success": true, "post_id": 42, "attachment_id": 17 }`

---

### `create_contact_form` {#createcontactform}

활성 form plugin(Contact Form 7, WPForms, Fluent Forms 또는 Gravity Forms, 설치된 항목에 따라 다름)을 사용하여 문의 양식을 만듭니다. 모든 게시물 또는 페이지에 삽입할 수 있는 쇼트코드를 반환합니다.

**매개변수**

| 매개변수 | 유형 | 필수 | 설명 |
|---|---|---|---|
| `title` | string | 예 | 양식 plugin 관리자에 표시되는 양식 이름 |
| `fields` | array | 예 | 양식 필드의 정렬된 목록(아래 Field 객체 참조) |
| `recipient` | string | 아니요 | 제출 내용을 받을 이메일 주소. 기본값은 WordPress 관리자 이메일입니다 |
| `subject` | string | 아니요 | 이메일 제목 줄. Contact Form 7 사용 시 `[your-name]` 및 `[your-subject]` placeholder를 지원합니다 |
| `confirmation_message` | string | 아니요 | 성공적으로 제출한 후 표시되는 메시지. 기본값: `"Thank you for your message. We'll be in touch soon."` |

**Field 객체**

| 키 | 유형 | 필수 | 설명 |
|---|---|---|---|
| `name` | string | 예 | 내부 필드 이름 / machine key |
| `label` | string | 예 | 양식에 표시되는 사람이 읽을 수 있는 label |
| `type` | string | 예 | `text`, `email`, `tel`, `textarea`, `select`, `checkbox`, `radio`, `file`, `date` |
| `required` | boolean | 아니요 | 제출 전에 필드를 반드시 채워야 하는지 여부. 기본값 `false` |
| `options` | array | 아니요 | `select`, `checkbox`, 및 `radio` 필드의 옵션 |
| `placeholder` | string | 아니요 | 텍스트 유형 입력을 위한 placeholder 텍스트 |

**예시**

```json
{
  "title": "Restaurant Booking Enquiry",
  "fields": [
    { "name": "your-name",    "label": "Name",             "type": "text",     "required": true },
    { "name": "your-email",   "label": "Email",            "type": "email",    "required": true },
    { "name": "party-size",   "label": "Party size",       "type": "select",   "options": ["1–2", "3–5", "6–10", "10+"] },
    { "name": "your-message", "label": "Special requests", "type": "textarea", "required": false }
  ],
  "recipient": "bookings@example.com",
  "subject": "New booking enquiry from [your-name]"
}
```

**반환값**

```json
{
  "success": true,
  "form_id": 3,
  "shortcode": "[contact-form-7 id=\"3\" title=\"Restaurant Booking Enquiry\"]"
}
```

---

## 시각적 검토 {#visual-review}

시각적 검토 기능을 통해 agent는 라이브 페이지의 스크린샷을 캡처하고 분석할 수 있어, 브라우저 확장 프로그램 없이도 자율적인 디자인 검토, 전후 비교, 시각적 회귀 검사가 가능합니다.

### `capture_screenshot` {#capturescreenshot}

서버 측 헤드리스 브라우저를 사용하여 지정된 URL의 WordPress 페이지 스크린샷을 캡처합니다. 이미지는 Media Library에 저장되고 CDN URL이 반환됩니다.

**매개변수**

| 매개변수 | 유형 | 필수 | 설명 |
|---|---|---|---|
| `url` | string | 예 | 스크린샷을 찍을 페이지의 전체 URL, 예: `https://example.com/about/` |
| `width` | integer | 아니요 | 픽셀 단위의 뷰포트 너비. 기본값 `1280` |
| `height` | integer | 아니요 | 픽셀 단위의 뷰포트 높이. 기본값 `800` |
| `full_page` | boolean | 아니요 | 뷰포트만이 아니라 스크롤 가능한 전체 페이지를 캡처합니다. 기본값 `false` |
| `delay_ms` | integer | 아니요 | 캡처 전 페이지 로드 후 대기할 밀리초로, 애니메이션 콘텐츠에 유용합니다. 기본값 `500` |
| `label` | string | 아니요 | Media Library에서 첨부 파일과 함께 저장되는 사람이 읽을 수 있는 label |

**반환값**

```json
{
  "success": true,
  "attachment_id": 88,
  "url": "https://example.com/wp-content/uploads/2026/04/screenshot-about.png",
  "width": 1280,
  "height": 800
}
```

---

### `compare_screenshots` {#comparescreenshots}

두 개의 스크린샷을 받아 시각적 차이 점수와 변경된 영역을 강조 표시한 차이 이미지를 반환합니다. 디자인 변경이 예상한 결과를 냈는지 확인하거나 의도하지 않은 회귀를 감지하는 데 유용합니다.

**매개변수**

| 매개변수 | 유형 | 필수 | 설명 |
|---|---|---|---|
| `before_url` | string | 예 | "이전" 상태로 캡처할 페이지의 URL |
| `after_url` | string | 예 | "이후" 상태로 캡처할 페이지의 URL. 시간 차이를 두고 비교하는 경우 같은 URL일 수 있습니다 |
| `width` | integer | 아니요 | 두 캡처 모두에 사용할 뷰포트 너비. 기본값 `1280` |
| `threshold` | float | 아니요 | 픽셀 차이 임계값(0.0–1.0). 이 허용 범위 내의 픽셀은 변경되지 않은 것으로 간주됩니다. 기본값 `0.1` |

**반환값**

```json
{
  "success": true,
  "diff_score": 0.04,
  "changed_pixels": 2340,
  "total_pixels": 1024000,
  "diff_attachment_id": 91,
  "diff_url": "https://example.com/wp-content/uploads/2026/04/diff-about.png"
}
```

`diff_score`가 `0.0`이면 보이는 변경 사항이 없음을 의미하고, `1.0`이면 모든 픽셀이 변경되었음을 의미합니다.

---

### `review_page_design` {#reviewpagedesign}

페이지의 스크린샷을 캡처하여 시각적 분석을 위해 언어 모델로 보냅니다. 레이아웃, 타이포그래피, 색상 사용, 접근성 문제를 다루는 구조화된 평가를 반환합니다.

**매개변수**

| 매개변수 | 유형 | 필수 | 설명 |
|---|---|---|---|
| `url` | string | 예 | 검토할 페이지의 전체 URL |
| `focus` | string | 아니요 | 강조할 검토 영역의 쉼표로 구분된 목록: `layout`, `typography`, `colour`, `accessibility`, `mobile`. 기본값: 모든 영역 |
| `width` | integer | 아니요 | 뷰포트 너비. 기본값 `1280` |

**반환값**

```json
{
  "success": true,
  "screenshot_url": "https://example.com/wp-content/uploads/2026/04/review-about.png",
  "assessment": {
    "overall": "The page structure is clean and readable. Two accessibility issues detected.",
    "layout": "Good visual hierarchy. Hero section is prominent.",
    "typography": "Body text is 15px — consider increasing to 16px for readability.",
    "colour": "Contrast ratio on the CTA button (#fff on #4a90e2) is 3.1:1 — below the WCAG AA threshold of 4.5:1.",
    "accessibility": ["Low contrast on CTA button", "Missing alt text on hero image"],
    "suggestions": ["Darken the CTA button to #1a5cb0 to pass WCAG AA", "Add descriptive alt text to the hero image"]
  }
}
```

---

## 설치 가능한 기능 {#installable-abilities}

설치 가능한 기능 Registry를 사용하면 WordPress plugin으로 배포되는 추가 기능 팩으로 agent를 확장할 수 있습니다. 각 팩은 표준 기능 API를 사용하여 하나 이상의 기능을 등록합니다.

### `list_available_abilities` {#listavailableabilities}

Registry에서 설치 가능한 기능 팩의 카탈로그를 반환합니다.

**매개변수**

| 매개변수 | 유형 | 필수 | 설명 |
|---|---|---|---|
| `category` | string | 아니요 | 카테고리별 필터링: `ecommerce`, `seo`, `media`, `social`, `developer` |

**반환값**

```json
{
  "packs": [
    {
      "slug": "gratis-ai-agent-woocommerce",
      "name": "WooCommerce Abilities",
      "category": "ecommerce",
      "version": "1.0.0",
      "abilities": ["create_product", "update_pricing", "manage_inventory"],
      "installed": false
    }
  ]
}
```

---

### `install_ability` {#installability}

레지스트리에서 능력 팩을 다운로드하고 활성화합니다.

**매개변수**

| 매개변수 | 유형 | 필수 | 설명 |
|---|---|---|---|
| `slug` | string | 예 | 능력 팩 plugin slug |

**반환값** `{ "success": true, "slug": "gratis-ai-agent-woocommerce", "abilities_added": 3 }`

---

### `recommend_plugin` {#recommendplugin}

설명된 사용 사례에 가장 적합한 plugin을 찾기 위해 능력 레지스트리를 쿼리하고, 선택적으로 설치합니다.

**매개변수**

| 매개변수 | 유형 | 필수 | 설명 |
|---|---|---|---|
| `description` | string | 예 | 원하는 기능에 대한 자연어 설명 |
| `install` | boolean | 아니요 | `true`이면 추천된 plugin을 즉시 설치합니다. 기본값은 `false`입니다 |

**예시**

```json
{
  "description": "I need a contact form with file upload support and spam protection",
  "install": false
}
```

**반환값**

```json
{
  "recommendation": {
    "slug": "contact-form-7",
    "name": "Contact Form 7",
    "reason": "Widely adopted, supports file uploads, and integrates with Akismet for spam filtering.",
    "alternatives": ["wpforms-lite", "fluent-forms"]
  }
}
```
