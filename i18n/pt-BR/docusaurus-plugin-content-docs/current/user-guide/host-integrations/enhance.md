---
title: Integração Aprimorada do Painel de Controle
sidebar_position: 2
_i18n_hash: 2b4047e6b7b32a1c96a0b562e251cbfb
---
# Enhance Control Panel Integration

## Overview
Enhance é um painel de controle moderno que oferece automação de hospedagem e recursos de gerenciamento poderosos. Esta integração permite sincronização automática de domínios e gerenciamento de certificados SSL entre Ultimate Multisite e Enhance Control Panel.

**Discussão Relacionada:** Veja [GitHub Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265) para dicas da comunidade e informações adicionais.

## Features
- Sincronização automática de domínios quando domínios são mapeados no Ultimate Multisite
- Provisionamento automático de certificado SSL via LetsEncrypt quando o DNS resolve
- Suporte a subdomínios para redes em modo subdomínio
- Remoção de domínio quando os mapeamentos são excluídos
- Teste de conexão para verificar credenciais da API

## Requirements

### System Requirements
- Enhance Control Panel instalado e acessível
- Instalação WordPress Multisite hospedada em ou conectada a um servidor Enhance
- Servidor web Apache (Enhance atualmente suporta configurações Apache; LiteSpeed Enterprise está disponível a custo reduzido)

### API Access
Você deve ter acesso de administrador ao Enhance Control Panel para criar tokens de API.

## Getting Your API Credentials

### 1. Create an API Token

1. Faça login no seu Enhance Control Panel como administrador
2. Clique em **Settings** no menu de navegação
3. Navegue até **Access Tokens**
4. Clique em **Create Token**
5. Dê ao token um nome descritivo (por exemplo, "Ultimate Multisite Integration")
6. Atribua a função **System Administrator**
7. Para a data de expiração:
   - Deixe em branco se você quiser que o token nunca expire
   - Ou defina uma data de expiração específica por motivos de segurança
8. Clique em **Create**

Após a criação, seu **Access Token** e **Organization ID** serão exibidos. **Salve-os imediatamente** pois o token só será exibido uma vez.

### 2. Get Your Organization ID

O Organization ID é exibido na página Access Tokens em uma caixa de informação azul rotulada "Org ID: {your_id}".  
O Organization ID é um UUID formatado como: `d8554b6d-5d0d-6719-009b-fec1189aa8f3`.  
Você também pode encontrar o Organization ID de um cliente por:
1. Vá para a página **Customers**
2. Clique em **Manage customer** para o cliente relevante
3. Observe a URL - o Organization ID são os caracteres alfanuméricos após `/customers/`

### 3. Get Your Server ID

Para encontrar seu Server ID (necessário para operações de domínio):
1. No Enhance Control Panel, navegue até **Servers**
2. Clique no servidor onde sua instalação WordPress está rodando
3. O Server ID (formato UUID) será visível na URL ou nos detalhes do servidor
4. Alternativamente, você pode usar a API para listar servidores:

```bash
curl -s -X GET https://your-enhance-panel.com/api/servers \
  -H "Accept: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" | jq
```

O Server ID segue o formato UUID: `00000000-0000-0000-0000-000000000000`.

### 4. Get Your API URL

Sua API URL é a URL do seu Enhance Control Panel com `/api/` anexado:

```
https://your-enhance-panel.com/api/
```

**Importante:** O caminho `/api/` é obrigatório. Erros comuns incluem:
- Usar apenas o domínio sem `/api/`
- Usar HTTP em vez de HTTPS (HTTPS é obrigatório por segurança)

## Configuration

### Required Constants

Adicione as seguintes constantes ao seu arquivo `wp-config.php`:

```php
// Enhance Control Panel Integration
define('WU_ENHANCE_API_TOKEN', 'your-bearer-token-here');
define('WU_ENHANCE_API_URL', 'https://your-enhance-panel.com/api/');
define('WU_ENHANCE_SERVER_ID', 'your-server-uuid-here');
```

### Setup via Integration Wizard

1. No seu admin WordPress, vá para **Ultimate Multisite** > **Settings**
2. Navegue até a aba **Integrations**
3. Encontre **Enhance Control Panel Integration** e clique em **Configuration**
4. O assistente irá guiá-lo pelo processo de configuração:
   - **Step 1:** Introdução e visão geral dos recursos
   - **Step 2:** Insira suas credenciais de API (Token, API URL, Server ID)
   - **Step 3:** Teste a conexão
   - **Step 4:** Revise e ative
