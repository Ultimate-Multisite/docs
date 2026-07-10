---
title: Ultimate AI Connector for WebLLM 변경 로그
sidebar_position: 99
_i18n_hash: da117fc30b104eada947892d417a2899
---
# Ultimate AI Connector for WebLLM 변경 로그 {#ultimate-ai-connector-for-webllm-changelog}

## Version 1.1.0 — 2026-04-09 출시 {#version-110--released-on-2026-04-09}

* **새 기능:** 관리자 바 상태 표시기가 있는 플로팅 채팅 위젯 — 로그인한 모든 사용자가 프런트 엔드에서 브라우저 측 LLM에 직접 프롬프트를 보낼 수 있습니다.
* **새 기능:** SharedWorker 런타임 — 이제 MLC 엔진이 SharedWorker에서 실행되어 여러 탭이 GPU 세션을 공유하며, 서로 자원을 두고 경쟁하지 않습니다.
* **새 기능:** apiFetch 미들웨어 인터셉터 — AI Client SDK 패턴과 일치하는 WordPress REST 요청이 로컬 WebLLM 브로커로 투명하게 라우팅됩니다. 루프백 HTTP 왕복이 필요 없습니다.
* **새 기능:** 커넥터 패널에 위젯 설정 UI가 추가되어 채팅 위젯을 켜고 끌 수 있고 자동 프롬프트 동작을 구성할 수 있습니다.
* **수정됨:** 기본 Cache API 경로가 깨지는 HuggingFace xet CDN 리디렉션에서도 모델 가중치 다운로드가 유지되도록 IndexedDB 캐시 백엔드를 강제 적용했습니다.
* **수정됨:** 임베딩 모델의 경우 (디코더가 없으므로) context_window KV-캐시 오버라이드를 건너뛰도록 수정했습니다. 이 오버라이드가 런타임 오류를 일으켰습니다.
* **수정됨:** 워커 탭이 로드되기 전에 /webllm/v1/models에서 콜드 스타트 후보 모델을 광고하도록 하여, SDK 사용자가 모델을 즉시 확인할 수 있게 했습니다.
* **수정됨:** WebLLM을 wpai_preferred_text_models 필터에 연결하여, 모델이 설정된 경우 AI Experiments 기능이 브라우저 엔진으로 라우팅되도록 했습니다.
* **개선됨:** 최종 사용자 테스트를 통해 캐시 무효화(Cache-busting), 콘텐츠 정규화(content normalisation), 하드웨어 참조 관련 수정 사항이 반영되었습니다.

## Version 1.0.0 — 초기 출시 {#version-100--initial-release}
