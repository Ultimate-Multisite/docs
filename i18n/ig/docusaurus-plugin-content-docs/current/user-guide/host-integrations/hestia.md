---
title: Nkwado Hestia Control Panel Integration
sidebar_position: 7
_i18n_hash: 252519613f4d84d44875a5b2090e4bd6
---
# Integration na Control Panel Hestia

A hướng dẫn này giải thích cách cấu hình tích hợp Ultimate Multisite Hestia để các tên miền được ánh xạ trong mạng của bạn tự động được thêm vào (và xóa khỏi) Hestia dưới dạng Web Domain Aliases.

- Tham khảo CLI Hestia: v-add-web-domain-alias / v-delete-web-domain-alias
- Tài liệu REST API chính thức: https://hestiacp.com/docs/server-administration/rest-api.html

## Nó Làm Gì {#what-it-does}
- Khi một tên miền được ánh xạ trong Ultimate Multisite, tích hợp sẽ gọi Hestia API để chạy lệnh:
  - `v-add-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Khi việc ánh xạ tên miền bị xóa, nó sẽ chạy:
  - `v-delete-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Tùy chọn thêm/xóa alias `www.` tùy thuộc vào cài đặt “Auto-create www subdomain” của bạn trong phần Cấu hình Ánh xạ Tên miền (Domain Mapping settings).

## Điều Kiện Tiên Quyết {#prerequisites}
- Một Hestia Web Domain hiện có đã trỏ đến cài đặt WordPress của bạn. Tích hợp sẽ gắn các alias vào tên miền cơ sở này.
- Cho phép truy cập API Hestia. Bạn có thể xác thực bằng mật khẩu hoặc mã hash/token API.

Xem tài liệu REST API của Hestia để bật quyền truy cập API và chi tiết xác thực:
https://hestiacp.com/docs/server-administration/rest-api.html

## Cấu Hình (Wizard → Integrations → Hestia) {#configuration-wizard--integrations--hestia}
Cung cấp các giá trị sau:

- `WU_HESTIA_API_URL` (required)
  - Base endpoint API, ọ bụ tí dị ka `https://your-hestia-host:8083/api/`.
- `WU_HESTIA_API_USER` (required)
  - User Hestia jụrụ maka API commands (ọ bụ `admin` nchekwa).
- `WU_HESTIA_API_PASSWORD` or `WU_HESTIA_API_HASH` (at least one)
  - Chọrọ ọ dịka ọ dị: password ma ọ bụ API hash/token.
- `WU_HESTIA_ACCOUNT` (required)
  - Account (owner) nke Web Domain n'Hestia; ọ bụ argument ọkọ (first argument) maka CLI.
- `WU_HESTIA_WEB_DOMAIN` (required)
  - Web Domain Hestia ebe na-agba WordPress tusi (aliases ga-agba m n'ebe a).
- `WU_HESTIA_RESTART` (optional; default `yes`)
  - Ọ bụrụ na ị chọrọ ịgụnyere/reload services ọbụla ha atoaka alias.

Ị chụrụ ihe ndị a dịka constants n'wp-config.php, ma ọ bụ ị gbanwe ha ọmanụ.

## Ihe Ndị A na-Eweta Setup {#verifying-setup}
- Na matsụfa “Testing” step nke wizard ahụ, plugin ahụ na-ekwu `v-list-web-domains <WU_HESTIA_ACCOUNT> json` via API. Response ọ dịka na-agba connectivity na authentication.
- A kpọrọ domain (mapping) anọ, chọrọ n'Hestia: Web > base domain > Aliases. Ị ga ị chọta alias ọhụrụ ahụ.

## Notes & Tips {#notes--tips}
- Keti ihe `WU_HESTIA_WEB_DOMAIN` dịka na-azụ maka `WU_HESTIA_ACCOUNT`.
- Ọ bụrụ na SSL dị m, jiji certificate n'Hestia. Integration a na-agba aliases karịta anọ.
- Plugin ahụ ga-agba/chọrọ www.<domain> ọ bụ eziokwu nke Domain Mapping “www subdomain” setting ha.

## Example API Call (cURL) {#example-api-call-curl}
A na-ekwu ihe atụ dịka (adjust n'environment ha). Chọrọ official doc maka parameters ọ bụla.

POST https://your-hestia-host:8083/api/
Content-Type: application/x-www-form-urlencoded

cmd=v-add-web-domain-alias
&user=admin
&password=YOUR_API_PASSWORD  (or &hash=YOUR_API_HASH)
&arg1=admin                  (WU_HESTIA_ACCOUNT)
&arg2=network.example.com    (WU_HESTIA_WEB_DOMAIN)
&arg3=customer-domain.com    (alias to add)
&arg4=yes                    (WU_HESTIA_RESTART)
&returncode=yes

Para delete, use `cmd=v-delete-web-domain-alias` na may same args.

## Troubleshooting {#troubleshooting}
- HTTP error from API: check xem `WU_HESTIA_API_URL` reachable (mampu truy cập được) và có chứa `/api` hay không.
- Lỗi xác thực (Auth errors): kiểm tra lại `WU_HESTIA_API_USER` và hoặc `WU_HESTIA_API_PASSWORD` hoặc `WU_HESTIA_API_HASH`.
- "Missing account/base domain" trong logs: đảm bảo rằng `WU_HESTIA_ACCOUNT` và `WU_HESTIA_WEB_DOMAIN` đã được đặt và hợp lệ trong Hestia.

## References {#references}
- Hestia REST API: https://hestiacp.com/docs/server-administration/rest-api.html
- Hestia CLI Reference (Aliases): https://hestiacp.com/docs/reference/cli.html#v-add-web-domain-alias
