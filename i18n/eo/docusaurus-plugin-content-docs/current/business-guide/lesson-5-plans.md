---
title: 'Leciono 5: Projektado de Viaj Planoj'
sidebar_position: 6
_i18n_hash: 8c58dfd0a186bd585f43342bc4ea4f43
---
# Leciono 5: Desegni Viajn Abonplanojn {#lesson-5-designing-your-plans}

Viaj abonplanaj niveloj ne estas nur prezaj niveloj -- ili estas spegulo de kiel viaj niĉaj klientoj efektive funkcias. En ĉi tiu leciono vi desegnos produktajn nivelojn, kiuj kongruas kun la realaj bezonoj de trejnad-komercoj je malsamaj stadioj.

## Kie Ni Ĉesis {#where-we-left-off}

FitSite havas tri ŝablonojn pretajn (Studio Essential, Gym Pro, Fitness Chain). Nun ni kreas la abonplanojn, kiuj determinas al kio klientoj ricevas aliron kaj kion ili pagas.

## Pensado laŭ Klientaj Segmentoj {#thinking-in-customer-segments}

La eraro, kiun plej multaj homoj faras, estas desegni abonplanojn ĉirkaŭ teknikaj funkcioj (stokado, bendolarĝo, nombro de paĝoj). Viaj niĉaj klientoj ne pensas laŭ tiuj terminoj. Gimnastikeja posedanto pensas pri tio, kion ili bezonas por funkciigi sian komercon.

Por trejnad-studioj ekzistas tri naturaj segmentoj:

| Segmento | Kiuj Ili Estas | Kion Ili Bezonas |
|---------|-------------|----------------|
| **Solaj trejnistoj / malgrandaj studioj** | 1-3 laborantoj, unu loko, komencantaj | Profesia retejo, klasaj informoj, kontaktformularo |
| **Establitaj gimnastikejoj** | 5-20 laborantoj, unu loko, kreskantaj | Ĉio supre plus rezervado, blogo, galerio, propra domajno |
| **Trejnad-ĉenoj** | Multoblaj lokoj, establita marko | Ĉio supre plus multretejo, lokaj paĝoj, laborantara dosierujo |

Viaj abonplanoj devas kongrui kun ĉi tiuj segmentoj, ne kun arbitraj funkciaroj.

## Krei la FitSite-Abonplanojn {#creating-the-fitsite-plans}

Navigu al **Ultimate Multisite > Produktoj > Aldoni Produkton** por ĉiu abonplano.

### Abonplano 1: FitSite Starter -- $49/monate {#plan-1-fitsite-starter----49month}

**Celo**: Solaj trejnistoj kaj malgrandaj studioj

**Priskriba langeto**:
- Nomo: FitSite Starter
- Priskribo: "Ĉio, kion persona trejnisto aŭ malgranda studio bezonas por aspekti profesia rete."

**Ĝenerala langeto**:
- Produkta tipo: Abonplano
- Klienta rolo: Administranto

**Retejaj Ŝablonoj langeto**:
- Permesi retejoŝablonojn: Ebligita
- Disponeblaj ŝablonoj: Nur Studio Essential

**Limigoj**:
- Retejoj: 1
- Diskospaco: 1 GB
- Propra domajno: Malebligita (uzas `studioname.fitsite.com`)

**Plugins langeto**:
- Kontaktformulara plugin: Devige Aktivigi
- SEO plugin: Devige Aktivigi
- Rezervada plugin: Ne Disponebla (instigo por altgradigo)

**Themes langeto**:
- Via elektita theme: Devige Aktivigi
- Ĉiuj aliaj themes: Kaŝitaj

### Abonplano 2: FitSite Growth -- $99/monate {#plan-2-fitsite-growth----99month}

**Celo**: Establitaj unulukaj gimnastikejoj

**Priskriba langeto**:
- Nomo: FitSite Growth
- Priskribo: "Por establitaj gimnastikejoj pretaj kreskigi sian retan ĉeeston kaj altiri novajn membrojn."

**Retejaj Ŝablonoj langeto**:
- Disponeblaj ŝablonoj: Studio Essential kaj Gym Pro

**Limigoj**:
- Retejoj: 1
- Diskospaco: 5 GB
- Propra domajno: Ebligita

