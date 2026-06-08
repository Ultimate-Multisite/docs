---
id: wp_ultimo_skip_network_active_check
title: Filter - wp_ultimo_skip_network_active_check
sidebar_label: wp_ultimo_skip_network_active_check
_i18n_hash: e2f5feea7c780608ddb520691a69fea8
---
# Filter: wp_ultimo_skip_network_active_check

Developerlərə şəbəkə aktivləşdirmə yoxlamasını atlamağa imkan verir.

Bu, xüsusilə Composer əsaslı və ya Bedrock kimi digər fərdiləşdirilmiş quruluşlardan istifadə edərkən faydalıdır, çünki bu quruluşlarda mu-plugin kimi pluginlər istifadə etmək normaldır.

## Parametrlər

| Name | Type | Description |
|------|------|-------------|
| $skip_network_activation_check | `bool` | Əgər yoxlamanı atlamalıyıq yoxsa yox, default olaraq `false` dəyərinə sahibdir. |

### Nə vaxtdan

- 2.0.0
### Mənbə

`inc/class-requirements.php` faylında, 272-ci sətirdə təyin edilmişdir.

## Qaytarır
Yoxlamanı atlamaq istəyirsinizsə `true`, əks halda `false`.
