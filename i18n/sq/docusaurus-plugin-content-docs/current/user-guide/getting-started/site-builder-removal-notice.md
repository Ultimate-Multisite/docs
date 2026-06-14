---
title: Njoftim për heqjen e Modit të Ndërtuesit të Siti
sidebar_position: 19
_i18n_hash: 3abf37d17f19e045e9d9da3ffe8e3179
---
# Njoftimi i Heqimit të Modeve të Ndërtimit të Siti

**Mode Ndërtimi i Siti është hequr në Superdav AI Agent v1.12.0.** Nëse po përdornit mode Ndërtimi të Siti, duhet të migroni te **Setup Assistant agent** për krijimin e temave dhe konfigurimin e shitjes së faqes (site setup).

## Çfarë ndodhi?

### Mode Ndërtimi i Siti (Legacy)

Mode Ndërtimi i Siti ishte një interfejs bazuar në wizard për:

- Krijimin e sitëve nga template
- Konfigurimin e cilësimeve bazë
- Zgjidhjen e një teme
- Përcaktimin e përmbajtjes fillestare

### Çfarë e zëvendësoi?

**Setup Assistant agent** tani menaxhon të gjitha funksionet e Mode Ndërtimit të Siti me:

- Konfigurim më fleksibël, udhëhequr nga agenti
- Opsione më të mira për personalizimin e temës
- Integrim me onboarding (faqen e hyrjes) të Theme Builder
- Memori e qëndrueshme `site_brief` për seancat e ardhshme

## Nëse po përdornit Mode Ndërtimi i Siti

### Sitet tuaja janë të sigurta

- Sitët ekzistues krijuar me Mode Ndërtimi të Siti vazhdojnë të funksionojnë
- Nuk ka humbje të të dhënave ose ndërprerje në faqe
- Ju mund të vazhdoni menaxhimin e sitëve tuaja në mënyrë normale

### Migroni te Setup Assistant agent

Për krijimin e një faqeje të re ose ndryshimeve të temës, përdorni Setup Assistant agent:

```
"Help me set up a new site"
```

ose

```
"Start the Theme Builder onboarding"
```

Setup Assistant agent ofron të njëjtat funksionalitete me më shumë fleksibilitet.

## Krahasim: Site Builder vs. Setup Assistant

| Karakteristika | Site Builder (Hequr) | Setup Assistant (I Ri) |
|---|---|---|
| Metoda e konfigurimit | Form wizard | Bisedë me agentin |
| Zgjidhja e temës | Template të përcaktuara paraprakisht | Gjenerim i projektuar |
| Personalizimi | Opsione të kufizuara | Sistëm i plotë dizajnueshëm |
| Site brief | Nuk ruhet | Memori qëndrueshme |
| Seancat e ardhshme | Konfigurim i përsëritur | Përdorimi i site_brief të ruajtur |
| Fleksibiliteti | Proces fiksuar | Bisedë adaptuese |

## Migrimi te Setup Assistant agent

### Për Sitet e Reja

Në vend që të përdorni modin e Site Builder:

1. Kërkesa: "Më ndihmo të kthej një faqe të re"
2. Agjenti i Asistentit për Konfigurim (Setup Assistant) do ju udhëheq në:
   - Qëllimin dhe qëllimet e faqes
   - Audiencën synimale
   - Identitetin e markës
   - Generimin e temës
   - Konfigurimin fillestar

### Për Faqet Ekzistuese

Nëse keni një faqe ekzistuese nga modifikimi i Site Builder:

1. Mund të vazhdoni ta përdorni ashtu si është
2. Për të përditësuar temën, kërkoni: "Rredidho faqen time"
3. Agjenti i Asistentit për Konfigurim do ju ndihmo të krijoni një temë të re
4. Të dhënat e faqes suaj mbeten të ndryshme

### Për Ndryshime në Temë

Në vend të zgjedhjes së temës nga modifikimi i Site Builder:

