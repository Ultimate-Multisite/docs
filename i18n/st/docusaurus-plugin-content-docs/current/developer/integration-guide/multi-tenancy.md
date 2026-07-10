---
title: Khokahanyo ea Bohiri bo Bongata
sidebar_position: 6
_i18n_hash: 3cf63ea3f0dba9dcf2a8fc74478aedbb
---
# Kopanyo ya Multi-Tenancy {#multi-tenancy-integration}

Ultimate Multisite: Multi-Tenancy 1.2.0 e fetola dintlha tse mmalwa tsa kopanyo bakeng sa bahiri ba ikemetseng, netefatso ya phalliso, le boiketsetso ba potoloho ya bophelo ya mohiri.

## Phallo ya ho qala mohiri {#tenant-bootstrap-flow}

Dikopanyo tse bopang kapa tse fetolang bahiri di lokela ho latela tatellano ena:

1. Fumana rekoto ya rejistara ya mohiri le mohlala wa karohano.
2. Bopa kapa netefatsa mongodi wa database ya mohiri.
3. Qala sebopeho sa mohiri.
4. Lokisetsa basebedisi ba mohiri.
5. Ngodisa tsela ya mohiri le ditsela tsa filesystem.
6. Matha netefatso ya phalliso pele o pepesa mohiri.

O se ke wa nka hore mohiri ya ikemetseng a ka sebedisa hape kgokahano ya database ya netweke. Sebedisa rejistara ya mohiri le dikarohanyo tsa mongodi tse fuwang ke addon.

## SSO le REST hooks {#sso-and-rest-hooks}

Ho kena ka boiketsetso ha mohiri ntle le boemo ho sebedisa tokens tsa nako e kgutshwane tse nang le tseko ya morero, tshireletso ya ho pheta hape ya JTI, moedi wa ho fela, le ho kgomaretsa origin. Dikopanyo tse eketsang dikonopo tsa ho kena kapa mahokelo a taolo ya hole di lokela ho hlahisa maeto a mohiri ka phallo ya SSO e tshehetswang ho e-na le ho aha di-URL tsa ho kena ha mohiri ka kotloloho.

Diketsahalo tsa tlhahlobo ya API ka lehlakoreng la netweke le dikakaretso tsa letsatsi le letsatsi di fumaneha bakeng sa dikgoro tsa bahiri ba ikemetseng. Sebedisa dilog tseo ha o lokisa mathata a ditsamaiso tsa kantle tse bitsang endpoints tsa potoloho ya bophelo ya mohiri.

## Di-URL tsa diketso tsa moreki ya ikemetseng {#sovereign-customer-action-urls}

Ultimate Multisite v2.13.0 e kgutlisetsa diketso tsa bareki ba bahiri ba ikemetseng sebakeng se seholo bakeng sa diphallo tsa Account, checkout, billing, invoice, saete, ho fetola template, le ho mmapa domain. Dikopanyo tse bontshang mahokelo a taolo ka lehlakoreng la mohiri di lokela ho lebisa diketso tseo phanele ya moreki ya saete e kgolo mme di kenye sepheo sa ho kgutla se netefaditsweng ha mosebedisi a lokela ho kgona ho kgutlela ho mohiri ka mora ho phethela ketso.

Sebedisa sephuthelo sa mantlha sa SSO bakeng sa mahokelo a taolo a pakeng tsa di-domain:

```php
$url = wu_with_sso($main_site_customer_url);
```

URL e hlahisitsweng e sala e ka sefilthara ka `wu_sso_url`, e amohelang SSO URL, mosebedisi wa hona jwale, ID ya saete e lebisitsweng, le moelelo wa redirect. Di-add-on di ka sebedisa filthara eo ho hokela moelelo o ikgethileng wa mofani kapa ho nkela broker URL sebaka ha di ntse di boloka netefatso ya token ya Ultimate Multisite.

O se ke wa kopitsa boemo ba membership, invoice, billing-address, template, kapa taolo ya domain kahare ho mohiri ya ikemetseng. Nka dashboard ya mohiri e le sehlahisi mme phanele ya moreki ya saete e kgolo e le tsamaiso ya rekoto bakeng sa diketso tse laolwang.

## Netefatso ya phalliso {#migration-verification}

Ka mora hore phalliso kapa kopanyo ya potoloho ya bophelo e fetole data ya mohiri, matha dikgoro tsa netefatso:

- `wp tenant verify-no-legacy --site=<site-id>` e netefatsa hore mohiri ha a sa itshetleha ka ditsela tsa kgale tsa lehlakoreng la netweke.
- `wp tenant verify-sovereign-push --site=<site-id>` e netefatsa hore mesebetsi ya sovereign push e ka sebetswa le ho qetwa.

Dikopanyo di lokela ho nka netefatso e hlolehileng e le thibelo ya phatlalatso mme di qobe ho tshwaya mohiri e le live ho fihlela ho hloleha ho rarollwa.

## Ho hlakola mohiri {#tenant-deletion}

Diphallo tsa ho hlakola di lokela ho bitsa tsela ya ho qhaqha ya addon hore mangolo a phihlello a database ya mohiri a hlwekiswe. Dikopanyo tsa kantle di ka tlosa disebediswa tsa mofani ka mora hore ho qhaqha ho atlehe, empa ha di a lokela ho hlakola di-database tsa host kapa difoldara ha netefatso kapa mesebetsi ya async push e ntse e matha.

## Router ya database e siilweng ke nako {#deprecated-database-router}

`Database_Router` ya kgale e nketsoe sebaka ke stub ya deprecation. Dikopanyo tse ntjha di lokela ho fumana bahiri ka router ya hona jwale ya saete le tenant registry APIs ho e-na le ho itshetleha ka class ya kgale ya router.
