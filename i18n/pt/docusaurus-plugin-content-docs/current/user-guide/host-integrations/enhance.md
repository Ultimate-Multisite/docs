---
title: Melhorar a Integração do Painel de Controle
sidebar_position: 2
_i18n_hash: 2b4047e6b7b32a1c96a0b562e251cbfb
---
# Melhorar a Integração com o Painel de Controle

## Visão Geral
O Enhance é um painel de controle moderno que oferece recursos poderosos de automação e gerenciamento de hospedagem. Esta integração permite a sincronização automática de domínios e o gerenciamento de certificados SSL entre o Ultimate Multisite e o Enhance Control Panel.

**Discussão Relacionada:** Veja [GitHub Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265) para dicas da comunidade e informações adicionais.

## Recursos
- Sincronização automática de domínios quando os domínios são mapeados no Ultimate Multisite
- Provisionamento automático de certificado SSL via LetsEncrypt quando o DNS é resolvido
- Suporte a subdomínios para redes rodando em modo de subdomínio
- Remoção do domínio quando os mapeamentos são excluídos
- Teste de conexão para verificar as credenciais da API

## Requisitos

### Requisitos do Sistema
- Enhance Control Panel instalado e acessível
- Instalação do WordPress Multisite hospedada em ou conectada a um servidor Enhance
- Servidor web Apache (o Enhance suporta configurações Apache atualmente; LiteSpeed Enterprise está disponível a um custo reduzido)

### Acesso à API
Você deve ter acesso de administrador ao Enhance Control Panel para criar os tokens da API.

## Obtendo Suas Credenciais da API

### 1. Criar um Token de API

1. Faça login no seu Enhance Control Panel como administrador
2. Clique em **Settings** (Configurações) no menu de navegação
3. Navegue até **Access Tokens** (Tokens de Acesso)
4. Clique em **Create Token** (Criar Token)
5. Dê um nome descritivo ao token (ex: "Ultimate Multisite Integration")
6. Atribua o papel de **System Administrator** (Administrador do Sistema)
7. Para a data de expiração:
   - Deixe em branco se quiser que o token nunca expire
   - Ou defina uma data de expiração específica para fins de segurança
8. Clique em **Create** (Criar)

Após a criação, seu **Access Token** e **Organization ID** serão exibidos. **Salve-os imediatamente**, pois o token só será mostrado uma vez.

### 2. Obter Seu Organization ID

O Organization ID é exibido na página de Access Tokens em uma caixa de informação azul rotulada como "Org ID: {seu_id}".

O Organization ID tem um formato UUID parecido com este: `d8554b6d-5d0d-6719-009b-fec1189aa8f3`

Você também pode encontrar o Organization ID de um cliente fazendo o seguinte:
1. Vá para a página **Customers** (Clientes)
2. Clique em **Manage customer** (Gerenciar cliente) para o cliente relevante
3. Verifique a URL - o Organization ID são os caracteres alfanuméricos após `/customers/`

### 3. Obter Seu Server ID

Para encontrar seu Server ID (necessário para operações de domínio):

1. No Enhance Control Panel, navegue até **Servers** (Servidores)
2. Clique no servidor onde sua instalação do WordPress está rodando
3. O Server ID (formato UUID) estará visível na URL ou nos detalhes do servidor
4. Alternativamente, você pode usar a API para listar os servidores:

```bash
curl -s -X GET https://your-enhance-panel.com/api/servers \
  -H "Accept: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" | jq
```

O server ID segue o formato UUID: `00000000-0000-0000-0000-000000000000`

### 4. Obter Sua API URL

Sua API URL é a sua URL do Enhance Control Panel com `/api/` anexado:

```
https://your-enhance-panel.com/api/
```

**Importante:** O caminho `/api/` é obrigatório. Erros comuns incluem:
- Usar apenas o domínio sem `/api/`
- Usar HTTP em vez de HTTPS (HTTPS é necessário para segurança)

## Configuração

### Constantes Obrigatórias

Adicione as seguintes constantes ao seu arquivo `wp-config.php`:

// Melhorar a Integração com o Painel de Controle
define('WU_ENHANCE_API_TOKEN', 'seu-token-bearer-aqui');
define('WU_ENHANCE_API_URL', 'https://your-enhance-panel.com/api/');
define('WU_ENHANCE_SERVER_ID', 'seu-uuid-do-servidor-aqui');

### Configuração via Assistente de Integração

1. No seu painel de administração do WordPress, vá para **Ultimate Multisite** > **Settings** (Configurações)
2. Navegue até a aba **Integrations** (Integrações)
3. Encontre **Enhance Control Panel Integration** e clique em **Configuration** (Configuração)
4. O assistente irá guiá você pelo processo de configuração:
   - **Passo 1:** Introdução e visão geral dos recursos
   - **Passo 2:** Insira suas credenciais da API (Token, URL da API, ID do Servidor)
   - **Passo 3:** Teste a conexão
   - **Passo 4:** Revise e ative

