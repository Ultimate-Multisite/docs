---
title: 'Lecția 8: Onboarding-ul clienților'
sidebar_position: 9
_i18n_hash: 5b71133bebf067164c77d33db7c81806
---
# Lecția 8: Onboarding-ul Clientului

A face ca un client să se înscrie este doar prima etapă. Dacă se autentifică, se simte copleșit și nu mai revine, l-ai pierdut. Această lecție proiectează experiența care transformă o înscriere nouă într-un client activ și implicat.

## Unde Ne-am Oprit {#where-we-left-off}

FitSite este complet brandat și are un flux de checkout funcțional. Acum ne concentrăm pe ceea ce se întâmplă după ce un proprietar de studio de fitness finalizează înscrierea și ajunge pe site-ul său nou pentru prima dată.

## De Ce Este Important Onboarding-ul {#why-onboarding-matters}

Primele 30 de minute după înscriere determină dacă un client rămâne sau pleacă (churn). Un proprietar de studio de fitness care:

- Se autentifică și vede un site care arată deja ca un site de fitness → rămâne
- Știe exact ce să facă în continuare → rămâne
- Se simte pierdut într-un dashboard WordPress generic → pleacă

Template-urile noastre de nișă (Lecția 4) acoperă primul punct. Această lecție acoperă al doilea.

## Experiența Primei Autentificări {#the-first-login-experience}

### Widget-ul de Dashboard de Bun Venut {#welcome-dashboard-widget}

Creați un widget de dashboard personalizat care să îi întâmpine pe clienții noi și să îi ghideze prin procesul de configurare. Acesta ar trebui să apară în mod vizibil când se autentifică pentru prima dată.

**Quick Start FitSite:**

1. **Adăugați numele și logo-ul studioului** -- Link către Customizer sau setările Site Identity
2. **Actualizați programul de clase** -- Link direct către editorul paginii Classes
3. **Adăugați antreșorii** -- Link către editorul paginii Trainers
4. **Setați detaliile de contact** -- Link către editorul paginii Contact
5. **Preview-ați site-ul** -- Link către frontend

Fiecare pas leagă direct de pagina sau setarea relevantă. Nu trebuie să caute în meniuri.

### Simplificarea Dashboard-ului {#simplify-the-dashboard}

Clienții noi nu trebuie să vadă fiecare element de meniu WordPress. Luați în considerare:

- Ascunderea elementelor de meniu care nu sunt relevante pentru gestionarea unui site de fitness (de exemplu, Comentarii, dacă nu sunt folosite)
- Reordonarea meniului pentru a plasa elementele cele mai folosite la început
- Adăugarea de etichete de meniu personalizate care au sens pentru nișă ("Studio-ul Tău" în loc de "Aspect")

Addon-ul [Plugin & Theme Manager](/addons/plugin-and-theme-manager) vă poate ajuta să controlați ce văd clienții.

## Secvența de Email-uri de Bun Venut {#welcome-email-sequence}

Un singur email de bun venit nu este suficient. Setați o secvență care să ghideze clienții în prima săptămână:

### Emailul 1: Bun Venut (Imediat după înscriere) {#email-1-welcome-immediately-after-signup}

- Subiect: "Bun venit la FitSite — site-ul tău de studio este online"
- Conținut: Link de autentificare, pași de start rapid, link către resurse de ajutor
- Ton: Entuziast, încurajator, specific fitness-ului

### Emailul 2: Victoriile Rapide (Ziua 1) {#email-2-quick-wins-day-1}

- Subiect: "3 lucruri de făcut pe FitSite de la început"
- Conținut: Adaugă logo-ul, actualizează imaginea hero de pe pagină principală, adaugă programul de clase
- Include capturi de ecran care arată exact unde să apasă

### Emailul 3: Fă-l Său (Ziua 3) {#email-3-make-it-yours-day-3}

- Subiect: "Fați ca site-ul de fitness să vă strălucească"
- Conținut: Personalizați culorile, adăugați foto-uri ale antreșorilor, scrieți povestea studioului
- Link către exemple de site-uri excelente de fitness pe platformă

