---
title: 'Lekcija 12: Vođenje poslovanja'
sidebar_position: 13
_i18n_hash: 0fe6371df216b74a2051b95972ad68e8
---
# Lekcija 12: Vođenje poslovanja

Platforma nije projekt koji završite -- to je poslovanje koje vodite. Ova lekcija pokriva svakodnevne operacije upravljanja FitSiteom: podršku, naplatu, održavanje i održavanje zadovoljstva korisnika.

## Gdje smo stali

FitSite je aktivan i korisnici se prijavljuju. Sada trebate održivo voditi operaciju.

## Svakodnevne operacije

### Praćenje

Provjeravajte ovo svakodnevno (ili postavite upozorenja):

- **Uptime**: Je li platforma dostupna? Koristite uslugu za praćenje uptimea.
- **Nove prijave**: Koliko se novih korisnika prijavilo danas?
- **Neuspjele uplate**: Postoje li neuspjele uplate koje zahtijevaju pozornost?
- **Zahtjevi za podršku**: Ima li neodgovorenih pitanja korisnika?

### Korisnička podrška

Vaš fokus na nišu ovdje je prednost. Budući da su svi vaši korisnici fitness studiji, ista ćete pitanja viđati iznova:

**Česta pitanja koja ćete dobivati:**

- "Kako mogu ažurirati raspored svojih satova?"
- "Mogu li promijeniti boje svoje stranice?"
- "Kako mogu dodati novog trenera na svoju stranicu?"
- "Moja domena ne radi"
- "Kako mogu otkazati/nadograditi svoj plan?"

Izgradite svoju bazu znanja (započetu u Lekciji 8) oko ovih ponavljajućih pitanja. Svaki tiket podrške koji je mogao biti članak u bazi znanja signal je da napišete taj članak.

### Razine podrške

Kako rastete, strukturirajte podršku prema planu:

| Plan | Razina podrške | Vrijeme odgovora |
|------|--------------|---------------|
| Starter | Baza znanja + email | 48 sati |
| Growth | Email podrška | 24 sata |
| Pro | Prioritetni email + onboarding poziv | 4 sata |

[Support Tickets addon](/addons/support-tickets) može pomoći u upravljanju zahtjevima za podršku unutar platforme.

## Operacije naplate

### Ponavljajuće uplate

Ultimate Multisite automatski obrađuje ponavljajuću naplatu putem vašeg payment gatewaya. Vaš je posao pratiti:

- **Neuspjele uplate**: Brzo se javite. Većina neuspjeha su istekle kartice, a ne namjerna otkazivanja.
- **Dunning**: Postavite automatiziranu logiku ponovnih pokušaja putem svog payment gatewaya (Stripe to dobro obrađuje)
- **Zahtjevi za otkazivanje**: Razumite zašto korisnici odlaze. Svako otkazivanje je povratna informacija.

### Upravljanje članstvima

Idite na **Ultimate Multisite > Memberships** kako biste:

- Pregledali sve aktivne pretplate
- Obradili zahtjeve za nadogradnju i snižavanje plana
- Obradili povrate novca kada je potrebno
- Upravljali istecima probnog razdoblja

Pogledajte [Upravljanje članstvima](/user-guide/administration/managing-memberships) za potpunu referencu.

### Fakturiranje

Osigurajte da se računi ispravno generiraju za svaku uplatu. Korisnicima će možda trebati računi za prijavu poslovnih troškova. Pogledajte [Upravljanje uplatama i računima](/user-guide/administration/managing-payments-and-invoices).

## Održavanje platforme

### WordPress i ažuriranja plugina

Kao mrežni administrator odgovorni ste za:

- **WordPress core ažuriranja**: Testirajte na staging stranici prije primjene u produkciji
- **Ažuriranja plugina**: Isto -- prvo testirajte, zatim primijenite na cijeloj mreži
- **Ažuriranja teme**: Provjerite izgledaju li predlošci i dalje ispravno nakon ažuriranja teme
- **Ultimate Multisite ažuriranja**: Pratite changelog i testirajte prije ažuriranja

