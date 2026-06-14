---
title: Fluksi i onboarding-it për Theme Builder
sidebar_position: 17
_i18n_hash: 67d84d7e08c2ccfaa459bba0c40cb1ea
---
# Proces i Udhëtimi në Theme Builder

Superdav AI Agent v1.12.0 prezanton një **proces udhëtimi të themeluar për Theme Builder** që ju ndihmon të krijoni një temë bloku të personalizuar gjatë konfigurimit fillestar. Kjo zëvendëson modin e mëparshëm Site Builder me një qasje më fleksibël dhe mbështetur nga agenti.

## Çfarë është Procesi i Udhëtimit në Theme Builder?

Procesi i udhëtimit në Theme Builder është një wizard konfigurimi interaktiv që:

- Ju udhëheq përmes vendimeve dizajni (ngjyrat, tipografia, skedari)
- Përpunon preferencat tuaja të identitetit vizual të faqes suaj
- Krijon një temë bloku të personalizuar që është e përshtatur për nevojat tuaja
- Aktivizon temën automatikisht kur përfundon

Procesi varet nga **agentu i Asistentit të Konfigurimit (Setup Assistant)**, i cili pyet pyetje qartësuese dhe ndërton temën tuaj hapi pas hapi.

## Fillimi i Procesit të Udhëtimit në Theme Builder

### Konfigurimi Fillestar (First-Run Setup)

Kur fillon Superdav AI Agent për herë të parë në një instalim të ri WordPress, do të shihni:

```
Mirëseja te Superdav AI Agent!

Çfarë dëshironi të bëni?
1. Krijoni një temë të personalizuar (Theme Builder)
2. Përdorni një temë ekzistuese
3. Shkopi konfigurimin për momentin
```

Zgjidhni **"Krijoni një temë të personalizuar"** për të hyrë në procesin e udhëtimit në Theme Builder.

### Aktivimi Manual

Ju mund të filloni procesin e udhëtimit në Theme Builder edhe në çdo kohë duke kërkuar:

```
"Start the Theme Builder onboarding"
```

ose

```
"Help me create a custom theme"
```

## Hapat e Udhëtimit

### Hapi 1: Zgjidhja e Modit (Mode Selection)

Agenti i Asistentit të Konfigurimit pyet për preferencën tuaj:

```
Si dëshironi të ndërtoni temën tuaj?
- Udhequr (Unë do të bëj pyetje dhe do ta ndërtoj për ju)
- Praktikues (Unë do t'ju trego opsionet dhe ju vendosni)
```

**Modi udhëqur** rekomandohet për shumic të përdoruesve; agenti bën sugjerime dizajni bazuar në industrinë dhe qëllimet tuaja.

### Hapi 2: Specifikimi i Faqes (Site Specification)

Ju do të kërkohet informacion rreth faqes suaj:

- **Qëllimi i faqes**: E-commerce, blog, portofolio, SaaS, etj.
- **Audienca që synoni**: Kuj janë vizitorët tuaj?
- **Ngjyrat e markës**: Ngjyra kryesore dhe sekondare (ose "nuk jam i sigurt")
- **Tonit**: Profesional, kreativ, lojtarik, minimal, etj.

Kjo informacion ruhet në kujtesën tuaj të **site_brief**, ku agjentët e referojnë në sesione të ardhshme.

### Hapi 3: Vendimet e Sistemit Dizajni (Design System)

Agjenti ju udhëheq përmes zgjedhjeve të design token-eve:

- **Tipografia**: Familja e fontit (serif, sans-serif, monospace) dhe skali i madhësisë
- **Paleta ngjyrave**: Ngjyra kryesore, sekondare, aksenti dhe neutrale
- **Ndarrjet (Spacing)**: Dizajne kompakte, normale ose me hapësirë të gjatë
- **Lëvizja (Motion)**: Animacione dhe tranzicionet (nëse dëshironi)

### Hapi 4: Generimi i Temës (Theme Generation)

Agjenti i Ndihmës së Konfigurimit (Setup Assistant) ju ndërton temën tuaj me:

- `theme.json` që përmban të gjitha design token-et tuaja
- Shablone për blloqe për dizajne të zakonshëm (home page, blog, kontakt)
- Stile specifike të blloqeve që përputen me sistemin tuaj të dizajnit
- Metadatan e temës dhe deklarime se mbështet WordPress

### Hapi 5: Aktivizimi dhe Verifikimi

Tema aktivizohet automatikisht, dhe ju do të shihni këtë:

