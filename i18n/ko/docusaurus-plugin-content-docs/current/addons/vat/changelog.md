---
title: VAT 변경 로그
sidebar_position: 99
_i18n_hash: 203587cca82c7a062fdbaf29c1b0024b
---
# VAT Changelog

Version 1.0.6 - Released on 2026-01-25

* Fix: 국내 B2B 거래가 이제 VAT를 올바르게 부과합니다. EU VAT 규칙에 따라 역 부과는 국경 간 B2B 거래에만 적용되며, 고객의 국가가 회사의 국가와 일치할 때는 적용되지 않습니다.

Version 1.0.5 - Released on 2026-01-22

* Fix: Addon이 로드되지 않거나 제대로 작동하지 않습니다.
* Change: VAT 요율 데이터 소스를 euvatrates.com에서 ibericode/vat-rates 저장소로 전환하여 보다 신뢰할 수 있고 적극적으로 유지 관리되는 데이터를 사용합니다.
* Fix: super_reduced_rates 옵션 값 오타를 수정했습니다.
* Improvement: 국가 코드 처리 시 오류를 방지하기 위해 null 체크를 추가했습니다.
* Change: Traduttore를 통한 자동 업데이트를 위해 번역 파일 번들링을 제거했습니다.

Version: 1.0.3 - Released on 2025-09-28

* 프리픽스를 ultimate-multisite로 변경; 텍스트 도메인을 업데이트; 버전 업그레이드.

Version 1.0.0-beta.4 - 2021-09-24

* Added: filter wp_ultimo_skip_network_active_check for mu-plugins 기반 설정;

Version 1.0.0 - 05/08/2021 - 초기 릴리스
