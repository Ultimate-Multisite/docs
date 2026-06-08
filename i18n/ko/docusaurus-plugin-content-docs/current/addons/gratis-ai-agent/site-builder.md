---
title: Site Builder Orchestration v2
sidebar_position: 4
_i18n_hash: 3a3d15844b4a0751fc59ac3a4e1fb0c0
---
# Site Builder Orchestration v2

Site Builder Orchestration v2 (Gratis AI Agent v1.4.0에서 도입됨)는 다단계 웹사이트 생성을 구동하는 엔진입니다. 에이전트에게 "레스토랑 웹사이트를 만들어라" 또는 "블로그가 있는 포트폴리오를 만들어라"와 같이 요청하면, 오케스트레이터는 이 높은 수준의 목표를 구조화된 **계획(plan)**으로 분해하고, 이를 수행하는 데 필요한 플러그인을 찾아내며, 각 단계를 순차적으로 실행하고, 진행 상황을 추적하며, 오류 발생 시 자율적으로 복구합니다.

---

## 작동 방식

### 1. 계획 생성 (Plan Generation)

에이전트가 사이트 구축 지침을 받으면, `create_site_plan` 기능을 호출하여 JSON 형식의 **사이트 계획(site plan)**을 생성합니다. 이 계획에는 다음 내용이 포함됩니다.

- **Goal** — 완성된 사이트가 수행해야 할 기능
- **Phases** — 순서가 정해진 단계 그룹 (예: _설정_, _콘텐츠 유형_, _디자인_, _콘텐츠_)
- **Steps** — 각 단계 내의 개별 기능 호출
- **Plugin requirements** — 특정 단계를 실행하기 위해 활성화되어야 하는 플러그인
- **Fallbacks** — 기본 단계가 실패했을 때의 대체 단계

**예시 계획 (요약)**

```json
{
  "plan_id": "plan_restaurant_001",
  "goal": "온라인 메뉴, 예약 양식, 연락처 페이지가 있는 레스토랑 웹사이트 구축",
  "phases": [
    {
      "id": "setup",
      "label": "설정",
      "steps": [
        { "ability": "install_ability", "params": { "slug": "gratis-ai-agent-woocommerce" } },
        { "ability": "register_post_type", "params": { "slug": "menu-item", "singular_label": "메뉴 항목", "plural_label": "메뉴 항목들" } },
        { "ability": "register_taxonomy", "params": { "slug": "menu-section", "singular_label": "메뉴 섹션", "plural_label": "메뉴 섹션들", "post_types": ["menu-item"] } }
      ]
    },
    {
      "id": "design",
      "label": "디자인",
      "steps": [
        { "ability": "apply_theme_json_preset", "params": { "preset": "warm-editorial" } },
        { "ability": "inject_custom_css", "params": { "css": ".menu-item { border-radius: 8px; }", "label": "restaurant-ui" } }
      ]
    },
    {
      "id": "navigation",
      "label": "탐색",
      "steps": [
        { "ability": "create_menu", "params": { "name": "주요 탐색", "location": "primary" } },
        { "ability": "add_menu_item", "params": { "menu_id": "__ref:create_menu.menu_id", "type": "custom", "title": "메뉴", "url": "/menu-items/" } },
        { "ability": "add_menu_item", "params": { "menu_id": "__ref:create_menu.menu_id", "type": "custom", "title": "테이블 예약", "url": "/book/" } }
      ]
    }
  ],
  "plugin_requirements": [
    { "slug": "contact-form-7", "reason": "예약 및 연락처 양식에 필요" }
  ]
}
```

### 2. 플러그인 검색 (Plugin Discovery)

실행이 시작되기 전에, 오케스트레이터는 계획의 `plugin_requirements`를 스캔하여 현재 활성화된 플러그인을 확인합니다. 필요한 플러그인이 누락된 경우, 다음 작업을 수행합니다.

1. `recommend_plugin`을 통해 레지스트리에서 최적의 플러그인을 검색합니다.
2. 에이전트에게 추천 사항을 확인하도록 요청합니다.
3. 승인되거나 (설정에서 자동 설치가 활성화된 경우) 설치를 트리거합니다.

플러그인 검색 실패는 치명적이지 않습니다. 오케스트레이터는 영향을 받은 단계를 `skipped`로 표시하고 나머지 계획을 계속 진행합니다.

### 3. 계획 실행 (Plan Execution)

오케스트레이터는 계획 ID와 함께 `execute_site_plan`을 호출합니다. 실행은 단계별로, 그리고 단계별로 진행됩니다.

- **단계 참조** (`__ref:` 접두사) — 단계는 이전 단계의 출력 결과를 참조할 수 있습니다. 위의 예시에서 `__ref:create_menu.menu_id`는 `create_menu` 단계에서 반환된 `menu_id`로 해석됩니다.
- **병렬 단계** — 동일한 단계 내에 있으며 상호 의존성이 없는 단계는 `parallel` 플래그가 설정된 경우 동시에 처리됩니다.
- **단계 시간 초과** — 각 단계는 개별적인 시간 제한(기본값: `Ability Timeout` 설정)을 가집니다. 시간 초과된 단계는 `failed`로 표시되며 계획은 계속 진행됩니다.

### 4. 진행 상황 추적 (Progress Tracking)

