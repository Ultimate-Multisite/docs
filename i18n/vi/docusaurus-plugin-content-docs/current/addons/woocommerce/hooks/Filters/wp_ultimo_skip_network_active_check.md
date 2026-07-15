---
id: wp_ultimo_skip_network_active_check
title: Filter - wp_ultimo_skip_network_active_check
sidebar_label: wp_ultimo_skip_network_active_check
_i18n_hash: e2f5feea7c780608ddb520691a69fea8
---
# Bộ lọc: wp_ultimo_skip_network_active_check

Cho phép các nhà phát triển bỏ qua bước kiểm tra kích hoạt mạng.

Điều này hữu ích khi bạn đang sử dụng các thiết lập tùy chỉnh hoặc dựa trên composer, chẳng hạn như Bedrock, nơi việc sử dụng các plugin dưới dạng mu-plugins là quy chuẩn.

## Tham số {#parameters}

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| $skip_network_activation_check | `bool` | Nếu chúng ta nên bỏ qua kiểm tra hay không, mặc định là `false`. |

### Từ phiên bản {#since}

- 2.0.0
### Nguồn {#source}

Được định nghĩa trong [`inc/class-requirements.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/class-requirements.php#L272) tại dòng 272

## Giá trị trả về {#returns}
Trả về `true` nếu bạn muốn bỏ qua kiểm tra, ngược lại là `false`.
