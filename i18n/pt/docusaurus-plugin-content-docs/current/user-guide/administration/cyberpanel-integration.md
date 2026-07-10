---
title: Integração com CyberPanel
sidebar_position: 21
_i18n_hash: d0607874b556c583dac2aaa33ba1dc1d
---
# Integração com CyberPanel {#cyberpanel-integration}

Este guia explica como configurar a integração Ultimate Multisite CyberPanel para que os domínios mapeados na sua rede sejam automaticamente adicionados (e removidos) como hosts virtuais no CyberPanel, com provisionamento opcional de auto-SSL via Let's Encrypt.

## O Que Ela Faz {#what-it-does}

- Quando um domínio é mapeado no Ultimate Multisite, a integração chama a API do CyberPanel para criar um host virtual para esse domínio.
- Quando um mapeamento de domínio é removido, a integração chama a API para excluir o host virtual correspondente.
- Quando o auto-SSL está ativado, a integração aciona a emissão de certificado Let's Encrypt imediatamente após a criação do host virtual.
- Adiciona/remove opcionalmente o alias `www.` dependendo da sua configuração "Auto-create www subdomain" nas configurações de Mapeamento de Domínio.

## Pré-requisitos {#prerequisites}

- Uma instância do CyberPanel em execução (recomendado v2.3 ou superior) acessível a partir do seu servidor WordPress.
- Um site existente no CyberPanel que já sirva a raiz da sua rede WordPress. A integração anexa novos hosts virtuais a este servidor.
- Acesso à API do CyberPanel habilitado. A autenticação usa seu nome de usuário e senha de administrador do CyberPanel.
- Seus registros DNS para os domínios mapeados devem já apontar para o endereço IP do seu servidor antes que o auto-SSL possa emitir um certificado válido.

## Requisitos {#requirements}

As seguintes constantes devem ser definidas no seu arquivo `wp-config.php`:

```php
define('WU_CYBERPANEL_HOST', 'https://seu-host-cyberpanel:8090');
define('WU_CYBERPANEL_USERNAME', 'seu_nome_de_usuario_admin');
define('WU_CYBERPANEL_PASSWORD', 'sua_senha_admin');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Opcionalmente, você também pode definir:

```php
define('WU_CYBERPANEL_AUTO_SSL', true);          // Padrão: true — emita o SSL Let's Encrypt após a criação do domínio
define('WU_CYBERPANEL_PHP_VERSION', 'PHP 8.2');  // Padrão: PHP 8.2
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com'); // Usado para contato do certificado SSL
```

## Instruções de Configuração {#setup-instructions}

### 1. Habilitar a API do CyberPanel {#1-enable-the-cyberpanel-api}

1. Faça login no seu painel do CyberPanel como administrador.
2. Vá em **Security** > **SSL** e confirme que o SSL está ativo na interface do próprio CyberPanel (necessário para chamadas de API seguras).
3. A API do CyberPanel está disponível em `https://seu-ip-do-servidor:8090/api/` por padrão. Não são necessárias etapas adicionais para ativá-la — ela já está ativa para usuários administradores.

### 2. Adicionar Constantes ao wp-config.php {#2-add-constants-to-wp-configphp}

Adicione as seguintes constantes ao seu arquivo `wp-config.php` antes da linha `/* Que é tudo, pare de editar! */`:

