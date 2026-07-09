---
title: 캡차 변경 기록
sidebar_position: 99
_i18n_hash: 711bb4f00a108ccb60114b60822e5162
---
# Captcha 변경 로그 {#captcha-changelog}

Version: 1.5.0 - 2026-05-22에 릴리스됨
* 신규: 하드 스톱 속도 제한기 — captcha로 보호되는 표면(wp-login / register / lost-password / comments, WooCommerce my-account / checkout / pay-for-order, Ultimate Multisite checkout / inline-login)의 모든 GET 및 POST를 계산하고 HTTP 429, `Retry-After` header, 무작위 tarpit 대기(1–5초, 최대 15초로 엄격 제한)로 응답합니다.
* 신규: tarpit 기간을 조정하기 위한 `cap_rate_limit_tarpit_min` / `cap_rate_limit_tarpit_max` 설정.
* 신규: 신뢰할 수 있는 IP 범위를 제외하기 위한 `wu_cap_rate_limit_whitelist_ip` 필터.
* 신규: 하드 스톱 응답이 전송되기 직전에 실행되는 `wu_cap_rate_limit_will_block` 액션.
* 신규: 스푸핑 방지 client-IP 감지. `Captcha_Core::get_client_ip()`(속도 제한 버킷 키, captcha siteverify `remoteip`, 통계 IP 해시의 단일 기준)가 이제 엄격한 신뢰 모델을 적용합니다. REMOTE_ADDR이 기준이며, `CF-Connecting-IP`는 즉시 연결된 피어가 현재 Cloudflare IP 범위 안에 있을 때만 인정되고, `X-Forwarded-For`는 즉시 연결된 피어가 관리자가 구성한 신뢰할 수 있는 프록시 목록에 있을 때만 인정되며, 방문자 IP를 확정하기 전에 신뢰된/CF 홉을 건너뛰는 오른쪽에서 왼쪽으로의 탐색을 수행합니다.
* 신규: `cap_trust_cloudflare_headers` 설정(기본값 OFF) — Cloudflare 뒤에 있을 때 `CF-Connecting-IP` 신뢰를 선택합니다. 이 plugin은 번들된 Cloudflare CIDR 스냅샷을 제공하며, 갱신에 실패하면 번들된 대체 값을 사용하면서 wp-cron을 통해 매주 새로 고칩니다.
* 신규: `cap_trusted_proxies` 설정 — 자체 최전방 프록시 / 로드 밸런서를 나열하는 CIDR 또는 순수 IP의 텍스트 영역(한 줄에 하나, `#` 주석 허용). 이것이 없으면 속도 제한기가 활성화되어 있어도 `X-Forwarded-For`는 무시됩니다.
* 신규: 가능성이 높은 Cloudflare / 프록시 상태를 처음 활성화할 때 자동 감지하고, 한 번의 클릭으로 "감지된 설정 적용"을 할 수 있는 관리자 알림. 이 plugin은 저장된 값을 절대 덮어쓰지 않습니다. 이후 트래픽에서 구성과 실제 상황이 더 이상 일치하지 않는 것으로 보이면(예: Cloudflare가 CIDR 범위를 변경했고 프록시 CIDR이 오래됨), 권장 업데이트를 표시하는 닫을 수 없는 불일치 알림이 나타납니다.
* 수정: 보이지 않는 모드가 더 이상 `cap_security_level`을 FAST로 조용히 낮추지 않음 — 관리자가 구성한 수준이 존중됩니다. 맞춤 로직을 원하는 site를 위해 새로운 `wu_cap_server_security_level` 필터를 사용할 수 있습니다.
* 수정: 통계 `rate_limits_triggered` 카운터가 이제 드문 성공 후 백스톱 경로에서만이 아니라 모든 차단에서 증가합니다.
* 수정: `Captcha_Core::get_client_ip()`가 이제 속도 제한기, captcha 제공자(reCAPTCHA + hCaptcha `siteverify`), 통계 전반에서 방문자 IP 귀속의 단일 기준이 되었습니다 — 위조된 `CF-Connecting-IP` header를 포함한 직접 원본 서버 요청이 실제 피어가 아니라 위조된 IP로 버킷 처리될 수 있었던 스푸핑 벡터를 차단합니다.
* 수정: WooCommerce 클래식 checkout 속도 제한 게이트가 이제 `woocommerce_before_checkout_form` 대신 `template_redirect`(우선순위 1)에서 실행됩니다. 장바구니가 비어 있으면 양식 수준 hook이 실행되지 않기 때문에, product를 전혀 추가하지 않는 플러드 트래픽이 제한기를 완전히 우회하고 있었습니다.
* 수정: WooCommerce pay-for-order 속도 제한 게이트가 이제 `woocommerce_before_pay_action` 대신 `template_redirect`에서 실행됩니다. 후자는 `wp_verify_nonce('woocommerce-pay')`가 성공한 후에만 실행되므로, 인증되지 않은 공격자(실제 위협 모델)는 제한기를 전혀 트리거하지 않았습니다.
* 수정: WooCommerce Store API(블록) checkout 속도 제한 게이트가 이제 `woocommerce_store_api_checkout_update_order_from_request` 대신 `rest_pre_dispatch`에서 실행됩니다. 후자는 Store API가 장바구니와 청구 field를 검증한 후에만 실행되므로, 인증되지 않은 봇은 검증기에서 400을 받고 제한기를 전혀 작동시키지 않았습니다.
* 수정: Ultimate Multisite inline-login 속도 제한 게이트가 이제 `wu_before_inline_login` 대신 `wu_ajax_nopriv_wu_inline_login` 우선순위 1(및 로그인된 mirror)에서 실행됩니다. 후자는 `check_ajax_referer('wu_checkout')`가 성공한 후에만 실행되므로, 유효한 wu_checkout nonce가 없는 인증되지 않은 봇은 403을 받고 제한기를 전혀 작동시키지 않았습니다.
* 수정: `Rate_Limiter::enforce()`가 이제 `surface|ip`를 키로 하는 요청당 1회 가드를 적용하므로, 렌더링당 두 번 실행되는 상위 hook(특히 Ultimate Multisite의 `wu_setup_checkout`)이 더 이상 유효 속도 제한 임계값을 절반으로 줄이지 않습니다.
* 수정: 속도 제한 표면 게이트가 더 이상 `Captcha_Core::is_whitelisted()`(`wu_captcha_whitelisted` 필터)를 참조하지 않습니다. 이 필터는 "captcha가 이미 다른 표면에서 처리됨"을 나타내며 플러드 보호와는 별개입니다 — WooCommerce 통합은 Woo nonce가 있을 때 WordPress login captcha를 건너뛰기 위해 이 필터에 hook하고 있었고, 이것이 속도 계산에 스며들어 Woo POST가 제한기를 피할 수 있게 했습니다. 이제 적용되는 유일한 우회는 속도 제한 전용 `wu_cap_rate_limit_whitelist_ip` 필터입니다.