:::warning Nikada ne ažurirajte u produkciji bez testiranja
Pokvareno ažuriranje utječe na svaku korisničku stranicu na vašoj mreži. Uvijek prvo testirajte ažuriranja na staging kopiji svoje mreže.
:::

### Sigurnost

- Održavajte sav softver ažurnim
- Koristite snažne lozinke i dvofaktorsku autentifikaciju za administratorske račune
- Pratite sumnjive aktivnosti
- Imajte plan za sigurnosne incidente

### Performanse

Kako vaša mreža raste, pratite:

- **Vrijeme učitavanja stranica**: Jesu li korisničke stranice brze?
- **Korištenje resursa poslužitelja**: CPU, memorija, prostor na disku
- **Performanse baze podataka**: Velike mreže s vremenom trebaju optimizaciju baze podataka

Razmotrite implementaciju cacheiranja (page cache, object cache) i CDN-a ako to već niste učinili. [Cloudflare integracija](/user-guide/host-integrations/cloudflare) obrađuje velik dio toga.

## Upravljanje životnim ciklusom korisnika

### Smanjenje odljeva

Odljev je postotak korisnika koji otkažu svaki mjesec. Za pretplatničko poslovanje smanjenje odljeva jednako je važno kao i stjecanje novih korisnika.

**Česti razlozi zbog kojih korisnici fitness studija odlaze:**

- Nisu mogli shvatiti kako koristiti platformu → poboljšajte onboarding
- Stranica nije izgledala dovoljno dobro → poboljšajte predloške
- Nisu vidjeli vrijednost → poboljšajte značajke ili komunikaciju
- Pronašli su jeftiniju alternativu → osnažite svoju nišnu vrijednost
- Njihovo se poslovanje zatvorilo → neizbježno, ali pratite to zasebno

### Poticanje nadogradnji

Korisnike na Starteru koji uspijevaju treba potaknuti na nadogradnju:

- Kada dosegnu ograničenja plana (stranice, pohrana), prikažite poticaje za nadogradnju
- Pošaljite ciljane emailove koji ističu značajke Growth plana od kojih bi imali koristi
- Prikažite što su Growth/Pro korisnici izgradili

### Kampanje za povratak korisnika

Kada korisnik otkaže:

1. Pitajte zašto (izlazna anketa ili email)
2. Ako je moguće, riješite njihovu zabrinutost
3. Ponudite popust za povratak (30-60 dana nakon otkazivanja)

## Tjedne i mjesečne rutine

### Tjedno

- Pregledajte nove prijave i otkazivanja
- Odgovorite na sve otvorene tikete podrške
- Provjerite performanse platforme i uptime
- Pregledajte sve neuspjele uplate

### Mjesečno

- Analizirajte ključne metrike (MRR, odljev, novi korisnici, nadogradnje)
- Primijenite WordPress i ažuriranja plugina (nakon staging testa)
- Pregledajte i ažurirajte bazu znanja na temelju obrazaca podrške
- Pošaljite newsletter ili ažuriranje korisnicima (nove značajke, savjeti, vijesti iz fitness industrije)

### Kvartalno

- Pregledajte cijene u odnosu na konkurente i povratne informacije korisnika
- Procijenite dizajn predložaka -- treba li ih osvježiti?
- Procijenite kapacitet hostinga -- trebate li skalirati?
- Pregledajte i poboljšajte onboarding na temelju podataka o aktivaciji

## Što smo izgradili u ovoj lekciji

- **Dnevne rutine praćenja** za dostupnost, registracije, plaćanja i podršku
- **Slojevita struktura podrške** usklađena s razinama plana
- **Operacije naplate** uključujući dunning i obradu otkazivanja
- **Postupci održavanja** za ažuriranja, sigurnost i performanse
- **Strategije smanjenja odljeva korisnika** specifične za fitness nišu
- **Tjedne, mjesečne i tromjesečne operativne rutine**

---

**Sljedeće:** [Lekcija 13: Skaliranje](lesson-13-growth) -- rast FitSitea iz male operacije u pravi posao.
