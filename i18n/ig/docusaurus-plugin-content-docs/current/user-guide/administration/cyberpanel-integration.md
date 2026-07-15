---
title: Nkwado CyberPanel
sidebar_position: 21
_i18n_hash: d0607874b556c583dac2aaa33ba1dc1d
---
# CyberPanel Integration

A-gụm này na-eme ihe na-eme ka ịse Ultimate Multisite CyberPanel integration, ọ gba domain ndị nwere ike ịle (mapped domains) na mmekọrịta tupu (virtual hosts) na CyberPanel, nke a ga-anọchịrị (and removed) ma ọ bụ site n'ụzọ dị mma (optional auto-SSL provisioning) via Let's Encrypt.

## Ọ Naa Ihebe {#what-it-does}

- Mgbe domain ịle n'Ultimate Multisite, integration ahụ na-call CyberPanel API ka ọ ga-eme virtual host maka domain ahụ.
- Mgbe ịle domain mapping ahụ anọchịrị (removed), integration ahụ na-call API ka ọ ga-delete virtual host ahụ.
- Mgbe auto-SSL na-onwe, integration ahụ na-trigger certificate Let's Encrypt hemenha anọchoko (immediately) onwe a bụrụkpọdụ virtual host ahụ.
- Ọ na-eme/anọchịrị alias `www.` ọ bụ na setting "Auto-create www subdomain" n'Domain Mapping settings ha ị chọrọ.

## Ihe Agha (Prerequisites) {#prerequisites}

- CyberPanel instance na-onwe (v2.3 na ọkụkọ dị mma) nke ga-anọchịrị n'WordPress server ahụ.
- Website na-onwe n'CyberPanel na-eme site WordPress network root ha ị servie anọ. Integration ahụ na-attach virtual hosts ọhụrụ na server a.
- CyberPanel API access na-onwe. Authentication na-eme ka ị chọrọ username na password admin CyberPanel ahụ.
- DNS records ha domain ndị nwere ike ịle (mapped domains) ga-anọchịrị na IP address server ahụ ọ bụrụ na auto-SSL ga-anọchoko certificate ọhụrụ dị mma.

## Ihe Agha Na-eme (Requirements) {#requirements}

