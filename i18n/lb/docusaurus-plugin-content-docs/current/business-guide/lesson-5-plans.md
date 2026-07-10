---
title: 'Lektioun 5: Är Pläng gestalten'
sidebar_position: 6
_i18n_hash: 8c58dfd0a186bd585f43342bc4ea4f43
---
# Lektioun 5: Deng Pläng designen {#lesson-5-designing-your-plans}

Deng Plan-Niveaue sinn net nëmme Präisniveauen -- si sinn eng Reflexioun dovun, wéi deng Nische-Clienten tatsächlech schaffen. An dëser Lektioun designs du Produit-Niveaue, déi de reelle Besoine vu Fitness-Betriber a verschiddene Phasen entspriechen.

## Wou mir opgehalen hunn {#where-we-left-off}

FitSite huet dräi Templates prett (Studio Essential, Gym Pro, Fitness Chain). Elo erstelle mir d'Pläng, déi bestëmmen, op wat Clienten Zougang kréien a wat si bezuelen.

## A Client-Segmenter denken {#thinking-in-customer-segments}

De Feeler, deen déi meescht Leit maachen, ass Pläng ronderëm technesch Funktiounen ze designen (Späicher, Bandbreed, Zuel vu Säiten). Deng Nische-Clienten denken net an dëse Begrëffer. E Fitnessstudio-Besëtzer denkt driwwer no, wat hie brauch, fir säi Betrib ze féieren.

Fir Fitness-Studioe ginn et dräi natierlech Segmenter:

| Segment | Wien si sinn | Wat si brauchen |
|---------|-------------|----------------|
| **Solo-Trainer / kleng Studioen** | 1-3 Mataarbechter, een eenzege Standuert, am Ufank | Eng professionell Site, Cours-Infoen, Kontaktformular |
| **Etabléiert Fitnessstudioen** | 5-20 Mataarbechter, een eenzege Standuert, am Wuesstem | Alles vun uewen plus Buchung, Blog, Galerie, personaliséiert Domain |
| **Fitness-Ketten** | Méi Standuerter, etabléiert Mark | Alles vun uewen plus Multi-Site, Standuert-Säiten, Mataarbechter-Verzeechnes |

Deng Pläng solle mat dëse Segmenter iwwerenee stëmmen, net mat arbiträren Feature-Päck.

## D'FitSite-Pläng erstellen {#creating-the-fitsite-plans}

Navigéier op **Ultimate Multisite > Products > Add Product** fir all Plan.

### Plan 1: FitSite Starter -- $49/Mount {#plan-1-fitsite-starter----49month}

**Zilgrupp**: Solo-Trainer a kleng Studioen

**Description Tab**:
- Numm: FitSite Starter
- Beschreiwung: "Alles, wat e Personal Trainer oder klenge Studio brauch, fir online professionell ze wierken."

**General Tab**:
- Produit-Typ: Plan
- Client-Roll: Administrator

**Site Templates Tab**:
- Site Templates erlaben: Aktivéiert
- Verfügbar Templates: nëmmen Studio Essential

**Aschränkungen**:
- Siten: 1
- Disk-Späicher: 1 GB
- Personaliséiert Domain: Desaktivéiert (benotzt `studioname.fitsite.com`)

**Plugins Tab**:
- Kontaktformular-Plugin: Force Activate
- SEO-Plugin: Force Activate
- Buchungs-Plugin: Not Available (Upgrade-Ureiz)

**Themes Tab**:
- Däin ausgewielten Theme: Force Activate
- All aner Themes: Verstoppt

### Plan 2: FitSite Growth -- $99/Mount {#plan-2-fitsite-growth----99month}

**Zilgrupp**: Etabléiert Fitnessstudioe mat engem Standuert

**Description Tab**:
- Numm: FitSite Growth
- Beschreiwung: "Fir etabléiert Fitnessstudioen, déi bereet sinn, hir Online-Präsenz ze vergréisseren an nei Memberen unzezéien."

**Site Templates Tab**:
- Verfügbar Templates: Studio Essential a Gym Pro

**Aschränkungen**:
- Siten: 1
- Disk-Späicher: 5 GB
- Personaliséiert Domain: Aktivéiert

