---
id: wu_apply_plan_limits
title: Filter - wu_apply_plan_limits
sidebar_label: wu_apply_plan_limits
_i18n_hash: bd9ef0fee7898150c2b822a714f498c1
---
# Filter: wu_apply_plan_limits {#filter-wuapplyplanlimits}

Memungkinkan pengembang plugin untuk melewati batasan (limitations).

Anda dapat menggunakan filter ini untuk menjalankan kode arbitrer sebelum batasan apa pun dimulai. Jika filter mengembalikan nilai yang dianggap benar (*truthy*), proses akan berlanjut. Jika ia mengembalikan nilai yang dianggap salah (*falsy*), kode akan berhenti dan tidak ada *hook* di bawah ini yang akan dijalankan.

### Sejak {#since}

- 1.7.0
### Sumber {#source}

- Didefinisikan di [`inc/limits/class-post-type-limits.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limits/class-post-type-limits.php#L52) pada baris 52
- Didefinisikan di [`inc/limits/class-di&#115;k-space-limits.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limits/class-di%73k-space-limits.php#L98) pada baris 98
## Mengembalikan {#returns}
