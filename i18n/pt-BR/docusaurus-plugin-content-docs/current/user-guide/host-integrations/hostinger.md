---
title: Integração Hostinger (hPanel)
sidebar_position: 7
_i18n_hash: ce631be523b8bbe2bf3156a106abfa3d
---
# Integração Hostinger (hPanel) {#hostinger-hpanel-integration}

## Visão Geral {#overview}

Hostinger é um provedor de hospedagem web popular com um painel de controle moderno chamado hPanel. A integração Ultimate Multisite Hostinger permite a sincronização automática de domínios entre o Ultimate Multisite e o hPanel da Hostinger, permitindo que você gerencie mapeamentos de domínio e subdomínios automaticamente diretamente do painel de administração do seu WordPress.

## Recursos {#features}

- Criação automática de domínio addon no hPanel
- Criação automática de subdomínio no hPanel (para instalações multisite de subdomínio)
- Remoção de domínio quando os mapeamentos são excluídos
- Integração perfeita com a API de gerenciamento de domínio do hPanel

## Requisitos {#requirements}

Para usar a integração Hostinger, você precisa de:

1. Uma conta Hostinger com acesso ao hPanel
2. Um token API da Hostinger
3. As seguintes constantes definidas no seu arquivo `wp-config.php`:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

Opcionalmente, você também pode definir:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1'); // Endpoint API padrão
```

## Instruções de Configuração {#setup-instructions}

### 1. Gerar Seu Token API da Hostinger {#1-generate-your-hostinger-api-token}

1. Faça login na sua conta Hostinger e acesse o hPanel
2. Navegue até **Account Settings** → **API Tokens**
3. Clique em **Create New Token**
4. Dê um nome descritivo ao seu token (ex: "Ultimate Multisite")
5. Selecione as permissões necessárias:
   - Gerenciamento de domínio
   - Gerenciamento de subdomínio
6. Copie o token gerado e armazene-o em local seguro

### 2. Encontrar Seu ID de Conta {#2-find-your-account-id}

1. No hPanel, vá para **Account Settings** → **Account Information**
2. Seu ID de Conta é exibido nesta página
3. Copie e salve este ID para o próximo passo

### 3. Adicionar Constantes ao wp-config.php {#3-add-constants-to-wp-configphp}

Adicione as seguintes constantes ao seu arquivo `wp-config.php`:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

Se a sua conta Hostinger usar um endpoint API diferente, você pode personalizá-lo:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1');
```

### 4. Ativar a Integração {#4-enable-the-integration}

1. No painel do WordPress, vá para **Ultimate Multisite > Settings**
2. Navegue até a aba **Domain Mapping**
3. Role para baixo até **Host Integrations**
4. Ative a integração **Hostinger (hPanel)**
5. Clique em **Save Changes**

## Como Funciona {#how-it-works}

### Domínios Addon {#addon-domains}

Quando você mapeia um domínio no Ultimate Multisite:

1. A integração envia uma requisição para a API da Hostinger para adicionar o domínio como um domínio addon
2. O domínio é configurado para apontar para o seu diretório raiz
3. Quando um mapeamento de domínio é removido, a integração remove automaticamente o domínio addon do hPanel

### Subdomínios {#subdomains}

Para instalações multisite de subdomínio, quando um novo site é criado:

1. A integração extrai a parte do subdomínio do domínio completo
2. Ela envia uma requisição para a API da Hostinger para adicionar o subdomínio
3. O subdomínio é configurado para apontar para o seu diretório raiz

## Notas Importantes {#important-notes}

- A integração usa a REST API da Hostinger para se comunicar com sua conta
- Seu token API deve ter as permissões necessárias para gerenciamento de domínio e subdomínio
- A integração não lida com a configuração de DNS; os domínios devem já estar apontados para a sua conta Hostinger
- As requisições API são feitas de forma segura via HTTPS
- Mantenha seu token API seguro e nunca o compartilhe publicamente

## Solução de Problemas {#troubleshooting}

### Problemas de Conexão API {#api-connection-issues}

- Verifique se o seu token API está correto e não expirou
- Confirme se o seu Account ID está correto
- Certifique-se de que o seu token API tem as permissões necessárias para gerenciamento de domínio
- Verifique se a sua conta Hostinger está ativa e em boas condições

### Domínio Não Adicionado {#domain-not-added}

- Verifique os logs do Ultimate Multisite em busca de quaisquer mensagens de erro
- Confirme se o domínio não foi adicionado anteriormente à sua conta Hostinger
- Certifique-se de que a sua conta Hostinger não atingiu o limite de domínios addon
- Confirme que o domínio está apontado corretamente para os nameservers da Hostinger

### Problemas com Certificado SSL {#ssl-certificate-issues}

- A integração não lida com a emissão de certificados SSL
- A Hostinger geralmente fornece certificados SSL gratuitos através do AutoSSL
- Você pode gerenciar certificados SSL diretamente no hPanel, em **SSL/TLS**
- Alternativamente, use o Let's Encrypt com o recurso AutoSSL da Hostinger

## Suporte {#support}

Para ajuda adicional com a integração Hostinger, consulte:

- [Hostinger API Documentation](https://support.hostinger.com/en/articles/4286-api-documentation)
- [Ultimate Multisite Documentation](/)
- [Ultimate Multisite Support](https://ultimatemultisite.com/support)
