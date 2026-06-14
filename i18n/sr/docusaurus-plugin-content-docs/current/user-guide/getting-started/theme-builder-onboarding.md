---
title: Proces uvodne konfiguracije Theme Buildersa
sidebar_position: 17
_i18n_hash: 67d84d7e08c2ccfaa459bba0c40cb1ea
---
# Proces za podešavanje Theme Builder-a

Superdav AI Agent v1.12.0 uvodi vodič **Proces za podešavanje Theme Builder-a** koji vam pomaže da kreirate prilagođeni blok teme tokom početne konfiguracije. Ovo zamenjuje stari način Site Buildera sa fleksibilnijim pristupom podržanim agentom.

## Šta je Proces za podešavanje Theme Builder-a?

Proces za podešavanje Theme Builder-a je interaktivni vodič koji:

- Vam vodi kroz odluke o dizajnu (boje, tipografija, raspored)
- Prislama vaše preferencije vizuelne identiteta sajta
- Generiše prilagođenu blok temu prilagođenu vašim potrebama
- Automatski aktivira temu kada je završen

Proces se pokreće pomoću **Setup Assistant agenta**, koji postavlja pojašnjavajuća pitanja i gradite vašu temu korak po korak.

## Pokretanje Procesu za podešavanje Theme Builder-a

### Podešavanje pri prvom pokretanju

Kada prvi put pokrenete Superdav AI Agent na novoj instalaciji WordPress-a, videćete:

```
Dobrodošli u Superdav AI Agent!

Šta želite da uradite?
1. Izgraditi prilagođenu temu (Theme Builder)
2. Koristiti postojeću temu
3. Za sada preskočiti podešavanje
```

Izaberite **"Izgradi prilagođenu temu"** da biste ušli u Proces za podešavanje Theme Builder-a.

### Ručno aktiviranje

Takođe možete pokrenuti Proces za podešavanje Theme Builder-a bilo kada tako što tražite:

```
"Start the Theme Builder onboarding"
```

ili

```
"Help me create a custom theme"
```

## Koraci u procesu podešavanja

### Korak 1: Izbor moda

Setup Assistant agent vas pita o vašoj preferenciji:

```
Kako želite da izgradite svoju temu?
- Vodič (Ja ću postavljati pitanja i graditi je za vas)
- Praktično (Pokažem vam opcije a vi odlučujete)
```

**Vodični mod** se preporučuje većini korisnika; agent daje predloge dizajna zasnovane na vašoj industriji i ciljevima.

### Korak 2: Specifikacija sajta

Biće vam postavljena pitanja o vašem sajtu:

- **Svrha sajta**: E-commerce, blog, portfolio, SaaS, itd.
- **Ciljana publika**: Ko su poseti vašeg sajta?
- **Boje brenda**: Primarna i sekundarne boje (ili "ne znam")
- **Ton**: Profesionalan, kreativni, igrački, minimalan, itd.

Ovu informaciju čuvamo u memoriji **site_brief**, koju agensi koriste u budućim sesijama.

### Korak 3: Odluke o Dizajnu Sistema (Design System)

Agent će vas voditi kroz izbor dizajnerskih tokena:

- **Tipografija**: Porodična font (serif, sans-serif, monospace) i skala veličina
- **Paleta boja**: Primarna, sekundarna, akcentna i neutralna boje
- **Razmak (Spacing)**: Kompakni, normalni ili prostorni rasporedi
- **Kretanje (Motion)**: Animacije i tranzicije (ako je potrebno)

### Korak 4: Generisanje Teme (Theme Generation)

Agent pomoćnik postavlja vaš prilagođeni blok temu sa sledećim elementima:

- `theme.json` koji sadrži sve vaše dizajnerske tokenove
- Šablone za blokove za uobičajene rasporede (početna stranica, blog, kontakt)
- Prilagođeni stilovi blokova koji odgovaraju vašem dizajnerskom sistemu
- Metapodaci teme i deklaracije podrške WordPress-u

### Korak 5: Aktivacija i Provera

Tema se automatski aktivira, a vi ćete videti sledeće:

```
✓ Vaša prilagođena tema je sada aktiva!
  Naziv teme: Tema [Vaše ime sajta]
  Boje: [Primarna] / [Sekundarna]
  Tipografija: [Porodična font]

  Posetite svoj sajt da biste videli novi dizajn.
```

