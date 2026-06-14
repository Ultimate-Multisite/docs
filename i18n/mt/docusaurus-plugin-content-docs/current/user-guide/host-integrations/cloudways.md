---
title: Integrazzjoni Cloudways
sidebar_position: 3
_i18n_hash: 09425d90def2b755c27a698d78d7d4b0
---
# Integrà Cloudways

## Panoramika
Cloudways huwa piattaforma di hosting cloud gestita li ti permet in deploya siti WordPress su vari fornitori cloud come DigitalOcean, AWS, Google Cloud, u più. Questa integrazzjoni ti permessa sincronizzazzjoni automatika tal-domain u it-talamenti (SSL certificate management) bejn Ultimate Multisite u Cloudways.

## Funzjonalità
- Sincronizzazzjoni automatika tal-domain
- Iżgurament tal-certifikati SSL
- Support għal domini ekstra
- Validazzjoni DNS biex tiddir il-SSL certificates

## Reġistrazzjonijiet
Il-konstanti li jipprovvdu fil-file `wp-config.php` tiegħek għandhom jkunu definiti:

```php
define('WU_CLOUDWAYS_EMAIL', 'il-email_tiegħed_tal_cloudways');
define('WU_CLOUDWAYS_API_KEY', 'il-api_key_tiegħed');
define('WU_CLOUDWAYS_SERVER_ID', 'id_tal_server');
define('WU_CLOUDWAYS_APP_ID', 'id_app');
```

B'opzjoni, tista' definixxi wkoll:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'lista_tal_domini_comma_separati');
```

## Istruzzjonijiet ta l-Istawarra (Setup)

### 1. Iġib il-Credentials API tal-Cloudways

1. Idħol fil-dashboard tiegħek tal-Cloudways
2. Irridi għal "Account" > "API Keys"
3. Genera un API key se ma għandekx hemm
4. Kopja l'email u l-API key tiegħek

### 2. Iġib id-Server u l-Application IDs tiegħek

1. Fil-dashboard tiegħek tal-Cloudways, irridi għal "Servers"
2. Sigli l-server li jipprovvide il-multisite WordPress tiegħek
3. L-Server ID huwa visibell fil-URL: `https://platform.cloudways.com/server/{SERVER_ID}`
4. Irridi għal "Applications" u sigli l-app WordPress tiegħek
5. L-App ID huwa visibell fil-URL: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. Aggiungi i Konstanti għal wp-config.php

Aggiungi il-konstanti tal-ġejja l-file tiegħek `wp-config.php`:

```php
define('WU_CLOUDWAYS_EMAIL', 'email tal-Cloudways tiegħek');
define('WU_CLOUDWAYS_API_KEY', 'api key tal-Cloudways tiegħek');
define('WU_CLOUDWAYS_SERVER_ID', 'id tal-server tal-Cloudways tiegħek');
define('WU_CLOUDWAYS_APP_ID', 'app id tal-Cloudways tiegħek');
```

