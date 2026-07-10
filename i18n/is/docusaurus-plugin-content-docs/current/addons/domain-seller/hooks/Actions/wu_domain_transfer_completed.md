---
id: wu_domain_transfer_completed
title: Aðgerð - wu_domain_transfer_completed
sidebar_label: wu_domain_transfer_completed
_i18n_hash: e50e8bb82f31cdf65af114919b65343a
---
# Aðgerð: wu_domain_transfer_completed {#action-wudomaintransfercompleted}

Keyrir eftir að flutningi léns er lokið.

## Færibreytur {#parameters}

| Heiti | Tegund | Lýsing |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | Lénshluturinn. |
| $transfer_data | `array` | Gögn um lok flutnings. |

### Síðan {#since}

- 2.1.0
### Uppruni {#source}

Skilgreint í [`inc/class-domain-transfer-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-transfer-manager.php#L690) í línu 690
