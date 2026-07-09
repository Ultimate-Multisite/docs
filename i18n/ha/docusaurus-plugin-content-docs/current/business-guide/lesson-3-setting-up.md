---
title: 'Darasi na 3: Saita Hanyar Sadarwarka'
sidebar_position: 4
_i18n_hash: 4bffe2f3ba68d1a58bfc32d6b0a3c5c7
---
# Darasi na 3: Saita Network ɗinka {#lesson-3-setting-up-your-network}

Lokaci ya yi na gina. A wannan darasin za ka shigar da Ultimate Multisite kuma ka saita tushen FitSite network. Duk shawarar da aka yanke a nan an yi ta ne da fannin motsa jiki a rai.

## Inda Muka Tsaya {#where-we-left-off}

Mun zaɓi studiyon motsa jiki a matsayin fanninmu kuma mun tabbatar da damar. Yanzu za mu mayar da wannan ra'ayi zuwa dandali mai aiki.

## Zaɓar Hosting ɗinka {#choosing-your-hosting}

Zaɓin hosting ɗinka ya fi muhimmanci ga dandali na musamman fiye da shafin yanar gizo guda ɗaya. Ba shafi ɗaya kake hosting ba -- kana hosting ɗin network da zai girma zuwa shafuka dozin-dozin ko ɗaruruwan shafuka.

### Abin da Za a Nema {#what-to-look-for}

- **Tallafin WordPress Multisite**: Ba duk hosts ne ke kula da multisite da kyau ba
- **Wildcard SSL**: Muhimmi ne ga networks masu amfani da subdomain
- **Albarkatu masu iya faɗaɗuwa**: Kana buƙatar sararin girma ba tare da ƙaura ba
- **Haɗin Ultimate Multisite**: Domain mapping ta atomatik da SSL suna rage ƙoƙarin gudanarwa sosai

### Hanyar da Aka Ba da Shawara {#recommended-approach}

Zaɓi host daga jerin [Masu Bayarwa Masu Jituwa](/user-guide/host-integrations/closte). An gwada waɗannan da Ultimate Multisite kuma suna samar da haɗe-haɗen da kake buƙata don domain mapping da sarrafa SSL ta atomatik.

Don FitSite, za mu yi amfani da tsarin subdomain. Wannan yana nufin shafukan abokan ciniki za su fara bayyana a matsayin `studioname.fitsite.com` kafin su zaɓi haɗa nasu domain.

## Shigar da WordPress Multisite {#installing-wordpress-multisite}

Idan ba ka riga ka da shigarwar WordPress Multisite ba:

1. Shigar da WordPress a kan mai ba ka hosting
2. Bi jagorar [Yadda ake Shigar da WordPress Multisite](/user-guide/getting-started/how-to-install-wordpress-multisite)
3. Zaɓi tsarin **subdomain** lokacin da aka tambaye ka

:::tip Me Ya Sa Subdomains?
Subdomains suna ba kowane shafin abokin ciniki adireshinsa na musamman (`studio.fitsite.com`) maimakon wata hanya (`fitsite.com/studio`). Wannan ya fi ƙwarewa ga abokan cinikinka kuma yana guje wa rikice-rikicen permalink. Duba [Ultimate Multisite 101](/user-guide/getting-started/ultimate-multisite-101) don cikakken kwatanci.
:::

## Shigar da Ultimate Multisite {#installing-ultimate-multisite}

Bi jagorar [Shigar da Ultimate Multisite](/user-guide/getting-started/installing-ultimate-multisite) don:

1. Loda kuma kunna plugin ɗin a fadin network
2. Gudanar da [Setup Wizard](/user-guide/getting-started/multisite-setup-wizard)

A lokacin setup wizard, ka riƙe fannin FitSite a rai:

- **Kuɗi**: Saita zuwa kuɗin da abokan cinikinka na studiyon motsa jiki suke amfani da shi
- **Sunan kamfani**: "FitSite" (ko sunan brand ɗin da ka zaɓa)
- **Tambarin kamfani**: Loda tambarin brand ɗinka -- wannan yana bayyana a kan invoices da imel

## Saita don Fannin Motsa Jiki {#configuring-for-the-fitness-niche}

Da zarar an shigar da Ultimate Multisite, yi waɗannan zaɓuɓɓukan saituna na musamman ga fannin:

### Saitunan Gabaɗaya {#general-settings}

Je zuwa **Ultimate Multisite > Settings** kuma ka saita:

- **Sunan shafi**: FitSite
- **Matsayin farko**: Administrator -- masu studiyon motsa jiki suna buƙatar cikakken iko a kan abun cikin shafinsu
- **Rajista**: Kunna rajistar masu amfani don masu studio su iya yin rajista da kansu

### Saitin Imel {#email-configuration}

Imel ɗin tsarinka ya kamata su yi magana da harshen fanninka. Je zuwa **Ultimate Multisite > Settings > Emails** kuma ka keɓance:

- Sauya kalmomin gama-gari na "sabon shafinka" da saƙo na musamman ga motsa jiki
- Misalin taken maraba: "Shafin yanar gizon studiyon motsa jikinka ya shirya"
- Misalin jikin maraba: Yi nuni da studio ɗinsu, azuzuwansu, da fara amfani da shafin motsa jikinsu

Za mu ƙara gyara waɗannan a Darasi na 8 (Customer Onboarding), amma saita yanayin yanzu yana tabbatar da cewa har ma rajistar gwaji ta farko tana jin ta dace da fannin.

### Saitin Domain {#domain-configuration}

Idan kana amfani da mai ba da hosting mai jituwa, saita domain mapping yanzu:

1. Je zuwa **Ultimate Multisite > Settings > Domain Mapping**
2. Bi jagorar haɗin kai don host ɗinka na musamman
3. Gwada cewa sababbin subsites suna samun SSL ta atomatik

Wannan yana tabbatar da cewa lokacin da muka fara ƙirƙirar templates da shafukan gwaji a darasi na gaba, komai yana aiki daga farko zuwa ƙarshe.

## FitSite Network Zuwa Yanzu {#the-fitsite-network-so-far}

A ƙarshen wannan darasin, ga abin da kake da shi:

```
FitSite Network
├── WordPress Multisite (yanayin subdomain)
├── Ultimate Multisite (an shigar kuma an saita)
├── Hosting tare da wildcard SSL
├── An saita domain mapping
├── Templates na imel na musamman ga fanni (na farko)
└── A shirye don templates na shafi (darasi na gaba)
```

## Abin da Muka Gina a Wannan Darasin {#what-we-built-this-lesson}

- **Shigarwar WordPress Multisite mai aiki** a yanayin subdomain
- **An shigar da Ultimate Multisite** kuma an saita shi da branding na FitSite
- **Hosting da SSL** an saita su don network mai girma
- **Domain mapping** an saita shi don mai ba ka hosting
- **Yanayin imel na musamman ga fanni** an kafa shi tun daga rana ta farko

---

**Na gaba:** [Darasi na 4: Gina Templates na Musamman ga Fanni](lesson-4-templates) -- za mu ƙirƙiri templates na shafi da masu studiyon motsa jiki za su so su yi amfani da su.