1. Kërkesa: "Ndërro temën time"
2. Agjenti i Asistentit për Konfigurim do:
   - Pyet për preferencat tuaja dizajni
   - Gjeneroj një temë të personalizuar
   - E aktivizoj atë në faqe

## Ndryshimet Kryesore

### Modi i Site Builder

```
1. Zgjidh një shabllon (template)
2. Zgjidh një temë
3. Konfiguro vendosjet bazë
4. Përfundim
```

### Agjenti i Asistentit për Konfigurim (Setup Assistant Agent)

```
1. Përshkruani qëllimin e faqes suaj
2. Përcaktoni audiencën synimale
3. Zgjidhni preferencat dizajni
4. Agjenti gjeneron temën e personalizuar
5. Agjenti aktivizon temën
6. Përmbledhja e faqes ruhet për seancat e ardhshme
```

## Përfitimet e Agjentit të Asistentit për Konfigurim (Setup Assistant Agent)

### Më Fleksueshmëri

- Përshkruani faquin tuaj në gjuhën natyrale
- Merrni rekomandime të personalizuara
- Adaptohuni nevojave tuaja specifike

### Personalizim më i Mirë

- Gjenerimi i temës së personalizuar
- Vendimet e sistemit dizajni (Design System)
- Tokenet e qëndrueshme të dizajnit

### Memoria Qëndruese

- `site_brief` ju ruhet
- Agjentët e ardhshëm kuptojnë faquin tuaj
- Nuk keni nevojë të përsërisni informacionin e konfigurimit

### Proces i Integruar

- Onboarding i Theme Builder
- Aftësia e Estetikës së Sistemit Dizajni (Design System Aesthetics)
- Aftësia për kontrollin e vizibilitetit (Visibility controls)
- Të gjitha punojnë së bashku pa ndërprerje

## Zgjidhja e Problemeve (Troubleshooting)

### Nuk gjej modin e Site Builder

Modi i Site Builder është hequr. Përdorni në vend të tij agjentin e Asistentit për Konfigurim (Setup Assistant agent):

### Unë dua të krijoj sërish një faqe nga Site Builder

Mund ta bësh këtë me ndihmën e agentit Setup Assistant:

1. Kërkesa: "Më ndihmo të vendos një faqe të re" (Help me set up a new site)
2. Përshkruaj qëllimin dhe dizajnin e faqes origjinale tënde
3. Agent-i do të gjeneroj një temë të ngjashme
4. `site_brief` i yt do ruhet për referencë në të ardhmen

### Faqet e mia ekzistuese me Site Builder nuk funksionojnë

Faqet e krijuara më parë me mode Site Builder vazhdojnë të punojnë. Nëse po haset probleme:

1. Kontrollo që temja jote është ende aktive
2. Verifiko që plugin-ët janë aktivizuar
3. Kontrollo logjet e gabimeve të WordPress
4. Kontaktoni mbështetjen nëse problemet vazhdojnë

### A mund t'i përdorim ende shabllonet e vjetra Site Builder?

Shabllonet e Site Builder nuk janë më të disponueshme. Megjithatë:

- Faqet ekzistuese tuaja vazhdojnë të funksionojnë
- Mund ta krijoni faqe të ngjashme me agentin Setup Assistant
- Agent-i Setup Assistant ofron opsione më të shumta për personalizim

## Hapat e Ardhshëm

1. **Për faqe të reja**: Përdorni agentin Setup Assistant
2. **Për faqe ekzistuese**: Vazhdoni të përdorni siç janë
3. **Për ndryshime në temë**: Kërkoni ndihmë nga agenti Setup Assistant
4. **Për përmirësim dizajni**: Përdorni aftësinë Design System Aesthetics

## Tema të Lidhur

- **Onboarding i Theme Builder**: Vendosje e udhëhequr për tema personalizuara
- **Setup Assistant Agent**: Vendosje e faqes me udhëzime nga agenti
- **Site Specification Skill**: Përcaktoni qëllimet dhe audiencën e faqes suaj
- **Design System Aesthetics Skill**: Përmirëson identitetin vizual të faqes suaj
