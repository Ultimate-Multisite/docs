---
title: Multitenancy izolazioa
sidebar_position: 12
_i18n_hash: 5aaf1504c3022f94b9aec9faaa4eda22
---
# Multi-Tenancy Isolation

Ultimate Multisite: Multi-Tenancy 1.2.0 suporta izolazio per baza datumeania eta sistemak (database and filesystem isolation) subsite-ei artean, denbora edo erabilera nagusi batzuk (sovereign tenants) irudien bitarte. Horrek tenant datuak eskaintzen duela, baina sistema-nivelaren provisionamendua, fakturazioa eta administrazioa ontzen duela.

## Estrategia izolazioa {#isolation-strategy}

Datumeania espezializatutako izolazioa (sovereign isolation) erabilizten dituztezu horretarako kliuntzak, datu-eraketa handiagoa behar dituztenak, sistemak eskaintzen duen filesystem-a eskaintzeko, edo host boundary bat eskaintzeko.

Mundia espezializatutako tenant-ek (sovereign tenants) lehiak:

- Bidea datumeania espezializatuta dagoen bazailean edo bazarra (database prefix strategy), host-erarekin ematen den.
- Filesystem-aren bidea eskaintzen duen dedicated root.
- Tenant registry entry bat, zein sitea database-re, root path-ra, hostname-ra eta izolazio modelera erakitzen duela.
- Tenant-a "live" (erabilera) irizten aurretik migrazio bidezko bidearen (migration verification) rezultatu bat.

## Database host binding {#database-host-binding}

Version 1.2.0-ek hasieran jakinarazitako soilako makina-gaindian (same-machine) host binding-en erabilera aldatzen du den sovereign installak dira. `localhost` garrantzitsuak jatorri batzuk (Bedrock, FrankenPHP eta containerized WordPress instalazioak) irudien hasterri eta permi-tzen dituzteko, MySQL-ek gertatzen duen host string-arekin erabilera eta permi-tzen bidearen normalizatu dira.

Sovereign tenant bat konfiguratzen duenean:

1. Database hosta (database host) tenant runtime-ek behar duen valoran emitu.
2. Lokal socket instalazioetan, hosta lokal konektioak eskatzen dutelako `localhost` erabilizten dituztezu.
3. Database serverra lehiak ematen duenean edo permi-tzen duenean, `127.0.0.1` edo serbisio hostname (service hostname) erabilizten dituztezu.
4. Host binding aldatuaren ondoren migrazio bidezko bidearen (migration verification) iruditzen duzu.

Iruditzak lehiak ez duela informazioa ematen, tenant DB user-ek ematutako permi-tzenak host binding-arekin erakutuz erakunde. `user@localhost`-eko ematuta duen erabiltzaileak `user@127.0.0.1` edo `user@%`-rekin ezberdina da.

## Filesystem root {#filesystem-root}

Zeta irkiarra (tenant root) da ez duña izan behar da estabilizatu, gurean jarraitu eta despliegamentuetan. Ez dago erreguntzak edo testuak erabiltzea. Bedrock-estilo instalazioetako kasuetan, konprimatu daiteke hain atalari (tenant root) WordPress web root-eko dela, ez berria proiektu root-eko dela, gaurki konprimatu behar da.

## Provisioaren jarraitu dira {#provisioning-order}

Hobitzen irriberri erreguntzak (sovereign tenants) besteak jartzeko, hategi hau:

1. Irreguntza erreguntzak (tenant registry entry) sortuatu.
2. Irreguntza datuak eta erabiltzailearen datu-erailua (database user) sortuatu.
3. Irreguntza esquema (schema) bootstrea.
4. Irreguntza erabiltzaileiak (tenant users) provisioatu.
5. Irreguntza sistema-datu-lehiak (filesystem paths) konfiguratzea.
6. Migrazio bidezko bidezaren (migration verification) jarri.
7. Bidezaren pasatuta irudinetas edo DNS aldatzea.

Hau jarraitu dira, datu-erailua, erabiltzaileak eta sistema-datu-lehiak prest egonbeira izan baino irudinetas ez dagoen irreguntzak (tenants) trafiku hartzen aurretik.

## Irriberri klientziaren jatorpen jarraitu dira {#sovereign-customer-management-flows}

Ultimate Multisite v2.13.0, irriberri moduko (sovereign mode) aktiboa jakin duen bitartean, klientziaren jatorpen jarduerak (customer management actions) main site-an jarraitzen ditu. Irreguntza bat ere erregulatu WordPress instalazioa bezala jarraitu dezake, baina datu-erabiltzailei edo irudinetas arkitzen datu-erabiltzailei dependentzen jarduerak (network billing, membership edo shared account data) jarduera horiek ez du beharrezkoa main site-an itxarri, irriberri runtime-aren beldur jarduera amaitu eta jarduera nahi du.

Main site-aren jarraitu dira:

- Checkout eta plan handia aldatzea.
- Kontua ikustea eta klientziaren profila jarduerak.
- Faktura datuen aldatzea eta labenguen administrazio eskuratzeko ekraneak.
- Faktura eta labenguen historia ikusteari.
- Site administrazio jarduerak, gureak sortzeko edo site bat hartzeko.
- Template-ak aldatzea.
- Domain mapoak eta primary-domain-ek aldatzea.

Kunde bat soilako txartelari (sovereign tenant) gabe hainbat jarduera egiten duenean, Ultimate Multisite horrek esponbideko nagusi-site URL-a sortzen du eta modu seguragarri jakin daiteke, source txartelariak itarretzeko aukera ematen du. Horrek kundekiek administrazio egin behar diren jarduerak arrakunde (network records) beste batzuk ezduan, eta billing edo membership estadoa database-an duplikatzen ez duenean, txartelaren kontekstean itarretzea posible egiten du.

Operatorkari buruzko praktiko erregua da: nagusi sitean txartelariak (sovereign networks) beste funtzioak (billing, account, checkout, invoice, template, domain-management) available jarri behar dira. Txartelaren dashboardek horiek mga URL-ekin link egin dezakete, baina jardueraren source truth (gure gure gure errealitatea) nagusi sitea izango da.
