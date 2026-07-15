---
title: 'Lectio 6: Experientia inscriptionis'
sidebar_position: 7
_i18n_hash: a5c16cdd9b4e53a69e138df7bb042411
---
# Lectio 6: Experientia Registrationis

Fluxus checkout est ubi studium in reditum vertitur. Processus registrationis confusus aut genericus clientes amittit. Fluxus ad certum genus accommodatus, qui linguam eorum loquitur et facilis videtur, eos convertit.

## Ubi Desivimus {#where-we-left-off}

FitSite exemplaria et consilia configurata habet. Nunc experientiam registrationis et checkout aedificamus, quae dominos gymnasiorum in clientes solventes convertit.

## Intellegere Fluxum Registrationis {#understanding-the-registration-flow}

Formae checkout Ultimate Multisite sunt formae multorum graduum plene configurabiles. Pro FitSite, fluxum volumus qui:

1. Videatur quasi pro negotiis idoneitatis aedificatus sit
2. Tantum colligat quod necessarium est
3. Clientem ad situm operantem quam celerrime perducat

Vide [Fluxus Registrationis](/user-guide/configuration/the-registration-flow) ad plenam relationem technicam.

## Designare Checkout FitSite {#designing-the-fitsite-checkout}

Naviga ad **Ultimate Multisite > Checkout Forms** et novam formam crea.

### Gradus 1: Electio Consilii {#step-1-plan-selection}

Primum quod dominus gymnasii videt consilia esse debent, terminis quos intellegit praesentata.

- Adde campum **Pricing Table**
- Configura ut omnia tria consilia FitSite ostendat
- Descriptiones consiliorum quas in Lectione 5 scripsisti hic apparent -- cura ut ad necessitates negotiorum idoneitatis loquantur, non ad proprietates technicas

:::tip Lingua Generis Interest
"1 GB storage" nihil significat domino palaestrae. "Omnia quae tibi necessaria sunt pro situ interretiali gymnasii professionali" omnia significat. Scribe descriptiones consiliorum lingua clientis tui.
:::

### Gradus 2: Electio Exemplaris {#step-2-template-selection}

Postquam consilium elegit, cliens exemplar initiale eligit.

- Adde campum **Template Selection**
- Exemplaria praesto colantur secundum consilium quod elegerunt (configuratum in Lectione 5)
- Unumquodque exemplar imaginem praevisionis habere debet quae consilium ad idoneitatem pertinens ostendit

### Gradus 3: Creatio Account {#step-3-account-creation}

Hoc minimum serva. Collige tantum:

- Inscriptio electronica
- Tessera
- Nomen gymnasii/negotii (hoc fit nomen situs eorum)

Noli petere informationem qua in registratione non eges. Omnis campus additus conversiones minuit.

### Gradus 4: Configuratio Situs {#step-4-site-setup}

- **Titulus situs**: Praeimple ex nomine gymnasii in Gradu 3 ingressum
- **URL situs**: Genera automatice ex nomine gymnasii (e.g., `ironworks.fitsite.com`)

### Gradus 5: Solutio {#step-5-payment}

- Adde campum **Payment**
- Configura portam solutionis tuam ([Stripe](/user-guide/payment-gateways/stripe) commendatur pro subscriptionis exactione)
- Si order bumps in Lectione 5 creavisti, adde campum **Order Bump** ante gradum solutionis

### Gradus 6: Confirmatio {#step-6-confirmation}

- Nuntium confirmationis lingua ad idoneitatem pertinente personaliza
- Exemplum: "Situs interretialis gymnasii tui creatur. Ad novum situm tuum intra pauca secunda redirigeris."

## Addere Commutationem Electionis Periodi {#adding-a-period-selection-toggle}

Si variationes pretii in consiliis tuis constituisti (menstruae contra annuas), adde campum **Period Selection** formae checkout ut clientes inter periodos exactionis commutare possint. Vide [Formae Checkout](/user-guide/configuration/checkout-forms#adding-a-period-selection-toggle) ad instructiones.

## Configurare Solutio {#configuring-payment}

Si portam solutionis nondum constituisti:

1. Naviga ad **Ultimate Multisite > Settings > Payment Gateways**
2. Sequere [ducem configurationis Stripe](/user-guide/payment-gateways/stripe) aut portam tuam praeferendam
3. Proba fluxum checkout completum cum solutione probatoria

Vide [Solutiones Accipere](/user-guide/payment-gateways/getting-paid) ad singula de quomodo solutiones ad rationem tuam fluant.

## Probatio Fluxus {#testing-the-flow}

Antequam progrediaris, perfice plenam registrationem probatoriam:

1. Aperi formam checkout in fenestra navigatri incognita/privata
2. Elige consilium
3. Elige exemplar
4. Crea Account
5. Perfice solutionem (modo probatorio utere)
6. Verifica situm cum recto exemplari creatum esse

Compesce ut:

- [ ] Descriptiones consiliorum clarae et ad genus pertinentes sint
- [ ] Praevisiones exemplarium consilia idoneitati apta ostendant
- [ ] URL situs recte ex nomine gymnasii generetur
- [ ] Solutio feliciter procedat
- [ ] Cliens in situ operante cum exemplari selecto perveniat
- [ ] Epistulae confirmationis lingua ad idoneitatem pertinente utantur

## Rete FitSite Usque Nunc {#the-fitsite-network-so-far}

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

## Quod Hac Lectione Aedificavimus {#what-we-built-this-lesson}

- **Forma checkout multorum graduum** dominis gymnasiorum accommodata
- **Lingua ad certum genus pertinens** per totum fluxum registrationis
- **Frictio minima** -- tantum campi essentiales, via celeris ad situm operantem
- **Integratio solutionis** cum verificatione probatoria
- **Fluxus ab initio ad finem probatus** a selectione consilii ad situm operantem

---

**Proximum:** [Lectio 7: Facere Ut Tuum Sit](lesson-7-branding) -- suggestum sine marca propria reddimus et FitSite ut notam constituimus.
