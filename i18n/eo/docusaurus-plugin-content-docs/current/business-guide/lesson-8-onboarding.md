---
title: 'Leciono 8: Enkonduko de klientoj'
sidebar_position: 9
_i18n_hash: 5b71133bebf067164c77d33db7c81806
---
# Leciono 8: Klienta Enkonduko

Igi klienton registriĝi estas nur duono de la laboro. Se ili ensalutas, sentas sin superŝutitaj, kaj neniam revenas, vi perdis ilin. Ĉi tiu leciono desegnas la sperton, kiu transformas novan registriĝon en aktivan, engaĝitan klienton.

## Kie Ni Ĉesis {#where-we-left-off}

FitSite estas plene markita kun funkcianta paga fluo. Nun ni fokusiĝas pri tio, kio okazas post kiam posedanto de fitnesstudio kompletigas registriĝon kaj unuafoje alvenas sur sian novan retejon.

## Kial Enkonduko Gravas {#why-onboarding-matters}

La unuaj 30 minutoj post registriĝo determinas ĉu kliento restas aŭ foriras. Posedanto de fitnesstudio, kiu:

- Ensalutas kaj vidas retejon, kiu jam aspektas kiel fitnesa retejo → restas
- Scias precize kion fari poste → restas
- Sentas sin perdita en ĝenerala WordPress Dashboard → foriras

Viaj niĉaj ŝablonoj (Leciono 4) pritraktas la unuan punkton. Ĉi tiu leciono pritraktas la duan.

## La Unua Ensaluta Sperto {#the-first-login-experience}

### Bonveniga Dashboard Fenestraĵo {#welcome-dashboard-widget}

Kreu propran Dashboard fenestraĵon, kiu salutas novajn klientojn kaj gvidas ilin tra agordo. Ĉi tio devus aperi elstare kiam ili unuafoje ensalutas.

**FitSite Rapida Komenco:**

1. **Aldonu la nomon kaj emblemon de via studio** -- Ligilo al Customizer aŭ agordoj de Reteja Identeco
2. **Ĝisdatigu vian horaron de klasoj** -- Ligilo rekte al la redaktilo de la paĝo Klasoj
3. **Aldonu viajn trejnistojn** -- Ligilo al la redaktilo de la paĝo Trejnistoj
4. **Agordu viajn kontaktajn detalojn** -- Ligilo al la redaktilo de la paĝo Kontakto
5. **Antaŭrigardu vian retejon** -- Ligilo al la frontend

Ĉiu paŝo ligas rekte al la koncerna paĝo aŭ agordo. Neniu serĉado tra menuoj.

### Simpligu la Dashboard {#simplify-the-dashboard}

Novaj klientoj ne bezonas vidi ĉiun WordPress menu-elementon. Konsideru:

- Kaŝi menu-elementojn, kiuj ne rilatas al administrado de fitnesa retejo (ekz., Komentoj se ne uzataj)
- Reordigi la menuon por meti la plej uzatajn elementojn unue
- Aldoni proprajn menu-etikedojn, kiuj havas sencon por la niĉo ("Via Studio" anstataŭ "Aspekto")

La [Plugin & Theme Manager](/addons/plugin-and-theme-manager) addon povas helpi regi tion, kion klientoj vidas.

## Bonveniga Retpoŝta Sinsekvo {#welcome-email-sequence}

Ununura bonveniga retpoŝto ne sufiĉas. Starigu sinsekvon, kiu gvidas klientojn tra ilia unua semajno:

### Retpoŝto 1: Bonvenon (Tuj post registriĝo) {#email-1-welcome-immediately-after-signup}

- Temo: "Bonvenon al FitSite -- via studia retejo estas publika"
- Enhavo: Ensaluta ligilo, rapidaj komencaj paŝoj, ligilo al helpaj rimedoj
- Tono: Ekscitita, kuraĝiga, specifa al fitneso

### Retpoŝto 2: Rapidaj Venkoj (Tago 1) {#email-2-quick-wins-day-1}

- Temo: "3 aferoj farendaj unue en via FitSite"
- Enhavo: Aldonu vian emblemon, ĝisdatigu la ĉefpaĝan hero-bildon, aldonu vian horaron de klasoj
- Inkluzivu ekrankopiojn, kiuj montras precize kie alklaki

