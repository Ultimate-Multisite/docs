---
id: wu_domain_has_correct_dns
title: Filtro - wu_domain_has_correct_dns
sidebar_label: wu_domain_has_correct_dns
_i18n_hash: dd6037bea5bd9b5b613888113a04536d
---
# Filter: wu_domain_has_correct_dns

Permite a los desarrolladores de plugins añadir nuevas comprobaciones para definir los resultados.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $result | `bool` | el resultado actual. |
| $domain | `self` | La instancia de dominio actual. |
| $domains_and_ips | `array` | La lista de dominios e IPs encontrados en la búsqueda DNS. |

### Since

- 2.0.4

### Source

Defined in [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L455) at line 455

## Returns
Si el DNS está configurado correctamente o no.
