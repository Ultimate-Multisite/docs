---
id: wu_domain_became_primary
title: Action - wu_domain_became_primary
sidebar_label: wu_domain_became_primary
_i18n_hash: c7757c05c88e7b75f88777504426a970
---
# Action: wu_domain_became_primary {#action-wudomainbecameprimary}

Utløses når et domene blir hoveddomene for et nettsted.

Denne handlingen utløses når `primary_domain`-flagget for et domene blir satt til sant, enten ved opprettelse av et nytt hoveddomene eller ved oppdatering av et eksisterende domene til å bli hoveddomene.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | Domeneet som ble hoveddomene. |
| $blog_id | `int` | Blogg-ID-en til det berørte nettstedet. |
| $was_new | `bool` | Om dette er et nylig opprettet domene. |

### Since {#since}

- 2.0.0
### Source {#source}

Definert i [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L560) på linje 560
