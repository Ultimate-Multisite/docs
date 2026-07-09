---
title: 'Mësimi 6: Përvoja e regjistrimit'
sidebar_position: 7
_i18n_hash: a5c16cdd9b4e53a69e138df7bb042411
---
# Mësimi 6: Përvoja e regjistrimit {#lesson-6-the-signup-experience}

Rrjedha e checkout është vendi ku interesi shndërrohet në të ardhura. Një proces regjistrimi konfuz ose i përgjithshëm humb klientë. Një rrjedhë specifike për një nish, që flet gjuhën e tyre dhe duket e lehtë, i konverton ata.

## Ku e lamë {#where-we-left-off}

FitSite ka shabllone dhe plane të konfiguruara. Tani ndërtojmë përvojën e regjistrimit dhe checkout që i kthen pronarët e studiove të fitnesit në klientë që paguajnë.

## Të kuptuarit e rrjedhës së regjistrimit {#understanding-the-registration-flow}

Formularët e checkout të Ultimate Multisite janë formularë plotësisht të personalizueshëm me shumë hapa. Për FitSite, duam një rrjedhë që:

1. Duket sikur është ndërtuar për biznese fitnesi
2. Mbledh vetëm atë që nevojitet
3. E çon klientin te një sajt funksional sa më shpejt të jetë e mundur

Shihni [Rrjedha e regjistrimit](/user-guide/configuration/the-registration-flow) për referencën e plotë teknike.

## Dizajnimi i checkout të FitSite {#designing-the-fitsite-checkout}

Navigoni te **Ultimate Multisite > Checkout Forms** dhe krijoni një formular të ri.

### Hapi 1: Zgjedhja e planit {#step-1-plan-selection}

Gjëja e parë që duhet të shohë një pronar studioje fitnesi janë planet, të paraqitura me terma që i kupton.

- Shtoni një fushë **Tabela e çmimeve**
- Konfigurojeni që të shfaqë të tre planet e FitSite
- Përshkrimet e planeve që shkruat në Mësimin 5 shfaqen këtu -- sigurohuni që të flasin për nevojat e biznesit të fitnesit, jo për veçori teknike

:::tip Niche Language Matters
"1 GB storage" means nothing to a gym owner. "Everything you need for a professional studio website" means everything. Write plan descriptions in your customer's language.
:::

### Hapi 2: Zgjedhja e shabllonit {#step-2-template-selection}

Pasi zgjedh një plan, klienti zgjedh shabllonin e tij fillestar.

- Shtoni një fushë **Zgjedhja e shabllonit**
- Shabllonet e disponueshme filtrohen sipas planit që ata zgjodhën (i konfiguruar në Mësimin 5)
- Çdo shabllon duhet të ketë një imazh parapamjeje që tregon një dizajn specifik për fitnesin

### Hapi 3: Krijimi i Account {#step-3-account-creation}

Mbajeni këtë minimal. Mblidhni vetëm:

- Adresën e email-it
- Fjalëkalimin
- Emrin e studios/biznesit (ky bëhet emri i sajtit të tyre)

Mos kërkoni informacion që nuk ju nevojitet gjatë regjistrimit. Çdo fushë shtesë ul konvertimet.

### Hapi 4: Konfigurimi i sajtit {#step-4-site-setup}

- **Titulli i sajtit**: Plotësojeni paraprakisht nga emri i studios i futur në Hapin 3
- **URL-ja e sajtit**: Gjenerojeni automatikisht nga emri i studios (p.sh., `ironworks.fitsite.com`)

### Hapi 5: Pagesa {#step-5-payment}

- Shtoni fushën **Pagesa**
- Konfiguroni portën tuaj të pagesave ([Stripe](/user-guide/payment-gateways/stripe) rekomandohet për faturim me abonim)
- Nëse krijuat order bumps në Mësimin 5, shtoni një fushë **Order Bump** përpara hapit të pagesës

### Hapi 6: Konfirmimi {#step-6-confirmation}

- Personalizoni mesazhin e konfirmimit me gjuhë specifike për fitnesin
- Shembull: "Faqja e internetit e studios suaj të fitnesit po krijohet. Do të ridrejtoheni te sajti juaj i ri brenda pak sekondash."

## Shtimi i një çelësi për zgjedhjen e periudhës {#adding-a-period-selection-toggle}

Nëse keni konfiguruar variacione çmimi në planet tuaja (mujore kundrejt vjetore), shtoni një fushë **Zgjedhja e periudhës** në formularin e checkout që klientët të mund të kalojnë mes periudhave të faturimit. Shihni [Formularët e checkout](/user-guide/configuration/checkout-forms#adding-a-period-selection-toggle) për udhëzime.

## Konfigurimi i pagesës {#configuring-payment}

Nëse nuk keni konfiguruar tashmë një portë pagesash:

1. Navigoni te **Ultimate Multisite > Settings > Payment Gateways**
2. Ndiqni [udhëzuesin e konfigurimit të Stripe](/user-guide/payment-gateways/stripe) ose portën tuaj të preferuar
3. Testoni një rrjedhë të plotë checkout me një pagesë prove

Shihni [Marrja e pagesave](/user-guide/payment-gateways/getting-paid) për detaje se si pagesat rrjedhin në account tuaj.

## Testimi i rrjedhës {#testing-the-flow}

Përpara se të vazhdoni, përfundoni një regjistrim të plotë prove:

1. Hapni formularin e checkout në një dritare shfletuesi inkognito/privat
2. Zgjidhni një plan
3. Zgjidhni një shabllon
4. Krijoni një account
5. Përfundoni pagesën (përdorni modalitetin e testimit)
6. Verifikoni që sajti është krijuar me shabllonin e saktë

Kontrolloni që:

- [ ] Përshkrimet e planeve janë të qarta dhe specifike për nishin
- [ ] Parapamjet e shablloneve shfaqin dizajne të përshtatshme për fitnes
- [ ] URL-ja e sajtit gjenerohet saktë nga emri i studios
- [ ] Pagesa përpunohet me sukses
- [ ] Klienti mbërrin në një sajt funksional me shabllonin e zgjedhur
- [ ] Email-et e konfirmimit përdorin gjuhë specifike për fitnesin

## Rrjeti FitSite deri tani {#the-fitsite-network-so-far}

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

## Çfarë ndërtuam në këtë mësim {#what-we-built-this-lesson}

- **Një formular checkout me shumë hapa** i përshtatur për pronarët e studiove të fitnesit
- **Gjuhë specifike për nishin** gjatë gjithë rrjedhës së regjistrimit
- **Fërkim minimal** -- vetëm fushat thelbësore, rrugë e shpejtë drejt një sajti funksional
- **Integrim pagese** me verifikim prove
- **Një rrjedhë e testuar nga fillimi në fund** nga zgjedhja e planit deri te sajti funksional

---

**Tjetër:** [Mësimi 7: Bëjeni tuajën](lesson-7-branding) -- e bëjmë platformën white-label dhe e vendosim FitSite si brand.
