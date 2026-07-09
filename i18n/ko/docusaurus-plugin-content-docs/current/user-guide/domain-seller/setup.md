---
title: 설정 및 공급자 구성
sidebar_position: 1
_i18n_hash: 854fd649457edceefde0eb8246446ebe
---
# Domain Seller: 설정 및 제공업체 구성 {#domain-seller-setup-and-provider-configuration}

Domain Seller addon은 필요한 모든 단계를 안내하는 설정 wizard와 함께 제공됩니다. 이 페이지에서는 wizard 흐름과 이후 제공업체를 구성하거나 재구성하는 방법을 다룹니다.

## 요구 사항 {#requirements}

- **Multisite Ultimate** v2.4.12 이상, 네트워크 활성화됨
- **PHP** 7.4+
- 지원되는 등록기관 하나 이상의 API 자격 증명

## 최초 실행 설정 wizard {#first-run-setup-wizard}

설정 wizard는 plugin을 처음 네트워크 활성화할 때 자동으로 실행됩니다. 또한 언제든지 **Network Admin › Ultimate Multisite › Domain Seller Setup**에서 사용할 수 있습니다.

### 1단계 — 제공업체 선택 {#step-1--choose-a-provider}

연결하려는 등록기관을 선택합니다. 지원되는 옵션:

| 제공업체 | DNS 관리 | WHOIS 개인정보 보호 |
|---|---|---|
| OpenSRS | 예 | 예 |
| Namecheap | 아니요 | 예 (WhoisGuard, 무료) |
| HostAfrica | 예 | 예 (ID 보호) |
| Openprovider | 예 | 예 |
| Hostinger | 호스팅된 도메인을 위한 핵심 Hostinger 도메인 매핑을 통해 | 예 |
| GoDaddy | 아니요 | 아니요 |
| ResellerClub | 예 | 아니요 |
| NameSilo | 아니요 | 아니요 |
| Enom | 예 | 아니요 |

### 2단계 — 자격 증명 입력 {#step-2--enter-credentials}

각 제공업체에는 서로 다른 자격 증명 필드가 있습니다:

**OpenSRS** — 사용자 이름 및 개인 키(OpenSRS Reseller Control Panel에서)

**Namecheap** — 사용자 이름 및 API 키(Account › Tools › API Access에서)

**HostAfrica** — HostAfrica 리셀러 모듈의 Domains Reseller API endpoint 및 자격 증명. 현재 별도의 sandbox endpoint는 문서화되어 있지 않습니다. 실제 등록을 실행하기 전에 안전한 읽기 전용 확인으로 테스트하세요.

**Openprovider** — API 액세스가 활성화된 사용자 이름 및 비밀번호. 선택적 sandbox 모드는 Openprovider sandbox API를 사용하며, 선택적 기본 고객 핸들을 등록에 재사용할 수 있습니다.

**Hostinger** — 핵심 Hostinger 통합의 공유 Hostinger hPanel API token. 동일한 token이 핵심 도메인 매핑과 Domain Seller 등록 작업을 구동합니다.

**GoDaddy** — API 키 및 시크릿(developer.godaddy.com에서)

**ResellerClub** — 리셀러 ID 및 API 키(ResellerClub control panel에서)

**NameSilo** — API 키(namesilo.com › Account › API Manager에서)

**Enom** — Account ID 및 API token

실서비스로 전환하기 전에 제공업체의 테스트 환경에서 테스트하려면 가능한 경우 **Sandbox mode**를 선택하세요.

### 3단계 — 연결 테스트 {#step-3--test-the-connection}

**Test Connection**을 클릭합니다. wizard가 자격 증명과 연결성을 확인하기 위해 가벼운 API 호출을 보냅니다. 계속하기 전에 자격 증명 문제를 해결하세요.

### 4단계 — TLD 가져오기 {#step-4--import-tlds}

**Import TLDs**를 클릭하여 연결된 제공업체에서 사용 가능한 모든 TLD와 도매 가격을 가져옵니다. 이렇게 하면 도메인 제품에서 사용하는 TLD 목록이 채워집니다. TLD 카탈로그가 큰 제공업체의 경우 가져오기에 30~60초가 걸릴 수 있습니다.

TLD는 예약된 cron 작업을 통해 하루에 한 번 자동으로 다시 동기화됩니다.

### 5단계 — 도메인 제품 만들기 {#step-5--create-a-domain-product}

