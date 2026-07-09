---
id: wu_make_primary_domain_redirect_url
title: Süzgüç - wu_make_primary_domain_redirect_url
sidebar_label: wu_make_primary_domain_redirect_url
_i18n_hash: bda96824db400b25e97802e5567df22d
---
# Filter: wu_make_primary_domain_redirect_url {#filter-wumakeprimarydomainredirecturl}

Domeni esasy edenden soň ugrukdyryş URL-ni filterleýär.

Işläp düzüjilere domen üstünlikli esasy hökmünde bellenenden soň ulanyjylaryň nirä ugrukdyryljakdygyny sazlamaga mümkinçilik berýär. Deslapky ýagdaýda esasy saýtdaky häzirki URL-e ýa-da üýtgedilýän saýtyň admin URL-ine ugrukdyrýar.

## Parametrler {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $redirect_url | `string` | Deslapky ugrukdyryş URL-i. Ýa häzirki URL (eger esasy saýt bolsa) ýa-da häzirki saýtyň admin URL-i. |
| $current_site | `int` | Domeni esasy edilýän saýtyň ID-si. |
| $domain | `\Domain` | Esasy edilen domen obýekti. |
| $old_primary_domains | `array` | Öň esasy bolan domenleriň ID-leriniň massiwi. |

### Şondan bäri {#since}

- 2.0.0
### Çeşme {#source}

[`inc/ui/class-domain-mapping-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-domain-mapping-element.php#L639) içinde 639-njy setirde kesgitlenildi


## Gaýtarýar {#returns}
Filterlenen ugrukdyryş URL-i.