Você pode escolher:
- Deixar o assistente injetar as constantes no seu arquivo `wp-config.php` automaticamente
- Copiar as definições de constantes e adicioná-las manualmente

## Additional WordPress Configuration

Com base no feedback da comunidade ([Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)), você pode precisar configurar as seguintes configurações adicionais:

### .htaccess Configuration

Se você encontrar problemas com mapeamento de domínio:
1. Exclua o arquivo `.htaccess` original do Enhance
2. Substitua-o pelo arquivo `.htaccess` padrão do WordPress Multisite

### Cookie Constants

Adicione essas constantes ao `wp-config.php` para garantir o tratamento adequado de cookies em domínios mapeados:

```php
define('COOKIE_DOMAIN', $_SERVER['HTTP_HOST']);
define('COOKIEPATH', '/');
define('ADMIN_COOKIE_PATH', '/');
```

## How It Works

### When a Domain is Mapped

1. Um usuário mapeia um domínio personalizado no Ultimate Multisite (ou um novo site é criado em modo subdomínio)
2. A integração envia uma solicitação POST para a API do Enhance: `/servers/{server_id}/domains`
3. O Enhance adiciona o domínio à configuração do seu servidor
4. Quando o DNS resolve para o seu servidor, o Enhance provisiona automaticamente um certificado SSL via LetsEncrypt
5. O domínio torna-se ativo com HTTPS

### When a Domain is Removed

1. Um mapeamento de domínio é excluído no Ultimate Multisite
2. A integração consulta o Enhance para encontrar o ID do domínio
3. Uma solicitação DELETE é enviada para: `/servers/{server_id}/domains/{domain_id}`
4. O Enhance remove o domínio da configuração do seu servidor

### DNS and SSL Checking

Ultimate Multisite inclui verificação de DNS e SSL embutida:
- Você pode configurar o intervalo de verificação nas **Domain Mapping Settings** (padrão: 300 segundos/5 minutos)
- O sistema verificará a propagação do DNS antes de marcar um domínio como ativo
- A validade do certificado SSL é verificada automaticamente
- O Enhance lida com provisionamento de SSL automaticamente, então a configuração manual de SSL não é necessária

## Verifying Setup

### Test the Connection

1. No Assistente de Integração, use a etapa **Test Connection**
2. O plugin tentará listar domínios no seu servidor
3. Uma mensagem de sucesso confirma:
   - As credenciais da API estão corretas
   - A API URL é acessível
   - O Server ID é válido
   - As permissões estão configuradas corretamente

### After Mapping a Domain

1. Mapeie um domínio de teste no Ultimate Multisite
2. Verifique os logs do Ultimate Multisite (**Ultimate Multisite** > **Logs** > **integration-enhance**)
3. Verifique no Enhance Control Panel que o domínio foi adicionado:
   - Vá para **Servers** > **Your Server** > **Domains**
   - O novo domínio deve aparecer na lista
4. Quando a propagação do DNS ocorrer, verifique se o SSL é provisionado automaticamente

## Troubleshooting

### API Connection Issues

**Erro: "Falha ao conectar à Enhance API"**
- Verifique se `WU_ENHANCE_API_URL` inclui `/api/` no final
- Certifique-se de que está usando HTTPS, não HTTP
- Verifique se o painel Enhance está acessível a partir do seu servidor WordPress
- Verifique se não há regras de firewall bloqueando a conexão

**Erro: "Token da API Enhance não encontrado"**
- Certifique-se de que `WU_ENHANCE_API_TOKEN` está definido em `wp-config.php`
- Verifique se o token não foi excluído ou expirado no Enhance
- Verifique se há erros de digitação no valor do token

**Erro: "Server ID não configurado"**
- Verifique se `WU_ENHANCE_SERVER_ID` está definido em `wp-config.php`
- Certifique-se de que o Server ID é um formato UUID válido
- Confirme que o servidor existe no seu painel Enhance

### Domain Not Added

**Verifique os logs:**
1. Vá para **Ultimate Multisite** > **Logs**
2. Filtre por **integration-enhance**
3. Procure mensagens de erro indicando o problema

**Causas comuns:**
- Formato de nome de domínio inválido
- Domínio já existe no Enhance
- Permissões de API insuficientes (certifique-se de que o token tem a função System Administrator)
- O Server ID não corresponde ao servidor real no Enhance

### SSL Certificate Issues

