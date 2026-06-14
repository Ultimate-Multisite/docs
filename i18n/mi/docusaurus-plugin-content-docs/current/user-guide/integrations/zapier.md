---
title: Whakawhanaungatanga Zapier
sidebar_position: 12
_i18n_hash: 7f23136e0e69417e244a9930f9620e95
---
# Whakarite i Ultimate Multisite me Zapier

I roto i taroa, te whakataki, i korero mātou mō [Webhooks](webhooks.md) ā, ka taea te whakamahi i ahau ki te whai wāhi me ngā mea e hoki mai ana (3rd party applications).

Te whakamahi i webhooks he tino pēke, i roto i te mea e hiahia ana i mōhio nui ki te coding me te whakahaere i ngā payload. Te **Zapier** he heata mā te whai wāhi i tēnei.

He whaiaro Zapier me i te whaiwāhi i te app whānui (over 5000+) e tino whaiaro ai te whaikōrero i waenga i ngā mea kaha.

Mā te whakamahi i **Triggers** (whakamahi) he taea ai ki te whakakihikitia i ngā mahi i runga i tō wāhi (eg, ka puta he account ahau me kehi i te event_create) me te whero **Actions** (tāwhiri) i runga i tō wāhi e hoki mai ana i ngā mea e hoki mai ana (eg, ka puta he membership hou i tō wāhi Ultimate Multisite network).

He tino tika ko te taea te whakamaoritia pēnei i te **Ultimate Multisite Zapier's triggers** me actions, i roto i te mea āwhina ai ngā [REST API](https://developer.ultimatemultisite.com/api/docs/).

## He aha te whakatō? (How to start)

I muri, whakatika i Ultimate Multisite i te list o apps o Zapier. Kei te pēke, whai i te **+** button **Create Zap** i te sidebar pō.

![Zapier dashboard with Create Zap button](/img/admin/webhooks-list.png)

Ka hoki ai ki te manawa whakamāhi (Zap creation page).

I te search box, kōrero "wp ultimo". Whakawhiti kia chono i te option **Beta**.

![Searching for WP Ultimo in Zapier app list](/img/admin/webhooks-list.png)

I muri i te chono i tō app, chono i te event e kaha ana: **New Ultimate Multisite Event**.

![Selecting New Ultimate Multisite Event trigger](/img/admin/webhooks-list.png)

I muri, he mea nui ona te whaiaro i ngā **your network** (tō wāhi). Ka whakatika i **Sign in** ka ka puta he window hou e hiahia ana i ngā **API credentials**.

![Zapier Sign in prompt for API credentials](/img/admin/webhooks-list.png)

Go ki te panel admin o koe i te wāhi, he whakatika ki **Ultimate Multisite > Settings** > **API & Webhooks** ā, he whakaaro ki te whakatū API Settings.

Whakarite i te option **Enable API** ko, kia tino kitea ana ia mō tēnei koneki kia maha i te mahi.

![API and Webhooks settings with API Settings and Enable API options](/img/admin/settings-api-webhooks.png)

Whakarite i te icon **Copy to Clipboard** (Kopero ki te Clipboard) mo ngā fields o API Key me API Secret, ā, whakatira i oi ngā wāhi atu i te screen o te integration.

I te field URL, whakatira i te URL māori o koe, kia whai i te protocol (HTTP he HTTPS).

![Zapier integration screen with API Key, Secret, and URL fields](/img/admin/webhooks-list.png)

Whakatira i te button **Yes, Continue** mo te whakawhanake ki te wā atu. Ko te mea katoa e pēnei ana, ka e hoki ai koe ki te account hou kua whai akorua! Whakatira i **Continue** kia whakatō i trigger hou.

## He aha te whakamahi mō te whakatō Trigger hou

I te wā kua whai akorua koe, ka taea e koe te kite ngā events (au ngā mahi) e kaha ana. Kia tino pēnei te whiri i te event **payment_received** mo tēnei tutorial.

![Selecting payment_received event in Zapier trigger](/img/admin/webhooks-list.png)

I te wā kua whiri koe i te event, ā, ka whakatira i **continue**, ka e pōutu he **test step** (whakawāhi whakamārama).

![Zapier test step for the trigger](/img/admin/webhooks-list.png)

I tēnei wā, ka e whakamārama ai te Zap kia kaha ki te **fetch i te payload tika mo tēnei event**. Mo ngā events atu o te wā mua, ka e rite te mōhio (information) me tēnei structure.

![Zapier trigger test completed successfully with payload](/img/admin/webhooks-list.png)

I whakataki i te whakamārama: I te tutorial mātou, ka **whakamārama akorua** (completed successfully) ko te whakamātautanga, ā, i whai i te whakamahi i te whakamārama o te payload example information. Ko te whakamārama oinei e hiahia ana ki te tūmanako mātou i roto i te whakawhitenga ngā mahi. He tino pai ai tēnei mō tātou i roto i te whakamaoritanga o ngā mahi. Ko te trigger (whakamārama) ko tino whakatika koe i ā te ora, ā, he hono ana ki ngā mea hou.

## I te whakamahi: Ka whakawhana hou Actions

Ko ngā Actions (ngā mahi) e whai ana i te mōhio o ngā trigger hou kia whakatō i ngā entry hou i tō wāhi.

I te **whakawhana te action step** koe, ka whai koe ki te Ultimate Multisite **Beta** ā, ko option o **Create Items on Ultimate Multisite**.

![Creating an action with Create Items on Ultimate Multisite](/img/admin/webhooks-list.png)

I te whakamārama hou, ka whakawhana koe i tō authentication (whakamārama), ahakoaho ana ki te mea kua whakatika mātou i **How to start**, ahau e whai i te authentication kua whakatika mō tātou.

![Selecting authentication for the Zapier action](/img/admin/webhooks-list.png)

### Whakawhana te Action (Setting up the Action)

Ko tēnei te **whakamārama nui o te action**, ā, he tino whakaaro hou i roto i te mea. Ko te mōhio hou i whakaputa koe ko te **Item**. Ko te Item he **model o mōhio** o tō wāhi, ahakoaho ana ki **Customers (Ngā mea whai whakataki), Payments (Ngā whakamahi), Sites (Ngā wāhi), Emails**, me ngā mea hou.

![Choosing Item type for the Zapier action](/img/admin/webhooks-list.png)

I te whakawhana i te item, ka **whakawhana te fōrm** kia whakatika i ngā fields (ngā mōhio) e pēnei ana ki te item kua whakatika.

Mō ahau, i roto i te whakawhana i te item **Customer**, ka whakaputa te fōrm ko katoa o te mea e tika ana me te mea e taea kia whakatika kia whakatō i te Customer hou i tō wāhi.

![Customer item fields in Zapier action setup](/img/admin/webhooks-list.png)

I ngā fields (mōhio) katoa kua whakahou koe ko **required** (whakamārama), ā, ka whakatika koe i te continue (whakatika mō). Ka whakaatu i tōna screen whakamutahi i ngā fields kua whakahou koe me ngā fields kua whai ake.

![Zapier action test showing filled and unfilled fields](/img/admin/webhooks-list.png)

Ko te whakamārama i tō whakamātautanga i whakatāua me te pēhea i whakawātea i tō action (action) he tino nui. Ko koa ki te whakaahuatanga o tō action, engari he mea nui hoki te whakaaro i tō whene (network) kia kore e ngā item (items) kua oti te whakamātautanga i whakamaoritia.
