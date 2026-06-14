---
title: Fandaharan'ny WPMU DEV
sidebar_position: 4
_i18n_hash: 01cdaa5cf8aece1ca5c269d943e8a9e9
---
# Fandahana ny Fandraisana amin'ny WPMU DEV

## Famarahabana (Overview)
Ny WPMU DEV dia sehatra WordPress feno izay manolotra hosting, plugins ary serivisy ho an'ny tranonkala WordPress. Ity fandrindrana ity dia ahafahana mifandray mivantana ny domain sy mitantana ny sertifisikara SSL eo amin'ny Ultimate Multisite sy ny hosting an'ny WPMU DEV.

## Toetran'ny Fandraisana (Features)
- Fametrahana domain ho azy (Automatic domain syncing)
- Fitantanana sertifisikaran'ny SSL (SSL certificate management)
- Fandrefesana mbola mivelatra ny fahaizana manamarina ny sertifisikara SSL

## Fepetra Takiana (Requirements)
Ny fandrindrana dia mahafantatra ho anao raha mitazona amin'ny WPMU DEV ianao ary mampiasa ny API efa ao anaty. Tsy mila fanamboarana hafa mihitsy raha mitazona amin'ny WPMU DEV ianao.

Ny fandrindrana dia manamarina ny fisian'ilay constant hoe `WPMUDEV_HOSTING_SITE_ID`, izay voatanteraka ho azy rehefa mitazona amin'ny WPMU DEV ianao.

## Toromarika Fampidirana (Setup Instructions)

### 1. Famantarana ny Hosting an'ny WPMU DEV

Raha mitazona amin'ny WPMU DEV ianao, dia tokony efa voatanteraka ireo constant ilaina. Fantaro fa:

1. Ny constant `WPMUDEV_HOSTING_SITE_ID` dia voatanteraka ao anatin'ny tontolo iainanao (environment)
2. Manana fandraisana (membership) WPMU DEV mavitrika miaraka amin'ny API access ianao

### 2. Ampahamo ny Fandraisana (Enable the Integration)

1. Ao amin'ny admin WordPress anao, mandehana any Ultimate Multisite > Settings
2. Mandehana any amin'ny "Domain Mapping" tab
3. Mandroso any amin'ny "Host Integrations"
4. Ampahamo ny fandrindrana WPMU DEV (Enable the WPMU DEV integration)
5. Tsindrio ny "Save Changes"

## Ahoana no Fiasany (How It Works)

### Fametrahana Domain ho Azy (Domain Syncing)

Rehefa voafidy (mapped) ny domain ao amin'ny Ultimate Multisite:

1. Ny fandrindrana dia mampiasa ny API an'ny WPMU DEV mba hanampiana ny domain ao amin'ny kaontina hosting anao
2. Manampy azy ho www version koa izy ho azy
3. Ny WPMU DEV no mitantana ny fametrahana ny domain sy ny fanomezana sertifisikaran'ny SSL

### Fitantanana Sertifisikaran'ny SSL (SSL Certificate Management)

Ny fampifandra (integration) dia voara-dalà mba hampitomboana ny fahaizana manamarina ny sertifika SSL ho an'ny hosting WPMU DEV, satria mety mila fotoana ianao amin'ny famoronana sy fametrahana ireo sertifika SSL. Amin'ny ankapobeny, dia hanandrana mandra-pahatongan 10 izy ho an'ny fanamarinana ny sertifika SSL, raha oharina amin'ny fahaizana mahazatra 5.

## Fanamarihana Manan-danja

### Fandalana Domain (Domain Removal)

Amin'izao fotoana izao, tsy manome fomba ahafahana manala domain ny WPMU DEV API. Rehefa alefa ny fametrahana mapping domain ao amin'ny Ultimate Multisite dia ho eo amin'ny kaontina hosting WPMU DEV anao ilay domain. Mila manala azy manokana ianao amin'ny dashboard hosting WPMU DEV raha mila izany.

### Fandrefesana API (API Authentication)

Mampiasa ny key API an'ny WPMU DEV io fampifandraisana io, izay voatahiry ao amin'ny database WordPress ho toy ny safidy `wpmudev_apikey`. Apetraka azy ho voara-dalàna rehefa mifandray ny tranokalanareo amin'ny WPMU DEV ianao.

## Fanamarihana (Troubleshooting)

### Olana Amin'ny Fampifandraisana API
- Fantaro fa mifandray tsara ny tranokala anao amin'ny WPMU DEV
- Jereo raha voapetraka ny safidy `wpmudev_apikey` ao amin'ny database WordPress anao
- Antsoy mba hahazo antoka fa mavitrika ny fandraisana anjara (membership) an'ny WPMU DEV anao

### Olana Amin'ny Sertifika SSL
- Mety mila fotoana kely i WPMU DEV amin'ny famoronana ireo sertifika SSL (matetika 5 ka hatramin'ny 15 minitra)
- Voara-dalàna ny fampifandraisana mba hanandrana mandra-pahatongan 10 ho an'ny sertifika SSL
- Raha mbola tsy voarindra ireo sertifika SSL aorian'ny fanandratana maromaro, dia mifandraisa amin'ny sampan-draharahan'ny WPMU DEV

### Domain Tsy Ampidirina
- Jereo ny logs an'ny Ultimate Multisite raha misy hafatra fahadisoana (error messages)
- Fantaro fa tsy voarindra mialoha ilay domain ao amin'ny WPMU DEV
- Antsoy mba hahazo antoka fa manome fahaizana hosting WPMU DEV anao ny isan'ny domain izay ampiana.
