---
title: Ultimate AI Connector for Compatible Endpoints 변경 로그
sidebar_position: 99
_i18n_hash: bc1e5acc3b2415defb863e64a18d271c
---
# Ultimate AI Connector for Compatible Endpoints 변경 로그

## Version 2.0.0 — 2026-04-24 출시 {#version-200--released-on-2026-04-24}

* 신규: 다중 공급자 지원 — 여러 AI 엔드포인트를 설정하고 공급자 간 자동 폴백(fallback) 기능을 통해 요청을 라우팅할 수 있습니다.
* 수정: 공급자별로 정확한 공급자 ID, 등록 URL, HTTP 필터 범위 설정을 포함한 다중 공급자 SDK 통합 기능을 개선했습니다.
* 수정: 새 공급자 카드가 추가될 때 자동으로 확장되며, 플러그인 업데이트 시 스크립트 캐시 무효화 기능이 추가되었습니다.
* 수정: `eval()`을 위한 동적 공급자 클래스 네임스페이스와 새로 추가된 공급자에 대한 자동 확장 동작을 수정했습니다.
* 수정: WordPress 6.9 이상 호환성을 위해 안정적인 Card/CardBody/CardHeader/CardDivider 컴포넌트(더 이상 실험적이지 않음)를 사용하도록 변경했습니다.
* 수정: 공급자 드래그하여 순서 변경 기능을 위해 정의되지 않은 DragHandle을 유니코드 그립 아이콘으로 대체했습니다.
* 수정: 모든 페이지 로드 시 실행되던 차단(blocking) HTTP 요청을 제거했습니다.
* 개선: GitHub Actions 워크플로우가 Node.js 24로 업그레이드되었습니다.

## Version 1.0.0 — 초기 출시 {#version-100--initial-release}
