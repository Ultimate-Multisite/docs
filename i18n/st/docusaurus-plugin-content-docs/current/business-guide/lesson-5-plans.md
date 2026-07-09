---
title: 'Thuto ea 5: Ho rala merero ea hao'
sidebar_position: 6
_i18n_hash: 8c58dfd0a186bd585f43342bc4ea4f43
---
# Thuto ea 5: Ho Rala Merero ea Hao {#lesson-5-designing-your-plans}

Mehato ea merero ea hao ha se maemo a litheko feela -- ke pontšo ea kamoo bareki ba niche ea hao ba sebetsang kateng ka nnete. Thutong ena o tla rala mehato ea sehlahisoa e lumellanang le litlhoko tsa sebele tsa likhoebo tsa boikoetliso maemong a fapaneng.

## Moo re Ileng ra Emisa Teng {#where-we-left-off}

FitSite e na le dithempleite tse tharo tse lokileng (Studio Essential, Gym Pro, Fitness Chain). Jwale re bopa merero e hlalosang seo bareki ba fumanang phihlello ho sona le seo ba se lefang.

## Ho Nahana ka Dikgolo tsa Bareki {#thinking-in-customer-segments}

Phoso eo batho ba bangata ba e etsang ke ho rala merero ho ya ka dikarolo tsa tekheniki (polokelo, bandwidth, palo ya maqephe). Bareki ba niche ya hao ha ba nahane ka mantswe ao. Mong wa gym o nahana ka seo a se hlokang ho tsamaisa kgwebo ya hae.

Bakeng sa distudio tsa boikoetliso, ho na le dikgolo tse tharo tsa tlhaho:

| Karolo | Hore na ke Bomang | Seo ba se Hlokang |
|---------|-------------|----------------|
| **Bakoetlisi ba ikemetseng / distudio tse nyane** | Basebetsi ba 1-3, sebaka se le seng, ba qala | Site ya profeshenale, lesedi la dithuto, foromo ya kgokahano |
| **Di-gym tse seng di thehilwe** | Basebetsi ba 5-20, sebaka se le seng, di a hola | Tsohle tse ka hodimo hammoho le booking, blog, gallery, custom domain |
| **Diketane tsa fitness** | Dibaka tse ngata, brand e thehilweng | Tsohle tse ka hodimo hammoho le multi-site, maqephe a dibaka, lenane la basebetsi |

Merero ya hao e lokela ho tsamaellana le dikgolo tsena, eseng diphutheloana tsa dikarolo tse ikgethetseng feela.

## Ho Bopa Merero ya FitSite {#creating-the-fitsite-plans}

Eya ho **Ultimate Multisite > Products > Add Product** bakeng sa morero ka mong.

### Morero wa 1: FitSite Starter -- $49/khoeli {#plan-1-fitsite-starter----49month}

**Sepheo**: Bakoetlisi ba ikemetseng le distudio tse nyane

**Thebo ya tlhaloso**:
- Lebitso: FitSite Starter
- Tlhaloso: "Tsohle tseo mokoetlisi wa botho kapa studio se senyane se di hlokang hore se bonahale se le profeshenale inthaneteng."

**Thebo ya kakaretso**:
- Mofuta wa sehlahisoa: Morero
- Karolo ya moreki: Administrator

**Thebo ya dithempleite tsa site**:
- Dumella dithempleite tsa site: Enabled
- Dithempleite tse fumanehang: Studio Essential feela

**Meedi**:
- Di-site: 1
- Sebaka sa disk: 1 GB
- Custom domain: Disabled (e sebedisa `studioname.fitsite.com`)

**Thebo ya di-plugin**:
- Plugin ya foromo ya kgokahano: Force Activate
- Plugin ya SEO: Force Activate
- Plugin ya booking: Not Available (kgothaletso ya ntlafatso)

**Thebo ya themes**:
- Theme eo o e kgethileng: Force Activate
- Themes tsohle tse ding: Hidden

### Morero wa 2: FitSite Growth -- $99/khoeli {#plan-2-fitsite-growth----99month}

**Sepheo**: Di-gym tse thehilweng tse nang le sebaka se le seng

**Thebo ya tlhaloso**:
- Lebitso: FitSite Growth
- Tlhaloso: "Bakeng sa di-gym tse thehilweng tse loketseng ho hodisa boteng ba tsona inthaneteng le ho hohela ditho tse ntjha."

**Thebo ya dithempleite tsa site**:
- Dithempleite tse fumanehang: Studio Essential le Gym Pro

