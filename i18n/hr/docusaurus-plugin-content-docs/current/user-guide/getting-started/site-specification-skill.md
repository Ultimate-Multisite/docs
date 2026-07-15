---
title: Specifikacija stranice vještina
sidebar_position: 18
_i18n_hash: 7470e8d04c1f380b3dca6ba5559b34f5
---
# Vještina Specifikacija Sajta

**Vještina Specifikacija sajta (Site Specification)** je strukturiran pristup prikupljanju ciljeva vašeg sajta, publike i identiteta brenda. Ove informacije se čuvaju u vašoj memoriji **site_brief**, na koju agensi referiraju kroz sesije kako bi pružile dosljednu pomoć koja razumije kontekst.

## Što je Site Specification? {#what-is-site-specification}

Site Specification je proces dokumentiranja:

- **Svrhe sajta**: Što vaš sajt radi i zašto postoji
- **Ciljne publike**: Tko posjećuje vaš sajt i što im treba
- **Identiteta brenda**: Vaše boje, ton i vizualni stil
- **Poslovnih ciljeva**: Kako izgleda uspjeh za vaš sajt
- **Strukture sadržaja**: Kako je vaš sajt organiziran

Ova specifikacija postaje vaš **site_brief**, trajna memorija koju agensi koriste da bi razumjeli kontekst vašeg sajta.

## Zašto koristiti Site Specification? {#why-use-site-specification}

### Dosljednost kroz sesije {#consistency-across-sessions}

Bez site_brief-a, trebali biste ponovno objašnjavati svrhu svog sajta svaki put kada započnete novu sesiju. S njim, agensi odmah razumiju:

- Ciljeve i publiku vašeg sajta
- Boje i ton vašeg brenda
- Strukturu sadržaja
- Poslovne ciljeve

### Bolja preporuka {#better-recommendations}

Agencije koriste vaš site_brief da bi:

- Predložile značajke usklađene s svrhom vašeg sajta
- Preporučile strukture sadržaja koje odgovaraju vašim ciljevima
- Predložile dizajne dosljedne vašem brendu
- Izbjegle predlaganje nekompatibilnih značajki

### Brže uvođenje novih korisnika (Onboarding) {#faster-onboarding}

Novi agensi (ili agensi u novim sesijama) brzo mogu dobiti potrebne informacije čitajući vaš site_brief umjesto da postavljaju pojašnjavajuća pitanja.

## Pokretanje Site Specification-a {#initiating-site-specification}

### Tokom uvođenja Theme Builder-a {#during-theme-builder-onboarding}

Vještina Specifikacija sajta se automatski pokreće tijekom **toka uvođenja Theme Builder-a (Theme Builder onboarding flow)**. Asistent za postavljanje (Setup Assistant) agencija postavlja pitanja i gradi vaš site_brief.

### Ručno pokretanje {#manual-initiation}

Možete započeti s Specifikacijom sajta u bilo kojem trenutku:

```
"Dajmo da definiramo specifikaciju mog sajta"
```

ili

```
"Pomozi mi napraviti sažetak sajta"
```

## Proces Specifikacije Sajta {#the-site-specification-process}

### Korak 1: Svrha sajta {#step-1-site-purpose}

Agent će vas pitati:

```
Koja je primarna svrha vašeg sajta?
- E-commerce trgovina
- Blog ili sadržajni sajt
- Portfolo ili prikaz radova
- SaaS aplikacija
- Zajedništvo ili forum
- Drugi: [opišite]
```

Možete odabrati kategoriju ili opisati vlastitu svrhu.

### Korak 2: Ciljna publika {#step-2-target-audience}

```
Koja je vaša primarna publika?
- Konzumatori / općenito javnost
- Poslovni profesionalci
- Programeri / tehnički korisnici
- Studenti / edukatori
- Drugi: [opišite]

Kakva su im glavna potreba?
```

### Korak 3: Identitet marke {#step-3-brand-identity}

```
Koje su boje vaše marke?
- Primarna boja: [odaberite boju ili heksadecimalni kod]
- Sekundarna boja: [odaberite boju ili heksadecimalni kod]
- Akcentna boja: [opcionalno]

Kako biste opisali ton vaše marke?
- Profesionalan / korporativan
- Kreativan / umjetnički
- Zabavan / opušten
- Minimalan / modern
- Topao / prijateljski
```

### Korak 4: Poslovni ciljevi {#step-4-business-goals}

```
Kako izgleda uspjeh za vaš sajt?
- Generiranje potencijalnih kupaca (leads)
- Prodaja proizvoda
- Izgradnja zajednice
- Dijeljenje znanja
- Ustanovljivanje autoriteta
- Drugi: [opišite]

Koji je vaš primarni metrika uspjeha?
- Prihod
- Angažman korisnika (User engagement)
- Dostupnost sadržaja
- Konverzije
- Drugi
```

### Korak 5: Struktura sadržaja {#step-5-content-structure}

```
Kako je vaš sadržaj organiziran?
- Ravno (sve informacije na istom nivou)
- Hieriharski (kategorije i podkategorije)
- Hronološki (stil bloga)
- Bazirano na proizvodima (katalog)
- Drugi: [opišite]

Koje tipove sadržaja koristite?
- Blog postovi
- Stranice proizvoda
- Studije slučaja (Case studies)
- Dokumentacija
- Video snimci
- Drugi
```

