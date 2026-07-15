---
title: 'Phunziro 6: Zochitika pa Kulembetsa'
sidebar_position: 7
_i18n_hash: a5c16cdd9b4e53a69e138df7bb042411
---
# Phunziro 6: Zochitika Polembetsa

Njira ya checkout ndi pomwe chidwi chimasanduka ndalama. Njira yolembetsa yosokoneza kapena wamba imataya makasitomala. Njira yokhudzana ndi niche inayake yomwe imalankhula chilankhulo chawo ndipo imamveka yosavuta imawasintha kukhala makasitomala.

## Pomwe Tinathera {#where-we-left-off}

FitSite ili ndi ma template ndi mapulani okonzedwa. Tsopano timamanga zochitika zolembetsa ndi checkout zomwe zimasintha eni ake a masitudiyo a fitness kukhala makasitomala olipira.

## Kumvetsetsa Njira Yolembetsa {#understanding-the-registration-flow}

Mafomu a checkout a Ultimate Multisite ndi mafomu a masitepe angapo omwe angasinthidwe kwathunthu. Kwa FitSite, tikufuna njira yomwe:

1. Imamveka ngati inamangidwira mabizinesi a fitness
2. Imasonkhanitsa zokhazo zofunika
3. Imatengera kasitomala ku tsamba logwira ntchito mwachangu momwe zingathere

Onani [Njira Yolembetsa](/user-guide/configuration/the-registration-flow) kuti mupeze buku lonse laukadaulo.

## Kupanga Checkout ya FitSite {#designing-the-fitsite-checkout}

Pitani ku **Ultimate Multisite > Mafomu a Checkout** ndipo pangani fomu yatsopano.

### Sitepe 1: Kusankha Pulani {#step-1-plan-selection}

Chinthu choyamba chomwe mwini wa situdiyo ya fitness ayenera kuwona ndi mapulani, operekedwa m'mawu omwe amamvetsetsa.

- Onjezani gawo la **Tebulo la Mitengo**
- Likonzeni kuti liwonetse mapulani onse atatu a FitSite
- Mafotokozedwe a mapulani omwe munalemba mu Phunziro 5 amawoneka pano -- onetsetsani kuti amalankhula za zosowa za bizinesi ya fitness, osati mawonekedwe aukadaulo

:::tip Chilankhulo cha Niche N'chofunika
"1 GB storage" sichitanthauza chilichonse kwa mwini wa gym. "Chilichonse chomwe mukufuna pa tsamba laukadaulo la situdiyo" chimatanthauza chilichonse. Lembani mafotokozedwe a mapulani m'chinenero cha kasitomala wanu.
:::

### Sitepe 2: Kusankha Template {#step-2-template-selection}

Atasankha pulani, kasitomala amasankha template yoyambira.

- Onjezani gawo la **Kusankha Template**
- Ma template omwe alipo amasankhidwa malinga ndi pulani yomwe anasankha (yokonzedwa mu Phunziro 5)
- Template iliyonse iyenera kukhala ndi chithunzi chowonetseratu kapangidwe kokhudzana ndi fitness

### Sitepe 3: Kupanga Account {#step-3-account-creation}

Sungani izi kukhala zochepa. Sonkhanitsani zokha:

- Adilesi ya imelo
- Password
- Dzina la situdiyo/bizinesi (ili limakhala dzina la tsamba lawo)

Musafunse zambiri zomwe simukuzifuna polembetsa. Gawo lililonse lowonjezera limachepetsa conversions.

### Sitepe 4: Kukonza Tsamba {#step-4-site-setup}

- **Mutu wa tsamba**: Dzaziranitu kuchokera ku dzina la situdiyo lomwe lalowetsedwa mu Sitepe 3
- **URL ya tsamba**: Ipangeni yokha kuchokera ku dzina la situdiyo (mwachitsanzo, `ironworks.fitsite.com`)

### Sitepe 5: Malipiro {#step-5-payment}

- Onjezani gawo la **Malipiro**
- Konzani payment gateway yanu ([Stripe](/user-guide/payment-gateways/stripe) ikulimbikitsidwa pa kulipiritsa kwa subscription)
- Ngati munapanga order bumps mu Phunziro 5, onjezani gawo la **Order Bump** musanafike sitepe ya malipiro

