---
title: 도메인 판매자 변경 내역
sidebar_position: 99
_i18n_hash: 6b9be73c1503d8df8a806bb02b241873
---
# Domain Seller 변경 로그

버전 1.3.0 - 2026-06-02에 릴리스됨
- 신규: HostAfrica 리셀러 잔액이 너무 낮아질 때 network-admin 경고 추가
- 신규: 새로 등록된 domain을 network site에 자동 매핑 추가
- 수정: 새 domain을 등록할 때만 등록자 field 요구 사항 적용
- 수정: monitor balance 알림을 닫을 수 있게 함
- 수정: WooCommerce 등록자 청구 세부 정보가 유지되도록 보장
- 수정: 등록 중 등록자 연락처 요구 사항 적용
- 수정: domain 등록 product가 0% markup으로 생성되지 않도록 방지
- 수정: checkout session 흐름 전반에서 domain 선택 및 pricing 유지
- 수정: HostAfrica domain pricing 통화 표시 개선
- 수정: WP-core query-var 불일치를 방지하도록 checkout form-action 동작 개선
- 개선: setup guidance에 HostAfrica 리셀러 configuration 문서 연결

Version 1.2.0 - 2026-05-25에 릴리스됨
- 신규: checkout, setup wizard, 조회, TLD/가격, 등록, 갱신, 이전, nameserver, DNS, EPP code, registrar lock, ID 보호 지원을 포함한 도메인 판매 통합으로 HostAfrica 추가
- 신규: 리셀러 가격, 등록, 갱신, 이전, nameserver, DNS, EPP code, registrar lock, WHOIS privacy, TLD 동기화 지원을 포함한 도메인 판매 통합으로 Openprovider 추가
- 신규: 가용성 확인, 등록, nameserver 업데이트, registrar lock, WHOIS privacy를 위해 핵심 통합의 공유 Hostinger API 토큰을 사용하는 도메인 판매 통합으로 Hostinger 추가
- 개선: 개발자 통합 가이드를 위한 도메인 수명 주기 작업 및 필터 docblock 추가
- 개선: addon readme에서 plugin 호환성 메타데이터를 WordPress 7.0으로 업데이트
- 개선: 예정된 릴리스 조율에 사용되는 계획 템플릿 업데이트

Version 1.1.0 - 2026-05-08에 릴리스됨
- 신규: ResellerClub, Enom, OpenSRS 등록기관에 대해 DNS 레코드 생성(add_dns_record) 구현
- 수정: 기본 DNS Records 파서가 이제 {DOMAIN} 및 {SITE_URL} 토큰을 허용함
- 수정: site_url과의 충돌을 방지하도록 도메인 선택 checkout field slug에 네임스페이스 적용

Version 1.0.8 - 2026-05-07에 릴리스됨
- 수정: ResellerClub 도메인 가격이 이제 올바른 API endpoint에서 실시간 원가 가격을 가져옴

