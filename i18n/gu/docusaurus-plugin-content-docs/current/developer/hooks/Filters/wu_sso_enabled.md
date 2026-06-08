---
id: wu_sso_enabled
title: ફિલ્ટર - wu_sso_enabled
sidebar_label: wu_sso_enabled
_i18n_hash: 67263dea6df806158e5d4c9bdb984acf
---
# Filter: wu_sso_enabled

વિવિધ ડોમેન (cross-domain) પર single-sign-on (SSO) ક્ષમતાને સક્ષમ કે અસક્ષમ કરવી.

single-sign-on ને સંપૂર્ણપણે બંધ કરવા માટે અથવા તેના બદલે તેને શરતી રીતે સક્ષમ કરવા માટે આ મૂલ્ય ફિલ્ટર કરો.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $enabled | `bool` | શું SSO સક્ષમ કરવું જોઈએ? ચાલુ કરવા માટે `True` અને બંધ કરવા માટે `false`-જેવું. |

### Since

- 2.0.11
### Source

Defined in [`inc/sso/class-sso.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-sso.php#L110) at line 110


## Returns
જો SSO સક્ષમ છે કે નહીં.
