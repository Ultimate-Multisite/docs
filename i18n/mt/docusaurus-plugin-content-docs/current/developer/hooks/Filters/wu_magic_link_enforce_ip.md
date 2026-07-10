---
id: wu_magic_link_enforce_ip
title: Filtru - wu_magic_link_enforce_ip
sidebar_label: wu_magic_link_enforce_ip
_i18n_hash: b785314a6a2d9ea45d3beab38baa58fe
---
# Filtru: wu_magic_link_enforce_ip {#filter-wumagiclinkenforceip}

Iffiltra jekk għandhiex tiġi infurzata l-verifika tal-indirizz IP.

Issettja għal false biex tħalli t-tokens jaħdmu minn networks differenti. Dan inaqqas is-sigurtà iżda jżid l-użabilità (eż., għal utenti mobbli li jibdlu networks).

## Parametri {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $enforce | `bool` | Jekk għandhiex tiġi infurzata t-tqabbila tal-indirizz IP. |

### Minn {#since}

- 2.0.0
### Sors {#source}

Iddefinit f'[`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L422) fil-linja 422
