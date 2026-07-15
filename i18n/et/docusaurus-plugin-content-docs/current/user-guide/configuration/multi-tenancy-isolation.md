---
title: Multi-tenants eraldamine
sidebar_position: 12
_i18n_hash: 5aaf1504c3022f94b9aec9faaa4eda22
---
# Multi-tenancy eraldus

Ultimate Multisite: Multi-Tenancy 1.2.0 toetabist per-subsite database ja failisüsteemi isoleerimise jaoks isikomaanlikud (sovereign) klientidele. See säilitab klientide andmeid eraldatud, samal ajal kui säilitatakse võrku tasandilne provisjonimine, laskmine ja administraatorlik juhtimine.

## Isoleerimise strateegia {#isolation-strategy}

Kasutage isikomaanliku isoleerimist klientide jaoks, kes nõuavad tugevamat andmete eraldamist, eksklusiivset failisüsteemi salvestust või eraldi hosti piiri.

Kõik isikomaanlikud klientid peavad olema:

- Eraldatud klientdatabase või database prefixi strateegia, mis on hostil heaks kinnitatud.
- Eraldatud klientfailisüsteemi juur (root).
- Klientregistri sisseandmine, mis ühendab veebile database, juurtee, hostnimi ja isoleerimise modeli.
- Migratsiooni kinnituse tulemus enne kui klienti aktiveeritakse.

## Database host binding {#database-host-binding}

Versioon 1.2.0 muudab pooltistoleva (same-machine) host bindingu käitumist isikomaanlikudel installidel. Pooltistoleva väärtused, nagu `localhost`, normaliseeruvad nii, et Bedrock, FrankenPHP ja kontseiniseeritud WordPress installid saavad luba ja kinnitada lubusehostingu (permissions) MySQL-ile, mida server tegelikult näeb hoststringuna.

Klientide konfiguratsiooni ajal:

1. Asetage database hosti soovitud klient runtime'ile nõutud väärtuseks.
2. Kasutage `localhost` loka sokkeett installide jaoks, kui host ootab loka ühendusi.
3. Kasutage `127.0.0.1` või ainult teenuse hostnimi ainult siis, kui database server annab õigused sellele hostile.
4. Käige migratsiooni kinnitus pärast host bindingu muutmist.

Kui kinnituse raportid näitavad lubusehindamise ebaõnnestusi, võrdage klientide DB kasutaja andmeid konfiguratsiooniga seotud host bindinguga. Kasutajale antud õigus `user@localhost`-ile on erinev `user@127.0.0.1`-st või `user@%`-st.

## Failisüsteemi juur {#filesystem-root}

Lendija juurdepunkt on vaka lahendada käivitamise ja lahenduste lahendamise ajal. Vältige hetkeseid mount path'e kasutamist. Bedrocki stiilis installide jaoks kinnitage, et juurdepunkt viitab WordPressi veebjuurile, mida tenant bootstrap ootab, mitte ainult projektijuurile.

## Juurdepunkt järjestus {#provisioning-order}

Uusest suvereenilistest tenantidest kasutage järgmist järjestust:

1. Luue tenanti registreerimise sisseandmine (tenant registry entry).
2. Luue tenanti database ja database kasutaja.
3. Bootstrapige tenanti skema.
4. Juurita tenanti kasutajad.
5. Konfigureerige tenanti failiühenduste teeaded.
6. Juhita migratsiooni kontroll.
7. Ühendage routing või DNS pärast kontrolli läbima.

See järjestus tagab, et osaliselt eraldatud tenantid ei saada trafik enne kui database-kirjuta, kasutaja ja failiühendused on valmis.

## Suvereeniliste kliendite juhtimise protsessid {#sovereign-customer-management-flows}

Ultimate Multisite v2.13.0 säilitab kliendite juhatamise toimingud pealise veebilehel, kui suvereeniline režiim on aktiveeritud. Tenanti saab kasutada eraldatud WordPress installina, kuid klientidega seotud toimingud, mis sõltuvad võrku lahendustest, jälgimisest või jaotatud konti andmetest, peaksid kliendit tagasi peale veebilehele suunama instead of üritada teostada toimingu tenanti käivituse all.

Pealise veebilehe protsess on kehtutav:

- Checkout ja plaanimuudatused.
- Konti ülevaade ja kliendiprofiili toimingud.
- Lahendusadresses muutmid ja maksukontrolli ekrahid.
- Faktuuride ja maksukasmiti vaadised.
- Veebilehe juhtimise toimingud nagu veebilehed lisäämine või veebilehe eemaldamine.
- Templi ülemine.
- Domeenide mappimine ja primäärse domeeni muutmid.

Kui, kui klient teostab üht etasist ühe sellest toimingust isiklikult tsantsist (sovereign tenant), loodi Ultimate Multisite vastava pealiste veebilehe URL-i ja säilitab lähtevate etasisti tagastule viimatuksena, kui see on turvaline teha. See võimaldab klientide suorita juhitud toimingu võrku registreidel vastu, kuid tagastuvõrku etasist ilma arvestamata ühtlustatud lahenduse või jälgimiskohja staatust sovereign database'is.

Operatsioonide jaoks on praktiline reegel: hoidke pealiste veebilehe all olevad lahendus-, konto-, ostukorvi, faktura-, malli ja domeeni haldamise lehed saadaval sovereign networkide jaoks. Etasisti dashboardid võivad neid lehti linkida, kuid pealiste veebilehe on toimingu lähtev tõde.
