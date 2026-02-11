---
id: wu_domain_has_correct_dns
title: Filter - wu_domain_has_correct_dns
sidebar_label: wu_domain_has_correct_dns
_i18n_hash: dd6037bea5bd9b5b613888113a04536d
---
# Filter: wu_domain_has_correct_dns

Erlaubt Plugin-Entwicklern, neue Prüfungen hinzuzufügen, um die Ergebnisse zu definieren.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $result | `bool` | das aktuelle Ergebnis. |
| $domain | `self` | Die aktuelle Domain-Instanz. |
| $domains_and_ips | `array` | Die Liste der Domains und IPs, die bei der DNS-Abfrage gefunden wurden. |

### Since

- 2.0.4

### Source

Definiert in [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L455) in Zeile 455

## Returns

Wenn der DNS korrekt eingerichtet ist oder nicht.
