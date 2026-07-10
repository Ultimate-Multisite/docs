---
title: VAT 변경 로그
sidebar_position: 99
_i18n_hash: 6a39ef4779b6ed52a08804c75ca25fc9
---
# VAT 변경 로그 {#vat-changelog}

버전 1.0.7 - 2026-02-03에 릴리스됨

* 수정: 독일(DE) VAT 번호가 VIES SOAP 서비스 MS_MAX_CONCURRENT_REQ 오류로 인해 검증에 실패하던 문제. 더 안정적인 검증을 위해 기존 SOAP API에서 공식 EU VIES REST API로 전환했습니다.
* 수정: VIES 서비스가 일시적으로 사용할 수 없을 때 VAT 번호가 잘못 거부되는 대신 이제 허용됩니다. 나중에 검토할 수 있도록 로그 항목이 생성됩니다.
* 수정: VAT/Tax ID 필드가 이제 EU 회원국뿐만 아니라 모든 국가에 표시됩니다. EU 외 세금 ID(예: 스위스 CHE 번호)는 VIES 검증 없이 송장 표시에 사용되도록 저장됩니다.
* 수정: 그리스(GR), 모나코(MC), 맨섬(IM)의 VAT 접두사 조회가 잘못된 배열 조회 로직으로 인해 작동하지 않던 문제.
* 개선: Site Exporter addon과 함께 사용할 때 치명적인 오류를 일으킬 수 있는 불필요한 wp-cli-bundle 개발 의존성을 제거했습니다.
* 개선: 포괄적인 단위 테스트 모음(테스트 53개)을 추가했습니다.

버전 1.0.6 - 2026-01-25에 릴리스됨

* 수정: 국내 B2B 거래에 이제 VAT가 올바르게 부과됩니다. EU VAT 규칙에 따라 reverse charge는 국경 간 B2B 거래에만 적용되며, 고객의 국가가 회사의 국가와 일치하는 경우에는 적용되지 않습니다.

버전 1.0.5 - 2026-01-22에 릴리스됨

* 수정: addon이 로드되지 않거나 제대로 작동하지 않던 문제.
* 변경: 더 안정적이고 활발하게 유지 관리되는 데이터를 위해 VAT 세율 데이터 소스를 euvatrates.com에서 ibericode/vat-rates 저장소로 전환했습니다.
* 수정: super_reduced_rates 옵션 값 오타를 수정했습니다.
* 개선: 오류를 방지하기 위해 국가 코드 처리에 null 검사를 추가했습니다.
* 변경: Traduttore를 통한 자동 업데이트를 위해 번들 번역 파일을 제거했습니다.

버전: 1.0.3 - 2025-09-28에 릴리스됨

* 접두사를 ultimate-multisite로 변경했습니다. text domain을 업데이트했습니다. 버전을 올렸습니다.

버전 1.0.0-beta.4 - 2021-09-24

* 추가됨: mu-plugins 기반 설정을 위한 필터 wp_ultimo_skip_network_active_check;

버전 1.0.0 - 2021-05-08 - 최초 릴리스
