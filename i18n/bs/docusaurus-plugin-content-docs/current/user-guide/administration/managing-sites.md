---
title: Upravljanje sajtovima
sidebar_position: 14
_i18n_hash: 520a6eed862c756f0475de6f264632c6
---
# Upravljanje sajtovima

Sajtovi (ili podsajtovi) su srce vašeg WaaS poslovanja. Ultimate Multisite ima 3 tipa sajtova:

- **Sajtovi vlasništva korisnika** — Sajtovi koji pripadaju određenim klijentima
- **Šabloni sajtova** — Preddefinirani sajtovi koje klijenti mogu odabrati kao početnu tačku
- **Glavni sajt** — Vaš primarni sajt mreže

## Pregled sajtova {#viewing-sites}

Idite na **Ultimate Multisite → Sites** da vidite sve podsajtove u vašoj mreži. Svaki sajt je označen po tipu, a vi možete filtrirati po Sve sajtove, Sajtovi vlasništva korisnika, Šabloni ili Čekanje.

![Sites list page](/img/admin/sites-list.png)

## Dodavanje novog sajta {#adding-a-new-site}

Kliknite na dugme **Add Site** da kreirate novi sajt. Morat ćete navesti:

- **Naslov sajta** — Ime novog sajta
- **URL sajta** — Domen/putanja za sajt
- **Tip sajta** — Da li je to sajt klijenta, šablon ili regularni sajt

Opcija **Copy Site** omogućava vam da kreirate novi sajt na osnovu postojećeg šablona sajta. Kada je omogućeno, možete odabrati koji šablon želite koristiti kao početnu tačku. Pazite da je **Copy Media on Duplication** omogućeno kako bi se uključili i medijski fajlovi.

## Upravljanje postojećim sajtom {#managing-an-existing-site}

Kliknite na **Manage** na bilo kojem sajtu da otvorite stranicu **Edit Site**. Ovdje ćete pronaći:

### Osnovne informacije {#basic-information}

Ime sajta, tip, ID sajta i opis. Takođe ćete vidjeti mapirani domen, povezano članstvo (membership) i korisnički račun klijenta koji posjeduje sajt.

### Opcije sajta {#site-options}

Konfigurišite sposobnosti i ograničenja sajta:

- **Ograničenja posjeta** — Maksimalan broj posjeta sajtu
- **Ograničenja računa korisnika** — Ograničenja po ulozi korisnika
- **Disk prostor** — Kvota za skladištenje za sajt
- **Custom domain** — Omogućite mapiranje domena za ovaj sajt
- **Vidljivost plugin-a i tema** — Kontrolišite koji su plugin-i i teme vidljivi, skriveni ili prethodno aktivirani

Po podrazumevanim postavkama, sajtovi prate ograničenja postavljena na nivou članstva. Postavljanje ograničenja na nivou sajta će nadjačati postavke članstva.

### Povezivanja (Associations) {#associations}

Ispod opcija sajta, pronaći ćete informacije o:

- **Mapirani domeni** povezani sa sajtom
- **Članstvo (Membership)** kojem sajt pripada
- **Korisnički račun klijenta** povezan sa sajtom

### Desna bočna traka (Right Sidebar) {#right-sidebar}

Na desnoj strani možete:

- **Omogućiti/onemogućiti sajt** pomoću prekidača (toggle button)
- **Promijeniti tip sajta** ili ponovo dodijeliti vlasništvo
- **Postaviti sliku/minijaturu sajta** (prikazano na frontendu za šablone sajta)
- **Trajno obrisati sajt**

:::warning
Brisanje sajta je neopozivno. Sajt i sav njegov sadržaj trajno će biti uklonjeni.
:::
