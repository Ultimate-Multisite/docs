---
title: 'Leciono 6: La Aliĝa Sperto'
sidebar_position: 7
_i18n_hash: a5c16cdd9b4e53a69e138df7bb042411
---
# Leciono 6: La Registriĝa Sperto

La checkout fluo estas kie intereso fariĝas enspezo. Konfuza aŭ ĝenerala registriĝa procezo perdas klientojn. Niĉospecifa fluo, kiu parolas ilian lingvon kaj sentiĝas senpena, konvertas ilin.

## Kie Ni Ĉesis {#where-we-left-off}

FitSite havas ŝablonojn kaj planojn agorditajn. Nun ni konstruas la registriĝan kaj checkout sperton, kiu transformas posedantojn de trejnstudioj en pagantajn klientojn.

## Kompreni la Registriĝan Fluon {#understanding-the-registration-flow}

La checkout formularoj de Ultimate Multisite estas plene agordeblaj plurpaŝaj formularoj. Por FitSite, ni volas fluon kiu:

1. Sentiĝas kvazaŭ ĝi estis konstruita por trejnaj entreprenoj
2. Kolektas nur tion, kio estas bezonata
3. Kondukas la klienton al funkcianta retejo kiel eble plej rapide

Vidu [La Registriĝa Fluo](/user-guide/configuration/the-registration-flow) por la plena teknika referenco.

## Dezajni la FitSite Checkout {#designing-the-fitsite-checkout}

Iru al **Ultimate Multisite > Checkout Forms** kaj kreu novan formularon.

### Paŝo 1: Elekto de Plano {#step-1-plan-selection}

La unua afero, kiun posedanto de trejnstudio vidas, devus esti la planoj, prezentitaj per terminoj kiujn ili komprenas.

- Aldonu kampon **Pricing Table**
- Agordu ĝin por montri ĉiujn tri FitSite-planojn
- La planpriskriboj, kiujn vi verkis en Leciono 5, aperas ĉi tie -- certigu, ke ili parolas al bezonoj de trejnaj entreprenoj, ne al teknikaj funkcioj

:::tip Gravas Niĉa Lingvaĵo
"1 GB storage" signifas nenion al gimnastikeja posedanto. "Ĉio, kion vi bezonas por profesia studia retejo" signifas ĉion. Skribu planpriskribojn en la lingvo de via kliento.
:::

### Paŝo 2: Elekto de Ŝablono {#step-2-template-selection}

Post elekti planon, la kliento elektas sian komencan ŝablonon.

- Aldonu kampon **Template Selection**
- La disponeblaj ŝablonoj estas filtritaj laŭ la plano, kiun ili elektis (agordite en Leciono 5)
- Ĉiu ŝablono devus havi antaŭrigardan bildon montrantan trejnospecifan dezajnon

### Paŝo 3: Kreado de Account {#step-3-account-creation}

Tenu ĉi tion minimuma. Kolektu nur:

- Retpoŝtadreson
- Pasvorton
- Nomon de studio/entrepreno (ĉi tio fariĝas ilia reteja nomo)

Ne petu informojn, kiujn vi ne bezonas ĉe registriĝo. Ĉiu ekstra kampo reduktas konvertiĝojn.

### Paŝo 4: Agordo de Retejo {#step-4-site-setup}

- **Reteja titolo**: Antaŭplenigu el la studionomo enigita en Paŝo 3
- **Reteja URL**: Aŭtomate generu el la studionomo (ekz., `ironworks.fitsite.com`)

### Paŝo 5: Pago {#step-5-payment}

- Aldonu la kampon **Payment**
- Agordu vian pagopordon ([Stripe](/user-guide/payment-gateways/stripe) estas rekomendata por abonfakturigo)
- Se vi kreis mendajn aldonofertojn en Leciono 5, aldonu kampon **Order Bump** antaŭ la paga paŝo

### Paŝo 6: Konfirmo {#step-6-confirmation}

- Agordu la konfirman mesaĝon per trejnospecifa lingvaĵo
- Ekzemplo: "Via retejo por trejnstudio estas kreata. Vi estos alidirektita al via nova retejo post kelkaj sekundoj."

## Aldoni Ŝaltilon por Elekto de Periodo {#adding-a-period-selection-toggle}

Se vi starigis prezajn variaĵojn en viaj planoj (monata kontraŭ jara), aldonu kampon **Period Selection** al la checkout formularo por ke klientoj povu ŝalti inter fakturaj periodoj. Vidu [Checkout Forms](/user-guide/configuration/checkout-forms#adding-a-period-selection-toggle) por instrukcioj.

## Agordi Pagon {#configuring-payment}

Se vi ankoraŭ ne starigis pagopordon:

1. Iru al **Ultimate Multisite > Settings > Payment Gateways**
2. Sekvu la [agordan gvidilon de Stripe](/user-guide/payment-gateways/stripe) aŭ vian preferatan pagopordon
3. Testu kompletan checkout fluon per testa pago

Vidu [Ricevi Pagon](/user-guide/payment-gateways/getting-paid) por detaloj pri kiel pagoj fluas al via konto.

## Testi la Fluon {#testing-the-flow}

Antaŭ ol pluiri, kompletigu plenan testan registriĝon:

1. Malfermu la checkout formularon en inkognita/privata retumila fenestro
2. Elektu planon
3. Elektu ŝablonon
4. Kreu konton
5. Kompletigu pagon (uzu testan reĝimon)
6. Kontrolu, ke la retejo estas kreita kun la ĝusta ŝablono

Kontrolu ke:

- [ ] Planpriskriboj estas klaraj kaj niĉospecifaj
- [ ] Ŝablonaj antaŭrigardoj montras trejntaŭgajn dezajnojn
- [ ] La reteja URL generiĝas ĝuste el la studionomo
- [ ] Pago procesiĝas sukcese
- [ ] La kliento alvenas al funkcianta retejo kun la elektita ŝablono
- [ ] Konfirmaj retpoŝtoj uzas trejnospecifan lingvaĵon

## La FitSite-Reto Ĝis Nun {#the-fitsite-network-so-far}

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

## Kion Ni Konstruis en Ĉi Tiu Leciono {#what-we-built-this-lesson}

- **Plurpaŝa checkout formularo** adaptita al posedantoj de trejnstudioj
- **Niĉospecifa lingvaĵo** tra la tuta registriĝa fluo
- **Minimuma frikcio** -- nur esencaj kampoj, rapida vojo al funkcianta retejo
- **Paga integriĝo** kun testa kontrolo
- **Testita kompleta fluo** de planelekto ĝis funkcianta retejo

---

**Sekva:** [Leciono 7: Fari Ĝin Via](lesson-7-branding) -- ni white-label la platformon kaj establas FitSite kiel markon.
