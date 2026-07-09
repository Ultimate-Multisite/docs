---
title: Izvoz stranice
sidebar_position: 11
_i18n_hash: d25255aa1b01df64a9008f91e3dcbeb1
---
# Izvoz sajta {#site-export}

Admin stranica **Izvoz sajta (Site Export)** omogućuje administracijama mreže da paketiraju jedan sajt, ili cijelu mrežu, u preuzimljivi arhivski fajl za migraciju, backup ili rad na prenosu.

## Izvoz jednog sajta {#exporting-one-site}

Idite na **Ultimate Multisite > Site Export** i odaberite **Generate new Site Export (Generiraj novi izvoz sajta)**. Odaberite pod-sajt koji želite izvesti, a zatim odlučite da li će arhivski fajl uključivati uploadove, pluginove i teme.

Kada se izvoz završi, preuzmite ZIP fajl iz liste **Existing Exports (Postojeći izvozi)**. Izvozni ZIP fajlovi sada uključuju samostalno pokrećeni `index.php` i `readme.txt`, tako da arhivski fajl može biti otpušten na novog hosta i pokrenut bez prethodne instalacije zasebnog plugin-a za uvoz.

## Izvoz cijele mreže {#exporting-the-whole-network}

Koristite **Network Export (Izvoz mreže)** na stranici Site Export kada vam je potreban jedan arhivski fajl koji sadrži sve pod-sajtove u mreži. Ovo je korisno prije migracija hostova, vježbi za oporavak od katastrofe ili ponovnog izgradnje staging okruženja gdje svaki pod-sajt treba putovati zajedno.

Budući da izvoz mreže može biti mnogo veći od izvoza jednog sajta, pokrenite ga tijekom razdoblja s niskim prometom i potvrdite da je ciljno skladište dovoljno slobodnog prostora za uploadove, pluginove, teme i generirane ZIP fajlove.

### Network Import Bundles (Paketi za uvoz mreže) {#network-import-bundles}

Po početku Ultimate Multisite 2.12.0, Site Exporter može generirati **network import bundles (pakete za uvoz mreže)** — specijalizirane arhive dizajnirane za pojednostavljeni oporavak sajta cijele mreže. Network import bundle sadrži sve potrebne fajlove i metadata za ponovno vraćanje više sajtova na novu instalaciju mreže.

#### Generiranje paketa za uvoz mreže {#generating-a-network-import-bundle}

1. Idite **Ultimate Multisite > Site Export**
2. Kliknite na **Generate new Network Export** (Generiraj novi mrežni izvoz)
3. Odaberite **Network Import Bundle** kao tip izvoza
4. Izaberite da li želite uključiti uploadove, pluginove i teme
5. Kliknite na **Generate** (Generiraj)
6. Preuzmite ZIP paket bundle sa liste **Existing Exports** (Postojeći izvozi)

#### Vraćanje pomoću Network Import Bundle-a {#restoring-from-a-network-import-bundle}

Da biste vratili siteove iz mrežnog paketa za uvoz:

1. Instalirajte Ultimate Multisite na vašem ciljnom hostu
2. Završite wizard postavljanja multisite (multisite setup wizard)
3. Idite na **Ultimate Multisite > Site Export** na novoj mreži
4. Kliknite na **Import Network Bundle** (Uvezi mrežni paket)
5. Učitajte ZIP datoteku mrežnog paketa za uvoz
6. Pridržavajte se uputstava za uvoz na ekranu
7. Proces uvoza će vratiti sve siteove, njihov sadržaj i konfiguracije

Mrežni paketi za uvoz zadržavaju:
- Sadržaj sitea (postovi, stranice, prilagođene tipove postova)
- Postavke i opcije sitea
- Uloge korisnika i dozvole
- Pluginove i teme (ako su uključeni u paket)
- Uploadove medija (ako su uključeni u paket)
- Prilagođene baze podataka i podatke

## Instaliranje ZIP izvoza koji se sam pokreće (self-booting export ZIP) {#installing-a-self-booting-export-zip}

Da biste vratili self-booting ZIP na novom hostu:

1. Učitajte sadržaj izvoznog ZIP datoteke u glavni direktorij (web root).
2. Otvorite `index.php` koji ste učitali u pregledniku.
3. Pridržavajte se uputstava za instalaciju na ekranu iz paketa izvoza.
4. Pročitajte bundled `readme.txt` za napomene specifične za izvoz prije uklanjanja privremenih datoteka.

Za detalje instaliranja i uvoza specifičnih dodataka, pogledajte [Site Exporter addon documentation](/addons/site-exporter).

Za alat za pojedinačni site koji se dodaje u Ultimate Multisite 2.9.0, pogledajte [Export & Import](/user-guide/administration/export-import).
