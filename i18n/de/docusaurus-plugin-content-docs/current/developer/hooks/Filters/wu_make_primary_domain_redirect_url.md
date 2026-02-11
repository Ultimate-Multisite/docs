---
id: wu_make_primary_domain_redirect_url
title: Filter - wu_make_primary_domain_redirect_url
sidebar_label: wu_make_primary_domain_redirect_url
_i18n_hash: bda96824db400b25e97802e5567df22d
---
# Filter: wu_make_primary_domain_redirect_url

Filtert die Weiterleitungs-URL nach der Festlegung einer Domain als primär.

Ermöglicht Entwicklern, anzupassen, wohin Benutzer nach erfolgreicher Festlegung einer Domain als primär weitergeleitet werden. Standardmäßig wird zur aktuellen URL der Hauptseite oder zur Admin-URL der zu bearbeitenden Seite weitergeleitet.

## Parameters

| Name | Typ | Beschreibung |
|------|------|-------------|
| $redirect_url | `string` | Die Standard-Weiterleitungs-URL. Entweder die aktuelle URL (wenn Hauptseite) oder die Admin-URL der aktuellen Seite. |
| $current_site | `int` | Die ID der Seite, deren Domain als primär festgelegt wird. |
| $domain | `\Domain` | Das Domain-Objekt, das als primär festgelegt wurde. |
| $old_primary_domains | `array` | Array von IDs der Domains, die zuvor primär waren. |

### Since

- 2.0.0

### Source

Definiert in [`inc/ui/class-domain-mapping-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-domain-mapping-element.php#L639) in Zeile 639

## Returns

Die gefilterte Weiterleitungs-URL.
