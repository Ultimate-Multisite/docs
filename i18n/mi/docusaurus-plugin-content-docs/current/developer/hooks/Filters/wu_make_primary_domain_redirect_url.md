---
id: wu_make_primary_domain_redirect_url
title: Tātari - wu_make_primary_domain_redirect_url
sidebar_label: wu_make_primary_domain_redirect_url
_i18n_hash: bda96824db400b25e97802e5567df22d
---
# Tātari: wu_make_primary_domain_redirect_url

Ka tātari i te URL whakahuri i muri i te whakatū i tētahi domain hei primary.

Ka āhei ngā kaiwhakawhanake ki te whakarite i te wāhi ka whakahurihia atu ngā kaiwhakamahi i muri i te tautuhinga angitu o tētahi domain hei primary. Mā te taunoa, ka whakahuri ki te URL o nāianei i runga i te site matua, ki te URL admin rānei o te site e whakarerekētia ana.

## Ngā Tawhā

| Ingoa | Momo | Whakaahuatanga |
|------|------|-------------|
| $redirect_url | `string` | Te URL whakahuri taunoa. Ko te URL o nāianei rānei (mēnā ko te site matua) ko te URL admin rānei o te site o nāianei. |
| $current_site | `int` | Te ID o te site e whakatūria ana tōna domain hei primary. |
| $domain | `\Domain` | Te ahanoa domain i whakatūria hei primary. |
| $old_primary_domains | `array` | He huinga o ngā ID o ngā domain i primary i mua. |

### Mai i

- 2.0.0
### Pūtake

Kua tautuhia i [`inc/ui/class-domain-mapping-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-domain-mapping-element.php#L639) i te rārangi 639


## Ngā Whakahokinga
Te URL whakahuri kua tātaria.
