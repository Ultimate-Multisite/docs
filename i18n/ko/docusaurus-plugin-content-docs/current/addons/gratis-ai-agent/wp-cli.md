---
title: WP-CLI Reference
sidebar_position: 3
_i18n_hash: 365bd4ea4c1118b4258408f43a8020fc
---
# WP-CLI 레퍼런스 {#wp-cli-reference}

Gratis AI Agent는 `wp gratis-ai-agent` 명령어 패밀리를 제공하여 커맨드 라인에서 에이전트를 벤치마킹하고, 에이빌리티를 관리하며, 에이전트 상태를 조회할 수 있게 합니다. 모든 명령어는 WP-CLI 2.0 이상이 필요합니다.

## 설치 {#installation}

플러그인이 활성화되면 WP-CLI 명령어가 자동으로 등록됩니다. 다음 명령어로 확인해 보세요.

```bash
wp gratis-ai-agent --info
```

---

## `wp gratis-ai-agent benchmark` {#wp-gratis-ai-agent-benchmark}

에이전트의 모든 기능을 테스트하는 복잡하고 다단계의 프롬프트 세트인 '에이전트 기능 벤치마크 스위트'를 실행합니다. 이 기능을 사용하여 모델 성능을 평가하거나, AI 제공업체를 비교하거나, 프로덕션 환경에 배포하기 전에 에이빌리티 팩을 검증할 수 있습니다.

### Synopsis {#synopsis}

```bash
wp gratis-ai-agent benchmark [--question=<id>] [--provider=<provider>] [--model=<model>] [--output=<format>] [--save]
```

### Options {#options}

| Option | Description |
|---|---|
| `--question=<id>` | 전체 스위트 대신 ID를 사용하여 단일 벤치마크 질문을 실행합니다. |
| `--provider=<provider>` | 이 실행에 대해 설정된 AI 제공업체를 재정의합니다 (예: `anthropic`, `openai`). |
| `--model=<model>` | 이 실행에 대해 설정된 모델을 재정의합니다 (예: `claude-opus-4-6`, `gpt-4o`). |
| `--output=<format>` | 출력 형식: `table` (기본값), `json`, `csv` |
| `--save` | 벤치마크 결과를 데이터베이스에 저장하여 이력 비교에 사용합니다. |

### Examples {#examples}

현재 제공업체와 모델을 사용하여 전체 벤치마크 스위트를 실행합니다.

```bash
wp gratis-ai-agent benchmark
```

단일 질문(`q-restaurant-website`)을 실행하고 JSON 형식으로 출력합니다.

```bash
wp gratis-ai-agent benchmark --question=q-restaurant-website --output=json
```

특정 모델을 대상으로 결과를 저장하며 실행합니다.

```bash
wp gratis-ai-agent benchmark --model=claude-opus-4-6 --save
```

### Output {#output}

벤치마크는 다음 열을 가진 질문별 한 행을 출력합니다.

| Column | Description |
|---|---|
| `ID` | 질문 식별자 |
| `Description` | 벤치마크 시나리오에 대한 간략한 요약 |
| `Score` | 통과/실패 또는 수치 점수 (0–100) |
| `Abilities Used` | 호출된 에이빌리티의 쉼표로 구분된 목록 |
| `Tokens` | 소비된 총 토큰 수 |
| `Duration` | 초 단위의 경과 시간 |

```
ID                       Description                         Score  Abilities Used               Tokens  Duration
q-portfolio-site         Create a portfolio CPT with tags    100    register_post_type, reg...   4821    18.3s
q-restaurant-website     Build a full restaurant website     92     create_site_plan, execut...  12430   54.1s
q-dark-mode-theme        Apply a dark theme preset           100    apply_theme_json_preset      986     4.2s
...
```

### Benchmark Questions {#benchmark-questions}

기본 스위트에는 다음 질문들이 포함되어 있습니다.

| ID | Scenario |
|---|---|
| `q-portfolio-site` | 프로젝트 카테고리 전용 CPT를 생성하고 블록 패턴을 등록합니다. |
| `q-restaurant-website` | 메뉴 CPT, 예약 폼, 내비게이션을 갖춘 전체 레스토랑 웹사이트를 구축합니다. |
| `q-dark-mode-theme` | 다크 모드 디자인 프리셋을 적용하고 브랜드 색상을 주입합니다. |
| `q-nav-builder` | 중첩된 드롭다운이 있는 4개 항목의 기본 내비게이션 메뉴를 생성합니다. |
| `q-options-roundtrip` | 워드프레스 옵션 세트를 읽고, 수정하고, 복원합니다. |
| `q-ability-install` | 설명된 사용 사례에 가장 적합한 에이빌리티 팩을 발견하고 설치합니다. |

추가 질문은 `gratis_ai_agent_benchmark_questions` 필터를 통해 등록할 수 있습니다.

