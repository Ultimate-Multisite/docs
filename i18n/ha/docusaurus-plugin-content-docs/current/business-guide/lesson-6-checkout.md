---
title: 'Darasi na 6: Kwarewar Yin Rajista'
sidebar_position: 7
_i18n_hash: a5c16cdd9b4e53a69e138df7bb042411
---
# Darasi na 6: Kwarewar Rijista

Gudanarwar checkout ita ce wurin da sha'awa take zama kudin shiga. Tsarin rijista mai rikitarwa ko na gama-gari yana sa a rasa abokan ciniki. Gudanarwa ta musamman ga niche da take magana da harshensu kuma take jin ba ta da wahala tana juyar da su.

## Inda Muka Tsaya {#where-we-left-off}

FitSite yana da templates da plans da aka saita. Yanzu za mu gina kwarewar rajista da checkout da ke juya masu gidajen fitness studio zuwa abokan ciniki masu biya.

## Fahimtar Gudanarwar Rijista {#understanding-the-registration-flow}

Checkout forms na Ultimate Multisite nau'ikan forms ne masu matakai da yawa da za a iya keɓancewa gaba ɗaya. Don FitSite, muna son gudanarwa da take:

1. Jin kamar an gina ta ne don kasuwancin fitness
2. Tattara kawai abin da ake buƙata
3. Kai abokin ciniki zuwa shafi mai aiki cikin sauri yadda zai yiwu

Duba [Gudanarwar Rijista](/user-guide/configuration/the-registration-flow) don cikakken bayanin fasaha.

## Tsara Checkout na FitSite {#designing-the-fitsite-checkout}

Je zuwa **Ultimate Multisite > Checkout Forms** ka ƙirƙiri sabon form.

### Mataki na 1: Zaɓen Plan {#step-1-plan-selection}

Abu na farko da mai fitness studio zai gani ya kamata su kasance plans, an gabatar da su da kalmomin da suke fahimta.

- Ƙara filin **Pricing Table**
- Saita shi ya nuna dukkan plans uku na FitSite
- Bayanin plans da ka rubuta a Darasi na 5 yana bayyana a nan -- tabbatar suna magana da bukatun kasuwancin fitness, ba fasalolin fasaha ba

:::tip Harshen Niche Yana da Muhimmanci
"1 GB storage" ba ya nufin komai ga mai gym. "Duk abin da kake buƙata don ƙwararren website na studio" yana nufin komai. Rubuta bayanin plans da harshen abokin cinikinka.
:::

### Mataki na 2: Zaɓen Template {#step-2-template-selection}

Bayan zaɓar plan, abokin ciniki zai zaɓi template ɗin farawarsa.

- Ƙara filin **Template Selection**
- Ana tace templates da ake da su bisa plan da suka zaɓa (wanda aka saita a Darasi na 5)
- Kowane template ya kamata ya kasance da hoton preview da ke nuna zane na musamman ga fitness

### Mataki na 3: Ƙirƙirar Account {#step-3-account-creation}

Ka sa wannan ya zama kaɗan. Tattara kawai:

- Adireshin email
- Password
- Sunan studio/kasuwanci (wannan zai zama sunan shafinsu)

Kada ka nemi bayanin da ba ka buƙata a lokacin signup. Kowane ƙarin fili yana rage conversions.

### Mataki na 4: Saitin Shafi {#step-4-site-setup}

- **Taken shafi**: Cika tun farko daga sunan studio da aka shigar a Mataki na 3
- **URL na shafi**: Ƙirƙira kai-tsaye daga sunan studio (misali, `ironworks.fitsite.com`)

### Mataki na 5: Biyan Kuɗi {#step-5-payment}

- Ƙara filin **Payment**
- Saita payment gateway ɗinka ([Stripe](/user-guide/payment-gateways/stripe) ana ba da shawara don subscription billing)
- Idan ka ƙirƙiri order bumps a Darasi na 5, ƙara filin **Order Bump** kafin matakin biyan kuɗi

