---
title: Integração com GridPane
sidebar_position: 13
_i18n_hash: b0a6427285411feb767e828911cdd794
---
# Integração com o GridPane {#gridpane-integration}

## Visão Geral {#overview}
O GridPane é um painel de controle de hospedagem WordPress especializado, construído para profissionais sérios de WordPress. Esta integração permite a sincronização automática de domínio e o gerenciamento de certificados SSL entre o Ultimate Multisite e o GridPane.

## Recursos {#features}
- Sincronização automática de domínio
- Gerenciamento de certificado SSL
- Configuração automática da constante SUNRISE

## Requisitos {#requirements}
As seguintes constantes devem ser definidas no seu arquivo `wp-config.php`:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'sua_chave_api');
define('WU_GRIDPANE_SERVER_ID', 'seu_id_do_servidor');
define('WU_GRIDPANE_APP_ID', 'seu_site_id');
```

## Instruções de Configuração {#setup-instructions}

### 1. Obtenha suas Credenciais da API do GridPane {#1-get-your-gridpane-api-credentials}

1. Faça login no seu painel do GridPane
2. Vá para "Settings" (Configurações) > "API"
3. Gere uma chave de API se você ainda não tiver uma
4. Copie sua chave de API

### 2. Obtenha seus IDs de Servidor e Site {#2-get-your-server-and-site-ids}

1. No seu painel do GridPane, vá para "Servers" (Servidores)
2. Selecione o servidor onde seu multisite WordPress está hospedado
3. Anote o Server ID (visível na URL ou na página de detalhes do servidor)
4. Vá para "Sites" e selecione seu site WordPress
5. Anote o Site ID (visível na URL ou na página de detalhes do site)

### 3. Adicione as Constantes ao wp-config.php {#3-add-constants-to-wp-configphp}

Adicione as seguintes constantes ao seu arquivo `wp-config.php`:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'sua_chave_api');
define('WU_GRIDPANE_SERVER_ID', 'seu_id_do_servidor');
define('WU_GRIDPANE_APP_ID', 'seu_site_id');
```

### 4. Habilite a Integração {#4-enable-the-integration}

1. No seu painel de administração do WordPress, vá para Ultimate Multisite > Settings (Configurações)
2. Navegue até a aba "Domain Mapping" (Mapeamento de Domínio)
3. Role para baixo até "Host Integrations" (Integrações de Hospedagem)
4. Habilite a integração com o GridPane
5. Clique em "Save Changes" (Salvar Alterações)

## Como Funciona {#how-it-works}

Quando um domínio é mapeado no Ultimate Multisite:

1. A integração envia uma requisição para a API da GridPane para adicionar o domínio ao seu site
2. A GridPane cuida automaticamente do provisionamento do certificado SSL
3. Quando um mapeamento de domínio é removido, a integração removerá o domínio da GridPane

A integração também gerencia automaticamente a constante SUNRISE no seu arquivo wp-config.php, que é necessária para que o mapeamento de domínio funcione corretamente.

## Gerenciamento da Constante SUNRISE {#sunrise-constant-management}

Uma funcionalidade única da integração com a GridPane é que ela reverte automaticamente a constante SUNRISE no wp-config.php para evitar conflitos com o próprio sistema de mapeamento de domínio da GridPane. Isso garante que ambos os sistemas possam funcionar juntos sem problemas.

## Solução de Problemas (Troubleshooting) {#troubleshooting}

### Problemas de Conexão da API {#api-connection-issues}
- Verifique se sua chave de API está correta
- Confirme se seu ID de servidor e site estão corretos
- Certifique-se de que sua conta na GridPane tenha as permissões necessárias

### Problemas com o Certificado SSL {#ssl-certificate-issues}
- A GridPane pode levar algum tempo para emitir os certificados SSL
- Verifique se seus domínios estão apontando corretamente para o endereço IP do seu servidor
- Verifique as configurações de SSL da GridPane para o seu site

### Domínio Não Adicionado {#domain-not-added}
- Verifique os logs do Ultimate Multisite em busca de quaisquer mensagens de erro
- Confirme se o domínio ainda não foi adicionado à GridPane
- Certifique-se de que os registros DNS do seu domínio estão configurados corretamente
