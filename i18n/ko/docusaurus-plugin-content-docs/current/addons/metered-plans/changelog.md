---
title: 사용량 기반 요금제 변경 기록
sidebar_position: 99
_i18n_hash: ee036a85eb635b4b503c94798251e839
---
# Metered Plans 변경 로그 {#metered-plans-changelog}

버전 1.1.0 - 2026-05-05에 릴리스됨
- 신규: multisite 하위 사이트에 대한 AI 토큰 청구 — 고객 사이트 전반의 AI 토큰 사용량을 추적하고 구성 가능한 토큰당 요율로 청구합니다
- 신규: Connector 적용이 동적 한도 검색 및 write-through로 재구축되어 모든 connector 전반에서 실시간 정확성을 보장합니다
- 수정: Database 테이블 업그레이드가 이제 BerlinDB 스키마 정의와 올바르게 정렬되어, 새 설치에서 업그레이드 실패를 방지합니다
- 수정: Database 업그레이드 콜백이 올바른 형식으로 변환되어, 조용히 발생하던 업그레이드 실패를 해결합니다
- 수정: AI Usage Overage Markup 입력 필드에서 이제 소수 값이 허용됩니다
- 수정: plugin 로드 시 치명적 오류 및 이중 초기화 문제를 해결했습니다
- 개선: 개발자 환경이 첫 실행 시 자동 구성되도록 check-env npm 스크립트를 추가했습니다

### 1.0.3 {#103}
* Plugin Update Checker v5로 업데이트됨
* 최신 WordPress plugin 헤더 추가
* 최신 WordPress 버전과의 호환성 개선
* 사용량 추적 성능 향상

### 1.0.2 {#102}
* 버그 수정 및 성능 개선
* 사용량 보고 향상

### 1.0.0 {#100}
* 최초 릴리스
* 핵심 종량제 청구 기능
* 사용량 추적 및 초과 사용량 계산
* 자동 인보이스 생성