**SSL não provisionado:**
- Verifique se o DNS aponta para o endereço IP do seu servidor
- Verifique se o domínio resolve corretamente: `nslookup yourdomain.com`
- Enhance requer que o DNS resolva antes de provisionar SSL
- O provisionamento de SSL normalmente leva 5-10 minutos após a propagação do DNS
- Verifique os logs do Enhance Control Panel para erros específicos de SSL

**Solução de problemas manual de SSL em Enhance:**
1. Vá para **Servers** > **Your Server** > **Domains**
2. Encontre seu domínio e verifique seu status de SSL
3. Você pode acionar manualmente o provisionamento de SSL se necessário

### DNS Check Interval

Se domínios ou certificados SSL estiverem demorando demais:
1. Vá para **Ultimate Multisite** > **Settings** > **Domain Mapping**
2. Encontre a configuração **DNS Check Interval**
3. Ajuste do valor padrão 300 segundos para um valor menor (mínimo: 10 segundos)
4. **Nota:**
   - Intervalos menores significam verificações mais frequentes, mas maior carga

### Authentication Errors

**Erros HTTP 401/403:**
- Regenerar seu token de API no Enhance
- Verifique se o token tem a função **System Administrator**
- Verifique se o token não expirou
- Certifique-se de que está usando o ID de organização correto (embora normalmente não seja necessário no URL)

### Log Analysis

Ativar log detalhado:

```php
// Add to wp-config.php for enhanced debugging
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
```

Em seguida, verifique os logs em:
- Ultimate Multisite logs: **Ultimate Multisite** > **Logs**
- WordPress debug log: `wp-content/debug.log`
- Enhance panel logs: Disponível em interface administrativa do Enhance

## API Reference

### Authentication

Todas as requisições de API usam autenticação Bearer token:

```
Authorization: Bearer YOUR_TOKEN_HERE
```

### Common Endpoints Used

**List Servers:**

```
GET /servers
```

**List Domains on a Server:**

```
GET /servers/{server_id}/domains
```

**Add a Domain:**

```
POST /servers/{server_id}/domains
Body: {"domain": "example.com"}
```

**Delete a Domain:**

```
DELETE /servers/{server_id}/domains/{domain_id}
```

### Full API Documentation

Documentação completa da API: [https://apidocs.enhance.com](https://apidocs.enhance.com)

## Best Practices

### Security

- **Nunca comprometa tokens de API no controle de versão**
- Armazene tokens em `wp-config.php`, que deve ser excluído do Git
- Use tokens com permissões adequadas (System Administrator para integração completa)
- Defina datas de expiração de token para ambientes de produção
- Rotacione tokens periodicamente

### Performance

- Use o intervalo padrão de verificação de DNS (300 segundos) para evitar chamadas excessivas de API
- Monitore os recursos do servidor Enhance ao executar operações de domínio em larga escala
- Considere distribuir adições de domínio se mapear muitos domínios de uma vez

### Monitoring

- Verifique regularmente os logs do Ultimate Multisite em busca de erros de integração
- Configure monitoramento para adições de domínio falhadas
- Verifique se os certificados SSL estão sendo provisionados corretamente
- Fique de olho na capacidade do servidor Enhance e nos limites de domínio

## Additional Resources

- **Enhance Official Documentation:** [https://enhance.com/docs](https://enhance.com/docs)
- **Enhance API Documentation:** [https://apidocs.enhance.com](https://apidocs.enhance.com)
- **Enhance Community Forum:** [https://community.enhance.com](https://community.enhance.com)
- **GitHub Discussion:** [Issue #265 - Enhance Integration Tips](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)
- **Ultimate Multisite Domain Mapping Guide:** Veja a página wiki "How to Configure Domain Mapping v2"

## Support

Se você encontrar problemas:
1. Verifique a seção de Solução de Problemas acima
2. Revise os logs do Ultimate Multisite
3. Consulte as [GitHub Discussions](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions)
4. Entre em contato com o suporte Enhance para questões específicas do painel
5. Crie uma nova discussão com logs de erro detalhados para assistência da comunidade

## Notes

- Esta integração lida apenas com aliases de domínio; o Enhance gerencia SSL automaticamente
- A integração suporta tanto mapeamentos de domínio personalizados quanto sites baseados em subdomínio
- A criação automática de subdomínio www pode ser configurada nas configurações de Mapeamento de Domínio
- O Enhance atualmente suporta configurações Apache (LiteSpeed Enterprise disponível)
- A remoção de domínio do Ultimate Multisite removerá o domínio do Enhance, mas pode não excluir imediatamente os certificados SSL associados
