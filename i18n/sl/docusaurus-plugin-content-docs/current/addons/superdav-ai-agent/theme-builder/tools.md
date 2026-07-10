---
title: Orodja in konfiguracija
sidebar_position: 4
_i18n_hash: 78a3b6062e985598d020eaee28754120
---
# Orodja in konfiguracija {#tools-and-configuration}

Theme Builder uporablja nabor orodij za analizo, oblikovanje in izdelavo vašega WordPress spletnega mesta. V različici 1.16.0 je **sd-ai-agent/site-scrape zdaj orodje Tier 1**, zato je privzeto na voljo v Theme Builder. Superdav AI Agent v1.18.0 uvaja tudi ločeno distribuiran napredni spremljevalni paket za zaupanja vredne razvijalske poteke dela; ta orodja niso del osnovnega paketa WordPress.org in jih je treba namestiti ter pooblastiti ločeno.

## Razpoložljiva orodja {#available-tools}

### Orodja Tier 1 (vedno na voljo) {#tier-1-tools-always-available}

Orodja Tier 1 so privzeto na voljo v Theme Builder brez dodatne konfiguracije.

#### sd-ai-agent/site-scrape {#sd-ai-agentsite-scrape}

**Namen:** Analiza obstoječih spletnih mest za pridobivanje oblikovalskega navdiha, strukture vsebine in funkcionalnosti.

**Zmožnosti:**

- **Analiza spletnega mesta** — strganje in analiza konkurenčnih ali navdihujočih spletnih mest
- **Izluščenje oblikovanja** — prepoznavanje barv, pisav in vzorcev postavitve
- **Struktura vsebine** — razumevanje organizacije strani in hierarhije
- **Zaznavanje funkcij** — prepoznavanje pluginov in funkcionalnosti
- **Analiza zmogljivosti** — preverjanje hitrosti strani in optimizacije
- **SEO analiza** — pregled meta oznak in strukturiranih podatkov

**Uporaba:**

```
Analiziraj oblikovanje example.com in ga uporabi kot navdih za moje spletno mesto.
```

**Kaj izlušči:**

- Barvno paleto in uporabo barv
- Tipografijo (pisave in velikosti)
- Strukturo postavitve in razmike
- Vzorce navigacije
- Organizacijo vsebine
- Uporabo slik in medijev
- Interaktivne elemente
- Prilagodljivost za mobilne naprave

**Omejitve:**

- Ne more strgati spletnih mest, zaščitenih z geslom
- Spoštuje robots.txt in pravilnike spletnega mesta
- Morda ne zajame dinamične vsebine
- Spletna mesta z veliko JavaScripta imajo lahko omejeno analizo
- Analiza velikih spletnih mest lahko traja dlje

### Orodja Tier 2 (izbirno) {#tier-2-tools-optional}

Orodja Tier 2 so na voljo, ko so izrecno omogočena v nastavitvah Theme Builder.

#### Advanced Analytics {#advanced-analytics}

Zagotavlja podrobne metrike zmogljivosti:

- Čase nalaganja strani
- Core Web Vitals
- SEO oceno
- Oceno dostopnosti
- Oceno najboljših praks

#### Content Optimizer {#content-optimizer}

Analizira in predlaga izboljšave za:

- Berljivost
- SEO optimizacijo
- Uporabo ključnih besed
- Strukturo vsebine
- Postavitev pozivov k dejanju

### Orodja Tier 3 (Premium) {#tier-3-tools-premium}

Orodja Tier 3 zahtevajo dodatno konfiguracijo ali premium funkcije.

#### AI Content Generator {#ai-content-generator}

Ustvarja vsebino za:

- Opise izdelkov
- Strani storitev
- Objave na blogu
- Meta opise
- Besedilo pozivov k dejanju

#### Advanced Design Tools {#advanced-design-tools}

Zagotavlja napredne zmožnosti oblikovanja:

- Ustvarjanje CSS po meri
- Ustvarjanje animacij
- Oblikovanje interaktivnih elementov
- Napredno teorijo barv
- Optimizacijo tipografije

### Napredna spremljevalna orodja (ločen paket) {#advanced-companion-tools-separate-package}

