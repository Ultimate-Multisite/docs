---
id: wu_domain_mapping_register_filters
title: Azione - wu_domain_mapping_register_filters
sidebar_label: wu_domain_mapping_register_filters
_i18n_hash: 835b5df60eb33048fe4159fb4243176c
---
# Azione: wu_domain_mapping_register_filters

Alcuni plugin salveranno l'URL prima che la mappatura fosse attiva o costruiranno gli URL in un modo diverso che non è incluso nei filtri sopra indicati.

In questi casi, vogliamo aggiungere filtri aggiuntivi. Il secondo parametro passato è la callback mangle_url. Non consigliamo di usare direttamente questo filtro. Invece, utilizza il metodo Domain_Mapping::apply_mapping_to_url.

## Parametri

| Name | Type | Description |
|------|------|-------------|
| $mangle_url | `callable` | La callback di mangle. |
| $domain_mapper | `self` | Questo oggetto. |

### Da

- 2.0.0

### Fonte

Definito in [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L530) alla riga 530
