---
title: Configurare și configurarea furnizorului
sidebar_position: 1
_i18n_hash: 854fd649457edceefde0eb8246446ebe
---
# Domain Seller: Configurare și setarea furnizorului

Addon-ul Domain Seller vine cu un asistent de configurare ghidată care te conduce prin fiecare pas necesar. Această pagină acoperă fluxul asistentului și modul de configurare sau reconfigurare ulterioară a furnizorilor.

## Cerințe

- **Multisite Ultimate** v2.4.12 sau mai nou, activat la nivel de rețea
- **PHP** 7.4+
- Credențiale API pentru cel puțin un registrar acceptat

## Asistentul de configurare la prima rulare

Asistentul de configurare pornește automat prima dată când activezi plugin-ul la nivel de rețea. Este disponibil și oricând din **Network Admin › Ultimate Multisite › Configurare Domain Seller**.

### Pasul 1 — Alege un furnizor

Selectează registrarul pe care vrei să îl conectezi. Opțiuni acceptate:

| Furnizor | Gestionare DNS | Confidențialitate WHOIS |
|---|---|---|
| OpenSRS | Da | Da |
| Namecheap | Nu | Da (WhoisGuard, gratuit) |
| HostAfrica | Da | Da (protecție ID) |
| Openprovider | Da | Da |
| Hostinger | Prin maparea de bază a domeniilor Hostinger pentru domenii găzduite | Da |
| GoDaddy | Nu | Nu |
| ResellerClub | Da | Nu |
| NameSilo | Nu | Nu |
| Enom | Da | Nu |

### Pasul 2 — Introdu credențialele

Fiecare furnizor are câmpuri de credențiale diferite:

**OpenSRS** — Nume de utilizator și cheie privată (din OpenSRS Reseller Control Panel)

**Namecheap** — Nume de utilizator și cheie API (din Account › Tools › API Access)

**HostAfrica** — Endpoint API Domains Reseller și credențiale din modulul de reseller HostAfrica. În prezent nu este documentat niciun endpoint sandbox separat; testează cu verificări sigure doar pentru citire înainte de a rula înregistrări live.

**Openprovider** — Nume de utilizator și parolă cu acces API activat. Modul sandbox opțional folosește API-ul sandbox Openprovider, iar un handle implicit opțional al clientului poate fi reutilizat pentru înregistrări.

**Hostinger** — Tokenul API partajat Hostinger hPanel din integrarea de bază Hostinger. Același token alimentează maparea de bază a domeniilor și operațiunile de înregistrare Domain Seller.

**GoDaddy** — Cheie API și secret (din developer.godaddy.com)

**ResellerClub** — ID de reseller și cheie API (din panoul de control ResellerClub)

**NameSilo** — Cheie API (din namesilo.com › Account › API Manager)

**Enom** — ID de Account și token API

Bifează **Mod sandbox** acolo unde este disponibil pentru a testa în mediul de testare al furnizorului înainte de a trece live.

### Pasul 3 — Testează conexiunea

Dă clic pe **Testează conexiunea**. Asistentul trimite un apel API ușor pentru a verifica credențialele și conectivitatea. Remediază orice probleme cu credențialele înainte de a continua.

### Pasul 4 — Importă TLD-urile

Dă clic pe **Importă TLD-urile** pentru a prelua toate TLD-urile disponibile și prețurile angro de la furnizorul conectat. Aceasta populează lista de TLD-uri folosită de produsele de domeniu. Importul poate dura 30–60 de secunde pentru furnizorii cu cataloage mari de TLD-uri.

TLD-urile sunt, de asemenea, resincronizate automat o dată pe zi printr-o sarcină cron programată.

### Pasul 5 — Creează un produs de domeniu

Asistentul creează un produs de domeniu implicit de tip catch-all cu un adaos de 10%. Poți edita acest produs imediat sau poți omite pasul și crea produse manual în **Ultimate Multisite › Produse**.

