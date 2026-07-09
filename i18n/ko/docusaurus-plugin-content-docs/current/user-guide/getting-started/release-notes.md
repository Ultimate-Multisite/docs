---
title: 릴리스 노트
sidebar_position: 9
_i18n_hash: f43456fb08d6572cbc3ddf432a51d7d5
---
# 릴리스 노트

## 버전 2.13.0 — 2026-06-05에 릴리스됨

- 신규: 고객 Account, checkout, billing, site, invoice, template 전환, domain mapping 흐름에 sovereign-tenant 지원을 추가하여 tenant 네트워크가 관리 작업을 위해 고객을 메인 site로 되돌려 보낼 수 있습니다.
- 신규: recurring membership에 renewal-credential 확인을 추가하여 저장된 billing agreement, subscription 또는 vault token이 없을 때 gateway가 auto-renewal을 비활성화할 수 있습니다.
- 신규: pending site 생성에 HMAC 검증 loopback publishing을 추가하여 background job이 지연되는 host에서 checkout-to-site 프로비저닝의 안정성을 높였습니다.
- 신규: SSO URL, checkout-form 기본 domain, 자동 domain-record 생성에 대한 개발자 확장 지점을 추가했습니다.
- 수정: SSO가 mapped domain, 익명 broker 방문, logout, cross-plugin dependency 충돌 전반에서 더 안정적으로 동작합니다.
- 수정: Pending site 생성이 이제 오래된 publish flag에서 복구되며 고객이 site-creation 화면에 갇히지 않도록 합니다.
- 수정: 공유 checkout-form 기본 domain에 대해 domain record가 더 이상 생성되지 않으며, 활성 integration이 없을 때 사용되지 않는 host-provider background job을 건너뜁니다.
- 수정: Checkout, billing address, password reset, email verification, template 전환, tour, 고객 Dashboard의 edge case가 더 이상 일반 고객 흐름을 차단하지 않습니다.
- 수정: Broadcast email이 이제 recipient list 또는 mail transport 실패 시 SMTP/plugin 치명적 오류를 피하면서 수신자를 비공개로 유지합니다.
- 수정: Membership renewal, expiration 표시, payment collection edge case가 이제 즉시 만료, 충돌 또는 필요한 결제 누락을 방지합니다.
- 개선: WordPress 호환성이 7.0까지 테스트되었고, production Vue asset이 npm source에서 다시 빌드되었으며, Cypress end-to-end coverage가 이제 더 많은 checkout, setup, SSO, gateway 흐름을 실행합니다.

## 버전 2.12.0 — 2026-05-15에 릴리스됨

- 신규: Hostinger (hPanel)를 domain mapping integration이 포함된 지원 host provider로 추가했습니다
- 신규: Site Exporter가 이제 네트워크 전체 site 복원을 간소화하기 위해 network import bundle을 처리합니다
- 수정: BCC broadcast email이 이제 undisclosed-recipients header를 사용하여 수신자 주소 노출을 방지합니다
- 수정: Membership expiration date가 날짜가 아닌 값으로 저장할 때 더 이상 손상되지 않습니다
- 수정: Stripe membership update가 이제 deprecated deleteDiscount API를 호출하지 않고 discount를 올바르게 제거합니다
- 수정: domain-mapped site의 SSO redirect가 이제 무한 redirect loop를 방지하도록 제한됩니다
- 수정: Setup wizard image picker 선택이 이제 underlying data model을 올바르게 업데이트합니다
- 수정: Site Exporter CLI가 이제 올바른 기본 network site 선택을 보존합니다
- 개선: plugin package에서 bundled wp-cli를 제거하여 plugin 크기를 줄였습니다

## 버전 2.11.0 — 2026-05-11에 릴리스됨

- 신규: Site export가 이제 자체 부팅되는 `index.php`를 bundle하여 별도 plugin 설치 없이 새 host에 ZIP을 설치할 수 있습니다.
- 신규: Network export를 통해 관리자가 Site Export admin page에서 모든 subsite를 단일 archive로 export할 수 있습니다.
- 신규: Allow Site Templates plan toggle이 이제 fallback chain을 통해 적용되어 plan 제한에 맞게 template 사용 가능 여부를 올바르게 제한합니다.
- 신규: Checkout form editor가 필수 field가 구성되지 않은 product가 추가되면 경고합니다.
- 신규: Import/Export settings tab이 이제 scope를 명확히 설명하고 Site Export tool로 직접 연결됩니다.

## 버전 2.10.0 — 2026-05-05에 릴리스됨

