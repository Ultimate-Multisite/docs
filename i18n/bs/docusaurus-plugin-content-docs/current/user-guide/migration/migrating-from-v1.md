---
title: Migriranje sa V1
sidebar_position: 17
_i18n_hash: 1deefaf09206b741c89be6666fe2143c
---
# Migracija sa V1 {#migrating-from-v1}

## Ultimate Multisite je prešao sa svoje originalne 1.x porodice verzija na 2.x porodicu verzija. {#ultimate-multisite-has-switched-from-its-original-1x-family-of-releases-to-the-2x-family-of-releases}

Ultimate Multisite verzija 2.0 i novije predstavlja potpunu prepravku baze koda, što znači da je vrlo malo zajedničkog između stare verzije i nove. Z tog razloga, prilikom nadogradnje sa 1.x na 2.x, vaši podaci će morati biti migrirani u format koji nove verzije mogu razumjeti.

Srećom, Ultimate Multisite 2.0+ **dolazi sa migratorom** ugrađenim u jezgro, koji je sposoban za detekciju podataka iz stare verzije i konverziju ih u novi format. Ova migracija se dešava tokom **Setup Wizard-a** verzije 2.0+.

Ovaj članak objašnjava kako radi migrator, šta učiniti u slučaju neuspjeha, i kako riješiti probleme koji se mogu pojaviti tokom ovog procesa.

_**VAŽNO: Prije nego što počnete sa nadogradnjom sa verzije 1.x na verziju 2.0, molimo vas da napravite rezervnu kopiju baze podataka vašeg sajta.**_

## Prvi koraci {#first-steps}

Prvi korak je preuzimanje .zip fajla plugin-a i instaliranje verzije 2.0 na vašem network admin dashboard-u.

Nakon što [instalirate i aktivirate verziju 2.0](../getting-started/installing-ultimate-multisite.md), sistem će automatski detektovati da vaš Multisite radi na staroj verziji i vidjet ćete ovu poruku na vrhu stranice plugin-a.

_**NAPOMENA:** Ako imate Ultimate Multisite 1.x instaliran na vašem Multisite-u, imaćete opciju da zamijenite plugin verzijom koju ste upravo preuzeli. Molimo vas, kliknite na **Replace current with uploaded** (Zamijeni trenutni sa učitanim)._

<!-- Screenshot unavailable: Plugin page showing option to replace v1 with uploaded v2 version -->

Sljedeća stranica će vam reći koje stare add-one imate instalirane zajedno sa verzijom 1.x. Dat će vam uputstva o tome da li je verzija koju koristite kompatibilna sa verzijom 2.0 ili da li je potrebno instalirati nadograđenu verziju add-ona nakon migracije.

<!-- Screenshot unavailable: Message on the top of the plugins page about updating to v2.0, with list of add-ons that need updating -->

Kada budete spremni za nastavak, možete kliknuti na gumb koji piše **Visit the Installer to finish the upgrade** (Posjetite instalator da završite nadogradnju).

<!-- Screenshot unavailable: Button saying Visit the Installer to finish the upgrade -->

Zatim će vas prebaciti na stranicu Setup Wizard-a sa nekim pozdravnim porukama. Samo je potrebno kliknuti **Get Started** (Počni) da biste prešli na sljedeću stranicu.

<!-- Screenshot unavailable: Setup Wizard welcoming page with Get Started button -->

Nakon klika na **Get Started**, preusmjerit će vas na Pre-install Checks_._ Ovo će vam prikazati informacije o sistemu i instalaciji WordPress-a i reći vam da li ispunjavate **zahtjevima Ultimate Multisite-a**.

<!-- Screenshot unavailable: Pre-install Checks page showing system requirements confirmation -->

Sljedeći korak je da unesete svoj Ultimate Multisite license key i aktivirate plugin. Ovo će osigurati da će sve funkcije, uključujući i add-one, biti dostupne na vašem sajtu.

<!-- Screenshot unavailable: License activation page with license key input and Agree and Activate button -->

Nakon unosa ključa, kliknite na **Agree & Activate** (Slažem se i aktiviraj).

Nakon aktivacije licence, možete započeti stvarnu instalaciju klikom na **Install** (Instaliraj) na sljedećoj stranici. Ovo će automatski kreirati potrebne fajlove i bazu podataka neophodne da bi verzija 2.0 funkcionisala.

<!-- Screenshot unavailable: Installation page showing what will be updated with Install button -->

## Sada, migracija {#now-the-migration}

Migrator ima ugrađenu sigurnosnu funkciju koja će pregledati cijeli vaš multisite kako bi se osiguralo da se svi vaši podaci Ultimate Multisite-a mogu migrirati bez ikakvih problema. Kliknite na gumb **Run Check** (Pokreni provjeru) da započnete proces.

<!-- Screenshot unavailable: Migration page with Run Check button to verify data can be converted -->

Nakon pokretanja provjere, imate dvije mogućnosti: rezultat može biti **sa** greškom ili **bez greške**.

### Sa greškom {#with-error}

Ako dobijete poruku o grešci, morat ćete kontaktirati naš tim za podršku kako bi vam pomogli da popravite grešku. Obavezno **priložite log greške** kada kreirate tiket. Možete preuzeti log ili kliknuti na link koji piše contact our support team. Otvoriće se widget za pomoć na desnoj strani vaše stranice sa poljima unaprijed popunjenim za vas, uključujući logove grešaka pod opisom.

_**Budući da je sistem pronašao grešku, nećete moći nastaviti sa migracijom na verziju 2.0. Možete se vratiti na verziju 1.x da nastavite sa radom vašeg network-a dok se greška ne popravi.**_

### Bez greške {#without-error}

Ako sistem ne pronađe nikakvu grešku, vidjet ćete poruku o uspjehu i gumb **Migrate** (Migriraj) na dnu, koji će vam omogućiti da nastavite sa migracijom. Na ovoj stranici, podsjetit ćemo vas da napravite rezervnu kopiju baze podataka prije nego što nastavite, što snažno preporučujemo. Kliknite **Migrate** ako već imate rezervnu kopiju.

<!-- Screenshot unavailable: Migration page showing success message and backup recommendation -->

<!-- Screenshot unavailable: Migrate button on the bottom-right corner -->

I to je sve što je potrebno!

Možete nastaviti sa radom Setup Wizard-a kako biste ažurirali vaš logo i druge stvari na vašem network-u ili početi navigirati kroz meni Ultimate Multisite verzije 2.0 i njegov novi interfejs. Slobodno uživajte.
