---
id: wu_pending_network_published
title: Action - wu_pending_network_published
sidebar_label: wu_pending_network_published
_i18n_hash: 2cd5b02aa4fa11d92610bf2952f4b1f6
---
# Action: wu_pending_network_published {#action-wupendingnetworkpublished}

Gözləməkdə olan bir şəbəkə yayımlandıqdan sonra işə düşür.

## Parametrlər {#parameters}

| Name | Type | Təsvir |
|------|------|-------------|
| $network | `\WP_Ultimo\Models\Network` | Yaradılmış şəbəkə. |
| $membership | `\WP_Ultimo\Models\Membership` | Üzvlik. |
| $pending_network | `array` | Orijinal gözləməkdə olan şəbəkə məlumatları. |

### Mənbə {#source}

[`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L1815) faylında 1815-ci sətrdə təyin edilmişdir.
