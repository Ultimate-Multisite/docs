---
title: 설정 참조
sidebar_position: 11
_i18n_hash: d9ab375be74a5dff1aaf4f4eaf80c3be
---
# 설정 참조

이 페이지는 Ultimate Multisite의 일상적인 관리에 영향을 주는 설정과 최근 동작 변경 사항을 추적합니다.

## 기타 옵션

**기타 옵션** 영역은 **Ultimate Multisite > Settings > Login & Registration** 아래에 표시됩니다.

| 설정 | 설명 |
|---|---|
| **Jumper 활성화** | 관리자 영역에 Jumper 빠른 탐색 도구를 표시합니다. 이를 사용해 Ultimate Multisite 화면, 네트워크 객체, 지원되는 관리자 대상으로 바로 이동할 수 있습니다. 이 바로가기를 보이게 하고 싶지 않다면 비활성화하세요. |

## 오류 보고 및 원격 측정

이전 오류 보고 옵트인 설정은 설정 페이지에서 제거되었습니다. 익명 원격 측정은 비활성화되어 있으며 이를 활성화하는 UI 토글은 없습니다.

설정 페이지용 내부 운영 문서나 스크린샷을 관리하고 있다면, 관리자들이 더 이상 존재하지 않는 설정을 찾지 않도록 이전 오류 보고 옵트인 field에 대한 참조를 제거하세요.

## 가져오기/내보내기 설정

**Import/Export** 설정 탭은 어떤 설정을 제어하는지 설명하고, 사이트 및 네트워크 아카이브를 위한 **Ultimate Multisite > Site Export**로 직접 연결합니다. 가져오기/내보내기 구성에는 설정 탭을 사용하고, 단일 사이트 내보내기/가져오기 workflow에는 **Tools > Export & Import**를 사용하며, 전체 Network Export 아카이브가 필요할 때는 Site Export 도구를 사용하세요.

## Domain Seller HostAfrica 잔액 경고

Domain Seller addon이 HostAfrica에 연결되어 있으면, 리셀러 Account 잔액이 안정적인 도메인 등록 또는 갱신 처리에 너무 낮을 때 네트워크 관리자에게 닫을 수 있는 잔액 부족 경고가 표시됩니다.

이 알림을 운영 경고로 취급하세요. 유료 도메인 등록을 더 받기 전에 HostAfrica 리셀러 잔액을 충전한 다음, Domain Seller 설정 또는 도메인 모니터링 화면으로 돌아가 등록과 갱신이 정상적으로 계속될 수 있는지 확인하세요.

## AI 제공자 connector 설정

AI 제공자 connector 설정은 이제 지원되는 OAuth Account 풀만 노출합니다.

| 제공자 | 설정 흐름 |
|---|---|
| **Anthropic Max** | OAuth 버튼으로 하나 이상의 Anthropic Max Account를 연결합니다. 샌드박스 처리된 브라우저가 redirect를 자동으로 완료할 수 없을 때는 수동 OAuth fallback을 사용하세요. |
| **OpenAI ChatGPT/Codex** | 동일한 OAuth 풀 workflow를 통해 ChatGPT Account를 연결합니다. Account가 연결된 후 connector가 지원하는 작업에서 ChatGPT Codex 도구 호출을 사용할 수 있습니다. |
| **Google AI Pro** | OAuth를 통해 Google AI Pro Account를 연결한 다음, Account 목록이 즉시 업데이트되지 않으면 connector를 새로 고치세요. |

Cursor Pro는 더 이상 지원되는 제공자가 아닙니다. Cursor Pro 설정 field 또는 connector 경로를 언급하는 이전 내부 스크린샷, 운영 문서 또는 온보딩 단계를 제거하세요.

제공자 Account를 추가하거나 제거할 때는 새로 고치거나 삭제할 Account의 유효한 이메일 주소를 입력하고, connector 기반 작업을 테스트하기 전에 제공자 설정을 저장하세요.
