---
title: Integrado WPMU DEV
sidebar_position: 4
_i18n_hash: 01cdaa5cf8aece1ca5c269d943e8a9e9
---
# Integrado WPMU DEV

## Ĝenerala Informoj
WPMU DEV estas komprenita WordPress platformo, kiu ofertas alojadon, pluginajn kaj servojn por WordPress-sitoj. Esta integracio permesas aŭtomatan domen sincronigon kaj SSL-sertifikatoj laĉon inter Ultimate Multisite kaj WPMU DEV alojado.

## Funkcioj
- Aŭtomata domeno sincronigo
- SSL-sertifikatoj laĉo
- Elareta provoj de verifikado de SSL-sertifikatoj

## Requisitoj
La integracio aŭtomate detektas, ĉu vi alojas sur WPMU DEV, kaj uzas la integritan API. Ne serĉas plia konfiguracio, se vi alojas sur WPMU DEV.

La integracio kontrolas la ĉezon de la konstanto `WPMUDEV_HOSTING_SITE_ID`, kiu aŭtomate definita estas pri alojado sur WPMU DEV.

## Monti Instruoj

### 1. Verifi WPMU DEV Aloĝadon

Se vi alojas sur WPMU DEV, necesaj konstanta devus esti déjà definita. Verifuji ke:

1. La konstanto `WPMUDEV_HOSTING_SITE_ID` estas definita en viaj aĉa taboro
2. Vi havas aktivan WPMU DEV-membrocon kun API-akceso

### 2. Aktivuji la Integracion

1. En via WordPress administradtobo, diruji Ultimate Multisite > Settings (Konfigurado)
2. Navigu al la tabelo "Domain Mapping" (Domeno Mapado)
3. Scrolluji nedonatan al "Host Integrations" (Aloĝadintegracoj)
4. Aktivuji la WPMU DEV integracion
5. Klikuji sur "Save Changes" (Konservu ŝanĝojn)

## Kiel Ĝi Funkcias

### Domeno Sincronigo

Kiam domeno estas mapita en Ultimate Multisite:

1. La integracio uzas la WPMU DEV API por aĉi la domenon al via alojado konto
2. Ĝi ankaŭ aŭtomate aĉas la www-version de la domenon
3. WPMU DEV gestas la domeno konfiguracion kaj SSL-sertifikatojn eldonon

### SSL-Sertifikatoj Laĉo

La integracio estas konfigurita pliigi la numeron de provojoj por verifi SSL certifo.joj por hostado de WPMU DEV, ĉar tio povas bezoni tempon por eliri kaj instali SSL certifojn. Per defolo, ĝi provos ĝis 10 fois por verifi SSL certifon, komparita al la standardaj 5 provojoj.

## Importanta Notoj

### Domeno Eliminado

Aktualne la WPMU DEV API ne donas manjon por eliri domenojn. Kiam mappado de domeno estas elire en Ultimate Multisite, la domeno restus en via konto de hostado WPMU DEV. Vi bezonas eliri ĝin manuale de la dashboard de hostado WPMU DEV se necesas.

### API Autentigo

La integracio uzas la WPMU DEV API klavon, kiu estas apartigita en via WordPress bazdatado kiel la opcio `wpmudev_apikey`. Ĝi estas aŭtomate konfigura pri konekti via sitio al WPMU DEV.

## Problemo-solviĝo

### Problemo kun API Konektado
- Verifi, ke via sitio estas bone konektita al WPMU DEV
- Kontrolu, ke la opcio `wpmudev_apikey` estas setita en via WordPress bazdatado
- Assureti, ke via WPMU DEV membereco estas aktiva

### Problemo kun SSL Certifoj
- WPMU DEV povas bezoni tempon por eliri SSL certifojn (solue 5-15 min.)
- La integracio estas konfigurita por kontroli ĝis 10 fois por SSL certifoj
- Se SSL certifoj ne estas elirit post multaj provojoj, kontakti la subtonon de WPMU DEV

### Domeno Ne Adata
- Kontrolu la logojn de Ultimate Multisite por ĉion erariĝa mesaĝo
- Verifi, ke la domeno ne estas déjà data al WPMU DEV
- Assureti, ke via plan de hostado WPMU DEV subtenas la numeron de domenoj, kiujn vi estas rajdanta
