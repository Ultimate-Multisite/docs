---
title: 'Lektioun 4: Nisch-Virlagen erstellen'
sidebar_position: 5
_i18n_hash: 3ade990de5fd404a7f09a9d42d7535ee
---
# Lektioun 4: Nisch-Schabloune bauen {#lesson-4-building-niche-templates}

Schabloune sinn de Kär vun denger Nisch-Wäertpropositioun. E Fitnessstudio-Besëtzer, dee sech umellt an eng Websäit gesäit, déi schonn ausgesäit wéi eng Fitness-Websäit -- mat Kurspläng, Trainerprofiller an de richtege Biller -- bleift vill méi wahrscheinlech wéi een, deen eng eidel Fläch gesäit.

## Wou mir opgehalen hunn {#where-we-left-off}

Mir hunn e funktionéierend FitSite-Netzwierk mat Ultimate Multisite installéiert a konfiguréiert. Elo baue mir d'Schablounen, déi FitSite esou wierke loossen, wéi wann et speziell fir Fitnessbetriber gemaach wier.

## Firwat Nisch-Schabloune wichteg sinn {#why-niche-templates-matter}

Generesch Schablounen zwéngen deng Clienten, déi schwéier Aarbecht ze maachen: erauszefannen, wéi eng Säite si brauchen, wéi eng Inhaltsstruktur funktionéiert a wéi se et fir hir Branche richteg ausgesi loossen. Nisch-Schablounen eliminéieren déi Reiwung.

E Fitnessstudio-Besëtzer, dee sech bei FitSite umellt, soll gesinn:

- Eng Startsäit, déi ausgesäit wéi eng Fitnessstudio-Websäit
- Säite fir Coursen, Pläng, Trainer a Präisser schonn ugeluecht
- Biller a Platzhalter-Inhalt, déi zu hirer Branche passen
- En Design, dee professionell an no enger Fitness-Mark wierkt

Si fëllen hir Detailer aus. Si fänken net bei Null un.

## Deng Schabloune plangen {#planning-your-templates}

Ier s du ufänks ze bauen, entscheet, wéi eng Schablounen s du ubidde wëlls. Fir FitSite erstelle mir dräi:

### Schabloun 1: Studio Essential {#template-1-studio-essential}

Fir kleng Studioen a Personal Trainer.

- **Startsäit** mat Hero-Bild, Cours-Highlights an Handlungsopruff
- **Iwwer eis**-Säit mat Studiogeschicht a Missioun
- **Coursen**-Säit mat Plang-Layout
- **Trainer**-Säit mat Profilkaarten
- **Kontakt**-Säit mat Standuertkaart a Formulaire
- **Propperen, modernen Design** mat engem fir Fitness passende Faarfschema

### Schabloun 2: Gym Pro {#template-2-gym-pro}

Fir etabléiert Fitnessstudioe mat méi Servicer.

- Alles aus Studio Essential, plus:
- **Memberschaft**-Säit mat Präistabell
- **Galerie**-Säit fir Fotoe vun der Ariichtung
- **Blog**-Beräich fir Fitness-Tipps an Neiegkeeten
- **Referenzen**-Beräich op der Startsäit
- **Méi prominent Branding**-Optiounen

### Schabloun 3: Fitness Chain {#template-3-fitness-chain}

Fir Betriber mat méi Standuerter.

- Alles aus Gym Pro, plus:
- **Standuerter**-Säit mat méi Ariichtungsoplëschten
- **Franchise/Standuert**-Ënnersäite-Schabloun
- **Zentraliséiert Branding** mat standuertspezifeschen Detailer
- **Mataarbechterverzeechnes** iwwer Standuerter ewech

## Eng Schabloun-Websäit bauen {#building-a-template-site}

An Ultimate Multisite ass eng Schabloun einfach eng WordPress-Websäit, déi esou konfiguréiert ass, wéi s du wëlls, datt nei Client-Websäiten ausgesinn. Esou erstellts du eng:

### Schrëtt 1: D'Schabloun-Websäit erstellen {#step-1-create-the-template-site}

