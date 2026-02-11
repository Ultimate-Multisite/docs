---
id: wu_domain_became_primary
title: Actie - wu_domain_became_primary
sidebar_label: wu_domain_became_primary
_i18n_hash: c7757c05c88e7b75f88777504426a970
---
# Actie: wu_domain_became_primary

Wordt geactiveerd wanneer een domein het primaire domein voor een site wordt.

Deze actie wordt geactiveerd wanneer de primary_domain-flag van een domein op true wordt gezet, hetzij bij het aanmaken van een nieuw primaire domein, hetzij bij het bijwerken van een bestaand domein om primaire te worden.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | Het domein dat primaire werd. |
| $blog_id | `int` | Het blog-ID van de getroffen site. |
| $was_new | `bool` | Of dit een nieuw aangemaakt domein is. |

### Since

- 2.0.0

### Source

Defined in [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L560) at line 560
