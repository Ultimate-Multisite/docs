---
title: Txhua tus neeg raug lus thiab tswv txog kev txaus thiab kev hluav tswv
sidebar_position: 25
_i18n_hash: b8cc1801782ca29dbdcddcf9db34fb48
---
# Customer Feedback & Issue Reporting

Gratis AI Agent v1.5.0 에는 사용자들이 도움이 되지 않는 답변을 표시하고 채팅 인터페이스에서 직접 문제를 보고할 수 있도록 내장된 피드백 및 문제 보고 시스템이 추가되었습니다. 이 시스템은 동의 관리, 자동 보고 명령어, 그리고 백엔드에서의 AI 지원 분류(triage) 기능을 포함합니다.

## 엄지척 버튼 (Thumbs-Down Button) {#thumbs-down-button}

AI 어시스턴트가 보내는 모든 메시지에는 **엄지척** (👎) 버튼이 표시됩니다. 사용자가 이 버튼을 클릭하면 해당 답변을 도움이 되지 않거나 틀렸다고 표시할 수 있습니다.

- 마우스를 올리면 각 어시스턴트 메시지 옆에 버튼이 나타납니다.
- 클릭하면 **피드백 동의 모달 (Feedback Consent Modal)**이 열립니다.
- 피드백은 대화 스레드와 특정 메시지에 연결됩니다.

## 피드백 동의 모달 (Feedback Consent Modal) {#feedback-consent-modal}

사용자가 엄지척 버튼을 클릭하면 데이터가 전송되기 전에 동의 모달이 나타납니다. 이 모달은 다음을 수행합니다.

- 어떤 정보(대화 발췌 내용, 브라우저 상황 등)가 수집될지 설명해 줍니다.
- 사용자에게 이 데이터를 공유하는 것에 동의한다는 것을 확인하도록 요청합니다.
- 사용자가 무슨 문제가 발생했는지 설명할 수 있는 자유 텍스트 필드를 제공합니다.
- 제출하지 않고 닫을 수 있는 **취소 (Cancel)** 옵션을 제공합니다.

사용자가 명시적으로 확인하기 전까지는 피드백이 기록되지 않습니다.

## 자동 프롬프트 피드백 배너 (Auto-Prompt Feedback Banner) {#auto-prompt-feedback-banner}

대화가 끝날 때, 어시스턴트는 세션이 도움이 되었는지 묻는 **자동 프롬프트 피드백 배너**를 표시할 수 있습니다. 이 배너는 방해되지 않는 메시지로 대화가 유용했는지 물어봅니다.

이 배너는 대화 길이와 결과에 따라 자동으로 나타납니다. 엄지척 버튼과 동일한 피드백 흐름으로 연결됩니다. 사용자는 피드백을 제공하지 않고도 이 배너를 닫을 수 있습니다.

## /report-issue 슬래시 명령어 (/report-issue Slash Command) {#report-issue-slash-command}

사용자는 채팅 입력창에 `/report-issue`를 입력하여 피드백 흐름을 직접 시작할 수 있습니다. 이 명령어는 다음을 수행합니다:

- Òmni Feedback Consent Modal-a nrhiav txhua cas.
- Kua tsim tsis txhob hauv field of description chuj txhua cas u laum.
- Tsis txhob ua kev tsis txhob hauv qhia tsis txhob hauv submission.

The `/report-issue` command yuav muaj hauv txhua chat mode (inline, floating widget, full-screen).

## AI-Assisted Triage {#ai-assisted-triage}

Feedback uas tsim chuah yuav tso cai rau layer triage hauv AI u cui:

- Tshawb hauv report no (factual error, unhelpful answer, inappropriate content, etc.).
- Thov metadata ntawm cov lus qhia uas muaj nyiam.
- Tso summary triage rau **Feedback Endpoint** uas ua raws li koj tsim. (tsub nrho [Settings > Advanced](#settings-advanced)).

Yuav txhob tsis txhob hauv kev tshawb chuah loj los ntawm cov lus qhia uas muaj txoj haujlwm tshำ plaws tshiab.

## Settings > Advanced {#settings-advanced}

Uauv tsim feedback backend, ua raws li cov field no hauv **Gratis AI Agent → Settings → Advanced**:

| Field | Description |
|---|---|
| **Feedback Endpoint URL** | The URL uas thov POST requests leej twg muaj feedback payloads (JSON). |
| **Feedback API Key** | Bearer token uas tso hauv `Authorization` header rau kev txhais khoom submission feedback. |

Tsis txhob ua hauv lub field oba thiab tsis txhob ua hauv lub field no yuav tsim cov kev thuam feedback. Cov button feedback tsis txhob tsis txhob muaj hauv users, tab sis submissions yuav tsis tso cai rau lub endpoint.

:::tip
Feedback endpoint yuav tsum txhob tsim cov body JSON uas muaj `message_id`, `conversation_id`, `feedback_text`, thiab `triage_category` fields. Tso hauv documentation ntawm koj endpoint provider rau schema uas yuav tsim.
