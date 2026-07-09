---
title: 'Lehena-lehen: Planak diseinatu'
sidebar_position: 6
_i18n_hash: 8c58dfd0a186bd585f43342bc4ea4f43
---
# Lehen 5: Planak designatu {#lesson-5-designing-your-plans}

Dauplanak (plan tiers) ez dira leialdia prezio-lehiak; horiek da irudi bat da ondo jakoteak non operatzen dute. Hau eskaera-an, produktu planak designatu dugu eta horrek fitness negozioen beharrak errealetan batzuk.

## Nond dagoela dutena {#where-we-left-off}

FitSite-ek tresna bat (Studio Essential, Gym Pro, Fitness Chain) lehen daude. Aurrera egin dugu planak diseinatzeko eta horiek erabiltzaileei zer ematen dio eta zer ordaintzen dute.

## Klientzia segmentazioan irrendatzea {#thinking-in-customer-segments}

Gehienduak egiten duen ezagutza-ezkoa da planak tekniko aukeretan (storage, bandwidth, zeinetarako lapurtu) diseinatu. Hau eskaera-lehiak hori ez du jakiteke horrek. Gym negozioaren dueñoa bere negozioa funtzionatzeko beharrak ez du horrek.

Fitness studioetko kasuetan, segmentazio natural bat dago:

| Segmentu | Zer dira? | Zer behar dute? |
|---|---|---|
| **Trainer solo / studio txikiak** | 1-3 eragile, leku bat, irudiak egiten hasten jakin | Saila profesionala, klase informazioa, kontaktua forma |
| **Gymak etablatutakoak** | 5-20 eragile, leku bat, aukeratzen ari dira | Abalu guztia eta bestelakoak, reservatu, blog, galeria, domain pribatu |
| **Fitness cadenaak** | Lehean jakin, brand etablatua | Abalu guztia eta bestelakoak, multi-site, lekuak lapurtuak, eragile batzueko lista |

Planak hauek ez du zerbait aukeraren paketea (feature bundles) edo eskaera-lehiak ere, baina segmentu horiek mapatu behar dira.

## FitSite Planak emateko {#creating-the-fitsite-plans}

Lehen planari, **Ultimate Multisite > Products > Add Product** funtziokoan jarraitu.

### Plan 1: FitSite Starter -- $49/month {#plan-1-fitsite-starter----49month}

**Plan 1: FitSite Starter**

**Target**: Solo trainers eta studioak txikiak.

**Description tab**:
- **Izena**: FitSite Starter
- **Deskribapena**: "Personal trainer edo studiotik behar dituen guztia profesional online irizten."

**General tab**:
- **Produktu bidea**: Plan
- **Kunde rola**: Administrator

**Site Templates tab**:
- **Site templateak emateko**: On
- **Emateko templateak**: Studio Essential batek

**Limitazioak**:
- **Siteak**: 1
- **Diska espazioa**: 1 GB
- **Custom domain**: Deshabilitatuta (studioname.fitsite.com erabiltzen da)

**Plugins tab**:
- **Contact form plugin**: Force Activate
- **SEO plugin**: Force Activate
- **Booking plugin**: Ez dago emateko (upgrade eragiketa)

**Themes tab**:
- **Itxarri duela themeak**: Force Activate
- **Bestelako themeak**: Gizatuta

### Plan 2: FitSite Growth -- $99/month {#plan-2-fitsite-growth----99month}

**Target**: Gym bat dauden etorri eta establizatuak.

**Description tab**:
- **Izena**: FitSite Growth
- **Deskribapena**: "Online presentazioa handitu eta new memberak aurkitzea irakurri duela establizatu gym-ek.

**Site Templates tab**:
- **Emateko templateak**: Studio Essential eta Gym Pro

**Limitazioak**:
- **Siteak**: 1
- **Diska espazioa**: 5 GB
- **Custom domain**: Emateko

**Plugins tab**:
- Starter-eko guztia, beste:
- **Booking plugin**: Force Activate
- **Gallery plugin**: Force Activate
- **Blog funcionalidad**: Emateko