**Plugins Tab**:
- Alles am Starter, plus:
- Buchungs-Plugin: Force Activate
- Galerie-Plugin: Force Activate
- Blog-Funktionalitéit: Verfügbar

**Up & Downgrades Tab**:
- Plan-Grupp: FitSite Plans
- Produit-Reiefolleg: 2

### Plan 3: FitSite Pro -- $199/Mount {#plan-3-fitsite-pro----199month}

**Zilgrupp**: Fitness-Ketten mat méi Standuerter

**Description Tab**:
- Numm: FitSite Pro
- Beschreiwung: "Déi komplett Plattform fir Fitness-Marke mat méi Standuerter."

**Site Templates Tab**:
- Verfügbar Templates: All dräi Templates

**Aschränkungen**:
- Siten: 5 (een pro Standuert)
- Disk-Späicher: 20 GB
- Personaliséiert Domain: Aktivéiert

**Plugins Tab**:
- Alles am Growth, plus:
- All Premium-Plugins: Force Activate

**Up & Downgrades Tab**:
- Plan-Grupp: FitSite Plans
- Produit-Reiefolleg: 3

## De Plan-Grupp ariichten {#setting-up-the-plan-group}

De Plan-Grupp suergt dofir, datt Clienten nëmmen innerhalb vun der FitSite-Plan-Famill kënnen upgraden oder downgraden. Op all Plan sengem **Up & Downgrades** Tab:

1. Setz de **Plan Group** op "FitSite Plans" fir all dräi Pläng
2. Setz de **Product Order** op 1 (Starter), 2 (Growth), 3 (Pro)

Dat erstellt e kloeren Upgrade-Wee: Starter → Growth → Pro.

## Order Bumps derbäisetzen {#adding-order-bumps}

Order bumps sinn Zousaz-Produiten, déi wärend dem Checkout ugebuede ginn. Fir FitSite, betruecht:

- **Extra Storage Pack** ($19/Mount) -- zousätzlech 5 GB Disk-Späicher
- **Priority Support** ($29/Mount) -- méi séier Äntwertzäiten
- **Additional Site** ($39/Mount) -- fir Clienten, déi méi Siten brauchen, wéi hire Plan erlaabt

Erstell dës als **Package**-Typ Produiten an Ultimate Multisite a verbann se mat de relevante Pläng.

## Firwat dës Struktur funktionéiert {#why-this-structure-works}

- **Starter** hëlt Barrièren fir den Ufank ewech -- niddrege Präis, einfach Offer, bréngt Trainer séier online
- **Growth** setzt déi Funktiounen derbäi, déi Fitnessstudioen tatsächlech nofroen -- Buchung, Galerien, personaliséiert Domainen
- **Pro** bedéngt dat héichwäertegt Segment, dat Ënnerstëtzung fir méi Standuerter brauch
- **Order bumps** loossen Clienten personaliséieren, ouni d'Kärpläng ze komplizéieren
- **Kloeren Upgrade-Wee** bedeit, datt Clienten zesumme mat dir wuessen amplaz fortzegoen

## De FitSite Network bis elo {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured)
├── Hosting with wildcard SSL + domain mapping
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products
│   ├── FitSite Starter ($49/mo) → Studio Essential template
│   ├── FitSite Growth ($99/mo) → Studio Essential + Gym Pro templates
│   ├── FitSite Pro ($199/mo) → All templates
│   └── Order Bumps (Extra Storage, Priority Support, Additional Site)
└── Ready for checkout configuration (next lesson)
```

## Wat mir an dëser Lektioun gebaut hunn {#what-we-built-this-lesson}

- **Dräi Plan-Niveaue** op reell Fitness-Betribssegmenter ofgestëmmt
- **Feature-Gating** mat Ultimate Multisite sengem Plugin- an Template-Kontrollen
- **E Plan-Grupp** mat engem kloeren Upgrade-Wee
- **Order bump Produiten** fir zousätzlech Recetten
- **Eng Präisstruktur** op Basis vum Client-Wäert, net technesche Spezifikatiounen

---

**Nächst:** [Lektioun 6: D'Umeld-Erfarung](lesson-6-checkout) -- mir bauen e Checkout-Flow, deen Fitness-Studio-Besëtzer a bezuelend Clienten ëmwandelt.
