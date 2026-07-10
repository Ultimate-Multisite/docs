---
title: Operațiuni pentru Chirii Suveran
sidebar_position: 15
_i18n_hash: bcde2032a685b60e17f1944b5b588f25
---
# Operațiuni pentru Tenantul Suveran {#sovereign-tenant-operations}

Ultimate Multisite: Multi-Tenancy 1.2.0 adaugă instrumente operaționale pentru tenantii suverani: subsite care rulează cu propria bază de date, rădăcina sistemului de fișiere și context de rutare propriu, dar rămân vizibile din partea administratorului rețelei.

Folosiți această pagină atunci când gestionați site-uri clienți izolate, tranziții la remote-site sau migrații care mută un subsite standard într-in infrastructură suverană.

## Ce se schimbă pentru administratori {#what-changes-for-administrators}

- **Autologare fără stare (Stateless tenant autologin)** — Administrații rețelei pot vizita un tenant suveran fără a depinde de stări de sesiune persistente partajate. Tokenul SSO este scopat, fixat la sursă, protejat împotriva repetării și limitat la o fereastră scurtă de expirare.
- **Rutare conștientă de suveran** — Rețelele izolate vechi și tenantii suverani se rezolvă prin aceeași cale de rutare a site-ului, reducând diferențele de bootstrap între instalanțiile vechi și noi isolate.
- **Starea migrației verificată** — Verificările de migrare verifică provizionarea utilizatorilor, permisiunile scriitorului bazei de date, statusul drenării coanei (queue drain) și absența tabelului vechi înainte ca un tenant să fie considerat complet.
- **Demontare mai sigură** — Demontarea suverană elimină acum credențialele tenantului în mod curat, astfel încât tenantii șterși nu lasă acces rezidual la baza de date.

## Vizitarea unui tenant suveran {#visiting-a-sovereign-tenant}

1. Deschideți **Network Admin > Ultimate Multisite > Sites**.
2. Selectați tenantul suveran.
3. Folosiți opțiunea **Visit (SSO)** atunci când este disponibilă în loc să copiați parole sau să creați conturi de administrator temporare.

Fluxul de vizitare creează un token de autentificare cu o durată scurtă pentru acel tenant și înregistrează evenimentul SSO în urmărirea auditului tenantului. Dacă butonul eșuează, verificați dacă domeniul tenantului se rezolvă la instalarea așteptată și dacă tenantul poate ajunge la endpoint-ul SSO din partea rețelei.

## Lista de verificare pentru operațiuni remote-site {#remote-site-operations-checklist}

Înainte de a modifica un tenant suveran sau remote, confirmați:

## Ștergerea tenantelor suverane {#deleting-sovereign-tenants}

Ștergerea unei tenant suverane este o acțiune destructivă. Confirmați mai întâi starea backup-ului și a exportului, apoi ștergeți de la ecranul de management al site-ului. Fluxul de demontare (teardown) 1.2.0 elimină credențialele baze de date ale tenantului ca parte din curățare, dar administratorii ar trebui să verifice totodată că utilizatorii și folderele de bază de date la nivel de host sunt șterși atunci când folosiți panouri de găzduire externe.

:::warning
Nu ștergeți o tenant suverană în timp ce verificarea migrației rulează sau în timp ce se creează joburi asincrone de push. Așteptați ca verificarea să se termine pentru a nu fi eliminate credențialele necesare joburilor în așteptare de către demontare.
:::
