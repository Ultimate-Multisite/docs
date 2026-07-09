---
id: wu_pending_network_published
title: Aksi - wu_pending_network_published
sidebar_label: wu_pending_network_published
_i18n_hash: 2cd5b02aa4fa11d92610bf2952f4b1f6
---
# Action: wu_pending_network_published {#action-wupendingnetworkpublished}

Aksi ini dipicu setelah sebuah jaringan yang tadinya dalam status tertunda berhasil dipublikasikan.

## Parameter {#parameters}

| Nama | Tipe | Deskripsi |
|------|------|-------------|
| $network | `\WP_Ultimo\Models\Network` | Jaringan yang telah dibuat. |
| $membership | `\WP_Ultimo\Models\Membership` | Keanggotaan (membership). |
| $pending_network | `array` | Data jaringan tertunda yang asli. |

### Sumber {#source}

Didefinisikan di [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L1815) pada baris 1815