Consultă [Produse de domeniu și prețuri](./domain-products) pentru ghidul complet de configurare a produsului.

---

## Reconfigurarea unui furnizor

Mergi la **Network Admin › Ultimate Multisite › Settings › Domain Seller** (sau dă clic pe **Setări** în lista de plugin-uri).

Pagina de setări conține:

- **Activează vânzarea de domenii** — activează/dezactivează întreaga funcționalitate
- **Furnizor implicit** — furnizorul folosit pentru căutări de domenii și produse noi
- **Număr maxim de TLD-uri per căutare** — câte TLD-uri se verifică atunci când un client caută; valorile mai mari afișează mai multe opțiuni, dar sunt mai lente
- **Durata cache-ului pentru disponibilitate** — cât timp se păstrează în cache rezultatele de disponibilitate și preț; valorile mai mici sunt mai exacte, dar cresc numărul de apeluri API
- **Gestionează produsele de domeniu** — link rapid către lista de Produse
- **Configurează furnizorii** — deschide Integration Wizard pentru a adăuga sau reconfigura furnizori

### Adăugarea unui al doilea furnizor

Dă clic pe **Configurează furnizorii** și rulează din nou asistentul pentru noul registrar. Poți avea mai mulți furnizori configurați simultan. Atribuie fiecare produs de domeniu unui furnizor specific sau lasă-l pe cel implicit.

### Sincronizarea manuală a TLD-urilor

În pagina de setări, dă clic pe **Sincronizează TLD-urile** lângă orice furnizor configurat pentru a prelua cele mai recente prețuri. Acest lucru este util după ce un furnizor actualizează prețurile angro sau adaugă TLD-uri noi.

---

## Jurnale

Fiecare furnizor scrie în propriul canal de jurnal. Jurnalele pot fi vizualizate în **Network Admin › Ultimate Multisite › Jurnale**:

| Canal de jurnal | Conținut |
|---|---|
| `domain-seller-registration` | Toate încercările de înregistrare (reușite și eșuate) |
| `domain-seller-renewal` | Rezultatele sarcinilor de reînnoire |
| `domain-seller-opensrs` | Activitate API brută OpenSRS |
| `domain-seller-namecheap` | Activitate API brută Namecheap |
| `domain-seller-hostafrica` | Activitate API brută HostAfrica |
| `domain-seller-openprovider` | Activitate API brută Openprovider |
| `domain-seller-hostinger` | Activitate API brută Hostinger |
| `domain-seller-godaddy` | Activitate API brută GoDaddy |
| `domain-seller-resellerclub` | Activitate API brută ResellerClub |
| `domain-seller-namesilo` | Activitate API brută NameSilo |
| `domain-seller-enom` | Activitate API brută Enom |

---

## Note despre capabilitățile furnizorilor

Nu fiecare API de registrar expune aceleași operațiuni. Addon-ul afișează operațiunile neacceptate cu erori clare pentru administratori, în loc să eșueze în tăcere.

- **HostAfrica** acceptă cel mai amplu flux live pentru reseller, inclusiv căutare, sincronizare TLD/prețuri, înregistrare, reînnoire, transfer, actualizări nameserver, înregistrări DNS, coduri EPP, registrar lock și protecția ID.
- **Openprovider** acceptă sincronizarea TLD la prețuri de reseller, înregistrare, reînnoire, transferuri, actualizări nameserver, zone DNS, coduri EPP, registrar lock și confidențialitate WHOIS. Se autentifică cu un bearer token cu durată scurtă de viață pe care addon-ul îl reîmprospătează automat.
- **Hostinger** acceptă căutarea disponibilității, înregistrarea, căutarea în portofoliu, actualizări nameserver, registrar lock și confidențialitate WHOIS prin tokenul API hPanel partajat. API-ul public Domains al Hostinger nu expune prețuri de reseller/en-gros, transfer inbound, reînnoire explicită sau recuperarea codului EPP; reînnoirile sunt doar cu reînnoire automată.
