---
title: Gratis AI Agent 설정
sidebar_position: 22
_i18n_hash: 06c2f7052f5b1a44d525d8446a5403a7
---
# Gratis AI Agent 설정 {#gratis-ai-agent-settings}

Gratis AI Agent의 **Settings → Advanced** 화면은 백엔드 통합을 위한 관리자 수준 구성을 제공합니다. 이 페이지는 피드백 전달, 검색 제공자 키, 관리형 Superdav 서비스 설정, Google Calendar 제어, TextBee SMS 설정, 네트워크 전체 기능 플래그를 문서화합니다.

## 설정 접근하기 {#accessing-settings}

1. WordPress 관리자에서 **Gratis AI Agent → Settings**로 이동합니다.
2. **Advanced** 탭을 클릭합니다.

## 피드백 엔드포인트 구성 {#feedback-endpoint-configuration}

피드백 엔드포인트는 사용자가 엄지손가락 아래 버튼, 자동 프롬프트 배너 또는 `/report-issue` 명령을 통해 피드백을 제출할 때마다 AI agent에서 POST 요청을 받습니다.

| 필드 | 설명 |
|---|---|
| **Feedback Endpoint URL** | JSON 본문이 포함된 HTTP POST 요청으로 피드백 제출을 받는 URL입니다. |
| **Feedback API Key** | 각 피드백 요청의 `Authorization` header에 전송되는 bearer token입니다. 엔드포인트에 인증이 필요하지 않으면 비워 두세요. |

### 예상 JSON 페이로드 {#expected-json-payload}

