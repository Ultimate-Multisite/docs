---
title: 'Lecția 7: Personalizarea'
sidebar_position: 8
_i18n_hash: 90013fc79a9cbb15283ce89b688002b1
---
# Lecția 7: Să-l faci să fie al tău

Clienții tăi nu trebuie să aibă niciodată senzația că folosesc „un plugin WordPress”. Ar trebui să simtă că folosesc FitSite — o platformă construită pentru industria lor. Această lecție acoperă branding-ul, white-labeling-ul și cum să faci ca platforma să pară un produs propriu.

## Unde ne-am oprit {#where-we-left-off}

FitSite are un flux de checkout funcțional care îl ghidează pe proprietarii de studiouri de fitness de la selectarea planului până la un site activ. Acum, facem ca întreaga experiență să pară un produs coerent și brandat.

## Domeniul Platformei Tale {#your-platform-domain}

Fundamentul brandului tău este domeniul tău. Pentru FitSite:

- **Domeniul principal**: `fitsite.com` (site-ul tău de marketing și rădăcina rețelei)
- **Site-urile clienților**: `studioname.fitsite.com` (subdomenii)
- **Domenii personalizate**: Clienții cu planurile Growth și Pro pot mapa propriul domeniu

### Configurarea Domeniului Tău {#setting-up-your-domain}

1. Înregistrează domeniul platformei tale
2. Atinge-l către furnizorul tău de hosting
3. Configurează DNS-ul wildcard (`*.fitsite.com`) pentru subdomenile clienților
4. Asigură-te că SSL-ul wildcard este activ

Vezi [Cum să configurezi maparea domeniului](/user-guide/domain-mapping/how-to-configure-domain-mapping) pentru instrucțiuni detaliate.

## White-Labeling Experiența Adminului {#white-labeling-the-admin-experience}

Când un proprietar de studio de fitness se autentifică pe dashboard-ul său, ar trebui să vadă brandul tău, nu brandul WordPress sau Ultimate Multisite.

### Pagina de Login Personalizată {#custom-login-page}

Customizează pagina de login WordPress pentru a afișa:

- Logo-ul tău FitSite
- Imagini de fundal potrivite pentru fitness
- Culorile brandului tău

### Branding-ul Dashboard-ului {#dashboard-branding}

Folosește addon-ul [Admin Page Creator](/addons/admin-page-creator) sau CSS personalizat pentru a:

- Înlocui logo-ul WordPress cu logo-ul tău FitSite
- Să customizezi schema de culori a adminului pentru a se potrivi brandului tău
- Să adaugi un widget personalizat în dashboard, cu link-uri rapide și resurse de ajutor specifice fitness-ului

### Pagini Admin Personalizate {#custom-admin-pages}

Ia în considerare crearea de pagini admin personalizate care să evidențieze acțiunile cele mai relevante pentru proprietarii de studiouri de fitness:

- "Editează Programul Tău de Clase"
- "Actualizează Profilurile Antrenorilor"
- "Vizualizează Site-ul Tău"

Acest lucru reduce curba de învățare, mutând acțiunile nișe-relevante în prim-plan, în loc să le îngroape în meniul standard WordPress.

## Branding-ul Comunicărilor Tale {#branding-your-communications}

Fiecare email, factură și notificare ar trebui să întărească brandul tău.

### Email-uri Sistemice {#system-emails}

Navighează la **Ultimate Multisite > Settings > Emails** și customizează toate email-urile sistemice:

- **Numele de trimitere**: FitSite
- **Email-ul de trimitere**: hello@fitsite.com
- **Template-uri de email**: Folosește culorile și logo-ul brandului tău
- **Limba**: Specifică fitness-ului, în toate contextele

Email-urile cheie de personalizat:

| Email | Versiunea Generică | Versiunea FitSite |
|-------|----------------|-----------------|
| Bun venit | "Site-ul tău nou este gata" | "Site-ul tău de studio de fitness este online" |
| Confirmare plată | "Plata primită" | "Plata abonamentului FitSite confirmată" |
| Încetarea trial-ului | "Trial-ul tău se termină curând" | "Trial-ul FitSite se termină în 3 zile — menține site-ul studioului tău online" |

### Facturi {#invoices}

Customizează template-urile de factură cu:

- Logo-ul și culorile brandului tău FitSite
- Detaliile tale de afaceri
- Nume de produse specifice fitness-ului (nu ID-uri generice de plan)

## Site-ul către Client {#the-customer-facing-site}

Domeniul tău principal (`fitsite.com`) are nevoie de un site de marketing care să vândă platforma. Acesta este separat de adminul rețelei Ultimate Multisite — este fața publică a afacerii tale.

Pagini cheie:

- **Pagina principală**: Propunere de valoare clară pentru afacerile de fitness
- **Funcționalități**: Ce face FitSite, în termeni de fitness
- **Prețuri**: Cele trei planuri ale tale, cu comparații de funcționalități specifice nișei
- **Exemple**: Arată site-uri construite pe platformă
- **Înscriere**: Link-uri către formularul tău de checkout

:::tip Site-ul Tău de Marketing poate fi un Site de Rețea
Creează site-ul de marketing ca un site în cadrul propriei rețele. Acest lucru îți permite să îl gestionezi din același dashboard și demonstrează capacitățile platformei tale.
:::

## Domeniu Personalizat pentru Clienți {#custom-domain-for-customers}

Pentru clienții cu planuri care includ domenii personalizate, documentează procesul clar:

1. Clientul își înregistrează sau transferă domeniul la un registrar
2. Clientul actualizează DNS-ul pentru a arăta către platforma ta (oferă înregistrări exacte)
3. Ultimate Multisite gestionează maparea domeniului și SSL-ul

Creează un articol de ajutor sau o intrare în baza de cunoștințe specifică pentru acest proces, scris pentru proprietari de studiouri de fitness care nu sunt tehnicieni.

## Rețeaua FitSite până acum {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (mod subdomeniu)
├── Ultimate Multisite (configurat + brandat)
├── Domeniul Platformei (fitsite.com + SSL wildcard)
├── Template-uri de Site (Studio Essential, Gym Pro, Fitness Chain)
├── Produse (Starter, Growth, Pro + Order Bumps)
├── Flux de Checkout (specific nișei, testat)
├── Branding
│   ├── Pagina de login personalizată
│   ├── Dashboard brandat
│   ├── Email-uri sistemice specifice nișei
│   ├── Facturi brandate
│   └── Site de marketing pe fitsite.com
└── Gata pentru fluxul de onboarding (lecția următoare)
```

## Ce Am Construit în Această Lecție {#what-we-built-this-lesson}

- **Domeniul platformei și DNS-ul** configurate pentru o experiență brandată
- **Admin white-labeled** cu branding FitSite în toate părțile
- **Comunicații personalizate** — email-uri, facturi și notificări toate în brand
- **Un site de marketing** care vinde FitSite proprietarilor de studiouri de fitness
- **Documentație pentru domenii personalizate** pentru clienții care doresc propriul domeniu

---

**Următorul:** [Lecția 8: Onboarding-ul Clientului](lesson-8-onboarding) — proiectăm experiența care transformă o înscriere nouă într-un client activ și fericit.