Napredni spremljevalni paket se distribuira ločeno od osnovne izdaje Superdav AI Agent. Namenjen je zaupanja vrednim razvijalskim okoljem in okoljem lastnikov spletnih mest, kjer administratorji agentu izrecno dovolijo uporabo orodij z velikim vplivom.

Napredne spremljevalne zmožnosti lahko vključujejo:

- **Orodja datotečnega sistema** — pregledovanje in spreminjanje odobrenih datotek v zaupanja vrednih okoljih
- **Orodja podatkovne baze** — poizvedovanje ali posodabljanje podatkov spletnega mesta, kadar je to izrecno pooblaščeno
- **WP-CLI orodja** — izvajanje ukazov za vzdrževanje in pregled WordPress
- **Orodja REST dispečerja** — klic registriranih REST endpointov prek nadzorovanih potekov dispečiranja
- **Orodja za gradnjo pluginov** — ogrodje in iteracija kode plugina
- **Orodja Git posnetkov** — ustvarjanje posnetkov pred tveganimi razvijalskimi operacijami
- **Orodja za upravljanje uporabnikov** — pomoč pri pregledu ali prilagajanju uporabniških zapisov, kjer je dovoljeno
- **Orodja za primerjalne preizkuse** — izvajanje primerjalnih preizkusov zmogljivosti ali zmožnosti za razvojni pregled

Teh ne dokumentirajte kot splošno razpoložljivih orodij Theme Builder za vsako namestitev. Na voljo so samo, ko je napredni spremljevalni paket nameščen, omogočen in omejen na zaupanja vredne administratorje.

## Konfiguracija orodij {#tool-configuration}

### Omogočanje orodij {#enabling-tools}

Za omogočanje dodatnih orodij v Theme Builder:

1. Pomaknite se na **Gratis AI Agent → Settings**
2. Pojdite na **Theme Builder → Tools**
3. Po potrebi vklopite/izklopite orodja
4. Shranite nastavitve

### Dovoljenja orodij {#tool-permissions}

Nekatera orodja zahtevajo dovoljenja:

- **Strganje spletnega mesta** — zahteva dostop do interneta
- **Analitika** — zahteva integracijo z Google Analytics
- **Ustvarjanje vsebine** — zahteva API ključe
- **Napredne funkcije** — lahko zahtevajo premium naročnino
- **Napredna spremljevalna orodja** — zahtevajo ločeno distribuiran napredni paket in izrecno zaupanje administratorja

### API ključi in poverilnice {#api-keys-and-credentials}

Konfigurirajte API ključe za orodja, ki jih zahtevajo:

1. Pojdite na **Gratis AI Agent → Settings → API Keys**
2. Vnesite poverilnice za vsako orodje
3. Preizkusite povezavo
4. Varno shranite

### Namestitev naprednega spremljevalnega paketa {#installing-the-advanced-companion-package}

Napredni spremljevalni paket je izdan ločeno od osnovnega ZIP paketa WordPress.org. Namestite ga samo iz uradnega distribucijskega kanala projekta za izdajo, nato omejite dostop na zaupanja vredne administratorje. Preden na produkcijskem spletnem mestu omogočite orodja datotečnega sistema, podatkovne baze, WP-CLI, REST dispečerja, gradnje pluginov, upravljanja uporabnikov ali primerjalnih preizkusov, preglejte mehanizme človeške odobritve in obnašanje Git posnetkov.

## Uporaba sd-ai-agent/site-scrape {#using-sd-ai-agentsite-scrape}

### Osnovna uporaba {#basic-usage}

Prosite Theme Builder, naj analizira spletno mesto:

```
Analiziraj oblikovanje spletnega mesta mojega konkurenta na competitor.com
in predlagaj oblikovalske izboljšave za moje spletno mesto.
```

### Specifična analiza {#specific-analysis}

Zahtevajte specifične vrste analize:

```
Izlušči barvno paleto iz example.com in jo uporabi kot navdih.
```

```
Analiziraj navigacijsko strukturo example.com in uporabi podobno
organizacijo za moje spletno mesto.
```

```
Preveri mobilno prilagodljivost example.com in zagotovi, da je moje spletno mesto
enako prilagodljivo.
```

### Primerjalna analiza {#comparison-analysis}

Primerjajte več spletnih mest:

