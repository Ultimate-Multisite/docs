---
title: Operacije suverenog najmirenja
sidebar_position: 15
_i18n_hash: bcde2032a685b60e17f1944b5b588f25
---
# Operacije suverenog najmaka (Tenant)

Ultimate Multisite verzija 1.2.0 dodaje operativne alate za suverene najmake: subsajte koji rade sa sopstvenom bazom podataka, root-om datoteka i kontekstom rutiranja, ali ostaju vidljivi za administratora mreže.

Koristite ovu stranicu kada upravljate izoliranim korisničkim lokacijama, prenosima udaljenih lokacija ili migracijama koje prebacuju standardni subsajt u suvernu infrastrukturu.

## Šta se mijenja za administratora {#what-changes-for-administrators}

- **Stateless tenant autologin** — Administratori mreže mogu posjetiti suverenu najmakon bez oslanjanja na dugotrajno stanje zajedničke sesije. SSO token je svršen specifičan, vezan za izvor (origin-pinned), zaštićen protiv ponavljanja i ograničen na kratak vremenski period isteka.
- **Sovereign-aware routing** — Stare izolirane mreže i suverene najmake se rešavaju putem istog putanja rutera sajta, što smanjuje razlike pri pokretanju između starih i novih izoliranih instalacija.
- **Verified migration state** — Provjera migracije proverava proviziju korisnika, dozvole za pisanje baze podataka, status ispuštanja redova (queue drain) i nepostojanje starih tabela pre nego što se najmakon smatra kompletnom.
- **Safer teardown** — Suvereni uklanjanje sada čisti podatke o najmaki tako da obrisani najmaci ne ostavljaju zastarele pristup bazi podataka.

## Posjet suverene najmaki (Tenant) {#visiting-a-sovereign-tenant}

1. Otvorite **Network Admin > Ultimate Multisite > Sites**.
2. Odaberite suverenu najmakon.
3. Koristite opciju **Visit (SSO)** kada je dostupna umjesto kopiranja lozinki ili kreiranja privremenih admin naloga.

Proces posjeta stvara kratkotrajni token za prijavu tog najmaki i beleži SSO događaj u audit trail-u najmaki. Ako dugme ne radi, provjerite da li domen najmaki rešava na očekivanu instalaciju i da li najmaka može pristup endpointu SSO stranice mreže.

## Provjera operacija udaljenih lokacija (Remote-site operations checklist) {#remote-site-operations-checklist}

Pre promjene suverene ili udaljene najmaki, potvrdite:

## Brisanje suverenih najmačkih domena {#deleting-sovereign-tenants}

Brisanje suverenog najmačkih domena je destruktivno. Prvo potvrdite status sigurnosnog kopiranja (backup) i izvoza, a zatim obrišite ga s ekrana upravljanja stranicom. Proces deinstalacije 1.2.0 uklanja korisničke podatke baze podataka najmačkih domena kao dio čišćenja, ali administratori bi trebali ipak provjeriti da li su nestali korisnici baze podataka i folderi na nivou hosta kada koristite eksterne panele za hosting.

:::warning
Ne brišite suverenog najmačkih domena dok proces verifikacije migracije još nije završen ili dok se ne nalaze u redu asinhroni push zadaci (async push jobs). Čekajte da se verifikacija završi kako bi deinstalacija ne uklonila podatke potrebne za čekajuće zadatke.
:::