Jekk għandek domini **eksternali** (fu l-network tiegħek multisite) li jidħlu b'mod wieħed fuq lista tal-alias ta Cloudways:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'extradomain1.com,extradomain2.com');
```

:::warning Ma tinklux il-wildcard tiegħek mnox
Ma tgħadd `*.your-network.com` (jew qualsiasi pattern ta subdomain tal-network tiegħek) għal `WU_CLOUDWAYS_EXTRA_DOMAINS`. Applika l-link [Importanti — il problema SSL wildcard](#important--wildcard-ssl-pitfall) li jxuq għaliex minn li ma jippermettix l-certifikati SSL per tenant b'mod partikolari.
:::

### 4. Iżna' l-Integrazzjoni (Enable the Integration)

1. F'admin tal-WordPress tiegħek, tnaviga għal Ultimate Multisite > Settings
2. Naviga għall-tab "Domain Mapping"
3. Scrolla' wara għal "Host Integrations"
4. Iżna' l-Cloudways integration
5. Klikka fuq "Save Changes"

## Come Funziona (How It Works)

### Sincronizzazzjoni tal-Domini (Domain Syncing)

Meta dominu jinkludi fil-Ultimate Multisite:

1. L-integration tiffaċċja kull domini li huma mappati attualmente
2. TIddejna d-dominu nuwveli fl-lista (japplika www se hija applikabbli)
3. Ttientja l-lista kollha għal Cloudways per id-API
4. Cloudways tiffaċċja l-alias tal-domini għall-app tiegħek

Nota: L-Cloudways API teħtieġ li tqed l-lista kollha tal-domini kull volta, mhux biss li tzid jew tixleb domini individwali.

### Ażżurament tal-Certifikat SSL (SSL Certificate Management)

Wara li id-domini jsincronizzaw:

1. L-integration tqed se domini għandhom record DNS validi li jidironqu għall-server tiegħek
2. Ttientja riċieħ tal-Cloudways biex tistawli sertifikati Let's Encrypt SSL għal domini dani
3. Cloudways tiffaċċja l-issiyewwa u l-installazzjoni tal-certifikat SSL

Il-integràsi tista biex magħmel l-konfigurazzjoni tal-Cloudways, hija sempre tistaqreq sertifikat **standard** (mottali) Let's Encrypt. Jekk fornixiet pattern wildcard f `WU_CLOUDWAYS_EXTRA_DOMAINS`, il-`*.` inizjali jitqassma qabel rieddu l-SSL — il-wildcard ma jinkludixxxxsexxi xieħu b'din l-integràsi. Biex tista tista' u sertifikat wildcard fuq Cloudways, terġa tista' tgħallimha manualment, iżda ma għidhaq dan jipparxxi l-issessjoni Let's Encrypt per domini kustom mappati (ara l-pitfall taħt).

## Domini Esterni (Extra Domains)

Il-costante `WU_CLOUDWAYS_EXTRA_DOMAINS` tista' tgħinek biex tspecifika domini **esterni** aggiemali li għandhom dejjem biex jkun fuq l-lista alias tal-applikazzjoni Cloudways. Użaha għal:

- Domini esterni li ma jinidaxxhom Ultimate Multisite (e.g., siti ta marketing separati li jaqgħu flimapplikazzjoni Cloudways isxi).
- Domini parkati jew staging li tista' dejjem fuq l-lista alias tal-applikazzjoni.

**Ma użaq dan costantex għal subdomain wildcard tal-rete tiegħek (e.g., `*.your-network.com`).** Ara l-pitfall ta SSL wildcard taħt.

## Importanti — Il-Pitfall ta SSL Wildcard

Xogħol ġud comun meta tgħalli l-setup default ta Cloudways huwa li tista' taddixx pattern wildcard bħal `*.your-network.com` f `WU_CLOUDWAYS_EXTRA_DOMAINS`, jew li tista' taddixx sertifikat SSL wildcard tal-Cloudways għal dan il-wildcard manualment.

**Jekk tfarri dan, Cloudways sarra rifiuta tiegħu tiqgħod sertifikati Let's Encrypt għall-domini kustom per tenant li jipprovvidi Ultimate Multisite.** Cloudways tista' tistitu sertifikat SSL attiva fuq l-applikazzjoni b’kunsidra, u sertifikat wildcard preesistenti fuq l-applikazzjoni tista' tikkabbru l-issessjoni Let's Encrypt per domini kustom li tista' tista'.

### Setup SSL Rekommandi ta Cloudways għal rete Ultimate Multisite

1. F' tab **SSL Certificate** tal-applikazzjoni ta Let's Encrypt standard, li jikkapsula biss `your-network.com` u `www.your-network.com` — ma kienet wildcard.
2. Ma tikkuns `*.your-network.com` (jew qualsiasi pattern ta subdomain tal-network tiegħek) f' `WU_CLOUDWAYS_EXTRA_DOMAINS`. Irreżerva dan l-constant għal **domeni esterni** biss.
3. Icrea il-wildcard subdomain per tenant fuq leblu **DNS** biss (rekord `A` għal `*.your-network.com` li jippunta għall-IP tal-server Cloudways tiegħek) biex subsites jilħaq. Il-SSL għad domeni kustom mappati individwali jitissierqa awtomatik mill-integrazzjoni minn Let's Encrypt.

Jekk iddomeni kustom tal-tenantijiet qed magħqubien b'SSL, tikkontrolla l-tab SSL ta Cloudways. Jekk certificat wildcard attiva f'hekk, eliminali, issierqa certifikat standard Let's Encrypt għad dominu tal-network primari biss, u eliminali kwalunkw ittrattament wildcard minn `WU_CLOUDWAYS_EXTRA_DOMAINS`. Immen l-mpossib bliħed mapping ta domenu (o tqattel għall-li jġi wara) u l-integrazzjoni tibda issierqa certifikat per dominu individwali għal jieder.

## Problemi biex tiġi sorwali (Troubleshooting)

### Problemi bejn konnessjoni API
- Verifika li l-email tiegħek u il-API key huma korretti
- Kontrolla li l-server tiegħek u l-application IDs huma korretti
- Assicurajt li l-account Cloudways tiegħek għandu l-permess li jħtieġ.

### Problemi Certifikat SSL
- Cloudways għandu li domini jkun għandhom record DNS validi li jidironixx għall-server tiegħek qabel ma jissira sertifikati SSL.
- Il-integrazzjoni tivverifika il-record DNS qabel ma titlob sertifikati SSL.
- Jekk sertifikati SSL ma jistgħux jiġu emminati, verifiki li dominijk huma mposa b'mod appropriat għall-indirizzju IP tal-server tiegħek.
- **Domini kustom b'per-tenant li huma bloccati mingħajr SSL?** Verifika l-tab ta Sertifikat SSL fil-applikazzjoni Cloudways. Jekk sertifikat wildcard (installata manualment, jew li tgħmli copertura għal `*.your-network.com`) hija aktiva, Cloudways ma jissirax emminare sertifikati Let's Encrypt għal domini kustom li huma mmapati b'mod individwali. Iġiegħel il-eżistenza tiegħek b'sertifikat Let's Encrypt standard li jipprovvidi għall-domaina ta' reġistrazzjoni (network) primarja (`your-network.com`, `www.your-network.com`) u eliminali kwalunkwe entry wildcard min `WU_CLOUDWAYS_EXTRA_DOMAINS`. Immen it-trigger domini mapping (jew attenja għall-li jġi dik li jġi) u l-integrazzjoni titlob sertifikati b'domaina.

### Domini Mġobbien
- Verifika il log tal Ultimate Multisite għal pirċa msgji speċifi.
- Verifika li dominu ma huwa giàm mġobb mill-Cloudways.
- Assigurja li l-plan ta Cloudways tiegħek jippoġġa l-numa ta domini li qed tmur aġixxi.
