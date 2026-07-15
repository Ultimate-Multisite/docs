---
title: 'Ders 6: Tecrûbeya Tomarbûnê'
sidebar_position: 7
_i18n_hash: a5c16cdd9b4e53a69e138df7bb042411
---
# Ders 6: Tecrûbeya Tomarbûnê

Herika checkout cihê ku eleqe dibe dahat e. Pêvajoyeke tomarbûnê ya tevlihev an gelemperî mişteriyan winda dike. Herikeke taybet bi nişê, ku bi zimanê wan diaxive û hêsan xuya dike, wan diguherîne mişteriyên dayî.

## Li Ku Derê Mabûn {#where-we-left-off}

FitSite şablon û planan amade kiriye. Niha em tecrûbeya tomarkirin û checkout ava dikin ku xwediyên stûdyoyên fitness dike mişteriyên dayî.

## Têgihiştina Herika Tomarkirinê {#understanding-the-registration-flow}

Formên checkout yên Ultimate Multisite bi tevahî dikarin bêne xweşkirin û pir-gav in. Ji bo FitSite, em herikek dixwazin ku:

1. Wisa hîs bide ku ji bo karsaziyên fitness hatiye çêkirin
2. Tenê tiştên pêwîst kom bike
3. Mişterî herî zû bigihîne wêbsîteyeke dixebite

Ji bo referansa teknîkî ya tevahî, binêre [Herika Tomarkirinê](/user-guide/configuration/the-registration-flow).

## Sêwirandina Checkout ya FitSite {#designing-the-fitsite-checkout}

Biçe **Ultimate Multisite > Checkout Forms** û formeke nû biafirîne.

### Gav 1: Hilbijartina Planê {#step-1-plan-selection}

Tişta yekem ku xwediyê stûdyoya fitness dibîne divê plan bin, bi peyvên ku ew fam dikin hatine pêşkêşkirin.

- Qadeke **Tabloya Nirxan** zêde bike
- Wê saz bike da ku her sê planên FitSite nîşan bide
- Şiroveyên planê ku te di Ders 5 de nivîsîn li vir xuya dibin -- piştrast bike ku ew li gorî pêdiviyên karsaziya fitness diaxivin, ne taybetmendiyên teknîkî

:::tip Zimanê Nişê Girîng e
"1 GB storage" ji bo xwediyê salona sporê tiştek nayê gotin. "Her tiştê ku ji bo malpera stûdyoyeke profesyonel pêwîst e" her tiştê dibêje. Şiroveyên planê bi zimanê mişteriyê xwe binivîse.
:::

### Gav 2: Hilbijartina Şablonê {#step-2-template-selection}

Piştî hilbijartina planê, mişterî şablona destpêkê hilbijêre.

- Qadeke **Hilbijartina Şablonê** zêde bike
- Şablonên berdest li gorî plana ku wan hilbijartiye tên fîltrekirin (di Ders 5 de hate saz kirin)
- Divê her şablon wêneyeke pêşdîtinê hebe ku sêwirandineke taybet bi fitness nîşan bide

### Gav 3: Afirandina Account {#step-3-account-creation}

Vê kêm bihêle. Tenê van kom bike:

- Navnîşana emailê
- Şîfre
- Navê stûdyo/karsaziyê (ev dibe navê wêbsîteya wan)

Di dema tomarbûnê de agahiyên ku pêwîst nînin nexwaze. Her qadeke zêde veguherînê kêm dike.

### Gav 4: Sazkirina Wêbsîteyê {#step-4-site-setup}

- **Sernavê wêbsîteyê**: Ji navê stûdyoyê ku di Gav 3 de hate nivîsîn pêş-dagire
- **URL ya wêbsîteyê**: Ji navê stûdyoyê bixweber çêbike (mînak, `ironworks.fitsite.com`)

### Gav 5: Dayîn {#step-5-payment}

- Qada **Dayîn** zêde bike
- Dergeha dayîna xwe saz bike ([Stripe](/user-guide/payment-gateways/stripe) ji bo hesabkirina subscription tê pêşniyarkirin)
- Ger te di Ders 5 de order bump çêkiribin, berî gava dayînê qadeke **Order Bump** zêde bike

