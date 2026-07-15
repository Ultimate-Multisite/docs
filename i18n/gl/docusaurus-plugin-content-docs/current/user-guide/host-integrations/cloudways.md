---
title: Integración Cloudways
sidebar_position: 3
_i18n_hash: 09425d90def2b755c27a698d78d7d4b0
---
# Integración Cloudways

## Visión Geral {#overview}
Cloudways é unha plataforma de alojamiento en nuube gestionada que te permite desplegar sitios WordPress en diferentes proveedores de nuube como DigitalOcean, AWS, Google Cloud e máis. Esta integración permite a sincronización automática de domínios e a gestión de certificados SSL entre Ultimate Multisite e Cloudways.

## Características {#features}
- Sincronización automática de domínios
- Gestión de certificados SSL
- Soporte para dominios extra
- Validación DNS para certificados SSL

## Requisitos {#requirements}
As seguintes constantes deben estar definidas no teu ficheiro `wp-config.php`:

```php
define('WU_CLOUDWAYS_EMAIL', 'o_teu_email_de_cloudways');
define('WU_CLOUDWAYS_API_KEY', 'a_tu_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'o_id_do_servidor');
define('WU_CLOUDWAYS_APP_ID', 'o_id_da_aplicación');
```

Opcionalmente, tamén podes definir:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'lista_de_dominios_separados_por_coma');
```

## Instrución de Configuración {#setup-instructions}

### 1. Obtén as tus Credenciais API de Cloudways {#1-get-your-cloudways-api-credentials}

1. Inicia sesión no teu dashboard de Cloudways
2. Ve a "Account" > "API Keys" (Conta > Claves API)
3. Genera unha clave API se non tes hai
4. Copia o teu email e a clave API

### 2. Obtén os teus IDs de Servidor e Aplicación {#2-get-your-server-and-application-ids}

1. No teu dashboard de Cloudways, ve a "Servers" (Servidores)
2. Seleita o servidor onde está alojado o teu multisite de WordPress
3. O ID do Servidor é visible na URL: `https://platform.cloudways.com/server/{SERVER_ID}`
4. Ve a "Applications" (Aplicacións) e selecciona a tu aplicación de WordPress
5. O ID da Aplicación é visible na URL: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. Añade as Constantes a wp-config.php {#3-add-constants-to-wp-configphp}

Añade as seguintes constantes ao teu ficheiro `wp-config.php`:

```php
define('WU_CLOUDWAYS_EMAIL', 'seu_email_de_cloudways');
define('WU_CLOUDWAYS_API_KEY', 'su_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'seu_id_do_servidor');
define('WU_CLOUDWAYS_APP_ID', 'seu_app_id');
```

Se hai domínios **externos** adicionais (fora da rede multisite) que sempre deben permanecer na lista de aliases do Cloudways:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'extradomain1.com,extradomain2.com');
```

:::warning Non incluí o teu propio wildcard de rede
**Non** adiciones `*.your-network.com` (ou ningún patrón de subdomínio da tua rede) a
`WU_CLOUDWAYS_EXTRA_DOMAINS`. Vede [Importante — pitfall do SSL wildcard](#important--wildcard-ssl-pitfall)
a continuación por que isto impide que se emitan certificados SSL por inquilino.
:::

### 4. Activar a Integración {#4-enable-the-integration}

1. No teu administrador de WordPress, ve a Ultimate Multisite > Settings (Configuración)
2. Navega para a aba "Domain Mapping" (Mapeamento de Domínios)
3. Desce até "Host Integrations" (Integraciones del Host)
4. Activa a integración Cloudways
5. Clica en "Save Changes" (Guardar Cambios)

## Como Funciona {#how-it-works}

### Sincronización de Domínios {#domain-syncing}

Quando un dominio se mapea en Ultimate Multisite:

1. A integración recupera todos os domínios mapeados actualmente
2. Añade o novo dominio á lista (con a versión www se for aplicable)
3. Envía a lista completa ao Cloudways vía API
4. O Cloudways actualiza os aliases de domínio para a tua aplicación

Nota: A API do Cloudways requiere enviar a lista completa dos domínios cada vez, non só añadir ou remover domínios individuais.

### Gestión de Certificados SSL {#ssl-certificate-management}

Despois de sincronizar os domínios:

1. A integración verifica que domínios teñen rexistencias DNS válidas que apunten ao teu servidor
2. Envía unha petición ao Cloudways para instalar certificados SSL Let's Encrypt para esos domínios
3. O Cloudways se encarga da emisión e instalación do certificado SSL

A integración sempre solicita certificados **padrón** (non-wildcard) Let's Encrypt do Cloudways. Se se fornecer un patrón wildcard en `WU_CLOUDWAYS_EXTRA_DOMAINS`, o o leading `*.` é retirado antes da solicitude SSL — o wildcard nunca se instala por esta integración. Para usar un certificado wildcard en Cloudways terías que instalalo manualmente, pero facelo bloqueia a emisión de Let's Encrypt para dominios personalizados mapeados (vê o problema abaixo).

## Dominios Extras {#extra-domains}

A constante `WU_CLOUDWAYS_EXTRA_DOMAINS` permite especificar dominios **externos** adicionais que sempre deben permanecer na lista de aliases da aplicación Cloudways. Úsala para:

- Dominios externos que non son gestionados por Ultimate Multisite (ex: un sitio de marketing separado que comparte a mesma aplicación Cloudways).
- Dominios parkeados ou staging que queres que se mantengan na lista de aliases da aplicación.

**Non uses esta constante para o wildcard do teu propio subdominio de rede** (ex: `*.your-network.com`). Vê o problema do SSL wildcard abaixo.

## Importante — Problema com Wildcard SSL {#important--wildcard-ssl-pitfall}

Un erro común ao seguir a configuración predeterminada de Cloudways é añadir un wildcard como `*.your-network.com` a `WU_CLOUDWAYS_EXTRA_DOMAINS`, ou instalar manualmente un certificado SSL wildcard de Cloudways para ese wildcard.

**Se faco isto, Cloudways recusará emitir certificados Let's Encrypt para os dominios personalizados por inquilino que Ultimate Multisite mapea.** Cloudways substitui o certificado SSL activo na aplicación cada vez, e un certificado wildcard preexistente na aplicación bloqueia a emisión de Let's Encrypt por dominio que a integración depende.

### Configuración Recomendada de SSL de Cloudways para una red Ultimate Multisite {#recommended-cloudways-ssl-setup-for-an-ultimate-multisite-network}

1. Na aba da aplicação Cloudways, na aba **SSL Certificate**, instala un **certificado Let's Encrypt estándar** que cubra só `your-network.com` e `www.your-network.com` — **non** un wildcard.
2. **Non** pon `*.your-network.com` (ou ningún patrón de subdomínio da túa rede) en `WU_CLOUDWAYS_EXTRA_DOMAINS`. Reserva esa constante só para dominios **externos**.
3. Crea o wildcard de subdomínio por inquilino no nivel de **DNS** só (un registro `A` para `*.your-network.com` apuntando á IP do túa servidor Cloudways) para que os subsites se resolvan. O SSL para domínios personalizados mapeados individualmente é então emitido automáticamente pola integración vía Let's Encrypt.

Se os domínios personalizados dos tus inquilinos están atascados sen SSL, verifica a aba SSL de Cloudways. Se estiver activo un certificado wildcard ali, remóvalo, emite un certificado Let's Encrypt estándar só para o dominio principal da rede e remove todas as entradas wildcard de `WU_CLOUDWAYS_EXTRA_DOMAINS`. Aí re-dispara unha mapeo de dominios (ou espera a que chegue) e a integración começará a emitir certificados por cada dominio de novo.

## Solución de problemas {#troubleshooting}

### Problemas de conexión API {#api-connection-issues}
- Verifica que o teu email e a chave API son os correctos
- Comprueba que os IDs do servidor e da aplicación son os correctos
- Asegúrate de que a túa conta Cloudways ten as permiñas necesarias

### Problemas con o Certificado SSL {#ssl-certificate-issues}
- Cloudways exige que os domínios ten que ter rexistencias DNS válidas que apunten ao seu servidor antes de emitir certificados SSL.
- A integración valida as rexistencias DNS antes de solicitar os certificados SSL.
- Se non se están emitindo certificados SSL, verifique que os seus domínios apunten correctamente á dirección IP do seu servidor.
- **¿Dominios personalizados por inquilino bloqueados sem SSL?** Verifique a pestaña de Certificado SSL da aplicación Cloudways. Se un certificado comodín (instalado manualmente, ou que cubra `*.your-network.com`) está activo, Cloudways non emitirá certificados Let's Encrypt para domínios personalizados mapeados individualmente. Reemplace con un certificado Let's Encrypt estándar que cubra só o domínio principal da rede (`your-network.com`, `www.your-network.com`) e remova todas as rexistencias comodín de `WU_CLOUDWAYS_EXTRA_DOMAINS`. Despois, reative a mapeo de dominios (ou espere o seguinte) e a integración solicitará certificados por cada dominio.

### Dominio Non Añadido {#domain-not-added}
- Verifique os logs de Ultimate Multisite en busca de calquera mensaxe de erro.
- Verifique que o dominio non está ya añadido a Cloudways.
- Asegúrese de que o seu plan de Cloudways suporta o número de dominios que está a añadir.
