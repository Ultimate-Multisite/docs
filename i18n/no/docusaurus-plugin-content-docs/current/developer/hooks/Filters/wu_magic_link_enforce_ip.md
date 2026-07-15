---
id: wu_magic_link_enforce_ip
title: Filter - wu_magic_link_enforce_ip
sidebar_label: wu_magic_link_enforce_ip
_i18n_hash: b785314a6a2d9ea45d3beab38baa58fe
---
# Filter: wu_magic_link_enforce_ip

Bestem om IP-adresseverifisering skal håndheves.

Sett til `false` for å tillate at tokens fungerer fra forskjellige nettverk. Dette reduserer sikkerheten, men øker brukervennligheten (for eksempel for mobilbrukere som bytter nettverk).

## Parametere {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $enforce | `bool` | Om IP-adresseoppføring skal håndheves. |

### Since {#since}

- 2.0.0
### Source {#source}

Definert i [`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L422) på linje 422
