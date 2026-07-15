---
title: Dnevnik sprememb prodajalca domen
sidebar_position: 99
_i18n_hash: 6b9be73c1503d8df8a806bb02b241873
---
# Dnevnik sprememb Domain Seller

Različica 1.3.0 - Izdano 2026-06-02
- Novo: Dodano opozorilo za network-admin, ko stanje preprodajalca HostAfrica pade prenizko
- Novo: Dodano samodejno preslikavanje novo registriranih domen na omrežno spletno mesto
- Popravek: Zahteve za polja registranta uporabljene samo pri registraciji nove domene
- Popravek: Obvestila o spremljanju stanja je zdaj mogoče opustiti
- Popravek: Zagotovljeno je, da se podatki za obračun registranta v WooCommerce ohranijo
- Popravek: Uveljavljene zahteve za kontakt registranta med registracijo
- Popravek: Preprečeno ustvarjanje izdelkov za registracijo domen z 0-% pribitkom
- Popravek: Ohranjene izbire domen in cene skozi potek seje checkout
- Popravek: Izboljšan prikaz valute cen domen HostAfrica
- Popravek: Izboljšano vedenje form-action pri checkout za preprečevanje neujemanj query-var jedra WP
- Izboljšano: Dokumentacija za konfiguracijo preprodajalca HostAfrica povezana v navodilih za nastavitev

Različica 1.2.0 - Izdano 2026-05-25
- Novo: Dodan HostAfrica kot integracija za prodajo domen s podporo za checkout, čarovnika za nastavitev, iskanje, TLD/cene, registracijo, podaljšanje, prenos, imenski strežnik, DNS, EPP kodo, registrar lock in ID protection
- Novo: Dodan Openprovider kot integracija za prodajo domen s podporo za cene za preprodajalce, registracijo, podaljšanje, prenos, imenski strežnik, DNS, EPP kodo, registrar lock, WHOIS privacy in sinhronizacijo TLD
- Novo: Dodan Hostinger kot integracija za prodajo domen, ki uporablja skupni Hostinger API token iz osnovne integracije za preverjanja razpoložljivosti, registracijo, posodobitve imenskih strežnikov, registrar lock in WHOIS privacy
- Izboljšano: Dodani docblocki za dejanja življenjskega cikla domen in filtre za smernice integracije za razvijalce
- Izboljšano: Posodobljeni metapodatki združljivosti plugin na WordPress 7.0 v readme dodatka
- Izboljšano: Posodobljene predloge za načrtovanje, uporabljene za usklajevanje prihajajoče izdaje

Različica 1.1.0 - Izdano 2026-05-08
- Novo: Ustvarjanje DNS zapisa (add_dns_record) implementirano za registrarje ResellerClub, Enom in OpenSRS
- Popravek: Privzeti razčlenjevalnik DNS Records zdaj dopušča žetona {DOMAIN} in {SITE_URL}
- Popravek: Slugi polj za izbiro domene pri checkout so namespaced, da se prepreči trk s site_url

Različica 1.0.8 - Izdano 2026-05-07
- Popravek: Cene domen ResellerClub zdaj pridobijo žive stroškovne cene iz pravilnega API endpoint