wizard는 10% 마크업이 적용된 기본 포괄 도메인 제품을 만듭니다. 이 제품을 즉시 편집하거나 건너뛰고 **Ultimate Multisite › Products**에서 수동으로 제품을 만들 수 있습니다.

전체 제품 구성 가이드는 [도메인 제품 및 가격](./domain-products)을 참조하세요.

---

## 제공업체 재구성 {#reconfiguring-a-provider}

**Network Admin › Ultimate Multisite › Settings › Domain Seller**로 이동합니다(또는 plugin 목록에서 **Settings**를 클릭).

설정 페이지에는 다음이 포함됩니다:

- **도메인 판매 활성화** — 전체 기능을 켜거나 끕니다
- **기본 제공업체** — 도메인 검색 및 새 제품에 사용되는 제공업체
- **검색당 최대 TLD 수** — 고객이 검색할 때 확인할 TLD 수입니다. 값이 높을수록 더 많은 옵션을 표시하지만 더 느립니다
- **가용성 cache 기간** — 가용성 및 가격 결과를 cache할 기간입니다. 값이 낮을수록 더 정확하지만 API 호출이 증가합니다
- **도메인 제품 관리** — 제품 목록으로 가는 빠른 링크
- **제공업체 구성** — 제공업체를 추가하거나 재구성하기 위해 Integration Wizard를 엽니다

### 두 번째 제공업체 추가 {#adding-a-second-provider}

**제공업체 구성**을 클릭하고 새 등록기관에 대해 wizard를 다시 실행합니다. 여러 제공업체를 동시에 구성할 수 있습니다. 각 도메인 제품을 특정 제공업체에 할당하거나 기본값으로 둡니다.

### TLD 수동 동기화 {#syncing-tlds-manually}

설정 페이지에서 구성된 제공업체 옆의 **Sync TLDs**를 클릭하여 최신 가격을 가져옵니다. 이는 제공업체가 도매 가격을 업데이트하거나 새 TLD를 추가한 후에 유용합니다.

---

## 로그 {#logs}

각 제공업체는 자체 로그 채널에 기록합니다. 로그는 **Network Admin › Ultimate Multisite › Logs**에서 볼 수 있습니다:

| 로그 채널 | 내용 |
|---|---|
| `domain-seller-registration` | 모든 등록 시도(성공 및 실패) |
| `domain-seller-renewal` | 갱신 작업 결과 |
| `domain-seller-opensrs` | 원시 OpenSRS API 활동 |
| `domain-seller-namecheap` | 원시 Namecheap API 활동 |
| `domain-seller-hostafrica` | 원시 HostAfrica API 활동 |
| `domain-seller-openprovider` | 원시 Openprovider API 활동 |
| `domain-seller-hostinger` | 원시 Hostinger API 활동 |
| `domain-seller-godaddy` | 원시 GoDaddy API 활동 |
| `domain-seller-resellerclub` | 원시 ResellerClub API 활동 |
| `domain-seller-namesilo` | 원시 NameSilo API 활동 |
| `domain-seller-enom` | 원시 Enom API 활동 |

---

## 제공업체 기능 참고 사항 {#provider-capability-notes}

모든 등록기관 API가 동일한 작업을 제공하는 것은 아닙니다. addon은 지원되지 않는 작업을 조용히 실패시키는 대신 명확한 admin 대상 오류로 표시합니다.

- **HostAfrica**는 조회, TLD/가격 동기화, 등록, 갱신, 이전, 네임서버 업데이트, DNS 레코드, EPP 코드, 등록기관 잠금, ID 보호를 포함하여 가장 폭넓은 실시간 리셀러 워크플로를 지원합니다.
- **Openprovider**는 리셀러 가격 TLD 동기화, 등록, 갱신, 이전, 네임서버 업데이트, DNS 영역, EPP 코드, 등록기관 잠금, WHOIS 개인정보 보호를 지원합니다. 애드온이 자동으로 새로 고치는 짧은 수명의 bearer token으로 인증합니다.
- **Hostinger**는 공유 hPanel API token을 통해 가용성 검색, 등록, 포트폴리오 조회, 네임서버 업데이트, 등록기관 잠금, WHOIS 개인정보 보호를 지원합니다. Hostinger의 공개 Domains API는 리셀러/도매 가격, 인바운드 이전, 명시적 갱신 또는 EPP 코드 조회를 노출하지 않으며, 갱신은 자동 갱신만 가능합니다.
