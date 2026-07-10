---
id: networks_pre_user_is_network_admin
title: Filter - networks_pre_user_is_network_admin
sidebar_label: networks_pre_user_is_network_admin
_i18n_hash: f8e04e42fb6f7c1f20a1280c46bf53b5
---
# Filter: networks_pre_user_is_network_admin {#filter-networkspreuserisnetworkadmin}

Bir istifadəçinin administrator olduğu şəbəkələri filtrləyir, bu da prosesi qısa yoldan keçirmək üçün istifadə olunur.

## Parametrlər {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $ | `array\|bool\|null` | Şəbəkə ID-lərinin siyahısı və ya yanlış (false). Null olmayan hər dəyər prosesi qısa yoldan keçirəcək. |
| $ | `int` | Şəbəkələrin qaytarılmasını istədiyiniz istifadəçi ID-si. |

### Versiyası {#since}

- 2.0.0
### Mənbə {#source}

Defined in [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L688) at line 688