**Plugins langeto**:
- Ĉio en Starter, plus:
- Rezervada plugin: Devige Aktivigi
- Galeria plugin: Devige Aktivigi
- Bloga funkcieco: Disponebla

**Altgradigoj & Malaltgradigoj langeto**:
- Abonplana grupo: FitSite Plans
- Produkta ordo: 2

### Abonplano 3: FitSite Pro -- $199/monate {#plan-3-fitsite-pro----199month}

**Celo**: Multolokaj trejnad-ĉenoj

**Priskriba langeto**:
- Nomo: FitSite Pro
- Priskribo: "La kompleta platformo por trejnad-markoj kun multoblaj lokoj."

**Retejaj Ŝablonoj langeto**:
- Disponeblaj ŝablonoj: Ĉiuj tri ŝablonoj

**Limigoj**:
- Retejoj: 5 (unu por ĉiu loko)
- Diskospaco: 20 GB
- Propra domajno: Ebligita

**Plugins langeto**:
- Ĉio en Growth, plus:
- Ĉiuj superpagaj plugins: Devige Aktivigi

**Altgradigoj & Malaltgradigoj langeto**:
- Abonplana grupo: FitSite Plans
- Produkta ordo: 3

## Agordi la Abonplanan Grupon {#setting-up-the-plan-group}

La abonplana grupo certigas, ke klientoj povas nur altgradigi aŭ malaltgradigi ene de la FitSite-abonplana familio. En la langeto **Altgradigoj & Malaltgradigoj** de ĉiu abonplano:

1. Agordu la **Abonplanan Grupon** al "FitSite Plans" por ĉiuj tri abonplanoj
2. Agordu la **Produktan Ordon** al 1 (Starter), 2 (Growth), 3 (Pro)

Ĉi tio kreas klaran altgradigan vojon: Starter → Growth → Pro.

## Aldoni Mendaldonojn {#adding-order-bumps}

Mendaldonoj estas aldonaj produktoj ofertataj dum pago. Por FitSite, konsideru:

- **Ekstra Stokada Pako** ($19/monate) -- pliaj 5 GB da diskospaco
- **Prioritata Subteno** ($29/monate) -- pli rapidaj respondtempoj
- **Plia Retejo** ($39/monate) -- por klientoj, kiuj bezonas pli da retejoj ol ilia abonplano permesas

Kreu ĉi tiujn kiel **Pakaĵo**-tipajn produktojn en Ultimate Multisite kaj asociu ilin kun la koncernaj abonplanoj.

## Kial Ĉi Tiu Strukturo Funkcias {#why-this-structure-works}

- **Starter** forigas enirbarojn -- malalta prezo, simpla oferto, rapide enretigas trejnistojn
- **Growth** aldonas la funkciojn, kiujn gimnastikejoj efektive petas -- rezervado, galerioj, propraj domajnoj
- **Pro** servas la altvaloran segmenton, kiu bezonas multolokan subtenon
- **Mendaldonoj** lasas klientojn personecigi sen kompliki la kernajn abonplanojn
- **Klara altgradiga vojo** signifas, ke klientoj kreskas kun vi anstataŭ foriri

## La FitSite-Reto Ĝis Nun {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured)
├── Hosting with wildcard SSL + domain mapping
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products
│   ├── FitSite Starter ($49/mo) → Studio Essential template
│   ├── FitSite Growth ($99/mo) → Studio Essential + Gym Pro templates
│   ├── FitSite Pro ($199/mo) → All templates
│   └── Order Bumps (Extra Storage, Priority Support, Additional Site)
└── Ready for checkout configuration (next lesson)
```

## Kion Ni Konstruis en Ĉi Tiu Leciono {#what-we-built-this-lesson}

- **Tri abonplanaj niveloj** kongruigitaj kun realaj trejnad-komercaj segmentoj
- **Funkcia limigado** uzante la plugin- kaj ŝablonajn kontrolojn de Ultimate Multisite
- **Abonplana grupo** kun klara altgradiga vojo
- **Mendaldonaj produktoj** por plia enspezo
- **Preza strukturo** bazita sur klienta valoro, ne teknikaj specifoj

---

**Sekva:** [Leciono 6: La Aliĝa Sperto](lesson-6-checkout) -- ni konstruas pagofluon, kiu konvertas posedantojn de trejnad-studioj en pagantajn klientojn.
