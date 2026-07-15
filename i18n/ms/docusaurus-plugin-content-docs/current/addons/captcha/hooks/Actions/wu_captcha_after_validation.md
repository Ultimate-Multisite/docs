---
id: wu_captcha_after_validation
title: Tindakan - wu_captcha_after_validation
sidebar_label: wu_captcha_after_validation
_i18n_hash: d257de780581abe25b44e1ec519f48d8
---
# Action: wu_captcha_after_validation

Aksi ini akan dipanggil selepas proses pengesahan captcha selesai.

## Parameter {#parameters}

| Nama | Jenis | Penerangan |
|------|------|-------------|
| $result | `array` | Hasil pengesahan. |
| $token | `string` | Token yang telah disahkan. |

### Sejak {#since}

- 1.2.0
### Sumber {#source}

Didefinisikan dalam [`inc/class-captcha-core.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-captcha/blob/main/inc/class-captcha-core.php#L224) pada baris 224