```
✓ Tema juaj personalizuar është e punë!
  Emri i temës: Theme [Emri i Faqes Suaj]
  Ngjyrat: [Kryesore] / [Sekondare]
  Tipografia: [Familja e Fontit]

  Vizitoni faqen tuaj për të parë dizajnin e ri.
```

Marrim atëherë mund të vizitoni faqen tuaj për të verifikuar që tema po shfaqet si duhet.

## Specifikimet e Faqes dhe Kujtesa site_brief

Gjatë procesit fillestar (onboarding), agjenti mbledh specifikimet e faqes tuaj në një kategori të kujtesës **site_brief**. Kjo përfshin:

- Qëllimin dhe qëllimet e faqes
- Audiencën synore
- Ngjyrat dhe tonin e markës
- Preferencat dizajni
- Strukturën e përmbajtjes

### Pse site_brief është i rëndësishëm

Në sesione të ardhshme, agjentët e referojnë në **site_brief** tuaj për:

### Aplikimi i faqes su sitin tuaj

Mund të kërkosh nga agjenti:

```
"Show me my site brief"
```

ose

```
"What do you know about my site?"
```

Agjenti do t'të shfaq specifikimin e ruajtur të faqes suaj.

## Personalizim Pas Përfaqes (Onboarding)

Pas përfundimit të përfaqes Theme Builder, mund të bësh:

### Përdor Aftësinë e aftësisë së Dizajn Sistemit Estetik

Kërko ndryshime dizajni:

```
"Refine the typography to be more modern"
```

ose

```
"Adjust the color palette to be warmer"
```

**Aftësia e estetikës së Dizajn Sistemit** të udhëheq në përditësime specifike dizajni.

### Redigjo theme.json Direkt

Për përdoruesit me aftësi më të larta, redigjoni `/wp-content/themes/[theme-name]/theme.json` për të rregulluar:

- Color tokens (tokenet e ngjyrave)
- Typography scales (skalën e tipografisë)
- Spacing values (vlerat e hapësirës)
- Border and shadow definitions (përkufizimet e kufijve dhe hapi i ngjyrave)

### Krijoni Template të Butiksh Custom

Përdorni redaktorin e blokut WordPress për të krijuar template të veçantë për:

- Layoutet e faqes kryesore (Homepage layouts)
- Faqet e postimeve në blog (Blog post pages)
- Faqet e produktit (Product pages)
- Formularët e kontaktit (Contact forms)

## Krahasim: I Vjetër vs. I Ri Përfaqe

| Karakteristika | Site Builder (I vjetër) | Theme Builder (I ri) |
|---|---|---|
| Metoda e konfigurimit | Form bazuar në wizard | Bisedë udhëhequr nga agjenti |
| Gjenerimi i temës | Template të kufizuar | Scaffolding i veçantë |
| Design tokens | Hapi manual | Vendime udhëhequr |
| Fleksibiliteti | Opsione fikse | I përshtatshëm për modifikim |
| Përditësime e ardhshme | Nuk referohen | Ruhen në site_brief |

## Zgjidhja e Problemeve (Troubleshooting)

**Përfaqja nuk u mbarua**
- Rinisni procesin: "Start the Theme Builder onboarding"
- Kontrolloni që instalimi juaj i WordPress është i përditësuar
- Verifikoni që agjenti Asistent i Konfigurimit (Setup Assistant agent) është i aktivizuar

**Site_brief im nuk po përdoret**
- Sigurohu se agjenti ka akses në memorje (memory)
- Kërko nga agjenti që të "kthej briefin e faqes sime" (recall my site brief)
- Kontrollo që memorja është e aktivizuar në cilësimet tuaja

**Tema e gjeneruar nuk përputhet me preferencat e mia**
- Përdor aftësinë Design System Aesthetics për ta përmirësuar
- Kërko nga agjenti që të "regjeneroj tema me [ndryshime specifike]" (regenerate the theme with [specific changes])
- Redigoni direkt file `theme.json` për kontroll të saktë

## Hapat e Ardhshëm

Pas përfundimit të onboarding-ut të Theme Builder:

1. **Verifiko faqen tuaj**: Vizitoni faqen tuaj për të parë temën e re
2. **Përmirëso dizajnin**: Përdorni aftësinë Design System Aesthetics për rregullime
3. **Shtoni përmbajtje**: Filloni të ndërtoni përmbajtjen e faqes suaj
4. **Zbuloni aftësitë**: Mësoi për aftësitë e tjera të agentit si `scaffold-block-theme` dhe `activate-theme`
