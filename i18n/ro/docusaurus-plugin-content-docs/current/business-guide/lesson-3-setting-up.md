---
title: 'Lecția 3: Configurarea Rețelei Tale'
sidebar_position: 4
_i18n_hash: 4bffe2f3ba68d1a58bfc32d6b0a3c5c7
---
# Lecția 3: Configurarea Rețelei Tale {#lesson-3-setting-up-your-network}

E timpul să construim. În această lecție, veți instala Ultimate Multisite și veți configura fundația rețelei FitSite. Fiecare decizie aici este luată având în vedere nișa fitness.

## Unde Am Rămas {#where-we-left-off}

Am ales studiourile de fitness ca nișă și am validat oportunitatea. Acum, transformăm această idee într-o platformă funcțională.

## Alegerea Hosting-ului {#choosing-your-hosting}

Alegerea hosting-ului contează mai mult pentru o platformă de nișă decât pentru un singur website. Nu găzduiți un singur site — găzduiți o rețea care va crește până la zeci sau sute de site-uri.

### Ce să Căutați {#what-to-look-for}

- **Suport WordPress Multisite**: Nu toți providerii de hosting gestionează bine multisite-ul
- **Wildcard SSL**: Esențial pentru rețele bazate pe subdomenii
- **Resurse scalabile**: Aveți nevoie de spațiu pentru a crește fără a migra
- **Integrarea Ultimate Multisite**: Maparea automată a domeniilor și SSL-ul economisesc un efort operațional semnificativ

### Abordarea Recomandată {#recommended-approach}

Alegeți un host din lista de [Provideri Compatibili](/user-guide/host-integrations/closte). Aceștia au fost testați cu Ultimate Multisite și oferă integrările de care aveți nevoie pentru maparea domeniilor și automatizarea SSL-ului.

Pentru FitSite, vom folosi o configurare cu subdomenii. Acest lucru înseamnă că site-urile clienților vor apărea inițial ca `studioname.fitsite.com` înainte ca aceștia să își mapeze opțional propriul domeniu.

## Instalarea WordPress Multisite {#installing-wordpress-multisite}

Dacă nu aveți deja o instalare WordPress Multisite:

1. Instalați WordPress la providerul de hosting
2. Urmați ghidul [Cum să Instalați WordPress Multisite](/user-guide/getting-started/how-to-install-wordpress-multisite)
3. Alegeți configurarea **subdomain** când primiți solicitarea

:::tip De ce Subdomenii?
Subdomenile oferă fiecărui site al clientului o adresă distinctă (`studio.fitsite.com`) în loc de un cărăuș (`fitsite.com/studio`). Acest lucru este mai profesionist pentru clienții dumneavoastră și evită conflictele de permalink. Vedeți [Ultimate Multisite 101](/user-guide/getting-started/ultimate-multisite-101) pentru o comparație detaliată.
:::

## Instalarea Ultimate Multisite {#installing-ultimate-multisite}

Urmați ghidul [Instalarea Ultimate Multisite](/user-guide/getting-started/installing-ultimate-multisite) pentru a:

1. Upload și activa plugin-ul la nivel de rețea
2. Rula [Setup Wizard](/user-guide/getting-started/multisite-setup-wizard)

În timpul setup wizard-ului, mențineți în minte nișa FitSite:

- **Currency**: Setați moneda pe care o folosesc clienții dumneavoastră din studiourile de fitness
- **Company name**: "FitSite" (sau numele de brand ales de dumneavoastră)
- **Company logo**: Uploadați logo-ul brandului dumneavoastră — acesta va apărea pe facturi și e-mailuri

## Configurarea pentru Nișa Fitness {#configuring-for-the-fitness-niche}

Cu Ultimate Multisite instalat, faceți aceste alegeri de configurare specifice nișei:

### Setări Generale {#general-settings}

Navigați la **Ultimate Multisite > Settings** și configurați:

- **Site name**: FitSite
- **Default role**: Administrator — proprietarii studiilor de fitness au nevoie de control total asupra conținutului site-ului lor
- **Registration**: Activați înregistrarea utilizatorilor pentru ca proprietarii studiilor să se poată înregistra singuri

### Configurația E-mailului {#email-configuration}

E-mailurile sistemului dumneavoastră ar trebui să vorbească limba nișei. Navigați la **Ultimate Multisite > Settings > Emails** și personalizați:

- Înlocuiți limbajul generic "site-ul tău nou" cu mesaje specifice fitness-ului
- Subiect de salut exemplu: "Site-ul tău de fitness este gata"
- Corp de salut exemplu: Faceți referire la studioul lor, clase și cum să înceapă cu site-ul lor de fitness

Vom rafina aceste aspecte în continuare în Lecția 8 (Onboarding-ul Clienților), dar stabilirea tonului acum asigură că chiar și primele înregistrări de test se simt specifice nișei.

### Configurația Domeniului {#domain-configuration}

Dacă folosiți un provider de hosting compatibil, configurați maparea domeniilor acum:

1. Navigați la **Ultimate Multisite > Settings > Domain Mapping**
2. Urmați ghidul de integrare pentru host-ul specific
3. Testați ca noile subsite să primească SSL automat

Acest lucru asigură că, atunci când vom începe să creăm șabloane și site-uri de test în lecția următoare, totul funcționează de la capăt la capăt.

## Rețeaua FitSite Până Acum {#the-fitsite-network-so-far}

La sfârșitul acestei lecții, iată ce aveți:

```
FitSite Network
├── WordPress Multisite (mod subdomeniu)
├── Ultimate Multisite (instalat și configurat)
├── Hosting cu SSL wildcard
├── Mapare domenii configurată
├── Șabloane de e-mail specifice nișei (inițial)
└── Gata pentru șabloane de site (lecția următoare)
```

## Ce Am Construit în Această Lecție {#what-we-built-this-lesson}

- **O instalare funcțională WordPress Multisite** în modul subdomeniu
- **Ultimate Multisite instalat** și configurat cu branding-ul FitSite
- **Hosting și SSL** setat pentru o rețea în creștere
- **Maparea domeniilor** configurată pentru providerul dumneavoastră de hosting
- **Ton de e-mail specific nișei** stabilit de la prima zi

---

**Următorul:** [Lecția 4: Construirea Șabloanelor de Nișă](lesson-4-templates) — vom crea șabloane de site pe care proprietarii studiilor de fitness vor vrea cu adevărat să le folosească.
