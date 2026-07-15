---
title: 'Lekcija 12: Vođenje poslovanja'
sidebar_position: 13
_i18n_hash: 0fe6371df216b74a2051b95972ad68e8
---
# Lekcija 12: Vođenje poslovanja

Platforma nije projekat koji završavate – to je posao koji vodite. Ova lekcija pokriva svakodnevne operacije upravljanja FitSite-om: podršku, naplatu, održavanje i održavanje zadovoljstva kupaca.

## Gdje smo stali {#where-we-left-off}

FitSite je aktivan i kupci se registruju. Sada morate osigurati da poslovanje radi održivo.

## Dnevne operacije {#daily-operations}

### Praćenje (Monitoring) {#monitoring}

Provjerite ovo svakodnevno (ili postavite upozorenja):

- **Uptime (Dostupnost):** Je li platforma dostupna? Koristite uslugu praćenja dostupnosti.
- **Novi registracije:** Koliko je danas novih kupaca registriralo?
- **Neuspješne uplate:** Ima li neuspjele uplate kojima je potrebna pažnja?
- **Zahtjevi za podršku:** Ima li nerešena pitanja kupaca?

### Podrška kupcima {#customer-support}

Vaša nišna fokus je prednost. Budući da su svi vaši kupci fitnes studiji, ponavljate iste pitanja:

**Uobičajena pitanja koja ćete dobiti:**

- "Kako ažuriram raspored svojih časova?"
- "Mogu li promijeniti boje svog sajta?"
- "Kako dodati novog trenera na svoj sajt?"
- "Moj domen ne radi"
- "Kako otkazati/nadograditi svoj plan?"

Izgradite svoju bazu znanja (koju ste započeli u Lekciji 8) oko ovih ponavljajućih pitanja. Svaki zahtjev za podršku koji bi mogao biti članak u bazi znanja je signal da napišete taj članak.

### Nivoi podrške (Support Tiers) {#support-tiers}

Kako rastete, strukturirajte podršku prema planu:

| Plan | Nivo podrške | Vrijeme odgovora |
|------|--------------|---------------|
| Starter | Baza znanja + e-mail | 48 sati |
| Growth | E-mail podrška | 24 sata |
| Pro | Prioritetni e-mail + poziv za uvođenje | 4 sata |

Dodatak [Support Tickets](/addons/support-tickets) može pomoći u upravljanju zahtjevima za podršku unutar platforme.

## Operacije naplate {#billing-operations}

### Ponovljene uplate {#recurring-payments}

Ultimate Multisite automatski obrađuje ponovnu naplatu putem vašeg gatewaya za plaćanja. Vaš posao je da pratite:

- **Neuspješne uplate:** Odmah slijedite. Većina neuspjele uplata su isteknute kartice, a ne namjerno otkazivanje.
- **Dunning:** Postavite automatizovanu logiku ponovnog pokušaja putem vašeg gatewaya za plaćanja (Stripe ovo dobro obrađuje)
- **Zahtjevi za otkazivanje:** Razumite zašto kupci napuštaju. Svako otkazivanje je povratna informacija.

### Upravljanje članstvom (Memberships) {#managing-memberships}

Idite na **Ultimate Multisite > Memberships** da biste:

- Pregledali sve aktivne pretplate
- Rukovodili zahtjevima za nadogradnju i degradaciju
- Obrađivali povraćaj novca kada je potrebno
- Upravljali istekom probnih perioda

Pogledajte [Managing Memberships](/user-guide/administration/managing-memberships) za potpuni vodič.

### Fakturisanje (Invoicing) {#invoicing}

Osigurajte da se fakture generišu ispravno za svaku uplatu. Kupci mogu potrebiti fakture za izvještavanje o poslovnim troškovima. Pogledajte [Managing Payments and Invoices](/user-guide/administration/managing-payments-and-invoices).

## Održavanje platforme {#platform-maintenance}

### Ažuriranje WordPressa i pluginova {#wordpress-and-plugin-updates}

Kao administrator mreže, vi ste odgovorni za:

- **Ažuriranje jezgra WordPressa:** Testirajte na staging sajtu prije primjene na produkciji
- **Ažuriranje pluginova:** Isto – prvo testirajte, pa primijenite na cijelu mrežu
- **Ažuriranje tema:** Provjerite da li šabloni izgledaju ispravno nakon ažuriranja tema
- **Ažuriranje Ultimate Multisite-a:** Pratite changelog i testirajte prije ažuriranja

