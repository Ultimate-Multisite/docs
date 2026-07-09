---
title: 'Lekcia 4: Vytváranie špecializovaných šablón'
sidebar_position: 5
_i18n_hash: 3ade990de5fd404a7f09a9d42d7535ee
---
# Lekcia 4: Tvorba šablón pre niku

Šablóny sú jadrom vašej hodnotovej ponuky pre niku. Majiteľ fitness štúdia, ktorý sa zaregistruje a uvidí web, ktorý už vyzerá ako fitness web -- s rozvrhmi hodín, profilmi trénerov a správnymi obrázkami -- má oveľa väčšiu pravdepodobnosť, že zostane, než ten, ktorý uvidí prázdne plátno.

## Kde sme skončili

Máme funkčnú sieť FitSite s nainštalovaným a nakonfigurovaným Ultimate Multisite. Teraz vytvoríme šablóny, vďaka ktorým bude FitSite pôsobiť ako riešenie vytvorené špeciálne pre fitness podniky.

## Prečo sú šablóny pre niku dôležité

Generické šablóny nútia vašich zákazníkov robiť ťažkú prácu: zisťovať, aké stránky potrebujú, aká štruktúra obsahu funguje a ako dosiahnuť, aby to vyzeralo správne pre ich odvetvie. Šablóny pre niku toto trenie odstraňujú.

Majiteľ fitness štúdia, ktorý sa zaregistruje do FitSite, by mal vidieť:

- Domovskú stránku, ktorá vyzerá ako web fitness štúdia
- Stránky pre hodiny, rozvrhy, trénerov a ceny už vytvorené
- Obrázky a zástupný obsah, ktoré zodpovedajú ich odvetviu
- Dizajn, ktorý pôsobí profesionálne a je v súlade so značkou pre fitness

Doplnia svoje údaje. Nezačínajú od nuly.

## Plánovanie vašich šablón

Pred tvorbou sa rozhodnite, aké šablóny ponúknete. Pre FitSite vytvoríme tri:

### Šablóna 1: Studio Essential

Pre malé štúdiá a osobných trénerov.

- **Domovská stránka** s hero obrázkom, zvýraznením hodín a výzvou na akciu
- Stránka **O nás** s príbehom a poslaním štúdia
- Stránka **Hodiny** s rozložením rozvrhu
- Stránka **Tréneri** s kartami profilov
- Stránka **Kontakt** s mapou polohy a formulárom
- **Čistý, moderný dizajn** s farebnou schémou vhodnou pre fitness

### Šablóna 2: Gym Pro

Pre etablované posilňovne s viacerými službami.

- Všetko zo Studio Essential, plus:
- Stránka **Členstvo** s cenovou tabuľkou
- Stránka **Galéria** pre fotografie priestorov
- Sekcia **Blog** pre fitness tipy a novinky
- Sekcia **Referencie** na domovskej stránke
- Možnosti **výraznejšieho brandingu**

### Šablóna 3: Fitness Chain

Pre prevádzky s viacerými lokalitami.

- Všetko z Gym Pro, plus:
- Stránka **Lokality** s viacerými záznamami prevádzok
- Šablóna podstránky **franšíza/lokalita**
- **Centralizovaný branding** s detailmi špecifickými pre lokalitu
- **Adresár personálu** naprieč lokalitami

## Tvorba šablónového webu

V Ultimate Multisite je šablóna jednoducho WordPress web nakonfigurovaný tak, ako chcete, aby vyzerali nové zákaznícke weby. Takto ju vytvoríte:

### Krok 1: Vytvorte šablónový web

1. Prejdite na **Weby > Pridať nový** v administrácii siete
2. Vytvorte web s názvom `template-studio-essential`
3. Tento web sa stane vaším pracovným plátnom

### Krok 2: Nainštalujte a nakonfigurujte tému

Prepnite sa do Dashboard šablónového webu a:

1. Aktivujte tému vhodnú pre fitness podniky
2. Nakonfigurujte nastavenia témy, farby a typografiu
3. Nastavte hlavičku a pätičku s navigáciou vhodnou pre fitness

:::tip Výber témy
Vyberte tému, ktorá je dostatočne flexibilná, aby vyzerala dobre pre fitness, ale nie taká zložitá, aby ju vaši zákazníci nedokázali spravovať. Témy ako Astra, GeneratePress alebo Kadence fungujú dobre, pretože sú ľahké, prispôsobiteľné a dobre podporované.
:::

### Krok 3: Vytvorte stránky

Vytvorte každú stránku s:

- **Zástupným obsahom**, ktorý znie prirodzene pre fitness („Vitajte v [Názov štúdia]“, nie „Lorem ipsum“)
- **Zástupnými obrázkami** z bezplatných fotobánk zobrazujúcimi fitness aktivity
- **Funkčnými rozloženiami** pomocou nástroja na tvorbu stránok alebo blokového editora

Ak je to možné, urobte zástupný obsah inštruktážny. Namiesto generického výplňového textu napíšte obsah ako: „Nahraďte toto stručným opisom svojho štúdia a tým, čo ho robí výnimočným. Spomeňte svoju tréningovú filozofiu, roky skúseností alebo to, čo môžu klienti očakávať.“

### Krok 4: Nakonfigurujte pluginy

Nainštalujte a aktivujte pluginy, ktoré fitness štúdiá potrebujú:

- Plugin na rezervácie alebo plánovanie (ak sa vzťahuje na vašu úroveň plánu)
- Plugin kontaktného formulára
- SEO plugin (predkonfigurovaný s predvolenými nastaveniami relevantnými pre fitness)

### Krok 5: Označte ako šablónu

1. Prejdite na **Ultimate Multisite > Weby**
2. Upravte šablónový web
3. Zapnite prepínač **Šablóna webu**

Tento proces zopakujte pre každú šablónu, ktorú chcete ponúkať.

## Kontrolný zoznam kvality šablóny

Pred sprístupnením šablóny overte:

- [ ] Všetky stránky sa načítavajú správne a vyzerajú profesionálne
- [ ] Zástupný obsah je užitočný a špecifický pre niku
- [ ] Obrázky sú vhodné a správne licencované
- [ ] Responzivita na mobilných zariadeniach funguje na všetkých stránkach
- [ ] Navigácia je logická a úplná
- [ ] Kontaktné formuláre fungujú
- [ ] Neexistujú nefunkčné odkazy ani chýbajúce aktíva
- [ ] Rýchlosť načítania stránky je prijateľná

## Sieť FitSite zatiaľ

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

## Čo sme vytvorili v tejto lekcii

- **Tri šablóny špecifické pre niku** navrhnuté pre rôzne veľkosti fitness podnikov
- **Obsah a obrázky vhodné pre fitness**, vďaka ktorým platforma pôsobí ako vytvorená na mieru
- **Inštruktážny zástupný obsah**, ktorý zákazníkov prevedie prispôsobením
- **Kontrolný zoznam kvality**, aby boli šablóny pripravené na produkčné použitie

---

**Ďalej:** [Lekcia 5: Navrhovanie vašich plánov](lesson-5-plans) -- vytvoríme produktové úrovne, ktoré zodpovedajú tomu, ako fitness podniky skutočne fungujú.