- 신규: 원활한 gateway 구성을 위한 OAuth flag gate가 포함된 수동 credential 입력용 PayPal guided setup wizard.
- 신규: Template switch customer panel이 current-template card, persistent grid 및 **현재 template 재설정** button으로 재설계되었습니다.
- 수정: Template switching이 AJAX 실패 시 더 이상 UI를 멈추게 하지 않습니다.
- 수정: Template switching permission state가 unauthorized access에 대해 보호되었습니다.
- 수정: Site override input이 저장 전에 검증됩니다.
- 수정: Billing address prompt가 이제 address가 비어 있을 때 표시됩니다.
- 수정: PHP 8.1 null-to-string deprecation notice가 해결되었습니다.
- 수정: timing issue를 방지하기 위해 init hook 전에 Current가 lazy-loaded됩니다.
- 수정: Filtered SSO path가 모든 login flow에서 준수됩니다.
- 수정: 빈 site identity option이 저장 시 보존됩니다.

## 버전 2.9.0 — 2026-04-30에 릴리스됨

- 신규: Single-site export 및 import가 **Tools > Export & Import** 아래에 추가되었습니다.
- 수정: Export ZIP file이 이제 인증된 download endpoint를 통해 제공됩니다.
- 수정: Pending export/import query의 SQL injection risk 및 query issue가 수정되었습니다.
- 수정: admin이 customer email을 수동으로 verifies할 때 pending site가 published되지 않는 문제가 수정되었습니다.
- 수정: membership이 없을 때 orphaned pending_site record가 정리됩니다.
- 수정: Settings nav padding 및 search anchor navigation이 수정되었습니다.
- 수정: Pending site가 이제 All Sites view에서 먼저 표시됩니다.
- 수정: 403 error를 방지하기 위해 screenshot provider (mShots) User-Agent header가 추가되었습니다.
- 수정: Import cron schedule circular dependency가 해결되었습니다.
- 수정: Tour ID가 user settings key에서 underscore로 normalised됩니다.
- 개선: 더 나은 호환성을 위해 이제 Alchemy/Zippy 대신 ZipArchive가 사용됩니다.

## 버전 2.8.0 — 2026-04-29

- 신규: 다른 옵션 설정 UI에 Jumper 토글 활성화가 추가되었습니다.
- 신규: 결제 양식 목록 테이블에 상태 열이 추가되었습니다.
- 신규: 사용자 지정 MU-plugin sunrise 확장을 위한 Addon sunrise 파일 로더가 추가되었습니다.
- 개선: 설정 페이지에서 오류 보고 옵트인 설정이 제거되었습니다.
- 수정: 감사 페이지 사이트 카드 — 이제 이미지가 제한되고 링크 스타일이 올바르게 적용됩니다.
- 수정: 스크린샷 제공자가 thum.io에서 WordPress.com mShots로 전환되었습니다.
- 수정: 이제 새로 설치할 때 등록 활성화 및 기본 역할이 올바른 기본값으로 설정됩니다.
- 수정: 도메인에 포트가 포함된 경우 `get_site_url()`이 더 이상 빈 값을 반환하지 않습니다.
- 수정: `copy_media` 설정이 비어 있을 때도 복제 미디어 파일이 이제 올바르게 복사됩니다.
- 수정: 네트워크 활성화 sitemeta 쓰기 후 객체 캐시가 올바르게 무효화됩니다.
- 수정: 세 부분 도메인의 DNS 검증 시 사용자 지정 도메인이 기본 도메인으로 자동 승격됩니다.
- 수정: 만료된 결제가 정리될 때 대기 중인 멤버십이 취소됩니다.
- 수정: 인라인 로그인 프롬프트를 닫은 후 비밀번호 강도 검사기가 다시 바인딩됩니다.
- 수정: 사이트가 이미 생성된 경우 감사 페이지에서 무한 페이지 새로고침이 중지되었습니다.
- 수정: plugin 활성화 및 설정 저장 시 WP 코어 등록 옵션이 동기화됩니다.
- 수정: PHP 8.4 호환성을 위해 `calculate_expiration`에 null 만료 가드가 추가되었습니다.
- 수정: 고객에게 이미 활성 멤버십이 있는 경우 중복 가입이 차단됩니다.
- 수정: 결제에서 `date_expiration`에 대한 null 검사가 추가되었습니다.
- 수정: 사이트 프로비저닝이 강화되었습니다 — 제한, 멤버십 추론, 도메인 승격.
- 수정: 사전 설치 확인 상태 라벨이 확인 실패 시 활성화되지 않음으로 수정되었습니다.
- 수정: 이메일 확인 URL에 결제 도메인이 사용됩니다.
- 수정: 비밀번호 필드가 없는 경우 결제 후 자동 로그인이 수행됩니다.
- 수정: 무료 멤버십은 더 이상 만료되지 않으며 — 평생으로 처리됩니다.
- 수정: 고객이 이메일을 확인할 때까지 이메일 확인 게이트가 사이트 게시를 보류합니다.
- 수정: SES v2 API endpoint 기본 경로 및 ID 라우트가 수정되었습니다.
- 수정: `wu_inline_login_error` hook이 제출 전 catch 블록에서 발생합니다.