Zatim možete posetiti svoj sajt kako biste proverili da li tema ispisuje ispravno.

## Specifikacija sajta i memorija site_brief

Tokom procesa podešavanja, agent snima specifikaciju vašeg sajta u kategoriji memorije **site_brief**. To uključuje:

- Svrhu i ciljeve sajta
- Ciljnu publiku
- Boje brenda i ton
- Dizajnerske preferencije
- Strukturu sadržaja

### Zašto je site_brief važan

U budućim sesijama, agensi će se oslanjati na vaš **site_brief** kako bi:

Održavajte doslednost dizajna tokom promena
Predlažite funkcije usklađene sa svrhom vašeg sajta
Dajte preporuke koje su prilagođene kontekstu
Izbegavajte ponavljanje pitanja o podešavanju

### Pregled vašeg site_brief-a

Možete pitati agenta:

```
"Prikaži mi moj site brief"
```

ili

```
"Šta zna o mom sajtu?"
```

Agent će prikazati vaše sačuvane specifikacije sajta.

## Prilagođavanje nakon podešavanja (Onboarding)

Nakon što se završi podešavanje Theme Builder-a, možete:

### Koristiti veština Dizajna sistema estetike (Design System Aesthetics Skill)

Zahtevajte izmene dizajna:

```
"Ugladi tipografiju da bude modernija"
```

ili

```
"Prilagodi paletu boja da bude toplija"
```

**Veština Dizajna sistema estetike** će vas voditi kroz ciljane ažuriranja dizajna.

### Direktno uređivanje theme.json-a

Za napredne korisnike, uređujte `/wp-content/themes/[theme-name]/theme.json` da biste podesili:

- Bojne tokene (Color tokens)
- Skale tipografije
- Vrednosti razmaka (Spacing values)
- Definicije ivica i senki (Border and shadow definitions)

### Kreiranje prilagođenih šablona bloka (Custom Block Templates)

Koristite WordPress block editor da kreirate prilagođene šablone za:

- Rasporede početne stranice (Homepage layouts)
- Stranice blog postova
- Stranice proizvoda
- Kontakt forme

## Poređenje: Stari vs. Novi Onboarding

| Karakteristika | Site Builder (Stari) | Theme Builder (Novi) |
|---|---|---|
| Metoda podešavanja | Forma zasnovana na vodiču (Wizard-based form) | Razgovor vođen agentom (Agent-guided conversation) |
| Generisanje tema | Ograničene šablone | Prilagodljivi skelet (Custom scaffolding) |
| Dizajni tokeni | Ručno unetostavljanje | Vođena odluka |
| Fleksibilnost | Fiksne opcije | Prilagodljivo |
| Buduća ažuriranja | Nisu referencirani | Spremili su u site_brief-u |

## Rešavanje problema (Troubleshooting)

**Podešavanje nije završeno**
- Ponovo pokrenite proces: "Start the Theme Builder onboarding"
- Proverite da li je vaš WordPress instalacija ažurna
- Proverite da li je agent Setup Assistant uključen

**Moj `site_brief` se ne koristi**
- Proverite da li je agentu dozvoljen pristup memoriji (memory)
- Zamolite agenta da "podseti moj site brief" (recall my site brief)
- Proverite da li je memorija uključena u vašim podešavanjima

**Generisani tema ne odgovara mojim preferencijama**
- Koristite veštinu Design System Aesthetics za usavršavanje dizajna
- Zamolite agenta da "regeneriše temu sa [specifičnim promenama]" (regenerate the theme with [specific changes])
- Direktno uređujte `theme.json` za preciznu kontrolu

## Sledeći koraci

Nakon završetka obuke Theme Builder-a:

1. **Proverite svoj sajt**: Posetite svoj sajt da biste videli novu temu
2. **Usavršite dizajn**: Koristite veštinu Design System Aesthetics za prilagođavanja
3. **Dodajte sadržaj**: Počnite da gradite sadržaj svog sajta
4. **Istražite sposobnosti**: Naučite o drugim sposobnostima agenta kao što su `scaffold-block-theme` i `activate-theme`