## Vaša memorija site_briefa {#your-sitebrief-memory}

Nakon što završite Specifikaciju sajta, vaši podaci se čuvaju kao **site_brief** u memoriji vašeg agenta. Ovo je strukturiran zapis koji sadrži:

## Pregledavanje i ažuriranje vašeg site_briefa {#viewing-and-updating-your-sitebrief}

### Pogledajte svoj site_brief {#view-your-sitebrief}

Pitajte agenta:

```
"Pokaži mi moj site brief"
```

ili

```
"Što znam o mom sajtu?"
```

Agent će prikazati vaše pohranjene specifikacije.

### Ažurirajte svoj site_brief {#update-your-sitebrief}

Ako se vaš sajt mijenja, možete ga ažurirati:

```
"Ažuriraj moj site brief: sada ciljamo B2B kupce"
```

ili

```
"Osveži moju specifikaciju sajta"
```

Ovo će ponovno pokrenuti skill Site Specification s vašim postojećim informacijama kao početnom točkom.

## Kako agenti koriste site_brief {#how-agents-use-sitebrief}

### Predlozi dizajna {#design-recommendations}

Kada tražite promjene u dizajnu, agenti se oslanjaju na vaš site_brief:

```
Vi: "Redizajniraj mi naslovnicu"
Agent: "Na temelju vašeg site briefa, ciljate žene 25-45 godina s toplim, ručno rađenim tonom. Kreiraću dizajn koji naglašava vaše ručno rađene nakit i održive vrijednosti."
```

### Predlozi značajki (Features) {#feature-suggestions}

Agenti predlažu značajke usklađene s vašim ciljevima:

```
Vi: "Koje značajke bih trebao dodati?"
Agent: "Za e-commerce trgovinu fokusiranu na lojalnost kupaca, preporučujem: program lojalnosti, recenzije kupaca, e-mail newsletter i prijedloge proizvoda."
```

### Struktura sadržaja {#content-structure}

Agenti predlažu organizaciju sadržaja na temelju vaše strukture:

Kako bih organizirati svoj blog?
Odnosno, s obzirom na to da koristite product catalog s blogom, predlažem da objave organizirate po kategorijama proizvoda i napravite „vodiče za stil“ koji prikazuju više proizvoda zajedno.

## Najbolje prakse {#best-practices}

### Budite specifični {#be-specific}

Umjesto "općenito publika", opišite svoju stvarnu publiku:

- ✓ "Žene od 25 do 45 godina, zainteresirane za održivu modnu odjeću"
- ✗ "Svi"

### Redovito ažurirajte {#update-regularly}

Kako se vaš sajt razvija, ažurirajte svoj site_brief (site opis):

- Kada prebacujete ciljnu publiku
- Kada dodajete nove linije proizvoda
- Kada se vaša brend identitet mijenja
- Kada se poslovni ciljevi mijenjaju

### Koristite dosljednu terminologiju {#use-consistent-terminology}

Koristite iste termine kroz sve sesije:

- ✓ Uvijek koristite "održiva bižuterija" (a ne "ecološki prihvatljiva bižuterija" i "zeleni proizvodi")
- ✓ Dosljedno se obraćate svojoj publici istim imenom

### Uključite kontekst {#include-context}

Dajte pozadinu koja pomaže agentima da shvate vaše odluke:

- "Cilimo profesionalce koji cijene kvalitet nad cijenom"
- "Naša publika je tehnološki pismen i očekuje moderni dizajn"
- "Mi smo startap financiran samim kapitalom, pa nam trebaju učinkovita rješenja"

## Povezanost s onboardingom Theme Buildera {#relationship-to-theme-builder-onboarding}

Vještina Site Specification (Specifikacija sajta) integrirana je u **onboarding tok Theme Buildera**. Kada završite proces podešavanja, vaš site_brief se automatski kreira s informacijama koje ste unijeli.

Možete pokrenuti Site Specification nezavisno ako želite:

- Usporediti svoju specifikaciju nakon početne postavke
- Ažurirati svoj site brief kako se vaš sajt razvija
- Kreirati detaljnu specifikaciju prije nego što počnete s Theme Builderom

## Rješavanje problema (Troubleshooting) {#troubleshooting}

**Moj site_brief se ne koristi**
- Potvrdite da agent ima pristup memoriji
- Zamolite agenta da "vgeriše moj site brief" (recall my site brief)
- Provjerite da je memorija uključena u vašim postavkama

**Želim početi s novom site\_brief-om**
- Pitajte agenta: "Očisti mi site brief i počeo od nule"
- Zatim ponovite Site Specification

**Agent daje preporuke koje ne odgovaraju mojoj site\_brief-u**
- Pitajte agenta da "proveri moju site brief"
- Ažurirajte svoj site\_brief ako je zastario
- Dajte dodatni kontekst u svojim zahtjevima

## Sljedeći koraci {#next-steps}

Nakon što definirate specifikaciju vaše stranice:

1. **Koristite Theme Builder**: Kreirajte prilagođeni theme na temelju vaše site\_brief-a
2. **Usporedite dizajn**: Koristite vještinu Design System Aesthetics za detaljan rad na dizajnu
3. **Planirajte sadržaj**: Pitajte agente za preporuke strukture sadržaja
4. **Izgradite značajke**: Zatražite značajke usklađene s vašim poslovnim ciljevima
