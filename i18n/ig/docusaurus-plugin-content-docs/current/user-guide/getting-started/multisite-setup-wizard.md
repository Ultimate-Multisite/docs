---
title: Wizarda Nkwado Mmmụta
sidebar_position: 3
_i18n_hash: fd09dc94f24b0b37245b847380feea3f
---
# Setup Multisite {#multisite-setup-wizard}

Ultimate Multisite nwere wizard on-board na-aka, nke ga-enweghị ịgbanwe WordPress installation ọ bụla na WordPress Multisite network. A na-eme ihe ndị a na-akụghị ịgbanwe `wp-config.php` ma na-arụ database commands.

:::tip
Ọ bụrụ na WordPress installation ha na-arụ na-aka Multisite network, ị ga-anọ mma ịgba ọsọ akụkọ a. Wizard ahụ ga-enweghị ịbụ n'ime anọchịrị ma ọ bụ na-eme ihe a na-akụghị ịgbanwe.
:::

## Ọ dị na-aka Mgbe Wizard Ahụ Ga-eghị? {#when-does-the-wizard-appear}

Mgbe ị na-activate Ultimate Multisite na WordPress installation ọ bụla (non-Multisite), plugin ahụ ga-enweghị ịmata na Multisite na-eme ihe, ma ọ bụrụ na ya na-akụghị ịgbanwe. Ọ ga-anọ mma ịgba unu direct na **WP Admin > Ultimate Multisite > Multisite Setup**.

## Ihe Na-agbaje (Prerequisites) {#prerequisites}

Ma ọ bụ na ị na-arụ wizard ahụ, jiji ka ị na-eme ihe ndị a:

- Ị na-enwe **administrator access** na WordPress installation ha
- File `wp-config.php` na server ha ga-enwe **writable** na-aka web server
- Jiji ka ị nwere **recent backup** na files ha ma database ha

:::warning
Wizard ahụ ga-eme ihe na file `wp-config.php` ha ma na-kụzi ụda (database tables) ọhụrụ. Jiji ka ị na-eme ihe, ị ga-anọ mma ịgba ọsọ akụkọ a.
:::

## Step 1: Welcome (Nkwado) {#step-1-welcome}

Screen ọzọ ahụ ga-enweghị ịgbagwa ihe WordPress Multisite bụ ma ihe wizard ahụ ga-eme:

- Activate feature Multisite na configuration WordPress ha
- Create database tables network ndị dị mma
- Add constants multisite ndị dị mma na `wp-config.php`
- Network-activate Ultimate Multisite na toàn network

![Multisite Setup Wizard - Welcome step](/img/installation/multisite-wizard/wizard-welcome.png)

Click **Continue** (Nkwado) ka ị ga-eme ihe a.

## Step 2: Network Configuration (Configuration Network) {#step-2-network-configuration}

Step a bụ ihe na-agbaje unu settings network ha.

### Site Structure (Structure Site) {#site-structure}

Wilih cách ị chọr ntwork sites ha ọkụ;

- **Sub-domains** (Nwere ike ịrụ) — Sites ji ọkụ ha ọkụ riêng, dị ka `site1.yourdomain.com`
- **Sub-directories** — Sites na-achịrị dịka paths, dị ka `yourdomain.com/site1`

:::note
Ọ bụrụ na ị chọr sub-domains, ị ga-agbanye **wildcard DNS** na **wildcard SSL certificate** maka domain ha. Ọ bụghị ihe ọ bụla ndị nwere WordPress management handle nke a maara. Jiji [Ultimate Multisite 101](./ultimate-multisite-101) maka gị ihe omume dị nche.
:::

### Network Title {#network-title}

Jụrọ onye aka maka network ha. A na-achịrị ya bụ onye aka site anọ ma ọ bụ "Network" ị chọrịta. Ị ga-anọchitere ya anọ m ga-arụ maka settings network.

### Network Admin Email {#network-admin-email}

Email address a na-agbanwe maka obere notification network. A na-achịrị ya bụ email address onye ahụ na-achịrị ya.

![Multisite Setup Wizard - Network Configuration](/img/installation/multisite-wizard/wizard-network-configuration.png)

Ọ bụrụ na ị kpọrọ fields ndị a, chọrọ **Continue** maka ịgba ọsọ.

## Step 3: Installation {#step-3-installation}

Chọrọ button **Install** maka ịbegbụ. The wizard na-arụ ụka ọrụ abụọ dị nche, nke na-achịrị ya anọ m ga-arụ n'ime ihe omume ahụ n'ime wakati ahụ:

![Multisite Setup Wizard - Installation pending](/img/installation/multisite-wizard/wizard-installation-pending.png)

