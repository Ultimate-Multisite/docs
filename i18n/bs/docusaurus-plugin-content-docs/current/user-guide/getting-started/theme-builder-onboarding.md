---
title: Uvodni tok za Theme Builder-a
sidebar_position: 17
_i18n_hash: 67d84d7e08c2ccfaa459bba0c40cb1ea
---
# Proces uvođenja Theme Builder-a

Superdav AI Agent v1.12.0 uvodi vođeni **proces uvođenja Theme Builder-a** koji vam pomaže da kreirate custom block theme tokom prvog podešavanja. Ovo zamjenjuje stari Site Builder način rada fleksibilnijim pristupom koji je asistiran agentom.

## Šta je Theme Builder Onboarding Flow? {#what-is-the-theme-builder-onboarding-flow}

Theme Builder onboarding flow je interaktivni vodič za podešavanje koji:

- Vodi vas kroz odluke o dizajnu (boje, tipografija, raspored)
- Prikuplja preferencije vizuelne identitete vašeg sajta
- Generiše custom block theme prilagođen vašim potrebama
- Automatski aktivira temu kada je proces završen

Ovaj proces je pokrenut od strane **Setup Assistant agenta**, koji postavlja razjašnjavajuća pitanja i postepeno gradi vašu temu.

## Pokretanje Theme Builder Onboarding-a {#starting-the-theme-builder-onboarding}

### Podešavanje za prvi put {#first-run-setup}

Kada prvi put pokrenete Superdav AI Agent na novoj WordPress instalaciji, videćete:

```
Welcome to Superdav AI Agent!

What would you like to do?
1. Build a custom theme (Theme Builder)
2. Use an existing theme
3. Skip setup for now
```

Izaberite **"Build a custom theme"** da uđete u Theme Builder onboarding flow.

### Ručna aktivacija {#manual-activation}

Možete započeti Theme Builder onboarding u bilo kojem trenutku tako što ćete zatražiti:

```
"Start the Theme Builder onboarding"
```

ili

```
"Help me create a custom theme"
```

## Koraci u Onboarding-u {#the-onboarding-steps}

### Korak 1: Izbor načina rada (Mode Selection) {#step-1-mode-selection}

Setup Assistant agent vas pita o vašoj preferenciji:

```
How would you like to build your theme?
- Guided (I'll ask questions and build it for you)
- Hands-on (I'll show you options and you decide)
```

**Guided mode** je preporučljiv za većinu korisnika; agent daje dizajnerske preporuke zasnovane na vašoj industriji i ciljevima.

### Korak 2: Specifikacija sajta (Site Specification) {#step-2-site-specification}

Biće vam postavljeno pitanja o vašem sajtu:

- **Svrha sajta**: E-commerce, blog, portfolio, SaaS, itd.
- **Ciljna publika**: Ko su vaši posetioci?
- **Boje brenda**: Primarne i sekundarne boje (ili "Nisam siguran")
- **Ton**: Profesionalan, kreativan, igriv, minimalan, itd.

Ove informacije se skladište u vašoj memoriji **site_brief**, na koju agenti referenciraju u budućim sesijama.

### Korak 3: Odluke o sistemu dizajna (Design System Decisions) {#step-3-design-system-decisions}

Agent vas vodi kroz izbor dizajnerskih tokena:

- **Tipografija**: Porodica fonta (serif, sans-serif, monospace) i skala veličina
- **Paleta boja**: Primarne, sekundarne, akcentne i neutralne boje
- **Razmak**: Kompaktni, normalni ili prostrani rasporedi
- **Pokreti (Motion)**: Animacije i tranzicije (ako je potrebno)

### Korak 4: Generisanje teme (Theme Generation) {#step-4-theme-generation}

Setup Assistant agent kreira vaš custom block theme sa:

- `theme.json` koji sadrži sve vaše dizajnerske tokene
- Block šabloni za uobičajene rasporede (naslovna stranica, blog, kontakt)
- Custom block stilovi koji odgovaraju vašem sistemu dizajna
- Metadata teme i deklaracije podrške za WordPress

