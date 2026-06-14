---
title: Integração RunCloud
sidebar_position: 13
_i18n_hash: 05a61d871e286ae6c87bc7653377dee4
---
# Integração com RunCloud

## Visão Geral
O RunCloud é uma plataforma de gerenciamento de servidor baseada na nuvem que permite implantar e gerenciar facilmente aplicações web nos seus próprios servidores em nuvem. Esta integração habilita a sincronização automática de domínios e o gerenciamento de certificados SSL entre Ultimate Multisite e RunCloud.

## Recursos
- Sincronização automática de domínio
- Gerenciamento de certificado SSL
- Remoção do domínio quando os mapeamentos são excluídos

## Requisitos
As seguintes constantes devem ser definidas no seu arquivo `wp-config.php`:

```php
define('WU_RUNCLOUD_API_KEY', 'sua_api_key');
define('WU_RUNCLOUD_API_SECRET', 'seu_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'seu_server_id');
define('WU_RUNCLOUD_APP_ID', 'seu_app_id');
```

## Instruções de Configuração

### 1. Obtenha suas Credenciais da API do RunCloud

1. Faça login no seu painel (dashboard) do RunCloud
2. Vá para "User Profile" (clique na sua foto de perfil no canto superior direito)
3. Selecione "API" no menu
4. Clique em "Generate API Key" se você ainda não tiver uma
5. Copie sua Chave de API (API Key) e Segredo da API (API Secret)

### 2. Obtenha seus IDs do Servidor e Aplicativo

1. No seu painel do RunCloud, vá para "Servers" (Servidores)
2. Selecione o servidor onde seu multisite WordPress está hospedado
3. O ID do Servidor é visível na URL: `https://manage.runcloud.io/servers/{SERVER_ID}`
4. Vá para "Web Applications" e selecione sua aplicação WordPress
5. O ID da Aplicação (App ID) é visível na URL: `https://manage.runcloud.io/servers/{SERVER_ID}/apps/{APP_ID}`

### 3. Adicione as Constantes ao wp-config.php

Adicione as seguintes constantes ao seu arquivo `wp-config.php`:

```php
define('WU_RUNCLOUD_API_KEY', 'sua_api_key');
define('WU_RUNCLOUD_API_SECRET', 'seu_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'seu_server_id');
define('WU_RUNCLOUD_APP_ID', 'seu_app_id');
```

### 4. Habilite a Integração

1. No seu painel de administração do WordPress, vá para Ultimate Multisite > Settings (Configurações)
2. Navegue até a aba "Domain Mapping" (Mapeamento de Domínio)
3. Role para baixo até "Host Integrations" (Integrações de Hospedagem)
4. Ative a integração RunCloud
5. Clique em "Save Changes" (Salvar Alterações)

## Como Funciona

Quando um domínio é mapeado no Ultimate Multisite:

1. A integração envia uma requisição para a API da RunCloud para adicionar o domínio à sua aplicação
2. Se o domínio for adicionado com sucesso, a integração também irá redistribuir os certificados SSL
3. Quando um mapeamento de domínio é removido, a integração removerá o domínio da RunCloud

Para instalações de subdomínios, a integração cuidará automaticamente da criação dos subdomínios na RunCloud quando novos sites forem adicionados à sua rede.

## Solução de Problemas

### Problemas de Conexão da API
- Verifique se suas credenciais da API estão corretas
- Confirme se seus IDs do servidor e da aplicação estão corretos
- Certifique-se de que sua conta RunCloud tenha as permissões necessárias

### Problemas com o Certificado SSL
- A RunCloud pode levar algum tempo para emitir os certificados SSL
- Verifique se seus domínios estão apontando corretamente para o endereço IP do seu servidor
- Verifique as configurações de SSL da RunCloud para a sua aplicação

### Domínio Não Adicionado
- Verifique os logs do Ultimate Multisite em busca de quaisquer mensagens de erro
- Confirme se o domínio ainda não foi adicionado à RunCloud
- Certifique-se de que seu plano RunCloud suporta múltiplos domínios
