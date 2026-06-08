---
title: 무료 AI 에이전트 설정
sidebar_position: 22
_i18n_hash: 7b593387e5e7b44903bfd6f0a1ff42ee
---
# Gratis AI Agent 설정

Gratis AI Agent의 **설정 → 고급** 화면에서는 v1.5.0에 도입된 백엔드 통합에 대한 관리자 수준의 구성을 제공합니다. 이 페이지에서는 **피드백 엔드포인트** 필드와 예상되는 형식을 설명합니다.

## 설정 접근 방법

1. WordPress 관리자 화면에서 **Gratis AI Agent → 설정**으로 이동합니다.
2. **고급** 탭을 클릭합니다.

## 피드백 엔드포인트 구성

피드백 엔드포인트는 사용자가 엄지손가락 아래 버튼, 자동 프롬프트 배너 또는 `/report-issue` 명령을 통해 피드백을 제출할 때 AI 에이전트로부터 POST 요청을 받습니다.

| 필드 | 설명 |
|---|---|
| **Feedback Endpoint URL** | JSON 본문과 함께 HTTP POST 요청으로 피드백 제출을 받는 URL입니다. |
| **Feedback API Key** | 각 피드백 요청의 `Authorization` 헤더에 전송되는 Bearer 토큰입니다. 엔드포인트가 인증을 요구하지 않으면 공란으로 둡니다. |

### 예상 JSON 페이로드

피드백 엔드포인트는 최소한 다음 필드를 포함하는 JSON 본문을 수락해야 합니다.

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "가격에 대한 답변이 잘못되었습니다.",
  "triage_category": "factual_error"
}
```

추가 필드는 대화 컨텍스트에 따라 페이로드에 포함될 수 있습니다.

### `triage_category` 값

AI 분류(triage) 계층은 페이로드를 전달하기 전에 `triage_category`에 다음 값 중 하나를 할당합니다.

| 값 | 의미 |
|---|---|
| `factual_error` | 어시스턴트가 부정확한 사실 정보를 제공했습니다. |
| `unhelpful_answer` | 응답 자체는 기술적으로 정확했지만 유용하지 않았습니다. |
| `inappropriate_content` | 응답에 사용자에게 보여주어서는 안 되는 내용이 포함되어 있었습니다. |
| `other` | 피드백이 알려진 범주에 해당하지 않았습니다. |

### 인증

엔드포인트가 인증을 요구하는 경우, **Feedback API Key** 필드에 Bearer 토큰을 설정합니다. 에이전트는 다음을 전송합니다:

```
Authorization: Bearer <your-api-key>
```

**Feedback API Key** 필드가 비어 있으면 `Authorization` 헤더는 전송되지 않습니다.

### 피드백 수집 비활성화

**Feedback Endpoint URL**과 **Feedback API Key** 필드를 모두 공란으로 둡니다. 엄지손가락 아래 버튼과 피드백 UI는 사용자에게 계속 표시되지만, 제출된 내용은 외부 서비스로 전달되지 않습니다.

## Brave Search API Key

**고급** 탭에서도 **Brave Search API Key** 필드는 [인터넷 검색](../configuration/internet-search) 기능을 활성화합니다.

| 필드 | 설명 |
|---|---|
| **Brave Search API Key** | Brave Search 개발자 대시보드에서 얻은 API 키입니다. AI 어시스턴트에서 인터넷 검색을 활성화하는 데 필요합니다. |

이 필드 레이블에는 Brave Search API 가입 페이지로 연결되는 클릭 가능한 링크가 포함되어 있습니다. 인터넷 검색을 비활성화하려면 공란으로 둡니다.

이 기능에 대한 최종 사용자 문서는 [인터넷 검색](../configuration/internet-search)을 참조하세요.

## 기능 플래그 (Feature Flags)

v1.9.0에서 도입된 **설정 → 기능 플래그** 탭에서는 선택적 기능에 대한 토글 스위치를 제공합니다. 각 플래그는 네트워크 전체에서 활성화 또는 비활성화되며, 현재는 사이트별 재정의 기능은 없습니다.

### 기능 플래그 접근 방법

1. WordPress 관리자 화면에서 **Gratis AI Agent → 설정**으로 이동합니다.
2. **기능 플래그** 탭을 클릭합니다.

### 접근 제어 플래그

| Flag | Default | Description |
|---|---|---|
| **Restrict to Administrators** | Off | 활성화하면 `administrator` 역할을 가진 사용자만 AI Agent 채팅 패널을 열 수 있습니다. 다른 모든 역할의 사용자는 대신 "관리자에게 문의하세요" 메시지를 보게 됩니다. |
| **Restrict to Network Admins** | Off | 멀티사이트 네트워크에서 활성화하면 Super Admin만 에이전트를 사용할 수 있습니다. 개별 사이트 관리자는 차단됩니다. 두 플래그가 모두 활성화된 경우 "Restrict to Administrators"보다 우선합니다. |
| **Allow Subscriber Access** | Off | 활성화하면 `subscriber` 역할을 가진 사용자가 채팅 인터페이스를 사용할 수 있지만, 읽기 전용 기능으로 제한됩니다(게시물 생성이나 설정 변경 불가). |
| **Disable for Non-Members** | Off | Ultimate Multisite 멤버십 상태와 통합됩니다. 활성화하면 활성 멤버십이 없는 사이트에서는 채팅이 숨겨집니다. |

### 브랜딩 플래그

| Flag | Default | Description |
|---|---|---|
| **Hide "Powered by Gratis AI Agent" Footer** | Off | 채팅 위젯 하단에 표시되는 브랜딩 출처 표시를 제거합니다. 화이트 라벨 배포에 권장됩니다. |
| **Custom Agent Name** | *(blank)* | 채팅 헤더와 관리자 메뉴의 기본 "Gratis AI Agent" 레이블을 사용자의 제품 이름으로 대체합니다. 기본값을 사용하려면 공란으로 둡니다. |
| **Hide Agent Picker** | Off | 활성화하면 사용자가 내장된 다섯 가지 에이전트 간을 전환할 수 없습니다. 현재 에이전트는 Settings → General에서 기본값으로 설정된 것으로 고정됩니다. |
| **Use Site Icon as Chat Avatar** | Off | 채팅 위젯 헤더의 기본 AI 아이콘을 WordPress 사이트 아이콘(Appearance → Customize → Site Identity에서 설정)으로 대체합니다. |

### 변경 사항 적용

플래그를 토글한 후 **설정 저장**을 클릭합니다. 변경 사항은 즉시 적용되며, 캐시 플러시나 플러그인 재활성화가 필요하지 않습니다.