### Gav 6: Pejirandin {#step-6-confirmation}

- Peyama pejirandinê bi zimanê taybet bi fitness xweş bike
- Mînak: "Wêbsîteya stûdyoya fitness ya te tê afirandin. Tu piştî çend çirkeyan dê beralî wêbsîteya xwe ya nû bibî."

## Zêdekirina Guheroka Hilbijartina Demê {#adding-a-period-selection-toggle}

Ger te di planên xwe de cûreyên nirxê saz kiribin (mehane li hember salane), qadeke **Hilbijartina Demê** li forma checkout zêde bike da ku mişterî bikarin di navbera demên hesabkirinê de biguherînin. Ji bo rêberiyan binêre [Formên Checkout](/user-guide/configuration/checkout-forms#adding-a-period-selection-toggle).

## Sazkirina Dayînê {#configuring-payment}

Ger te berê dergeheke dayînê saz nekiriye:

1. Biçe **Ultimate Multisite > Settings > Payment Gateways**
2. Rêbera sazkirina [Stripe](/user-guide/payment-gateways/stripe) an dergeha xwe ya bijartî bişopîne
3. Herikeke checkout ya tevahî bi dayîneke ceribandinê biceribîne

Ji bo hûrguliyên ka dayîn çawa diherikin bo Account a te, binêre [Wergirtina Dayînê](/user-guide/payment-gateways/getting-paid).

## Ceribandina Herikê {#testing-the-flow}

Berî ku derbas bibî, tomarbûneke ceribandinê ya tevahî biqedîne:

1. Forma checkout di paceyeke geroka veşartî/taybet de veke
2. Planek hilbijêre
3. Şablonek hilbijêre
4. Accountek çêbike
5. Dayînê biqedîne (moda ceribandinê bi kar bîne)
6. Piştrast bike ku wêbsîte bi şablona rast hatiye çêkirin

Kontrol bike ku:

- [ ] Şiroveyên planê zelal û taybet bi nişê ne
- [ ] Pêşdîtinên şablonan sêwirandinên guncav ji bo fitness nîşan didin
- [ ] URL ya wêbsîteyê ji navê stûdyoyê rast çêdibe
- [ ] Dayîn bi serkeftî tê pêvajokirin
- [ ] Mişterî li ser wêbsîteyeke dixebite bi şablona hilbijartî dimîne
- [ ] Emailên pejirandinê zimanê taybet bi fitness bi kar tînin

## Tora FitSite Heta Niha {#the-fitsite-network-so-far}

```
Tora FitSite
├── WordPress Multisite (moda subdomain)
├── Ultimate Multisite (sazkirî)
├── Mêvandariyê bi wildcard SSL + nexşandina domain
├── Şablonên Wêbsîteyê (Studio Essential, Gym Pro, Fitness Chain)
├── Hilber (Starter, Growth, Pro + Order Bumps)
├── Herika Checkout
│   ├── Hilbijartina planê bi şiroveyên taybet bi nişê
│   ├── Hilbijartina şablonê bi pêşdîtinên fitness
│   ├── Afirandina Account ya kêm
│   ├── Dayîn bi rêya Stripe
│   └── Pejirandina taybet bi fitness
└── Amade ye ji bo branding (dersa din)
```

## Me Di Vê Dersê De Çi Ava Kir {#what-we-built-this-lesson}

- **Formeke checkout ya pir-gav** ku ji bo xwediyên stûdyoyên fitness hatiye amade kirin
- **Zimanê taybet bi nişê** li seranserê herika tomarbûnê
- **Astengiya kêm** -- tenê qadên bingehîn, rêya lezgîn ber bi wêbsîteyeke dixebite
- **Yekbûna dayînê** bi piştrastkirina ceribandinê
- **Herikeke ji-serî-ta-dawî ceribandî** ji hilbijartina planê heta wêbsîteyeke dixebite

---

**Ya din:** [Ders 7: Kirina Wê Ya Te](lesson-7-branding) -- em platformê white-label dikin û FitSite wek brandek ava dikin.
