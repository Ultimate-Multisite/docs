---
id: networks_pre_user_is_network_admin
title: Фільтр - networks_pre_user_is_network_admin
sidebar_label: networks_pre_user_is_network_admin
_i18n_hash: f8e04e42fb6f7c1f20a1280c46bf53b5
---
# Filter: networks_pre_user_is_network_admin {#filter-networkspreuserisnetworkadmin}

Фільтруе сеткі, ад якіх карыстальнік з'яўляецца адміністратарам, што дазваляе прабіваць гэты працэс.

## Паметры {#parameters}

| Назва | Тып | Апісан |
|------|------|-------------|
| $ | `array\|bool\|null` | Спіс ID сеткі або false. Усё, што не null, прабівае гэты працэс. |
| $ | `int` | ID карыстальніка, для якіх трэба павер Nú сеткі. |

### З {#since}

- 2.0.0
### Выкненне {#source}

Вызначаны ў [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L688) на 688-й паўніне.
