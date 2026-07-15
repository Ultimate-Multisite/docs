---
id: wu_use_domain_mapping
title: Filtru - wu_use_domain_mapping
sidebar_label: wu_use_domain_mapping
_i18n_hash: 34f9d3e6a6d1b98dd72cf5c21250b6e7
---
# Filter: wu_use_domain_mapping

Determinați dacă o mapare ar trebui utilizată

De obicei, veți dori să permiteți utilizarea doar a mapărilor active. Totuși, dacă doriți să folosiți o logică mai avansată, sau să permiteți maparea și domeniilor care nu sunt active, pur și simplu filtrați aici.

## Parametri {#parameters}

| Nume | Tip | Descriere |
|------|------|-------------|
| $is_active | `bool` | Maparea ar trebui tratată ca fiind activă? |
| $mapping | `\Domain` | Maparea pe care o inspectăm |
| $domain | `string` | |

### Sursă {#source}

Definit în [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L391) la linia 391