---

## `wp gratis-ai-agent abilities` {#wp-gratis-ai-agent-abilities}

설치된 에이빌리티와 에이빌리티 팩을 관리합니다.

### `wp gratis-ai-agent abilities list` {#wp-gratis-ai-agent-abilities-list}

등록된 모든 에이빌리티, 해당 출처(core 또는 pack), 그리고 현재 상태를 나열합니다.

```bash
wp gratis-ai-agent abilities list [--format=<format>]
```

**Options**

| Option | Description |
|---|---|
| `--format=<format>` | 출력 형식: `table` (기본값), `json`, `csv` |

**Example output**

```
Ability                   Source                          Status
register_post_type        gratis-ai-agent (core)          active
list_post_types           gratis-ai-agent (core)          active
delete_post_type          gratis-ai-agent (core)          active
register_taxonomy         gratis-ai-agent (core)          active
inject_custom_css         gratis-ai-agent (core)          active
apply_theme_json_preset   gratis-ai-agent (core)          active
create_product            gratis-ai-agent-woocommerce     active
```

---

### `wp gratis-ai-agent abilities install` {#wp-gratis-ai-agent-abilities-install}

레지스트리에서 에이빌리티 팩을 다운로드하고 활성화합니다.

```bash
wp gratis-ai-agent abilities install <slug>
```

**Arguments**

| Argument | Description |
|---|---|
| `<slug>` | 에이빌리티 팩의 플러그인 슬러그, 예: `gratis-ai-agent-woocommerce` |

**Example**

```bash
wp gratis-ai-agent abilities install gratis-ai-agent-woocommerce
Success: Installed gratis-ai-agent-woocommerce. Added 3 abilities: create_product, update_pricing, manage_inventory.
```

---

### `wp gratis-ai-agent abilities disable` {#wp-gratis-ai-agent-abilities-disable}

팩을 제거하지 않고 특정 에이빌리티를 비활성화합니다. 특정 사이트에서 에이전트의 범위를 제한할 때 유용합니다.

```bash
wp gratis-ai-agent abilities disable <ability>
```

**Example**

```bash
wp gratis-ai-agent abilities disable delete_post_type
Success: Ability 'delete_post_type' disabled.
```

---

### `wp gratis-ai-agent abilities enable` {#wp-gratis-ai-agent-abilities-enable}

이전에 비활성화했던 에이빌리티를 다시 활성화합니다.

```bash
wp gratis-ai-agent abilities enable <ability>
```

---

## `wp gratis-ai-agent status` {#wp-gratis-ai-agent-status}

현재 에이전트 설정 및 연결 상태를 표시합니다.

```bash
wp gratis-ai-agent status
```

**Example output**

```
Plugin Version:    1.4.0
AI Provider:       Anthropic
Model:             claude-sonnet-4-6
Provider Status:   Connected
Abilities Loaded:  24
Benchmark Results: 3 saved runs (last: 2026-04-15)
Options Blocklist: 18 entries
```

---

## `wp gratis-ai-agent logs` {#wp-gratis-ai-agent-logs}

디버그 로그에서 최근 에이전트 활동을 표시합니다.

```bash
wp gratis-ai-agent logs [--last=<n>] [--level=<level>] [--ability=<ability>]
```

**Options**

| Option | Description |
|---|---|
| `--last=<n>` | 최근 N개의 로그 항목을 표시합니다. 기본값은 `50`입니다. |
| `--level=<level>` | 레벨별 필터링: `info`, `warning`, `error` |
| `--ability=<ability>` | 에이빌리티 이름별 필터링 |

**Example**

```bash
wp gratis-ai-agent logs --last=20 --level=error
```

---

## `wp gratis-ai-agent reset` {#wp-gratis-ai-agent-reset}

에이전트 상태를 초기화합니다. 주입된 CSS를 지우고, 에이전트가 등록한 CPT와 Taxonomy를 제거하며, 전역 스타일을 초기화하고, 에이전트의 옵션 캐시를 비웁니다. 플러그인이나 설정 자체를 제거하지는 않습니다.

```bash
wp gratis-ai-agent reset [--yes]
```

확인 프롬프트를 건너뛰려면 `--yes`를 추가하세요.

```bash
wp gratis-ai-agent reset --yes
Success: Agent state reset. Cleared: 2 post types, 1 taxonomy, custom CSS, global styles overrides.
```

---

## Exit Codes {#exit-codes}

모든 명령어는 성공 시 `0`을 반환합니다. 0이 아닌 종료 코드는 다음과 같습니다.

| Code | Meaning |
|---|---|
| `1` | 일반 오류 (오류 메시지 참조) |
| `2` | 제공업체 연결 실패 |
| `3` | 에이빌리티를 찾을 수 없음 |
| `4` | 벤치마크 질문을 찾을 수 없음 |
