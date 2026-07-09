---
title: Ujumuishaji wa WPMU DEV
sidebar_position: 4
_i18n_hash: 01cdaa5cf8aece1ca5c269d943e8a9e9
---
# Uunganisho wa WPMU DEV {#wpmu-dev-integration}

## Muhtasari {#overview}
WPMU DEV ni jukwaa kamili la WordPress linalotoa huduma za hosting, plugins, na huduma nyingine za tovuti za WordPress. Uunganisho huu unawezesha usawazishaji wa kikoa kiotomatiki na usimamizi wa cheti cha SSL kati ya Ultimate Multisite na hosting ya WPMU DEV.

## Vipengele {#features}
- Usawazishaji wa kikoa kiotomatiki
- Usimamizi wa cheti cha SSL
- Majaribio ya ziada ya kuthibitisha cheti cha SSL

## Mahitaji {#requirements}
Uunganisho huu unagundua kiotomatiki kama unatumia hosting ya WPMU DEV na kutumia API iliyojengwa ndani. Hakuna usanidi wa ziada unaohitajika ikiwa unatumia hosting ya WPMU DEV.

Uunganisho huu unakagua uwepo wa constant ya `WPMUDEV_HOSTING_SITE_ID`, ambayo inafafanuliwa kiotomatiki unapotumia hosting ya WPMU DEV.

## Maelekezo ya Usanidi {#setup-instructions}

### 1. Thibitisha Hosting ya WPMU DEV {#1-verify-wpmu-dev-hosting}

Ikiwa unatumia hosting ya WPMU DEV, constants zinazohitajika zinapaswa kuwa zimefafanuliwa tayari. Thibitisha kwamba:

1. Constant ya `WPMUDEV_HOSTING_SITE_ID` imefafanuliwa katika mazingira yako
2. Una uanachama hai wa WPMU DEV wenye ufikiaji wa API

### 2. Washa Uunganisho {#2-enable-the-integration}

1. Katika sehemu ya msimamizi wa WordPress, nenda Ultimate Multisite > Settings
2. Nenda kwenye kichupo cha "Domain Mapping"
3. Sogeza chini hadi "Host Integrations"
4. Washa uunganisho wa WPMU DEV
5. Bofya "Save Changes"

## Jinsi Inavyofanya Kazi {#how-it-works}

### Usawazishaji wa Kikoa {#domain-syncing}

Kikoa kinapounganishwa katika Ultimate Multisite:

1. Uunganisho unatumia API ya WPMU DEV kuongeza kikoa kwenye akaunti yako ya hosting
2. Pia kinaongeza toleo la www la kikoa kiotomatiki
3. WPMU DEV inashughulikia usanidi wa kikoa na utoaji wa cheti cha SSL

### Usimamizi wa Cheti cha SSL {#ssl-certificate-management}

Uunganisho huu umesanidiwa kuongeza idadi ya majaribio ya kuthibitisha cheti cha SSL kwa hosting ya WPMU DEV, kwani inaweza kuchukua muda kwa vyeti vya SSL kutolewa na kusakinishwa. Kwa kawaida, itajaribu hadi mara 10 kwa uthibitisho wa cheti cha SSL, ikilinganishwa na majaribio 5 ya kawaida.

## Maelezo Muhimu {#important-notes}

### Kuondoa Kikoa {#domain-removal}

Kwa sasa, API ya WPMU DEV haitoi njia ya kuondoa vikoa. Unapounganisho wa kikoa unapoondolewa katika Ultimate Multisite, kikoa kitabaki katika akaunti yako ya hosting ya WPMU DEV. Utahitaji kukiondoa wewe mwenyewe kutoka kwenye dashibodi ya hosting ya WPMU DEV ikiwa ni lazima.

### Uthibitishaji wa API {#api-authentication}

Uunganisho unatumia ufunguo wa API ya WPMU DEV uliohifadhiwa katika hifadhidata yako ya WordPress kama chaguo la `wpmudev_apikey`. Hii inasanidiwa kiotomatiki unapounganisha tovuti yako na WPMU DEV.

## Utatuzi wa Matatizo {#troubleshooting}

### Matatizo ya Muunganisho wa API {#api-connection-issues}
- Thibitisha kuwa tovuti yako imeunganishwa vizuri na WPMU DEV
- Kagua kuwa chaguo la `wpmudev_apikey` limewekwa katika hifadhidata yako ya WordPress
- Hakikisha kuwa uanachama wako wa WPMU DEV uko hai

### Matatizo ya Cheti cha SSL {#ssl-certificate-issues}
- WPMU DEV inaweza kuchukua muda kutoa vyeti vya SSL (kawaida dakika 5-15)
- Uunganisho umesanidiwa kukagua hadi mara 10 kwa vyeti vya SSL
- Ikiwa vyeti vya SSL bado havitolewa baada ya majaribio mengi, wasiliana na msaada wa WPMU DEV

### Kikoa Hakijaongezwa {#domain-not-added}
- Kagua kumbukumbu za Ultimate Multisite kwa ujumbe wowote wa hitilafu
- Thibitisha kuwa kikoa hakijaongezwa tayari kwenye WPMU DEV
- Hakikisha kuwa mpango wako wa hosting ya WPMU DEV unasaidia idadi ya vikoa unavyoongeza
