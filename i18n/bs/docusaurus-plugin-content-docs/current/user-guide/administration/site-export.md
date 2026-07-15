---
title: Izvoz sajta
sidebar_position: 11
_i18n_hash: d25255aa1b01df64a9008f91e3dcbeb1
---
# Izvoz lokacije

Administrativna stranica **Izvoz lokacije** (Site Export) omogućava administratorima mreže da pakuju jednu lokaciju, ili cijelu mrežu, u preuzimajući arhivu za migraciju, backup ili predaju.

## Izvoz jedne lokacije {#exporting-one-site}

Idite na **Ultimate Multisite > Site Export** i odaberite **Generate new Site Export** (Generiraj novi izvoz lokacije). Odaberite podlokaciju koju želite izvesti, a zatim odaberite da li arhivu treba uključiti sa uploadima, pluginovima i temama.

Kada se izvoz završi, preuzmite ZIP iz liste **Existing Exports** (Postojeći izvozi). ZIP arhive sada uključuju samostalno pokretni `index.php` i `readme.txt`, tako da se arhivu može učitati na novi host i pokrenuti bez prethodne instalacije zasebnog importer plugin-a.

## Izvoz cijele mreže {#exporting-the-whole-network}

Koristite **Network Export** (Izvoz mreže) na stranici Site Export kada vam je potreban jedan arhiv koji sadrži sve podlokacije u mreži. Ovo je korisno prije migracija hostova, vježbi oporavka od katastrofe ili ponovnog postavljanja staging okruženja, gdje svaka podlokacija mora putovati zajedno.

Budući da može biti mnogo veći od izvoza jedne lokacije, pokrenite ga tokom perioda niskog prometa i potvrdite da je ciljno skladište dovoljno oslobodnog prostora za uploadove, pluginove, teme i generisane ZIP fajlove.

### Paketi za uvoz mreže {#network-import-bundles}

Počevši od Ultimate Multisite 2.12.0, Site Exporter može generisati **network import bundles** (pakete za uvoz mreže) — specijalizovane arhive dizajnirane za pojednostavljeno vraćanje lokacije na nivou cijele mreže. Paket za uvoz mreže sadrži sve potrebne fajlove i metapodatke za vraćanje više lokacija na novu instalaciju mreže.

#### Generisanje paketa za uvoz mreže {#generating-a-network-import-bundle}

1. Idite na **Ultimate Multisite > Site Export**
2. Kliknite na **Generate new Network Export** (Generiraj novi izvoz mreže)
3. Odaberite **Network Import Bundle** kao tip izvoza
4. Odaberite da li uključiti uploadove, pluginove i teme
5. Kliknite na **Generate** (Generiraj)
6. Preuzmite bundle ZIP iz liste **Existing Exports** (Postojeći izvozi)

#### Vraćanje iz paketa za uvoz mreže {#restoring-from-a-network-import-bundle}

Da biste vratili lokacije iz paketa za uvoz mreže:

1. Instalirajte Ultimate Multisite na ciljni host
2. Završite čarobnjak za postavljanje multisite-a
3. Idite na **Ultimate Multisite > Site Export** na novu mrežu
4. Kliknite na **Import Network Bundle** (Uvezi paket mreže)
5. Učitajte ZIP fajl paketa za uvoz mreže
6. Pratite uputstva za uvoz na ekranu
7. Proces uvoza će vratiti sve lokacije, njihov sadržaj i konfiguracije

Paketi za uvoz mreže čuvaju:
- Sadržaj lokacije (postovi, stranice, custom post tipovi)
- Podešavanja i opcije lokacije
- Uloge i dozvole korisnika
- Pluginove i teme (ako su uključeni u paket)
- Medijske uploadove (ako su uključeni u paket)
- Custom baze podataka i podatke

## Instaliranje samostalno pokretnog export ZIP-a {#installing-a-self-booting-export-zip}

Da biste vratili samostalno pokretni ZIP na novi host:

1. Učitajte sadržaj izvezenog ZIP-a na ciljni web root.
2. Otvorite učitani `index.php` u pregledaču.
3. Pratite uputstva instalatora na ekranu iz paketa izvoza.
4. Pregledajte bundle `readme.txt` radi specifičnih napomena o izvozu prije uklanjanja privremenih fajlova.

Za detalje o instalaciji i uvozu specifičnih za addon, pogledajte [Site Exporter addon documentation](/addons/site-exporter).

Za alat za jednu lokaciju dodan u Ultimate Multisite 2.9.0, pogledajte [Export & Import](/user-guide/administration/export-import).