Version 1.0.7 - 2026-05-06에 릴리스됨
* 수정: ResellerClub test_connection이 필요한 tlds 파라미터를 전송함 (#224)

Version 1.0.6 - 2026-05-05에 릴리스됨
* 수정: ResellerClub 도메인 등록이 개선된 API 응답 처리 및 레지스트리 기반 provider 라우팅으로 이제 올바르게 작동합니다
* 수정: Register Domain admin 페이지 UX 개선
* 제거됨: CyberPanel 등록기관 통합

Version 1.0.5 - 2026-04-02에 릴리스됨
* 신규: 도메인 등록 및 관리를 위한 GoDaddy 등록기관 통합
* 신규: NameSilo 등록기관 통합
* 신규: ResellerClub 등록기관 통합
* 신규: 도메인 구매 및 매핑 시 SES 발신 도메인 자동 확인
* 수정: 테스트 환경에서 plugin 상수의 재정의를 방지
* 수정: install-wp-tests.sh에서 MySQL flags가 올바르게 word-split됨

Version 1.0.4 - 2026-03-14에 릴리스됨
* **수정:** 일부 누락된 css assets
* **수정:** 사용할 수 없는 tlds와 관련된 오류

Version 1.0.3 - 2026-03-09에 릴리스됨
* **수정:** checkout shortcode와 함께 legacy signup template을 사용할 때 Vue 반응형 속성 오류(domain_option, selected_domain, domain_provider)
* **수정:** 도메인 선택 checkout field의 Subdomain 입력 field 정렬 불량 및 과도하게 큰 텍스트
* **수정:** 도메인 선택 field가 있을 때 "Your URL will be" 미리보기 block 숨기기

버전 1.0.2 - 2026-03-01에 릴리스됨
* **개선됨:** 설정 페이지에서 전역 마크업 설정을 제거했습니다 — 이제 가격 책정은 제품별로만 적용됩니다
* **개선됨:** 빠른 이동을 위해 설정 페이지에 "도메인 제품 관리" 링크를 추가했습니다
* **개선됨:** 도메인 제품 설정에 대한 필드 설명과 툴팁을 더 명확하게 개선했습니다(catch-all vs TLD별, 마크업 유형, 도입 가격)
* **개선됨:** 설정 페이지 전반의 설명을 개선했습니다(TLD 검색, 갱신, DNS, 알림)

버전 1.0.1 - 2026-02-27에 릴리스됨

* **신규:** 대량 가격 관리를 위한 TLD 가져오기 도구
* **신규:** 도메인 상품에 대한 introductory pricing 지원
* **신규:** Cypress를 사용한 E2E 테스트 suite
* **신규:** 도메인 수명 주기 알림을 위한 이메일 템플릿
* **신규:** 관리자 도메인 등록 모달의 등록자 주소 필드, 설정에서 사전 입력됨
* **신규:** 레코드 추가, 편집 및 삭제를 지원하는 고객 DNS 관리 인터페이스
* **신규:** 자동 도메인 매핑이 포함된 "Bring your own domain" 체크아웃 옵션
* **신규:** 체크아웃 중 도메인 이름에서 사이트 URL 자동 생성
* **신규:** 설정의 기본 nameserver 및 DNS 레코드 구성
* **신규:** 핵심 도메인 편집 페이지의 도메인 등록 세부 정보 및 DNS 관리
* **신규:** 설정 wizard가 합리적인 기본값으로 기본 도메인 상품을 자동 생성
* **신규:** 구성된 모든 provider에서 cron을 통한 일일 자동 TLD 동기화
* **신규:** 상품별 구성(항상 켜짐, 고객 선택 또는 비활성화)을 통한 WHOIS privacy 보호
* **신규:** 가격 표시 및 다크 모드 지원이 포함된 WHOIS privacy 체크아웃 체크박스
* **신규:** 수동 도메인 등록을 위한 Register Domain 관리자 페이지
* **신규:** Ultimate Multisite 업데이트 서버를 통한 자동 plugin 업데이트
* **신규:** 보라색 배지 스타일이 적용된 상품 목록 테이블의 도메인 상품 유형 필터 탭
* **신규:** 도메인 체크아웃 양식의 등록자 연락처 필드(이름, 주소, 도시, 주/도, 우편번호, 국가, 전화번호)

* **신규:** registrar API를 호출하기 전에 명확한 오류 메시지로 등록자 필드 검증
* **신규:** 도메인 등록 이벤트를 위한 공급자별 로그 채널(예: domain-seller-namecheap.log)
* **신규:** 기본 등록/가입 결제 양식에 등록자 연락처 필드 추가(도메인을 등록할 때 표시)
* **개선:** Domain Search 결제 필드를 하위 도메인, 등록, 기존 도메인 탭을 지원하는 통합 Domain Selection 필드로 교체
* **개선:** 도메인 product 설정이 core 위젯 시스템을 통해 product 편집 페이지에 인라인으로 렌더링됨
* **개선:** 고객 도메인 정보가 독립형 metabox 대신 core 도메인 매핑 위젯에 연결됨
* **개선:** TLD 가져오기 마법사를 모든 공급자에서 원클릭 동기화로 단순화
* **개선:** Namecheap 도메인 사용 가능 여부가 더 빠른 검색을 위해 배치 API 호출을 사용
* **개선:** Namecheap 가격 API가 올바른 매개변수와 응답 파싱을 사용
* **개선:** 단일 network option에 TLD 저장소를 중앙화
* **개선:** DNS 변경, 이전, 구성 적용에 대한 도메인 활동 로깅
* **개선:** 배치 검증이 포함된 IANA master list를 사용해 OpenSRS의 전체 TLD 동기화
* **개선:** 페이지네이션된 API 요청으로 Namecheap의 전체 TLD 동기화
* **개선:** 레거시 공급자 클래스를 Integration Registry 패턴으로 교체
* **개선:** DNS 및 이전 구성을 포함한 설정 패널
* **개선:** 전화번호가 +CC.NNN registrar 형식으로 자동 포맷됨

* **개선:** Phone field 유효성 검사가 제출 전에 서식 문자를 제거합니다
* **개선:** Version 요구 사항을 Ultimate Multisite 2.4.12로 상향하고 알림을 더 명확하게 표시합니다
* **개선:** CI workflow가 addon과 core plugin 모두에 적절한 checkout을 사용합니다
* **개선:** prepare_registrant_info()가 billing address fallback과 함께 checkout에 저장된 user meta에서 읽습니다
* **수정:** checkout 중 로그인하지 않은 사용자에게 Domain search AJAX가 실패하던 문제
* **수정:** checkout 중 로그인하지 않은 사용자에게 Domain pricing AJAX가 실패하던 문제
* **수정:** WP-CLI commands 실행 시 Spyc class 재선언 fatal error
* **수정:** Namecheap sandbox API timeout이 너무 짧던 문제
* **수정:** Domain search Select button text가 녹색 background에서 보이지 않던 문제
* **수정:** contact info 누락으로 인해 Domain registration이 "RegistrantFirstName is Missing" error와 함께 실패하던 문제
* **수정:** checkout 시점에 site가 아직 존재하지 않을 때 blog_id=0으로 Domain record가 생성되던 문제
* **수정:** Default TLDs setting이 파싱된 array 대신 string으로 반환되던 문제
* **제거:** 독립형 Domain Management admin page — 이제 core domain pages를 통해 처리됩니다

Version 1.0.0 - 2025-09-28에 릴리스됨

**Ultimate Multisite v2를 위한 주요 재작성**

* **신규:** 현대적인 PHP 7.4+ 아키텍처로 완전 재작성
* **신규:** Ultimate Multisite v2 checkout 시스템과의 원활한 통합
* **신규:** 유연한 가격 옵션을 갖춘 도메인 제품 관리
* **신규:** 여러 도메인 제공업체 지원 아키텍처
* **신규:** 자동 갱신 및 subscription 통합
* **신규:** 고객 도메인 관리 인터페이스
* **신규:** Admin 도메인 모니터링 및 로그
* **신규:** 도메인 제품에 대한 쿠폰 지원
* **신규:** 포괄적인 설정 관리
* **신규:** 개발자 친화적인 확장 가능한 코드베이스
* **개선:** 전체 기능 지원을 갖춘 업데이트된 OpenSRS 제공업체
* **개선:** Ultimate Multisite v2와 일관된 최신 UI
* **수정:** 모든 deprecated v1 코드가 v2 표준으로 업데이트됨
* **제거:** 레거시 v1 호환성(호환성 깨짐 변경)

### 이전 버전(v1 레거시)

### 버전 0.0.3 - 20/08/2019

* 수정: Groundhogg CRM과의 비호환성
* 참고: 이는 마지막 v1 호환 릴리스였습니다

### 버전 0.0.2 - 07/12/2018

* 수정: License Key field 제거
* 수정: 기능 plugin이 활성화되었을 때 plan 탭 누락
* 개선: 등록 field에 건너뛰기 버튼 추가

### 버전 0.0.1 - 최초 릴리스

* WP Ultimo v1용 기본 OpenSRS 통합
* 간단한 도메인 검색 및 등록
* plan 기반 도메인 권한
