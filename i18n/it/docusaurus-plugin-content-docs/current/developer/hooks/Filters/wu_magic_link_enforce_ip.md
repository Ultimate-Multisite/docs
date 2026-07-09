---
id: wu_magic_link_enforce_ip
title: Filtro - wu_magic_link_enforce_ip
sidebar_label: wu_magic_link_enforce_ip
_i18n_hash: b785314a6a2d9ea45d3beab38baa58fe
---
# Filtro: wu_magic_link_enforce_ip

Filtra se applicare la verifica dell'indirizzo IP.

Imposta su false per consentire ai token di funzionare da reti diverse. Questo riduce la sicurezza ma aumenta l'usabilità (ad es., per utenti mobili che cambiano rete).

## Parametri

| Nome | Tipo | Descrizione |
|------|------|-------------|
| $enforce | `bool` | Whether to enforce IP address matching. |

### Da

- 2.0.0
### Sorgente

Definito in [`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L422) alla riga 422
