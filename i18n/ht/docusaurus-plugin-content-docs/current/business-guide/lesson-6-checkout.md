---
title: 'Leson 6: Eksperyans Enskripsyon an'
sidebar_position: 7
_i18n_hash: a5c16cdd9b4e53a69e138df7bb042411
---
# Leson 6: Eksperyans Enskripsyon an

Pwosesis checkout la se kote enterè vin tounen revni. Yon pwosesis enskripsyon ki konfizyon oswa twò jeneral fè w pèdi kliyan. Yon pwosesis ki espesifik pou nich la, ki pale lang yo epi ki sanble fasil, konvèti yo.

## Kote Nou Te Rete {#where-we-left-off}

FitSite gen modèl ak plan ki konfigire. Kounye a nou konstwi eksperyans enskripsyon ak checkout la ki fè pwopriyetè estidyo fitness yo vin tounen kliyan k ap peye.

## Konprann Pwosesis Enskripsyon an {#understanding-the-registration-flow}

Fòm checkout Ultimate Multisite yo se fòm milti-etap ki konplètman personnalisable. Pou FitSite, nou vle yon pwosesis ki:

1. Santi tankou li te konstwi pou biznis fitness yo
2. Kolekte sèlman sa ki nesesè
3. Fè kliyan an rive sou yon sit k ap fonksyone pi vit posib

Gade [Pwosesis Enskripsyon an](/user-guide/configuration/the-registration-flow) pou referans teknik konplè a.

## Konsepsyon Checkout FitSite la {#designing-the-fitsite-checkout}

Navige nan **Ultimate Multisite > Checkout Forms** epi kreye yon nouvo fòm.

### Etap 1: Seleksyon Plan {#step-1-plan-selection}

Premye bagay yon pwopriyetè estidyo fitness ta dwe wè se plan yo, prezante ak tèm yo konprann.

- Ajoute yon chan **Pricing Table**
- Konfigire li pou montre tout twa plan FitSite yo
- Deskripsyon plan ou te ekri nan Leson 5 lan parèt isit la -- asire yo pale ak bezwen biznis fitness, pa karakteristik teknik

:::tip Niche Language Matters
"1 GB storage" means nothing to a gym owner. "Everything you need for a professional studio website" means everything. Write plan descriptions in your customer's language.
:::

### Etap 2: Seleksyon Modèl {#step-2-template-selection}

Apre kliyan an chwazi yon plan, li chwazi modèl depa li.

- Ajoute yon chan **Template Selection**
- Modèl ki disponib yo filtre dapre plan yo te chwazi a (ki konfigire nan Leson 5)
- Chak modèl ta dwe gen yon imaj aperçu ki montre yon konsepsyon espesifik pou fitness

### Etap 3: Kreyasyon Account {#step-3-account-creation}

Kenbe sa minimal. Kolekte sèlman:

- Adrès imèl
- Modpas
- Non estidyo/biznis (sa vin non sit yo)

Pa mande enfòmasyon ou pa bezwen nan moman enskripsyon an. Chak chan anplis diminye konvèsyon yo.

### Etap 4: Konfigirasyon Sit {#step-4-site-setup}

- **Tit sit**: Ranpli davans apati non estidyo a ki antre nan Etap 3
- **URL sit**: Jenere otomatikman apati non estidyo a (pa egzanp, `ironworks.fitsite.com`)

### Etap 5: Peman {#step-5-payment}

- Ajoute chan **Payment** lan
- Konfigire pasrèl peman ou an ([Stripe](/user-guide/payment-gateways/stripe) rekòmande pou faktirasyon abònman)
- Si ou te kreye order bumps nan Leson 5, ajoute yon chan **Order Bump** anvan etap peman an

### Etap 6: Konfimasyon {#step-6-confirmation}

- Customize mesaj konfimasyon an ak langaj espesifik pou fitness
- Egzanp: "Sit entènèt estidyo fitness ou a ap kreye. Yo pral redirije w sou nouvo sit ou a nan kèk segonn."

## Ajoute yon Bouton Seleksyon Peryòd {#adding-a-period-selection-toggle}

Si ou mete varyasyon pri nan plan ou yo (chak mwa kont chak ane), ajoute yon chan **Period Selection** nan fòm checkout la pou kliyan yo ka chanje ant peryòd faktirasyon yo. Gade [Fòm Checkout](/user-guide/configuration/checkout-forms#adding-a-period-selection-toggle) pou enstriksyon yo.

## Konfigire Peman {#configuring-payment}

Si ou poko mete yon pasrèl peman:

1. Navige nan **Ultimate Multisite > Settings > Payment Gateways**
2. Swiv [gid konfigirasyon Stripe la](/user-guide/payment-gateways/stripe) oswa pasrèl ou prefere a
3. Teste yon pwosesis checkout konplè ak yon peman tès

Gade [Resevwa Peman](/user-guide/payment-gateways/getting-paid) pou detay sou fason peman yo koule nan account ou.

## Teste Pwosesis la {#testing-the-flow}

Anvan ou kontinye, konplete yon enskripsyon tès konplè:

1. Louvri fòm checkout la nan yon fenèt navigatè incognito/prive
2. Chwazi yon plan
3. Chwazi yon modèl
4. Kreye yon account
5. Konplete peman (itilize mòd tès)
6. Verifye sit la kreye ak modèl ki kòrèk la

Tcheke ke:

- [ ] Deskripsyon plan yo klè epi espesifik pou nich la
- [ ] Aperçu modèl yo montre konsepsyon ki apwopriye pou fitness
- [ ] URL sit la jenere kòrèkteman apati non estidyo a
- [ ] Peman trete avèk siksè
- [ ] Kliyan an rive sou yon sit k ap fonksyone ak modèl li te chwazi a
- [ ] Imèl konfimasyon yo itilize langaj espesifik pou fitness

## Rezo FitSite la Jiskaprezan {#the-fitsite-network-so-far}

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

## Sa Nou Konstwi Nan Leson Sa a {#what-we-built-this-lesson}

- **Yon fòm checkout milti-etap** ki adapte pou pwopriyetè estidyo fitness yo
- **Langaj espesifik pou nich la** atravè tout pwosesis enskripsyon an
- **Friksyon minimòm** -- sèlman chan esansyèl, chemen rapid pou rive sou yon sit k ap fonksyone
- **Entegrasyon peman** ak verifikasyon tès
- **Yon pwosesis bout-an-bout ki teste** soti nan seleksyon plan rive sou sit k ap fonksyone

---

**Apre sa:** [Leson 7: Fè Li Pou Ou](lesson-7-branding) -- nou mete platfòm nan an white-label epi etabli FitSite kòm yon mak.
