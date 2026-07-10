---
title: Notificare de eliminare a modului Site Builder
sidebar_position: 19
_i18n_hash: 3abf37d17f19e045e9d9da3ffe8e3179
---
# Eliminarea modului Site Builder {#site-builder-mode-removal-notice}

**Modul Site Builder a fost eliminat în Superdav AI Agent v1.12.0.** Dacă foloseați Modul Site Builder, ar trebui să migrați la **agentul Setup Assistant** pentru crearea temelor și configurarea site-ului.

## Ce s-a întâmplat? {#what-happened}

### Modul Site Builder (Legacy) {#site-builder-mode-legacy}

Modul Site Builder era o interfață bazată pe un asistent (wizard) pentru:

- Crearea site-urilor din șabloane
- Configurarea setărilor de bază
- Alegerea unei teme
- Stabilirea conținutului inițial

### Ce l-a înlocuit? {#what-replaced-it}

**Agentul Setup Assistant** gestionează acum toată funcționalitatea Site Builder, oferind:

- O configurare ghidată de agent, mai flexibilă
- Opțiuni de personalizare a temei mai bune
- Integrare cu onboarding-ul Theme Builder
- O memorie persistentă a site_brief-ului pentru sesiuni viitoare

## Dacă foloseați Modul Site Builder {#if-you-were-using-site-builder-mode}

### Site-urile dvs. sunt în siguranță {#your-sites-are-safe}

- Site-urile existente create cu Modul Site Builder continuă să funcționeze
- Nu există pierdere de date sau întrerupere a site-ului
- Puteți continua să vă gestionați site-urile normal

### Migrați la Agentul Setup Assistant {#migrate-to-setup-assistant-agent}

Pentru configurări noi de site sau modificări ale temei, folosiți agentul Setup Assistant:

```
"Help me set up a new site"
```

sau

```
"Start the Theme Builder onboarding"
```

Agentul Setup Assistant oferă aceeași funcționalitate, dar cu mai multă flexibilitate.

## Comparativ: Site Builder vs. Setup Assistant {#comparison-site-builder-vs-setup-assistant}

| Funcționalitate | Site Builder (Eliminat) | Setup Assistant (Noul) |
|---------|----------------------|----------------------|
| Metoda de configurare | Formular wizard | Conversație cu agentul |
| Selectarea temei | Șabloane predefinite | Generare personalizată |
| Personalizarea | Opțiuni limitate | Sistem complet de design |
| Site brief | Nu este stocat | Memorie persistentă |
| Sesiuni viitoare | Repetarea configurării | Utilizarea site_brief-ului stocat |
| Flexibilitatea | Flux de lucru fix | Conversație adaptivă |

## Migrarea la Agentul Setup Assistant {#migrating-to-setup-assistant-agent}

### Pentru site-uri noi {#for-new-sites}

În loc să folosiți Modul Site Builder:

1. Solicitați: "Help me set up a new site"
2. Agentul Setup Assistant vă va ghida prin:
   - Scopul și obiectivele site-ului
   - Publicul țintă
   - Identitatea mărcii
   - Generarea temei
   - Configurația inițială

### Pentru site-uri existente {#for-existing-sites}

Dacă aveți un site existent creat cu Modul Site Builder:

1. Puteți continua să îl folosiți așa cum este
2. Pentru a actualiza tema, solicitați: "Redesign my site"
3. Agentul Setup Assistant vă va ajuta să creați o temă nouă
4. Datele site-ului dvs. rămân nemodificate

### Pentru schimbări de temă {#for-theme-changes}

În loc de selectarea temei din Modul Site Builder:

1. Solicitați: "Change my theme"
2. Agentul Setup Assistant va:
   - Vă întreba despre preferințele dvs. de design
   - Genera o temă personalizată
   - O va activa pe site-ul dvs.

## Diferențe cheie {#key-differences}

### Modul Site Builder {#site-builder-mode}

```
1. Alegeți un șablon
2. Selectați o temă
3. Configurați setările de bază
4. Gata
```

### Agentul Setup Assistant {#setup-assistant-agent}

```
1. Descrieți scopul site-ului
2. Definiți publicul țintă
3. Alegeți preferințele de design
4. Agentul generează o temă personalizată
5. Agentul activează tema
6. site_brief-ul este stocat pentru sesiuni viitoare
```

## Beneficiile Agentului Setup Assistant {#benefits-of-setup-assistant-agent}

### Mai flexibil {#more-flexible}

- Descrieți site-ul în limbaj natural
- Obțineți recomandări personalizate
- Se adaptează nevoilor specifice ale dvs.

### Personalizare mai bună {#better-customization}

- Generare de teme personalizate
- Decizii bazate pe sistemul de design
- Token-uri de design persistente

### Memorie persistentă {#persistent-memory}

- site_brief-ul dvs. este stocat
- Agenții viitori vă înțeleg site-ul
- Nu este nevoie să repetați informațiile de configurare

### Flux de lucru integrat {#integrated-workflow}

- Onboarding Theme Builder
- Skill Design System Aesthetics
- Controale de vizibilitate a capacităților (Ability Visibility controls)
- Totul lucrează împreună fără probleme

## Depanșare {#troubleshooting}

### Nu găsesc Modul Site Builder {#i-cant-find-site-builder-mode}

Modul Site Builder a fost eliminat. Folosiți în schimb agentul Setup Assistant:

```
"Help me set up a new site"
```

### Vreau să recreez un site din Site Builder {#i-want-to-recreate-a-site-from-site-builder}

Puteți recrea site-ul cu agentul Setup Assistant:

1. Solicitați: "Help me set up a new site"
2. Descrieți scopul și designul site-ului original
3. Agentul va genera o temă similară
4. site_brief-ul dvs. va fi stocat pentru referințe viitoare

### Site-ul meu existent din Site Builder nu funcționează {#my-existing-site-builder-site-isnt-working}

Site-urile existente create cu Modul Site Builder continuă să funcționeze. Dacă întâmpinați probleme:

1. Verificați dacă tema este încă activă
2. Verificați dacă plugin-urile sunt activate
3. Verificați jurnalele de eroare WordPress
4. Contactați suportul dacă problemele persistă

### Pot încă folosi șabloanele vechi Site Builder? {#can-i-still-use-my-old-site-builder-templates}

Șabloanele Site Builder nu mai sunt disponibile. Totuși:

- Site-urile dvs. existente continuă să funcționeze
- Puteți recrea site-uri similare cu agentul Setup Assistant
- Agentul Setup Assistant oferă mai multe opțiuni de personalizare

## Pași următori {#next-steps}

1. **Pentru site-uri noi**: Folosiți agentul Setup Assistant
2. **Pentru site-uri existente**: Continuați să le folosiți așa cum sunt
3. **Pentru modificări de temă**: Solicitați ajutor de la agentul Setup Assistant
4. **Pentru rafinare a designului**: Folosiți skill-ul Design System Aesthetics

## Subiecte conexe {#related-topics}

- **Theme Builder Onboarding**: Configurare ghidată pentru teme personalizate
- **Setup Assistant Agent**: Configurare de site asistată de agent
- **Site Specification Skill**: Definește obiectivele și publicul site-ului
- **Design System Aesthetics Skill**: Rafinează identitatea vizuală a site-ului