**Meedi**:
- Di-site: 1
- Sebaka sa disk: 5 GB
- Custom domain: Enabled

**Thebo ya di-plugin**:
- Tsohle tse ho Starter, hammoho le:
- Plugin ya booking: Force Activate
- Plugin ya gallery: Force Activate
- Tshebetso ya blog: Available

**Thebo ya Up & Downgrades**:
- Sehlopha sa morero: FitSite Plans
- Tatelano ya sehlahisoa: 2

### Morero wa 3: FitSite Pro -- $199/khoeli {#plan-3-fitsite-pro----199month}

**Sepheo**: Diketane tsa fitness tse nang le dibaka tse ngata

**Thebo ya tlhaloso**:
- Lebitso: FitSite Pro
- Tlhaloso: "Sethala se felletseng bakeng sa di-brand tsa fitness tse nang le dibaka tse ngata."

**Thebo ya dithempleite tsa site**:
- Dithempleite tse fumanehang: Dithempleite tsohle tse tharo

**Meedi**:
- Di-site: 5 (e le nngwe bakeng sa sebaka ka seng)
- Sebaka sa disk: 20 GB
- Custom domain: Enabled

**Thebo ya di-plugin**:
- Tsohle tse ho Growth, hammoho le:
- Di-plugin tsohle tsa premium: Force Activate

**Thebo ya Up & Downgrades**:
- Sehlopha sa morero: FitSite Plans
- Tatelano ya sehlahisoa: 3

## Ho Hlophisa Sehlopha sa Morero {#setting-up-the-plan-group}

Sehlopha sa morero se netefatsa hore bareki ba ka ntlafatsa kapa ba theohela feela kahare ho lelapa la merero ya FitSite. Ho thebo ya **Up & Downgrades** ya morero ka mong:

1. Beha **Plan Group** ho "FitSite Plans" bakeng sa merero yohle e meraro
2. Beha **Product Order** ho 1 (Starter), 2 (Growth), 3 (Pro)

Sena se bopa tsela e hlakileng ya ntlafatso: Starter → Growth → Pro.

## Ho Kenya Order Bumps {#adding-order-bumps}

Order bumps ke dihlahisoa tsa tlatsetso tse fanoang nakong ya checkout. Bakeng sa FitSite, nahana ka:

- **Pakete ya Polokelo e Eketsehileng** ($19/khoeli) -- sebaka se eketsehileng sa disk sa 5 GB
- **Tshehetso ya Pele** ($29/khoeli) -- dinako tsa karabo tse potlakileng
- **Site e Eketsehileng** ($39/khoeli) -- bakeng sa bareki ba hlokang di-site tse ngata ho feta kamoo morero wa bona o dumellang

Bopa tsena e le dihlahisoa tsa mofuta wa **Package** ho Ultimate Multisite mme o di amahanye le merero e amehang.

## Hobaneng Sebopeho Sena se Sebetsa {#why-this-structure-works}

- **Starter** e tlosa dithibelo tsa ho kena -- theko e tlase, nyehelo e bonolo, e kenya bakoetlisi inthaneteng kapele
- **Growth** e eketsa dikarolo tseo di-gym di hlileng di di kopang -- booking, galleries, custom domains
- **Pro** e sebeletsa karolo ya boleng bo phahameng e hlokang tshehetso ya dibaka tse ngata
- **Order bumps** di dumella bareki ho iketsetsa ntle le ho rarahana merero ya mantlha
- **Tsela e hlakileng ya ntlafatso** e bolela hore bareki ba hola le wena ho ena le ho tloha

## Network ya FitSite Ho Fihlela Jwale {#the-fitsite-network-so-far}

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

## Seo re se Hahileng Thutong Ena {#what-we-built-this-lesson}

- **Mehato e meraro ya merero** e tsamaellanang le dikarolo tsa kgwebo ya boikoetliso tsa sebele
- **Ho thibela dikarolo** ho sebedisa ditaolo tsa plugin le template tsa Ultimate Multisite
- **Sehlopha sa morero** se nang le tsela e hlakileng ya ntlafatso
- **Dihlahisoa tsa order bump** bakeng sa lekeno le eketsehileng
- **Sebopeho sa ditheko** se itshetlehileng hodima boleng ba moreki, eseng dintlha tsa tekheniki

---

**E latelang:** [Thuto ea 6: Boiphihlelo ba ho Ingodisa](lesson-6-checkout) -- re haha phallo ya checkout e fetolang beng ba distudio tsa boikoetliso hore e be bareki ba lefang.
