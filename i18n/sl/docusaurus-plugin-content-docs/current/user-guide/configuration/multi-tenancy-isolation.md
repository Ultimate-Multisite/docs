---
title: Izolacija za več najemnikov
sidebar_position: 12
_i18n_hash: 5aaf1504c3022f94b9aec9faaa4eda22
---
# Izolacija za več različic (Multi-Tenancy Isolation) {#multi-tenancy-isolation}

Ultimate Multisite: Multi-Tenancy 1.2.0 podpira izolacijo baze podatkov in datoteke na podpodpoddelih (subsite) za suverene najemnike. To ohranja podatke najemnika ločeno, hkrati pa ohranja konfiguracijo omrežja, računovodstvo in administracijo.

## Strategija izolacije {#isolation-strategy}

Uporabite suverenost izolacije za stranke, ki zahtevajo močnejše ločitev podatkov, posredno skladišče datoteka ali oddirovni okvir (host boundary).

Vsak suveren najemnik mora imeti:

- Oddano podpoddelno (tenant) bazo podatkov ali strategijo predskaznika baze podatkov, ki jo host omogoča.
- Oddano podpoddelno sistem datoteka (filesystem root).
- Vnos v registar najemnikov, ki povezuje podpoddel za njegovo bazo podatkov, osnovno poti, ime hosta in model izolacije.
- Rezultat verifikacije migracije pred tem, ko se najemnik ustopi v delovanje (live).

## Povezava z bazo podatkovnega hosta (Database host binding) {#database-host-binding}

Verzija 1.2.0 spremeni podrazlično vedenje povezave na isti računalniški sistem za suverene instalacije. Vrednosti kot so `localhost` normalizirane tako, da lahko Bedrock, FrankenPHP in WordPress instalacije v kontejnerjih omogočajo dodeljevanje dovoljenj in preverjanje dostopa glede na string hosta, ki ga MySQL dejansko vidi.

Ob konfiguriranju suverenega najemnika:

1. Vrednost baze podatkovnega hosta nastavite na vrednost, ki jo zahteva runtime najemnika.
2. Uporabite `localhost` za lokalne socket instalacije, če host pričakuje lokalne povezave.
3. Uporabite `127.0.0.1` ali ime servisa (service hostname) le v primerih, ko mu baza podatkovnega serverja omogoča privilegije na ta host.
4. Po spremembi povezave z hostom ponovite verifikacijo migracije.

Če poročila o verifikaciji kažejo neuspešne dodeljevanje dovoljenj, primerjte dodeljevanje uporabnika v bazi podatkov najemnika z konfiguriirano povezavo z hostom. Uporabnik, ki mu je dodeljeno za `user@localhost`, je drugačen od `user@127.0.0.1` ali `user@%`.

## Osnovno podpoddelno sistem datoteka (Filesystem root) {#filesystem-root}

Korenni root (tenant root) mora biti stabil med ponovnimi vkljuci in spreminjanjem. Izogibajte se časovnim lokacijam za montažo (temporary mount paths). Pri instalah na podlagi Bedrock, potrdite, da se tenant root nanaša na WordPress web root, ki ga pričakuje bootstrap sistema najema, ne le na projektni root.

## Redosled postavitve (Provisioning order) {#provisioning-order}

Za nove suverenske najemnike uporabljajte ta redosled:

1. Ustvarite vpis v registar najemnikov (tenant registry entry).
2. Ustvarite bazo podatkov za najemnika in uporabniško bazo podatkov.
3. Bootstrapajte šemo najemnika (tenant schema).
4. Postavite uporabnike najemnika.
5. Konfigurišite sistemske poti v sistemu datoteka najemnika (tenant filesystem paths).
6. Predvsimi verifikacijo migracije (migration verification).
7. Preklapajte usmerjanje (routing) ali DNS po uspešni preveritvi.

Ta redosled zagotavlja, da se najemniki, ki so še neprekriti, ne prejmejo promet pred temeljitvijo baze podatkov, uporabnikov in sistemske datoteke.

## Potoki upravljanja suverenih strank (Sovereign customer management flows) {#sovereign-customer-management-flows}

Ultimate Multisite v2.13.0 ohranja dejanja upravljanja strank na glavnem spletni strani, ko je suveren režim (sovereign mode) vklopljen. Najemnik lahko še vedno deluje kot izolirana WordPress instalacija, vendar dejanja, ki so usmerjena na stranke in se nanašajo na mrežne računovodske podatke, članstvo ali deljene račune, morajo stranko vrniti na glavno stran namesto da poskušajo dokončati dejanje v trenutnem runtime najemnika.

Potok za glavno stran se uporablja za:

- Prehod in spremembe načrtov (Checkout and plan changes).
- Pregled računa in dejanja z uporabo profila stranke (Account overview and customer profile actions).
- Obnovitve naslovov računovodske pošte in ekrane za upravljanje plačil (Billing address updates and payment-management screens).
- Pogledi na fakture in zgodovino plačil (Invoice and payment-history views).
- Dejanja upravljanja strani, kot so dodajanje ali odstranjevanje strani.
- Preklapanje šablonov (Template switching).
- Mapiranje domen in spremembe primarnih domen (Domain mapping and primary-domain changes).

Ko začne uporabnik eno od teh dejanj iz suverenega tenanta, Ultimate Multisite ustvarja ustrezen URL glavnega sistema in ohranja izvorno tarant (source tenant) kot cilj za vrnitev, če je to varno. To omogoča uporabnikom, da dokončajo upravljeno dejanje na mreženjskih podatkih, nato pa se vrnejo v kontekst taranta, ne duplicirajo pri čemer bodo stanje plačil in članstva v suverenih bazo podatkov.

Za operaterje je praktična pravila: ohranjajte strani za plačevanje (billing), računovodstvo (account), check-out, fakturo (invoice), template in upravljanje domena na glavnem sistemu za suverene mreže. Tenantske dashboarde lahko povezujejo z tistimi stranmi, vendar ostane glavni sistem virna resnica (source of truth) za dejanje.
