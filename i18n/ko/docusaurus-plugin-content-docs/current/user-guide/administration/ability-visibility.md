---
title: 기능 가시성
sidebar_position: 16
_i18n_hash: 5c2956a28cbd9800895f8783ca92e109
---
# 기능 가시성 (Ability Visibility)

Superdav AI Agent v1.12.0에는 각 기능(ability)이 어떤 인터페이스를 통해 노출될지 제어하는 **기능 가시성(Ability Visibility)** 기능이 도입되었습니다. 이 기능을 사용하면 관리자가 REST API, MCP 서버, WooCommerce 통합 및 기타 인터페이스를 통해 어떤 에이전트 기능이 사용 가능한지 세밀하게 조정할 수 있습니다.

## 기능 가시성이란?

기능 가시성은 다음 사항을 제어하는 권한 시스템입니다.

- **어떤 기능**이 에이전트에게 사용 가능한지
- **어디에 노출되는지** (REST API, MCP, WooCommerce 등)
- **누가 접근할 수 있는지** (파트너 허용 목록을 통해)
- **어떻게 분류되는지** (인식됨 vs. 미분류)

각 기능은 가시성 수준을 가지고 있으며, 이는 다양한 인터페이스에서의 사용 가능 여부를 결정합니다.

## 가시성 수준

### Public (공개)

**Public 기능**은 모든 곳에서 사용 가능합니다.

- REST API 엔드포인트
- MCP 서버
- WooCommerce 통합
- 채팅 인터페이스
- 모든 사용자 역할 (적절한 권한이 있는 경우)

예시: `scaffold-block-theme`, `activate-theme`, `send-email`

### Internal (내부)

**Internal 기능**은 사용자의 WordPress 설치 환경 내에서만 사용 가능합니다.

- 채팅 인터페이스
- 관리자 패널
- 로그인한 사용자만 가능
- REST API나 외부 통합을 통해 노출되지 않음

예시: `manage-settings`, `view-analytics`, `export-data`

### Partner (파트너)

**Partner 기능**은 허용된 파트너에게만 사용 가능합니다.

- 명시적인 파트너 허용 목록 등록 필요
- 파트너 자격 증명을 통해 REST API에서 사용 가능
- 파트너 인증을 통해 MCP에서 사용 가능
- 일반 사용자에게는 사용 불가

예시: `bulk-import-users`, `modify-billing`, `access-analytics`

### Disabled (비활성화)

**Disabled 기능**은 어느 곳에서도 사용 불가능합니다.

- 어떤 인터페이스를 통해서도 노출되지 않음
- 채팅에서 사용 불가
- 관리자 패널에서 사용 불가
- 사용이 중단되었거나 실험적인 기능에 유용함

## 기능 가시성 관리

### 기능 가시성 설정 접근하기

1. **WordPress 관리자** → **Superdav AI Agent** → **설정**으로 이동합니다.
2. **기능(Abilities)** 탭을 클릭합니다.
3. 설치된 모든 기능과 해당 가시성 수준 목록을 볼 수 있습니다.

### 기능 세부 정보 보기

기능을 클릭하면 다음 정보를 확인할 수 있습니다.

- **이름(Name)**: 기능의 식별자
- **설명(Description)**: 기능이 수행하는 작업
- **현재 가시성(Current visibility)**: Public, Internal, Partner, 또는 Disabled
- **파트너 허용 목록(Partner allow-list)**: 접근 가능한 파트너 (Partner 가시성인 경우)
- **최종 업데이트(Last updated)**: 가시성이 마지막으로 변경된 시점
- **상태(Status)**: 인식됨(Recognized) 또는 미분류(Unclassified)

### 가시성 수준 변경하기

기능의 가시성을 변경하려면:

1. 목록에서 해당 기능을 클릭합니다.
2. 드롭다운 메뉴에서 새로운 가시성 수준을 선택합니다.
3. "Partner"를 선택하는 경우, 허용 목록에 파트너 식별자를 추가합니다.
4. **저장(Save)**을 클릭합니다.

예시:

