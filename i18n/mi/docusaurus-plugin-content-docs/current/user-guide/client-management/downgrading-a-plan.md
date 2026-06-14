---
title: Whakawhanaungatanga i te Whakamutunga o te Rōpū
sidebar_position: 7
_i18n_hash: ce49309d1cd1d8310fd360fa324119f3
---
# Whakamutunga i te plan (v2)

_**Tohito WAIPA: Ko tēnei tikanga he tino whakamahinga mō Ultimate Multisite v2.x.**_

He mea e taea ai ngā wāhi whai mo te whakatū i te plan peke, he mea e pēnei ana ki te tino whakahou (downgrade) he tino whakatau ngā wāhi whai mo te whakatū i te plan peke, ko mōna whānau he nui rawa i ngā rātou manawa hei whakahaere i te subsite.

## He aha te mea e taea ai ki te whakamutunga i te plan

He mea e taea ana i ngā wāhi whai mo te whakamutunga i te plan, ko i roto i te wā e tino mārama (logging in) ki te admin dashboard o te subsite, he pūmau **Change** (Chang) i runga i te puta mai o te manawa.

![Customer account page with Your Membership card and Change button](/img/account-page/membership-change-button.png)

I roto i te wā e tino mārama i te pūmau **Change**, ka whai whakaae ai te user/client ki te puta mai ki te puta mai o te checkout page, ko tēnei he mea e taea ai te whiriwhiri i te plan e tika ana kia whakawhiti i te subscription.

![Downgrade plan options page on the customer side](/img/account-page/downgrade-picker.png)

I tēnei whakamārama, he tino whakamutunga (downgrading) ko te plan mai **Premium** ki **Free**.

Mō te whakatika i tēnei mea, he tino whakamutunga ana te user ki te puta mai o te button **Complete Checkout**. Ka whai whakaae ai i te puta mai ki te puta mai o te account page e hoki mai ki te whakatau mō te whakawhiti e pēnei ana. Ko ngā whakawhiti e tika ana i te **cycle o te billing** (billing cycle) o te customer.

![Account page showing pending membership change banner](/img/account-page/pending-change.png)

### He aha te mea e titiro ai i te user i te whakamutunga i te plan

He tino mōhio ana, he nui te whakahou (downgrading) i te plan, he ka whakawhiti i te configuration e hoki mai i te user o te subsite.

He kāore ia e whakawhiti te site template anō automatically ko te whakawhiti i te site template he kawhakatau katoa me te whakatika (erase and reset) i te subsite. He mea he tēnei mōna hei whakatū i te whakatutuki i ngā data nui e hihiko ana. Ko te disk space, themes, plugins, etc., he tino tika ko ka oti, ko i roto i ngā posts anō.

He whai ake nei he whakaaro mātou: mō te mea e tino whakamāhiotia ana, ko ngā pango me ngā quota (limit) e puta mai i roto i every plan, engari me te whakaaro mātou i te whakawhanake e taea te hoki ki te user's subsite (subsite o te user) inae me te whakahoki i ngā configuration (settings) e taea te whakatika.

Mō ngā posts (pango) e whai anaha (exceed) i te limit e puta mai i te plan, he tino option (option) tino whero (3 options): **Keep the posts as it** *,* **Move the posts to trash** *,* he tino **Move the posts to draft** *.* Ko te whakamaoritanga (configure) ko e taea ana i tēnei under Ultimate Multisite settings.

![Network Admin Settings Sites page showing post-limit-exceeded behaviour options](/img/account-page/settings-sites-post-limit.png)

### He aha te hua mō te payment (whakamutunga)

I version 2.0, he tino whai anaha ana i ngā whakaritanga (adjustments) mō te proration (whakawhanaungatanga o te billing).

Ko ko te mea i te whakaaro ahau, ka whai te system (system) ki te wait (wait) mo te **complete its billing cycle before** (whakamutunga i te cycle o te billing i te whakatū) noa i te membership e kino (existing membership), **before** (i te wae) ko te new plan/membership e pēnei ana (take effect). Ko te amount o te billing hou mō te new membership, ka horopoko (automatically applied) me ka charge (charged) i te next billing cycle.
