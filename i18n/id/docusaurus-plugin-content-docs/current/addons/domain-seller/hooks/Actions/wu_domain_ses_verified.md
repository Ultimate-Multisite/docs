---
id: wu_domain_ses_verified
title: Action - wu_domain_ses_verified
sidebar_label: wu_domain_ses_verified
_i18n_hash: 5ef424a1d1a4d3569ebfa9caf2d1a3d7
---
# Action: wu_domain_ses_verified

Aksi ini akan dijalankan ketika SES berhasil mengonfirmasi bahwa sebuah domain telah terverifikasi DKIM.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | Objek domain yang terverifikasi. |

### Sejak

- 2.2.0
### Sumber

Didefinisikan di [`inc/class-ses-verification-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-ses-verification-manager.php#L480) pada baris 480