### Sitepe 6: Chitsimikizo {#step-6-confirmation}

- Sinthani uthenga wotsimikizira ndi chilankhulo chokhudzana ndi fitness
- Chitsanzo: "Tsamba la situdiyo yanu ya fitness likupangidwa. Mudzatumizidwa ku tsamba lanu latsopano m'masekondi ochepa."

## Kuwonjezera Chosinthira Chosankha Nthawi {#adding-a-period-selection-toggle}

Ngati munakhazikitsa kusiyanasiyana kwa mitengo m'mapulani anu (pamwezi motsutsana ndi pachaka), onjezani gawo la **Kusankha Nthawi** ku fomu ya checkout kuti makasitomala athe kusintha pakati pa nthawi zolipiritsa. Onani [Mafomu a Checkout](/user-guide/configuration/checkout-forms#adding-a-period-selection-toggle) kuti mupeze malangizo.

## Kukonza Malipiro {#configuring-payment}

Ngati simunakhazikitsebe payment gateway:

1. Pitani ku **Ultimate Multisite > Zokonda > Payment Gateways**
2. Tsatirani [kalozera wokhazikitsa Stripe](/user-guide/payment-gateways/stripe) kapena gateway yomwe mumakonda
3. Yesani njira yonse ya checkout ndi malipiro oyesera

Onani [Kulandira Malipiro](/user-guide/payment-gateways/getting-paid) kuti mupeze zambiri za momwe malipiro amayendera kupita ku account yanu.

## Kuyesa Njirayi {#testing-the-flow}

Musanapitirire, malizani kulembetsa koyesera kwathunthu:

1. Tsegulani fomu ya checkout pawindo la browser la incognito/private
2. Sankhani pulani
3. Sankhani template
4. Pangani account
5. Malizani malipiro (gwiritsani ntchito test mode)
6. Tsimikizirani kuti tsamba lapangidwa ndi template yolondola

Onani kuti:

- [ ] Mafotokozedwe a mapulani ndi omveka bwino komanso okhudzana ndi niche
- [ ] Zowonetseratu za template zikuwonetsa mapangidwe oyenera fitness
- [ ] URL ya tsamba imapangidwa molondola kuchokera ku dzina la situdiyo
- [ ] Malipiro amachitika bwino
- [ ] Kasitomala amafika pa tsamba logwira ntchito lokhala ndi template yomwe yasankhidwa
- [ ] Maimelo otsimikizira amagwiritsa ntchito chilankhulo chokhudzana ndi fitness

## Network ya FitSite Pakadali Pano {#the-fitsite-network-so-far}

```
Network ya FitSite
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (yokonzedwa)
├── Hosting yokhala ndi wildcard SSL + domain mapping
├── Ma Template a Tsamba (Studio Essential, Gym Pro, Fitness Chain)
├── Products (Starter, Growth, Pro + Order Bumps)
├── Njira ya Checkout
│   ├── Kusankha pulani ndi mafotokozedwe okhudzana ndi niche
│   ├── Kusankha template ndi zowonetseratu za fitness
│   ├── Kupanga account kochepa
│   ├── Malipiro kudzera pa Stripe
│   └── Chitsimikizo chokhudzana ndi fitness
└── Yakonzeka ku branding (phunziro lotsatira)
```

## Zomwe Tinamanga mu Phunziro Ili {#what-we-built-this-lesson}

- **Fomu ya checkout ya masitepe angapo** yokonzedwera eni ake a masitudiyo a fitness
- **Chilankhulo chokhudzana ndi niche** mu njira yonse yolembetsa
- **Kukangana kochepa** -- magawo ofunika okha, njira yachangu kupita ku tsamba logwira ntchito
- **Kuphatikiza malipiro** ndi kutsimikizira koyesera
- **Njira yoyesedwa kuyambira koyambira mpaka kumapeto** kuchokera pakusankha pulani mpaka ku tsamba logwira ntchito

---

**Chotsatira:** [Phunziro 7: Kuchipanga Chanu](lesson-7-branding) -- timapanga white-label ya platform ndipo timakhazikitsa FitSite ngati brand.
