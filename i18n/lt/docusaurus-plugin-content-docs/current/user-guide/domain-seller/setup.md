---
title: Nustatymai ir tiekėjo konfigūracija
sidebar_position: 1
_i18n_hash: 854fd649457edceefde0eb8246446ebe
---
# Domenų pardavėjas: Įdiegimas ir tiekėjo konfigūracija {#domain-seller-setup-and-provider-configuration}

Domain Seller addon siunamas su gautiniu įdiegimo vadovu, kuris pabaigo visus reikiamus veiksmus. Šiame puslapyje aprašome vadovo veikimą ir kaip saugoti ar pakeisti tiekėjų (providerių) konfigūraciją po to.

## Reikalavimai {#requirements}

- **Multisite Ultimate** v2.4.12 arba didesnis, tinklo aktivotas
- **PHP** 7.4+
- API kredencijai labiausiai tikėtinei registruotojui (registrar)

## Pirmoji veikimo įdiegimo vadovas {#first-run-setup-wizard}

Įdiegimo vadovas automatiškai prasideda pirmą kartą, kai tinklo aktivojate pluginą. Jis taip pat yra pasiekiamas bet kuriuo metu iš **Network Admin › Ultimate Multisite › Domain Seller Setup**.

### Žingsnis 1 — Pasirinkite tiekėją (providerį) {#step-1--choose-a-provider}

Pasirinkite registruotojį, su kurį norite susisiekti. Patikslinti pasirinkimus:

| Tiekėjas | DNS valdymo | WHOIS saugumas |
|---|---|---|
| OpenSRS | Taip | Taip |
| Namecheap | Ne | Taip (WhoisGuard, nemokamas) |
| HostAfrica | Taip | Taip (ID apsauga) |
| Openprovider | Taip | Taip |
| Hostinger | Per pagrindinį Hostinger domenų maplininką hostingu domenams | Taip |
| GoDaddy | Ne | Ne |
| ResellerClub | Taip | Ne |
| NameSilo | Ne | Ne |
| Enom | Taip | Ne |

### Žingsnis 2 — Įveskite kredencijas {#step-2--enter-credentials}

Kiekvienam tiekėjui yra skirtai kredencijų laukai:

**OpenSRS** — Vartotojo vardas ir privilis klaida (iš OpenSRS Reseller Control Panel).

**Namecheap** — Vartotojo vardas ir API klaidą (iš Account › Tools › API Access).

**HostAfrica** — Domenų reselerio API endpointas ir kredencijos iš HostAfrica reselerio modulo. Šiuo metu nurodytų sandarbų lauko nėra; testuokite saugias tik skaitymo veiksmus prieš įvedant tiesioginius registracijas.

**Openprovider** — Vartotojo vardas ir slaptažodis su API prieiga aktyvuota. Valstybinis (sandbox) režimas naudoja Openprovider sandbox API, o valstybinis pagrindinis klientų identifikatorius gali būti naudojamas saugiai registracijoms.

**Hostinger** — Wspólny token hPanel API Hostingu z głównej integracji Hostinger. Ten sam token służy do mapowania domen głównych i operacji rejestracji sprzedawców domen.

**GoDaddy** — Klucz API i sekret (z developer.godaddy.com)

**ResellerClub** — ID Resellera i klucz API (z panelu sterowania ResellerClub)

**NameSilo** — Klucz API (z namesilo.com › Account › API Manager)

**Enom** — ID konta i token API

Sprawdź **tryb Sandbox**, jeśli jest dostępny, aby przetestować połączenie w środowisku testowym dostawcy przed uruchomieniem na żywo.

### Krok 3 — Testowanie połączenia {#step-3--test-the-connection}

Kliknij **Test Connection**. Magiczny interfejs (wizard) wyśle lekki wywołanie API w celu sprawdzenia danych uwierzytelniających i łączności. Napraw wszelkie problemy z poświadczeniami przed kontynuowaniem.

### Krok 4 — Importowanie TLD {#step-4--import-tlds}

Kliknij **Import TLDs**, aby pobrać wszystkie dostępne TLD oraz ceny hurtowe od podłączonego dostawcy. To uzupełni list TLD używany przez produkty domenowe. Import może zająć od 30 do 60 sekund dla dostawców z dużymi katalogami TLD.

TLD-y są również automatycznie synchronizowane raz dziennie za pomocą zaplanowanego zadania crona.

### Krok 5 — Utworzenie produktu domeny {#step-5--create-a-domain-product}

Magiczny interfejs tworzy domyślny produkt typu catch-all (wszystko inne) z marżą 10%. Możesz edytować ten produkt natychmiast lub pominąć i tworzyć produkty ręcznie w sekcji **Ultimate Multisite › Products**.

