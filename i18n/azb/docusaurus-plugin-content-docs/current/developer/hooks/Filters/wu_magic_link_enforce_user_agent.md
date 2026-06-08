---
id: wu_magic_link_enforce_user_agent
title: Filter - wu_magic_link_enforce_user_agent
sidebar_label: wu_magic_link_enforce_user_agent
_i18n_hash: 33252b9660851a8fe51ff7ed586d9cf2
---
# Filter: wu_magic_link_enforce_user_agent

Kullanıcı ajanı doğrulamasını zorunlu tutup tutmayacağını filtreler.

Bunu `false` olarak ayarlarsanız, token'ların farklı tarayıcılar veya cihazlar arasında çalışmasına izin vermiş olursunuz. Bu, güvenliği bir miktar düşürür ancak kullanılabilirliği artırır.

## Parametreler

| Name | Type | Description |
|------|------|-------------|
| $enforce | `bool` | Kullanıcı ajanı eşleştirmesinin zorunlu olup olmayacağını belirtir. |

### Since

- 2.0.0
### Source

[`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L410) dosyasında 410. satırda tanımlanmıştır.
