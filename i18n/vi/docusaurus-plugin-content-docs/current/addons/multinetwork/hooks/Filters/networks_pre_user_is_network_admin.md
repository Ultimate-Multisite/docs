---
id: networks_pre_user_is_network_admin
title: Bộ lọc - networks_pre_user_is_network_admin
sidebar_label: networks_pre_user_is_network_admin
_i18n_hash: f8e04e42fb6f7c1f20a1280c46bf53b5
---
# Filter: networks_pre_user_is_network_admin

Lọc các mạng mà người dùng là quản trị viên, nhằm mục đích rút ngắn quá trình xử lý.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $ | `array\|bool\|null` | Danh sách ID mạng hoặc giá trị false. Bất kỳ giá trị nào khác null sẽ bỏ qua quá trình xử lý. |
| $ | `int` | ID người dùng mà các mạng cần được trả về. |

### Since {#since}

- 2.0.0
### Source {#source}

Được định nghĩa trong [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L688) tại dòng 688
