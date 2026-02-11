---
title: Integração com cPanel
sidebar_position: 5
_i18n_hash: ba79fa3cffb0f29c4eda9bdf59244a2f
---
# Integração cPanel

## Visão geral
cPanel é um dos painéis de controle de hospedagem web mais populares usados por muitos provedores de hospedagem compartilhada e dedicada. Esta integração permite a sincronização automática de domínios entre Ultimate Multisite e cPanel, permitindo que você adicione automaticamente aliases de domínio e subdomínios à sua conta cPanel.

## Funcionalidades
- Criação automática de domínio adicional no cPanel
- Criação automática de subdomínio no cPanel (para instalações multisite de subdomínio)
- Remoção de domínio quando os mapeamentos são excluídos

## Requisitos
As seguintes constantes devem ser definidas no seu arquivo `wp-config.php`:

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

Opcionalmente, você também pode definir:

```php
define('WU_CPANEL_PORT', 2083); // Default is 2083
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Default is /public_html
```

## Instruções de Configuração

### 1. Obtenha suas credenciais do cPanel

1. Obtenha seu nome de usuário e senha do cPanel do seu provedor de hospedagem
2. Determine seu host do cPanel (geralmente `cpanel.yourdomain.com` ou `yourdomain.com:2083`)

### 2. Adicione Constantes ao wp-config.php

Adicione as seguintes constantes ao seu arquivo `wp-config.php`:

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

Opcionalmente, você pode personalizar a porta e o diretório raiz:

```php
define('WU_CPANEL_PORT', 2083); // Change if your cPanel uses a different port
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Change if your document root is different
```

### 3. Ative a Integração

1. No seu painel do WordPress, vá para Ultimate Multisite > Settings
2. Navegue até a aba "Domain Mapping"
3. Role para baixo até "Host Integrations"
4. Ative a integração cPanel
5. Clique em "Save Changes"

## Como Funciona

### Domínios Adicionais

Quando um domínio é mapeado no Ultimate Multisite:

1. A integração envia uma solicitação à API do cPanel para adicionar o domínio como domínio adicional
2. O domínio é configurado para apontar para o seu diretório raiz
3. Quando um mapeamento de domínio é removido, a integração removerá o domínio adicional do cPanel

### Subdomínios

Para instalações multisite de subdomínio, quando um novo site é criado:

1. A integração extrai a parte do subdomínio do domínio completo
2. Ela envia uma solicitação à API do cPanel para adicionar o subdomínio
3. O subdomínio é configurado para apontar para o seu diretório raiz

## Observações Importantes

- A integração usa a API2 do cPanel para se comunicar com sua conta cPanel
- Sua conta cPanel deve ter permissões para adicionar domínios adicionais e subdomínios
- Alguns provedores de hospedagem podem limitar o número de domínios adicionais ou subdomínios que você pode criar
- A integração não lida com a configuração de DNS; você ainda precisa apontar seus domínios para o endereço IP do seu servidor

## Solução de Problemas

### Problemas de Conexão com a API

- Verifique se seu nome de usuário e senha do cPanel estão corretos
- Verifique se seu host do cPanel está correto e acessível
- Certifique-se de que sua conta cPanel tem as permissões necessárias
- Tente usar a URL completa para o host (por exemplo, `https://cpanel.yourdomain.com`)

### Domínio Não Adicionado

- Verifique os logs do Ultimate Multisite para quaisquer mensagens de erro
- Verifique se o domínio não está já adicionado ao cPanel
- Certifique-se de que sua conta cPanel não atingiu seu limite para domínios adicionais ou subdomínios

### Problemas com Certificado SSL

- A integração não lida com a emissão de certificados SSL
- Você precisará usar as ferramentas SSL/TLS do cPanel ou o recurso AutoSSL para emitir certificados SSL para seus domínios
- Alternativamente, você pode usar um serviço como Let's Encrypt com o AutoSSL do cPanel
