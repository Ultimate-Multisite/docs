---
title: Operacije suverenog najmaka
sidebar_position: 15
_i18n_hash: bcde2032a685b60e17f1944b5b588f25
---
# Operacije Svršnih Najmama (Sovereign Tenant Operations) {#sovereign-tenant-operations}

Ultimate Multisite: Multi-Tenancy 1.2.0 dodaje operativne alate za suverene najmane (sovereign tenants): subsajte koji rade sa sopstvenom bazom podataka, root sistemom datoteka i kontekstom rutiranja, dok ostaju vidljivi mrežnom administratoru.

Koristite ovu stranicu kada upravljate izoliranim korisničkim lokacijama, prebacivanjem na udaljene lokacije ili migracijama koje premeštaju standardni subsajt u suvernu infrastrukturu.

## Šta se menja za administratora {#what-changes-for-administrators}

- **Stateless tenant autologin** — Mrežni administratori mogu posetiti suverenu najmu bez oslanjanja na dugotrajno stanje zajedničke sesije. SSO token je svršen specifičan, vezan za izvor (origin-pinned), zaštićen protiv ponavljanja i ograničen na kratak vremenski period isteka.
- **Sovereign-aware routing** — Stare izolirane mreže i suverene najme rešavaju se putem istog putanja rutera sajta, smanjujući razlike pri pokretanju između starih i novih izoliranih instalacija.
- **Verified migration state** — Provera migracije proverava korisničko pružanje (user provisioning), dozvole pisca baze podataka (database writer permissions), status ispuštanja redova (queue drain status) i odsustvo starih tabela pre nego što se najam smatra kompletnim.
- **Safer teardown** — Suvereno uklanjanje (teardown) sada čisti korisničke podatke tako da obrisani najam ne ostavlja zastarele pristup bazi podataka.

## Posetnja suverenom najmu {#visiting-a-sovereign-tenant}

1. Otvorite **Network Admin > Ultimate Multisite > Sites**.
2. Izaberite suvereni najam.
3. Koristite opciju **Visit (SSO)** kada je dostupna umesto kopiranja lozinki ili kreiranja privremenih admin naloga.

Proces posete stvara kratkotrajni token za prijavu tog najama i beleži SSO događaj u audit trail-u najama. Ako dugme ne uspe, proverite da li domen najama rešava na očekivanu instalaciju i da li najam može da dođe do mrežnog SSO endpointa.

## Provera operacija udaljenih lokacija (Remote-site operations checklist) {#remote-site-operations-checklist}

Pre nego što promenite suvereni ili udaljeni najam, potvrdite:

Domena najmoprimca pokazuje na host koji poseduje datoteke najmoprimca.
Host baze podataka najmoprimca odgovara podešenoj vezci hosta za tu instalaciju.
Komande za verifikaciju migracije prolaze za najmoprimca.
Asinhroni redovi za migraciju se prazne pre nego što se izvrše promene DNS-a ili vlasništva.
Korisnik administracije najmoprimca je postavljen tokom migracije i može se ulogovati putem SSO-a.

## Brisanje suverenih najmoprimaca {#deleting-sovereign-tenants}

Brisanje suverenog najmoprimca destruktivno je. Prvo potvrdite status bezbeđivanja (backup) i izvoza, a zatim obrišite ga sa ekrana upravljanja sajtom. Tokom procesa uklanjanja verzije 1.2.0 uklanja korisnička imena baze podataka najmoprimca kao deo čišćenja, ali administratori bi trebalo da proveravaju da li su host-nivou korisnici baze podataka i folderi nestali kada koristite eksterne panele za hosting.

:::warning
Ne brinite da obrišete suverenog najmoprimca dok migracijska verifikacija još uvek radi ili dok se asinhroni zadaci (async push jobs) ne nalaze u redovima. Sačekajte da se verifikacija završi kako bi proces uklanjanja podataka (teardown) ne uklonio kredencijale potrebe za čekajućim zadacima.
:::
