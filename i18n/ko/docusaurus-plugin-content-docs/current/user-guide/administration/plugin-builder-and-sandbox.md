---
title: 플러그인 빌더 및 샌드박스
sidebar_position: 21
_i18n_hash: 74c409a36b52ea261922998822b286d0
---
# Plugin Builder & Sandbox {#plugin-builder--sandbox}

Gratis AI Agent v1.5.0을 통해 **Plugin Builder & Sandbox System**이 도입되었습니다. 이 시스템을 사용하면 AI 어시스턴트가 안전하고 격리된 샌드박스 환경을 통해 네트워크에 WordPress 플러그인을 생성, 활성화 및 관리할 수 있습니다.

## 개요 {#overview}

Plugin Builder는 AI 어시스턴트가 자연어 요청에 따라 사용자 지정 WordPress 플러그인을 작성할 수 있도록 지원합니다. 생성된 플러그인은 실제 사이트 기능에 영향을 주기 전에 샌드박스 레이어 내에서 검증, 저장 및 활성화됩니다.

주요 사용 사례는 다음과 같습니다:

- 개발자의 개입 없이 가벼운 유틸리티 플러그인을 생성할 수 있습니다.
- WordPress hook이나 custom post type이 필요한 기능을 프로토타이핑할 수 있습니다.
- 일괄 작업을 위한 단기 자동화 스크립트를 만들 수 있습니다.

## AI를 통한 플러그인 생성 {#generating-a-plugin-via-ai}

플러그인을 생성하려면 Gratis AI Agent 채팅 인터페이스를 열고 필요한 내용을 설명하면 됩니다. 예를 들어 다음과 같이 요청할 수 있습니다:

> "대시보드에 사용자 지정 관리자 알림을 추가하는 플러그인을 만들어 주세요."

AI는 다음 작업을 수행합니다:

1. 구조화된 코드 생성을 사용하여 플러그인 PHP 코드를 생성합니다.
2. 구문 오류 및 안전하지 않은 패턴에 대해 출력을 검증합니다.
3. 생성된 플러그인을 샌드박스 스토어에 저장합니다.
4. 플러그인 슬러그와 **Activate in Sandbox** 버튼이 포함된 확인 메시지를 반환합니다.

활성화하기 전에 동일한 대화 스레드에서 후속 질문을 하여 결과를 다듬을 수 있습니다.

## 샌드박스 활성화 {#sandbox-activation}

샌드박스에서 생성된 플러그인을 활성화하는 것은 실제 네트워크에서 활성화하는 것과는 다릅니다. 샌드박스는 다음과 같은 역할을 합니다:

- 플러그인을 격리된 WordPress 환경(wp-env)에서 실행합니다.
- 모든 PHP 오류, 경고 또는 hook 충돌을 포착합니다.
- 활성화 결과를 채팅 인터페이스에 보고합니다.

샌드박스에서 플러그인을 활성화하려면 AI 채팅 응답의 **Activate in Sandbox** 버튼을 클릭하거나, 슬래시 명령어(/)를 사용하세요:

```
/activate-plugin <plugin-slug>
```

상태 메시지를 통해 활성화가 성공했는지 실패했는지 확인합니다. 실패한 경우, 오류 로그가 채팅 스레드에 표시됩니다.

## 생성된 플러그인 관리 {#managing-generated-plugins}

생성된 플러그인은 **Gratis AI Agent → Plugin Builder → Manage Plugins**에서 확인할 수 있습니다. 이 화면에서 다음 작업을 수행할 수 있습니다:

| Action | Description |
|---|---|
| **View source** | 전체 플러그인 PHP 코드를 검토합니다. |
| **Re-activate in sandbox** | 샌드박스 활성화 검사를 다시 실행합니다. |
| **Install on network** | 플러그인을 실제 네트워크에 배포합니다 (수동 확인 필요). |
| **Update** | AI를 통해 새 버전을 제공하여 기존 코드를 대체합니다. |
| **Delete** | 샌드박스 스토어에서 플러그인을 제거합니다. 먼저 모든 사이트에서 비활성화됩니다. |

:::warning
**Install on network**은 생성된 플러그인을 실제 WordPress multisite에 배포합니다. 진행하기 전에 플러그인 코드를 검토하세요. Gratis AI Agent는 실제 설치를 완료하기 전에 확인을 요청합니다.
:::

## 네트워크에 플러그인 설치하기 {#installing-a-generated-plugin-on-the-network}

샌드박스에서 플러그인을 충분히 검토했다면, 실제 네트워크에 설치할 수 있습니다:

1. **Gratis AI Agent → Plugin Builder → Manage Plugins**로 이동합니다.
2. 배포하려는 플러그인 옆의 **Install on Network**을 클릭합니다.
3. 대화 상자를 확인합니다. 플러그인은 `wp-content/plugins/`에 설치되고 네트워크에서 활성화됩니다.

대안으로, 채팅 인터페이스에서 슬래시 명령어를 사용할 수도 있습니다:

```
/install-plugin <plugin-slug>
```

## 플러그인 업데이트 {#plugin-updates}

생성된 플러그인을 업데이트하려면, 새로운 대화에서 AI 어시스턴트에게 변경 사항을 설명하세요:

> "dashboard-notice 플러그인을 관리자에게만 알림이 표시되도록 업데이트해 주세요."

AI는 새 버전을 생성하며, 이 버전은 현재 버전과 함께 샌드박스에 나타납니다. 업데이트가 적용되기 전에 변경된 부분(diff)을 검토하고 확인하면 됩니다.

## HookScanner 통합 {#hookscanner-integration}

Plugin Builder는 통합된 **HookScanner**를 사용하여 각 생성된 플러그인이 등록한 hook과 filter를 분석합니다. HookScanner의 출력은 채팅 응답에 표시되며 다음 내용을 포함합니다:

- 등록된 Action hook (`add_action` 호출).
- 등록된 Filter hook (`add_filter` 호출).
- 플러그인 의존성에서 발견된 모든 hook ( `vendor/` 및 `node_modules/` 디렉토리는 건너뜁니다).

이를 통해 플러그인을 활성화하기 전에 플러그인의 동작 방식을 이해하는 데 도움이 됩니다.

## 보안 고려 사항 {#security-considerations}

- 생성된 플러그인은 수동으로 설치된 플러그인과 분리되어 저장되며, 사용자가 네트워크에 명시적으로 설치하기 전까지는 표준 WordPress 플러그인 관리 화면에서 접근할 수 없습니다.
- 샌드박스는 플러그인 파일을 작성할 때 디렉토리 순회(directory traversal)를 방지하기 위해 경로 유효성 검사를 사용합니다.
- 위험한 함수 호출(예: `eval`, `exec`, `system`)을 포함하는 플러그인은 검증 과정에서 플래그가 지정되며 활성화되지 않습니다.
