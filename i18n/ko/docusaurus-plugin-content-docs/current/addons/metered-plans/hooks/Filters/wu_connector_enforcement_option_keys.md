---
id: wu_connector_enforcement_option_keys
title: 필터 - wu_connector_enforcement_option_keys
sidebar_label: wu_connector_enforcement_option_keys
_i18n_hash: d6beae90e3f1bf32a08ce35257fb0dfc
---
# 필터: wu_connector_enforcement_option_keys

메인 사이트에서 강제 적용되는 AI 제공업체 옵션 키 목록을 필터링합니다.

사용자 정의 또는 타사 AI 제공업체 플러그인의 옵션 키를 추가하여, 해당 설정들이 서브사이트에서도 메인 사이트로부터 상속되도록 합니다.

## 파라미터

| Name | Type | Description |
|------|------|-------------|
| $keys | `string[]` | 강제 적용할 옵션 키 이름 (이미 동적으로 발견된 커넥터 키와 EXTRA_PROVIDER_OPTIONS가 포함되어 있습니다). |

### Since

- 1.2.0
### Source

[`inc/managers/class-connector-enforcement.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-metered-plans/blob/main/inc/managers/class-connector-enforcement.php#L206)의 206번째 줄에 정의되어 있습니다.
