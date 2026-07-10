---
title: 'Thuto ea 7: Ho e etsa ea hao'
sidebar_position: 8
_i18n_hash: 90013fc79a9cbb15283ce89b688002b1
---
# Thuto 7: Ho e Etsa ea Hao {#lesson-7-making-it-yours}

Bareki ba hao ha baa lokela ho ikutlwa eka ba sebedisa "katoloso e nngwe ya WordPress." Ba lokela ho ikutlwa eka ba sebedisa FitSite -- sethala se ahilweng bakeng sa indasteri ya bona. Thuto ena e akaretsa ho aha lebitso, white-labeling, le ho etsa hore sethala se ikutlwe jwalo ka sehlahiswa.

## Moo re Ileng ra Emisa Teng {#where-we-left-off}

FitSite e na le phallo ya ho lefa e sebetsang e nkang beng ba studio tsa boikwetliso ho tloha kgethong ya moralo ho ya sebakeng se phelang. Jwale re etsa hore boiphihlelo bohle bo ikutlwe bo kopane ebile e le sehlahiswa se nang le lebitso.

## Domain ya Sethala sa Hao {#your-platform-domain}

Motheo wa lebitso la hao ke domain ya hao. Bakeng sa FitSite:

- **Domain e ka sehloohong**: `fitsite.com` (sebaka sa hao sa papatso le motso wa netweke)
- **Disaete tsa bareki**: `studioname.fitsite.com` (subdomains)
- **Domains tse ikgethileng**: Bareki ba meralong ya Growth le Pro ba ka hokahanya domain ya bona

### Ho Hlophisa Domain ya Hao {#setting-up-your-domain}

1. Ngodisa domain ya sethala sa hao
2. E lebise ho mofani wa hao wa hosting
3. Hlophisa wildcard DNS (`*.fitsite.com`) bakeng sa subdomains tsa bareki
4. Netefatsa hore wildcard SSL e sebetsa

Bona [Mokgwa wa ho Hlophisa Domain Mapping](/user-guide/domain-mapping/how-to-configure-domain-mapping) bakeng sa ditaelo tse qaqileng.

## White-Labeling ya Boiphihlelo ba Motsamaisi {#white-labeling-the-admin-experience}

Ha mong wa studio ya boikwetliso a kena ho Dashboard ya sebaka sa hae, o lokela ho bona lebitso la hao, eseng branding ya WordPress kapa Ultimate Multisite.

### Leqephe la ho Kena le Ikgethileng {#custom-login-page}

Iketsetse leqephe la ho kena la WordPress hore le bontshe:

- Logo ya hao ya FitSite
- Ditshwantsho tsa bokamorao tse loketseng boikwetliso
- Mebala ya lebitso la hao

### Branding ya Dashboard {#dashboard-branding}

Sebedisa tlatsetso ya [Admin Page Creator](/addons/admin-page-creator) kapa CSS e ikgethileng ho:

- Nkela logo ya WordPress sebaka ka logo ya hao ya FitSite
- Iketsetsa moralo wa mebala ya motsamaisi hore o tshwane le lebitso la hao
- Kenya widget e ikgethileng ya Dashboard e nang le di-link tse potlakileng tse amanang le boikwetliso le disebediswa tsa thuso

### Maqephe a Motsamaisi a Ikgethileng {#custom-admin-pages}

Nahana ka ho bopa maqephe a motsamaisi a ikgethileng a hlahisang diketso tse loketseng haholo beng ba studio tsa boikwetliso:

- "Hlophisa Lenaneo la Hao la Ditlelase"
- "Ntlafatsa Diprofaele tsa Bakoetlisi"
- "Sheba Sebaka sa Hao"

Sena se fokotsa bothata ba ho ithuta ka ho beha diketso tse amanang le niche kapele le bohareng ho ena le ho di pata ho menu e tlwaelehileng ya WordPress.

## Ho Aha Lebitso Dikgokahanong tsa Hao {#branding-your-communications}

Imeile e nngwe le e nngwe, invoice, le tsebiso di lokela ho matlafatsa lebitso la hao.

### Diimeile tsa Sistimi {#system-emails}

Eya ho **Ultimate Multisite > Settings > Emails** mme o iketsetse diimeile tsohle tsa sistimi:

- **Lebitso la moromelli**: FitSite
- **Imeile ya moromelli**: hello@fitsite.com
- **Dithempleite tsa imeile**: Sebedisa mebala ya lebitso la hao le logo
- **Puo**: E amanang le boikwetliso hohle

Diimeile tsa bohlokwa tseo o lokelang ho di iketsetsa:

