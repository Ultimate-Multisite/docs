---
id: wu_minimum_password_strength
title: Filter - wu_minimum_password_strength
sidebar_label: wu_minimum_password_strength
_i18n_hash: 13b3e1f6763c2ac8e8393676f5a46039
---
# Filtre: wu_minimum_password_strength {#filter-wuminimumpasswordstrength}

Gerekli minimum şifre gücünü (zxcvbn puanı) filtreler.

Güç seviyeleri: - 0, 1: Çok zayıf - 2: Zayıf - 3: Orta - 4: Güçlü (varsayılan)

## Parametreler {#parameters}

| Ad | Tip | Açıklama |
|------|------|-------------|
| $min_strength | `int` | Gerekli minimum güç seviyesi. |
| $strength_setting | `string` | Yönetici ayarı değeri (medium, strong, super_strong). |

### Bu versiyondan beri {#since}

- 2.4.0
### Kaynak {#source}

[`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L516) dosyasının 516. satırında tanımlanmıştır.
