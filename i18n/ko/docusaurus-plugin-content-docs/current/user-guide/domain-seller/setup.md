---
title: 설정 및 공급자 구성
sidebar_position: 1
_i18n_hash: 2a9c0d63fc6ee6bad011c099707fb3f3
---
# 도메인 판매: 설정 및 제공업체 구성

Domain Seller 애드온에는 모든 필수 단계를 안내하는 설정 마법사가 포함되어 있습니다. 이 페이지에서는 마법사 흐름과 이후에 제공업체를 구성하거나 재구성하는 방법을 다룹니다.

## 필수 요구 사항

- **Multisite Ultimate** v2.4.12 이상, 네트워크 활성화
- **PHP** 7.4+
- 지원되는 레지스트라 중 최소 하나에 대한 API 자격 증명

## 첫 실행 설정 마법사

설정 마법사는 플러그인을 네트워크 활성화하는 첫 번째 순간에 자동으로 실행됩니다. 또한 **네트워크 관리 > Ultimate Multisite > Domain Seller 설정**에서 언제든지 접근할 수 있습니다.

### 1단계 — 제공업체 선택

연결하려는 레지스트라를 선택하세요. 지원되는 옵션은 다음과 같습니다.

| Provider | DNS 관리 | WHOIS 개인 정보 보호 |
|---|---|---|
| OpenSRS | 예 | 예 |
| Namecheap | 아니요 | 예 (WhoisGuard, 무료) |
| GoDaddy | 아니요 | 아니요 |
| ResellerClub | 예 | 아니요 |
| NameSilo | 아니요 | 아니요 |
| Enom | 예 | 아니요 |

### 2단계 — 자격 증명 입력

각 제공업체는 다른 자격 증명 필드를 가지고 있습니다.

**OpenSRS** — 사용자 이름 및 개인 키 (OpenSRS 리셀러 제어판에서 가져옴)

**Namecheap** — 사용자 이름 및 API 키 (Account > Tools > API Access에서 가져옴)

**GoDaddy** — API 키 및 비밀 키 (developer.godaddy.com에서 가져옴)

**ResellerClub** — 리셀러 ID 및 API 키 (ResellerClub 제어판에서 가져옴)

**NameSilo** — API 키 (namesilo.com > Account > API Manager에서 가져옴)

**Enom** — 계정 ID 및 API 토큰

사용 가능한 경우 **샌드박스 모드**를 확인하여 실제 서비스에 적용하기 전에 제공업체의 테스트 환경에서 테스트하는 것이 좋습니다.

### 3단계 — 연결 테스트

**Test Connection**을 클릭하세요. 마법사는 자격 증명과 연결성을 확인하기 위해 가벼운 API 호출을 보냅니다. 계속 진행하기 전에 자격 증명 문제를 해결하세요.

### 4단계 — TLD 가져오기

**Import TLDs**를 클릭하여 연결된 제공업체로부터 사용 가능한 모든 TLD와 도매 가격을 가져옵니다. 이 작업은 도메인 상품에서 사용되는 TLD 목록을 채웁니다. TLD 카탈로그가 큰 제공업체의 경우 가져오는 데 30~60초가 걸릴 수 있습니다.

TLD는 또한 예약된 크론 작업(cron job)을 통해 하루에 한 번 자동으로 재동기화됩니다.

### 5단계 — 도메인 상품 생성

마법사는 10% 마크업이 적용된 기본 와일드카드 도메인 상품을 생성합니다. 이 상품을 즉시 편집하거나 건너뛰고 **Ultimate Multisite > Products**에서 수동으로 상품을 생성할 수 있습니다.

전체 상품 구성 가이드는 [Domain Products and Pricing](./domain-products)를 참조하세요.

---

## 제공업체 재구성

**네트워크 관리 > Ultimate Multisite > 설정 > Domain Seller**로 이동하거나 (플러그인 목록에서 **Settings**를 클릭하세요).

설정 페이지에는 다음 항목들이 포함되어 있습니다.

- **Enable domain selling** — 전체 기능을 켜거나 끄는 토글 스위치
- **Default provider** — 도메인 검색 및 새 상품에 사용되는 기본 제공업체
- **Max TLDs per search** — 고객이 검색할 때 확인하는 TLD 개수; 값이 높을수록 옵션은 많지만 속도는 느려집니다.
- **Availability cache duration** — 가용성 및 가격 책정 결과를 캐시하는 시간; 값이 낮을수록 정확하지만 API 호출이 증가합니다.
- **Manage domain products** — 상품 목록으로 이동하는 빠른 링크
- **Configure providers** — 제공업체를 추가하거나 재구성하기 위해 통합 마법사(Integration Wizard)를 엽니다.

### 두 번째 제공업체 추가

**Configure providers**를 클릭하고 새 레지스트라에 대해 마법사를 다시 실행하세요. 여러 제공업체를 동시에 구성할 수 있습니다. 각 도메인 상품을 특정 제공업체에 할당하거나 기본값으로 두세요.

### TLD 수동 동기화

설정 페이지에서 구성된 제공업체 옆의 **Sync TLDs**를 클릭하여 최신 가격을 가져오세요. 이는 제공업체가 도매 가격을 업데이트하거나 새로운 TLD를 추가했을 때 유용합니다.

---

## 로그

각 제공업체는 자체 로그 채널에 기록합니다. 로그는 **네트워크 관리 > Ultimate Multisite > Logs**에서 확인할 수 있습니다.

| Log channel | Contents |
|---|---|
| `domain-seller-registration` | 모든 등록 시도 (성공 및 실패) |
| `domain-seller-renewal` | 갱신 작업 결과 |
| `domain-seller-opensrs` | 원시 OpenSRS API 활동 |
| `domain-seller-namecheap` | 원시 Namecheap API 활동 |
| `domain-seller-godaddy` | 원시 GoDaddy API 활동 |
| `domain-seller-resellerclub` | 원시 ResellerClub API 활동 |
| `domain-seller-namesilo` | 원시 NameSilo API 활동 |
| `domain-seller-enom` | 원시 Enom API 활동 |
