---
title: Izolarea Multi-Tenant
sidebar_position: 12
_i18n_hash: 5aaf1504c3022f94b9aec9faaa4eda22
---
# Izolarea Multi-Tenant

Ultimate Multisite: Multi-Tenancy 1.2.0 suportă izolarea bazelor de date și a sistemelor de fișiere pentru subsitele suverâne, asigurând o separare completă a datelor clienților, în timp ce menține configurările la nivel de rețea pentru furnizare, facturare și administrare.

## Strategia de izolare {#isolation-strategy}

Folosiți izolarea suverană pentru clienții care necesită o separare mai puternică a datelor, stocare dedicată pe sistemul de fișiere sau o delimitare separată a gazdei (host).

Fiecare tenant suveran trebuie să aibă:

- O bază de date dedicată pentru tenant sau o strategie de prefix bază de date aprobată de gazdă.
- Un rădăcin local al sistemului de fișiere dedicat pentru tenant.
- O intrare în registru (tenant registry entry) care mapează site-ul la baza de date sa, căiile rădăcinii, numele de gazdă și modelul de izolare.
- Un rezultat de verificare a migrației înainte ca tenantul să fie considerat activ.

## Legarea gazdei bazei de date (Database host binding) {#database-host-binding}

Versiunea 1.2.0 modifică comportamentul implicit de legare la aceeași mașină pentru instalanțiile suverâne. Valorile la aceeași mașină, cum ar fi `localhost`, sunt normalizate astfel încât Bedrock, FrankenPHP și instalanțiile WordPress containerizate pot acorda și verifica permisiunile împotriva șirului de gazdă MySQL pe care îl vede în realitate.

Când configurați un tenant suveran:

1. Setiați host-ul bazei de date la valoarea necesară runtime-ului tenantului.
2. Folosiți `localhost` pentru instalanțiile socket locale atunci când gazda așteaptă conexiuni locale.
3. Folosiți `127.0.0.1` sau un nume de serviciu (service hostname) doar dacă serverul de bază de date acordă privilegiile acelei mașini.
4. Rulați verificarea migrației după ce ați modificat legarea gazdei.

Dacă rapoartele de verificare indică eșecuri în acordarea permisiunilor, comparați acordurile utilizatorului din baza de date a tenantului cu legarea gazdei configurată. Un utilizator acordat pentru `user@localhost` este diferit de `user@127.0.0.1` sau `user@%`.

## Rădăcina sistemului de fișiere (Filesystem root) {#filesystem-root}

Radiculul rădăcină (tenant root) trebuie să fie stabil în timpul repornirilor și deploațiilor. Evitați căi de montare temporare. Pentru instalările de tip Bedrock, confirmați că radicalul tenantului indică rădăcina web WordPress așteptată de bootstrap-ul tenantului, nu doar rădăcina proiectului.

## Ordinea de configurare (Provisioning order) {#provisioning-order}

Pentru noii inquilini suverani, folosiți această ordine:

1. Creați înregistrarea în registru pentru tenant.
2. Creați baza de date și utilizatorul bazei de date pentru tenant.
3. Bootstrapați schema tenantului.
4. Provisionați utilizatorii tenantului.
5. Configurați căile sistemului de fișiere (filesystem paths) ale tenantului.
6. Rulați verificarea migrației.
7. Schimbați rutarea sau DNS după ce verificarea este aprobată.

Această ordine împiedică inquilinii parțial izolați să primească trafic înainte ca scriitorul bazei de date, utilizatorii și sistemul de fișiere să fie gata.

## Fluxuri de gestionare a clienților suverani (Sovereign customer management flows) {#sovereign-customer-management-flows}

Ultimate Multisite v2.13.0 menține acțiunile de gestionare a clienților pe site-ul principal atunci când modul sovereign este activat. Un tenant poate rula tot ca o instalare WordPress izolată, dar acțiunile orientate către client care depind de facturare bazată pe rețea, membrare sau date de cont partajat ar trebui să trimită clientul înapoi la site-ul principal în loc să încearcă să finalizeze acțiunea în timpul execuției tenantului.

Fluxul pentru site-ul principal se aplică următoarelor cazuri:

- Schimbarea procesului de checkout și planurilor.
- Vederile generale ale contului și acțiunile de profil al clientului.
- Actualizările adresei de facturare și ecranurile de gestionare a plății.
- Vederile facturii și istoricului plății.
- Acțiunile de gestionare a site-ului, cum ar fi adăugarea sau ștergerea unui site.
- Schimbarea template-urilor (template switching).
- Mapearea domeniului și schimbările de domeniu principal.

Când un client începe una dintre aceste acțiuni dintr-un tenant soberân, Ultimate Multisite construiește URL-ul principal al site-ului și păstrează tenantul sursă ca țintă de returnare atunci când este în siguranță să o facă. Acest lucru permite clienților să finalizeze acțiunea gestionată pe înregistrările rețelei, apoi să revină la contextul tenantului fără a duplica starea facturării sau a membrii în baza de date soberană.

Pentru operatori, regula practică este: mențineți paginile de facturare, cont, checkout, factură, șablon și gestionare domeniului disponibile pe site-ul principal pentru rețelele soberane. Dashboard-urile tenantelor pot linka către acele pagini, dar site-ul principal rămâne sursa adevărului pentru acțiune.
