---
title: Izvoz sajta
sidebar_position: 11
_i18n_hash: d25255aa1b01df64a9008f91e3dcbeb1
---
# Izvoz sajta {#site-export}

Administrativna stranica za **Izvoz sajta (Site Export)** omogućava administratorima mreže da spakuju jedan sajt, ili celu mrežu, u preuzimljivi arhivski fajl za migraciju, backup ili rad prebacivanja.

## Izvoz jednog sajta {#exporting-one-site}

Idite na **Ultimate Multisite > Site Export** i izaberite opciju **Generate new Site Export**. Odaberite pod-sajt koji želite da izvezete, a zatim odlučite da li arhivski fajl treba da uključuje uploadove (datoteke), pluginove i teme.

Kada se izvoz završi, preuzmite ZIP fajl sa liste **Existing Exports** (Postojeći izvozi). Izvozni ZIP fajlovi sada uključuju samostalno pokreću `index.php` i `readme.txt`, tako da arhivski fajl može biti učitan na novog hosta i pokrenuti bez prethodne instalacije zasebnog plugin-a za uvoz.

## Izvoz cele mreže {#exporting-the-whole-network}

Koristite **Network Export** (Izvoz mreže) na stranici Site Export kada vam je potreban jedan arhivski fajl koji sadrži sve pod-sajtove u mreži. Ovo je korisno pre migracija hostova, vežbe za oporavak od katastrofe ili ponovnog izgradnje staging okruženja gde svaki pod-sajt mora da putuje zajedno.

Pošto izvoz cele mreže može biti mnogo veći od izvoza jednog sajta, pokrenite ga tokom perioda sa niskim prometom i proverite da li je ciljno skladište dovoljno slobodnog prostora za uploadove, pluginove, teme i generisane ZIP fajlove.

### Network Import Bundles (Paketi za uvoz mreže) {#network-import-bundles}

Po početku Ultimate Multisite 2.12.0, Site Exporter može generisati **network import bundles** — specijalizovane arhive dizajnirane za pojednostavljeni oporavak sajta u celoj mreži. Network import bundle sadrži sve potrebne fajlove i metadate za vraćanje više sajtova na novu instalaciju mreže.

#### Generisanje network import bundle-a {#generating-a-network-import-bundle}

1. Idite **Ultimate Multisite > Site Export** (Izvoz sajta)
2. Kliknite na **Generate new Network Export** (Generisan novi mrežni izvoz)
3. Izaberite **Network Import Bundle** kao tip izvoza
4. Odaberite da li želite uključiti fajlove za učitavanje (uploads), pluginove i teme
5. Kliknite na **Generate** (Generiši)
6. Preuzmite ZIP paket bundle sa liste **Existing Exports** (Postojeći izvozi)

#### Vraćanje pomoću Network Import Bundle-a {#restoring-from-a-network-import-bundle}

Da biste vratili sajtove iz network import bundle-a:

1. Instalirajte Ultimate Multisite na vašem ciljnom hostu
2. Završite wizard za podešavanje multisite (multisajt)
3. Idite na **Ultimate Multisite > Site Export** na novoj mreži
4. Kliknite na **Import Network Bundle** (Uvezi mrežni bundle)
5. Učitajte ZIP fajl network import bundle-a
6. Pridržavajte se uputstava za uvoz koje su prikazane na ekranu
7. Proces uvoza će vratiti sve sajtove, njihov sadržaj i konfiguracije

Network import bundle-ovi čuvaju:
- Sadržaj sajta (postovi, stranice, prilagođene tipove postova)
- Podešavanja i opcije sajta
- Uloge korisnika i dozvole
- Pluginove i teme (ako su uključeni u bundle)
- Fajlove za učitavanje medija (media uploads), ako su uključeni u bundle
- Prilagođene baze podataka i podatke

## Instaliranje ZIP fajla za samostalno pokretanje izvoza {#installing-a-self-booting-export-zip}

Da biste vratili ZIP fajl koji se samostalno pokreće na novom hostu:

1. Učitajte sadržaj izvoznog ZIP fajla u glavni direktorijum veb-a (web root).
2. Otvorite `index.php` koji ste učitali u pregledaču.
3. Pridržavajte se uputstava za instalaciju koja su prikazana na ekranu iz paketa izvoza.
4. Proverite bundled `readme.txt` za napomene specifične za izvoz pre uklanjanja privremenih fajlova.

Za detalje o instalaciji i uvozu dodatnih komponenti, pogledajte [Site Exporter addon documentation](/addons/site-exporter).

Za alat za pojedinačni sajt koji je dodan u Ultimate Multisite 2.9.0, pogledajte [Export & Import](/user-guide/administration/export-import).
