---
title: 'Lecția 5: Proiectarea Planurilor Tale'
sidebar_position: 6
_i18n_hash: 8c58dfd0a186bd585f43342bc4ea4f43
---
# Lecția 5: Crearea Nivelurilor de Plan

Nivelurile de plan pe care le creezi nu sunt doar simple niveluri de preț — ele reflectă modul în care clienții tăi de nișă funcționează cu adevărat. În această lecție, vei proiecta pachete de produse care să se potrivească nevoilor reale ale afacerilor din domeniul fitness, indiferent de etapa în care se află.

## Unde ne-am oprit

FitSite are deja trei șabloane gata de utilizare (Studio Essential, Gym Pro, Fitness Chain). Acum vom crea planurile care determină accesul pe care îl primesc clienții și ce plătesc.

## Gândirea în Segmente de Clienți

Greșeala pe care o fac majoritatea oamenilor este de a proiecta planurile în jurul caracteristicilor tehnice (stocare, lățime de bandă, număr de pagini). Clienții tăi de nișă nu gândesc în acești termeni. Un proprietar de sală de fitness se gândește la ce are nevoie pentru a-și rula afacerea.

Pentru studiouri de fitness, există trei segmente naturale:

| Segment | Cine sunt | Ce au nevoie |
|---------|-------------|----------------|
| **Traineri solo / studiouri mici** | 1-3 angajați, locație singură, începători | Un site profesionist, informații despre clase, formular de contact |
| **Salile de fitness stabilite** | 5-20 angajați, locație singură, în creștere | Tot ce este de mai sus, plus rezervări, blog, galerie, domeniu personalizat |
| **Franhaze de fitness** | Multiple locații, brand stabilit | Tot ce este de mai sus, plus multisite, pagini de locații, director de personal |

Planurile tale ar trebui să corespundă acestor segmente, nu unor pachete de funcționalități arbitrare.

## Crearea Planurilor FitSite

Navighează la **Ultimate Multisite > Products > Add Product** pentru fiecare plan.

### Planul 1: FitSite Starter — $49/lună

**Țintă**: Traineri solo și studiouri mici

**Tab-ul Descriere**:
- Nume: FitSite Starter
- Descriere: "Tot ce are nevoie un personal trainer sau un studio mic pentru a arăta profesionist online."

**Tab-ul General**:
- Tip produs: Plan
- Rol client: Administrator

**Tab-ul Șabloane de Site**:
- Permite șabloane de site: Activat
- Șabloane disponibile: Doar Studio Essential

**Limitări**:
- Site-uri: 1
- Spațiu pe disc: 1 GB
- Domeniu personalizat: Dezactivat (folosește `studioname.fitsite.com`)

**Tab-ul Plugin-uri**:
- Plugin de formular de contact: Force Activate
- Plugin SEO: Force Activate
- Plugin de rezervări: Nu Disponibil (incentiv de upgrade)

**Tab-ul Temele**:
- Tema selectată: Force Activate
- Alte teme: Ascuns

### Planul 2: FitSite Growth — $99/lună

**Țintă**: Salile de fitness stabilite, cu o singură locație

**Tab-ul Descriere**:
- Nume: FitSite Growth
- Descriere: "Pentru salile de fitness stabilite, gata să își dezvolte prezența online și să atragă membri noi."

**Tab-ul Șabloane de Site**:
- Șabloane disponibile: Studio Essential și Gym Pro

**Limitări**:
- Site-uri: 1
- Spațiu pe disc: 5 GB
- Domeniu personalizat: Activat

**Tab-ul Plugin-uri**:
- Tot ce este în Starter, plus:
- Plugin de rezervări: Force Activate
- Plugin de galerie: Force Activate
- Funcționalitate de blog: Disponibil

**Tab-ul Upgrade & Downgrades**:
- Grupa de planuri: FitSite Plans
- Ordinea produsului: 2

### Planul 3: FitSite Pro — $199/lună

**Țintă**: Franhaze de fitness cu multiple locații

**Tab-ul Descriere**:
- Nume: FitSite Pro
- Descriere: "Platforma completă pentru branduri de fitness cu multiple locații."

**Tab-ul Șabloane de Site**:
- Șabloane disponibile: Toate cele trei șabloane

**Limitări**:
- Site-uri: 5 (una per locație)
- Spațiu pe disc: 20 GB
- Domeniu personalizat: Activat

**Tab-ul Plugin-uri**:
- Tot ce este în Growth, plus:
- Toate plugin-urile premium: Force Activate

**Tab-ul Upgrade & Downgrades**:
- Grupa de planuri: FitSite Plans
- Ordinea produsului: 3

## Configurarea Grupului de Planuri

Grupul de planuri asigură că clienții pot face upgrade-uri sau downgrade-uri doar în cadrul familiei de planuri FitSite. Pe tab-ul **Up & Downgrades** al fiecărui plan:

1. Setează **Plan Group** pe "FitSite Plans" pentru toate cele trei planuri
2. Setează **Product Order** pe 1 (Starter), 2 (Growth), 3 (Pro)

Acest lucru creează o cale de upgrade clară: Starter → Growth → Pro.

## Adăugarea Boostere de Comandă (Order Bumps)

Boosterele de comandă sunt produse suplimentare oferite la checkout. Pentru FitSite, ia în considerare:

- **Pachet de Stocare Suplimentară** ($19/lună) — 5 GB de spațiu suplimentar pe disc
- **Suport Prioritar** ($29/lună) — timp de răspuns mai rapid
- **Site Suplimentar** ($39/lună) — pentru clienții care au nevoie de mai multe site-uri decât permite planul lor

Creează acestea ca produse de tip **Package** în Ultimate Multisite și asoci-le cu planurile relevante.

## De ce funcționează această structură

- **Starter** elimină barierele de intrare — preț mic, ofertă simplă, ajută trainerii să fie online rapid
- **Growth** adaugă funcționalitățile pe care le cer de fapt salile — rezervări, galerii, domenii personalizate
- **Pro** servește segmentul de înaltă valoare care are nevoie de suport pentru multiple locații
- **Boosterele de comandă** permit clienților să își personalizeze fără a complica planurile de bază
- **Calea de upgrade clară** înseamnă că clienții cresc cu tine, în loc să plece

## Rețeaua FitSite până acum

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

## Ce am construit în această lecție

- **Trei niveluri de plan** mapate pe segmente reale de afaceri din fitness
- **Blocarea funcționalităților** folosind controlurile de plugin și șablon ale Ultimate Multisite
- **Un grup de planuri** cu o cale de upgrade clară
- **Produse de boostere de comandă** pentru venituri suplimentare
- **O structură de prețuri** bazată pe valoarea pentru client, nu pe specificații tehnice

---

**Următorul:** [Lecția 6: Experiența de Înregistrare](lesson-6-checkout) — vom construi un flux de checkout care să convertească proprietarii de studiouri de fitness în clienți plătitori.
