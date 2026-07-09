---
title: WooCommerce 통합 변경 로그
sidebar_position: 99
_i18n_hash: 54658c4a8d52e85998183f523437d5a3
---
# WooCommerce 통합 변경 로그 {#woocommerce-integration-changelog}

버전 2.2.0 - 2026-07-01에 릴리스됨
* 신규: Ultimate Multisite 세금 금액이 이제 결제 시 별도의 WooCommerce 수수료 항목으로 표시되어, 결제 전에 세금 합계를 더 명확하게 확인할 수 있습니다.
* 신규: WooCommerce Subscriptions 재시도 기간 동안 갱신 실패 시 일시 중단을 원하는 사이트를 위해 선택형 "갱신 실패 시 Memberships 즉시 일시 중단" 설정과 `wu_woo_suspend_on_payment_failure` 필터를 추가했습니다.
* 수정: 갱신 실패 또는 복구 후 Ultimate Multisite membership과 동기화되지 않은 상태로 남을 수 있던 WooCommerce Subscription 상태를 조정했습니다.
* 수정: 누락되어 있던 경우 WooCommerce 스토어 통화를 Ultimate Multisite 통화 목록에 추가했습니다.
* 수정: 구독자를 WooCommerce 결제로 리디렉션할 때 고객 청구 세부 정보를 보존했습니다.
* 개선: Jetpack Autoloader 5와의 호환성을 추가했습니다.
* 개선: GitHub 및 마켓플레이스 zip에 중첩된 스테이징 디렉터리와 개발 파일이 포함되지 않도록 릴리스 패키지 생성을 정리했습니다.

버전 2.0.6 - 2026-01-16에 릴리스됨
* 개선: 애드온에 핵심 구독을 포함합니다. 더 이상 Woocommerce Subscriptinos 확장이 필요하지 않습니다.

버전 2.0.5 - 2026-01-09에 릴리스됨
* 개선: glotpress API에서 번역을 로드합니다.
* 수정: 일부 페이지 빌더에서 발생하는 치명적 오류.
* 수정: 고객이 기본 사이트의 회원일 때 무한 리디렉션.

버전 2.0.4 - 2025-11-14에 릴리스됨
* 추가: 더 많은 언어에 대한 번역.
* 변경: Ultimate Multisite: Woocommerce Integration으로 이름 변경.
* 추가: Woocommerce 10.2.1과의 호환성.
* 추가: Woocommerce Subscriptions 7.7.0과의 호환성.
* 수정: PHP 8.4와의 호환성
* 수정: WC Account 페이지가 없을 때 리디렉션 문제.

버전 2.0.3 - 2025-08-13에 릴리스됨
* 변경: 새 마켓플레이스에서 자동 업데이트를 활성화했습니다.

버전 2.0.2 - 2025-07-05에 릴리스됨
* 변경: Multisite Ultimate: Woocommerce Integration으로 이름 변경.
* 추가: Woocommerce 9.8.1과의 호환성.
* 추가: Woocommerce Subscriptions 7.3.0과의 호환성.
* 수정: 고객이 구독을 취소하는 문제.
* 수정: 결제 블록 사용 시 치명적 오류.
* 개선: 이제 Woocommerce 고성능 사용자 지정 주문 테이블과 호환됩니다.
* 수정: WooCommerce 결제에서 취소해도 여전히 membership을 업그레이드할 수 있던 문제.

버전 2.0.1 - 2023-08-09에 릴리스됨

* 추가: Woocommerce 7.9.0과의 호환성.
* 추가: Woocommerce Subscriptions 5.3.0과의 호환성.
* 추가: membership 업데이트 지원.
* 추가: Woocommerce의 체험판 및 설정 수수료에 대한 알림.
* 추가: 메타 값으로 Ultimate Multisite Woocommerce 제품 식별.
* 추가: 모든 Ultimate Multisite 관련 Woocommerce 제품을 표시하는 일회성 수정 삽입.
* 추가: Woocommerce 목록에서 Ultimate Multisite가 생성한 제품 제거.
* 개선: 장바구니에 적용할 비반복 Woocommerce 할인을 생성했습니다.
* 개선: Woocommerce 제품에 반복 할인을 복원했습니다.
* 개선: Woocommerce 제품에 반복 할인 라벨을 추가했습니다.
* 개선: 결제 시 제품 유형을 보장했습니다.
* 수정: 다운그레이드 과정 중 membership 상태를 유지했습니다.
* 수정: 취소 과정 중 오류를 방지하기 위해 구독이 존재하는지 확인했습니다.
* 수정: Woocommerce subscriptions에서 사용할 구독 시작 날짜를 추가했습니다.
* 내부: 새로운 PHP 8.1 빌드 프로세스를 구현했습니다.

