---
title: 'Mësimi 8: Orientimi i klientëve'
sidebar_position: 9
_i18n_hash: 5b71133bebf067164c77d33db7c81806
---
# Mësimi 8: Onboarding i klientëve {#lesson-8-customer-onboarding}

Ta bësh një klient të regjistrohet është vetëm gjysma e punës. Nëse ai hyn, ndihet i mbingarkuar dhe nuk kthehet më kurrë, e ke humbur. Ky mësim projekton përvojën që e kthen një regjistrim të ri në një klient aktiv dhe të angazhuar.

## Ku e lamë {#where-we-left-off}

FitSite është plotësisht i markuar me një rrjedhë checkout funksionale. Tani fokusohemi te ajo që ndodh pasi një pronar studioje fitnessi përfundon regjistrimin dhe hyn për herë të parë në site-in e tij të ri.

## Pse ka rëndësi onboarding-u {#why-onboarding-matters}

30 minutat e para pas regjistrimit përcaktojnë nëse një klient qëndron apo largohet. Një pronar studioje fitnessi që:

- Hyn dhe sheh një site që tashmë duket si website fitnessi → qëndron
- Di saktësisht çfarë të bëjë më pas → qëndron
- Ndihet i humbur në një WordPress dashboard të përgjithshëm → largohet

Modelet e tua të niche-it (Mësimi 4) trajtojnë pikën e parë. Ky mësim trajton të dytën.

## Përvoja e hyrjes së parë {#the-first-login-experience}

### Widget-i i mirëseardhjes në Dashboard {#welcome-dashboard-widget}

Krijo një widget të personalizuar dashboard-i që i përshëndet klientët e rinj dhe i udhëzon gjatë konfigurimit. Ky duhet të shfaqet dukshëm kur ata hyjnë për herë të parë.

**Nisje e shpejtë FitSite:**

1. **Shto emrin dhe logon e studios sate** -- Lidhje te Customizer ose te cilësimet Site Identity
2. **Përditëso orarin e klasave** -- Lidhje drejtpërdrejt te editori i faqes Classes
3. **Shto trajnerët e tu** -- Lidhje te editori i faqes Trainers
4. **Vendos të dhënat e kontaktit** -- Lidhje te editori i faqes Contact
5. **Parashiko site-in tënd** -- Lidhje te frontend

Çdo hap lidhet drejtpërdrejt me faqen ose cilësimin përkatës. Pa kërkuar nëpër menu.

### Thjeshto Dashboard-in {#simplify-the-dashboard}

Klientët e rinj nuk kanë nevojë të shohin çdo artikull menuje të WordPress. Merr parasysh:

- Fshehjen e artikujve të menusë që nuk janë të rëndësishëm për menaxhimin e një site-i fitnessi (p.sh., Comments nëse nuk përdoren)
- Rirenditjen e menusë për të vendosur artikujt më të përdorur në fillim
- Shtimin e etiketave të personalizuara të menusë që kanë kuptim për niche-in ("Studioja jote" në vend të "Appearance")

Addon-i [Plugin & Theme Manager](/addons/plugin-and-theme-manager) mund të ndihmojë në kontrollin e asaj që shohin klientët.

## Sekuenca e email-eve të mirëseardhjes {#welcome-email-sequence}

Një email i vetëm mirëseardhjeje nuk mjafton. Krijo një sekuencë që i udhëzon klientët gjatë javës së tyre të parë:

### Email 1: Mirë se erdhe (Menjëherë pas regjistrimit) {#email-1-welcome-immediately-after-signup}

- Subjekti: "Mirë se erdhe në FitSite -- website-i i studios sate është live"
- Përmbajtja: Lidhja e hyrjes, hapat e nisjes së shpejtë, lidhje te burimet e ndihmës
- Toni: Entuziast, inkurajues, specifik për fitness

### Email 2: Fitore të shpejta (Dita 1) {#email-2-quick-wins-day-1}

- Subjekti: "3 gjëra për të bërë së pari në FitSite-in tënd"
- Përmbajtja: Shto logon tënde, përditëso imazhin kryesor të homepage-it, shto orarin e klasave
- Përfshi screenshot-e që tregojnë saktësisht ku të klikosh

### Email 3: Bëje tëndin (Dita 3) {#email-3-make-it-yours-day-3}

- Subjekti: "Bëje site-in tënd të fitnessit të dallohet"
- Përmbajtja: Personalizo ngjyrat, shto foto të trajnerëve, shkruaj historinë e studios sate
- Lidhje te shembuj site-sh të shkëlqyer fitnessi në platformë

### Email 4: Dil live (Dita 7) {#email-4-go-live-day-7}