1. Géi op **Säiten > Nei derbäisetzen** an denger Netzwierk-Administratioun
2. Erstell eng Websäit mam Numm `template-studio-essential`
3. Dës Websäit gëtt deng Aarbechtsfläch

### Schrëtt 2: D'Thema installéieren a konfiguréieren {#step-2-install-and-configure-the-theme}

Wiessel op den Dashboard vun der Schabloun-Websäit a:

1. Aktivéier en Thema, dat fir Fitnessbetriber gëeegent ass
2. Konfiguréier d'Thema-Astellungen, Faarwen an Typografie
3. Riicht den Header an de Footer mat fitness-passender Navigatioun an

:::tip Theme Selection
Choose a theme that is flexible enough to look good for fitness but not so complex that your customers cannot manage it. Themes like Astra, GeneratePress, or Kadence work well because they are lightweight, customizable, and well-supported.
:::

### Schrëtt 3: D'Säiten erstellen {#step-3-create-the-pages}

Bau all Säit mat:

- **Platzhalter-Inhalt**, deen natierlech fir Fitness kléngt ("Wëllkomm bei [Studio Name]" net "Lorem ipsum")
- **Platzhalter-Biller** vu gratis Stockfoto-Websäiten, déi Fitnessaktivitéite weisen
- **Funktionelle Layouten** mam Säite-Builder oder Block-Editor

Maach de Platzhalter-Inhalt, wou méiglech, instruktiv. Amplaz genereschem Fëlltext, schreiw Inhalt wéi: "Ersetz dëst duerch eng kuerz Beschreiwung vun dengem Studio a wat en besonnesch mécht. Ernim deng Trainingsphilosophie, Joer Erfarung oder wat Clienten erwaarde kënnen."

### Schrëtt 4: Erweiderunge konfiguréieren {#step-4-configure-plugins}

Installéier an aktivéier Erweiderungen, déi Fitnessstudioe brauchen:

- Eng Buchungs- oder Plang-Erweiderung (wann uwendbar fir deng Plang-Stuf)
- Eng Kontaktformulaire-Erweiderung
- Eng SEO-Erweiderung (virkonfiguréiert mat fitness-relevante Standardastellungen)

### Schrëtt 5: Als Schabloun markéieren {#step-5-mark-as-template}

1. Géi op **Ultimate Multisite > Säiten**
2. Änner d'Schabloun-Websäit
3. Aktivéier den **Websäit-Schabloun**-Schalter

Widderhuel dëse Prozess fir all Schabloun, déi s du ubidde wëlls.

## Qualitéits-Checklëscht fir Schablounen {#template-quality-checklist}

Ier s du eng Schabloun verfügbar méchs, iwwerpréif:

- [ ] All Säite lueden korrekt a gesi professionell aus
- [ ] Platzhalter-Inhalt ass hëllefräich an nisch-spezifesch
- [ ] Biller si passend a richteg lizenzéiert
- [ ] Mobil Responsivitéit funktionéiert op all Säiten
- [ ] Navigatioun ass logesch a komplett
- [ ] Kontaktformulairë funktionéieren
- [ ] Keng futtis Linken oder feelend Ressourcen
- [ ] Säiteluedgeschwindegkeet ass akzeptabel

## De FitSite-Netzwierk bis elo {#the-fitsite-network-so-far}

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

## Wat mir an dëser Lektioun gebaut hunn {#what-we-built-this-lesson}

- **Dräi nisch-spezifesch Schablounen**, designt fir verschidde Gréisste vu Fitnessbetriber
- **Fitness-passenden Inhalt a Biller**, déi d'Plattform esou wierke loossen, wéi wann se speziell dofir gemaach wier
- **Instruktive Platzhalter-Inhalt**, deen d'Clienten duerch d'Upassung féiert
- **Eng Qualitéits-Checklëscht**, fir sécherzestellen, datt d'Schabloune prett fir d'Produktioun sinn

---

**Nächst:** [Lektioun 5: Deng Pläng designen](lesson-5-plans) -- mir erstellen Produktstufen, déi dozou passen, wéi Fitnessbetriber tatsächlech funktionéieren.
