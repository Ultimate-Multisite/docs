---
title: Multi-tenancy izolitaĵo
sidebar_position: 12
_i18n_hash: 5aaf1504c3022f94b9aec9faaa4eda22
---
# Multi-Tenancy Isolatio {#multi-tenancy-isolation}

Ultimate Multisite: Multi-Tenancy 1.2.0 suportas izolacion per-subsite bazas de dates kaj sistemoj por sovrajn tenantoj. Tio sekvas separan lajn datumojn de tenantoj, plibordante la provizadon de la retoj, la fakturadon kaj la administradon.

## Izolacian strategio {#isolation-strategy}

Uzu de sovrajna izolacio por klientoj kiuj bezonas pli fortran data separacion, dedikitan sistemaj storo (filesystem storage) aŭ apartan host-limito.

Chak sovrajni tenanto devas havi:

- Un dedikiita tenant baza aŭ strategio prefikto de baza kaptita por la hosto.
- Un dedikiita root sistemo (root filesystem).
- Un entrado de registrio de tenantoj kiu mapas la siton al sia baza, la root parto, la nombro de la servero kaj la izolacia modelo.
- Un rezultato de migraverifikado antaŭ ol la tenanto konsideretas viva.

## Baza host ligado (Database host binding) {#database-host-binding}

Versio 1.2.0 ŝanĝas la defaulton komporton de ligado al sama makina baza por sovrajn instaloj. La valoro "al sama makina" kiel `localhost` estas normaligita, tiel Bedrock, FrankenPHP kaj kontainerizita WordPress instaloj povas doni kaj verifi pli permesojn kontraŭ la hosta stringo MySQL de fakto vidi.

Kiam vi konfigurigas sovrajn tenanton:

1. Definiti la bazan host al la valor, kiun bezonas la runtime de la tenanto.
2. Uzu `localhost` por lokaj soket instaloj, kiam la hosta esperas lokajn konektionojn.
3. Uzu `127.0.0.1` aŭ servn nomon (service hostname) nur kiam la baza servero donas privilegia al tiu hosto.
4. Farbet migraverifikadon post ŝanĝi la host ligadon.

Se verifikado raportas ne sukcesajn donojn, kompare la donojn de la bazaj utilizantoj de la tenanton kun la konfigurita host ligado. Utilanto donita por `user@localhost` estas malsama ol `user@127.0.0.1` aŭ `user@%`.

## Sistemo (Filesystem root) {#filesystem-root}

La root de la locatant (tenant) devasigi stabil sur restartaj kaj deplojaj. Evitu temporajn montaj kurboj. Por Bedrock-stile instaloj, konfirmiĝu, ke la root de la locanto indikas al la WordPress web root esperita de la tenant bootstrapo, ne nur al la projekto root.

## Ordino de provizoj (Provisioning order) {#provisioning-order}

Por novaj suverajn locantojn, uzu ĉi tiun ordon:

1. Krei la entron registron de la locanto (tenant registry entry).
2. Krei la bazan datum kaj bazan utilizanton de la databazo.
3. Bootstrapu la skemojn de la locanto (tenant schema).
4. Provizi lokantajn utilizantojn.
5. Konfiguri la fizikajn kurboj de la sistemo de la locanto (tenant filesystem paths).
6. Firmi verifikon de migraĵo (migration verification).
7. Migri la rutadon aŭ DNS post kiam verigo pasas.

Ĉi tiu ordino permesas, ke partaŭ izolita lokantoj ne ricevas trafikon, kiel baziga skribanto, utilizantoj kaj fizikaj kurboj estas جاهzaj.

## Fluo de la administriĝo de suverajn klientoj (Sovereign customer management flows) {#sovereign-customer-management-flows}

Ultimate Multisite v2.13.0 mantas akciojn de administriĝo de klientoj sur la ĉefa sitio, kiam suverna modo estas aktivita. La locanto povas plu fari kiel izolitan WordPress instalilon, sed klient-orientitaj akcioj, kiuj dependas de retoj fakturaj, aĉetado (membership) aŭ partaj konto datumoj, devas diri la klienton ĉu al la ĉefa sitio en sto, en celo ne provi plenumi la akcion intern la runtime de la locanto.

La fluo de la ĉef-sitio aplikaĝas al:

- Aĉetado kaj planaj ŝanĝoj.
- Konta vidigo kaj akcioj pri la profilo de la klienton.
- Aktualizoj de fakturaj adresoj kaj skenoj de pagament-administrado (payment-management screens).
- Vidoj de fakturo kaj historio de pagoj.
- Akcioj de administriĝo de la sitio, kiel aĉadi lokojn aŭ dili lokon.
- ŝanĝado de templatoj (Template switching).
- Domeno-mapado kaj ŝanĝoj de primara domeno (primary-domain changes).

Kiam la kliento fidas unu el de ĉi ti agoj el sovereina tenanto, Ultimate Multisite konstruas la korespondantan URL de la ĉefa sito kaj konservas la vorton origino (source tenant) kiel celon reveniĝi, kiam tio estas segura. Tio permesas klientojn plenumi la administritan agadon kontraŭ la retoj de la registroj, kaj tiam reveni al la konteksto de la tenanto sen dupliki la fakturadon aŭ la statuton de la aĉetanto en la soverebla baza dato.

Por operatoroj, la praktika rulo estas: sekvi la fakturaj, konta, ĉekoutaj, fakturo-, templat- kaj domeno-administrado paĝojn sur la ĉefa sito por soveregej retoj. La dashboard'oj de tenantoj povas linki al ti paĝoj, sed la ĉefa sito restas vorto origino (source of truth) por la agado.
