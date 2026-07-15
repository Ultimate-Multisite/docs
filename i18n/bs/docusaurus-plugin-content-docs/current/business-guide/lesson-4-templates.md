---
title: 'Lekcija 4: Izgradnja nišnih šablona'
sidebar_position: 5
_i18n_hash: 3ade990de5fd404a7f09a9d42d7535ee
---
# Lekcija 4: Izgradnja šablona za nišu

Šabloni su jezgro vaše vrijednosti za nišu. Vlasnik fitness studija koji se prijavi i vidi sajt koji već izgleda kao fitness sajt — sa rasporedima časova, profilima trenera i pravom vizualnom opremom — mnogo je skloniji da ostane s nama nego onaj koji vidi prazno platno.

## Gdje smo stali {#where-we-left-off}

Imamo funkcionalnu FitSite mrežu sa instaliranim i konfigurisanim Ultimate Multisite. Sada ćemo izgraditi šablone koji će FitSite učiniti da izgleda namjerno napravljen za fitness poslovanja.

## Zašto su šabloni za nišu važni {#why-niche-templates-matter}

Opći šabloni prisiljavaju vaše klijente da urade težak posao: da sami shvate koje stranice im trebaju, koji sadržajni strukturira radi, i kako to sve učiniti da izgleda pravilno za njihovu industriju. Šabloni za nišu eliminiraju tu težinu.

Vlasnik fitness studija koji se prijavi na FitSite trebao bi vidjeti:

- Naslovnu stranicu koja izgleda kao sajt fitness studija
- Stranice za časove, rasporede, trenere i cijene, već kreirane
- Vizualni materijal i zamjenski sadržaj koji odgovara njihovoj industriji
- Dizajn koji izgleda profesionalno i usklađeno s brendom za fitness

Oni samo unose svoje detalje. Ne počinju od nule.

## Planiranje šablona {#planning-your-templates}

Prije izgradnje, odlučite koje šablone ćete ponuditi. Za FitSite, kreiraćemo tri:

### Šablon 1: Studio Esencijal (Studio Essential) {#template-1-studio-essential}

Za male studije i privatne trenere.

- **Naslovna stranica** sa hero slikom, istaknutima časova i pozivom na akciju
- **O nama** stranica sa pričom i misijom studija
- **Časovi** stranica sa rasporednim izgledom
- **Treneri** stranica sa karticama profila
- **Kontakt** stranica sa mapom lokacije i formularom
- **Čist, modern dizajn** sa paletom boja prikladnom za fitness

### Šablon 2: Gym Pro {#template-2-gym-pro}

Za uspostavljene teretane sa više usluga.

- Sve u Studio Essentialu, plus:
- **Članstvo** stranica sa tabelom cijena
- **Galerija** stranica za fotografije objekta
- **Blog** sekcija za fitness savjete i vijesti
- **Testimoniali** sekcija na naslovnoj stranici
- **Više istaknutih** opcija brendiranja

### Šablon 3: Fitness Chain {#template-3-fitness-chain}

Za operacije sa više lokacija.

- Sve u Gym Prou, plus:
- **Lokacije** stranica sa više spiskova objekata
- **Podstranica za franšizu/lokaciju** šablon
- **Centralizirano brendiranje** sa detaljima specifičnim za lokaciju
- **Katalog osoblja** za sve lokacije

## Izgradnja sajta šablona {#building-a-template-site}

U Ultimate Multisiteu, šablon je jednostavno WordPress sajt konfigurisan na način na koji želite da izgledaju novi klijentski sajtovi. Evo kako ga kreirati:

### Korak 1: Kreiranje sajta šablona {#step-1-create-the-template-site}

1. Idite na **Sites > Add New** u vašem network adminu
2. Kreirajte sajt nazvan `template-studio-essential`
3. Ovaj sajt postaje vaše radno platno

### Korak 2: Instalacija i konfiguracija teme {#step-2-install-and-configure-the-theme}

Prebacite se na dashboard sajta šablona i:

1. Aktivizirajte temu koja je prikladna za fitness poslovanja
2. Konfigurišite postavke teme, boje i tipografiju
3. Postavite header i footer sa navigacijom prikladnom za fitness

:::tip Izbor teme
Izaberite temu koja je dovoljno fleksibilna da izgleda dobro za fitness, ali nije prekomplicirana da je vaši klijenti ne mogu upravljati. Teme poput Astra, GeneratePress ili Kadence dobro funkcioniraju jer su lagane, prilagodljive i dobro podržane.
:::

### Korak 3: Kreiranje stranica {#step-3-create-the-pages}

Izgradite svaku stranicu sa:

- **Zamjenskim sadržajem** koji teče prirodno za fitness ("Dobrodošli u [Ime studija]" umjesto "Lorem ipsum")
- **Zamjenskim slikama** sa besplatnih sajtova sa fotografijama koji prikazuju fitness aktivnosti
- **Funkcionalnim rasporedima** koristeći page builder ili block editor

Zamjenski sadržaj neka bude uputjiv gdje je to moguće. Umjesto generičkog popunjavajućeg teksta, napišite sadržaj poput: "Zamijenite ovo sa kratkim opisom vašeg studija i onoga što ga čini posebnim. Spomenite svoju trenersku filozofiju, godine iskustva ili šta klijenti mogu očekivati."

### Korak 4: Konfiguracija pluginova {#step-4-configure-plugins}

Instalirajte i aktivirajte pluginove koji fitness studiji trebaju:

- Plugin za rezervacije ili raspoređivanje (ako je primjenjivo na vaš plan)
- Plugin za kontakt formular
- SEO plugin (prekonfigurisan sa podrazumevanim vrijednostima relevantnim za fitness)

### Korak 5: Označavanje kao šablon {#step-5-mark-as-template}

1. Idite na **Ultimate Multisite > Sites**
2. Uredite sajt šablona
3. Omogućite prekidač **Site Template**

Ponovite ovaj proces za svaki šablon koji želite ponuditi.

## Lista provjere kvalitete šablona {#template-quality-checklist}

Prije što šablona učinite dostupnim, provjerite:

- [ ] Sve stranice se učitavaju ispravno i izgledaju profesionalno
- [ ] Zamjenski sadržaj je koristan i specifičan za nišu
- [ ] Slike su prikladne i pravilno licencirane
- [ ] Mobilna prilagodljivost radi na svim stranicama
- [ ] Navigacija je logična i potpuna
- [ ] Kontakt forme rade
- [ ] Nema pokvarenih linkova ili nedostajućih resursa
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
└── Spreman za konfiguraciju planova (sljedeća lekcija)
```

## Što smo izgradili u ovoj lekciji {#what-we-built-this-lesson}

- **Tri šablona specifična za nišu** dizajnirana za različite veličine fitness poslovanja
- **Sadržaj i vizualni materijal prikladni za fitness** koji platformu čini namjerno napravljenom
- **Uputjujući zamjenski sadržaj** koji klijentima pomaže u prilagođavanju
- **Lista provjere kvalitete** kako bi se osiguralo da su šabloni spremni za produkciju

---

**Sljedeće:** [Lesson 5: Designing Your Plans](lesson-5-plans) — kreiraćemo nivoe proizvoda koji odgovaraju načinu na koji fitness poslovanja zapravo funkcioniraju.
