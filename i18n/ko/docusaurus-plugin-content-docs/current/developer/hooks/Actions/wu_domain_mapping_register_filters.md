---
id: wu_domain_mapping_register_filters
title: 액션 - wu_domain_mapping_register_filters
sidebar_label: wu_domain_mapping_register_filters
_i18n_hash: 835b5df60eb33048fe4159fb4243176c
---
# Action: wu_domain_mapping_register_filters

일부 플러그인은 매핑이 활성화되기 전에 URL을 저장하거나 위에 언급된 필터에 포함되지 않은 다른 방식으로 URL을 생성할 수 있습니다.

이러한 경우에는 추가 필터를 추가하고자 합니다. 두 번째 매개변수로 전달되는 것은 `mangle_url` 콜백입니다. 이 필터를 직접 사용하는 것은 권장하지 않으며, 대신 `Domain_Mapping::apply_mapping_to_url` 메서드를 사용하시기 바랍니다.

## Parameters

| 이름 | 타입 | 설명 |
|------|------|------|
| $mangle_url | `callable` | mangle `callable` |
| $domain_mapper | `self` | 이 객체 |

### Since

- 2.0.0

### Source

Defined in [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L530) at line 530
