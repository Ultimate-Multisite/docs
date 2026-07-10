---
title: 'Dersa 8: Tevlêkirina Mişteriyan'
sidebar_position: 9
_i18n_hash: 5b71133bebf067164c77d33db7c81806
---
# Ders 8: Destpêkirina Xerîdar {#lesson-8-customer-onboarding}

Girtina xerîdarekî ji bo tomar bûnê tenê nîvê kar e. Heke ew têkevin, xwe tevlihev hîs bikin û careke din venegerin, te ew winda kirin. Ev ders wê ezmûnê dîzayn dike ku tomarbûna nû bike xerîdarekî çalak û têkildar.

## Em Li Ku Derê Mabûn {#where-we-left-off}

FitSite bi tevahî bi brandê hatî amadekirin û herikîna checkout dixebite. Niha em li ser tiştê piştî ku xwediyê studyoya fitnessê tomarbûnê temam dike û cara yekem digihîje malpera xwe ya nû, disekinin.

## Çima Destpêkirin Girîng e {#why-onboarding-matters}

30 deqîqeyên yekem piştî tomarbûnê diyar dikin ka xerîdar dimîne an jî diçe. Xwediyê studyoya fitnessê ku:

- Têkeve û malperekê bibîne ku jixwe wek malpera fitnessê xuya dike → dimîne
- Bi zelalî dizane paşê çi bike → dimîne
- Di Dashboard-a giştî ya WordPress de xwe winda hîs dike → diçe

Şablonên te yên nişê (Ders 4) xalê yekem çareser dikin. Ev ders xalê duyem çareser dike.

## Ezmûna Têketina Yekem {#the-first-login-experience}

### Widget-a Dashboard-a Bi xêr Hatî {#welcome-dashboard-widget}

Widget-eke Dashboard-a taybet çêke ku pêşwaziya xerîdarên nû bike û wan di rêkûpêkirinê de rêber bike. Divê ev dema ew cara yekem têkevin, bi awayekî berbiçav xuya bibe.

**Destpêka Bilez a FitSite:**

1. **Nav û logoya studyoya xwe zêde bike** -- Girêdan bi Customizer an mîhengên Nasnameya Malperê re
2. **Bernameya dersên xwe nû bike** -- Rasterast girêdan bi edîtora rûpela Dersan re
3. **Rahênerên xwe zêde bike** -- Girêdan bi edîtora rûpela Rahêneran re
4. **Agahiyên têkiliyê yên xwe saz bike** -- Girêdan bi edîtora rûpela Têkiliyê re
5. **Pêşdîtina malpera xwe bike** -- Girêdan bi frontend re

Her gav rasterast bi rûpel an mîhenga têkildar ve tê girêdan. Geran di nav menuan de tune.

### Dashboard Sade Bike {#simplify-the-dashboard}

Xerîdarên nû ne hewce ne ku hemû hêmanên menuya WordPress bibînin. Van bifikire:

- Veşartina hêmanên menuê ku ji bo rêvebirina malpera fitnessê ne têkildar in (mînak, Comments heke nayê bikaranîn)
- Ji nû ve rêzkirina menuê da ku hêmanên herî zêde têne bikaranîn li pêş bin
- Zêdekirina labelên menuya taybet ku ji bo nişê watedar bin ("Studyoya Te" li şûna "Appearance")

Addon-a [Plugin & Theme Manager](/addons/plugin-and-theme-manager) dikare alîkar be ku kontrol bike xerîdar çi dibînin.

## Rêza Emailên Bi xêr Hatî {#welcome-email-sequence}

Emaila bi xêr hatî ya yekane têr nake. Rêzek saz bike ku di hefteya wan a yekem de xerîdaran rêber bike:

### Email 1: Bi xêr Hatî (Tavilê piştî tomarbûnê) {#email-1-welcome-immediately-after-signup}

- Mijar: "Bi xêr hatî FitSite -- malpera studyoya te zindî ye"
- Naverok: Girêdana têketinê, gavên destpêka bilez, girêdan bi çavkaniyên alîkariyê re
- Ton: Bi kêfxweşî, teşwîqkar, taybet ji bo fitnessê

### Email 2: Serkeftinên Bilez (Roja 1) {#email-2-quick-wins-day-1}

- Mijar: "3 tiştên ku pêşî li ser FitSite-a xwe bikî"
- Naverok: Logoya xwe zêde bike, wêneya hero ya rûpela sereke nû bike, bernameya dersên xwe zêde bike
- Wêneyên ekranê têxe ku bi zelalî nîşan bidin li ku derê bitikînin

### Email 3: Wê Bike Ya Xwe (Roja 3) {#email-3-make-it-yours-day-3}

- Mijar: "Malpera fitnessa xwe derxîne pêş"
- Naverok: Rengan taybet bike, wêneyên rahêneran zêde bike, çîroka studyoya xwe binivîse
- Girêdan bi mînakên malperên fitnessê yên baş li ser platformê re

### Email 4: Zindî Bike (Roja 7) {#email-4-go-live-day-7}

