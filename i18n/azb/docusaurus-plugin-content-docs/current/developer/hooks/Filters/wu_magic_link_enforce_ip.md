---
id: wu_magic_link_enforce_ip
title: Filter - wu_magic_link_enforce_ip
sidebar_label: wu_magic_link_enforce_ip
_i18n_hash: b785314a6a2d9ea45d3beab38baa58fe
---
# Filter: wu_magic_link_enforce_ip {#filter-wumagiclinkenforceip}

IP adresi doğrulaması yapılıp yapılmayacağını filtreler.

Bunu `false` olarak ayarlarsanız, token'ların farklı ağlardan çalışmasına izin vermiş olursunuz. Bu, güvenliği bir miktar azaltır ancak kullanılabilirliği artırır (örneğin, ağ değiştiren mobil kullanıcılar için).

## Parametreler {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $enforce | `bool` | IP adresi eşleşmesini zorunlu tutup tutmayacağınız. |

### Since {#since}

- 2.0.0
### Source {#source}

[`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L422) dosyasında 422. satırda tanımlanmıştır.
