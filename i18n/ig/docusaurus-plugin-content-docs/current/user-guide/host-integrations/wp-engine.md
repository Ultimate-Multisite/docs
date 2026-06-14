---
title: Nkwado WP Engine
sidebar_position: 2
_i18n_hash: ceeee20432439d8afb3002dd0dd1ff12
---
# Tích hợp với WP Engine

## Tổng quan
WP Engine là một nền tảng lưu trữ WordPress được quản lý cao cấp, cung cấp hiệu suất tối ưu, bảo mật và khả năng mở rộng cho các trang WordPress. Việc tích hợp này cho phép đồng bộ tên miền tự động giữa Ultimate Multisite và WP Engine.

## Tính năng
- Đồng bộ tên miền tự động
- Hỗ trợ subdomain cho các cài đặt multisite
- Tích hợp liền mạch với các hệ thống hiện có của WP Engine

## Yêu cầu
Việc tích hợp sẽ tự động phát hiện xem bạn đang lưu trữ trên WP Engine và sử dụng API WP Engine có sẵn. Không cần cấu hình thêm nếu plugin WP Engine đã được kích hoạt và thiết lập đúng cách.

Tuy nhiên, nếu bạn cần cấu hình thủ công việc tích hợp, bạn có thể định nghĩa một trong các hằng số này trong tệp `wp-config.php` của mình:

```php
define('WPE_APIKEY', 'your_api_key'); // Phương pháp được ưu tiên
// HOẶC
define('WPE_API', 'your_api_key'); // Phương pháp thay thế
```

## Hướng dẫn thiết lập

### 1. Xác minh Plugin WP Engine

Nếu bạn đang lưu trữ trên WP Engine, plugin WP Engine đã được cài đặt và kích hoạt rồi. Hãy kiểm tra xem:

1. Plugin WP Engine đã được kích hoạt chưa
2. Tệp `wp-content/mu-plugins/wpengine-common/class-wpeapi.php` có tồn tại không

### 2. Bật Tích hợp

1. Trong trang quản trị WordPress của bạn, đi đến Ultimate Multisite > Settings (Cài đặt)
2. Điều hướng đến tab "Domain Mapping" (Ánh xạ tên miền)
3. Cuộn xuống phần "Host Integrations" (Tích hợp máy chủ)
4. Bật tích hợp WP Engine
5. Nhấn "Save Changes" (Lưu thay đổi)

## Cách nó hoạt động

### Đồng bộ Tên miền

Khi một tên miền được ánh xạ trong Ultimate Multisite:

1. Việc tích hợp sử dụng API WP Engine để thêm tên miền đó vào cài đặt WP Engine của bạn
2. WP Engine sẽ xử lý việc cấu hình tên miền và cấp chứng chỉ SSL
3. Khi một ánh xạ tên miền bị xóa, việc tích hợp sẽ xóa tên miền đó khỏi WP Engine

### Hỗ trợ Subdomain

Para instalações de multisite de subdomínio:

1. A integração adiciona cada subdomínio ao WP Engine quando um novo site é criado.
2. O WP Engine cuida da configuração do subdomínio.
3. Quando um site é excluído, a integração removerá o subdomínio do WP Engine.

## Observações Importantes

### Domínios Wildcard (Asterisco)

Para instalações de multisite de subdomínio, é recomendado entrar em contato com o suporte da WP Engine para solicitar uma configuração de domínio wildcard. Isso permite que todos os subdomínios funcionem automaticamente sem a necessidade de adicionar cada um individualmente.

### Certificados SSL

O WP Engine cuida automaticamente da emissão e renovação dos certificados SSL para todos os domínios adicionados através desta integração. Não é necessária nenhuma configuração adicional.

## Solução de Problemas (Troubleshooting)

### Problemas de Conexão da API
- Verifique se o plugin do WP Engine está ativo e configurado corretamente.
- Se você definiu a chave de API manualmente, verifique se ela está correta.
- Entre em contato com o suporte da WP Engine se estiver tendo problemas com a API.

### Domínio Não Adicionado
- Verifique os logs do Ultimate Multisite para quaisquer mensagens de erro.
- Confirme se o domínio não foi adicionado ao WP Engine anteriormente.
- Certifique-se de que seu plano do WP Engine suporta o número de domínios que você está adicionando.

### Problemas com Subdomínios
- Se os subdomínios não estiverem funcionando, entre em contato com o suporte da WP Engine para solicitar uma configuração de domínio wildcard.
- Verifique se suas configurações de DNS estão configuradas corretamente para o domínio principal e os subdomínios.