| Bước | Mô tả |
|------|-------------|
| **Bật Multisite** | Thêm hằng số `WP_ALLOW_MULTISITE` vào file `wp-config.php` |
| **Tạo Mạng (Network)** | Tạo các bảng cơ sở dữ liệu multisite (`wp_site`, `wp_sitemeta`, `wp_blogs`, v.v.) và điền cấu hình mạng của bạn vào đó |
| **Cập nhật Cấu hình** | Thêm các hằng số multisite cuối cùng vào `wp-config.php` (`MULTISITE`, `SUBDOMAIN_INSTALL`, `DOMAIN_CURRENT_SITE`, v.v.) |
| **Sửa Cookie** | Đảm bảo URL của trang web là chính xác trong metadata mạng để tránh lỗi xác thực sau khi kích hoạt |
| **Kích hoạt Plugin Mạng** | Kích hoạt Ultimate Multisite để nó chạy trên toàn bộ mạng |

Mỗi bước sẽ hiển thị một trong các trạng thái sau:

- **Pending (Đang chờ)** — Đang đợi được xử lý
- **Installing... (Đang cài đặt...)** — Đang chạy
- **Success! (Thành công!)** — Hoàn tất thành công
- **Error message (Thông báo lỗi)** — Đã xảy ra lỗi (thông báo sẽ mô tả vấn đề)

Khi tất cả các bước hoàn thành thành công, bạn sẽ thấy trạng thái "Success!" màu xanh lá cây cho từng mục:

![Multisite Setup Wizard - Installation complete](/img/installation/multisite-wizard/wizard-installation-complete.png)

Sau đó, trình hướng dẫn (wizard) sẽ tự động chuyển sang màn hình hoàn tất.

## Bước 4: Hoàn tất {#step-4-complete}

Khi cài đặt hoàn tất, bạn sẽ thấy thông báo thành công xác nhận rằng WordPress Multisite đã được bật.

![Multisite Setup Wizard - Setup Complete](/img/installation/multisite-wizard/wizard-complete.png)

Bây giờ bạn có thể tiếp tục với trình hướng dẫn thiết lập Ultimate Multisite để cấu hình nền tảng WaaS của mình (thông tin công ty, nội dung mặc định, cổng thanh toán, v.v.).

:::note
Depois de a instalação do multisite terminar, o seu navegador será redirecionado através do administrador da rede recém-habilitado. Você pode precisar fazer login novamente porque os cookies de autenticação são atualizados para o ambiente multisite.
:::

## Plano B: Configuração Manual (Fallback) {#manual-setup-fallback}

Se o assistente não conseguir escrever no seu arquivo `wp-config.php` (por causa das permissões do arquivo ou restrições do servidor), ele mostrará o código exato que você precisa adicionar manualmente:

1. As **constantes do wp-config.php** que precisam ser adicionadas acima da linha `/* Isso é tudo, pare de editar! */`.
2. As **regras de reescrita .htaccess** apropriadas para a estrutura do seu site escolhida (subdomínio ou subdiretório).

Depois de fazer as alterações manuais, atualize a página e o assistente detectará que o multisite agora está ativo.

## Solução de Problemas (Troubleshooting) {#troubleshooting}

### O assistente diz que wp-config.php não pode ser escrito {#the-wizard-says-wp-configphp-is-not-writable}

O processo do seu servidor web precisa ter permissão de escrita no arquivo `wp-config.php`. Você pode fazer uma destas coisas:

- Mudar temporariamente as permissões do arquivo para `644` ou `666`.
- Usar as instruções de configuração manual fornecidas pelo assistente.
- Pedir ajuda ao seu provedor de hospedagem.

### Os sites não estão acessíveis depois da configuração (subdomínios) {#sites-are-not-accessible-after-setup-subdomains}

Se você escolheu a estrutura de subdomínio, você precisa configurar o **DNS curinga (wildcard DNS)** para o seu domínio. Adicione um registro DNS:

```
Type: A (ou CNAME)
Host: *
Value: [seu IP do servidor]
```

Verifique com o seu provedor de hospedagem se não tem certeza de como configurar isso.

### Problemas de autenticação depois da configuração {#authentication-issues-after-setup}

Se você estiver desconectado ou tiver problemas com cookies após a configuração do multisite:

1. Limpe os cookies do seu navegador para o site.
2. Faça login novamente em `yourdomain.com/wp-login.php`.
3. Se o problema persistir, verifique se o seu `wp-config.php` não tem `COOKIE_DOMAIN` definido como `false` — este é um problema conhecido nas instalações de multisite com subdomínio.

### Uma etapa falhou durante a instalação {#a-step-failed-during-installation}

Ọ bụrụ na ọ nọ nchekwa installation-ah ọ bụla na-anọ mma:

1. Ọ nọ nchekwa oge a nwere error message ah ị chọrọ.
2. Jụ geri n'ime step configuration ah ma jụ again.
3. He nwere error ah dị, check server PHP error log ah maka details ọzọ.
4. Các bước ah bụ ndị onwe ya na-anọ mma anọ nchekwa a ga-anọ (installer ah bụ idempotent).