**Up & Downgrades tab**:
- **Plan grupua**: FitSite Plans
- **Produktu ordenak**: 2

### Plan 3: FitSite Pro -- $199/month {#plan-3-fitsite-pro----199month}

**Target**: Fitness cadena bat dauden etorri eta establizatuak.

**Description tab**:
- **Izena**: FitSite Pro
- **Deskribapena**: "Multiple lokazio edozein fitness brand-ek beste plataforma batek."

**Site Template tab**:
- Available templates: All three templates

**Limitazioak**:
- Sites: 5 (bat bat jardunari)
- Disk space: 20 GB
- Custom domain: Aktiboa

**Plugins tab**:
- Growth-eko guztia, berria:
- Premium plugin guztiek: Force Activate

**Up & Downgrades tab**:
- Plan group: FitSite Plans
- Product order: 3

## Plan Group-aren Konfigurazioa Erdatzea {#setting-up-the-plan-group}

Plan group-ek irudiak (customers) FitSite plan familiaren belu edo handi egin dezaten. Plan baten **Up & Downgrades** taban:

1. **Plan Group**-a "FitSite Plans" den bat daiteko ematezu guztiz plan guztietan
2. **Product Order**-a 1 (Starter), 2 (Growth), 3 (Pro) den bat daiteko ematezu

Honek irudiak argi eskaintzen du: Starter → Growth → Pro.

## Order Bumps Lehen Additzenak {#adding-order-bumps}

Order bumps hauek checkout-aren aurrera egitean ematen diren produktu horriak dira. FitSite-ren kasuetan, hiri duzu:

- **Extra Storage Pack** ($19/month) -- disk space 5 GB gehiago
- **Priority Support** ($29/month) -- hasten iriduratzen erantzunak
- **Additional Site** ($39/month) -- planaren eskaintzen duen garrantziaren siteak behar dituzten kasuak

Honek Ultimate Multisite-an **Package** tipiko produktuak bezala sortu eta planak errespetatzen diren beste planakarekin lotu.

## Nola Horri Strukturak Eguna Zaharra da {#why-this-structure-works}

- **Starter** eliminatzen da erabilera ezarriak — txiki prezioa, simple oferta, trainer-ek azkenean online jarraitzen dute.
- **Growth** jodez egiten duen funtunalitatea jodez egiten dituzte — bestelako, galdera, custom domainak.
- **Pro** da iragailu behar duen hautue oso garrantzitsuak segmentuari, zein bat plurality (multi-location) suporta behar dute.
- **Order bumps** lekuak erabiltzen dituzte bezala, core planak ez distirabide egiten jardutzeko.
- **Upgrade path iragailu** da, horrek iragailuak jartzean joaten aukera ematen du, ez berarte aukerarekin laguntzen.

## FitSite Networka Zer da Euskal? {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (konfiguratu)
├── Hosting wildcard SSL + domain mapping
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products
│   ├── FitSite Starter ($49/mo) → Studio Essential template
│   ├── FitSite Growth ($99/mo) → Studio Essential + Gym Pro templates
│   ├── FitSite Pro ($199/mo) → All templates
│   └── Order Bumps (Extra Storage, Priority Support, Additional Site)
└── Ready for checkout configuration (next lesson)
```

## Zer Ezauzu Zurean Erakunde? {#what-we-built-this-lesson}

- **Plan tres lehenak** erreal fitness biztsuetako segmentuetan mapatu dituzte.
- **Funktunalitatea batzen emateko kontrola** Ultimate Multisite plugin eta template kontrollak erabiliz.
- **Plan bat grupua** dago, iragailuak jartzean aukera iragailu du.
- **Order bump produkzioak** horrek diruidura gehiago hartzeko.
- **Prezio struktura bat**, tekniko espezifikazioetan ez, baina kliantaren arloari (value) erantzuten.

**Hitzak:** [Lehen 6: Esperientziaren Kontseputua](lesson-6-checkout) -- bizitzaren studio nagusiak konvertizatu eta ordaindian jarraitzen iruztelako talde horiek bizitoriak ordaintzeko sistema bat gaurkatu.