언제든지 `get_plan_progress`를 호출하여 실행 상태를 확인할 수 있습니다.

```json
{
  "plan_id": "plan_restaurant_001",
  "status": "in_progress",
  "phases_total": 4,
  "phases_complete": 2,
  "steps_total": 14,
  "steps_complete": 8,
  "steps_failed": 1,
  "steps_skipped": 0,
  "current_step": "add_menu_item",
  "elapsed_seconds": 42
}
```

WP-CLI 사용자는 다음 명령어로 진행 상황을 모니터링할 수 있습니다.

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### 5. 오류 복구 (Error Recovery)

단계가 실패하면, 오케스트레이터는 계획에 정의된 **대체 단계(fallback)**가 있는지 확인합니다.

- **대체 단계 사용 가능** — 대체 단계가 즉시 시도됩니다. 성공하면 실행이 계속됩니다. 대체 단계도 실패하면, 해당 단계는 `failed`로 표시되고 다음 단계로 실행이 계속됩니다.
- **대체 단계 없음** — 해당 단계는 `failed`로 표시됩니다. 중요하지 않은 단계는 건너뛰어지며, 필수 단계( `required: true`로 표시됨)는 현재 단계를 중단하고 단계 수준의 복구 시도를 트리거합니다.

에이전트는 최종 계획 요약에 모든 실패를 보고하며, 복구할 수 없는 오류의 경우 수동 해결 단계를 제안할 수 있습니다.

---

## Site Plan Abilities

### `create_site_plan`

자연어 목표 설명으로부터 구조화된 사이트 계획을 생성합니다.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `goal` | string | Yes | 원하는 웹사이트에 대한 자연어 설명 |
| `style` | string | No | 시각적 스타일 선호도: `minimal`, `bold`, `professional`, `playful`. 기본값: 에이전트가 목표에 따라 선택 |
| `plugins` | array | No | 계획에 포함할 플러그인 슬러그. 오케스트레이터가 필요한 플러그인을 자동으로 추가합니다. |
| `dry_run` | boolean | No | `true`인 경우, 저장하거나 실행하지 않고 계획 JSON을 반환합니다. 기본값 `false` |

**Returns** `{ "plan_id": "plan_restaurant_001", "phases": 4, "steps": 14, "plugin_requirements": 1 }`

---

### `execute_site_plan`

이전에 생성된 사이트 계획의 실행을 시작합니다.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | 실행할 계획의 ID |
| `auto_install_plugins` | boolean | No | `true`인 경우, 확인 없이 필요한 플러그인을 자동으로 설치합니다. 기본값 `false` |
| `max_retries` | integer | No | 다음 단계로 넘어가기 전에 실패한 단계를 재시도할 횟수. 기본값 `1` |

**Returns** `{ "execution_id": "exec_001", "status": "started" }`

---

### `get_plan_progress`

사이트 계획의 현재 실행 상태를 반환합니다.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | 조회할 계획 ID |

**Returns** 위 [진행 상황 추적](#4-progress-tracking)에서 설명한 진행 상황 객체.

---

### `handle_plan_error`

실패한 단계를 수동으로 해결하고 다음 단계부터 계획 실행을 재개합니다. 자동 복구가 불가능하여 개입해야 할 때 사용합니다.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | 계획 ID |
| `step_id` | string | Yes | 실패한 단계의 ID |
| `resolution` | string | Yes | `skip` (건너뛰고 계속), `retry` (즉시 단계 재시도), 또는 `mark_done` (다시 실행하지 않고 성공으로 처리) 중 하나 |

**Returns** `{ "success": true, "plan_id": "plan_restaurant_001", "resumed_from": "add_menu_item" }`

---

## v1과 v2 비교

| Feature | v1 | v2 |
|---|---|---|
| Multi-phase plans | No | Yes |
| Step output references (`__ref:`) | No | Yes |
| Plugin discovery | Manual | Automatic |
| Progress tracking API | No | Yes |
| Error recovery | Fail-and-stop | Fallback + continue |
| Parallel step execution | No | Yes (opt-in per phase) |
| WP-CLI plan commands | No | Yes |
| Benchmark integration | No | Yes (`q-restaurant-website`) |

---

## WP-CLI Plan Commands

### `wp gratis-ai-agent plan create`

목표 설명으로부터 사이트 계획을 생성합니다.

```bash
wp gratis-ai-agent plan create "Build a restaurant website with an online menu, booking form, and contact page" [--dry-run] [--output=json]
```

### `wp gratis-ai-agent plan execute`

이전에 생성된 계획을 실행합니다.

```bash
wp gratis-ai-agent plan execute plan_restaurant_001 [--auto-install-plugins]
```

### `wp gratis-ai-agent plan status`

실행 중이거나 완료된 계획의 현재 진행 상황을 보여줍니다.

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### `wp gratis-ai-agent plan list`

모든 사이트 계획(대기 중, 진행 중, 완료됨)을 나열합니다.

```bash
wp gratis-ai-agent plan list [--status=<status>] [--format=table|json|csv]
```

### `wp gratis-ai-agent plan reset`

실패한 계획을 `pending` 상태로 재설정하여 처음부터 다시 실행할 수 있게 합니다.

```bash
wp gratis-ai-agent plan reset plan_restaurant_001
```
