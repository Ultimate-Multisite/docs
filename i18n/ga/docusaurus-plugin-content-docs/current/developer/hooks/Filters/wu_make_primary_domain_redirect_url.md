---
id: wu_make_primary_domain_redirect_url
title: Scagaire - wu_make_primary_domain_redirect_url
sidebar_label: wu_make_primary_domain_redirect_url
_i18n_hash: bda96824db400b25e97802e5567df22d
---
# Scagaire: wu_make_primary_domain_redirect_url

Scagann sé an URL atreoraithe tar éis fearann a dhéanamh príomhúil.

Ligeann sé d’fhorbróirí an áit a saincheapadh a atreoraítear úsáideoirí chuici tar éis fearann a shocrú go rathúil mar phríomhúil. De réir réamhshocraithe, atreoraíonn sé chuig an URL reatha ar an bpríomhshuíomh, nó chuig URL admin an tsuímh atá á mhodhnú.

## Paraiméadair

| Name | Type | Description |
|------|------|-------------|
| $redirect_url | `string` | An URL atreoraithe réamhshocraithe. Cibé an URL reatha (más príomhshuíomh é) nó URL admin an tsuímh reatha. |
| $current_site | `int` | ID an tsuímh a bhfuil a fhearann á dhéanamh príomhúil. |
| $domain | `\Domain` | An réad fearainn a rinneadh príomhúil. |
| $old_primary_domains | `array` | Eagar d’IDanna fearann a bhí príomhúil roimhe seo. |

### Ó

- 2.0.0
### Foinse

Sainmhínithe in [`inc/ui/class-domain-mapping-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-domain-mapping-element.php#L639) ag líne 639


## Filleann sé
An URL atreoraithe scagtha.
