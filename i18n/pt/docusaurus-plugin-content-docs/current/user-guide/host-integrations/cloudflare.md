---
title: Integração Cloudflare
sidebar_position: 16
_i18n_hash: 36ac9de19b1dc53fefd407fb8d21b563
---
# Integração com o Cloudflare

## Visão Geral {#overview}
O Cloudflare é uma rede de distribuição de conteúdo (CDN) e provedor de segurança líder que ajuda a proteger e acelerar websites. Esta integração permite o gerenciamento automático de domínio entre Ultimate Multisite e Cloudflare, especialmente para instalações de multisite de subdomínios.

## Recursos {#features}
- Criação automática de subdomínios no Cloudflare
- Suporte a subdomínios proxied (encaminhados)
- Gerenciamento de registros DNS
- Exibição aprimorada de registros DNS no painel de administração do Ultimate Multisite

## Requisitos {#requirements}
As seguintes constantes devem ser definidas no seu arquivo `wp-config.php`:

```php
define('WU_CLOUDFLARE_API_KEY', 'sua_api_key');
define('WU_CLOUDFLARE_ZONE_ID', 'seu_zone_id');
```

## Instruções de Configuração {#setup-instructions}

### 1. Obtenha Sua Chave de API do Cloudflare {#1-get-your-cloudflare-api-key}

1. Faça login no seu painel do Cloudflare
2. Vá para "Meu Perfil" (clique no seu e-mail no canto superior direito)
3. Selecione "Tokens de API" no menu
4. Crie um novo token de API com as seguintes permissões:
   - Zone.Zone: Leitura (Read)
   - Zone.DNS: Edição (Edit)
5. Copie seu token de API

### 2. Obtenha Seu ID de Zona {#2-get-your-zone-id}

1. No seu painel do Cloudflare, selecione o domínio que você deseja usar
2. O ID da Zona está visível na aba "Visão Geral", na barra lateral direita sob "API"
3. Copie o ID da Zona

### 3. Adicione Constantes ao wp-config.php {#3-add-constants-to-wp-configphp}

Adicione as seguintes constantes ao seu arquivo `wp-config.php`:

```php
define('WU_CLOUDFLARE_API_KEY', 'seu_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'seu_zone_id');
```

### 4. Habilite a Integração {#4-enable-the-integration}

1. No seu painel de administração do WordPress, vá para Ultimate Multisite > Configurações (Settings)
2. Navegue até a aba "Domain Mapping" (Mapeamento de Domínio)
3. Role para baixo até "Host Integrations" (Integrações de Hospedagem)
4. Habilite a integração com o Cloudflare
5. Clique em "Salvar Alterações" (Save Changes)

## Como Funciona {#how-it-works}

### Gerenciamento de Subdomínios {#subdomain-management}

Quando um novo site é criado em uma instalação multisite de subdomínios:

1. A integração envia uma requisição para a API da Cloudflare para adicionar um registro CNAME para o subdomínio.
2. O subdomínio é configurado para ser proxied pela Cloudflare por padrão (isso pode ser alterado com filtros).
3. Quando um site é excluído, a integração removerá o subdomínio da Cloudflare.

### Exibição do Registro DNS {#dns-record-display}

A integração melhora a exibição dos registros DNS no admin do Ultimate Multisite ao:

1. Buscar os registros DNS diretamente da Cloudflare.
2. Exibir se os registros estão proxied ou não.
3. Mostrar informações adicionais sobre os registros DNS.

## Hostnames Personalizados da Cloudflare (Cloudflare Custom Hostnames) {#cloudflare-custom-hostnames}

**Hostnames Personalizados da Cloudflare** (anteriormente chamado de "Cloudflare for SaaS") é um recurso da Cloudflare que permite aos seus clientes usar seus próprios domínios com SSL na sua rede multisite. É a abordagem recomendada para instalações multisite mapeadas por domínio que usam a Cloudflare, porque a Cloudflare gerencia a emissão e renovação do certificado SSL automaticamente para cada domínio personalizado.

### Como difere da integração padrão da Cloudflare {#how-it-differs-from-the-standard-cloudflare-integration}

| | Integração Padrão | Hostnames Personalizados da Cloudflare |
|---|---|---|
| **Propósito** | Cria registros DNS automaticamente para subdomínios | Habilita domínios personalizados (mapeados) com SSL gerenciado pela Cloudflare |
| **Ideal para** | Multisite de subdomínio | Multisite mapeado por domínio |
| **SSL** | Gerenciado separadamente | Gerenciado automaticamente pela Cloudflare |

### Configurando Hostnames Personalizados da Cloudflare {#setting-up-cloudflare-custom-hostnames}

1. No seu painel do Cloudflare, abra a zona do seu domínio principal.
2. Vá para **SSL/TLS > Custom Hostnames**.
3. Adicione um *fallback origin* apontando para o IP ou nome de host do seu servidor.
4. Para cada domínio de cliente mapeado no Ultimate Multisite, adicione uma entrada de Custom Hostname no Cloudflare. Você pode automatizar esta etapa usando a API do Cloudflare.
5. O Cloudflare emite e renova os certificados TLS para cada custom hostname automaticamente assim que o DNS do cliente for apontado para sua rede.

Para a referência completa da API, consulte [Cloudflare Custom Hostnames documentation](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas/domain-support/).

:::note Atualização de Terminologia
A partir do Ultimate Multisite v2.6.1, este recurso é chamado de **Cloudflare Custom Hostnames** em todas as configurações e etiquetas do plugin. Versões anteriores usavam o nome "Cloudflare for SaaS", que é o nome do produto subjacente da Cloudflare.
:::

## Observações Importantes {#important-notes}

A partir das atualizações recentes do Cloudflare, o *wildcard proxying* (proxy de curinga) agora está disponível para todos os clientes. Isso significa que a integração padrão de DNS do Cloudflare é menos crítica para instalações de multisite de subdomínio do que era antes, pois você pode simplesmente configurar um registro DNS de curinga no Cloudflare.

## Solução de Problemas {#troubleshooting}

### Problemas de Conexão da API {#api-connection-issues}
- Verifique se o seu token de API está correto e tem as permissões necessárias.
- Confirme se o seu Zone ID está correto.
- Certifique-se de que sua conta do Cloudflare possui as permissões necessárias.

### Subdomínio Não Adicionado {#subdomain-not-added}
- Verifique os logs do Ultimate Multisite em busca de quaisquer mensagens de erro.
- Confirme se o subdomínio não foi adicionado ao Cloudflare anteriormente.
- Garanta que seu plano do Cloudflare suporte o número de registros DNS que você está criando.

### Problemas de Proxy {#proxying-issues}

- Se você não quiser que subdomínios sejam proxied, pode usar o filtro `wu_cloudflare_should_proxy`.
- Algumas funcionalidades podem não funcionar corretamente quando estão sendo proxied (por exemplo, certas funções administrativas do WordPress).
- Considere usar as Regras de Página do Cloudflare para ignorar o cache em páginas administrativas.