### Retpoŝto 3: Faru Ĝin Via (Tago 3) {#email-3-make-it-yours-day-3}

- Temo: "Elstarigu vian fitnesan retejon"
- Enhavo: Agordu kolorojn, aldonu fotojn de trejnistoj, skribu la rakonton de via studio
- Ligilo al ekzemploj de bonegaj fitnesaj retejoj sur la platformo

### Retpoŝto 4: Publikigu (Tago 7) {#email-4-go-live-day-7}

- Temo: "Ĉu pretas kundividi vian FitSite kun la mondo?"
- Enhavo: Kontrol-listo de tio, kion kontroli antaŭ kundivido, kiel konekti propran domajnon (se en Growth/Pro), konsiloj pri socia kundivido

:::tip Email Automation
Use [Webhooks](/user-guide/integrations/webhooks) or [Zapier](/user-guide/integrations/zapier) to trigger these emails through your email marketing platform. This gives you more control over timing and allows you to track engagement.
:::

## Helpaj Rimedoj {#help-resources}

Kreu niĉ-specifan helpenhavon, kiu respondas la demandojn, kiujn posedantoj de fitnesstudioj efektive demandas:

### Artikoloj de Scibazo {#knowledge-base-articles}

- "Kiel ĝisdatigi vian horaron de klasoj"
- "Aldoni kaj redakti profilojn de trejnistoj"
- "Ŝanĝi la emblemon kaj kolorojn de via studio"
- "Konekti vian propran domajnan nomon" (por Growth/Pro klientoj)
- "Aldoni rezervan fenestraĵon al via retejo"

Skribu ĉi tiujn por neteknikaj uzantoj. Uzu ekrankopiojn. Evitu WordPress ĵargonon.

### Videaj Gvidoj {#video-walkthroughs}

Mallongaj (2-3 minutaj) ekranregistraĵoj montrantaj:

- Unuan ensaluton kaj orientiĝon
- Redaktadon de la ĉefpaĝo
- Ĝisdatigon de la horaro de klasoj
- Aldonon de nova trejnisto

Ĉi tiuj ne bezonas esti poluritaj produktaĵoj. Klara, helpema, kaj niĉ-specifa estas tio, kio gravas.

## La Account Paĝo {#the-account-page}

Ultimate Multisite inkluzivas klient-fruntan [Account Paĝon](/user-guide/client-management/account-page), kie klientoj administras sian abonon. Agordu ĉi tion por:

- Montri ilian aktualan FitSite planon
- Montri ĝisdatigajn opciojn kun fitnes-specifaj avantaĝoj
- Provizi fakturan historion kaj elŝutojn de fakturoj
- Ligi al helpaj rimedoj

## Mezuri Sukceson de Enkonduko {#measuring-onboarding-success}

Spuru ĉi tiujn indikilojn por scii ĉu via enkonduko funkcias:

- **Aktiviga procento**: Kia procento de registriĝoj efektive agordas sian retejon dum la unua semajno?
- **Unu-semajnaj ensalutoj**: Kiom da fojoj nova kliento ensalutas dum sia unua semajno?
- **Subtenaj petoj de novaj klientoj**: Alta kvanto signifas, ke via enkonduko havas mankojn
- **Konvertiĝo de provo al pagita**: Se vi ofertas provojn, kia procento konvertiĝas?

## La FitSite Reto Ĝis Nun {#the-fitsite-network-so-far}

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

## Kion Ni Konstruis en Ĉi Tiu Leciono {#what-we-built-this-lesson}

- **Gvidita unua-ensaluta sperto** kun fenestraĵo Rapida Komenco
- **Simpligita Dashboard** fokusita al taskoj de administrado de fitnesa retejo
- **Bonveniga retpoŝta sinsekvo** kiu gvidas klientojn tra ilia unua semajno
- **Niĉ-specifaj helpaj rimedoj** skribitaj por neteknikaj posedantoj de fitnesstudioj
- **Enkondukaj metrikoj** por spuri kaj plibonigi la sperton

---

**Sekva:** [Leciono 9: Prezado por Profito](lesson-9-pricing) -- ni rafinas la prezan strategion por maksimumigi enspezon kaj minimumigi churn.
