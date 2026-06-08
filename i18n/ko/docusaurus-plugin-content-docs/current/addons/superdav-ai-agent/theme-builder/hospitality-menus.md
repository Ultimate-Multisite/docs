---
title: 호스피탈리티 메뉴
sidebar_position: 3
_i18n_hash: 6005be1ddbd4aa6dddf175828f4fc8f5
---
# 레스토랑 메뉴

**Hospitality Menus** 기능은 Theme Builder가 구조화된 음식 및 음료 메뉴 페이지를 워드프레스 사이트에 직접 생성하고 삽입할 수 있도록 합니다.

## 개요

Theme Builder를 사용하면 레스토랑, 카페, 바, 케이터링 서비스 등 접객 업종을 위한 전문적이고 구조화된 메뉴 페이지를 만들 수 있습니다. 이 메뉴들은 사이트 디자인에 완벽하게 통합되며, 쉽게 업데이트하고 관리할 수 있습니다.

## 지원되는 접객 유형

- **레스토랑(Restaurants)** — 풀 서비스 다이닝 메뉴
- **카페(Cafes)** — 커피 및 가벼운 식사 메뉴
- **바 및 라운지(Bars and Lounges)** — 음료 및 애피타이저 메뉴
- **베이커리(Bakeries)** — 페이스트리 및 빵 메뉴
- **케이터링 서비스(Catering Services)** — 이벤트 메뉴 옵션
- **푸드 트럭(Food Trucks)** — 이동식 음식 서비스 메뉴
- **양조장 및 와이너리(Breweries and Wineries)** — 설명이 포함된 음료 메뉴

## 메뉴 구조

### 메뉴 카테고리

메뉴는 다음과 같은 카테고리로 구성됩니다.

- **애피타이저(Appetizers)** — 스타터 및 작은 접시 요리
- **메인 요리(Entrees)** — 주 요리
- **사이드(Sides)** — 곁들임 및 채소
- **디저트(Desserts)** — 달콤한 간식
- **음료(Beverages)** — 음료 (알코올 및 비알코올)
- **스페셜(Specials)** — 일일 또는 계절별 특별 메뉴

### 메뉴 항목 형식

각 메뉴 항목은 다음 정보를 포함합니다.

```json
{
  "name": "Grilled Salmon",
  "description": "Fresh Atlantic salmon with lemon butter sauce",
  "price": "$24.95",
  "dietary_info": ["Gluten-Free", "High-Protein"],
  "allergens": ["Fish"],
  "availability": "Daily"
}
```

#### 항목 필드

| Field | Type | Description |
|-------|------|-------------|
| `name` | string | 요리 또는 음료 이름 |
| `description` | string | 항목에 대한 상세 설명 |
| `price` | string | 가격 (통화 형식으로 지정) |
| `dietary_info` | array | 식단 속성 (Vegan, Gluten-Free 등) |
| `allergens` | array | 일반 알레르기 유발 물질 (견과류, 해산물 등) |
| `availability` | string | 이용 가능 시기 (Daily, Seasonal 등) |

## 레스토랑 메뉴 만들기

### 1단계: 메뉴 정보 제공

Theme Builder에게 메뉴에 대해 알려주세요.

```
Create a restaurant menu for my Italian restaurant with appetizers,
pasta dishes, main courses, and desserts. Include prices and descriptions.
```

### 2단계: Theme Builder가 메뉴 생성

Theme Builder는 다음 작업을 수행합니다.

1. 구조화된 메뉴 페이지를 생성합니다.
2. 사이트 테마와 일치하도록 디자인합니다.
3. 항목들을 카테고리로 정리합니다.
4. 가격과 설명을 형식화합니다.
5. 식단 및 알레르기 정보를 추가합니다.

### 3단계: 검토 및 사용자 지정

다음과 같은 작업을 할 수 있습니다.

1. 메뉴 항목과 가격을 편집합니다.
2. 카테고리를 추가하거나 제거합니다.
3. 카테고리 내 항목 순서를 재배치합니다.
4. 설명과 식단 정보를 업데이트합니다.
5. 스타일과 레이아웃을 조정합니다.

## 메뉴 표시 옵션

### 전체 메뉴 페이지

전체 메뉴를 표시하는 전용 페이지입니다.

- 카테고리별로 정리됨
- 검색 및 필터링 가능
- 인쇄에 용이한 레이아웃
- 모바일 반응형 디자인

### 메뉴 위젯

다른 페이지에 메뉴 섹션을 삽입할 수 있습니다.

- 홈페이지의 추천 항목
- 사이드바의 일일 스페셜
- 바 페이지의 음료 메뉴
- 푸터의 디저트 쇼케이스

### 메뉴 PDF

다운로드 가능한 PDF 메뉴를 생성합니다.

- 전문적인 형식
- 인쇄 준비가 된 품질
- 이미지 및 설명 포함
- 공유 및 이메일 전송이 용이함

## 식단 및 알레르기 정보

### 식단 속성