- Mijar: "Amade yî ku FitSite-a xwe bi cîhanê re parve bikî?"
- Naverok: Lîsteya kontrolê ya tiştên ku berî parvekirinê divê werin piştrastkirin, çawa domain-eke taybet girê bidî (heke li ser Growth/Pro be), şîretên parvekirina civakî

:::tip Otomasyona Emailê
[Webhooks](/user-guide/integrations/webhooks) an [Zapier](/user-guide/integrations/zapier) bikar bîne da ku ev email bi riya platforma te ya marketinga emailê bên destpêkirin. Ev kontrola zêdetir li ser demê dide te û dihêle ku têkildarbûnê bişopînî.
:::

## Çavkaniyên Alîkariyê {#help-resources}

Naveroka alîkariyê ya taybet ji bo nişê çêke ku bersiva pirsên rastîn ên xwediyên studyoyên fitnessê dide:

### Gotarên Bingehê Zanînê {#knowledge-base-articles}

- "Çawa bernameya dersên xwe nû bikî"
- "Zêdekirin û sererastkirina profîlên rahêneran"
- "Guhertina logoya û rengên studyoya xwe"
- "Girêdana navê domain-a xwe" (ji bo xerîdarên Growth/Pro)
- "Zêdekirina widget-eke rezervasyonê li malpera xwe"

Van ji bo bikarhênerên ne-teknîkî binivîse. Wêneyên ekranê bikar bîne. Ji jargonê WordPress dûr bikeve.

### Rêberiyên Vîdyoyî {#video-walkthroughs}

Tomarkirinên ekranê yên kurt (2-3 deqîqe) ku nîşan didin:

- Têketina yekem û nasandin
- Sererastkirina rûpela sereke
- Nûkirina bernameya dersan
- Zêdekirina rahênerê nû

Ev ne hewce ne ku hilberînên pir paqij bin. Ya girîng ew e ku zelal, alîkar û taybet ji bo nişê bin.

## Rûpela Account {#the-account-page}

Ultimate Multisite [Rûpela Account](/user-guide/client-management/account-page) ya ber bi xerîdar ve dihewîne ku xerîdar abonetiya xwe tê de rêve dibin. Vê taybet bike ji bo:

- Plana wan a heyî ya FitSite nîşan bide
- Vebijarkên upgrade bi sûdên taybet ji bo fitnessê nîşan bide
- Dîroka fatûreyê û dakêşana faturan peyda bike
- Girêdan bi çavkaniyên alîkariyê re

## Pîvandina Serkeftina Destpêkirinê {#measuring-onboarding-success}

Van nîşaneyan bişopîne da ku bizanî destpêkirina te dixebite an na:

- **Rêjeya çalakkirinê**: Çi rêjeyek ji tomarbûnan di hefteya yekem de rastî malpera xwe taybet dikin?
- **Têketinên hefteya yekem**: Xerîdarekî nû di hefteya xwe ya yekem de çend caran tê dikeve?
- **Ticketên piştgiriyê ji xerîdarên nû**: Hejmareke bilind tê wateya ku di destpêkirina te de kêmasî hene
- **Veguhertina trial-ê bo dayînê**: Heke tu trial pêşkêş dikî, çi rêje vediguherin?

## Tora FitSite Heya Niha {#the-fitsite-network-so-far}

```
Tora FitSite
├── WordPress Multisite (moda subdomain)
├── Ultimate Multisite (hatî mîhengkirin + bi brandê)
├── Domain-a Platformê (fitsite.com + wildcard SSL)
├── Şablonên Malperê (Studio Essential, Gym Pro, Fitness Chain)
├── Hilber (Starter, Growth, Pro + Order Bumps)
├── Herikîna Checkout (taybet ji bo nişê, hatî ceribandin)
├── Branding (têketin, Dashboard, email, fatûre, malpera marketingê)
├── Destpêkirina Xerîdar
│   ├── Widget-a Dashboard-a Destpêka Bilez
│   ├── Dashboard-a sade ji bo rêvebirina malpera fitnessê
│   ├── Rêza bi xêr hatî ya 4-email
│   ├── Bingehê zanînê yê taybet ji bo nişê
│   ├── Rêberiyên vîdyoyî
│   └── Rûpela Account ya taybetkirî
└── Amade ye ji bo stratejiya buhayê (dersa din)
```

## Me Di Vê Dersê De Çi Avakir {#what-we-built-this-lesson}

- **Ezmûneke têketina yekem a rêberkirî** bi widget-a Destpêka Bilez
- **Dashboard-eke sade** ku li ser erkên rêvebirina malpera fitnessê disekine
- **Rêza emailên bi xêr hatî** ku di hefteya yekem de xerîdaran rêber dike
- **Çavkaniyên alîkariyê yên taybet ji bo nişê** ku ji bo xwediyên studyoyên fitnessê yên ne-teknîkî hatine nivîsandin
- **Metrîkên destpêkirinê** ji bo şopandin û baştirkirina ezmûnê

---

**Ya pişt re:** [Dersa 9: Buhayê ji bo Qezencê](lesson-9-pricing) -- em stratejiya buhayê zelaltir dikin da ku dahatê herî zêde bikin û churn herî kêm bikin.
