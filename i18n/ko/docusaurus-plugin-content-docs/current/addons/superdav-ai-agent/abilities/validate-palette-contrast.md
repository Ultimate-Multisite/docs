---
title: 팔레트 대비 검증
sidebar_position: 2
_i18n_hash: b1be22868f9257a232b89cc2a2c2768d
---
# 팔레트 대비 검증

**팔레트 대비 검증** 기능은 디자인 팔레트의 색상 조합이 WCAG(웹 콘텐츠 접근성 지침)를 준수하는지 확인하여 테마에 적용하기 전에 검사합니다.

## 개요 {#overview}

이 기능은 텍스트와 배경색 간의 대비 비율을 검증하여 웹사이트의 색상 구성이 접근성 표준을 충족하는지 확인합니다. 시각 장애가 있는 사용자에게 읽기 어려울 수 있는 색상 조합을 사전에 방지하는 데 도움을 줍니다.

## 입력 형식 {#input-format}

이 기능은 색상 팔레트를 입력으로 받습니다.

```json
{
  "colors": [
    {
      "name": "primary",
      "hex": "#678233"
    },
    {
      "name": "text",
      "hex": "#ffffff"
    },
    {
      "name": "background",
      "hex": "#f5f5f5"
    }
  ],
  "wcag_level": "AA"
}
```

### 매개변수 {#parameters}

| 매개변수 | 타입 | 필수 여부 | 설명 |
|-----------|------|----------|-------------|
| `colors` | array | 예 | `name`과 `hex` 속성을 가진 색상 객체 배열 |
| `wcag_level` | string | 아니요 | WCAG 준수 레벨: "A", "AA" (기본값), 또는 "AAA" |
| `pairs_to_check` | array | 아니요 | 검증할 특정 색상 쌍 (예: `["primary-text", "background-text"]`) |

## 검사하는 WCAG 레벨 {#wcag-levels-checked}

이 기능은 WCAG 표준에 따라 대비 비율을 검증합니다.

| 레벨 | 일반 텍스트 | 큰 텍스트 | 최소 비율 |
|-------|-------------|------------|---------------|
| **A** | 3:1 | 3:1 | 3:1 |
| **AA** | 4.5:1 | 3:1 | 4.5:1 |
| **AAA** | 7:1 | 4.5:1 | 7:1 |

- **일반 텍스트** — 18pt 미만 텍스트 (또는 14pt 볼드)
- **큰 텍스트** — 18pt 이상 텍스트 (또는 14pt 볼드 이상)

## 출력 스키마 {#output-schema}

이 기능은 상세한 검증 보고서를 반환합니다.

```json
{
  "compliant": true,
  "wcag_level": "AA",
  "pairs": [
    {
      "pair": "primary-text",
      "color1": "#678233",
      "color2": "#ffffff",
      "contrast_ratio": 5.2,
      "wcag_a": true,
      "wcag_aa": true,
      "wcag_aaa": false,
      "status": "pass"
    },
    {
      "pair": "background-text",
      "color1": "#f5f5f5",
      "color2": "#333333",
      "contrast_ratio": 12.1,
      "wcag_a": true,
      "wcag_aa": true,
      "wcag_aaa": true,
      "status": "pass"
    }
  ],
  "summary": {
    "total_pairs": 2,
    "passing": 2,
    "failing": 0,
    "recommendations": []
  }
}
```

### 출력 필드 {#output-fields}

| 필드 | 타입 | 설명 |
|-------|------|-------------|
| `compliant` | boolean | 전체 팔레트가 지정된 WCAG 레벨을 충족하는지 여부 |
| `wcag_level` | string | 검사된 WCAG 레벨 |
| `pairs` | array | 각 색상 쌍에 대한 상세 결과 |
| `contrast_ratio` | number | 계산된 대비 비율 (1:1 ~ 21:1) |
| `status` | string | 각 쌍에 대한 "pass" 또는 "fail" |
| `recommendations` | array | 실패한 쌍을 개선하기 위한 제안 사항 |

## 사용 예시 {#usage-example}

**프롬프트:**
```
제 색상 팔레트가 WCAG AA 표준을 충족하는지 확인해 주세요. 기본 색상은 #678233, 텍스트 색상은 #ffffff, 배경색은 #f5f5f5입니다.
```

**결과:**
이 기능은 모든 색상 조합을 검증하고 다음 결과를 반환합니다:
- ✅ 기본 색상 + 텍스트: 5.2:1 비율 (WCAG AA 통과)
- ✅ 배경색 + 텍스트: 12.1:1 비율 (WCAG AAA 통과)
- 전체적으로: WCAG AA 준수

## 테마 빌더와의 통합 {#integration-with-theme-builder}

테마 빌더의 디자인 방향 선택 시, 팔레트 대비 검증 기능은 다음 작업을 수행합니다:

1. 선택된 색상 팔레트를 분석합니다.
2. 모든 텍스트-배경 조합을 검사합니다.
3. 선택한 WCAG 레벨에 따라 검증합니다.
4. 준수하지 못하는 쌍에 대한 권장 사항을 제공합니다.
5. 접근성이 낮은 색상 구성이 적용되는 것을 방지합니다.

## 모범 사례 {#best-practices}

- **AA 레벨부터 시작하세요** — WCAG AA는 대부분의 웹사이트 표준입니다.
- **적용하기 전에 테스트하세요** — 디자인을 확정하기 전에 팔레트를 검증하세요.
- **모든 조합을 확인하세요** — 텍스트, 링크, UI 요소가 모두 표준을 충족하는지 확인하세요.
- **사용자 선호도를 고려하세요** — 일부 사용자는 추가적인 색상 민감도를 가질 수 있습니다.
- **대비 검사기를 사용하세요** — 이 기능을 브라우저 도구와 결합하여 검증하는 것이 좋습니다.

## 실패한 쌍 및 권장 사항 {#failing-pairs-and-recommendations}

색상 쌍이 검증에 실패하면, 이 기능은 다음과 같은 권장 사항을 제공합니다:

```json
{
  "pair": "primary-text",
  "status": "fail",
  "contrast_ratio": 2.8,
  "wcag_aa": false,
  "recommendations": [
    "텍스트 색상을 #ffffff로 밝게 조정하세요 (비율이 5.2:1이 될 것입니다).",
    "배경색을 #556b2f로 어둡게 조정하세요 (비율이 4.8:1이 될 것입니다).",
    "대신 #4a6b1f와 같은 다른 기본 색상을 사용하세요 (비율이 6.1:1이 될 것입니다)."
  ]
}
```

## 관련 기능 {#related-abilities}

- [Generate Logo SVG](./generate-logo-svg.md) — 검증된 색상 팔레트를 사용하여 로고를 만드세요.
- [Create Menu](./create-menu.md) — 접근성 높은 색상으로 내비게이션을 구축하세요.
