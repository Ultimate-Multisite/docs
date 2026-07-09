---
title: 지원 티켓 변경 로그
sidebar_position: 99
_i18n_hash: 4ef7d3adaed4523e799ec78da9843a3d
---
# Support Tickets 변경 로그

### 1.0.4 - 2026-05-05
* 개선: Git 추적에서 vendor/ 디렉터리를 제거했습니다(.gitignore에서 이미 처리됨). 저장소 크기를 줄였습니다
* 개선: WordPress 7.0까지 테스트했습니다

### 1.0.3 - 2026-05-01
* 수정: nullable 티켓 모델 setter에서 null 값을 허용합니다
* 수정: 적절한 multisite 지원을 위해 모든 티켓을 전역 네트워크 전체 테이블에 저장합니다
* 수정: 고객 새 티켓 양식에서 직원 필드를 숨기고 빈 페이지 리디렉션을 수정합니다
* 수정: 메타데이터 저장을 위해 정의되지 않은 add_meta() 호출을 올바른 update_meta()로 교체합니다
* 수정: 등록되지 않은 권한 확인을 올바른 wu_view_all_support_tickets로 교체합니다
* 수정: 티켓 상태, 배정 및 빠른 편집 작업에 누락된 AJAX handler를 추가합니다
* 수정: 티켓 보기에서 직원 응답 감지를 위한 메서드 이름을 수정합니다
* 수정: 중복 답글 handler를 통합하고 nonce 작업 이름을 맞춥니다
* 수정: [wu_submit_ticket] shortcode에 누락된 frontend 보기를 추가합니다
* 수정: 누락된 user_id 열을 추가하고 Support_Ticket::get_user_id() 메서드를 수정합니다
* 수정: 우선순위 필터 option tag의 추가 큰따옴표를 제거합니다
* 수정: super admin을 위한 network admin 티켓 관리 패널을 추가합니다
* 개선: admin CSS를 단일 외부 스타일시트로 통합합니다
* 개선: subsite admin menu에서 Settings submenu를 제거합니다
* 개선: support ticket 페이지에서만 frontend assets를 조건부로 로드합니다
* 개선: Bedrock root autoloader가 이미 의존성을 로드한 경우 plugin autoloader를 건너뜁니다

### 1.0.2 - 2025-12-11
* 추가: admin 및 frontend를 위한 전체 티켓 보기 기능
* 추가: 티켓 답글 제출을 위한 AJAX handler
* 추가: 적절한 양식 처리를 갖춘 티켓 답글 기능 지원
* 추가: admin에서 티켓 제출 및 답글에 대한 적절한 알림 표시
* 추가: 고객 자체 제출을 위해 현재 사용자와 자동 티켓 연결
* 추가: 고객이 티켓 소유권을 재정의하지 못하도록 하는 보안 강화
* 추가: 누락된 helper function(wu_format_date, wu_user_can_view_ticket 등)
* 추가: 적절한 파일 첨부 다운로드 및 처리
* 추가: 티켓 답글 및 상태 변경을 위한 이메일 알림 시스템
* 수정: 티켓 답글 양식에 이제 필요한 티켓 ID가 포함됩니다
* 수정: admin 티켓 보기의 알림 표시 문제
* 수정: support ticket 함수의 구문 오류
* 개선: 응답 및 첨부 파일을 위한 적절한 query 및 schema 클래스를 갖춘 데이터베이스 구조
* 개선: 티켓 모델에서 attribute 대신 실제 property로 마이그레이션

### 1.0.1 - 2025-09-28
* 업데이트: 일관성을 위해 prefix를 ultimate-multisite로 변경
* 업데이트: 텍스트 도메인 표준화
* 수정: 사소한 버그 수정 및 개선

### 1.0.0 - 2025-09-01
* 최초 릴리스
* 완전한 티켓 관리 시스템
* 다단계 접근 제어
* 스레드형 대화 시스템
* 파일 첨부 지원
* 이메일 알림 시스템
* admin 및 고객 인터페이스
* 통계 및 보고
