---
title: Integração CyberPanel
sidebar_position: 21
_i18n_hash: d0607874b556c583dac2aaa33ba1dc1d
---
# Integração com CyberPanel

Este guia explica como configurar a integração Ultimate Multisite CyberPanel para que os domínios mapeados em sua rede sejam adicionados (e removidos) automaticamente como hosts virtuais no CyberPanel, com provisionamento opcional de SSL automático via Let's Encrypt.

## O Que Faz

- Quando um domínio é mapeado no Ultimate Multisite, a integração chama a API do CyberPanel para criar um host virtual para esse domínio.
- Quando um mapeamento de domínio é removido, a integração chama a API para excluir o host virtual correspondente.
- Quando o SSL automático é ativado, a integração dispara a emissão do certificado Let's Encrypt imediatamente após a criação do host virtual.
- Adiciona/remove opcionalmente o alias `www.` dependendo da sua configuração "Auto-create www subdomain" (Criar subdomínio www automaticamente) nas configurações de Mapeamento de Domínio.

## Pré-requisitos

- Uma instância CyberPanel em execução (recomendado v2.3 ou posterior) acessível a partir do seu servidor WordPress.
- Um site existente no CyberPanel que já atenda à raiz da sua rede WordPress. A integração anexará novos hosts virtuais a este servidor.
- Acesso à API do CyberPanel ativado. A autenticação utiliza seu nome de usuário e senha de administrador do CyberPanel.
- Seus registros DNS para os domínios mapeados já devem apontar para o endereço IP do seu servidor antes que o SSL automático possa emitir um certificado válido.

## Requisitos

