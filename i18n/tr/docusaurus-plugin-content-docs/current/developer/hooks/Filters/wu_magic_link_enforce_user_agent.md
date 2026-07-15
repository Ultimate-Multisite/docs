---
id: wu_magic_link_enforce_user_agent
title: Filtre - wu_magic_link_enforce_user_agent
sidebar_label: wu_magic_link_enforce_user_agent
_i18n_hash: 33252b9660851a8fe51ff7ed586d9cf2
---
# Filter: wu_magic_link_enforce_user_agent

Kullanıcı ajanı doğrulamasının zorunlu olup olmadığını filtreler.

Token'ların farklı tarayıcılar/cihazlar arasında çalışmasına izin vermek için `false` olarak ayarlayın. Bu, güvenliği azaltır ancak kullanılabilirliği artırır.

## Parametreler {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $enforce | `bool` | Kullanıcı ajanı eşleştirmesinin zorunlu olup olmadığı. |

### Since {#since}

- 2.0.0
### Source {#source}

[https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L410](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L410) adresinde 410. satırda tanımlanmıştır.
