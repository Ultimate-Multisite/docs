---
id: wu_sso_url
title: Filtre - wu_sso_url
sidebar_label: wu_sso_url
_i18n_hash: a369dcf0f4cab1f5941c82ac58286155
---
# Filtre: wu_sso_url

Alanlar arası müşteri eylemleri için döndürülmeden önce oluşturulan SSO URL’lerini filtreler.

Bir entegrasyonun, Ultimate Multisite’ın token doğrulamasını korurken bağımsız kiracı SSO bağlantısına güvenilir bağlam eklemesi veya aracı URL’sini değiştirmesi gerektiğinde bu filtreyi kullanın.

## Parametreler

| Ad | Tür | Açıklama |
|------|------|-------------|
| $sso_url | `string` | Oluşturulan SSO URL’si. |
| $user | `WP_User` | SSO ziyareti tarafından kimliği doğrulanacak kullanıcı. |
| $site_id | `int` | Ziyaret için hedef site kimliği. |
| $redirect_to | `string` | Başarılı SSO doğrulamasından sonra hedef URL. |

### Sürümden Beri

- 2.13.0

### Kaynak

`inc/sso/class-sso.php` içinde tanımlanmıştır.


## Döndürür

Filtrelenmiş SSO URL’si.