```
Primerjaj oblikovanje site1.com in site2.com ter ustvari oblikovanje,
ki združuje najboljše elemente obeh.
```

## Omejitve in premisleki glede orodij {#tool-limitations-and-considerations}

### Omejevanje hitrosti {#rate-limiting}

- Scraping je omejen po hitrosti, da se prepreči preobremenitev strežnika
- Več zahtev na isto spletno mesto je lahko upočasnjenih
- Analiza velikih spletnih mest lahko traja dlje

### Točnost vsebine {#content-accuracy}

- Dinamična vsebina morda ne bo v celoti zajeta
- Vsebina, upodobljena z JavaScript, je lahko nepopolna
- Podatki v realnem času morda ne bodo prikazani
- Nekatera vsebina je lahko za plačilnimi zidovi

### Pravne in etične zahteve {#legal-and-ethical-considerations}

- Spoštujte robots.txt in pravilnike spletnega mesta
- Ne scrapeajte avtorsko zaščitene vsebine za reprodukcijo
- Analizo uporabite za navdih, ne za kopiranje
- Preverite, ali imate pravice za uporabo izvlečene vsebine
- Upoštevajte pogoje storitve analiziranih spletnih mest

### Vpliv na zmogljivost {#performance-impact}

- Scraping velikih spletnih mest lahko traja nekaj časa
- Več hkratnih scrapingov je lahko počasnejših
- Omrežna povezljivost vpliva na hitrost
- Veliki nabori podatkov lahko zahtevajo več obdelave

## Najboljše prakse {#best-practices}

### Uporaba analize spletnega mesta {#using-site-analysis}

1. **Analizirajte več spletnih mest** — zberite navdih iz več virov
2. **Osredotočite se na strukturo** — spoznajte vzorce postavitve in organizacije
3. **Izvlecite barve** — uporabite barvne palete kot izhodišča
4. **Preučite tipografijo** — prepoznajte kombinacije pisav, ki so vam všeč
5. **Preglejte navigacijo** — razumite organizacijo menija

### Etični scraping {#ethical-scraping}

1. **Spoštujte robots.txt** — upoštevajte smernice spletnega mesta
2. **Ne kopirajte vsebine** — analizo uporabite samo za navdih
3. **Preverite pravice** — zagotovite, da lahko uporabljate izvlečeno vsebino
4. **Navedite vire** — priznajte vire navdiha
5. **Upoštevajte pogoje** — ravnajte v skladu s pogoji storitve spletnega mesta

### Povečanje učinkovitosti orodja {#maximizing-tool-effectiveness}

1. **Bodite specifični** — zahtevajte določene vrste analize
2. **Zagotovite kontekst** — pojasnite namen svojega spletnega mesta
3. **Nastavite pričakovanja** — opišite svoje oblikovalske cilje
4. **Iterirajte** — izpopolnjujte na podlagi rezultatov
5. **Kombinirajte orodja** — uporabite več orodij za celovito analizo

## Odpravljanje težav {#troubleshooting}

### Spletnega mesta ni mogoče scrapeati {#site-wont-scrape}

- Preverite, ali je spletno mesto javno dostopno
- Preverite, ali robots.txt dovoljuje scraping
- Poskusite z drugim spletnim mestom
- Preverite internetno povezavo
- Če se težava nadaljuje, se obrnite na podporo

### Nepopolna analiza {#incomplete-analysis}

- Spletno mesto ima lahko dinamično vsebino
- JavaScript morda ni v celoti upodobljen
- Pri velikih spletnih mestih lahko pride do časovne omejitve
- Namesto tega poskusite analizirati določene strani
- Zahtevajte določene vrste analize

### Počasna zmogljivost {#slow-performance}

- Analiza velikih spletnih mest traja dlje
- Več hkratnih scrapingov je počasnejših
- Omrežna povezljivost vpliva na hitrost
- Poskusite v urah manjše obremenitve
- Najprej analizirajte manjše razdelke

## Povezana dokumentacija {#related-documentation}

- [Discovery Interview](./discovery-interview.md) — zberite informacije o oblikovanju
- [Design Direction](./design-direction.md) — izpopolnite svoje oblikovanje
- [Hospitality Menus](./hospitality-menus.md) — ustvarite strani menija
