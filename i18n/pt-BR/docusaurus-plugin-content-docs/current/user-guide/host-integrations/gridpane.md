---
title: Integração do GridPane
sidebar_position: 13
_i18n_hash: b0a6427285411feb767e828911cdd794
---
# GridPane Integration

## Visão geral
GridPane é um painel de controle de hospedagem WordPress especializado, criado para profissionais sérios de WordPress. Esta integração permite sincronização automática de domínios e gerenciamento de certificados SSL entre Ultimate Multisite e GridPane.

## Funcionalidades
- Sincronização automática de domínios
- Gerenciamento de certificados SSL
- Configuração automática da constante SUNRISE

## Requisitos
As seguintes constantes devem ser definidas no seu arquivo `wp-config.php`:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_app_id');
```

## Instruções de Configuração

### 1. Obtenha suas credenciais da API GridPane

1. Faça login no seu painel GridPane
2. Vá para "Settings" > "API"
3. Gere uma chave de API se ainda não tiver uma
4. Copie sua chave de API

### 2. Obtenha seus IDs de servidor e site

1. No seu painel GridPane, vá para "Servers"
2. Selecione o servidor onde seu multisite WordPress está hospedado
3. Anote o Server ID (visível na URL ou na página de detalhes do servidor)
4. Vá para "Sites" e selecione seu site WordPress
5. Anote o Site ID (visível na URL ou na página de detalhes do site)

### 3. Adicione Constantes ao wp-config.php

Adicione as seguintes constantes ao seu arquivo `wp-config.php`:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_site_id');
```

### 4. Ative a Integração

1. No seu admin WordPress, vá para Ultimate Multisite > Settings
2. Navegue até a aba "Domain Mapping"
3. Role para baixo até "Host Integrations"
4. Ative a integração GridPane
5. Clique em "Save Changes"

## Como Funciona

Quando um domínio é mapeado no Ultimate Multisite:

1. A integração envia uma solicitação para a API do GridPane para adicionar o domínio ao seu site
2. O GridPane lida automaticamente com a provisão de certificados SSL
3. Quando um mapeamento de domínio é removido, a integração removerá o domínio do GridPane

A integração também lida automaticamente com a constante SUNRISE no seu arquivo wp-config.php, que é necessária para que o mapeamento de domínio funcione corretamente.

## Gerenciamento da Constante SUNRISE

Um recurso único da integração GridPane é que ela reverte automaticamente a constante SUNRISE no wp-config.php para evitar conflitos com o próprio sistema de mapeamento de domínio do GridPane. Isso garante que ambos os sistemas possam funcionar juntos sem problemas.

## Solução de Problemas

### Problemas de Conexão com a API
- Verifique se sua chave de API está correta
- Verifique se seus IDs de servidor e site estão corretos
- Certifique-se de que sua conta GridPane tem as permissões necessárias

### Problemas de Certificado SSL
- O GridPane pode levar algum tempo para emitir certificados SSL
- Verifique se seus domínios estão apontando corretamente para o endereço IP do seu servidor
- Verifique as configurações SSL do GridPane para o seu site

### Domínio Não Adicionado
- Verifique os logs do Ultimate Multisite em busca de mensagens de erro
- Verifique se o domínio já não está adicionado ao GridPane
- Certifique-se de que os registros DNS do seu domínio estão configurados corretamente
