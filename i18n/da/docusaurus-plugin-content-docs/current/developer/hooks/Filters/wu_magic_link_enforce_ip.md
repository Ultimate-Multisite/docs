---
id: wu_magic_link_enforce_ip
title: Filter - wu_magic_link_enforce_ip
sidebar_label: wu_magic_link_enforce_ip
_i18n_hash: b785314a6a2d9ea45d3beab38baa58fe
---
# Filter: wu_magic_link_enforce_ip {#filter-wumagiclinkenforceip}

Filtrer, om IP-adresseverifikation skal håndhæves.

Sæt til false for at tillade, at tokens fungerer fra forskellige netværk. Dette reducerer sikkerheden, men øger brugervenligheden (f.eks. for mobilbrugere, der skifter netværk).

## Parametre {#parameters}

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $enforce | `bool` | Om match af IP-adresse skal håndhæves. |

### Siden {#since}

- 2.0.0
### Kilde {#source}

Defineret i [`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L422) på linje 422
