---
id: wu_should_create_domain_record_for_site
title: Filtri - wu_should_create_domain_record_for_site
sidebar_label: wu_should_create_domain_record_for_site
_i18n_hash: d97b52f157228e570818c153e96a609c
---
# Filtër: wu_should_create_domain_record_for_site

Filtron nëse Ultimate Multisite duhet të krijojë një rekord domeni për një site të sapokrijuar.

Përdoreni këtë filtër për të shtypur ose shtyrë krijimin automatik të rekordit të domenit për site që përdorin një domen bazë të përbashkët të formularit të checkout, një host të brendshëm, ose një domen që një integrim tjetër do ta menaxhojë veçmas.

## Parametrat

| Emri | Lloji | Përshkrimi |
|------|------|-------------|
| $create | `bool` | Nëse rekordi i domenit duhet të krijohet. |
| $site | `WP_Site` | Objekti i site-it të sapokrijuar. |

### Që nga

- 2.13.0

### Burimi

Përcaktuar në `inc/functions/domain.php`.


## Kthen

Vlerë boolean që tregon nëse duhet të krijohet rekordi i domenit.
