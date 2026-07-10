---
title: 'Lekcija 4: Izrada nišnih predložaka'
sidebar_position: 5
_i18n_hash: 3ade990de5fd404a7f09a9d42d7535ee
---
# Lekcija 4: Izrada nišnih predložaka {#lesson-4-building-niche-templates}

Predlošci su srž vaše nišne vrijednosne ponude. Vlasnik fitness studija koji se prijavi i vidi web-mjesto koje već izgleda kao fitness web-mjesto -- s rasporedima treninga, profilima trenera i odgovarajućim slikama -- mnogo je vjerojatnije da će ostati nego onaj koji vidi prazno platno.

## Gdje smo stali {#where-we-left-off}

Imamo funkcionalnu FitSite mrežu s instaliranim i konfiguriranim Ultimate Multisite. Sada izrađujemo predloške zbog kojih FitSite djeluje namjenski napravljen za fitness tvrtke.

## Zašto su nišni predlošci važni {#why-niche-templates-matter}

Generički predlošci prisiljavaju vaše kupce da obave težak posao: da shvate koje im stranice trebaju, koja struktura sadržaja funkcionira i kako postići da izgleda ispravno za njihovu industriju. Nišni predlošci uklanjaju to trenje.

Vlasnik fitness studija koji se prijavi na FitSite trebao bi vidjeti:

- Početnu stranicu koja izgleda kao web-mjesto fitness studija
- Već izrađene stranice za treninge, rasporede, trenere i cijene
- Slike i zamjenski sadržaj koji odgovaraju njihovoj industriji
- Dizajn koji djeluje profesionalno i usklađeno s brendom za fitness

Oni unose svoje podatke. Ne počinju od nule.

## Planiranje vaših predložaka {#planning-your-templates}

Prije izrade odlučite koje ćete predloške ponuditi. Za FitSite izradit ćemo tri:

### Predložak 1: Studio Essential {#template-1-studio-essential}

Za male studije i osobne trenere.

- **Početna stranica** sa slikom junaka, istaknutim treninzima i pozivom na akciju
- **O nama** stranica s pričom i misijom studija
- **Treninzi** stranica s rasporedom
- **Treneri** stranica s karticama profila
- **Kontakt** stranica s kartom lokacije i obrascem
- **Čist, moderan dizajn** s paletom boja prikladnom za fitness

### Predložak 2: Gym Pro {#template-2-gym-pro}

Za etablirane teretane s više usluga.

- Sve iz Studio Essential, plus:
- **Članstvo** stranica s tablicom cijena
- **Galerija** stranica za fotografije prostora
- **Blog** odjeljak za fitness savjete i novosti
- **Izjave klijenata** odjeljak na početnoj stranici
- **Istaknutije brendiranje** opcije

### Predložak 3: Fitness Chain {#template-3-fitness-chain}

Za poslovanje s više lokacija.

- Sve iz Gym Pro, plus:
- **Lokacije** stranica s popisima više objekata
- **Franšiza/lokacija** predložak podstranice
- **Centralizirano brendiranje** s detaljima specifičnim za lokaciju
- **Imenik osoblja** kroz lokacije

## Izrada web-mjesta predloška {#building-a-template-site}

U Ultimate Multisite, predložak je jednostavno WordPress web-mjesto konfigurirano onako kako želite da izgledaju nova web-mjesta kupaca. Evo kako ga izraditi:

### Korak 1: Izradite web-mjesto predloška {#step-1-create-the-template-site}

1. Idite na **Sites > Add New** u administraciji mreže
2. Izradite web-mjesto nazvano `template-studio-essential`
3. Ovo web-mjesto postaje vaše radno platno

### Korak 2: Instalirajte i konfigurirajte temu {#step-2-install-and-configure-the-theme}

Prebacite se na nadzornu ploču web-mjesta predloška i:

1. Aktivirajte temu prikladnu za fitness tvrtke
2. Konfigurirajte postavke teme, boje i tipografiju
3. Postavite zaglavlje i podnožje s navigacijom prikladnom za fitness

:::tip Odabir teme
Odaberite temu koja je dovoljno fleksibilna da izgleda dobro za fitness, ali ne toliko složena da je vaši kupci ne mogu održavati. Teme poput Astra, GeneratePress ili Kadence dobro funkcioniraju jer su lagane, prilagodljive i dobro podržane.
:::

### Korak 3: Izradite stranice {#step-3-create-the-pages}

Izradite svaku stranicu s:

- **Zamjenskim sadržajem** koji se prirodno čita za fitness ("Dobro došli u [Naziv studija]" umjesto "Lorem ipsum")
- **Zamjenskim slikama** s besplatnih stranica sa stock fotografijama koje prikazuju fitness aktivnosti
- **Funkcionalnim rasporedima** koristeći alat za izradu stranica ili uređivač blokova

Neka zamjenski sadržaj bude poučan gdje je moguće. Umjesto generičkog teksta za popunu, napišite sadržaj poput: "Zamijenite ovo kratkim opisom svog studija i onoga što ga čini posebnim. Spomenite svoju filozofiju treninga, godine iskustva ili što klijenti mogu očekivati."

### Korak 4: Konfigurirajte pluginove {#step-4-configure-plugins}

Instalirajte i aktivirajte pluginove koji su potrebni fitness studijima:

- Plugin za rezervacije ili zakazivanje (ako je primjenjivo na razinu vašeg plana)
- Plugin za kontaktni obrazac
- SEO plugin (unaprijed konfiguriran sa zadanim postavkama relevantnima za fitness)

### Korak 5: Označite kao predložak {#step-5-mark-as-template}

1. Idite na **Ultimate Multisite > Sites**
2. Uredite web-mjesto predloška
3. Omogućite prekidač **Site Template**

Ponovite ovaj postupak za svaki predložak koji želite ponuditi.

## Kontrolni popis kvalitete predloška {#template-quality-checklist}

Prije nego što predložak učinite dostupnim, provjerite:

- [ ] Sve se stranice ispravno učitavaju i izgledaju profesionalno
- [ ] Zamjenski sadržaj je koristan i specifičan za nišu
- [ ] Slike su prikladne i pravilno licencirane
- [ ] Mobilna responzivnost funkcionira na svim stranicama
- [ ] Navigacija je logična i potpuna
- [ ] Kontaktni obrasci funkcioniraju
- [ ] Nema neispravnih poveznica ili nedostajućih resursa
- [ ] Brzina učitavanja stranice je prihvatljiva

## FitSite mreža do sada {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured)
├── Hosting with wildcard SSL
├── Domain mapping configured
├── Site Templates
│   ├── Studio Essential (small studios, trainers)
│   ├── Gym Pro (established gyms)
│   └── Fitness Chain (multi-location)
└── Ready for plan configuration (next lesson)
```

## Što smo izradili u ovoj lekciji {#what-we-built-this-lesson}

- **Tri predloška specifična za nišu** dizajnirana za različite veličine fitness tvrtki
- **Sadržaj i slike prikladni za fitness** zbog kojih platforma djeluje namjenski izrađeno
- **Poučan zamjenski sadržaj** koji vodi kupce kroz prilagodbu
- **Kontrolni popis kvalitete** kako bi predlošci bili spremni za produkciju

---

**Sljedeće:** [Lekcija 5: Dizajniranje vaših planova](lesson-5-plans) -- izradit ćemo razine proizvoda koje odgovaraju načinu na koji fitness tvrtke stvarno posluju.
