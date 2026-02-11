---
id: wu_domain_mapping_register_filters
title: アクション - wu_domain_mapping_register_filters
sidebar_label: wu_domain_mapping_register_filters
_i18n_hash: 835b5df60eb33048fe4159fb4243176c
---
# Action: wu_domain_mapping_register_filters

一部のプラグインは、マッピングが有効になる前にURLを保存したり、上記のフィルタに含まれていない別の方法でURLを構築したりします。

そのような場合には、追加のフィルタを追加したいと考えています。渡される2番目のパラメータは mangle_url コールバックです。このフィルタを直接使用することは推奨しません。代わりに Domain_Mapping::apply_mapping_to_url メソッドを使用してください。

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $mangle_url | `callable` | マングルコールバック。 |
| $domain_mapper | `self` | このオブジェクト。 |

### Since

- 2.0.0
### Source

定義は [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L530) の530行目にあります。
