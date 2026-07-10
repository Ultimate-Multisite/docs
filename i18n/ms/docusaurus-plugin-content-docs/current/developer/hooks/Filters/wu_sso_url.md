---
id: wu_sso_url
title: Penapis - wu_sso_url
sidebar_label: wu_sso_url
_i18n_hash: a369dcf0f4cab1f5941c82ac58286155
---
# Penapis: wu_sso_url {#filter-wussourl}

Menapis URL SSO yang dijana sebelum ia dikembalikan untuk tindakan pelanggan merentas domain.

Gunakan penapis ini apabila integrasi perlu menambah konteks dipercayai pada pautan SSO penyewa berdaulat atau menggantikan URL broker sambil mengekalkan pengesahan token Ultimate Multisite.

## Parameter {#parameters}

| Nama | Jenis | Penerangan |
|------|------|-------------|
| $sso_url | `string` | URL SSO yang dijana. |
| $user | `WP_User` | Pengguna yang akan disahkan oleh lawatan SSO. |
| $site_id | `int` | ID laman sasaran untuk lawatan tersebut. |
| $redirect_to | `string` | URL destinasi selepas pengesahan SSO berjaya. |

### Sejak {#since}

- 2.13.0

### Sumber {#source}

Ditakrifkan dalam `inc/sso/class-sso.php`.


## Pulangan {#returns}

URL SSO yang ditapis.