Ihe ndị a na-eme n'file `wp-config.php` ha:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'your_admin_username');
define('WU_CYBERPANEL_PASSWORD', 'your_admin_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Ọ na-eme/anọchịrị, ị ga-eme anọ:

```php
define('WU_CYBERPANEL_AUTO_SSL', true);          // Default: true — issue Let's Encrypt SSL after domain creation
define('WU_CYBERPANEL_PHP_VERSION', 'PHP 8.2');  // Default: PHP 8.2
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com'); // Used for SSL certificate contact
```

## Instruções de Configuração {#setup-instructions}

### 1. Ative a API do CyberPanel {#1-enable-the-cyberpanel-api}

1. Faça login na painel do seu CyberPanel como administrador.
2. Vá para **Security** > **SSL** e confirme que o SSL está ativo na própria interface do CyberPanel (isso é necessário para chamadas API seguras).
3. A API do CyberPanel está disponível em `https://seu-ip-do-servidor:8090/api/` por padrão. Não são necessários passos adicionais para ativá-la — ela já está ativa para usuários administradores.

### 2. Adicione Constantes ao wp-config.php {#2-add-constants-to-wp-configphp}

Adicione as seguintes constantes no seu arquivo `wp-config.php` antes da linha `/* That's all, stop editing! */`:

```php
define('WU_CYBERPANEL_HOST', 'https://seu-host-do-cyberpanel:8090');
define('WU_CYBERPANEL_USERNAME', 'admin');
define('WU_CYBERPANEL_PASSWORD', 'sua_senha_segura');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Para ativar o auto-SSL (recomendado):

```php
define('WU_CYBERPANEL_AUTO_SSL', true);
define('WU_CYBERPANEL_EMAIL', 'admin@seu-dominio.com');
```

### 3. Ative a Integração {#3-enable-the-integration}

1. Na sua área de administração da rede do WordPress, vá para **Ultimate Multisite** > **Settings**.
2. Navegue até a aba **Domain Mapping**.
3. Role para baixo até **Host Integrations**.
4. Ative a integração **CyberPanel**.
5. Clique em **Save Changes** (Salvar Alterações).

### 4. Verifique a Conexão {#4-verify-connectivity}

Use o teste de conexão embutido no assistente de configurações:

1. Chị đi đến **Ultimate Multisite** > **Settings** > **Domain Mapping** > **Host Integrations** > **CyberPanel**.
2. Nhấn vào **Test Connection**.
3. Một thông báo thành công sẽ xác nhận rằng plugin có thể kết nối với API của CyberPanel và xác thực đúng cách.

## Cách Nó Hoạt Động {#how-it-works}

### Domain Mapping (Ánh xạ Tên miền) {#domain-mapping}

Khi bạn ánh xạ một tên miền trong Ultimate Multisite:

1. Bản tích hợp gửi một yêu cầu `POST` đến `/api/createWebsite` trên máy chủ CyberPanel của bạn.
2. CyberPanel sẽ tạo một host ảo mới cho tên miền đó dưới gói đã được cấu hình.
3. Thư mục gốc (document root) sẽ được đặt để trỏ đến thư mục gốc mạng WordPress của bạn.
4. Khi việc ánh xạ tên miền bị xóa, bản tích hợp sẽ gọi `/api/deleteWebsite` để dọn dẹp host ảo đó.

### Auto-SSL (Tự động SSL) {#auto-ssl}

Khi `WU_CYBERPANEL_AUTO_SSL` là `true`:

1. Sau khi host ảo được tạo, bản tích hợp sẽ gọi `/api/issueSSL` cho tên miền đó.
2. CyberPanel yêu cầu một chứng chỉ Let's Encrypt bằng thử thách ACME HTTP-01.
3. Chứng chỉ sẽ tự động gia hạn bởi CyberPanel trước khi hết hạn.

> **Quan trọng:** DNS phải được lan truyền hoàn toàn đến địa chỉ IP của máy chủ bạn trước khi Let's Encrypt có thể xác thực tên miền. Nếu việc cấp SSL thất bại ngay sau khi ánh xạ, hãy đợi DNS lan truyền và kích hoạt lại SSL từ bảng điều khiển CyberPanel trong mục **SSL** > **Manage SSL**.

### www Subdomain (Tên miền phụ www) {#www-subdomain}

Nếu **Auto-create www subdomain** được bật trong cài đặt Domain Mapping của bạn, bản tích hợp cũng sẽ tạo một bí danh host ảo cho `www.<domain>` và khi auto-SSL được bật, nó sẽ cấp chứng chỉ bao gồm cả biến thể apex và www.

### Email Forwarders (Chuyển tiếp Email) {#email-forwarders}

When the [Ultimate Multisite: Emails](../../addons/ultimate-multisite-emails/) addon is active, CyberPanel can also provide customer email forwarders. Forwarders route messages from a domain address to another inbox without creating a full mailbox, which is useful for aliases such as `info@customer-domain.test` or `support@customer-domain.test`.

Before enabling forwarders for customers:

1. Confirm that the CyberPanel constants above are configured and the connection test passes.
2. Enable the CyberPanel email provider in the Emails addon settings.
3. Confirm that the customer domain already exists in CyberPanel before creating the forwarder.
4. Create a test forwarder and send a message through it before offering the feature on production plans.

If forwarder creation fails, check the Ultimate Multisite activity logs first, then confirm in CyberPanel that the source domain exists and that the API user has email-management permissions.

## Configuration Reference {#configuration-reference}

| Constant | Required | Default | Description |
|---|---|---|---|
| `WU_CYBERPANEL_HOST` | Yes | — | Full URL to your CyberPanel instance including port, e.g. `https://cp.example.com:8090` |
| `WU_CYBERPANEL_USERNAME` | Yes | — | Username of the CyberPanel admin |
| `WU_CYBERPANEL_PASSWORD` | Yes | — | Password of the CyberPanel admin |
| `WU_CYBERPANEL_PACKAGE` | Yes | `Default` | CyberPanel hosting package to assign to new virtual hosts |
| `WU_CYBERPANEL_AUTO_SSL` | No | `true` | Issue a Let's Encrypt SSL certificate after domain creation |
| `WU_CYBERPANEL_PHP_VERSION` | No | `PHP 8.2` | PHP version for new virtual hosts (must match a version installed in CyberPanel) |
| `WU_CYBERPANEL_EMAIL` | No | — | Contact email for SSL certificate registration |

## Important Notes {#important-notes}

API na CyberPanel usa token authentication based sa session. Ang integration ay awtomatikong kumukuha ng token sa bawat tawag sa API.
Dapat may pahintulot ang iyong CyberPanel admin account para gumawa at magtanggal ng mga website.
Ang CyberPanel ay tumatakbo sa port `8090` bilang default. Kung ang server mo ay gumagamit ng firewall, tiyakin na ang port na ito ay naa-access mula sa WordPress application server.
Hindi ina-manage ng integration ang DNS records. Kailangan mong ituro ang domain DNS sa IP address ng iyong server bago i-map ang domain sa Ultimate Multisite.
Kung gumagamit ka ng OpenLiteSpeed (OLS), awtomatikong magsasagawa ito ng graceful restart pagkatapos ng mga pagbabago sa virtual host. Walang kailangang manual na interbensyon.

## Pag-troubleshoot {#troubleshooting}

### API Connection Refused {#api-connection-refused}

- Siguraduhin na bukas ang port `8090` sa firewall ng iyong server.
- I-confirm na ang halaga ng `WU_CYBERPANEL_HOST` ay may tamang protocol (`https://`) at port.
- Tingnan kung balido ang CyberPanel SSL certificate mo; ang mga self-signed certificate ay maaaring magdulot ng TLS verification failures. Itakda ang `WU_CYBERPANEL_VERIFY_SSL` sa `false` lamang sa mga trusted private network environment.

### Authentication Errors {#authentication-errors}

- I-confirm na tama ang iyong `WU_CYBERPANEL_USERNAME` at `WU_CYBERPANEL_PASSWORD` sa pamamagitan ng direktang pag-login sa CyberPanel.
- Kinokondena (locks) ng CyberPanel ang mga account pagkatapos ng paulit-ulit na nabigong pag-login. Tingnan ang **Security** > **Brute Force Monitor** sa loob ng CyberPanel kung mayroong lockouts.

### Domain Not Created {#domain-not-created}

- Tingnan ang activity log ng Ultimate Multisite (**Ultimate Multisite** > **Activity Logs**) para sa mga error message ng API.
- I-verify na ang package na tinukoy sa `WU_CYBERPANEL_PACKAGE` ay umiiral sa CyberPanel (**Packages** > **List Packages**).
- Siguraduhin na hindi pa nakarehistro ang domain bilang website sa CyberPanel — ang paggawa ng duplicate website ay magreresulta sa error.

### SSL Certificate Not Issued {#ssl-certificate-not-issued}

- Confirm DNS na-eme nade (DNS) na-eme na-eme nke ọma: `dig +short your-domain.com` ga-adụ ịga IP na server gị.
- Let's Encrypt na-eme rate limits (mmebe a na-eme oge a na-eme). Ka ọ bụrụ na ị nwere ike ịkwado ụfọdụ certificate nke ukwuu maka domain e, ka jiji ka ọ dịka ka ị ri anọrọ.
- Check CyberPanel SSL logs n'ime **Logs** > **Error Logs** maka mmebe ahụ ka ị chere ihe ndị a na-eme aka na akụkọ certificate ahụ.
- Ka ọ bụrụ na ụzọ ọzọ, ị ga-anọrọ SSL manually (manually) n'ime CyberPanel: **SSL** > **Manage SSL** > select the domain > **Issue SSL**.

## References {#references}

- CyberPanel API Documentation: https://docs.cyberpanel.net/docs/category/api
- CyberPanel SSL Management: https://docs.cyberpanel.net/docs/cyberpanel/SSL/manageSSL
- Let's Encrypt Rate Limits: https://letsencrypt.org/docs/rate-limits/
