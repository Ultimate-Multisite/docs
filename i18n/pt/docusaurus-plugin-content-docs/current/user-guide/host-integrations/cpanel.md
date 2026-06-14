---
title: Integração cPanel
sidebar_position: 5
_i18n_hash: ba79fa3cffb0f29c4eda9bdf59244a2f
---
# Integração com cPanel

## Visão Geral
O cPanel é um dos painéis de controle de hospedagem mais populares usados por muitos provedores de hospedagem compartilhada e dedicada. Esta integração permite a sincronização automática de domínios entre o Ultimate Multisite e o cPanel, possibilitando que você adicione automaticamente aliases de domínio e subdomínios à sua conta do cPanel.

## Recursos
- Criação automática de addon domain no cPanel
- Criação automática de subdomain no cPanel (para instalações de multisite de subdomínio)
- Remoção do domínio quando os mapeamentos são excluídos

## Requisitos
As seguintes constantes devem ser definidas no seu arquivo `wp-config.php`:

```php
define('WU_CPANEL_USERNAME', 'seu_nome_de_usuario_cpanel');
define('WU_CPANEL_PASSWORD', 'sua_senha_cpanel');
define('WU_CPANEL_HOST', 'seu_host_cpanel');
```

Opcionalmente, você também pode definir:

```php
define('WU_CPANEL_PORT', 2083); // O padrão é 2083
define('WU_CPANEL_ROOT_DIR', '/public_html'); // O padrão é /public_html
```

## Instruções de Configuração

### 1. Obtenha suas Credenciais do cPanel

1. Obtenha seu nome de usuário e senha do cPanel do seu provedor de hospedagem
2. Determine o host do seu cPanel (geralmente `cpanel.seu-dominio.com` ou `seu-dominio.com:2083`)

### 2. Adicione as Constantes ao wp-config.php

Adicione as seguintes constantes ao seu arquivo `wp-config.php`:

```php
define('WU_CPANEL_USERNAME', 'seu_nome_de_usuario_cpanel');
define('WU_CPANEL_PASSWORD', 'sua_senha_cpanel');
define('WU_CPANEL_HOST', 'seu_host_cpanel');
```

Opcionalmente, você pode personalizar a porta e o diretório raiz:

```php
define('WU_CPANEL_PORT', 2083); // Mude se o seu cPanel usar uma porta diferente
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Mude se a sua raiz de documentos for diferente
```

### 3. Habilite a Integração

1. No painel de administração do WordPress, vá para Ultimate Multisite > Configurações
2. Navegue até a aba "Domain Mapping" (Mapeamento de Domínio)
3. Role para baixo até "Host Integrations" (Integrações de Hospedagem)
4. Habilite a integração com o cPanel
5. Clique em "Save Changes" (Salvar Alterações)

## Como Funciona

### Domínios Adicionais (Addon Domains)

Quando um domínio é mapeado no Ultimate Multisite:

1. A integração envia uma solicitação para a API do cPanel para adicionar o domínio como um domínio adicional
2. O domínio é configurado para apontar para o seu diretório raiz
3. Quando um mapeamento de domínio é removido, a integração removerá o domínio adicional do cPanel

### Subdomínios (Subdomains)

Para instalações de multisite com subdomínios, quando um novo site é criado:

1. A integração extrai a parte do subdomínio do domínio completo
2. Ela envia uma solicitação para a API do cPanel para adicionar o subdomínio
3. O subdomínio é configurado para apontar para o seu diretório raiz

## Observações Importantes

- A integração usa a API2 do cPanel para se comunicar com sua conta do cPanel
- Sua conta do cPanel deve ter permissões para adicionar domínios adicionais e subdomínios
- Alguns provedores de hospedagem podem limitar o número de domínios adicionais ou subdomínios que você pode criar
- A integração não lida com a configuração de DNS; você ainda precisa apontar seus domínios para o endereço IP do seu servidor

## Solução de Problemas (Troubleshooting)

### Problemas de Conexão da API
- Verifique se seu nome de usuário e senha do cPanel estão corretos
- Verifique se seu host do cPanel está correto e acessível
- Certifique-se de que sua conta do cPanel tem as permissões necessárias
- Tente usar o URL completo para o host (ex: `https://cpanel.seu-dominio.com`)

### Domínio Não Adicionado
- Verifique os logs do Ultimate Multisite em busca de quaisquer mensagens de erro
- Verifique se o domínio ainda não foi adicionado ao cPanel
- Certifique-se de que sua conta do cPanel não atingiu seu limite para domínios adicionais ou subdomínios

### Problemas com Certificado SSL
- A integração não lida com a emissão de certificados SSL.
- Você precisará usar as ferramentas SSL/TLS do cPanel ou o recurso AutoSSL para emitir certificados SSL para seus domínios.
- Alternativamente, você pode usar um serviço como Let's Encrypt com o AutoSSL do cPanel.