```
Ability: bulk-import-users
Current visibility: Public
Change to: Partner
Partner allow-list: partner-123, partner-456
```

### 일괄 작업 (Bulk Operations)

여러 기능의 가시성을 변경하려면:

1. 기능 옆의 체크박스를 선택합니다.
2. 일괄 작업 드롭다운 메뉴에서 새로운 가시성 수준을 선택합니다.
3. **적용(Apply)**을 클릭합니다.

## 파트너 허용 목록 (Partner Allow-List)

**파트너 허용 목록**은 어떤 외부 파트너가 Partner 레벨의 기능에 접근할 수 있는지 제어합니다.

### 파트너 추가하기

1. **Superdav AI Agent** → **설정** → **파트너(Partners)**로 이동합니다.
2. **파트너 추가(Add Partner)**를 클릭합니다.
3. 파트너 식별자(일반적으로 API 키 또는 조직 ID)를 입력합니다.
4. 선택적으로 파트너 이름과 설명을 추가합니다.
5. **저장(Save)**을 클릭합니다.

### 파트너에게 기능 할당하기

파트너를 추가한 후:

1. **기능(Abilities)** 탭으로 이동합니다.
2. Partner 가시성을 가진 기능을 찾습니다.
3. 클릭하여 편집합니다.
4. "Partner allow-list" 섹션에서 접근 권한을 부여할 파트너의 체크박스를 선택합니다.
5. **저장(Save)**을 클릭합니다.

### 파트너 접근 권한 취소하기

파트너의 접근 권한을 제거하려면:

1. 해당 기능을 편집합니다.
2. 허용 목록에서 파트너의 체크박스를 해제합니다.
3. **저장(Save)**을 클릭합니다.

해당 파트너는 즉시 해당 기능에 대한 접근 권한을 잃게 됩니다.

## 미분류 기능 (Unclassified Abilities)

Superdav AI Agent가 인식하지 못하는 타사 기능을 설치하면 **미분류(Unclassified)**로 표시됩니다.

### 미분류 기능에 대한 관리자 알림

다음과 같은 관리자 알림을 보게 됩니다.

```
⚠️ Unclassified Abilities Detected

The following abilities were installed but are not recognized:
- custom-import-tool
- external-api-wrapper

These abilities may pose security or compatibility risks.
Please review and classify them.

[Review Abilities] [Dismiss]
```

### 미분류 기능 검토하기

1. 알림에서 **기능 검토(Review Abilities)**를 클릭합니다.
2. 미분류된 각 기능에 대해 다음을 볼 수 있습니다.
   - 기능 이름 및 설명
   - 출처 (어떤 플러그인/애드온이 설치했는지)
   - 제안된 가시성 수준
   - 보안 평가

3. 가시성 수준을 선택합니다:
   - **Public**: 기능을 신뢰하고 모든 곳에 노출합니다.
   - **Internal**: 내부 사용으로만 제한합니다.
   - **Partner**: 특정 파트너에게로 제한합니다.
   - **Disabled**: 이 기능을 사용하지 않습니다.

4. 결정을 저장하려면 **분류(Classify)**를 클릭합니다.

### 미분류 기능을 분류해야 하는 이유?

기능을 분류하는 것은 다음과 같은 이점이 있습니다:

- **보안 강화**: 노출되는 것을 명시적으로 승인합니다.
- **사고 방지**: 미분류 기능은 기본적으로 비활성화됩니다.
- **기능 활성화**: 분류가 완료되면 기능이 사용 가능해집니다.
- **결정 기록**: 감사 목적으로 선택 사항이 기록됩니다.

## 다양한 인터페이스에서의 가시성

### REST API

**Public 기능**은 REST 엔드포인트를 통해 사용 가능합니다:

```bash
curl -X POST https://yoursite.com/wp-json/superdav/v1/abilities/scaffold-block-theme \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"theme_name": "My Theme"}'
```

**Internal 및 Partner 기능**은 REST API를 통해 사용 불가합니다.

### MCP 서버

**Public 기능**은 MCP를 통해 사용 가능합니다:

```
MCP Server: Superdav AI Agent
Available abilities:
- scaffold-block-theme
- activate-theme
- send-email
```

**Internal 기능**은 MCP를 통해 노출되지 않습니다.

**Partner 기능**은 파트너 자격 증명이 있어야만 사용 가능합니다.

### WooCommerce 통합

WooCommerce와 관련된 **Public 기능**이 사용 가능합니다:

- 제품 관리
- 주문 처리
- 고객 커뮤니케이션

**Internal 기능**은 WooCommerce에 노출되지 않습니다.

### 채팅 인터페이스

**모든 기능** (Public, Internal, Partner)은 사용자 권한에 따라 채팅에서 사용 가능합니다:

- 관리자: 모든 기능 사용 가능
- 일반 사용자: Public 기능만 사용 가능
- 파트너: Public + Partner 기능 사용 가능 (허용 목록에 등록된 경우)

## 보안 모범 사례

### 최소 권한의 원칙 (Principle of Least Privilege)

- 기능 사용을 허용하는 가장 제한적인 가시성으로 설정합니다.
- 민감한 작업에는 Partner 가시성을 사용합니다.
- 사용하지 않는 기능은 비활성화합니다.

### 정기 감사 (Regular Audits)

- 월별로 기능 가시성을 검토합니다.
- 미분류 기능이 있는지 확인합니다.
- 사용하지 않는 파트너의 접근 권한을 제거합니다.

### 로깅 및 모니터링

- 어떤 기능이 가장 많이 사용되는지 모니터링합니다.
- 파트너 접근 패턴을 추적합니다.
- 비정상적인 기능 사용에 대해 경고를 설정합니다.

### 타사 기능 (Third-Party Abilities)

- 활성화하기 전에 타사 기능을 검토합니다.
- 명시적으로 분류합니다.
- Internal 또는 Partner 가시성으로 시작합니다.
- 검증을 거친 후에만 Public으로 승격합니다.

## 문제 해결 (Troubleshooting)

**기능이 목록에 표시되지 않아요**
- 기능이 설치되어 활성화되었는지 확인합니다.
- 플러그인/애드온이 활성화되어 있는지 확인합니다.
- 페이지를 새로고침합니다.

**기능의 가시성을 변경할 수 없어요**
- 관리자 권한이 있는지 확인합니다.
- 플러그인에 의해 기능이 잠겨 있는지 확인합니다.
- 충돌하는 플러그인을 비활성화해 봅니다.

**파트너가 기능에 접근할 수 없어요**
- 파트너가 허용 목록에 있는지 확인합니다.
- 기능의 가시성이 Partner로 설정되어 있는지 확인합니다.
- 파트너의 자격 증명이 올바른지 확인합니다.
- 인증 오류가 있는지 API 로그를 확인합니다.

**미분류 기능이 계속 나타나요**
- 관리자 알림에서 검토하고 분류합니다.
- 분류가 저장되었는지 확인합니다.
- 기능을 제공하는 플러그인이 최신 버전인지 확인합니다.

## 레거시 모드에서 마이그레이션하기

Superdav AI Agent의 이전 버전에서 업그레이드하는 경우:

- 기존의 모든 기능은 자동으로 Public으로 분류됩니다.
- 필요에 따라 가시성을 검토하고 조정합니다.
- 접근을 제한하고 싶지 않다면 조치가 필요하지 않습니다.

전환 과정에 대한 자세한 내용은 **타사 모드 마이그레이션(Third-Party Mode Migration)**을 참조하세요.

## 다음 단계

기능 가시성을 구성한 후:

1. **기능 검토**: 설치된 모든 기능을 감사합니다.
2. **미분류 기능 분류**: 관리자 알림에 응답합니다.
3. **파트너 설정**: Partner 가시성을 사용하는 경우 파트너를 추가합니다.
4. **사용량 모니터링**: 어떤 기능이 가장 많이 사용되는지 추적합니다.
5. **결정 사항 문서화**: 각 가시성 수준을 선택한 이유에 대한 메모를 남깁니다.
