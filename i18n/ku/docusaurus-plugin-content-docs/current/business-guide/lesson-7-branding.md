---
title: 'Ders 7: Wê ya xwe bike'
sidebar_position: 8
_i18n_hash: 90013fc79a9cbb15283ce89b688002b1
---
# Ders 7: Wê Bike ya Xwe {#lesson-7-making-it-yours}

Mişteriyên te divê qet hest nekin ku ew "tenê plugin-ekî WordPress" bi kar tînin. Divê hest bikin ku ew FitSite bi kar tînin -- platformek ku ji bo sektora wan hatiye çêkirin. Ev ders li ser avakirina markeyê, white-label kirin, û çêkirina hestê ku platform wek hilberek e diaxive.

## Em Li Ku Derê Mabûn {#where-we-left-off}

FitSite niha checkout flow-ek dixebite heye ku xwediyên stûdyoyên fitness ji hilbijartina planê dibe malperek zindî. Niha em tevahiya ezmûnê dikin ku wek hilberek yekgirtî û bi marke xuya bike.

## Domain-a Platforma Te {#your-platform-domain}

Bingeha markeya te domain-a te ye. Ji bo FitSite:

- **Domain-a sereke**: `fitsite.com` (malpera marketing-a te û rehê torê)
- **Malperên mişteriyan**: `studioname.fitsite.com` (subdomain)
- **Domain-ên taybet**: Mişteriyên li ser planên Growth û Pro dikarin domain-a xwe girê bidin

### Sazkirina Domain-a Te {#setting-up-your-domain}

1. Domain-a platforma xwe tomar bike
2. Wê ber bi dabînkerê hosting-a xwe ve bike
3. Ji bo subdomain-ên mişteriyan wildcard DNS (`*.fitsite.com`) saz bike
4. Piştrast bike ku wildcard SSL çalak e

Ji bo rêwerzên hûrgilî binêre [Çawa Domain Mapping Saz Bikî](/user-guide/domain-mapping/how-to-configure-domain-mapping).

## White-Label Kirina Ezmûna Admin {#white-labeling-the-admin-experience}

Dema xwediyê stûdyoya fitness têkeve dashboard-a malpera xwe, divê markeya te bibîne, ne markeya WordPress an Ultimate Multisite.

### Rûpela Login-a Taybet {#custom-login-page}

Rûpela login-a WordPress-ê taybet bike da ku van nîşan bide:

- Logoya FitSite-a te
- Wêneyên paşxanê yên guncaw ji bo fitness
- Rengên markeya te

### Markekirina Dashboard {#dashboard-branding}

Addon-a [Afirînerê Rûpela Admin](/addons/admin-page-creator) an CSS-a taybet bi kar bîne da ku:

- Logoya WordPress-ê bi logoya FitSite-a xwe biguherînî
- Pergala rengên adminê li gorî markeya xwe taybet bikî
- Widget-ekî dashboard-a taybet zêde bikî bi girêdanên zû û çavkaniyên alîkariyê yên taybet ji bo fitness

### Rûpelên Admin ên Taybet {#custom-admin-pages}

Bifikire ku rûpelên admin ên taybet çêkî ku kiryarên herî girîng ji bo xwediyên stûdyoyên fitness derxin pêş:

- "Bernameya Dersên Xwe Biguherîne"
- "Profîlên Rahêneran Nû Bike"
- "Malpera Xwe Bibîne"

Ev kêşana fêrbûnê kêm dike, ji ber ku kiryarên girêdayî nîşê rasterast tîne pêş, ne ku wan di menuya standard a WordPress-ê de veşêre.

## Markekirina Peywendiyên Te {#branding-your-communications}

Her email, fatûre, û agahdarî divê markeya te bihêz bike.

### Email-ên Sîstemê {#system-emails}

Biçe **Ultimate Multisite > Settings > Emails** û hemû email-ên sîstemê taybet bike:

- **Navê şander**: FitSite
- **Email-a şander**: hello@fitsite.com
- **Şablonên emailê**: Rengên markeya xwe û logo bi kar bîne
- **Ziman**: Li hemû cihan taybet ji bo fitness

Email-ên girîng ku divê taybet bibin:

| Email | Guhertoya Giştî | Guhertoya FitSite |
|-------|----------------|-----------------|
| Bi xêr hatî | "Malpera te ya nû amade ye" | "Malpera stûdyoya fitness-a te zindî ye" |
| Piştrastkirina dravdanê | "Drav hat wergirtin" | "Dravdana subscription-a FitSite hate piştrastkirin" |
| Dawiya trial | "Trial-a te nêzîk e bi dawî bibe" | "Trial-a FitSite-a te di 3 rojan de bi dawî dibe -- malpera stûdyoya xwe zindî bihêle" |

### Fatûre {#invoices}

Şablonên fatûreyê bi van tiştan taybet bike:

- Logoya FitSite-a te û rengên markeyê
- Hûrgiliyên karsaziya te
- Navên hilberên taybet ji bo fitness (ne ID-yên planên giştî)

## Malpera Ji Bo Mişteriyan {#the-customer-facing-site}

Domain-a sereke ya te (`fitsite.com`) hewceyî malperek marketingê ye ku platformê bifiroşe. Ev ji admin-a tora Ultimate Multisite cuda ye -- ew rûyê giştî yê karsaziya te ye.

Rûpelên girîng:

- **Rûpela malê**: Pêşniyara nirxê ya zelal ji bo karsaziyên fitness
- **Taybetmendî**: FitSite çi dike, bi gotinên fitness
- **Nirxandin**: Sê planên te bi berawirdên taybetmendiyan ên taybet ji bo nîşê
- **Mînak**: Malperên li ser platformê hatine çêkirin nîşan bide
- **Tomar Bibe**: Girêdanên forma checkout-a te

:::tip Malpera Marketing-a Te Dikare Malperek Torê Be
Malpera marketing-a xwe wek malperek di hundirê tora xwe de çêbike. Ev dihêle ku tu wê ji heman dashboard-ê rêve bibî û şiyanên platforma xwe nîşan bidî.
:::

## Domain-a Taybet Ji Bo Mişteriyan {#custom-domain-for-customers}

Ji bo mişteriyên li ser planên ku domain-ên taybet dihewînin, pêvajoyê bi zelalî belge bike:

1. Mişterî domain-a xwe li registrar-ekê tomar dike an vediguhezîne
2. Mişterî DNS nû dike da ku ber bi platforma te ve bike (tomarên rast dabîn bike)
3. Ultimate Multisite domain mapping û SSL birêve dibe

Ji bo vê pêvajoyê gotarek alîkariyê an nivîsek knowledge base çêbike, ku ji bo xwediyên stûdyoyên fitness ên ne-teknîkî hatiye nivîsîn.

## Tora FitSite Heta Niha {#the-fitsite-network-so-far}

```
Tora FitSite
├── WordPress Multisite (moda subdomain)
├── Ultimate Multisite (sazkirî + bi marke)
├── Domain-a Platformê (fitsite.com + wildcard SSL)
├── Şablonên Malperê (Studio Essential, Gym Pro, Fitness Chain)
├── Hilber (Starter, Growth, Pro + Order Bumps)
├── Checkout Flow (taybet ji bo nîşê, ceribandî)
├── Markekirin
│   ├── Rûpela login-a taybet
│   ├── Dashboard-a admin a bi marke
│   ├── Email-ên sîstemê yên taybet ji bo nîşê
│   ├── Fatûreyên bi marke
│   └── Malpera marketingê li ser fitsite.com
└── Amade ye ji bo onboarding flow (dersa din)
```

## Di Vî Dersî De Me Çi Çêkir {#what-we-built-this-lesson}

- **Domain-a platformê û DNS** ji bo ezmûnek bi marke hatin sazkirin
- **Admin-a white-labeled** bi markeya FitSite li hemû cihan
- **Peywendiyên taybetkirî** -- email, fatûre, û agahdarî hemû li gorî markeyê
- **Malperek marketingê** ku FitSite difiroşe xwediyên stûdyoyên fitness
- **Belgekirina domain-a taybet** ji bo mişteriyên ku domain-a xwe dixwazin

---

**Piştre:** [Ders 8: Onboarding-a Mişteriyan](lesson-8-onboarding) -- em ezmûna ku tomarkirinek nû dike mişteriyek çalak û kêfxweş sêwî dikin.
