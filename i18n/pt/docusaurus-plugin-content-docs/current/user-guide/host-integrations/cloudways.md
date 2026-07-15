---
title: Integração Cloudways
sidebar_position: 3
_i18n_hash: 09425d90def2b755c27a698d78d7d4b0
---
# Integração com Cloudways

## Visão Geral {#overview}
O Cloudways é uma plataforma de hospedagem em nuvem gerenciada que permite implantar sites WordPress em vários provedores de nuvem como DigitalOcean, AWS, Google Cloud e outros. Esta integração habilita a sincronização automática de domínios e o gerenciamento de certificados SSL entre Ultimate Multisite e Cloudways.

## Recursos {#features}
- Sincronização automática de domínio
- Gerenciamento de certificado SSL
- Suporte para domínios extras
- Validação de DNS para certificados SSL

## Requisitos {#requirements}
As seguintes constantes devem ser definidas no seu arquivo `wp-config.php`:

```php
define('WU_CLOUDWAYS_EMAIL', 'seu_email_cloudways');
define('WU_CLOUDWAYS_API_KEY', 'sua_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'seu_server_id');
define('WU_CLOUDWAYS_APP_ID', 'seu_app_id');
```

Opcionalmente, você também pode definir:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'lista_de_dominios_separados_por_vírgula');
```

## Instruções de Configuração {#setup-instructions}

### 1. Obtenha suas Credenciais da API do Cloudways {#1-get-your-cloudways-api-credentials}

1. Faça login no seu painel (dashboard) do Cloudways
2. Vá em "Account" > "API Keys" (Conta > Chaves de API)
3. Gere uma chave de API se você ainda não tiver uma
4. Copie seu e-mail e sua chave de API

### 2. Obtenha seus IDs de Servidor e Aplicação {#2-get-your-server-and-application-ids}

1. No painel do Cloudways, vá em "Servers" (Servidores)
2. Selecione o servidor onde seu multisite WordPress está hospedado
3. O Server ID é visível na URL: `https://platform.cloudways.com/server/{SERVER_ID}`
4. Vá em "Applications" (Aplicações) e selecione sua aplicação WordPress
5. O App ID é visível na URL: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. Adicione as Constantes ao wp-config.php {#3-add-constants-to-wp-configphp}

Adicione as seguintes constantes ao seu arquivo `wp-config.php`:

```php
define('WU_CLOUDWAYS_EMAIL', 'seu_email_cloudways');
define('WU_CLOUDWAYS_API_KEY', 'sua_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'seu_id_do_servidor');
define('WU_CLOUDWAYS_APP_ID', 'seu_app_id');
```

Se você tiver domínios **externos** (fora da sua rede multisite) que devem ser sempre mantidos na lista de aliases do Cloudways:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'extradomain1.com,extradomain2.com');
```

:::warning Não inclua o wildcard da sua própria rede
**Não** adicione `*.sua-rede.com` (ou qualquer padrão de subdomínio da sua rede) a
`WU_CLOUDWAYS_EXTRA_DOMAINS`. Veja [Importante — armadilha do SSL wildcard](#important--wildcard-ssl-pitfall)
abaixo para entender por que isso impede a emissão de certificados SSL por inquilino.
:::

### 4. Habilitar a Integração {#4-enable-the-integration}

1. No painel administrativo do WordPress, vá em Ultimate Multisite > Settings (Configurações)
2. Navegue até a aba "Domain Mapping" (Mapeamento de Domínio)
3. Role para baixo até "Host Integrations" (Integrações de Hospedagem)
4. Habilite a integração Cloudways
5. Clique em "Save Changes" (Salvar Alterações)

## Como Funciona {#how-it-works}

### Sincronização de Domínios {#domain-syncing}

Quando um domínio é mapeado no Ultimate Multisite:

1. A integração recupera todos os domínios atualmente mapeados
2. Ela adiciona o novo domínio à lista (junto com uma versão www, se aplicável)
3. Ela envia a lista completa para o Cloudways via API
4. O Cloudways atualiza os aliases de domínio da sua aplicação

Nota: A API do Cloudways exige que você envie a lista completa dos domínios toda vez, e não apenas adicionar ou remover domínios individuais.

### Gerenciamento de Certificados SSL {#ssl-certificate-management}

Após a sincronização dos domínios:

1. A integração verifica quais domínios têm registros DNS válidos apontando para o seu servidor
2. Ela envia uma solicitação ao Cloudways para instalar certificados SSL Let's Encrypt para esses domínios
3. O Cloudways cuida da emissão e instalação do certificado SSL

A integração sempre solicita certificados **padrão** (não curinga) Let's Encrypt do Cloudways. Se um padrão curinga for fornecido em `WU_CLOUDWAYS_EXTRA_DOMAINS`, o prefixo `*.` é removido antes da solicitação SSL — o curinga nunca é instalado por esta integração. Para usar um certificado curinga no Cloudways, você teria que instalá-lo manualmente, mas fazer isso bloqueia a emissão de Let's Encrypt por domínio para domínios personalizados mapeados (veja o problema abaixo).

## Domínios Extras {#extra-domains}

A constante `WU_CLOUDWAYS_EXTRA_DOMAINS` permite que você especifique domínios **externos** adicionais que devem ser mantidos sempre na lista de aliases da aplicação Cloudways. Use-a para:

- Domínios externos que não são gerenciados pelo Ultimate Multisite (ex: um site de marketing separado que compartilha a mesma aplicação Cloudways).
- Domínios de parqueamento ou staging que você deseja manter na lista de aliases da aplicação.

**Não** use esta constante para o curinga do subdomínio da sua própria rede (ex: `*.sua-rede.com`). Veja o problema do SSL curinga abaixo.

## Importante — Problema com Certificado SSL Curinga {#important--wildcard-ssl-pitfall}

Um erro comum ao seguir a configuração padrão do Cloudways é adicionar um curinga como `*.sua-rede.com` em `WU_CLOUDWAYS_EXTRA_DOMAINS`, ou instalar manualmente um certificado SSL curinga do Cloudways para esse curinga.

**Se você fizer isso, o Cloudways se recusará a emitir certificados Let's Encrypt para os domínios personalizados por inquilino que o Ultimate Multisite mapeia.** O Cloudways substitui o certificado SSL ativo na aplicação toda vez, e um certificado curinga pré-existente na aplicação bloqueia a emissão de Let's Encrypt por domínio que a integração depende.

### Configuração Recomendada do SSL no Cloudways para uma rede Ultimate Multisite {#recommended-cloudways-ssl-setup-for-an-ultimate-multisite-network}

1. Na aba **SSL Certificate** da aplicação Cloudways, instale um certificado **Let's Encrypt padrão** cobrindo apenas `seu-servidor.com` e `www.seu-servidor.com` — **não** um curinga (wildcard).
2. **Não** coloque `*.seu-servidor.com` (ou qualquer padrão de subdomínio da sua rede) em `WU_CLOUDWAYS_EXTRA_DOMAINS`. Reserve essa constante apenas para domínios **externos**.
3. Crie o curinga de subdomínio por inquilino no nível de **DNS** somente (um registro `A` para `*.seu-servidor.com` apontando para o IP do seu servidor Cloudways) para que os subsites sejam resolvidos. O SSL para domínios personalizados mapeados individualmente é então emitido automaticamente pela integração via Let's Encrypt.

Se os domínios personalizados dos seus inquilinos estiverem travados sem SSL, verifique a aba SSL do Cloudways. Se um certificado curinga estiver ativo lá, remova-o, emita um certificado Let's Encrypt padrão apenas para o domínio principal da rede e remova quaisquer entradas de curinga de `WU_CLOUDWAYS_EXTRA_DOMAINS`. Em seguida, reative o mapeamento de domínio (ou espere pelo próximo) e a integração começará a emitir certificados por domínio novamente.

## Solução de Problemas {#troubleshooting}

### Problemas de Conexão da API {#api-connection-issues}
- Verifique se seu e-mail e chave de API estão corretos
- Confirme se seus IDs de servidor e aplicação estão corretos
- Certifique-se de que sua conta Cloudways tenha as permissões necessárias

### Problemas com Certificado SSL {#ssl-certificate-issues}
- O Cloudways exige que os domínios tenham registros DNS válidos apontando para o seu servidor antes de emitir certificados SSL.
- A integração valida os registros DNS antes de solicitar os certificados SSL.
- Se os certificados SSL não estiverem sendo emitidos, verifique se seus domínios estão apontando corretamente para o endereço IP do seu servidor.
- **Domínios personalizados por inquilino travados sem SSL?** Verifique a aba Certificado SSL da aplicação Cloudways. Se um certificado curinga (instalado manualmente ou cobrindo `*.seu-servidor.com`) estiver ativo, o Cloudways não emitirá certificados Let's Encrypt para domínios personalizados mapeados individualmente. Substitua-o por um certificado Let's Encrypt padrão que cubra apenas o domínio principal da rede (`seu-servidor.com`, `www.seu-servidor.com`) e remova quaisquer entradas curinga de `WU_CLOUDWAYS_EXTRA_DOMAINS`. Em seguida, reative o mapeamento de domínio (ou aguarde pelo próximo) e a integração solicitará certificados por domínio.

### Domínio Não Adicionado {#domain-not-added}
- Verifique os logs do Ultimate Multisite em busca de quaisquer mensagens de erro.
- Confirme se o domínio ainda não foi adicionado ao Cloudways.
- Certifique-se de que o seu plano Cloudways suporte o número de domínios que você está adicionando.
