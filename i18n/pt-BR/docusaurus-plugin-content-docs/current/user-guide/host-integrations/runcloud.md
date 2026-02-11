---
title: Integração com RunCloud
sidebar_position: 13
_i18n_hash: 05a61d871e286ae6c87bc7653377dee4
---
# Integração RunCloud

## Visão geral
RunCloud é uma plataforma de gerenciamento de servidores baseada em nuvem que permite implantar e gerenciar aplicações web em seus próprios servidores na nuvem. Esta integração permite sincronização automática de domínios e gerenciamento de certificados SSL entre Ultimate Multisite e RunCloud.

## Funcionalidades
- Sincronização automática de domínios
- Gerenciamento de certificados SSL
- Remoção de domínio quando mapeamentos são excluídos

## Requisitos
As seguintes constantes devem ser definidas em seu arquivo `wp-config.php`:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

## Instruções de Configuração

### 1. Obtenha suas credenciais de API do RunCloud

1. Faça login no seu painel RunCloud
2. Vá para "Perfil do Usuário" (clique na sua foto de perfil no canto superior direito)
3. Selecione "API" no menu
4. Clique em "Gerar Chave de API" se você ainda não tem uma
5. Copie sua Chave de API e Segredo de API

### 2. Obtenha seus IDs de Servidor e Aplicativo

1. No seu painel RunCloud, vá para "Servers"
2. Selecione o servidor onde seu WordPress multisite está hospedado
3. O ID do Servidor está visível na URL: `https://manage.runcloud.io/servers/{SERVER_ID}`
4. Vá para "Web Applications" e selecione seu aplicativo WordPress
5. O ID do Aplicativo está visível na URL: `https://manage.runcloud.io/servers/{SERVER_ID}/apps/{APP_ID}`

### 3. Adicione as constantes ao wp-config.php

Adicione as seguintes constantes ao seu arquivo `wp-config.php`:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

### 4. Ative a Integração

1. No seu painel WordPress, vá para Ultimate Multisite > Settings
2. Navegue até a aba "Mapeamento de Domínio"
3. Role para baixo até "Integrações de Host"
4. Ative a integração RunCloud
5. Clique em "Salvar Alterações"

## Como Funciona

Quando um domínio é mapeado no Ultimate Multisite:

1. A integração envia uma solicitação para a API do RunCloud para adicionar o domínio ao seu aplicativo
2. Se o domínio for adicionado com sucesso, a integração também redeployará os certificados SSL
3. Quando um mapeamento de domínio é removido, a integração removerá o domínio do RunCloud

Para instalações de subdomínio, a integração lidará automaticamente com a criação de subdomínios no RunCloud quando novos sites forem adicionados à sua rede.

## Solução de Problemas

### Problemas de Conexão com a API
- Verifique se suas credenciais de API estão corretas
- Verifique se seus IDs de servidor e aplicativo estão corretos
- Certifique-se de que sua conta RunCloud tem as permissões necessárias

### Problemas de Certificado SSL
- O RunCloud pode levar algum tempo para emitir certificados SSL
- Verifique se seus domínios estão apontando corretamente para o endereço IP do seu servidor
- Verifique as configurações SSL do RunCloud para o seu aplicativo

### Domínio Não Adicionado
- Verifique os logs do Ultimate Multisite em busca de mensagens de erro
- Verifique se o domínio já não está adicionado ao RunCloud
- Certifique-se de que seu plano RunCloud suporta múltiplos domínios