:::warning Nikada ne ažurirajte u produkciji bez testiranja
Pokvareno ažuriranje pogađa svaki sajt kupca na vašoj mreži. Uvijek testirajte ažuriranja na staging kopiji vaše mreže.
:::

### Sigurnost (Security) {#security}

- Držite sav softver ažuriran
- Koristite snažne lozinke i dvofaktorsku autentifikaciju za admin račune
- Pratite sumnjive aktivnosti
- Imate plan za sigurnosne incidente

### Performanse {#performance}

Kako vaša mreža raste, pratite:

- **Vrijeme učitavanja stranica:** Jesu li sajtovi kupaca brzi?
- **Korištenje resursa servera:** CPU, memorija, disk prostor
- **Performanse baze podataka:** Velike mreže zahtijevaju optimizaciju baze podataka s vremenom

Razmislite o implementaciji keširanja (page cache, object cache) i CDN-a ako već niste. [Cloudflare integration](/user-guide/host-integrations/cloudflare) obrađuje veliki dio ovoga.

## Upravljanje životnim ciklusom kupaca {#customer-lifecycle-management}

### Smanjenje stopa napuštanja (Churn) {#reducing-churn}

Stopa napuštanja je procenat kupaca koji otkazuju svaki mjesec. Za posao pretplate, smanjenje stopa napuštanja je jednako važno kao i sticanje novih kupaca.

**Uobičajni razlozi zašto fitnes studiji napuštaju:**

- Nisu uspjeli shvatiti kako koristiti platformu → poboljšati uvođenje (onboarding)
- Sajt nije izgledao dovoljno dobro → poboljšati šablone
- Nisam vidio vrijednost → poboljšati funkcije ili komunikaciju
- Pronašli su jeftiniju alternativu → pojačati vašu nišnu vrijednost
- Zatvorio je njihov posao → neizbježno, ali to pratiti odvojeno

### Poticanje nadogradnje {#encouraging-upgrades}

Kupci na Starter planu koji uspijevaju bi trebali biti potaknuti na nadogradnju:

- Kada dosegnu limite plana (sajtovi, skladište), prikazati prompt za nadogradnju
- Slanje ciljanih e-mailova koji ističu funkcije Growth plana od kojih bi mogli imati koristi
- Prikazivanje onoga što su kupci Growth/Pro izgradili

### Kampanje za povratak (Win-Back Campaigns) {#win-back-campaigns}

Kada kupac otkaže:

1. Pitajte zašto (anketa za izlazak ili e-mail)
2. Adresirajte njihovu zabrinutost ako je moguće
3. Ponudite popust za povratak (30-60 dana nakon otkazivanja)

## Sedmične i mjesečne rutine {#weekly-and-monthly-routines}

### Sedmično {#weekly}

- Pregledati nove registracije i otkazivanja
- Odgovoriti na sve otvorene zahtjeve za podršku
- Provjeriti performanse platforme i dostupnost
- Pregledati sve neuspjele uplate

### Mjesečno {#monthly}

- Analizirati ključne metrike (MRR, stopa napuštanja, novi kupci, nadogradnje)
- Primijeniti ažuriranja WordPressa i pluginova (nakon testiranja na stagingu)
- Pregledati i ažurirati bazu znanja na temelju obrazaca podrške
- Slanje novinskog biltena ili ažuriranja kupcima (nove funkcije, savjeti, vijesti iz fitnes industrije)

### Kvartalno {#quarterly}

- Pregledati cijene u odnosu na konkurenciju i povratne informacije kupaca
- Evaluirati dizajn šablona – da li treba osvježenje?
- Procijeniti kapacitet hostinga – da li morate skalirati?
- Pregledati i poboljšati uvođenje (onboarding) na temelju podataka o aktivaciji

## Što smo izgradili u ovoj lekciji {#what-we-built-this-lesson}

- **Dnevne rutine praćenja** dostupnosti, registracija, uplate i podrške
- **Strukturirane nivoe podrške** usklađeni s nivoima plana
- **Operacije naplate** uključujući dunning i rukovanje otkazivanjem
- **Procedura održavanja** za ažuriranja, sigurnost i performanse
- **Strategije smanjenja stopa napuštanja** specifične za fitnes nišu
- **Sedmične, mjesečne i kvartalne operativne rutine**

---

**Sljedeće:** [Lekcija 13: Skaliranje](lesson-13-growth) — rast FitSite-a od malog poslovanja do stvarnog biznisa.