피드백 엔드포인트는 최소한 다음 필드를 포함하는 JSON 본문을 허용해야 합니다.

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "The answer was incorrect about pricing.",
  "triage_category": "factual_error"
}
```

대화 맥락에 따라 페이로드에 추가 필드가 있을 수 있습니다.

### `triage_category` 값 {#triagecategory-values}

AI 분류 계층은 페이로드를 전달하기 전에 다음 값 중 하나를 `triage_category`에 할당합니다.

| 값 | 의미 |
|---|---|
| `factual_error` | 어시스턴트가 잘못된 사실 정보를 제공했습니다. |
| `unhelpful_answer` | 응답이 기술적으로는 정확했지만 유용하지 않았습니다. |
| `inappropriate_content` | 응답에 사용자에게 보여서는 안 되는 콘텐츠가 포함되어 있었습니다. |
| `other` | 피드백이 알려진 범주와 일치하지 않았습니다. |

### 인증 {#authentication}

엔드포인트에 인증이 필요한 경우 **Feedback API Key** 필드를 bearer token으로 설정하세요. agent는 다음을 전송합니다.

```
Authorization: Bearer <your-api-key>
```

**Feedback API Key** 필드가 비어 있으면 `Authorization` header가 전송되지 않습니다.

### 피드백 수집 비활성화 {#disabling-feedback-collection}

**Feedback Endpoint URL** 및 **Feedback API Key** 필드를 모두 비워 두세요. 엄지손가락 아래 버튼과 피드백 UI는 사용자에게 계속 표시되지만, 제출 내용은 외부 서비스로 전달되지 않습니다.

## Brave Search API Key {#brave-search-api-key}

또한 **Advanced** 탭의 **Brave Search API Key** 필드는 [인터넷 검색](../configuration/internet-search) 기능을 활성화합니다.

| 필드 | 설명 |
|---|---|
| **Brave Search API Key** | Brave Search 개발자 Dashboard의 API 키입니다. AI 어시스턴트에서 인터넷 검색을 활성화하는 데 필요합니다. |

필드 레이블에는 Brave Search API 가입 페이지로 연결되는 클릭 가능한 링크가 포함되어 있습니다. 인터넷 검색을 비활성화하려면 비워 두세요.

이 기능에 대한 최종 사용자 문서는 [인터넷 검색](../configuration/internet-search)을 참조하세요.

## 관리형 Superdav 서비스 {#managed-superdav-service}

Superdav AI Agent v1.18.0은 지원되는 사이트를 위해 관리형 Superdav 서비스 엔드포인트와 자동 연결 프로비저닝을 추가합니다. 사이트가 수동으로 구성된 서비스 엔드포인트 대신 호스팅된 제공자에 연결해야 할 때 이 제어를 사용하세요.

| 필드 | 설명 |
|---|---|
| **Managed Superdav Service** | 지원되는 사이트에 대해 호스팅된 Superdav 서비스 연결을 활성화합니다. |
| **Provision Connection** | 자동 엔드포인트 및 자격 증명 프로비저닝을 시작합니다. 사이트가 관리형 제공자를 사용해야 함을 확인한 후 사용하세요. |
| **Service Endpoint / Connection Status** | 프로비저닝 후 현재 엔드포인트 또는 연결 상태를 표시합니다. |

프로비저닝 후 설정을 저장하고 관리형 서비스 워크플로에 의존하기 전에 연결 상태를 확인하세요. 프로비저닝이 실패하면 표시된 재시도 안내를 검토하고 사이트가 호스팅된 제공자를 사용할 권한이 있는지 확인하세요.

## Google Calendar 구성 {#google-calendar-configuration}

Superdav AI Agent v1.18.0 캘린더 기능이 활성화되면 agent는 구성된 캘린더와 이벤트 세부 정보를 읽을 수 있습니다. 캘린더 도구는 읽기 중심이며 일정 인식 알림, 참석자 후속 조치, 연락처 매칭에 유용합니다.

| 필드 | 설명 |
|---|---|
| **Google Calendar Credentials** | 캘린더 데이터를 읽는 데 필요한 자격 증명 또는 토큰 연결을 저장합니다. |
| **Calendar Selection** | agent가 검사할 수 있는 구성된 캘린더를 제한합니다. |
| **Calendar Connection Status** | 현재 자격 증명으로 캘린더와 이벤트를 읽을 수 있는지 확인합니다. |

캘린더 자격 증명은 agent에 필요한 캘린더로 제한하세요. 상태가 만료된 토큰을 나타내면 자격 증명을 다시 연결하거나 교체하세요.

## TextBee SMS 알림 {#textbee-sms-notifications}

Superdav AI Agent v1.18.0은 구성된 알림 워크플로를 위한 SMS 제공자로 TextBee를 추가합니다. 민감하거나 사용자에게 표시되는 메시지의 경우 SMS 알림은 사람의 승인 게이트와 함께 사용해야 합니다.

| 필드 | 설명 |
|---|---|
| **TextBee API Key** | TextBee SMS 제공자에 대한 요청을 인증합니다. |
| **TextBee Device / Sender** | 제공자가 요구하는 경우 발신 메시지에 사용되는 TextBee 발신자 또는 기기를 선택합니다. |
| **SMS Notifications Enabled** | 승인된 워크플로가 문자 메시지 알림을 보낼 수 있도록 허용합니다. SMS 전송을 방지하려면 비활성화 상태로 두세요. |

테스트 메시지는 관리자 소유 번호로만 보낸 다음, 예약된 알림 또는 참석자 대상 알림을 활성화하기 전에 승인 게이트 동작을 확인하세요.

## 기능 플래그 {#feature-flags}

v1.9.0에서도 도입된 **Settings → Feature Flags** 탭은 선택적 기능을 위한 토글 스위치를 제공합니다. 각 플래그는 네트워크 전체에서 활성화되거나 비활성화되며, 현재는 사이트별 재정의가 없습니다.

### 기능 플래그 접근하기 {#accessing-feature-flags}

1. WordPress 관리자에서 **Gratis AI Agent → Settings**로 이동합니다.
2. **Feature Flags** 탭을 클릭합니다.

### 접근 제어 플래그 {#access-control-flags}

| 플래그 | 기본값 | 설명 |
|---|---|---|
| **관리자로 제한** | 꺼짐 | 활성화하면 `administrator` 역할을 가진 사용자만 AI Agent 채팅 패널을 열 수 있습니다. 그 외 모든 역할에는 대신 "관리자에게 문의하세요" 메시지가 표시됩니다. |
| **Network Admin으로 제한** | 꺼짐 | multisite 네트워크에서 활성화하면 Super Admin만 agent를 사용할 수 있습니다. 개별 사이트 관리자는 차단됩니다. 둘 다 활성화된 경우 "관리자로 제한"보다 우선합니다. |
| **Subscriber 접근 허용** | 꺼짐 | 활성화하면 `subscriber` 역할을 가진 사용자가 채팅 인터페이스를 사용할 수 있지만 읽기 전용 기능으로 제한됩니다(게시물 생성 또는 설정 변경 불가). |
| **비회원에게 비활성화** | 꺼짐 | Ultimate Multisite 멤버십 상태와 통합됩니다. 활성화하면 활성 멤버십이 없는 사이트에서는 채팅이 숨겨집니다. |

### 브랜딩 플래그 {#branding-flags}

| 플래그 | 기본값 | 설명 |
|---|---|---|
| **"Powered by Gratis AI Agent" 푸터 숨기기** | 꺼짐 | 채팅 위젯 하단에 표시되는 브랜딩 출처 표시 줄을 제거합니다. 화이트 라벨 배포에 권장됩니다. |
| **사용자 지정 Agent 이름** | *(비어 있음)* | 채팅 헤더와 관리자 메뉴의 기본 "Gratis AI Agent" 레이블을 사용자의 제품 이름으로 대체합니다. 기본값을 사용하려면 비워 두세요. |
| **Agent 선택기 숨기기** | 꺼짐 | 활성화하면 사용자가 내장된 5개의 agent 사이를 전환할 수 없습니다. 현재 agent는 설정 → 일반에서 기본값으로 구성된 항목으로 고정됩니다. |
| **사이트 아이콘을 채팅 아바타로 사용** | 꺼짐 | 채팅 위젯 헤더의 기본 AI 아이콘을 WordPress 사이트 아이콘(외모 → 사용자 정의하기 → 사이트 아이덴티티에서 설정)으로 대체합니다. |

### 자동화 안전 플래그 {#automation-safety-flags}

Superdav AI Agent v1.18.0은 더 안전한 자동화 실행을 위해 사람의 승인 게이트와 알림 기록을 도입합니다. 이러한 제어 항목은 설치된 패키지에 따라 기능 플래그 또는 고급 자동화 설정에 표시될 수 있습니다.

| 플래그 | 기본값 | 설명 |
|---|---|---|
| **사람 승인 필요** | 켜짐 권장 | 권한이 있는 사용자가 제안된 작업을 검토하고 확인할 때까지 민감한 자동화를 일시 중지합니다. |
| **알림 중복 제거** | 켜짐 | 재시도 또는 예약 실행이 중복 알림을 보내지 않도록 보낸 알림을 기록합니다. |
| **Calendar 도구 활성화** | 구성될 때까지 꺼짐 | agent가 구성된 Google 캘린더와 이벤트를 읽을 수 있도록 허용합니다. |
| **SMS 알림 활성화** | 구성될 때까지 꺼짐 | 자격 증명이 저장된 후 승인된 워크플로가 TextBee SMS 알림을 보낼 수 있도록 허용합니다. |

### 변경 사항 적용 {#applying-changes}

플래그를 전환한 후 **설정 저장**을 클릭하세요. 변경 사항은 즉시 적용됩니다 — 캐시 삭제나 plugin 재활성화가 필요하지 않습니다.
