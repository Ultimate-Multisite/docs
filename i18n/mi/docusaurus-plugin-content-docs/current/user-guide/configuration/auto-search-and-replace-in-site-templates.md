---
title: Whakawāhi me Whakawāhi i Aotūroa i Tīmatanga Wāhi
sidebar_position: 8
_i18n_hash: 0842f53505d24579010d91568e06ef68
---
# Auto Search and Replace i Te Tātai Wānanga (v2) {#auto-search-and-replace-in-site-templates-v2}

_**Ko tēnei mōhaka e hiahia ana ki WP UItimo version 2.x.**_

He tētahi o ngā āhua tino pai o Ultimate Multisite he mea e taea ai ia te whai i te whakamahi o tikanga, rangi, me ngā fēka (fields) i te ao o te whakamārama (registration form). I raro i te mahi, inae ahau i tēnei data, he taea ai mātou te whakamahi i ai ki te whakamaoritanga i te mea i roto i ngā wāhi mō te template site e whai ake. I raro i tēnei, i whakaritea ko te site hou, ka whakamaoritia e Ultimate Multisite i ngā placeholder (wāhi whakatutuki) ki te whakamahi i te mōhaka tino tika i te whakatutuki i te registration.

Moe, he taea ai koe te whakamahi i ngā template sites me ngā placeholder. Me whai i ngā placeholder e whakatutuki ana i ngā kōwhai (double curly braces) - {{placeholder_name}}.

I raro i tēnei, he taea ai koe te whānui i ngā fēka o te registration ki te whakatukia akorua i te data.

Ka whakamaoritia e Ultimate Multisite i ngā placeholder ki te data e whai ake ana i te whaiaro e whai ake.

## **Whakahaere i te "template mōhaka paku"** {#solving-the-template-full-of-placeholders-problem}

He tino pai katoa, engari he pēnei te mea, he pēnei te pēnei: ngā template site o tātou - i te taea ai ngā customer ahau te pahi ki te whakatika ana - e paku ana ngā placeholder (wāhi whakatutuki) e hiahia ana i te whakamārama nui.

Ki whakamaoritia tēnei, he mea e taea ai mātou te whakarite i ngā wāhi whakatutuki me ngā mōhaka (values) paku, ā, he whakamaoritia ahau ngā mōhaka o ngā template sites i roto i te wā e pahi ngā customer.

He taea ai koe te whai i te editor o ngā placeholder i te mea i whai i **Ultimate Multisite > Settings > Sites**, i whakatika ki te wā "Site Template Options", ā, he whakatipu ki te link **Edit Placeholders**.

![Site Template Options area in the Sites settings page](/img/config/settings-sites-templates-section.png)

Ka kawe koe ki te editor o ngā placeholder i tēnei wā, i te mea e taea ai koe te whai i ngā placeholder me ngā mōhaka (content) o ngā mea.

![Pāua o te whakatō template](https://example.com/img/config/settings-sites-templates-section.png)
