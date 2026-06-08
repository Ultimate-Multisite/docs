---
title: 메뉴 만들기
sidebar_position: 3
_i18n_hash: 916268f55a4ba451a8d8561d077b07f3
---
# 메뉴 생성

**메뉴 생성** 기능은 페이지 제목과 별개로 고유한 내비게이션 레이블을 지원하는 WordPress 내비게이션 메뉴를 만듭니다.

## 개요

이 기능은 표준 메뉴 생성 기능에 `navigation_label` 매개변수를 지정할 수 있는 기능을 추가합니다. 이를 통해 내비게이션에 표시되는 레이블이 페이지 제목과 다른 메뉴를 만들 수 있어, 사이트 구조와 사용자 경험에 더 많은 유연성을 제공합니다.

## 매개변수

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | 메뉴 이름 (예: `Primary Navigation`) |
| `location` | string | No | 이 메뉴를 할당할 테마 위치 (예: `primary`) |
| `navigation_label` | string | No | 내비게이션에 표시할 레이블 (페이지 제목과 다름) |

## 반환 값

```json
{
  "success": true,
  "menu_id": 7,
  "name": "Primary Navigation",
  "navigation_label": "Main Menu"
}
```

## 내비게이션 레이블 vs 페이지 제목

`navigation_label` 매개변수를 사용하면 내부 메뉴 이름과 사용자에게 표시되는 레이블을 분리할 수 있습니다.

- **`name`** — WordPress가 사용하는 내부 메뉴 식별자 (예: "Primary Navigation")
- **`navigation_label`** — 사이트 방문자에게 내비게이션에 표시되는 레이블 (예: "Main Menu")

이 기능은 다음과 같은 경우에 유용합니다.
- 내부 명명 규칙이 사용자에게 보이는 레이블과 다른 경우
- 관리자 패널보다 내비게이션에서 더 짧은 레이블을 사용하고 싶은 경우
- 다른 길이의 레이블을 가진 여러 언어를 지원해야 하는 경우
- 특정 지역이나 사용자 그룹을 위한 메뉴를 구축하는 경우

## 사용 예시

### 예시 1: 내비게이션 레이블이 있는 간단한 메뉴

**Prompt:**
```
Create a primary navigation menu called "Main Navigation" with the navigation label "Menu".
```

**Result:**
```json
{
  "success": true,
  "menu_id": 7,
  "name": "Main Navigation",
  "navigation_label": "Menu"
}
```

### 예시 2: 특정 테마 위치를 위한 메뉴

**Prompt:**
```
Create a footer menu called "Footer Links" with navigation label "Quick Links" and assign it to the footer location.
```

**Result:**
```json
{
  "success": true,
  "menu_id": 8,
  "name": "Footer Links",
  "navigation_label": "Quick Links",
  "location": "footer"
}
```

## 테마 빌더와의 통합

테마 빌더를 사용할 때, 메뉴 생성 기능은 다음을 수행합니다.

1. 사용 가능한 테마 메뉴 위치를 자동으로 감지합니다.
2. 디자인에 적합한 내비게이션 레이블을 가진 메뉴를 생성합니다.
3. 메뉴를 올바른 테마 위치에 할당합니다.
4. 생성 후 메뉴 항목을 추가하는 것을 지원합니다.

## 관련 기능

- **`add_menu_item`** — 기존 메뉴에 항목 추가
- **`update_menu`** — 메뉴 이름 변경 또는 테마 위치 재할당
- **`delete_menu`** — 사이트에서 메뉴 제거

## 모범 사례

- **명확한 내비게이션 레이블 사용** — 레이블은 간결하고 사용자에게 설명적이어야 합니다.
- **테마 위치 일치** — 올바른 표시를 위해 메뉴를 정확한 테마 위치에 할당합니다.
- **메뉴 구조 계획** — 항목을 생성하기 전에 메뉴 계층 구조를 결정합니다.
- **반응형 테스트** — 모바일 장치에서 메뉴가 올바르게 표시되는지 확인합니다.
- **레이블 현지화** — 다른 언어 버전에 대해 다른 내비게이션 레이블을 사용합니다.

## 제한 사항

- 내비게이션 레이블은 표시용일 뿐이며, 내부 `name`은 여전히 WordPress 식별자로 사용됩니다.
- 테마 지원이 다양합니다. 모든 테마가 모든 메뉴 위치를 지원하는 것은 아닙니다.
- 메뉴 항목은 메뉴 생성 후 별도로 추가해야 합니다.
- 내비게이션 레이블을 변경하려면 메뉴를 업데이트해야 합니다.

## 관련 기능

- [Generate Logo SVG](./generate-logo-svg.md) — 사이트 헤더용 로고 생성
- [Validate Palette Contrast](./validate-palette-contrast.md) — 접근성 높은 색상 구성 확인
