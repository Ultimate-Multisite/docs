---
title: Integratio Cloudways
sidebar_position: 3
_i18n_hash: 09425d90def2b755c27a698d78d7d4b0
---
# Integrare Cloudways {#cloudways-integration}

## Visio {#overview}
Cloudways est platforma d'hébergement cloud gérée quae te permittit deplurare sita WordPress in diversis provideribus cloud ut DigitalOcean, AWS, Google Cloud, et al. Haec integrare permittit sincronizandum automaticum domini et gestionem certificatibus SSL inter Ultimate Multisite et Cloudways.

## Caritatis {#features}
- Sincronizatio automatica dominii
- Gestionem certificatorum SSL
- Supportum ad domina extra
- Validatio DNS pro certificatibus SSL

## Requisitos {#requirements}
Quod constants sequentia in file tuo `wp-config.php` definire debes:

```php
define('WU_CLOUDWAYS_EMAIL', 'tua_email_cloudways');
define('WU_CLOUDWAYS_API_KEY', 'tua_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'tui_server_id');
define('WU_CLOUDWAYS_APP_ID', 'tui_app_id');
```

Optionem, etiam definire possis:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'lista_domini_separata_per_virgulam');
```

## Instructiones Configurandi {#setup-instructions}

### 1. Obtine Credentias API Cloudways Tuum {#1-get-your-cloudways-api-credentials}

1. Accede ad dashboard tuum Cloudways
2. Ve ad "Account" > "API Keys" (Contio)
3. Genera una API key si non habes iam una
4. Copia te-mail et API key tui

### 2. Obtine IDs Server et Application Tuum {#2-get-your-server-and-application-ids}

1. In dashboard tuum Cloudways, ve ad "Servers" (Serveres)
2. Selecta server ubi multisite WordPress tuum hospitatur
3. ID Server est visibilis in URL: `https://platform.cloudways.com/server/{SERVER_ID}`
4. Ve ad "Applications" et selecta application WordPress tuam
5. ID Application est visibilis in URL: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. Add Constants in wp-config.php {#3-add-constants-to-wp-configphp}

Add constants sequentia in file tuo `wp-config.php`:

```php
define('WU_CLOUDWAYS_EMAIL', 'tu-correo-de-cloudways');
define('WU_CLOUDWAYS_API_KEY', 'tu-clave-api');
define('WU_CLOUDWAYS_SERVER_ID', 'tu-id-servidor');
define('WU_CLOUDWAYS_APP_ID', 'tu-id-aplicacion');
```

Si tienes dominios **externos** adicionales (fuera de tu red multisite) que siempre deben permanecer en la lista de alias de Cloudways:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'extradominio1.com,extradominio2.com');
```

:::warning No incluyas el comodín de tu propia red
No añadas `*.tu-red.com` (o cualquier patrón de subdominio de tu propia red) a
`WU_CLOUDWAYS_EXTRA_DOMAINS`. Consulta [Importante — trampa del SSL con comodines](#important--wildcard-ssl-pitfall)
a continuación para saber por qué esto impide la emisión de certificados SSL por inquilino.
:::

### 4. Habilitar la Integración {#4-enable-the-integration}

1. En tu administración de WordPress, ve a Ultimate Multisite > Settings (Configuración)
2. Navega a la pestaña "Domain Mapping" (Mapeo de Dominios)
3. Desplázate hasta "Host Integrations" (Integraciones del Host)
4. Habilita la integración de Cloudways
5. Haz clic en "Save Changes" (Guardar Cambios)

## Cómo Funciona {#how-it-works}

### Sincronización de Dominios {#domain-syncing}

Cuando se mapea un dominio en Ultimate Multisite:

1. La integración recupera todos los dominios actualmente mapeados
2. Añade el nuevo dominio a la lista (junto con una versión www si corresponde)
3. Envía la lista completa a Cloudways a través de la API
4. Cloudways actualiza los alias de dominio para tu aplicación

Nota: La API de Cloudways requiere enviar la lista completa de dominios cada vez, no solo añadir o eliminar dominios individuales.

### Gestión de Certificados SSL {#ssl-certificate-management}

Después de sincronizar los dominios:

1. La integración comprueba qué dominios tienen registros DNS válidos que apuntan a tu servidor
2. Envía una solicitud a Cloudways para instalar certificados SSL Let's Encrypt para esos dominios
3. Cloudways se encarga de la emisión e instalación del certificado SSL

La integratio semper pete certomata Let's Encrypt **standard** (non-wildcard) ab Cloudways. Si in `WU_CLOUDWAYS_EXTRA_DOMAINS` praesumatur pattern wildcard, antequam petitio SSL leading `*.` est truncata — wildcat ipsa numquam per hanc integration instalatur. Ut certatum wildcard in Cloudways uti possumus, debet manualiter instalare, sed talis operatio obstat issuance Let's Encrypt pro dominis customis mappatis (vide periculum infra).

## Domini Extra {#extra-domains}

Constantia `WU_CLOUDWAYS_EXTRA_DOMAINS` te permittit specicare domina **externa** additionales quae semper in lista alias applicationis Cloudways conservari debent. Usus eius est ad:

- Domina externa quae non ab Ultimate Multisite gestuntur (e.g. situm marketing separate quod eadem applicationis Cloudways partibitur).
- Domina parkatae vel staging quae in lista alias applicationis conservari desideras.

**Non** usus hoc constantiae pro subdomain wildcard network tuam (e.g. `*.your-network.com`). Vide periculum SSL wildcard infra.

## Importante — Periculum SSL Wildcard {#important--wildcard-ssl-pitfall}

Error communis cum sequendis configuration default Cloudways est ad additionem wildcat tunc in `WU_CLOUDWAYS_EXTRA_DOMAINS`, aut manualiter instalationem certatus SSL wildcard Cloudways pro illo wildcat.

**Si hoc facis, Cloudways negabit issuance certificatuum Let's Encrypt pro dominis customis per-tenant quibus Ultimate Multisite mappatur.** Cloudways certificatem SSL activum in applicatione semper substituit, et certificate wildcard preexistentium in applicatione obstat issuance Let's Encrypt pro dominio per dominio ad quo integrationem dependet.

### Configuratio SSL Cloudways recomendata pro network Ultimate Multisite {#recommended-cloudways-ssl-setup-for-an-ultimate-multisite-network}

1. In tabe **SSL Certificate** applicationis Cloudways, install certificatum **standard Let's Encrypt** quod solum `your-network.com` et `www.your-network.com` copiat, — **non** wildcard.
2. Ne in `WU_CLOUDWAYS_EXTRA_DOMAINS` ponas `*.your-network.com` (vel quamcum pattern subdomini proprii network tuum). Illud constantem reserva solum ad domina **externa**.
3. Crea wildcard subdomain per locum pro tenantibus solum in nivel **DNS** (record `A` ad `*.your-network.com` indicans ad IP server tuus Cloudways) ita ut subdomini resolveri possint. SSL ad domina customes individua mappata est deinde automatico per integration via Let's Encrypt emittitur.

Si dominae customes tuorum tenantium sine SSL accidunt, verifica tabulam SSL applicationis Cloudways. Si certificat wildcard in ea activus est, removem, re-emitte certificatum standard Let's Encrypt solum ad dominum network principalem, et remove de omnibus entry clausulis wildcard ex `WU_CLOUDWAYS_EXTRA_DOMAINS`. Deinde re-trigger domain mapping (vel pati ad proximo) et integration incipiet emittere certificat per domenam.

## Troubleshooting {#troubleshooting}

### Problematum Connectionis API {#api-connection-issues}
- Verifica quod tua email et key API sunt rectae
- Verifica quod ID server et applicationis tuus sunt recti
- Assura quod account Cloudways tuus habet necessarias permissiones

### Problematicae Certificatus SSL {#ssl-certificate-issues}
- Cloudways exigit, ut dominae habent registros DNS validos qui ad server tuum ponunt antequam certificata SSL emittant.
- Integra valida registros DNS antequam certomata SSL petat.
- Si certificata SSL non emittuntur, verifica si dominae tua sunt propriamque modo ad adressam IP server tuus ponent.
- **Domini custom per tenant in stasis sine SSL?** Verifica tabulam Certificatus SSL applicationis Cloudways. Si certificat wildcard (manualiter instalatus, vel qui `*.your-network.com` coprit) est activus, Cloudways non emittent certificata Let's Encrypt pro dominis custom individuis mappatis. Substitue eum certificate Let's Encrypt standard quod solum domen network principal (`your-network.com`, `www.your-network.com`) coprit et remove quibusque entries wildcard ex `WU_CLOUDWAYS_EXTRA_DOMAINS`. Deinde re-trigger domini mapping (vel expecta pro uno successivo) et integra pete certomata per domenam.

### Dominium Non Aditum {#domain-not-added}
- Verifica logs Ultimate Multisite ad quosdam missagium erroris.
- Verificae si dominium iam in Cloudways additum est.
- Assura te quod plan Cloudways tuus numerum domiorum quibus additis sustinet.
