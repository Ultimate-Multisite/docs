---
title: 'Lecția 6: Experiența de înregistrare'
sidebar_position: 7
_i18n_hash: a5c16cdd9b4e53a69e138df7bb042411
---
# Lecția 6: Experiența de Înscriere

Procesul de plată este locul unde interesul se transformă în venit. Un proces de înscriere confuz sau generic face ca clienții să plece. Un flux specific nișei, care vorbește limba lor și pare fără efort, îi va transforma în clienți plătitori.

## Unde Ne-am Oprit

FitSite are deja configurate temele și planurile. Acum vom construi experiența de înscriere și plată care să transforme proprietarii de studiouri de fitness în clienți plătitori.

## Înțelegerea Fluxului de Înscriere

Formarele de checkout ale Ultimate Multisite sunt formulare multi-pasi complet personalizabile. Pentru FitSite, dorim un flux care să:

1. Să pară construit pentru afacerile de fitness
2. Să colecteze doar ce este necesar
3. Să ajute clientul la un site funcțional cât mai repede posibil

Vedeți [Fluxul de Înscriere](/user-guide/configuration/the-registration-flow) pentru referința tehnică completă.

## Proiectarea Checkout-ului FitSite

Navigați la **Ultimate Multisite > Checkout Forms** și creați un formular nou.

### Pasul 1: Selectarea Planului

Prima cosa pe care să o vadă un proprietar de studio de fitness ar trebui să fie planurile, prezentate în termeni pe care le înțelege.

- Adăugați un câmp **Pricing Table**
- Configurați-l pentru a afișa toate cele trei planuri FitSite
- Descrierile planurilor pe care le-ați scris la Lecția 5 apar aici — asigurați-vă că se adresează nevoilor afacerilor de fitness, nu doar trăsăturilor tehnice

:::tip Limbajul Nișei Contează
„1 GB de stocare” nu înseamnă nimic pentru un proprietar de sală de sport. „Tot ce îți trebuie pentru un site profesional de studio” înseamnă totul. Scrieți descrierile planurilor în limba clientului dumneavoastră.
:::

### Pasul 2: Selectarea Template-ului

După ce a ales un plan, clientul își alege template-ul de start.

- Adăugați un câmp **Template Selection**
- Template-urile disponibile sunt filtrate în funcție de planul selectat (configurat la Lecția 5)
- Fiecare template ar trebui să aibă o imagine de previzualizare care să arate un design specific fitness-ului

### Pasul 3: Crearea Contului

Mențineți asta cât mai simplu. Colectați doar:

- Adresa de email
- Parolă
- Numele studioului/afacerii (acesta devine numele site-ului lor)

Nu cereți informații de care nu aveți nevoie la înscriere. Fiecare câmp suplimentar reduce conversiile.

### Pasul 4: Configurarea Site-ului

- **Site title**: Umpleți automat din numele studioului introdus la Pasul 3
- **Site URL**: Generat automat din numele studioului (ex: `ironworks.fitsite.com`)

### Pasul 5: Plățile

- Adăugați câmpul **Payment**
- Configurați gateway-ul de plată ([Stripe](/user-guide/payment-gateways/stripe) este recomandat pentru facturarea abonamentelor)
- Dacă ați creat *order bumps* la Lecția 5, adăugați un câmp **Order Bump** înainte de pasul de plată

### Pasul 6: Confirmarea

- Personalizați mesajul de confirmare cu un limbaj specific fitness-ului
- Exemplu: „Site-ul dumneavoastră de fitness este în curs de creare. Veți fi redirecționat către noul site în câteva secunde.”

## Adăugarea unui Toggle de Selecție a Perioadei

Dacă ați setat variații de preț în planurile dumneavoastră (lunare vs. anual), adăugați un câmp **Period Selection** în formularul de checkout, astfel încât clienții să poată comuta între perioadele de facturare. Vedeți [Checkout Forms](/user-guide/configuration/checkout-forms#adding-a-period-selection-toggle) pentru instrucțiuni.

## Configurarea Plăților

Dacă nu ați configurat încă un gateway de plată:

1. Navigați la **Ultimate Multisite > Settings > Payment Gateways**
2. Urmați ghidul de configurare Stripe [Stripe setup guide](/user-guide/payment-gateways/stripe) sau gateway-ul preferat de dumneavoastră
3. Testați un flux complet de checkout cu o plată de test

Vedeți [Getting Paid](/user-guide/payment-gateways/getting-paid) pentru detalii despre modul în care plățile ajung în contul dumneavoastră.

## Testarea Fluxului

Înainte de a continua, finalizați o înscriere de test completă:

1. Deschideți formularul de checkout într-o fereastră de browser incognito/privată
2. Selectați un plan
3. Alegeți un template
4. Creați un cont
5. Finalizați plata (folosiți modul de test)
6. Verificați că site-ul este creat cu template-ul corect

Verificați următoarele:

- [ ] Descrierile planurilor sunt clare și specifice nișei
- [ ] Preview-urile template-urilor arată designuri potrivite fitness-ului
- [ ] URL-ul site-ului se generează corect din numele studioului
- [ ] Procesarea plății este reușită
- [ ] Clientul ajunge pe un site funcțional cu template-ul selectat
- [ ] Email-urile de confirmare folosesc un limbaj specific fitness-ului

## Rețeaua FitSite Până Acum

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured)
├── Hosting with wildcard SSL + domain mapping
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products (Starter, Growth, Pro + Order Bumps)
├── Checkout Flow
│   ├── Plan selection with niche-specific descriptions
│   ├── Template selection with fitness previews
│   ├── Minimal account creation
│   ├── Payment via Stripe
│   └── Fitness-specific confirmation
└── Ready for branding (next lesson)
```

## Ce Am Construit în Această Lecție

- **Un formular de checkout cu mai multe pași** adaptat proprietarilor de studiouri de fitness
- **Limbaj specific nișei** pe tot parcursul fluxului de înscriere
- **Fricțiune minimă** — doar câmpuri esențiale, o cale rapidă către un site funcțional
- **Integrare de plată** cu verificare de test
- **Un flux de la cap la cap testat** de la selectarea planului la site-ul funcțional

---

**Următorul:** [Lecția 7: Să-ți faci pe Așa](lesson-7-branding) — vom face *white-label* platforma și vom etabliza FitSite ca brand.