항목에 식단 정보를 표시합니다.

- **Vegan** — 동물성 제품 미포함
- **Vegetarian** — 육류 미포함
- **Gluten-Free** — 셀리악병 환자에게 안전함
- **Dairy-Free** — 유제품 미포함
- **Nut-Free** — 견과류 또는 땅콩 미포함
- **Low-Carb** — 탄수화물 감소
- **High-Protein** — 단백질 풍부

### 알레르기 경고

일반 알레르기 유발 물질을 포함합니다.

- **Nuts** — 견과류 및 땅콩
- **Shellfish** — 갑각류 및 연체물
- **Fish** — 모든 어류 종
- **Dairy** — 우유 및 유제품
- **Eggs** — 계란
- **Soy** — 콩 제품
- **Gluten** — 밀 및 글루텐 함유 곡물
- **Sesame** — 참깨 및 참기름

## 메뉴 관리

### 가격 업데이트

메뉴 가격을 쉽게 업데이트할 수 있습니다.

1. 메뉴 페이지로 이동합니다.
2. "Edit Menu"를 클릭합니다.
3. 항목의 가격을 업데이트합니다.
4. 변경 사항을 저장합니다.
5. 변경 사항이 사이트에 즉시 반영됩니다.

### 계절 메뉴 추가

계절별 메뉴 변형을 만듭니다.

1. 새 메뉴 버전을 만듭니다.
2. 계절별 항목을 추가합니다.
3. 항목을 "Seasonal"로 표시합니다.
4. 이용 가능 날짜를 예약합니다.
5. 시즌 동안 자동으로 표시됩니다.

### 스페셜 관리

일일 또는 주간 스페셜을 표시합니다.

1. "Specials" 카테고리를 만듭니다.
2. 이용 가능 날짜가 있는 항목을 추가합니다.
3. 홈페이지에 스페셜을 강조 표시합니다.
4. 매일 또는 매주 업데이트합니다.
5. 오래된 스페셜은 보관합니다.

## Theme Builder와의 통합

Hospitality 사이트에 Theme Builder를 사용할 때:

1. **자동 메뉴 감지(Automatic menu detection)** — 음식/음료 사업체인지 식별합니다.
2. **메뉴 페이지 생성(Menu page creation)** — 전문적인 메뉴 페이지를 생성합니다.
3. **디자인 일치(Design matching)** — 메뉴가 사이트 테마와 일치합니다.
4. **모바일 최적화(Mobile optimization)** — 휴대폰에서 메뉴가 아름답게 표시됩니다.
5. **SEO 최적화(SEO optimization)** — 메뉴가 검색 엔진 친화적입니다.

## 모범 사례

### 메뉴 디자인

- **명확한 구성** — 논리적인 카테고리 구조
- **읽기 쉬운 설명** — 식욕을 돋우고 정보가 풍부함
- **일관된 가격 책정** — 명확한 통화 및 형식 지정
- **전문 사진** — 고품질 음식 이미지
- **여백(Whitespace)** — 페이지를 너무 빽빽하게 채우지 않기

### 콘텐츠

- **정확한 설명** — 항목을 정확하게 설명합니다.
- **스페셜 강조** — 스페셜 메뉴를 눈에 띄게 만듭니다.
- **알레르기 포함** — 알레르기 유발 물질은 항상 기재합니다.
- **정기적인 업데이트** — 가격과 항목을 최신 상태로 유지합니다.
- **식욕을 돋우는 언어 사용** — 항목이 맛있게 들리도록 합니다.

### 접근성

- **읽기 쉬운 글꼴** — 명확하고 읽기 쉬운 글꼴을 사용합니다.
- **충분한 대비** — 텍스트가 읽기 쉬운지 확인합니다.
- **식단 라벨** — 식단 옵션을 명확하게 표시합니다.
- **알레르기 경고** — 알레르기 유발 물질을 눈에 띄게 표시합니다.
- **모바일 친화적** — 모든 장치에서 테스트합니다.

## 예시

### 레스토랑 메뉴 구조

```
Appetizers
├── Bruschetta al Pomodoro
├── Calamari Fritti
└── Caprese Salad

Pasta Dishes
├── Spaghetti Carbonara
├── Fettuccine Alfredo
└── Penne Arrabbiata

Main Courses
├── Osso Buco
├── Branzino al Forno
└── Saltimbocca alla Romana

Desserts
├── Tiramisu
├── Panna Cotta
└── Gelato Selection
```

### 카페 메뉴 구조

```
Coffee
├── Espresso
├── Cappuccino
└── Latte

Pastries
├── Croissants
├── Muffins
└── Scones

Sandwiches
├── Caprese Panini
├── Smoked Turkey Club
└── Vegetarian Wrap
```

## 관련 기능

- [Create Menu](../abilities/create-menu.md) — 내비게이션 메뉴 생성
- [Design Direction](./design-direction.md) — 사이트 디자인 사용자 지정
- [Discovery Interview](./discovery-interview.md) — 사이트 구조 계획
