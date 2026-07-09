---
id: wu_domain_became_primary
title: Aksyon - wu_domain_became_primary
sidebar_label: wu_domain_became_primary
_i18n_hash: c7757c05c88e7b75f88777504426a970
---
# Action: wu_domain_became_primary {#action-wudomainbecameprimary}

Deklanche lè yon domain vin domain prensipal pou yon sit.

Action sa a deklanche lè flag primary_domain yon domain mete sou true, swa lè w ap kreye yon nouvo domain prensipal oswa lè w ap mete yon domain ki egziste deja ajou pou li vin prensipal.

## Paramèt {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | Domain ki vin prensipal la. |
| $blog_id | `int` | ID blog sit ki afekte a. |
| $was_new | `bool` | Si sa a se yon domain ki fèk kreye. |

### Depi {#since}

- 2.0.0
### Sous {#source}

Defini nan [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L560) nan liy 560