- Subjekti: "Gati ta ndash FitSite-in tënd me botën?"
- Përmbajtja: Checklist e gjërave që duhen verifikuar para ndarjes, si të lidhësh një domain të personalizuar (nëse je në Growth/Pro), këshilla për ndarje sociale

:::tip Automatizimi i email-eve
Përdor [Webhooks](/user-guide/integrations/webhooks) ose [Zapier](/user-guide/integrations/zapier) për t’i aktivizuar këto email-e përmes platformës sate të marketingut me email. Kjo të jep më shumë kontroll mbi kohën dhe të lejon të ndjekësh angazhimin.
:::

## Burimet e ndihmës {#help-resources}

Krijo përmbajtje ndihme specifike për niche-in që u përgjigjet pyetjeve që pronarët e studiove të fitnessit bëjnë realisht:

### Artikuj të bazës së njohurive {#knowledge-base-articles}

- "Si të përditësosh orarin e klasave"
- "Shtimi dhe redaktimi i profileve të trajnerëve"
- "Ndryshimi i logos dhe ngjyrave të studios sate"
- "Lidhja e emrit tënd të domain-it" (për klientët Growth/Pro)
- "Shtimi i një widget-i rezervimi në site-in tënd"

Shkruaji këto për përdorues jo-teknikë. Përdor screenshot-e. Shmang zhargonin e WordPress.

### Udhëzime me video {#video-walkthroughs}

Regjistrime të shkurtra ekrani (2-3 minuta) që tregojnë:

- Hyrjen e parë dhe orientimin
- Redaktimin e homepage-it
- Përditësimin e orarit të klasave
- Shtimin e një trajneri të ri

Këto nuk kanë nevojë të jenë prodhime të lustruara. Ajo që ka rëndësi është të jenë të qarta, të dobishme dhe specifike për niche-in.

## Faqja Account {#the-account-page}

Ultimate Multisite përfshin një [Faqe Account](/user-guide/client-management/account-page) për klientët, ku ata menaxhojnë subscription-in e tyre. Personalizoje këtë për të:

- Shfaqur planin e tyre aktual FitSite
- Shfaqur opsione upgrade me përfitime specifike për fitness
- Ofruar historikun e faturimit dhe shkarkime faturash
- Lidhur me burimet e ndihmës

## Matja e suksesit të onboarding-ut {#measuring-onboarding-success}

Ndiq këta tregues për të ditur nëse onboarding-u yt po funksionon:

- **Norma e aktivizimit**: Çfarë përqindjeje e regjistrimeve e personalizojnë realisht site-in e tyre brenda javës së parë?
- **Hyrjet në javën e parë**: Sa herë hyn një klient i ri gjatë javës së tij të parë?
- **Tiketa support-i nga klientët e rinj**: Volumi i lartë do të thotë që onboarding-u yt ka boshllëqe
- **Konvertimi nga trial në pagesë**: Nëse ofron trial-e, çfarë përqindjeje konvertohen?

## Rrjeti FitSite deri tani {#the-fitsite-network-so-far}

```
Rrjeti FitSite
├── WordPress Multisite (modalitet subdomain)
├── Ultimate Multisite (i konfiguruar + i markuar)
├── Domain-i i platformës (fitsite.com + wildcard SSL)
├── Modele site-i (Studio Essential, Gym Pro, Fitness Chain)
├── Produkte (Starter, Growth, Pro + Order Bumps)
├── Rrjedha Checkout (specifike për niche-in, e testuar)
├── Branding (hyrje, dashboard, email-e, fatura, site marketingu)
├── Onboarding i klientëve
│   ├── Widget dashboard-i Quick Start
│   ├── Dashboard i thjeshtuar për menaxhimin e site-it të fitnessit
│   ├── Sekuencë mirëseardhjeje me 4 email-e
│   ├── Bazë njohurish specifike për niche-in
│   ├── Udhëzime me video
│   └── Faqe account e personalizuar
└── Gati për strategjinë e çmimeve (mësimi tjetër)
```

## Çfarë ndërtuam në këtë mësim {#what-we-built-this-lesson}

- **Një përvojë të udhëzuar të hyrjes së parë** me një widget Quick Start
- **Një dashboard të thjeshtuar** të fokusuar te detyrat e menaxhimit të site-it të fitnessit
- **Një sekuencë email-esh mirëseardhjeje** që i udhëzon klientët gjatë javës së tyre të parë
- **Burime ndihme specifike për niche-in** të shkruara për pronarë jo-teknikë studiosh fitnessi
- **Metrika onboarding-u** për të ndjekur dhe përmirësuar përvojën

---

**Më tej:** [Mësimi 9: Çmimi për fitim](lesson-9-pricing) -- ne e përsosim strategjinë e çmimeve për të maksimizuar të ardhurat dhe për të minimizuar churn.