버전 2.0.0 - 전체 재작성.

* 추가: 게이트웨이를 변경하거나 membership을 취소할 때 woo 구독을 제거하는 취소 처리 메서드;
* 추가: membership을 다운그레이드 및 업그레이드하는 핸들러;
* 개선: account 업데이트를 허용하기 위해 하위 사이트의 고객 업데이트 양식에서 woocommerce 종속성을 로드;
* 개선: 존재하지 않는 경우 Woocommerce 장바구니를 올바르게 로드;
* 개선: 결제를 처리할 때 기본 사이트 테이블에 있는지 확인;
* 개선: Ultimo 갱신 주문을 마지막 결제가 아니라 Woocommerce 구독 주문 값에 기반하도록 변경;
* 수정: WU Membership 버튼 링크;
* 수정: Woocommerce subscriptions 갱신이 결제되었을 때 Ultimo 주문을 결제 완료로 설정;
* 빌드: MPB를 빌더로 추가;

버전 2.0.0-beta-5 - 2022-01-21에 릴리스됨

* 내부: 훅 및 필터 생성기를 추가했습니다;
* 내부: 개발자 편의를 위해 Ultimate Multisite 스텁을 추가했습니다;
* 수정: 필요하지 않을 때 여러 제품이 생성되는 것을 방지했습니다;

버전 2.0.0-beta.4 - 2021-09-23

* 수정: WooCommerce가 기본 사이트에서만 활성화되는 대신 네트워크 활성 상태여야 하도록 요구;
* 개선: 애드온을 mu-plugin으로 사용할 수 있도록 필터 추가;

버전 2.0.0-beta.3 - 2021-05-28

* 수정: Dashboard 접근 제어가 너무 공격적이었습니다;
* 개선: Ultimate Multisite 상단 메뉴에 WooCommerce 도움말 링크 추가;

버전 2.0.0-beta.2 - 2021-05-04

* 개선: WCS 갱신 주문 생성 시 Ultimo에 대기 중인 결제를 생성합니다;
* 개선: 청구 필드를 Ultimate Multisite 고객 데이터로 미리 채웁니다;
* 개선: 게이트웨이를 위해 청구 필드를 다시 추가합니다;

버전 2.0.0-beta.1 - 2021-05-04

* 최초 베타 릴리스

-- 레거시 버전 --

버전 1.2.6 - 26/03/2020

* 수정: 최신 버전의 WooCommerce Subscriptions와의 작은 비호환성;

버전 1.2.5 - 26/08/2019

* 수정: 이전 릴리스의 오류;

버전 1.2.4 - 22/08/2019

* 개선: 통합 직후 WooCommerce 결제 화면으로 리디렉션하는 옵션 추가;

버전 1.2.3 - 26/05/2019

* 수정: 일부 예외적인 경우 WooCommerce 결제 이메일이 사라지던 문제;

버전 1.2.2 - 27/02/2019

* 추가: WooCommerce Subscription 통합에서 설정 수수료 지원;

버전 1.2.1 - 17/11/2018

* 수정: Ultimate Multisite 버전 1.9.0과의 호환성 문제;

버전 1.2.0 - 10/09/2018

* 개선: 애드온을 위한 새로운 업데이트 URL;
* 추가: WooCommerce Subscription에 대한 베타 지원;

버전 1.1.2 - 11/02/2018

* 수정: WooCommerce endpoint 변경에 대응하도록 동적으로 생성되는 결제 링크;
* 개선: 갱신 훅이 실행되어야 할 때 실행되도록 `payment_completed`가 호출될 때 이제 주문에 완료 상태를 강제로 적용합니다;

Version 1.1.1 - 24/01/2018

* 수정: 이제 기본 사이트에서 WooCommerce가 방금 활성화되었는지도 확인합니다;
* 수정: 주문 생성 시 세금이 포함될 수 있도록 over-loading을 포함했습니다;

Version 1.1.0 - 04/11/2017

* 수정: 이제 통합 버튼의 레이블이 실제로 설정을 반영하도록 변경됩니다. Ultimate Multisite 1.5.0이 필요합니다;
* 수정: WooCommerce 통합은 이제 WooCommerce가 네트워크 활성 상태가 아니고 기본 사이트에서만 활성화된 경우에도 작동합니다;

1.0.0 - 최초 릴리스
