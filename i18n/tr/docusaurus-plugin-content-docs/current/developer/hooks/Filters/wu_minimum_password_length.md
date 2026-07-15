---
id: wu_minimum_password_length
title: Filtre - wu_minimum_password_length
sidebar_label: wu_minimum_password_length
_i18n_hash: 02317f8ab8200551a9d2112b8ba4b7a8
---
# Filter: wu_minimum_password_length

Minimum şifre uzunluğunu filtreler.

Yalnızca `wu_enforce_password_rules` doğru (true) olduğunda uygulanır.

## Parametreler {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $min_length | `int` | Minimum şifre uzunluğunu belirler. Varsayılan değer 12'dir (Defender Pro ile uyumludur). |
| $defender_active | `bool` | Defender Pro Güçlü Şifre özelliğinin aktif olup olmadığını kontrol eder. |

### Since {#since}

- 2.4.0
### Source {#source}

Defined in [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L543) at line 543