Zobacz [Domain Products and Pricing](./domain-products) dla pełnego przewodnika po konfiguracji produktów.

---

## Konfiguracja ponownie dostawcy {#reconfiguring-a-provider}

Przejdź do **Network Admin › Ultimate Multisite › Settings › Domain Seller** (lub kliknij **Settings** w liście pluginów).

Strona ustawień zawiera:

- **Veikimo domenų pardavimas** — įjunkite arba išjunkite visą funkciją
- **Pagrindinis tiekėjas** — tiekėjas, kurį naudojate domenų paieškoms ir naujų produktų.
- **Maksimalus TLDs paieška** — kiek TLDs reikia patikrinti, kai klientas ieško; didesni skaičiai rodo daugiau variantų, bet yra lėtesnis.
- **Darbodumo kešavimo laikas** — kiek laiko išlaikyti darbodimo ir kainos rezultatus; mažesni skaičiai yra tiksnes, bet padidina API pakuotės.
- **Tvarkykite domenų produktus** — greitas nuoroda į Produktų sąrašą.
- **Konfigūruokite tiekėjus** — atidaro Integracijos žaada (Integration Wizard), kad pridėtumėte arba pertvarkytumėte tiekėjus.

### Pridėdami naują tiekėją {#adding-a-second-provider}

Spauskite **Konfigūruokite tiekėjus** ir vėl paleiskite žaidimą naujam registratui. Galite turėti veiksmus vienu metu konfigūruotus įvairių tiekėjų. Prieš kiekvienam domenui produktui nurodykite specifinį tiekėją arba palikykite pagrindinį.

### Manuliai siniginti TLDs {#syncing-tlds-manually}

Nparametrai, spauskite **Siniginti TLDs** (Sync TLDs) šalia bet kurio konfigūruoto tiekėjo, kad pasileiktumėte naujausios kainos. Tai naudinga po to, kai tiekėjas atnaujina ražinės kainas arba prideda naujus TLDs.

---

## Logai {#logs}

Kiekvienas tiekėjas rašys į savo logų kanalą. Logai galima peržiūrėti puslapyje **Network Admin › Ultimate Multisite › Logs**:

| Kanały logų | Svarba |
|---|---|
| `domain-seller-registration` | Visi registracijos bandymai (sėkmingi ir neįvykiai) |
| `domain-seller-renewal` | Atnaujinimo užduoties rezultatai |
| `domain-seller-opensrs` | Šaltiniai OpenSRS API veiklos duomenys |
| `domain-seller-namecheap` | Šaltiniai Namecheap API veiklos duomenys |
| `domain-seller-hostafrica` | Šaltiniai HostAfrica API veiklos duomenys |
| `domain-seller-openprovider` | Šaltiniai Openprovider API veiklos duomenys |
| `domain-seller-hostinger` | Šaltiniai Hostinger API veiklos duomenys |
| `domain-seller-godaddy` | Šaltiniai GoDaddy API veiklos duomenys |
| `domain-seller-resellerclub` | Šaltiniai ResellerClub API veiklos duomenys |
| `domain-seller-namesilo` | Šaltiniai NameSilo API veiklos duomenys |
| `domain-seller-enom` | Šaltiniai Enom API veiklos duomenys |

---

## Privalomųjų paslaugų galimybių atsižvelgimai {#provider-capability-notes}

Nevis kas registratorio API atskleidžia vienod statusą. Addonai rodo nepatikimą veiksmus jas nepakeičiant, o su aiškiais adminui skirtais klaidais.

- **HostAfrica** palaiko labiausiai apibūdintą tiesioginį reselerio procesą, įskaitant paiešką, TLD/kainų sinigacinį, registraciją, atnaujinimą, transferą, nameserver'ų atnaujinimus, DNS pranešimus, EPP kodus, registratorio užblaudymą ir ID saugumą.
- **Openprovider** palaiko reselerijos kainos TLD sinigacinį, registraciją, atnaujinimą, transferus, nameserver'ų atnaujinimus, DNS zonų, EPP kodus, registratorio užblaudymą ir WHOIS privatumą. Jis autentikuojasi trumpalaikiniu bearer tokenu, kurį addon automatiškai atnaujina.
- **Hostinger** palaiko paslaugų paiešką, registraciją, portfelio paiešką, nameserver'ų atnaujinimus, registratorio užblaudymą ir WHOIS privatumą per bendrą hPanel API tokeną. Hostinger public Domains API neatskleido reselerijos/wholesale kainos, įvaizdymo transfero, esminio atnaujinimo ar EPP kodų gavimo; atnaujinimai vyksta tik automatiškai.