```php
define('WU_CYBERPANEL_HOST', 'https://seu-host-do-cyberpanel:8090');
define('WU_CYBERPANEL_USERNAME', 'admin');
define('WU_CYBERPANEL_PASSWORD', 'sua_senha_segura');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Para habilitar o auto-SSL (recomendado):

```php
define('WU_CYBERPANEL_AUTO_SSL', true);
define('WU_CYBERPANEL_EMAIL', 'admin@seu-dominio.com');
```

### 3. Habilitar a Integração {#3-enable-the-integration}

1. No seu painel de administração da rede do WordPress, vá em **Ultimate Multisite** > **Settings**.
2. Navegue até a aba **Domain Mapping**.
3. Role para baixo até **Host Integrations**.
4. Ative a integração **CyberPanel**.
5. Clique em **Save Changes** (Salvar Alterações).

### 4. Verificar a Conectividade {#4-verify-connectivity}

Use o teste de conexão integrado no assistente de configurações:

1. Vá em **Ultimate Multisite** > **Settings** > **Domain Mapping** > **Host Integrations** > **CyberPanel**.
2. Clique em **Test Connection**.
3. Uma mensagem de sucesso confirma que o plugin consegue acessar a API do CyberPanel e autenticar corretamente.

## Como Funciona {#how-it-works}

### Mapeamento de Domínio (Domain Mapping) {#domain-mapping}

Quando um domínio é mapeado no Ultimate Multisite:

1. A integração envia uma requisição `POST` para `/api/createWebsite` no seu host CyberPanel.
2. O CyberPanel cria um novo host virtual para o domínio sob o pacote configurado.
3. O diretório raiz (document root) é definido para apontar para o diretório raiz da sua rede WordPress.
4. Quando o mapeamento de domínio é removido, a integração chama `/api/deleteWebsite` para limpar o host virtual.

### Auto-SSL {#auto-ssl}

Quando `WU_CYBERPANEL_AUTO_SSL` está como `true`:

1. Após a criação do host virtual, a integração chama `/api/issueSSL` para o domínio.
2. O CyberPanel solicita um certificado Let's Encrypt usando o desafio ACME HTTP-01.
3. O CyberPanel renova automaticamente o certificado antes da expiração.

> **Importante:** O DNS deve estar totalmente propagado para o endereço IP do seu servidor antes que o Let's Encrypt possa validar o domínio. Se a emissão do SSL falhar imediatamente após o mapeamento, aguarde a propagação do DNS e reative o SSL a partir do painel do CyberPanel em **SSL** > **Manage SSL**.

### Subdomínio www {#www-subdomain}

Se a opção **Auto-create www subdomain** estiver ativada nas configurações de Mapeamento de Domínio, a integração também cria um alias de host virtual para `www.<domain>` e, quando o Auto-SSL está ligado, emite um certificado que cobre tanto as variantes raiz quanto as do www.

### Forwarders de E-mail {#email-forwarders}

Quando o addon [Ultimate Multisite: Emails](../../addons/ultimate-multisite-emails/) estiver ativo, o CyberPanel também pode fornecer redirecionadores de e-mail para clientes. Os redirecionadores encaminham mensagens de um endereço de domínio para outra caixa de entrada sem criar uma caixa de correio completa, o que é útil para aliases como `info@customer-domain.test` ou `support@customer-domain.test`.

Antes de habilitar os redirecionadores para os clientes:

1. Confirme se as constantes do CyberPanel acima estão configuradas e se o teste de conexão passa.
2. Habilite o provedor de e-mail do CyberPanel nas configurações do addon Emails.
3. Confirme se o domínio do cliente já existe no CyberPanel antes de criar o redirecionador.
4. Crie um redirecionador de teste e envie uma mensagem através dele antes de oferecer o recurso nos planos de produção.

Se a criação do redirecionador falhar, verifique primeiro os logs de atividade do Ultimate Multisite e, em seguida, confirme no CyberPanel se o domínio de origem existe e se o usuário da API tem permissões de gerenciamento de e-mail.

## Referência de Configuração {#configuration-reference}

| Constante | Obrigatório | Padrão | Descrição |
|---|---|---|---|
| `WU_CYBERPANEL_HOST` | Sim | — | URL completa da sua instância do CyberPanel incluindo a porta, ex: `https://cp.example.com:8090` |
| `WU_CYBERPANEL_USERNAME` | Sim | — | Nome de usuário administrador do CyberPanel |
| `WU_CYBERPANEL_PASSWORD` | Sim | — | Senha do administrador do CyberPanel |
| `WU_CYBERPANEL_PACKAGE` | Sim | `Default` | Pacote de hospedagem do CyberPanel a ser atribuído aos novos hosts virtuais |
| `WU_CYBERPANEL_AUTO_SSL` | Não | `true` | Emitir um certificado SSL Let's Encrypt após a criação do domínio |
| `WU_CYBERPANEL_PHP_VERSION` | Não | `PHP 8.2` | Versão do PHP para novos hosts virtuais (deve corresponder a uma versão instalada no CyberPanel) |
| `WU_CYBERPANEL_EMAIL` | Não | — | E-mail de contato para registro de certificado SSL |

