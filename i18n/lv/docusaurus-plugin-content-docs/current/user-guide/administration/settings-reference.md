---
title: Iestatījumu atsauce
sidebar_position: 11
_i18n_hash: d9ab375be74a5dff1aaf4f4eaf80c3be
---
# Iestatījumu atsauce

Šī lapa apkopo iestatījumus, kas ietekmē ikdienas administrēšanu un nesenās uzvedības izmaiņas Ultimate Multisite.

## Citas opcijas {#other-options}

Apgabals **Citas opcijas** ir pieejams sadaļā **Ultimate Multisite > Settings > Login & Registration**.

| Iestatījums | Apraksts |
|---|---|
| **Iespējot Jumper** | Rāda Jumper ātrās navigācijas rīku administrēšanas apgabalā. Izmantojiet to, lai pārietu tieši uz Ultimate Multisite ekrāniem, tīkla objektiem un atbalstītajiem administrēšanas galamērķiem. Atspējojiet to, ja nevēlaties, lai šī saīsne būtu redzama. |

## Kļūdu ziņošana un telemetrija {#error-reporting-and-telemetry}

Iepriekšējais kļūdu ziņošanas piekrišanas iestatījums ir noņemts no iestatījumu lapas. Anonīma telemetrija ir atspējota, un nav UI slēdža, lai to iespējotu.

Ja uzturat iekšējas darba instrukcijas vai ekrānuzņēmumus iestatījumu lapai, noņemiet atsauces uz veco kļūdu ziņošanas piekrišanas lauku, lai administratori nemeklētu iestatījumu, kas vairs nepastāv.

## Importēšanas/eksportēšanas iestatījumi {#importexport-settings}

Iestatījumu cilne **Import/Export** apraksta, kurus iestatījumus tā kontrolē, un tieši sasaista ar **Ultimate Multisite > Site Export** vietnes un tīkla arhīviem. Izmantojiet iestatījumu cilni importēšanas/eksportēšanas konfigurācijai, izmantojiet **Tools > Export & Import** vienas vietnes eksportēšanas/importēšanas darbplūsmai un izmantojiet Site Export rīku, kad nepieciešams pilns Network Export arhīvs.

## Domain Seller HostAfrica bilances brīdinājums {#domain-seller-hostafrica-balance-warning}

Kad Domain Seller papildinājums ir savienots ar HostAfrica, tīkla administratori tagad redz noraidāmu brīdinājumu par zemu bilanci, ja tālākpārdevēja konta bilance ir pārāk zema uzticamai domēnu reģistrācijas vai atjaunošanas apstrādei.

Uztveriet šo paziņojumu kā operatīvu brīdinājumu: papildiniet HostAfrica tālākpārdevēja bilanci, pirms pieņemat vairāk apmaksātu domēnu reģistrāciju, pēc tam atgriezieties Domain Seller iestatījumos vai domēnu uzraudzības ekrānā, lai apstiprinātu, ka reģistrācijas un atjaunošanas var turpināties normāli.

## AI provider savienotāja iestatījumi {#ai-provider-connector-settings}

AI provider savienotāja iestatījumi tagad rāda tikai atbalstītos OAuth kontu pūlus:

| Provider | Iestatīšanas plūsma |
|---|---|
| **Anthropic Max** | Savienojiet vienu vai vairākus Anthropic Max kontus ar OAuth pogu. Izmantojiet manuālo OAuth rezerves risinājumu, ja smilškastes pārlūks nevar automātiski pabeigt pāradresāciju. |
| **OpenAI ChatGPT/Codex** | Savienojiet ChatGPT kontus, izmantojot to pašu OAuth pūla darbplūsmu. Savienotāja atbalstītās darbības var izmantot ChatGPT Codex rīku izsaukumus pēc tam, kad konts ir savienots. |
| **Google AI Pro** | Savienojiet Google AI Pro kontus, izmantojot OAuth, pēc tam atsvaidziniet savienotāju, ja kontu saraksts nekavējoties neatjauninās. |

Cursor Pro vairs nav atbalstīts provider. Noņemiet vecos iekšējos ekrānuzņēmumus, darba instrukcijas vai ievadapmācības soļus, kuros minēti Cursor Pro iestatīšanas lauki vai savienotāja ceļi.

Pievienojot vai noņemot provider kontus, ievadiet derīgu e-pasta adresi kontam, kas tiek atsvaidzināts vai dzēsts, un saglabājiet provider iestatījumus pirms savienotāja nodrošināto darbību testēšanas.
