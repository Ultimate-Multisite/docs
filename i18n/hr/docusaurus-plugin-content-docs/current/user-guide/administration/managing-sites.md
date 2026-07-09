---
title: Upravljanje stranicama
sidebar_position: 14
_i18n_hash: 520a6eed862c756f0475de6f264632c6
---
# Upravljanje stranica {#managing-sites}

Stranice (ili podstranice) su srce vašeg WaaS poslovanja. Ultimate Multisite ima 3 vrste stranica:

- **Vlasnik kupca** — Stranice pripadaju određenim kupcima
- **Šabloni stranica** — Preddefinirane stranice koje kupci mogu odabrati kao početnu točku
- **Glavna stranica** — Vaša primarna mreža stranica

## Pregled stranica {#viewing-sites}

Idite na **Ultimate Multisite → Sites** da biste vidjeli sve podstranice u vašoj mreži. Svaka stranica je označena po vrsti i možete filtrirati po Svi stranice, Vlasnik kupca, Šabloni ili Očekuje se.

![Sites list page](/img/admin/sites-list.png)

## Dodavanje nove stranice {#adding-a-new-site}

Kliknite na dugme **Add Site** (Dodaj stranicu) da biste kreirali novu stranicu. Morat ćete unijeti:

- **Site Title** — Naziv nove stranice
- **Site URL** — Domen/putanja za stranicu
- **Site Type** — Da li je to stranica kupca, šablon ili obična stranica

Opcija **Copy Site** (Kopiraj stranicu) omogućuje vam kreiranje nove stranice na temelju postojećeg šablona. Kada bude aktivirana, možete odabrati koji šablon koristiti kao početnu točku. Osigurajte da je uključena opcija **Copy Media on Duplication** (Kopiraj medije pri duplikaciji) kako biste uključili datoteke medija.

## Upravljanje postojećom stranicom {#managing-an-existing-site}

Kliknite na **Manage** (Upravljaj) na bilo kojoj stranici da biste otvorili stranicu **Edit Site** (Uredi stranicu). Tamo ćete pronaći:

### Osnovne informacije {#basic-information}

Naziv stranice, tip, site ID i opis. Također ćete vidjeti mapiran domen, povezane članstva i račun kupca koji posjeduje stranicu.

### Opcije stranice {#site-options}

Konfigurirajte mogućnosti i granice stranice:

- **Visit limits** (Ograničenja posjeta) — Maksimalan broj posjeta stranici
- **User account limits** (Ograničenja korisničkih računa) — Ograničenja po ulogi korisnika
- **Disk space** (Dostupni prostor na disku) — Količina skladišnog prostora za stranicu
- **Custom domain** (Prilagođeni domen) — Omogućite mapiranje domena za ovu stranicu
- **Plugin and theme visibility** (Vidljivost pluginova i tema) — Kontrolirajte koji su pluginovi i teme vidljivi, skriveni ili unaprijed aktivirani

Po podrazumevanjem, sajtovi slijede ograničenja postavljena na razini članstva. Postavljanje ograničenja na razini sajta će prebaciti (prepisati) postavke o članstvu.

### Povezanost s drugim sajtištem (Associations) {#associations}

Ispod opcija za sajt pronaći ćete informacije o:

- **Mapiranih domenima** povezanih sajtom
- **Članstvu** u kojem se sajt nalazi
- **Klijentskom računu** vezanom za sajt

### Desna bočna traka (Right Sidebar) {#right-sidebar}

Na desnoj strani možete:

- **Omogućiti/isključiti sajt** pomoću prekidača (toggle buttona)
- **Promijeniti tip sajta** ili ponovno dodijeliti vlasništvo
- **Postaviti sliku/minijaturu sajta** (koja se prikazuje na prednjoj strani za šablone sajta)
- **Trajno obrisati sajt**

:::warning
Brisanje sajta je neobratno. Sajt i sve njegove sadržaje će biti trajno uklonjeni.
:::
