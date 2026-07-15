---
title: Izvoz spletne strani
sidebar_position: 11
_i18n_hash: d25255aa1b01df64a9008f91e3dcbeb1
---
# Izvoz spletne strani

Administracijska stran **Site Export** omogoča administratorjem mreže, da paketirajo eno stran ali celotno mrežo v prenosni arhiv za migracijo, rezervno kopiranje ali delovanje.

## Izvoz ene strani {#exporting-one-site}

Idi na **Ultimate Multisite > Site Export** in izberi **Generate new Site Export**. Izberi podstrani (subsite), ki jo želite izvesti, nato pa odločite, ali bi arhiv morall vključevati upload-e, pluginove in teme.

Ko se izvoz konča, prenesite ZIP datoteko iz seznama **Existing Exports**. ZIP datoteke za izvoz obsežajo zdaj samobootujoči `index.php` in `readme.txt`, tako da lahko arhiv zagotovite na nov host in ga začnete delovanje brez predhodne instalacije zasebnega plugin-a za import.

## Izvoz celotne mreže {#exporting-the-whole-network}

Na stran **Site Export** uporabite funkcijo **Network Export**, če potrebujete eno arhivsko datoteko, ki vsebuje vse podstrane v mreži. To je koristno pred migracijami hostov, uskuškim drili za varstvo pred nesrečmi ali prenovi na stagingu, kjer se vsaka podstrana mora premakniti skupaj.

Ker izvoz mreže lahko vsebuje veliko več podatkov kot izvoz ene strani, ga vključite med obdobji nizke obremenjenosti in potrdite, da je ciljno shranjevanje imajo dovolj prostega prostora za upload-e, pluginove, teme in generirane ZIP datoteke.

### Network Import Bundles (Paketi za import mreže) {#network-import-bundles}

Z začetkom Ultimate Multisite 2.12.0 lahko Site Exporter generira **network import bundles** — specializirane arhive, ki so namenjene preprosto restoraciji strani v celoti mreže. Network import bundle vsebuje vse potrebne datoteke in podatke za restore več strani na novo instalirano mrežo.

#### Generiranje network import bundle-a {#generating-a-network-import-bundle}

1. Poi seveda na **Ultimate Multisite > Site Export**
2. Kliknite na **Generate new Network Export** (Generiraj novi omrežni izvoz)
3. Izberite **Network Import Bundle** kot tip izvoza
4. Izberite, ali želite vključiti vnoske (uploads), pluginove in teme
5. Kliknite na **Generate** (Generiraj)
6. Prekličite ZIP paket bundle iz seznama **Existing Exports** (Obstojni izvozi)

#### Ponovno uporabo iz voznja omrežnega paketa (Restoring from a Network Import Bundle) {#restoring-from-a-network-import-bundle}

Za ponovno uporabo strani iz omrežnega paketa za vnos:

1. Instalirajte Ultimate Multisite na vaš ciljni host
2. Popolnite wizard za nastavitve multisite
3. Poiščite **Ultimate Multisite > Site Export** na novem omrežju
4. Kliknite na **Import Network Bundle** (Vnesite omrežni paket)
5. Vnesite ZIP datoteko omrežnega paketa za vnos
6. Sledite navodilom za vnos, ki se pojavijo na zaslonu
7. Proces vnosov ponovno uporabi vse strani, njihov vsebino in konfiguracije

Omrežni paketi za vnos ohranjajo:
- Vsebino strani (postanke, strani, prilagojene tipove postank)
- Nastavitve in opcije strani
- Uloge uporabnikov in dovoljenja
- Pluginove in teme (če so vključeni v paketu)
- Vnoske medije (če so vključeni v paketu)
- Prilagojene bazo podatkovne tabele in podatke

## Instalacija ZIP datoteke za izvoz, ki se sam obvladuje (Installing a self-booting export ZIP) {#installing-a-self-booting-export-zip}

Za ponovno uporabo ZIP datoteke, ki se sam obvladuje na novem hostu:

1. Vnesite vsebino izvožene ZIP datoteke v ciljno web root.
2. Odprite `index.php` vnošeno v brskalniku.
3. Sledite navodila za instalacijo, ki se pojavijo na zaslonu iz paketa izvoza.
4. Preverite paket `readme.txt`, ki je vključen pri izvozu, za opombe specifične za izvoz, preden odstranite začasne datoteke.

Za podrobnosti o instalaciji in vnosih specifičnih za addonove, glede tega se pozivajte na [Site Exporter addon documentation](/addons/site-exporter).

Za orodje za enostransko stran (single-site tool), ki je dodano v Ultimate Multisite 2.9.0, glede izvoza in vnosov se pozivajte na [Export & Import](/user-guide/administration/export-import).
