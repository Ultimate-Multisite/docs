---
id: wu_make_primary_domain_redirect_url
title: Bộ lọc - wu_make_primary_domain_redirect_url
sidebar_label: wu_make_primary_domain_redirect_url
_i18n_hash: bda96824db400b25e97802e5567df22d
---
# Filter: wu_make_primary_domain_redirect_url

Bộ lọc này dùng để tùy chỉnh URL chuyển hướng sau khi đặt một domain làm domain chính.

Nó cho phép các nhà phát triển tùy chỉnh nơi người dùng sẽ được chuyển hướng sau khi thiết lập thành công một domain làm domain chính. Mặc định, hệ thống sẽ chuyển hướng đến URL hiện tại trên site chính, hoặc đến admin URL của site đang được chỉnh sửa.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $redirect_url | `string` | URL chuyển hướng mặc định. Có thể là URL hiện tại (nếu là site chính) hoặc admin URL của site hiện tại. |
| $current_site | `int` | ID của site có domain đang được đặt làm domain chính. |
| $domain | `\Domain` | Đối tượng domain đã được đặt làm domain chính. |
| $old_primary_domains | `array` | Mảng chứa các ID của các domain đã từng là domain chính. |

### Since {#since}

- 2.0.0
### Source {#source}

Được định nghĩa trong [`inc/ui/class-domain-mapping-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-domain-mapping-element.php#L639) tại dòng 639


## Returns {#returns}
URL chuyển hướng đã được lọc.