## Observações Importantes {#important-notes}

A API do CyberPanel usa autenticação baseada em token de sessão. A integração lida com a aquisição automática do token em cada chamada da API.
- Sua conta de administrador do CyberPanel deve ter permissões para criar e excluir websites.
- O CyberPanel roda na porta `8090` por padrão. Se o seu servidor usa um firewall, certifique-se de que esta porta esteja acessível pelo servidor da aplicação WordPress.
- A integração não gerencia registros DNS. Você deve apontar os DNS do domínio para o endereço IP do seu servidor antes de mapear o domínio no Ultimate Multisite.
- Se você usar OpenLiteSpeed (OLS), uma reinicialização graciosa é acionada automaticamente após alterações no virtual host. Não é necessária intervenção manual.

## Solução de Problemas {#troubleshooting}

### Conexão da API Recusada {#api-connection-refused}

- Verifique se a porta `8090` está aberta no firewall do seu servidor.
- Confirme se o valor de `WU_CYBERPANEL_HOST` inclui o protocolo correto (`https://`) e a porta.
- Verifique se o certificado SSL do seu CyberPanel é válido; certificados autoassinados podem causar falhas na verificação TLS. Defina `WU_CYBERPANEL_VERIFY_SSL` como `false` apenas em ambientes de rede privada confiáveis.

### Erros de Autenticação {#authentication-errors}

- Confirme se seu `WU_CYBERPANEL_USERNAME` e `WU_CYBERPANEL_PASSWORD` estão corretos fazendo login diretamente no CyberPanel.
- O CyberPanel bloqueia contas após tentativas repetidas de login falhas. Verifique **Security** > **Brute Force Monitor** no CyberPanel se ocorrerem bloqueios.

### Domínio Não Criado {#domain-not-created}

- Verifique o log de atividade do Ultimate Multisite (**Ultimate Multisite** > **Activity Logs**) em busca de mensagens de erro da API.
- Verifique se o pacote definido em `WU_CYBERPANEL_PACKAGE` existe no CyberPanel (**Packages** > **List Packages**).
- Certifique-se de que o domínio não esteja já registrado como um website no CyberPanel — a criação duplicada do website retorna um erro.

### Certificado SSL Não Emitido {#ssl-certificate-not-issued}

- Confirme se o DNS propagou completamente: `dig +short seu-dominio.com` deve retornar o IP do seu servidor.
- O Let's Encrypt impõe limites de taxa (rate limits). Se você emitiu vários certificados recentemente para o mesmo domínio, espere antes de tentar novamente.
- Verifique os logs SSL do CyberPanel na seção **Logs** > **Error Logs** para obter detalhes sobre falhas na emissão do certificado.
- Como alternativa, você pode emitir o SSL manualmente pelo CyberPanel: **SSL** > **Manage SSL** > selecione o domínio > **Issue SSL**.

## Referências {#references}

- Documentação da API do CyberPanel: https://docs.cyberpanel.net/docs/category/api
- Gerenciamento de SSL do CyberPanel: https://docs.cyberpanel.net/docs/cyberpanel/SSL/manageSSL
- Limites de Taxa do Let's Encrypt: https://letsencrypt.org/docs/rate-limits/
