---
id: wu_limits_is_fluent_form_above_limit
title: Filter - wu_limits_is_fluent_form_above_limit
sidebar_label: wu_limits_is_fluent_form_above_limit
_i18n_hash: 8fd05176d097f0d8576b5656778bd633
---
# Filter: wu_limits_is_fluent_form_above_limit

Memeriksa apakah tipe form tertentu diizinkan pada paket ini. Memungkinkan pengembang plugin untuk memfilter nilai kembaliannya.

## Parameter {#parameters}

| Nama | Tipe | Deskripsi |
|------|------|-------------|
| $value | `bool` | Jika tipe form melebihi batas atau tidak |
| $form_type | `string` | Tipe form yang sedang diperiksa |
| $form_count | `int` | Jumlah form saat ini |
| $quota | `int` | Kuota yang diizinkan |

### Sejak {#since}

- 1.0.0
### Sumber {#source}

- Didefinisikan di [`inc/limitations/class-limit-fluent-forms.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-fluent-forms/blob/main/inc/limitations/class-limit-fluent-forms.php#L56) pada baris 56
- Didefinisikan di [`inc/limitations/class-limit-fluent-forms.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-fluent-forms/blob/main/inc/limitations/class-limit-fluent-forms.php#L89) pada baris 89
