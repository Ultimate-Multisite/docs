---
title: WooCommerce 통합 변경 로그
sidebar_position: 99
_i18n_hash: b34d062c52ab13dbab02f7162f01e641
---
# WooCommerce Integration Changelog

Version 2.0.6 - Released on 2026-01-16
* 개선: 애드온에 핵심 구독을 포함합니다. 더 이상 Woocommerce Subscriptinos extension이 필요하지 않습니다.

Version 2.0.5 - Released on 2026-01-09
* 개선: glotpress API에서 번역을 로드합니다.
* 수정: 일부 페이지 빌더에서 치명적인 오류가 발생합니다.
* 수정: 고객이 메인 사이트의 멤버일 때 무한 리디렉션이 발생합니다.

Version 2.0.4 - Released on 2025-11-14
* 추가: 더 많은 언어에 대한 번역을 추가했습니다.
* 변경: Ultimate Multisite: Woocommerce Integration으로 이름이 바뀌었습니다.
* 추가: Woocommerce 10.2.1과 호환됩니다.
* 추가: Woocommerce Subscriptions 7.7.0과 호환됩니다.
* 수정: PHP 8.4와 호환됩니다.
* 수정: WC 계정 페이지가 없을 때 리디렉션이 발생합니다.

Version 2.0.3 - Released on 2025-08-13
* 변경: 새로운 마켓플레이스에서 자동 업데이트를 활성화했습니다.

Version 2.0.2 - Released on 2025-07-05
* 변경: Multisite Ultimate: Woocommerce Integration으로 이름이 바뀌었습니다.
* 추가: Woocommerce 9.8.1과 호환됩니다.
* 추가: Woocommerce Subscriptions 7.3.0과 호환됩니다.
* 수정: 고객이 구독을 취소할 때 발생하는 문제를 수정했습니다.
* 수정: 체크아웃 블록을 사용할 때 치명적인 오류가 발생합니다.
* 개선: Woocommerce 고성능 커스텀 주문 테이블과 호환됩니다.
* 수정: WooCommerce 체크아웃에서 취소하면 멤버십이 여전히 업그레이드될 수 있습니다.

Version 2.0.1 - Released on 2023-08-09
* 추가: Woocommerce 7.9.0과 호환됩니다.
* 추가: Woocommerce Subscriptions 5.3.0과 호환됩니다.
* 추가: 멤버십 업데이트를 지원합니다.
* 추가: Woocommerce에서 체험판 및 설정 수수료에 대한 공지를 추가했습니다.
* 추가: 메타 값을 사용하여 Ultimate Multisite Woocommerce 제품을 식별합니다.
* 추가: Ultimate Multisite 관련 Woocommerce 제품을 모두 표시하기 위해 일회성 수정을 삽입했습니다.
* 추가: Woocommerce 목록에서 Ultimate Multisite가 생성한 제품을 제거했습니다.
* 개선: 카트에 적용할 비반복 Woocommerce 할인 쿠폰을 생성했습니다.
* 개선: Woocommerce 제품에 반복 할인 쿠폰을 복원했습니다.
* 개선: Woocommerce 제품에 반복 할인 라벨을 추가했습니다.
* 개선: 체크아웃 시 제품 유형을 보장했습니다.
* 수정: 다운그레이드 과정에서 멤버십 상태를 유지했습니다.
* 수정: 취소 과정에서 오류를 방지하기 위해 구독이 존재하는지 확인했습니다.
* 수정: Woocommerce 구독에서 사용하기 위해 시작 구독 날짜를 추가했습니다.
* 내부: 새로운 PHP 8.1 빌드 프로세스를 구현했습니다.