### Mataki na 6: Tabbatarwa {#step-6-confirmation}

- Keɓance saƙon tabbatarwa da harshe na musamman ga fitness
- Misali: "Ana ƙirƙirar website na fitness studio ɗinka. Za a tura ka zuwa sabon shafinka cikin ƴan daƙiƙu."

## Ƙara Toggle na Zaɓen Lokaci {#adding-a-period-selection-toggle}

Idan ka saita bambance-bambancen farashi a cikin plans ɗinka (na wata-wata da na shekara-shekara), ƙara filin **Period Selection** zuwa checkout form domin abokan ciniki su iya sauyawa tsakanin lokutan billing. Duba [Checkout Forms](/user-guide/configuration/checkout-forms#adding-a-period-selection-toggle) don umarni.

## Saita Biyan Kuɗi {#configuring-payment}

Idan ba ka riga ka saita payment gateway ba:

1. Je zuwa **Ultimate Multisite > Settings > Payment Gateways**
2. Bi [jagorar saita Stripe](/user-guide/payment-gateways/stripe) ko gateway ɗin da ka fi so
3. Gwada cikakkiyar checkout flow da test payment

Duba [Karɓar Kuɗi](/user-guide/payment-gateways/getting-paid) don cikakkun bayanai kan yadda biyan kuɗi ke gudana zuwa account ɗinka.

## Gwada Gudanarwar {#testing-the-flow}

Kafin ci gaba, kammala cikakken gwajin signup:

1. Buɗe checkout form a cikin taga browser na incognito/private
2. Zaɓi plan
3. Zaɓi template
4. Ƙirƙiri account
5. Kammala biyan kuɗi (yi amfani da test mode)
6. Tabbatar an ƙirƙiri shafin da template daidai

Duba cewa:

- [ ] Bayanin plans a sarari suke kuma na musamman ga niche
- [ ] Template previews suna nuna zane-zanen da suka dace da fitness
- [ ] URL na shafi yana ƙirƙira daidai daga sunan studio
- [ ] Ana sarrafa biyan kuɗi cikin nasara
- [ ] Abokin ciniki yana sauka a kan shafi mai aiki da template da aka zaɓa
- [ ] Emails na tabbatarwa suna amfani da harshe na musamman ga fitness

## Cibiyar Sadarwar FitSite Zuwa Yanzu {#the-fitsite-network-so-far}

```
Cibiyar Sadarwar FitSite
├── WordPress Multisite (yanayin subdomain)
├── Ultimate Multisite (an saita)
├── Hosting tare da wildcard SSL + domain mapping
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Kayayyaki (Starter, Growth, Pro + Order Bumps)
├── Checkout Flow
│   ├── Zaɓen plan tare da bayanai na musamman ga niche
│   ├── Zaɓen template tare da fitness previews
│   ├── Ƙirƙirar account mai sauƙi
│   ├── Biyan kuɗi ta Stripe
│   └── Tabbatarwa ta musamman ga fitness
└── A shirye don branding (darasi na gaba)
```

## Abin da Muka Gina a Wannan Darasin {#what-we-built-this-lesson}

- **Checkout form mai matakai da yawa** da aka daidaita da masu fitness studio
- **Harshe na musamman ga niche** a duk cikin signup flow
- **Ƙaramin cikas** -- filaye masu muhimmanci kawai, hanya mai sauri zuwa shafi mai aiki
- **Haɗin biyan kuɗi** tare da tabbatarwa ta gwaji
- **Gudanarwa da aka gwada daga farko zuwa ƙarshe** daga zaɓen plan zuwa shafi mai aiki

---

**Na gaba:** [Darasi na 7: Mai da Shi Naka](lesson-7-branding) -- za mu white-label platform ɗin kuma mu kafa FitSite a matsayin brand.