### Korak 5: Aktivacija i verifikacija (Activation and Verification) {#step-5-activation-and-verification}

Tema se automatski aktivira, i videćete:

```
✓ Your custom theme is now live!
  Theme name: [Your Site Name] Theme
  Colors: [Primary] / [Secondary]
  Typography: [Font Family]

  Visit your site to see the new design.
```

Zatim možete posetiti svoj sajt da proverite da li je tema ispravno prikazana.

## Site Specification i site_brief Memorija {#site-specification-and-sitebrief-memory}

Tokom onboarding-a, agent prikuplja specifikaciju vašeg sajta u kategoriju memorije **site_brief**. Ovo uključuje:

- Svrhu i ciljeve sajta
- Ciljnu publiku
- Boje brenda i ton
- Dizajnerske preferencije
- Strukturu sadržaja

### Zašto je site_brief važan {#why-sitebrief-matters}

U budućim sesijama, agenti referenciraju vaš site_brief kako bi:

- Održavali doslednost dizajna tokom promena
- Predlagali funkcije usklađene sa svrhom vašeg sajta
- Pružali preporuke koje uzimaju u obzir kontekst
- Izbegavali ponavljanje pitanja za podešavanje

### Pregled vašeg site_brief-a {#viewing-your-sitebrief}

Možete zatražiti od agenta:

```
"Show me my site brief"
```

ili

```
"What do you know about my site?"
```

Agent će prikazati vaš sačuvan site_brief.

## Prilagođavanje nakon onboarding-a {#customizing-after-onboarding}

Nakon što se Theme Builder onboarding završi, možete:

### Upotrebiti Design System Aesthetics Skill {#use-the-design-system-aesthetics-skill}

Zatražite izrafiniranje dizajna:

```
"Refine the typography to be more modern"
```

ili

```
"Adjust the color palette to be warmer"
```

**Design System Aesthetics skill** vodi vas kroz ciljana ažuriranja dizajna.

### Direktno uređivanje theme.json {#edit-themejson-directly}

Za napredne korisnike, uredite `/wp-content/themes/[theme-name]/theme.json` da prilagodite:

- Color tokens
- Typography scales
- Spacing values
- Border and shadow definitions

### Kreiranje custom block šablona {#create-custom-block-templates}

Koristite WordPress block editor da kreirate custom šablone za:

- Homepage layouts
- Blog post pages
- Product pages
- Contact forms

## Poređenje: Stari vs. Novi Onboarding {#comparison-old-vs-new-onboarding}

| Feature | Site Builder (Legacy) | Theme Builder (New) |
|---------|----------------------|-------------------|
| Setup method | Wizard-based form | Agent-guided conversation |
| Theme generation | Limited templates | Custom scaffolding |
| Design tokens | Manual entry | Guided decisions |
| Flexibility | Fixed options | Customizable |
| Future updates | Not referenced | Stored in site_brief |

## Rešavanje problema (Troubleshooting) {#troubleshooting}

**Onboarding proces nije završen**
- Ponovo pokrenite proces: "Start the Theme Builder onboarding"
- Proverite da li je vaša WordPress instalacija ažurna
- Proverite da li je Setup Assistant agent omogućen

**Moj site_brief nije korišćen**
- Potvrdite da agent ima pristup memoriji
- Zamolite agenta da "recall my site brief"
- Proverite da li je memorija omogućena u vašim podešavanjima

**Generisana tema ne odgovara mojim preferencijama**
- Koristite Design System Aesthetics skill za izrafiniranje
- Zamolite agenta da "regenerate the theme with [specific changes]"
- Uredite theme.json direktno za preciznu kontrolu

## Sledeći koraci {#next-steps}

Nakon završetja Theme Builder onboarding-a:

1. **Proverite svoj sajt**: Posetite svoj sajt da vidite novu temu
2. **Izrafinirajte dizajn**: Koristite Design System Aesthetics skill za prilagođavanja
3. **Dodajte sadržaj**: Počnite sa kreiranjem sadržaja sajta
4. **Istražite mogućnosti**: Naučite o drugim agent mogućnostima kao što su scaffold-block-theme i activate-theme
