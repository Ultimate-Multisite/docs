---
title: Migracija z V1
sidebar_position: 17
_i18n_hash: 1deefaf09206b741c89be6666fe2143c
---
# Migracija z V1

## Ultimate Multisite je prešel iz svoje originalne verzije 1.x na verzijo 2.x. {#ultimate-multisite-has-switched-from-its-original-1x-family-of-releases-to-the-2x-family-of-releases}

Ultimate Multisite verzija 2.0 in novje je popolnoma prepišanje celotnega koda, kar pomeni, da je zelo malo enega skupnega elementa med staro in novo različico. Zato morate pri nadaljnemu nadgraditvi z 1.x na 2.x svoje podatke premestiti v format, ki ga bodo nove verzije razumeli.

Srečno je, Ultimate Multisite 2.0+ **vključuje migrator**, ki je vgrajen v celoto in je sposobna prepoznati podatke iz stare verzije in jih spremeniti v novi format. Ta migracija se odvija med **Setup Wizardom** verzije 2.0+.

Ta lekcija opisuje, kako deluje migrator, kaj storiti v primeru napake in kako rešiti težave, ki lahko pridejo pri tem procesu.

_**POMEMBNO: Preden začnete nadgraditi z verzije 1.x na verzijo 2.0 se morate upejati, da si naredili rezervno kopijo baze podatkov vaše strani**_

## Prvi koraki {#first-steps}

Prvi korak je preuzimanje .zip datoteke dodatka in instalacija verzije 2.0 na vašem admin dashboardu mreže.

Po tem kot [instalirate in aktivirate verzijo 2.0](../getting-started/installing-ultimate-multisite.md), sistem sam avtomatsko prepozna, da je vaše Multisite v tečju starosti (legacy version) in boste videli to sporočilo na vrhu strani dodatka.

_**OPOMENKA:** Če imate Ultimate Multisite 1.x instaliran na svojem Multisite, boste imeli možnost zamenjati dodatek s verzijo, ki jo si ste preuzeli. Prosimo, nadaljujte in kliknite na **Zamenjaj trenutno z obdelano**._

<!-- Zaslon ni na voljo: Stran dodatka, ki prikazuje možnost zamenjave v1 z obdelano v2 različico -->

Naslednja stran preverja vam kakve stare dodatne module imate instalirane z drug različice (version 1.x). Na njoj boste dobiti uputstva ali informacije, ali je verzija ki jo uporabljate kompatibilna z version 2.0 ali če morate instalirati nadgrajeno verzijo dodatka po migraciji.

<!-- Screenshot unavailable: Message on the top of the plugins page about updating to v2.0, with list of add-ons that need updating -->

Ko ste spremenili svoje mišljenje in ste sprememili, lahko kliknete na gumb **Obišči Installer za dokončanje nadgraje**.

<!-- Screenshot unavailable: Button saying Visit the Installer to finish the upgrade -->

Potem vas bo preusmeril na stran z wizardom za instalacijo s nekaj prjelo. Samo morate klikniti na **Get Started** da bi šli na naslednji korak.

<!-- Screenshot unavailable: Setup Wizard welcoming page with Get Started button -->

Po kliku na **Get Started** vas bo preusmeril na Pre-install Checks_._ Ta stran vam bo pokazala informacije o vašem sistemu in WordPress instalaciji ter vam bo povedala, ali zadovoljuje zahteve **Ultimate Multisite**.

<!-- Screenshot unavailable: Pre-install Checks page showing system requirements confirmation -->

Naslednji korak je vnos vaše ključa licence Ultimate Multisite in aktivacija dodatka. To zagotavlja, da bodo vsi funkcije, vključno z dodatnimi moduli, na vašem spletnem mestu omogočene.

<!-- Screenshot unavailable: License activation page with license key input and Agree and Activate button -->

Po vnosu ključa kliknite **Agree & Activate**.

Po aktivaciji licence lahko začnete resnično instalacijo, kliknjo na **Install** na naslednji strani. To bo samodejno ustvarilo potrebne datoteke in bazo podatkov, ki sta potrebna za delovanje version 2.0.

## Zdaj je migracija {#now-the-migration}

Migrator ima vgrajeno varnostno funkcijo, ki preverja celotno vaše multisite, da se lahko vse vaša Ultimate Multisite data premikne brez kakršnih koli težav. Kliknite na gumb **Run Check** (Izvajanje preveritve), da začnete proces.

Po preveritvi imate dve možnosti: rezultat lahko pride **z napako** ali **brez napake**.

### Z napako {#with-error}

Če dobite sporočanje o napaki, boste morali se obrniti na naš tim podporo, saj vam bodo pomagali pri popravljanju napake. Preverite, da mu **pridate log napake**, ko ustvarjate ticket. Lahko lahko prenesete log ali kliknete na povezavo, ki pravi "kontaktirajte naš tim podpore". To bo odprlo pomočno okno (help widget) na desni strani vaše strani z polji, ki so že popolnoma pripravljeni za vas in vključujejo log napak pod opisom.

_**Ker je sistem našel napako, ne boste mogli nadaljeval s migracijo na verzijo 2.0. Nato lahko vrnete na verzijo 1.x, da boste lahko še delovali z vašo omrežjem, dokler se napaka ne popravi.**_

### Brez napake {#without-error}

Če sistem ne najde nobenih napak, boste videli sporočanje uspeha in gumb **Migrate** (Migriraj) na dnu, ki vam bo omogočil nadaljevanje migracije. Na tej strani boste spomnili, da ustvarite rezervno kopijo svoje baze podatkov pred nadaljnjo uporabo, kar močno priporočamo. Kliknite na **Migrate**, če imate že rezervno kopijo.

In to je vse, kar je potrebno!

Site lahko nadaljnja uporaba Wizard setupa za aktualizacijo vašega logotipa in drugih nastavitev na v svoji mreži ali začetek navigacije v menju vaše Ultimate Multisite verzije 2.0 in njene novega interfejsa. Počnite se zabaviti!
