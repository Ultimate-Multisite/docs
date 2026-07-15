---
title: Integração com Cloudways
sidebar_position: 3
_i18n_hash: 09425d90def2b755c27a698d78d7d4b0
---
# Integração com Cloudways

## Visão geral {#overview}
Cloudways é uma plataforma de hospedagem em nuvem gerenciada que permite implantar sites WordPress em vários provedores de nuvem, como DigitalOcean, AWS, Google Cloud e outros. Esta integração permite a sincronização automática de domínios e o gerenciamento de certificados SSL entre Ultimate Multisite e Cloudways.

## Recursos {#features}
- Sincronização automática de domínios
- Gerenciamento de certificados SSL
- Suporte a domínios extras
- Validação de DNS para certificados SSL

## Requisitos {#requirements}
As seguintes constantes devem ser definidas no seu arquivo `wp-config.php`:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

Opcionalmente, você também pode definir:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'comma,separated,list,of,domains');
```

## Instruções de configuração {#setup-instructions}

### 1. Obtenha suas credenciais da API da Cloudways {#1-get-your-cloudways-api-credentials}

1. Faça login no seu Dashboard da Cloudways
2. Vá para "Account" > "API Keys"
3. Gere uma chave de API se você ainda não tiver uma
4. Copie seu e-mail e sua chave de API

### 2. Obtenha os IDs do seu servidor e da aplicação {#2-get-your-server-and-application-ids}

1. No seu Dashboard da Cloudways, vá para "Servers"
2. Selecione o servidor onde seu multisite WordPress está hospedado
3. O Server ID fica visível na URL: `https://platform.cloudways.com/server/{SERVER_ID}`
4. Vá para "Applications" e selecione sua aplicação WordPress
5. O App ID fica visível na URL: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. Adicione constantes ao wp-config.php {#3-add-constants-to-wp-configphp}

Adicione as seguintes constantes ao seu arquivo `wp-config.php`:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

Se você tiver domínios **externos** adicionais (fora da sua rede multisite) que devem sempre ser mantidos na lista de aliases da Cloudways:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'extradomain1.com,extradomain2.com');
```

:::warning Não inclua o wildcard da sua própria rede
**Não** adicione `*.your-network.com` (ou qualquer padrão de subdomínio da sua própria rede) a
`WU_CLOUDWAYS_EXTRA_DOMAINS`. Veja [Importante — armadilha do SSL wildcard](#important--wildcard-ssl-pitfall)
abaixo para entender por que isso impede a emissão de certificados SSL por tenant.
:::

### 4. Habilite a integração {#4-enable-the-integration}

1. No seu admin WordPress, vá para Ultimate Multisite > Settings
2. Navegue até a aba "Domain Mapping"
3. Role para baixo até "Host Integrations"
4. Habilite a integração com Cloudways
5. Clique em "Save Changes"

## Como funciona {#how-it-works}

### Sincronização de domínios {#domain-syncing}

Quando um domínio é mapeado no Ultimate Multisite:

1. A integração recupera todos os domínios atualmente mapeados
2. Ela adiciona o novo domínio à lista (junto com uma versão www, se aplicável)
3. Ela envia a lista completa para a Cloudways por meio da API
4. A Cloudways atualiza os aliases de domínio para sua aplicação

Observação: a API da Cloudways exige o envio da lista completa de domínios a cada vez, não apenas a adição ou remoção de domínios individuais.

### Gerenciamento de certificados SSL {#ssl-certificate-management}

Depois que os domínios são sincronizados:

1. A integração verifica quais domínios têm registros DNS válidos apontando para o seu servidor
2. Ela envia uma solicitação à Cloudways para instalar certificados SSL Let's Encrypt para esses domínios
3. A Cloudways lida com a emissão e a instalação dos certificados SSL

A integração sempre solicita certificados Let's Encrypt **padrão** (sem wildcard) da
Cloudways. Se um padrão wildcard for fornecido em `WU_CLOUDWAYS_EXTRA_DOMAINS`, o prefixo
`*.` será removido antes da solicitação SSL — o wildcard em si nunca é instalado por esta
integração. Para usar um certificado wildcard na Cloudways, você teria que instalá-lo
manualmente, mas fazer isso bloqueia a emissão Let's Encrypt por domínio para domínios personalizados mapeados
(veja a armadilha abaixo).

## Domínios extras {#extra-domains}

A constante `WU_CLOUDWAYS_EXTRA_DOMAINS` permite especificar domínios **externos**
adicionais que devem sempre ser mantidos na lista de aliases da aplicação Cloudways. Use-a para:

- Domínios externos que não são gerenciados pelo Ultimate Multisite (por exemplo, um site de marketing separado compartilhando a mesma aplicação Cloudways)
- Domínios estacionados ou de staging que você deseja manter na lista de aliases da aplicação

**Não** use esta constante para o wildcard de subdomínio da sua própria rede
(por exemplo, `*.your-network.com`). Veja a armadilha do SSL wildcard abaixo.

## Importante — armadilha do SSL wildcard {#important--wildcard-ssl-pitfall}

Um erro comum ao seguir a configuração padrão da Cloudways é adicionar um wildcard como
`*.your-network.com` a `WU_CLOUDWAYS_EXTRA_DOMAINS`, ou instalar manualmente um certificado SSL
wildcard da Cloudways para esse wildcard.

**Se você fizer isso, a Cloudways se recusará a emitir certificados Let's Encrypt para os
domínios personalizados por tenant que o Ultimate Multisite mapeia.** A Cloudways substitui o certificado
SSL ativo na aplicação a cada vez, e um certificado wildcard preexistente na
aplicação bloqueia a emissão Let's Encrypt por domínio da qual a integração depende.

### Configuração SSL recomendada da Cloudways para uma rede Ultimate Multisite {#recommended-cloudways-ssl-setup-for-an-ultimate-multisite-network}

1. Na aba **SSL Certificate** da aplicação Cloudways, instale um **certificado
   Let's Encrypt padrão** cobrindo apenas `your-network.com` e `www.your-network.com`
   — **não** um wildcard.
2. **Não** coloque `*.your-network.com` (ou qualquer padrão de subdomínio da sua própria rede) em
   `WU_CLOUDWAYS_EXTRA_DOMAINS`. Reserve essa constante apenas para domínios **externos**.
3. Crie o wildcard de subdomínio por tenant apenas no nível de **DNS** (um registro `A` para
   `*.your-network.com` apontando para o IP do seu servidor Cloudways), para que os subsites resolvam. O SSL
   para domínios personalizados mapeados individuais é então emitido automaticamente pela integração
   via Let's Encrypt.

Se os domínios personalizados dos seus tenants estão travados sem SSL, verifique a aba SSL do Cloudways. Se um
certificado wildcard estiver ativo lá, remova-o, reemita um certificado Let's Encrypt padrão
apenas para o domínio principal da rede e remova quaisquer entradas wildcard de
`WU_CLOUDWAYS_EXTRA_DOMAINS`. Em seguida, acione novamente um mapeamento de domínio (ou aguarde o próximo)
e a integração começará a emitir certificados por domínio novamente.

## Solução de problemas {#troubleshooting}

### Problemas de conexão com a API {#api-connection-issues}
- Verifique se seu e-mail e sua chave de API estão corretos
- Verifique se os IDs do seu servidor e da sua aplicação estão corretos
- Certifique-se de que sua conta Cloudways tenha as permissões necessárias

### Problemas com certificado SSL {#ssl-certificate-issues}
- Cloudways exige que os domínios tenham registros DNS válidos apontando para seu servidor antes de emitir certificados SSL
- A integração valida os registros DNS antes de solicitar certificados SSL
- Se os certificados SSL não estiverem sendo emitidos, verifique se seus domínios estão apontando corretamente para o endereço IP do seu servidor
- **Domínios personalizados por tenant travados sem SSL?** Verifique a aba SSL Certificate da aplicação Cloudways. Se um certificado wildcard (instalado manualmente ou cobrindo `*.your-network.com`) estiver ativo, Cloudways não emitirá certificados Let's Encrypt para domínios personalizados mapeados individualmente. Substitua-o por um certificado Let's Encrypt padrão cobrindo apenas o domínio principal da rede (`your-network.com`, `www.your-network.com`) e remova quaisquer entradas wildcard de `WU_CLOUDWAYS_EXTRA_DOMAINS`. Em seguida, acione novamente um mapeamento de domínio (ou aguarde o próximo) e a integração solicitará certificados por domínio.

### Domínio não adicionado {#domain-not-added}
- Verifique os logs do Ultimate Multisite em busca de quaisquer mensagens de erro
- Verifique se o domínio ainda não foi adicionado ao Cloudways
- Certifique-se de que seu plano Cloudways suporte o número de domínios que você está adicionando
