---
title: Integração com Cloudflare
sidebar_position: 16
_i18n_hash: 41bd975db7c89a129f5f880b439a8f2f
---
# Integração Cloudflare

## Visão geral
O Cloudflare é uma rede de entrega de conteúdo (CDN) líder e provedor de segurança que ajuda a proteger e acelerar sites. Esta integração permite o gerenciamento automático de domínios entre Ultimate Multisite e Cloudflare, especialmente para instalações de multisite em subdomínio.

## Funcionalidades
- Criação automática de subdomínio no Cloudflare
- Suporte a subdomínio proxy
- Gerenciamento de registros DNS
- Exibição aprimorada de registros DNS no admin do Ultimate Multisite

## Requisitos
As seguintes constantes devem ser definidas no seu arquivo `wp-config.php`:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_key');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

## Instruções de Configuração

### 1. Obtenha sua Chave API do Cloudflare

1. Faça login no seu painel do Cloudflare
2. Vá para "Meu Perfil" (clique no seu e-mail no canto superior direito)
3. Selecione "Tokens de API" no menu
4. Crie um novo token de API com as seguintes permissões:
   - Zone.Zone: Read
   - Zone.DNS: Edit
5. Copie seu token de API

### 2. Obtenha seu ID de Zona

1. No seu painel do Cloudflare, selecione o domínio que deseja usar
2. O ID da Zona está visível na aba "Visão geral", na barra lateral direita sob "API"
3. Copie o ID da Zona

### 3. Adicione Constantes ao wp-config.php

Adicione as seguintes constantes ao seu arquivo `wp-config.php`:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

### 4. Ative a Integração

1. No seu admin do WordPress, vá para Ultimate Multisite > Configurações
2. Navegue até a aba "Mapeamento de Domínio"
3. Role para baixo até "Integrações de Host"
4. Ative a integração Cloudflare
5. Clique em "Salvar Alterações"

## Como Funciona

### Gerenciamento de Subdomínio

Quando um novo site é criado em uma instalação de multisite em subdomínio:

1. A integração envia uma solicitação à API do Cloudflare para adicionar um registro CNAME para o subdomínio
2. O subdomínio é configurado para ser proxy através do Cloudflare por padrão (isso pode ser alterado com filtros)
3. Quando um site é excluído, a integração removerá o subdomínio do Cloudflare

### Exibição de Registro DNS

A integração aprimora a exibição de registros DNS no admin do Ultimate Multisite ao:

1. Buscar registros DNS diretamente do Cloudflare
2. Exibir se os registros são proxy ou não
3. Exibir informações adicionais sobre os registros DNS

## Observações Importantes

A partir das recentes atualizações do Cloudflare, o proxy de curingas agora está disponível para todos os clientes. Isso significa que a integração Cloudflare é menos crítica para instalações de multisite em subdomínio do que costumava ser, pois você pode simplesmente configurar um registro DNS de curinga no Cloudflare.

## Solução de Problemas

### Problemas de Conexão API

- Verifique se seu token de API está correto e tem as permissões necessárias
- Verifique se seu ID de Zona está correto
- Certifique-se de que sua conta Cloudflare tem as permissões necessárias

### Subdomínio Não Adicionado

- Verifique os logs do Ultimate Multisite em busca de mensagens de erro
- Verifique se o subdomínio já não está adicionado ao Cloudflare
- Certifique-se de que seu plano Cloudflare suporte o número de registros DNS que você está criando

### Problemas de Proxy

- Se você não quiser que os subdomínios sejam proxy, pode usar o filtro `wu_cloudflare_should_proxy`
- Alguns recursos podem não funcionar corretamente quando proxy (por exemplo, certas funções de admin do WordPress)
- Considere usar as Regras de Página do Cloudflare para contornar o cache para páginas de admin
