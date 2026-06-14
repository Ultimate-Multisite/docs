---
title: Migracija s V1
sidebar_position: 17
_i18n_hash: 1deefaf09206b741c89be6666fe2143c
---
# Migracija s V1

## Ultimate Multisite je prešao sa originalne verzije 1.x na novu verziju 2.x.

Ultimate Multisite verzija 2.0 i novije su potpuno prepisana kod, što znači da postoji vrlo malo zajedničkog između stare verzije i nove. Zbog toga, kada nadograđujete sa 1.x na 2.x, vaše podatke morat ćete premjestiti u format koji nove verzije mogu razumjeti.

Srećom, Ultimate Multisite 2.0+ ** dolazi s migratorom** ugrađenim u jezgru koji je sposoban prepoznati podatke iz stare verzije i pretvoriti ih u novi format. Ova migracija se obavlja tijekom **Setup Wizard-a** verzije 2.0+.

Ovaj vodič objašnjava kako radi migrator, što učiniti u slučaju neuspjeha i kako riješiti probleme koji mogu nastati tijekom ovog procesa.

_**VAŽNO: Prije nego što počnete nadograđivati sa verzije 1.x na verziju 2.0, obavezno napravite sigurnosnu kopiju baze podataka vašeg sajta.**_

## Prvi koraci

Prvi korak je preuzimanje .zip datoteke dodatka (plugin) i instalacija verzije 2.0 na vašoj admin dashboard-u mreže.

Nakon što [instalirate i aktivirate verziju 2.0](../getting-started/installing-ultimate-multisite.md), sustav će automatski prepoznati da je vaš Multisite trenutno pokrenut na staroj verziji i vidjet ćete ovu poruku na vrhu stranice dodatka.

_**NAPOMENA:** Ako imate Ultimate Multisite 1.x instaliran na svom Multisite-u, imat ćete opciju zamijeniti dodatak onom verzijom koju ste upravo preuzeli. Molimo vas da kliknete i odaberete **Zamijeni trenutni s uplođenom**._

<!-- Screenshot unavailable: Plugin page showing option to replace v1 with uploaded v2 version -->

Na sljedećoj stranici dobit ćete informacije o starim dodacima koje imate instalirane uz verziju 1.x. Tamo će biti upute da provjerite je li verzija koju koristite kompatibilna s verzijom 2.0 ili trebate instalirati nadogradenu verziju dodatka nakon migracije.

<!-- Screenshot unavailable: Poruka na vrhu stranice s dodacima o ažuriranju na v2.0, s popisom dodataka koji zahtijevaju ažuriranje -->

Kada budete spremni nastaviti, kliknite gumb koji kaže **Posjetite instalator za dovršetak nadogradnje**.

<!-- Screenshot unavailable: Gumb koji kaže Posjetite instalator za dovršetak nadogradnje -->

Zatim vas će preusmjeriti na stranicu s wizardom za instalaciju s nekim porukama dobrodošlice. Samo kliknite **Get Started** da biste prešli na sljedeću stranicu.

<!-- Screenshot unavailable: Stranica wizardja za postavljanje s gumbom Get Started -->

Nakon što kliknete **Get Started**, preusmjerit će vas na Pre-install Checks_._ Ovo će vam prikazati informacije o vašem sustavu i instalaciji WordPressa te reći je li on kompatibilan s zahtjevima Ultimate Multisite.

<!-- Screenshot unavailable: Stranica Pre-install Checks koja prikazuje potvrdu sistemskih zahtjeva -->

Slijede tijekom unijete svoj Ultimate Multisite licencni ključ i aktivirajte plugin. To će osigurati da će sve značajke, uključujući dodatke, biti dostupne na vašem sajtu.

<!-- Screenshot unavailable: Stranica za aktivaciju licence s unosom ključa licence i gumbom Agree and Activate -->

Nakon što unesete svoj ključ, kliknite **Agree & Activate**.

Nakon aktivacije licence možete početi sa stvarnom instalacijom klikom na **Install** na sljedećoj stranici. To će automatski kreirati potrebne datoteke i bazu podataka potrebnu za funkcioniranje verzije 2.0.

## Sada je migracija

Migrator ima ugrađenu sigurnosnu značajku koja će provjeriti cijeli vaš multisite kako bi osigurala da se svi podaci Ultimate Multisite mogu premjestiti bez ikakvih problema. Kliknite na dugme **Run Check** (Pokreni provjeru) da započnete proces.

Nakon pokretanja provjere, imate dvije opcije: rezultat može biti **s greškom** ili **bez greške**.

### S greškom

Ako dobijete poruku o grešci, trebate se obratiti našem timu podrške kako bi vam pomogli pri popravku te greške. Obavezno **dostavite log greške** kada kreirate ticket (zašifrirani zahtjev). Možete preuzeti log ili kliknuti na link koji kaže "contact our support team" (kontaktirajte naš tim podrške). Otvorit će se pomoćni widget s desne strane vaše stranice, a polja su već popunjena za vas i uključuju logove grešaka pod opisom.

_**Budući da je sustav pronašao grešku, nećete moći nastaviti s migracijom na verziju 2.0. Tada možete vratiti se na verziju 1.x kako biste nastavili radnu mrežu dok se greška ne popravi.**_

### Bez greške

Ako sustav ne pronađe nikakvu grešku, vidjet ćete poruku o uspjehu i dugme **Migrate** (Migriraj) u donjem desnom kutu koje će vam omogućiti nastavak s migracijom. Na ovoj stranici bit ćete podsjetili na stvaranje sigurnosne kopije svoje baze podataka prije daljnjeg napredovanja, što snažno preporučujemo. Kliknite na **Migrate** ako već imate sigurnosnu kopiju.

I to je sve!

Možete nastaviti s postavkama Wizard-a kako biste ažuririli svoj logotip i druge stvari na mreži, ili započeti navigaciju u meniju vašeg Ultimate Multisite verzije 2.0 i novom sučelju. Slobodno se malo zabavite.