Você pode optar por:
- De deixar o assistente injetar as constantes no seu arquivo `wp-config.php` automaticamente
- Copiar as definições das constantes e adicioná-las manualmente

## Configurações Adicionais do WordPress

Com base no feedback da comunidade ([Discussão #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)), você pode precisar configurar estas configurações adicionais:

### Configuração do .htaccess

Se você encontrar problemas com o mapeamento de domínio:
1. Exclua o arquivo `.htaccess` original do Enhance
2. Substitua-o pelo arquivo `.htaccess` padrão do WordPress Multisite

### Constantes de Cookie

Adicione estas constantes ao `wp-config.php` para garantir o tratamento correto dos cookies entre os domínios mapeados:

```php
define('COOKIE_DOMAIN', $_SERVER['HTTP_HOST']);
define('COOKIEPATH', '/');
define('ADMIN_COOKIE_PATH', '/');
```

## Como Funciona

### Quando um Domínio é Mapeado

1. Um usuário mapeia um domínio personalizado no Ultimate Multisite (ou um novo site é criado em modo de subdomínio)
2. A integração envia uma requisição POST para a API do Enhance: `/servers/{server_id}/domains`
3. O Enhance adiciona o domínio à sua configuração do servidor
4. Quando o DNS resolve para o seu servidor, o Enhance provisiona automaticamente um certificado SSL via LetsEncrypt
5. O domínio fica ativo com HTTPS

### Quando um Domínio é Removido

1. Um mapeamento de domínio é excluído no Ultimate Multisite
2. A integração consulta o Enhance para encontrar o ID do domínio
3. Uma requisição DELETE é enviada para: `/servers/{server_id}/domains/{domain_id}`
4. O Enhance remove o domínio da sua configuração do servidor

### Verificação de DNS e SSL

O Ultimate Multisite inclui verificação de DNS e SSL embutida:
- Você pode configurar o intervalo de verificação nas **Domain Mapping Settings** (padrão: 300 segundos/5 minutos)
- O sistema verificará a propagação do DNS antes de marcar um domínio como ativo
- A validade do certificado SSL é verificada automaticamente
- O Enhance lida com o provisionamento do SSL automaticamente, então não é necessária configuração manual de SSL

## Verificando a Configuração

### Testar a Conexão

1. No Wizard da Integração, use o passo **Test Connection** (Testar Conexão)
2. O plugin tentará listar os domínios no seu servidor
3. Uma mensagem de sucesso confirma:
   - As credenciais da API estão corretas
   - A URL da API é acessível
   - O ID do servidor é válido
   - As permissões estão configuradas corretamente

### Após Mapear um Domínio

1. Mapeie um domínio de teste no Ultimate Multisite
2. Verifique os logs do Ultimate Multisite (**Ultimate Multisite** > **Logs** > **integration-enhance**)
3. Verifique no Painel de Controle do Enhance se o domínio foi adicionado:
   - Vá para **Servers** > **Seu Servidor** > **Domains**
   - O novo domínio deve aparecer na lista
4. Assim que o DNS propagar, verifique se o SSL foi provisionado automaticamente

## Solução de Problemas

### Problemas de Conexão da API

**Erro: "Falha ao conectar à Enhance API"**
- Verifique se `WU_ENHANCE_API_URL` inclui `/api/` no final.
- Certifique-se de estar usando HTTPS, e não HTTP.
- Verifique se o painel Enhance é acessível a partir do seu servidor WordPress.
- Confirme se não há regras de firewall bloqueando a conexão.

**Erro: "Token da API Enhance não encontrado"**
- Certifique-se de que `WU_ENHANCE_API_TOKEN` esteja definido no arquivo `wp-config.php`.
- Verifique se o token não foi excluído ou expirou na Enhance.
- Verifique se não há erros de digitação no valor do token.

**Erro: "ID do Servidor não configurado"**
- Verifique se `WU_ENHANCE_SERVER_ID` está definido no arquivo `wp-config.php`.
- Certifique-se de que o ID do Servidor esteja em um formato UUID válido.
- Confirme se o servidor existe no seu painel Enhance.

### Domínio Não Adicionado

**Verifique os logs:**
1. Vá para **Ultimate Multisite** > **Logs**.
2. Filtre por **integration-enhance**.
3. Procure por mensagens de erro que indiquem o problema.

**Causas comuns:**
- Formato de nome de domínio inválido.
- Domínio já existente na Enhance.
- Permissões de API insuficientes (certifique-se de que o token tenha a função System Administrator).
- O ID do Servidor não corresponde ao servidor real na Enhance.

### Problemas com Certificado SSL

**SSL não está sendo provisionado:**
- Verifique se o DNS está apontando para o endereço IP do seu servidor.
- Confirme se o domínio resolve corretamente: `nslookup yourdomain.com`.
- A Enhance requer que o DNS seja resolvido antes de poder provisionar o SSL.
- O provisionamento do SSL geralmente leva de 5 a 10 minutos após a propagação do DNS.
- Verifique os logs do Painel de Controle da Enhance para erros específicos de SSL.

**Solução manual de problemas de SSL na Enhance:**
1. Vá para **Servers** > **Seu Servidor** > **Domains**.
2. Encontre seu domínio e verifique o status do SSL dele.
3. Você pode acionar manualmente o provisionamento do SSL, se necessário.

### Intervalo de Verificação de DNS

Se os domínios ou certificados SSL estão demorando muito para ativar:
1. Vá em **Ultimate Multisite** > **Settings** > **Domain Mapping**.
2. Encontre a configuração **DNS Check Interval**.
3. Ajuste de 300 segundos (o padrão) para um valor menor (mínimo: 10 segundos).
4. **Observação:** Intervalos menores significam verificações mais frequentes, mas podem aumentar a carga do servidor.

### Erros de Autenticação

**Erros HTTP 401/403:**
- Gere seu token de API novamente no Enhance.
- Verifique se o token tem o papel **System Administrator**.
- Confirme se o token não expirou.
- Certifique-se de estar usando o ID da Organização correto (embora geralmente não seja necessário na URL).

### Análise de Logs

Ative o log detalhado:
```php
// Adicione ao wp-config.php para depuração aprimorada
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
```

Em seguida, verifique os logs em:
- Logs do Ultimate Multisite: **Ultimate Multisite** > **Logs**.
- Log de debug do WordPress: `wp-content/debug.log`.
- Logs do painel Enhance: Disponíveis na interface de administração do Enhance.

## Referência da API

### Autenticação
Todas as requisições à API usam autenticação Bearer token:
```
Authorization: Bearer SEU_TOKEN_AQUI
```

### Endpoints Comuns Utilizados

**Listar Servidores:**
```
GET /servers
```

**Listar Domínios em um Servidor:**
```
GET /servers/{server_id}/domains
```

**Adicionar um Domínio:**
```
POST /servers/{server_id}/domains
Body: {"domain": "example.com"}
```

**Deletar um Domínio:**
```
DELETE /servers/{server_id}/domains/{domain_id}
```

### Documentação Completa da API
Documentação completa da API: [https://apidocs.enhance.com](https://apidocs.enhance.com)

## Melhores Práticas

### Segurança
- **Nunca envie tokens de API para o controle de versão**
- Armazene os tokens no `wp-config.php`, que deve ser excluído do Git
- Use tokens com as permissões apropriadas (Administrador do Sistema para integração completa)
- Defina datas de expiração dos tokens em ambientes de produção
- Roteie os tokens periodicamente

### Desempenho
- Use o intervalo padrão de verificação de DNS (300 segundos) para evitar chamadas excessivas à API
- Monitore os recursos do servidor Enhance ao executar operações de domínio em larga escala
- Considere agendar a adição de domínios se estiver mapeando muitos domínios de uma vez

### Monitoramento
- Verifique regularmente os logs do Ultimate Multisite em busca de erros de integração
- Configure monitoramento para adições de domínio falhadas
- Verifique se os certificados SSL estão sendo provisionados corretamente
- Fique de olho na capacidade e nos limites do servidor Enhance

## Recursos Adicionais

- **Documentação Oficial Enhance:** [https://enhance.com/docs](https://enhance.com/docs)
- **Documentação da API Enhance:** [https://apidocs.enhance.com](https://apidocs.enhance.com)
- **Fórum Comunitário Enhance:** [https://community.enhance.com](https://community.enhance.com)
- **Discussão no GitHub:** [Issue #265 - Dicas de Integração Enhance](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)
- **Guia de Mapeamento de Domínio Ultimate Multisite:** Consulte a página wiki "Como Configurar o Mapeamento de Domínio v2"

## Suporte

Se você encontrar problemas:
1. Verifique a seção de Solução de Problemas acima
2. Revise os logs do Ultimate Multisite
3. Consulte as [Discussões do GitHub](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions)
4. Entre em contato com o suporte da Enhance para problemas específicos do painel
5. Crie uma nova discussão com logs de erro detalhados para assistência da comunidade

## Observações

- Esta integração lida apenas com aliases de domínio; o Enhance gerencia o SSL automaticamente.
- A integração suporta tanto mapeamentos de domínio personalizados quanto sites baseados em subdomínios.
- A criação automática de subdomínio www pode ser configurada nas configurações de Mapeamento de Domínio.
- O Enhance atualmente suporta configurações do Apache (LiteSpeed Enterprise disponível).
- A remoção de um domínio no Ultimate Multisite removerá o domínio do Enhance, mas pode não excluir imediatamente os certificados SSL associados.
