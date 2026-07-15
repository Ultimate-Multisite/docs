---
title: Integração Hostinger (hPanel)
sidebar_position: 7
_i18n_hash: ce631be523b8bbe2bf3156a106abfa3d
---
# Integração com Hostinger (hPanel)

## Visão Geral {#overview}

A Hostinger é uma provedora de hospedagem web popular com um painel de controle moderno chamado hPanel. A integração Ultimate Multisite Hostinger permite a sincronização automática de domínios entre o Ultimate Multisite e o hPanel da Hostinger, possibilitando que você gerencie automaticamente os mapeamentos de domínio e subdomínios diretamente do seu painel WordPress.

## Recursos {#features}

- Criação automática de domínio adicional no hPanel
- Criação automática de subdomínio no hPanel (para instalações de multisite de subdomínio)
- Remoção do domínio quando os mapeamentos são excluídos
- Integração perfeita com a API de gerenciamento de domínios do hPanel

## Requisitos {#requirements}

Para usar a integração Hostinger, você precisa de:

1. Uma conta Hostinger com acesso ao hPanel
2. Um token de API da Hostinger
3. As seguintes constantes definidas no seu arquivo `wp-config.php`:

```php
define('WU_HOSTINGER_API_TOKEN', 'seu_token_api_hostinger');
define('WU_HOSTINGER_ACCOUNT_ID', 'seu_id_conta_hostinger');
```

Opcionalmente, você também pode definir:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1'); // Endpoint de API padrão
```

## Instruções de Configuração {#setup-instructions}

### 1. Gere Seu Token de API da Hostinger {#1-generate-your-hostinger-api-token}

1. Faça login na sua conta Hostinger e acesse o hPanel
2. Navegue até **Configurações da Conta** → **Tokens de API**
3. Clique em **Criar Novo Token**
4. Dê um nome descritivo ao seu token (ex: "Ultimate Multisite")
5. Selecione as permissões necessárias:
   - Gerenciamento de domínio
   - Gerenciamento de subdomínio
6. Copie o token gerado e armazene-o com segurança

### 2. Encontre Seu ID de Conta {#2-find-your-account-id}

1. No hPanel, vá para **Configurações da Conta** → **Informações da Conta**
2. O seu ID de Conta é exibido nesta página
3. Copie e salve este ID para o próximo passo

### 3. Adicione Constantes ao wp-config.php {#3-add-constants-to-wp-configphp}

Adicione as seguintes constantes ao seu arquivo `wp-config.php`:

```php
define('WU_HOSTINGER_API_TOKEN', 'seu_token_api_hostinger');
define('WU_HOSTINGER_ACCOUNT_ID', 'seu_id_conta_hostinger');
```

Se a sua conta Hostinger usa um endpoint de API diferente, você pode personalizá-lo:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1');
```

### 4. Habilitar a Integração {#4-enable-the-integration}

1. No painel de administração do WordPress, vá para **Ultimate Multisite > Settings** (Configurações)
2. Navegue até a aba **Domain Mapping** (Mapeamento de Domínio)
3. Role a tela até **Host Integrations** (Integrações com o Host)
4. Habilite a integração **Hostinger (hPanel)**
5. Clique em **Save Changes** (Salvar Alterações)

## Como Funciona {#how-it-works}

### Domínios Adicionais (Addon Domains) {#addon-domains}

Quando você mapeia um domínio no Ultimate Multisite:

1. A integração envia uma requisição para a API da Hostinger para adicionar o domínio como um domínio adicional
2. O domínio é configurado para apontar para o seu diretório raiz
3. Quando um mapeamento de domínio é removido, a integração remove automaticamente o domínio adicional do hPanel

### Subdomínios {#subdomains}

Para instalações de multisite com subdomínios, quando um novo site é criado:

1. A integração extrai a parte do subdomínio do domínio completo
2. Ela envia uma requisição para a API da Hostinger para adicionar o subdomínio
3. O subdomínio é configurado para apontar para o seu diretório raiz

## Observações Importantes {#important-notes}

- A integração usa a API REST da Hostinger para se comunicar com sua conta
- Seu token de API deve ter as permissões necessárias para gerenciamento de domínio e subdomínios
- A integração não lida com a configuração de DNS; os domínios devem já estar apontando para sua conta Hostinger
- As requisições à API são feitas de forma segura via HTTPS
- Mantenha seu token de API seguro e nunca o compartilhe publicamente

## Solução de Problemas {#troubleshooting}

### Problemas de Conexão da API {#api-connection-issues}

Verifique se seu token de API está correto e não expirou
Verifique se o seu ID de Conta está correto
Certifique-se de que seu token de API tem as permissões necessárias para gerenciamento de domínio
Verifique se sua conta Hostinger está ativa e em boas condições

### Domínio Não Adicionado {#domain-not-added}

- Verifique os logs do Ultimate Multisite em busca de mensagens de erro
- Confirme se o domínio ainda não foi adicionado à sua conta Hostinger
- Certifique-se de que sua conta Hostinger não atingiu o limite para domínios adicionais (addon domains)
- Confirme se o domínio está corretamente apontado para os servidores de nomes (nameservers) da Hostinger

### Problemas com o Certificado SSL {#ssl-certificate-issues}

- A integração não lida com a emissão de certificados SSL
- A Hostinger geralmente fornece certificados SSL gratuitos através do AutoSSL
- Você pode gerenciar certificados SSL diretamente no hPanel em **SSL/TLS**
- Alternativamente, use o Let's Encrypt com o recurso AutoSSL da Hostinger

## Suporte {#support}

Para obter ajuda adicional com a integração da Hostinger, consulte:

- [Documentação da API da Hostinger](https://support.hostinger.com/en/articles/4286-api-documentation)
- [Documentação do Ultimate Multisite](/)
- [Suporte ao Ultimate Multisite](https://ultimatemultisite.com/support)
