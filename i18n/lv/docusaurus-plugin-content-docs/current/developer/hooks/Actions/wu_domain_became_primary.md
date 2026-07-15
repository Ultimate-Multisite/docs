---
id: wu_domain_became_primary
title: Darbība - wu_domain_became_primary
sidebar_label: wu_domain_became_primary
_i18n_hash: c7757c05c88e7b75f88777504426a970
---
# Darbība: wu_domain_became_primary

Tiek izpildīta, kad domēns kļūst par vietnes primāro domēnu.

Šī darbība tiek aktivizēta, kad domēna primary_domain karogs tiek iestatīts uz true — vai nu izveidojot jaunu primāro domēnu, vai atjauninot esošu domēnu, lai tas kļūtu primārs.

## Parametri {#parameters}

| Nosaukums | Tips | Apraksts |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | Domēns, kas kļuva primārs. |
| $blog_id | `int` | Ietekmētās vietnes blog ID. |
| $was_new | `bool` | Vai šis ir jaunizveidots domēns. |

### Kopš {#since}

- 2.0.0
### Avots {#source}

Definēts [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L560) 560. rindā