### Emailul 4: Lansare (Ziua 7) {#email-4-go-live-day-7}

- Subiect: "Gata să împărtășiți FitSite cu lumea?"
- Conținut: Lista de verificare a lucrurilor de verificat înainte de a împărtăși, cum să conectați un domeniu personalizat (dacă folosiți Growth/Pro), sfaturi pentru partajare pe rețelele sociale

:::tip Automatizarea Email-urilor
Folosiți [Webhooks](/user-guide/integrations/webhooks) sau [Zapier](/user-guide/integrations/zapier) pentru a declanșa aceste email-uri prin platforma dumneavoastră de marketing prin email. Acest lucru vă oferă mai mult control asupra timpului și vă permite să urmăriți implicarea.
:::

## Resurse de Ajutor {#help-resources}

Creați conținut de ajutor specific nișei care să răspundă la întrebările pe care le adresează de fapt proprietarii de studiouri de fitness:

### Articole în Baza de Cunoștințe {#knowledge-base-articles}

- "Cum să actualizezi programul de clase"
- "Adăugarea și editarea profilurilor antreșorilor"
- "Schimbarea logo-ului și culorilor studioului"
- "Conectarea domeniului propriu" (pentru clienții Growth/Pro)
- "Adăugarea unui widget de rezervare pe site"

Scrieți aceste articole pentru utilizatori non-tehnici. Folosiți capturi de ecran. Evitați jargonul WordPress.

### Tutoriale Video {#video-walkthroughs}

Înregistrări scurte (de 2-3 minute) ale ecranului care arată:

- Prima autentificare și orientarea
- Editarea paginii principale
- Actualizarea programului de clase
- Adăugarea unui nou antrenor

Acestea nu trebuie să fie producții rafinate. Clar, util și specific nișei este ceea ce contează.

## Pagina Contului {#the-account-page}

Ultimate Multisite include o [Pagina Contului](/user-guide/client-management/account-page) vizibilă pentru clienți, unde clienții își gestionează abonamentul. Personalizați-o pentru a:

- Arăta planul curent FitSite
- Afișa opțiunile de upgrade cu beneficii specifice fitness-ului
- Oferi istoricul facturării și descărcarea facturilor
- Link către resurse de ajutor

## Măsurarea Succesului Onboarding-ului {#measuring-onboarding-success}

Urmăriți aceste indicatori pentru a ști dacă onboarding-ul funcționează:

- **Rata de activare (Activation rate)**: Ce procentaj din înscrierile se personalizează efectiv site-ul în prima săptămână?
- **Autentificări în prima săptămână**: De câte ori se autentifică un client nou în prima sa săptămână?
- **Ticket-uri de suport de la clienți noi**: Un volum mare înseamnă că onboarding-ul are lacune
- **Conversia de la trial la plată**: Dacă oferiți trial-uri, ce procentaj se convertește?

## FitSite Network Până Acum {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured + branded)
├── Platform Domain (fitsite.com + wildcard SSL)
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products (Starter, Growth, Pro + Order Bumps)
├── Checkout Flow (niche-specific, tested)
├── Branding (login, dashboard, emails, invoices, marketing site)
├── Customer Onboarding
│   ├── Quick Start dashboard widget
│   ├── Simplified dashboard for fitness site management
│   ├── 4-email welcome sequence
│   ├── Niche-specific knowledge base
│   ├── Video walkthroughs
│   └── Customized account page
└── Ready for pricing strategy (next lesson)
```

## Ce Am Construit în Această Lecție {#what-we-built-this-lesson}

- **O experiență ghidată de prima autentificare** cu un widget Quick Start
- **Un dashboard simplificat** axat pe sarcini de management al site-ului de fitness
- **O secvență de email-uri de bun venit** care ghidează clienții în prima săptămână
- **Resurse de ajutor specifice nișei** scrise pentru proprietarii de studiouri de fitness non-tehnici
- **Metrice de onboarding** pentru a urmări și îmbunătăți experiența

---

**Următorul:** [Lecția 9: Prețuri pentru Profit](lesson-9-pricing) — rafinăm strategia de prețuri pentru a maximiza venitul și a minimiza abandonul.
