---
title: GoCardless Changelog
sidebar_position: 99
_i18n_hash: 6fb81ff030ca403765c66d8e86a50faa
---
# Log ng Pagbabago ng GoCardless

Version: 1.0.3 - Inilabas noong 2026-05-05
* Inayos: Kapag kinansela ang membership ng GoCardless habang nasa *pending* o *on-hold* state, nililinis na ngayon ang mga *orphaned* (walang-ari) na *pending sites*.
* Pinahusay: Hindi na tumatakbo ang *plugin autoloader* kapag nag-load na ng *dependencies* ang *Bedrock root autoloader*.

Version: 1.0.1 - Inilabas noong 2025-09-28

* Binago ang *prefix* sa *ultimate-multisite*; in-update ang *text domain*; at nag-bump ng *version*.

2021-09-24 - Version 1.0.0-beta.4

* Idinagdag: ang *filter* na `wp_ultimo_skip_network_active_check` para sa mga *mu-plugins based setups*;

2021-06-16 - Version 1.0.0-beta.3

* Inayos: ang mga *webhook handlers* na hindi makumpirma ang mga *signatures*;

2021-06-14 - Version 1.0.0-beta.2

* Pinahusay: I-publish ang site pagkatapos mabuo ang *GoCardless mandate*;

Version 1.0.0-beta.1 - Initial Version