Version: 1.3.2 - 2026-01-27에 릴리스됨
* 수정: Elementor 또는 다른 페이지 빌더를 사용하는 checkout 양식에서 Cap 위젯이 렌더링되지 않음
* 수정: cap-widget 사용자 지정 요소가 wp_kses() 정리에 의해 제거됨
* 개선: HTML 필터링을 우회하기 위해 checkout captcha field에 호출 가능한 콘텐츠 사용
* 개선: 예외 상황을 위한 대체 동작이 있는 JavaScript 단순화

Version: 1.3.1 - 2026-01-26에 릴리스됨
* 수정: Cap Captcha 보이지 않는 모드가 동적 Ultimate Multisite checkout 양식에서 자동으로 해결되지 않음
* 개선: Cap checkout 스크립트가 이제 MutationObserver를 사용하여 동적으로 로드된 위젯을 감지함
* 개선: 제출 전에 token을 기다리도록 checkout 버튼 가로채기 추가

Version: 1.3.0 - 2026-01-27에 릴리스됨
* 신규: Store API 가져오기 가로채기를 통한 WooCommerce Blocks 결제 통합
* 신규: WooCommerce 결제를 위한 보이지 않는 captcha 지원(hCaptcha invisible, reCAPTCHA v2 invisible, v3)
* 신규: Ultimate Multisite 없이 사용하기 위한 독립 설정 페이지
* 신규: 의존성 충돌 방지를 위한 Jetpack Autoloader
* 수정됨: 동적 Ultimate Multisite 결제에서 hCaptcha가 렌더링되지 않음(AJAX로 로드된 콘텐츠)
* 수정됨: 폼 유효성 검사 오류가 발생할 때 Captcha가 새로고침/재설정되지 않음
* 수정됨: WooCommerce 결제 페이지에 hCaptcha가 표시되지 않음
* 수정됨: reCAPTCHA 클래스를 찾을 수 없음 오류(google/recaptcha PHP 라이브러리 추가됨)
* 개선됨: WordPress hooks, MutationObserver, AJAX 가로채기를 통한 오류 감지
* 개선됨: 이제 설정 설명에 API 키용 Dashboard URL 포함

Version: 1.2.2 - 2026-01-24에 릴리스됨
* 수정됨: Ultimate Multisite Login Form Element에 Captcha가 표시되지 않음(폼 필터 이름 불일치)
* 수정됨: wp_kses() 정리 처리로 인해 Cap widget HTML이 제거됨
* 수정됨: JavaScript selector가 요소 ID에 슬래시가 있는 폼을 찾지 못함
* 추가됨: classaddon이 허용된 HTML tag를 확장할 수 있는 필터 hook `wu_kses_allowed_html`
* 제거됨: 공급자별 script로 대체된 사용되지 않는 JavaScript 파일

Version: 1.2.1 - 2026-01-23에 릴리스됨

* 수정됨: 멀티사이트 환경에서 Cap Captcha token 유효성 검사가 실패함(이제 네트워크 전체 transient 사용)
* 수정됨: 이제 Captcha가 로그인 상태와 관계없이 모든 사용자에게 일관되게 렌더링됨
* 수정됨: 결제 실패를 유발하던 captcha 렌더링과 유효성 검사 간의 불일치

Version: 1.2.0 - 2026-01-21에 릴리스됨

* 신규: Cap Captcha - 자체 호스팅 proof-of-work captcha, 활성화 시 기본적으로 활성화됨
* 신규: 무설정 보호 - addon을 활성화하면 즉시 보호됨
* 신규: 쉬운 확장성을 위한 다형성 captcha provider 아키텍처
* 신규: 카드 테스트 공격에 대한 WooCommerce Store API 결제 보호
* 신규: challenge, verification, 차단된 공격을 보여주는 통계 추적 Dashboard
* 신규: Cap Captcha 난이도를 위한 보안 수준 preset(Fast, Medium, Max)
* 신규: reCAPTCHA 및 hCaptcha provider를 위한 추상 base class
* 개선됨: 코드베이스를 모듈식 provider class로 리팩터링
* 개선됨: 전용 manager class를 통한 더 나은 관심사 분리
* Fixed: Security improvements for $_SERVER variable sanitization
* 수정됨: WordPress 명명 규칙을 위한 PHPUnit 테스트 설정

Version: 1.0.1 - 2025-09-28에 릴리스됨

* 접두사를 ultimate-multisite로 이름 변경; text domain 업데이트; 버전 상향.