Version 2.0.0 - Complete rewrite.
* 추가: 게이트웨이를 변경하거나 멤버십을 취소할 때 Woo 구독을 제거하는 취소 프로세스 메서드를 추가했습니다.
* 추가: 멤버십 다운그레이드 및 업그레이드를 처리하는 핸들러를 추가했습니다.
* 개선: 서브사이트의 고객 업데이트 폼에서 WooCommerce 종속성을 로드하여 계정 업데이트를 허용합니다.
* 개선: WooCommerce 장바구니가 없을 경우 올바르게 로드합니다.
* 개선: 체크아웃을 처리할 때 메인 사이트 테이블에 있는지 확인합니다.
* 개선: Ultimo 갱신 주문을 마지막 결제 대신 WooCommerce 구독 주문 금액을 기준으로 만듭니다.
* 수정: WU 멤버십 버튼 링크로 이동합니다.
* 수정: WooCommerce 구독 갱신이 결제되면 Ultimo 주문을 결제 완료로 설정합니다.
* 빌드: MPB를 빌더로 추가합니다.

Version 2.0.0-beta-5 - Released on 2022-01-21
* 내부: 훅 및 필터 생성기를 추가했습니다.
* 내부: 개발자 편의를 위해 Ultimate Multisite 스텁을 추가했습니다.
* 수정: 불필요한 경우 다중 제품 생성을 방지합니다.

Version 2.0.0-beta.4 - 2021-09-23
* 수정: WooCommerce를 메인 사이트가 아닌 네트워크에서 활성화하도록 요구합니다.
* 개선: 애드온을 mu-plugin으로 사용하도록 허용하는 필터를 추가했습니다.

Version 2.0.0-beta.3 - 2021-05-28
* 수정: 대시보드 접근 제어가 과도했습니다.
* 개선: Ultimate Multisite 상단 메뉴에 WooCommerce 도움말 링크를 추가했습니다.

Version 2.0.0-beta.2 - 2021-05-04
* 개선: WCS 갱신 주문 생성 시 Ultimo에서 보류 중인 결제를 생성합니다.
* 개선: Ultimate Multisite 고객 데이터를 사용해 청구 필드를 미리 채웁니다.
* 개선: 게이트웨이용 청구 필드를 다시 추가합니다.

Version 2.0.0-beta.1 - 2021-05-04
* 초기 베타 릴리스

-- Legacy Versions --

Version 1.2.6 - 26/03/2020
* 수정: 새로운 버전의 WooCommerce Subscriptions와의 작은 호환성 문제를 수정했습니다.

Version 1.2.5 - 26/08/2019
* 수정: 이전 릴리스에서 발생한 오류를 수정했습니다.

Version 1.2.4 - 22/08/2019
* 개선: 통합 후 즉시 WooCommerce 체크아웃 화면으로 리디렉션하는 옵션을 추가했습니다.

Version 1.2.3 - 26/05/2019
* 수정: 일부 예외 상황에서 WooCommerce 결제 이메일이 사라지는 문제를 수정했습니다.

Version 1.2.2 - 27/02/2019
* 추가: WooCommerce Subscription 통합에서 설정 수수료를 지원하도록 추가했습니다.

Version 1.2.1 - 17/11/2018
* 수정: Ultimate Multisite 버전 1.9.0과의 호환성 문제를 수정했습니다.

Version 1.2.0 - 10/09/2018
* 개선: 애드온용 새로운 업데이트 URL을 추가했습니다.
* 추가: WooCommerce Subscription에 베타 지원을 추가했습니다.

Version 1.1.2 - 11/02/2018
* 수정: WooCommerce 엔드포인트 변경에 대응하기 위해 Pay 링크가 동적으로 생성되는 문제를 수정했습니다.
* 개선: payment_completed가 호출될 때 주문을 완료 상태로 강제 설정하여 갱신 훅이 적절히 실행되도록 했습니다.

Version 1.1.1 - 24/01/2018
* 수정: 이제 WooCommerce가 메인 사이트에서만 활성화되었는지 확인합니다.
* 수정: 주문 생성 시 세금을 포함하도록 오버로딩을 추가했습니다.

Version 1.1.0 - 04/11/2017
* 수정: 통합 버튼의 라벨이 실제로 설정을 반영하도록 변경되었습니다. Ultimate Multisite 1.5.0이 필요합니다.
* 수정: WooCommerce Integration이 WooCommerce가 네트워크에서 활성화되지 않고 메인 사이트에서만 활성화된 경우에도 작동합니다.

1.0.0 - 초기 릴리스
