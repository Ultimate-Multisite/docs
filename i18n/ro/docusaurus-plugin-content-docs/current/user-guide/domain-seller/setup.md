---
title: Configurare și Configurația Furnizorului
sidebar_position: 1
_i18n_hash: 2a9c0d63fc6ee6bad011c099707fb3f3
---
# Vânzător de Domenii: Configurare și Setări ale Furnizorului

Addon-ul Domain Seller vine cu un asistent de configurare ghidat care vă va îndruma prin fiecare pas necesar. Această pagină acoperă fluxul asistentului și modul de configurare sau de reconfigurare a furnizorilor ulterior.

## Cerințe

- **Ultimate Multisite** v2.4.12 sau mai nou, activat la nivel de rețea
- **PHP** 7.4+
- Credențiale API pentru cel puțin un registrar suportat

## Asistentul de configurare la prima rulare

Asistentul de configurare pornește automat prima dată când activați plugin-ul la nivel de rețea. Este disponibil, de asemenea, în orice moment la **Network Admin › Ultimate Multisite › Domain Seller Setup**.

### Pasul 1 — Alegerea unui furnizor

Selectați registrarul pe care doriți să îl conectați. Opțiunile suportate sunt:

| Furnizor | Management DNS | Confidențialitate WHOIS |
|---|---|---|
| OpenSRS | Da | Da |
| Namecheap | Nu | Da (WhoisGuard, gratuit) |
| GoDaddy | Nu | Nu |
| ResellerClub | Da | Nu |
| NameSilo | Nu | Nu |
| Enom | Da | Nu |

### Pasul 2 — Introducerea credențialelor

Fiecare furnizor are câmpuri de credențiale diferite:

**OpenSRS** — Nume de utilizator și cheie privată (din OpenSRS Reseller Control Panel)

**Namecheap** — Nume de utilizator și cheie API (din Account › Tools › API Access)

**GoDaddy** — Cheie API și secret (din developer.godaddy.com)

**ResellerClub** — ID Reseller și cheie API (din panoul de control ResellerClub)

**NameSilo** — Cheie API (din namesilo.com › Account › API Manager)

**Enom** — ID Cont și token API

Verificați **Sandbox mode** (Modul Sandbox) acolo unde este disponibil pentru a testa în mediul de test al furnizorului înainte de a lucra în producție.

### Pasul 3 — Testarea conexiunii

Faceți clic pe **Test Connection**. Asistentul trimite o chemare API ușoară pentru a verifica credențialele și conectivitatea. Corectați orice probleme cu credențialele înainte de a continua.

### Pasul 4 — Importarea TLD-urilor

Faceți clic pe **Import TLDs** pentru a prelua toate TLD-urile disponibile și prețurile în vrac de la furnizorul conectat. Acest lucru populează lista TLD-urilor utilizată de produsele de domenii. Importul poate dura de la 30 la 60 de secunde pentru furnizorii cu cataloguri mari de TLD-uri.

TLD-urile sunt, de asemenea, resincronizate automat o dată pe zi printr-un cron job programat.

### Pasul 5 — Crearea unui produs de domenii

Asistentul creează un produs de domenii implicit, de tip "catch-all", cu o marjă de 10%. Puteți edita acest produs imediat sau să săriți peste și să creați produsele manual sub **Ultimate Multisite › Products**.

Vedeți [Domain Products and Pricing](./domain-products) pentru ghidul complet de configurare a produselor.

---

## Reconfigurarea unui furnizor

Mergeți la **Network Admin › Ultimate Multisite › Settings › Domain Seller** (sau faceți clic pe **Settings** în lista de plugin-uri).

Pagina de setări conține:

- **Enable domain selling** — pentru a activa/dezactiva întreaga funcționalitate
- **Default provider** — furnizorul folosit pentru căutările de domenii și produsele noi
- **Max TLDs per search** — câte TLD-uri se verifică atunci când un client caută; valorile mai mari arată mai multe opțiuni, dar sunt mai lente
- **Availability cache duration** — cât timp se cachează rezultatele de disponibilitate și preț; valorile mai mici sunt mai precise, dar măresc apelurile API
- **Manage domain products** — link rapid către lista de Produse
- **Configure providers** — deschide Asistentul de Integrare pentru a adăuga sau reconfigura furnizorii

### Adăugarea unui al doilea furnizor

Faceți clic pe **Configure providers** și rulați din nou asistentul pentru registrarul nou. Puteți avea mai mulți furnizori configurați simultan. Asigurați fiecare produs de domenii unui furnizor specific, sau lăsați pe cel implicit.

### Sincronizarea manuală a TLD-urilor

În pagina de setări, faceți clic pe **Sync TLDs** lângă orice furnizor configurat pentru a prelua cele mai recente prețuri. Acest lucru este util după ce un furnizor își actualizează prețurile în vrac sau adaugă TLD-uri noi.

---

## Jurnale (Logs)

Fiecare furnizor scrie în propriul său canal de log. Jurnalele sunt vizibile sub **Network Admin › Ultimate Multisite › Logs**:

| Canal de log | Conținut |
|---|---|
| `domain-seller-registration` | Toate încercările de înregistrare (succes și eșec) |
| `domain-seller-renewal` | Rezultatele job-ului de reînnoire |
| `domain-seller-opensrs` | Activitatea brută API OpenSRS |
| `domain-seller-namecheap` | Activitatea brută API Namecheap |
| `domain-seller-godaddy` | Activitatea brută API GoDaddy |
| `domain-seller-resellerclub` | Activitatea brută API ResellerClub |
| `domain-seller-namesilo` | Activitatea brută API NameSilo |
| `domain-seller-enom` | Activitatea brută API Enom |
