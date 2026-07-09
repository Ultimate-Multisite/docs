---
id: wu_pending_network_published
title: Action - wu_pending_network_published
sidebar_label: wu_pending_network_published
_i18n_hash: 2cd5b02aa4fa11d92610bf2952f4b1f6
---
# Action: wu_pending_network_published {#action-wupendingnetworkpublished}

Beklemede olan bir ağ yayınlandıktan sonra tetiklenir.

## Parametreler {#parameters}

| Ad | Tip | Açıklama |
|------|------|-------------|
| $network | `\WP_Ultimo\Models\Network` | Oluşturulan ağ. |
| $membership | `\WP_Ultimo\Models\Membership` | Üyelik. |
| $pending_network | `array` | Orijinal beklemede olan ağ verisi. |

### Kaynak {#source}

[`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L1815) dosyasının 1815. satırında tanımlanmıştır.