Različica 1.0.7 - Izdano 2026-05-06
* Popravek: ResellerClub test_connection pošlje zahtevani parameter tlds (#224)

Različica 1.0.6 - Izdano 2026-05-05
* Popravek: Registracija domen ResellerClub zdaj pravilno deluje z izboljšanim obravnavanjem odziva API in usmerjanjem ponudnika, ki ga vodi register
* Popravek: Izboljšave uporabniške izkušnje skrbniške strani Register Domain
* Odstranjeno: Integracija registrarja CyberPanel

Različica 1.0.5 - Izdano 2026-04-02
* Novo: Integracija registrarja GoDaddy za registracijo in upravljanje domen
* Novo: Integracija registrarja NameSilo
* Novo: Integracija registrarja ResellerClub
* Novo: Samodejno preverjanje pošiljateljske domene SES ob nakupu in preslikavi domene
* Popravek: Zaščita konstant plugin pred ponovno definicijo v testnem okolju
* Popravek: Zastavice MySQL se pravilno razdelijo po besedah v install-wp-tests.sh

Različica 1.0.4 - Izdano 2026-03-14
* **Popravek:** Nekateri manjkajoči css asseti
* **Popravek:** Napaka, povezana z nerazpoložljivimi tlds

Različica 1.0.3 - Izdano 2026-03-09
* **Popravek:** Napake reaktivnih lastnosti Vue (domain_option, selected_domain, domain_provider) pri uporabi stare predloge za prijavo s shortcode checkout
* **Popravek:** Napačna poravnava vnosnega polja poddomene in preveliko besedilo v polju checkout za izbiro domene
* **Popravek:** Skrij predogledni blok "Your URL will be", ko je prisotno polje za izbiro domene

Različica 1.0.2 - Izdano 2026-03-01
* **Izboljšano:** Globalne nastavitve pribitka odstranjene s strani z nastavitvami — cene so zdaj izključno po izdelku
* **Izboljšano:** Dodana povezava "Manage Domain Products" na strani z nastavitvami za hitro navigacijo
* **Izboljšano:** Jasnejši opisi polj in namigi za nastavitve izdelkov domen (catch-all v primerjavi s specifičnimi za TLD, vrste pribitkov, uvodne cene)
* **Izboljšano:** Boljši opisi po celotni strani z nastavitvami (iskanje TLD-jev, podaljšanja, DNS, obvestila)

Različica 1.0.1 - Izdano 2026-02-27

* **Novo:** Orodje za uvoz TLD za množično upravljanje cen
* **Novo:** Podpora za uvodne cene za domenske izdelke
* **Novo:** E2E testni paket s Cypress
* **Novo:** E-poštne predloge za obvestila o življenjskem ciklu domen
* **Novo:** Polja za naslov registranta v administratorskem modalu za registracijo domen, vnaprej izpolnjena iz nastavitev
* **Novo:** Vmesnik za upravljanje DNS za stranke s podporo za dodajanje, urejanje in brisanje zapisov
* **Novo:** Možnost plačila "Bring your own domain" z avtomatskim preslikavanjem domene
* **Novo:** Samodejno ustvarjanje URL-ja spletišča iz imena domene med plačilom
* **Novo:** Privzeta konfiguracija imenskega strežnika in zapisov DNS v nastavitvah
* **Novo:** Podrobnosti registracije domene in upravljanje DNS na osnovni strani za urejanje domene
* **Novo:** Čarovnik za nastavitev samodejno ustvari privzet domenski izdelek s smiselnimi privzetimi vrednostmi
* **Novo:** Dnevna samodejna sinhronizacija TLD prek cron pri vseh konfiguriranih ponudnikih
* **Novo:** Zaščita zasebnosti WHOIS s konfiguracijo po izdelku (vedno vklopljeno, izbira stranke ali onemogočeno)
* **Novo:** Potrditveno polje za zasebnost WHOIS pri plačilu s prikazom cene in podporo za temni način
* **Novo:** Administratorska stran Register Domain za ročno registracijo domen
* **Novo:** Samodejne posodobitve vtičnika prek strežnika za posodobitve Ultimate Multisite
* **Novo:** Zavihek filtra vrste domenskega izdelka v tabeli seznama izdelkov z vijoličnim slogom značke
* **Novo:** Polja za stik registranta (ime, naslov, mesto, zvezna država, poštna številka, država, telefon) na obrazcu za plačilo domene
* **Novo:** Preverjanje polj registranta pred klicem registrarskega API-ja z jasnimi sporočili o napakah
* **Novo:** Dnevniki, specifični za ponudnika, za dogodke registracije domen (npr. domain-seller-namecheap.log)
* **Novo:** Polja za stik registranta na glavnem obrazcu za registracijo/prijavo in plačilo (prikazana pri registraciji domene)
* **Izboljšano:** Polje za iskanje domen pri plačilu je zamenjano z enotnim poljem za izbiro domene, ki podpira zavihke poddomene, registracije in obstoječe domene
* **Izboljšano:** Nastavitve domenskega izdelka se prikazujejo znotraj strani za urejanje izdelka prek osnovnega sistema gradnikov
* **Izboljšano:** Informacije o domeni stranke se vključijo v osnovni gradnik za preslikavo domen namesto v samostojen metabox
* **Izboljšano:** Čarovnik za uvoz TLD je poenostavljen na sinhronizacijo z enim klikom iz vseh ponudnikov
* **Izboljšano:** Razpoložljivost domen Namecheap uporablja paketni klic API za hitrejše iskanje
* **Izboljšano:** Cenovni API Namecheap uporablja pravilne parametre in razčlenjevanje odgovorov
* **Izboljšano:** Centralizirano shranjevanje TLD v eni omrežni možnosti
* **Izboljšano:** Beleženje dejavnosti domen za spremembe DNS, prenose in uporabo konfiguracije
* **Izboljšano:** Popolna sinhronizacija TLD za OpenSRS z glavnim seznamom IANA in paketnim preverjanjem
* **Izboljšano:** Popolna sinhronizacija TLD za Namecheap s paginiranimi zahtevami API
* **Izboljšano:** Podedovani razredi ponudnikov so zamenjani z vzorcem Integration Registry
* **Izboljšano:** Plošča z nastavitvami s konfiguracijo DNS in prenosov
* **Izboljšano:** Telefonske številke se samodejno oblikujejo v registrarsko obliko +CC.NNN
* **Izboljšano:** Preverjanje telefonskega polja odstrani znake oblikovanja pred oddajo
* **Izboljšano:** Zahteva za različico je povišana na Ultimate Multisite 2.4.12 z jasnejšim obvestilom
* **Izboljšano:** Potek dela CI uporablja ustrezen checkout za dodatek in osnovni vtičnik
* **Izboljšano:** prepare_registrant_info() bere iz uporabniških meta podatkov, shranjenih pri checkout, z nadomestnim naslovom za obračun
* **Popravljeno:** AJAX za iskanje domen ni deloval za neprijavljene uporabnike med plačilom
* **Popravljeno:** AJAX za cene domen ni deloval za neprijavljene uporabnike med plačilom
* **Popravljeno:** Usodna napaka ponovne deklaracije razreda Spyc pri izvajanju ukazov WP-CLI
* **Popravljeno:** Časovna omejitev API-ja Namecheap sandbox je bila prekratka
* **Popravljeno:** Besedilo gumba Select pri iskanju domen ni bilo vidno na zelenem ozadju
* **Popravljeno:** Registracija domene ni uspela z napako "RegistrantFirstName is Missing" zaradi manjkajočih kontaktnih podatkov
* **Popravljeno:** Domenski zapis je bil ustvarjen z blog_id=0, ko spletišče ob času plačila še ni obstajalo
* **Popravljeno:** Nastavitev privzetih TLD-jev je vrnila niz namesto razčlenjene tabele
* **Odstranjeno:** Samostojna administratorska stran Domain Management — zdaj je obravnavana prek osnovnih strani domen

Različica 1.0.0 - Izdano 2025-09-28

**Večja predelava za Ultimate Multisite v2**

* **Novo:** Popolna predelava z moderno arhitekturo PHP 7.4+
* **Novo:** Brezhibna integracija s sistemom plačila Ultimate Multisite v2
* **Novo:** Upravljanje domenskih izdelkov s prilagodljivimi možnostmi cen
* **Novo:** Arhitektura podpore za več ponudnikov domen
* **Novo:** Integracija samodejnega podaljševanja in naročnin
* **Novo:** Vmesnik za upravljanje domen za stranke
* **Novo:** Administratorsko spremljanje domen in dnevniki
* **Novo:** Podpora kuponom za domenske izdelke
* **Novo:** Celovito upravljanje nastavitev
* **Novo:** Razširljiva kodna baza, prijazna razvijalcem
* **Izboljšano:** Posodobljen ponudnik OpenSRS s podporo za vse funkcije
* **Izboljšano:** Sodoben UI, skladen z Ultimate Multisite v2
* **Popravljeno:** Vsa zastarela koda v1 posodobljena na standarde v2
* **Odstranjeno:** Združljivost s podedovano različico v1 (prelomna sprememba)

### Prejšnje različice (podedovana v1) {#previous-versions-v1-legacy}

### Različica 0.0.3 - 20/08/2019 {#version-003---20082019}

* Popravljeno: Nezdružljivost z Groundhogg CRM
* Opomba: To je bila zadnja izdaja, združljiva z v1

### Različica 0.0.2 - 07/12/2018 {#version-002---07122018}

* Popravljeno: Odstranjeno polje License Key
* Popravljeno: Zavihki paketov manjkajo, ko je vtičnik funkcije aktiven
* Izboljšano: Dodan gumb za preskok v registracijskem polju

### Različica 0.0.1 - Začetna izdaja {#version-001---initial-release}

* Osnovna integracija OpenSRS za WP Ultimo v1
* Preprosto iskanje in registracija domen
* Dovoljenja za domene na podlagi paketov