As seguintes constantes devem ser definidas no seu arquivo `wp-config.php`:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'your_admin_username');
define('WU_CYBERPANEL_PASSWORD', 'your_admin_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Opcionalmente, você também pode definir:

```php
define('WU_CYBERPANEL_AUTO_SSL', true);          // Padrão: true — emite SSL Let's Encrypt após a criação do domínio
define('WU_CYBERPANEL_PHP_VERSION', 'PHP 8.2');  // Padrão: PHP 8.2
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com'); // Usado para contato do certificado SSL
```

## Instruções de Configuração

### 1. Ativar a API do CyberPanel

1. Faça login no painel de controle (dashboard) do CyberPanel como administrador.
2. Vá para **Security** > **SSL** e confirme que o SSL está ativo na própria interface do CyberPanel (necessário para chamadas de API seguras).
3. A API do CyberPanel está disponível por padrão em `https://your-server-ip:8090/api/`. Não são necessários passos adicionais para ativá-la — ela está ativa por padrão para usuários administradores.

### 2. Adicionar Constantes ao wp-config.php

Adicione as seguintes constantes ao seu arquivo `wp-config.php` antes da linha `/* That's all, stop editing! */`:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'admin');
define('WU_CYBERPANEL_PASSWORD', 'your_secure_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Para ativar o SSL automático (recomendado):

```php
define('WU_CYBERPANEL_AUTO_SSL', true);
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com');
```

### 3. Ativar a Integração

1. No painel de administração da sua rede WordPress, vá para **Ultimate Multisite** > **Settings**.
2. Navegue até a aba **Domain Mapping**.
3. Role para baixo até **Host Integrations**.
4. Ative a integração **CyberPanel**.
5. Clique em **Save Changes** (Salvar Alterações).

### 4. Verificar a Conectividade

Use o teste de conexão embutido no assistente de configurações:

1. Vá para **Ultimate Multisite** > **Settings** > **Domain Mapping** > **Host Integrations** > **CyberPanel**.
2. Clique em **Test Connection** (Testar Conexão).
3. Uma mensagem de sucesso confirma que o plugin consegue alcançar a API do CyberPanel e se autenticar corretamente.

## Como Funciona

### Mapeamento de Domínio

Quando um domínio é mapeado no Ultimate Multisite:

1. A integração envia uma requisição `POST` para `/api/createWebsite` no seu host CyberPanel.
2. O CyberPanel cria um novo host virtual para o domínio sob o pacote configurado.
3. O diretório raiz é definido para apontar para o diretório raiz da sua rede WordPress.
4. Quando o mapeamento de domínio é removido, a integração chama `/api/deleteWebsite` para limpar o host virtual.

### SSL Automático (Auto-SSL)

Quando `WU_CYBERPANEL_AUTO_SSL` é `true`:

1. Após a criação do host virtual, a integração chama `/api/issueSSL` para o domínio.
2. O CyberPanel solicita um certificado Let's Encrypt usando o desafio ACME HTTP-01.
3. O certificado é renovado automaticamente pelo CyberPanel antes do vencimento.

> **Importante:** O DNS deve estar totalmente propagado para o endereço IP do seu servidor antes que o Let's Encrypt possa validar o domínio. Se a emissão do SSL falhar imediatamente após o mapeamento, aguarde a propagação do DNS e reative o SSL a partir do painel do CyberPanel em **SSL** > **Manage SSL**.

### Subdomínio www

Se **Auto-create www subdomain** (Criar subdomínio www automaticamente) estiver ativado nas suas configurações de Mapeamento de Domínio, a integração também cria um alias de host virtual para `www.<domínio>` e, quando o SSL automático está ativo, emite um certificado que cobre tanto o domínio principal quanto o `www`.

### Encaminhadores de E-mail

Quando o addon [Ultimate Multisite: Emails](../../addons/ultimate-multisite-emails/) está ativo, o CyberPanel também pode fornecer encaminhadores de e-mail para clientes. Os encaminhadores roteiam mensagens de um endereço de domínio para outra caixa de entrada sem criar uma caixa de correio completa, o que é útil para aliases como `info@customer-domain.test` ou `support@customer-domain.test`.

Antes de ativar os encaminhadores para clientes:

1. Confirme se as constantes do CyberPanel acima estão configuradas e se o teste de conexão foi bem-sucedido.
2. Ative o provedor de e-mail do CyberPanel nas configurações do addon Emails.
3. Confirme se o domínio do cliente já existe no CyberPanel antes de criar o encaminhador.
4. Crie um encaminhador de teste e envie uma mensagem por ele antes de oferecer o recurso em planos de produção.

Se a criação do encaminhador falhar, verifique primeiro os logs de atividade do Ultimate Multisite, e depois confirme no CyberPanel que o domínio de origem existe e que o usuário da API tem permissões de gerenciamento de e-mail.

## Referência de Configuração

| Constante | Obrigatório | Padrão | Descrição |
|---|---|---|---|
| `WU_CYBERPANEL_HOST` | Sim | — | URL completa para sua instância CyberPanel, incluindo porta, ex: `https://cp.example.com:8090` |
| `WU_CYBERPANEL_USERNAME` | Sim | — | Nome de usuário administrador do CyberPanel |
| `WU_CYBERPANEL_PASSWORD` | Sim | — | Senha de administrador do CyberPanel |
| `WU_CYBERPANEL_PACKAGE` | Sim | `Default` | Pacote de hospedagem do CyberPanel a ser atribuído aos novos hosts virtuais |
| `WU_CYBERPANEL_AUTO_SSL` | Não | `true` | Emite um certificado SSL Let's Encrypt após a criação do domínio |
| `WU_CYBERPANEL_PHP_VERSION` | Não | `PHP 8.2` | Versão do PHP para novos hosts virtuais (deve corresponder a uma versão instalada no CyberPanel) |
| `WU_CYBERPANEL_EMAIL` | Não | — | E-mail de contato para registro do certificado SSL |

## Notas Importantes

- A API do CyberPanel usa autenticação por token baseada em sessão. A integração lida com a aquisição do token automaticamente em cada chamada de API.
- Sua conta de administrador do CyberPanel deve ter permissões para criar e excluir sites.
- O CyberPanel roda na porta `8090` por padrão. Se o seu servidor usar um firewall, certifique-se de que esta porta esteja acessível a partir do servidor de aplicação WordPress.
- A integração não gerencia registros DNS. Você deve apontar o DNS do domínio para o endereço IP do seu servidor antes de mapear o domínio no Ultimate Multisite.
- Se você usar OpenLiteSpeed (OLS), um reinício suave é acionado automaticamente após as alterações do host virtual. Nenhuma intervenção manual é necessária.

## Solução de Problemas

### Conexão API Recusada

- Verifique se a porta `8090` está aberta no firewall do seu servidor.
- Confirme se o valor `WU_CYBERPANEL_HOST` inclui o protocolo correto (`https://`) e a porta.
- Verifique se o certificado SSL do seu CyberPanel é válido; certificados autoassinados podem causar falhas de verificação TLS. Defina `WU_CYBERPANEL_VERIFY_SSL` como `false` apenas em ambientes de rede privada confiáveis.

### Erros de Autenticação

- Confirme se seu `WU_CYBERPANEL_USERNAME` e `WU_CYBERPANEL_PASSWORD` estão corretos, fazendo login no CyberPanel diretamente.
- O CyberPanel bloqueia contas após várias tentativas de login malsucedidas. Verifique **Security** > **Brute Force Monitor** no CyberPanel se ocorrerem bloqueios.

### Domínio Não Criado

- Verifique o log de atividade do Ultimate Multisite (**Ultimate Multisite** > **Activity Logs**) em busca de mensagens de erro da API.
- Verifique se o pacote definido em `WU_CYBERPANEL_PACKAGE` existe no CyberPanel (**Packages** > **List Packages**).
- Certifique-se de que o domínio não esteja já registrado como um site no CyberPanel — a criação de sites duplicados retorna um erro.

### Certificado SSL Não Emitido

- Confirme se o DNS foi totalmente propagado: `dig +short your-domain.com` deve retornar o IP do seu servidor.
- O Let's Encrypt impõe limites de taxa. Se você emitiu vários certificados para o mesmo domínio recentemente, aguarde antes de tentar novamente.
- Verifique os logs SSL do CyberPanel em **Logs** > **Error Logs** para detalhes sobre falhas na emissão do certificado.
- Como alternativa, você pode emitir o SSL manualmente no CyberPanel: **SSL** > **Manage SSL** > selecione o domínio > **Issue SSL**.

## Referências

- CyberPanel API Documentation: https://docs.cyberpanel.net/docs/category/api
- CyberPanel SSL Management: https://docs.cyberpanel.net/docs/cyberpanel/SSL/manageSSL
- Let's Encrypt Rate Limits: https://letsencrypt.org/docs/rate-limits/
