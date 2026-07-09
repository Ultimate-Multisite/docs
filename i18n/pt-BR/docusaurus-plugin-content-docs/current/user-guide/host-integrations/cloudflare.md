---
title: Integração com Cloudflare
sidebar_position: 16
_i18n_hash: 36ac9de19b1dc53fefd407fb8d21b563
---
# Integração com Cloudflare

## Visão geral
Cloudflare é uma rede de entrega de conteúdo (CDN) e provedor de segurança líder que ajuda a proteger e acelerar sites. Esta integração permite o gerenciamento automático de domínios entre Ultimate Multisite e Cloudflare, especialmente para instalações multisite com subdomínios.

## Recursos
- Criação automática de subdomínios no Cloudflare
- Suporte a subdomínios com proxy
- Gerenciamento de registros DNS
- Exibição aprimorada de registros DNS no admin do Ultimate Multisite

## Requisitos
As seguintes constantes devem ser definidas no seu arquivo `wp-config.php`:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_key');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

## Instruções de configuração

### 1. Obtenha sua chave de API do Cloudflare

1. Faça login no seu Dashboard do Cloudflare
2. Vá para "My Profile" (clique no seu e-mail no canto superior direito)
3. Selecione "API Tokens" no menu
4. Crie um novo token de API com as seguintes permissões:
   - Zone.Zone: Read
   - Zone.DNS: Edit
5. Copie seu token de API

### 2. Obtenha seu Zone ID

1. No seu Dashboard do Cloudflare, selecione o domínio que você deseja usar
2. O Zone ID fica visível na aba "Overview", na barra lateral direita, em "API"
3. Copie o Zone ID

### 3. Adicione constantes ao wp-config.php

Adicione as seguintes constantes ao seu arquivo `wp-config.php`:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

### 4. Ative a integração

1. No admin do WordPress, vá para Ultimate Multisite > Settings
2. Navegue até a aba "Domain Mapping"
3. Role para baixo até "Host Integrations"
4. Ative a integração com Cloudflare
5. Clique em "Save Changes"

## Como funciona

### Gerenciamento de subdomínios

Quando um novo site é criado em uma instalação multisite com subdomínios:

1. A integração envia uma solicitação para a API do Cloudflare para adicionar um registro CNAME para o subdomínio
2. O subdomínio é configurado para passar por proxy pelo Cloudflare por padrão (isso pode ser alterado com filtros)
3. Quando um site é excluído, a integração removerá o subdomínio do Cloudflare

### Exibição de registros DNS

A integração aprimora a exibição de registros DNS no admin do Ultimate Multisite ao:

1. Buscar registros DNS diretamente do Cloudflare
2. Exibir se os registros estão com proxy ou não
3. Mostrar informações adicionais sobre os registros DNS

## Cloudflare Custom Hostnames

**Cloudflare Custom Hostnames** (anteriormente chamado de "Cloudflare for SaaS") é um recurso do Cloudflare que permite que seus clientes usem seus próprios domínios com SSL na sua rede multisite. É a abordagem recomendada para instalações multisite com mapeamento de domínio que usam Cloudflare, porque o Cloudflare gerencia automaticamente a emissão e a renovação do certificado SSL para cada domínio personalizado.

### Como isso difere da integração padrão com Cloudflare

| | Integração padrão | Cloudflare Custom Hostnames |
|---|---|---|
| **Finalidade** | Cria automaticamente registros DNS para subdomínios | Permite domínios personalizados (mapeados) com SSL gerenciado pelo Cloudflare |
| **Ideal para** | Multisite com subdomínios | Multisite com mapeamento de domínio |
| **SSL** | Tratado separadamente | Gerenciado automaticamente pelo Cloudflare |

### Configurando Cloudflare Custom Hostnames

1. No seu Dashboard do Cloudflare, abra a zona do seu domínio principal.
2. Vá para **SSL/TLS > Custom Hostnames**.
3. Adicione uma origem de fallback apontando para o IP ou hostname do seu servidor.
4. Para cada domínio de cliente mapeado no Ultimate Multisite, adicione uma entrada de Custom Hostname no Cloudflare. Você pode automatizar esta etapa usando a API do Cloudflare.
5. O Cloudflare emite e renova certificados TLS para cada hostname personalizado automaticamente assim que o DNS do cliente estiver apontado para sua rede.

Para a referência completa da API, consulte a [documentação do Cloudflare Custom Hostnames](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas/domain-support/).

:::note Atualização de terminologia
A partir do Ultimate Multisite v2.6.1, este recurso é chamado de **Cloudflare Custom Hostnames** em todas as configurações e rótulos do plugin. Versões anteriores usavam o nome "Cloudflare for SaaS", que é o nome do produto Cloudflare subjacente.
:::

## Observações importantes

Com as atualizações recentes do Cloudflare, o proxying por curinga agora está disponível para todos os clientes. Isso significa que a integração DNS padrão do Cloudflare é menos crítica para instalações multisite com subdomínios do que costumava ser, pois você pode simplesmente configurar um registro DNS curinga no Cloudflare.

## Solução de problemas

### Problemas de conexão com a API
- Verifique se seu token de API está correto e tem as permissões necessárias
- Verifique se seu Zone ID está correto
- Certifique-se de que sua Account do Cloudflare tenha as permissões necessárias

### Subdomínio não adicionado
- Verifique os logs do Ultimate Multisite para ver se há mensagens de erro
- Verifique se o subdomínio ainda não foi adicionado ao Cloudflare
- Certifique-se de que seu plano do Cloudflare suporte o número de registros DNS que você está criando

### Problemas de proxy
- Se você não quiser que subdomínios passem por proxy, pode usar o filtro `wu_cloudflare_should_proxy`
- Alguns recursos podem não funcionar corretamente quando passam por proxy (por exemplo, certas funções do admin do WordPress)
- Considere usar as Page Rules do Cloudflare para ignorar o cache em páginas de admin