| Imeile | Phetolelo e Akaretsang | Phetolelo ya FitSite |
|-------|----------------|-----------------|
| Kamohelo | "Sebaka sa hao se setjha se se se lokile" | "Webosaete ya studio ya hao ya boikwetliso e se e phela" |
| Rasiti ya tefo | "Tefo e amohetswe" | "Tefo ya subscription ya FitSite e netefaditswe" |
| Teko e fela | "Teko ya hao e tla fela haufinyane" | "Teko ya hao ya FitSite e fela ka matsatsi a 3 -- boloka webosaete ya studio ya hao e phela" |

### Di-invoice {#invoices}

Iketsetse dithempleite tsa invoice ka:

- Logo ya hao ya FitSite le mebala ya lebitso
- Dintlha tsa kgwebo ya hao
- Mabitso a dihlahiswa a amanang le boikwetliso (eseng di-ID tsa meralo tse akaretsang)

## Sebaka se Lebaneng le Moreki {#the-customer-facing-site}

Domain ya hao e ka sehloohong (`fitsite.com`) e hloka sebaka sa papatso se rekisang sethala. Sena se arohane le motsamaisi wa netweke ya Ultimate Multisite -- ke sefahleho sa kgwebo ya hao se bonahalang setjhabeng.

Maqephe a bohlokwa:

- **Leqephe la lehae**: Tlhahiso ya boleng e hlakileng bakeng sa dikgwebo tsa boikwetliso
- **Dikarolo**: Seo FitSite e se etsang, ka mantswe a boikwetliso
- **Ditjeho**: Meralo ya hao e meraro ka dipapiso tsa dikarolo tse ikgethileng tsa niche
- **Mehlala**: Bontsha disaete tse ahilweng hodima sethala
- **Ingolise**: Di-link tse isang foromong ya hao ya ho lefa

:::tip Sebaka sa Hao sa Papatso se ka ba Sebaka sa Netweke
Bopa sebaka sa hao sa papatso e le sebaka ka hara netweke ya hao. Sena se o dumella ho se laola ho tswa ho Dashboard e tshwanang mme se bontsha bokgoni ba sethala sa hao.
:::

## Domain e Ikgethileng Bakeng sa Bareki {#custom-domain-for-customers}

Bakeng sa bareki ba meralong e kenyeletsang domains tse ikgethileng, ngola tshebetso ka ho hlaka:

1. Moreki o ngodisa kapa o fetisetsa domain ya hae ho registrar
2. Moreki o ntlafatsa DNS hore e lebise sethaleng sa hao (fana ka direkoto tse nepahetseng)
3. Ultimate Multisite e sebetsana le domain mapping le SSL

Bopa sengolwa sa thuso kapa kenyo ya motheo wa tsebo ka ho kgetheha bakeng sa tshebetso ena, e ngotsweng bakeng sa beng ba studio tsa boikwetliso bao e seng batho ba thekniki.

## Netweke ya FitSite ho Fihlela Jwale {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (mokgwa wa subdomain)
├── Ultimate Multisite (e hlophisitsweng + e filweng lebitso)
├── Platform Domain (fitsite.com + wildcard SSL)
├── Dithempleite tsa Sebaka (Studio Essential, Gym Pro, Fitness Chain)
├── Dihlahiswa (Starter, Growth, Pro + Order Bumps)
├── Phallo ya ho Lefa (e ikgethileng ho niche, e lekilweng)
├── Branding
│   ├── Leqephe la ho kena le ikgethileng
│   ├── Dashboard ya motsamaisi e nang le branding
│   ├── Diimeile tsa sistimi tse ikgethileng ho niche
│   ├── Di-invoice tse nang le branding
│   └── Sebaka sa papatso ho fitsite.com
└── E loketse phallo ya ho kenya bareki (thuto e latelang)
```

## Seo re se Ahileng Thutong Ena {#what-we-built-this-lesson}

- **Domain ya sethala le DNS** tse hlophisitsweng bakeng sa boiphihlelo bo nang le lebitso
- **Motsamaisi wa white-labeled** ka branding ya FitSite hohle
- **Dikgokahano tse iketseditsweng** -- diimeile, di-invoice, le ditsebiso tsohle di latela lebitso
- **Sebaka sa papatso** se rekisetsang FitSite ho beng ba studio tsa boikwetliso
- **Ditokomane tsa domain e ikgethileng** bakeng sa bareki ba batlang domain ya bona

---

**E latelang:** [Thuto 8: Ho Kenya Bareki](lesson-8-onboarding) -- re rala boiphihlelo bo fetolang ngodiso e ntjha hore e be moreki ya sebetsang, ya thabileng.
