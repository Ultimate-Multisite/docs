---
title: Webhook-yada
sidebar_position: 15
_i18n_hash: f8456622538d07af8f5aa36c1ec19249
---
# Aragti hore oo ku saabsan Webhooks (v2)

_**Xusuusin: Fiiro gaar ah inuu fursadta ama maqaalka tani u yahay isticmaalayaasha horumarsan.**_

**Webhook** waa hab uu app-ka ama software-ka sida Ultimate Multisite si ay u bixiyaan macluumaadka wakhtiga dhabta ah (real-time) apps kale. Webhook-gu wuxuu u dirayaa data ama payloads apps kale iyadoo dhacdo, taas oo macnaheedu yahay inaad **si degdeg ah hesho data**.

Tani waxay kaa caawin kartaa haddii aad u baahan tahay inaad isku xirto (integrate) ama aad u dirto macluumaad gaar ah oo ka yimid Ultimate Multisite app-ka kale CRM ama nidaam kasta markasta oo dhacdo la abuuro. Tusaale ahaan, waxaad u baahan kartaa inaad u dirto magaca iyo email-ka isticmaalaha liiska warqad (mailing list) markasta oo hal qof cusub la abuuro akoon.

## Sida loo sameeyo webhook

Si aad u samayso webhook, tag dashboard-ka maamulka shabakadahaaga (network admin dashboard). Guji **Ultimate Multisite > Webhooks > Add New Webhook**.

![Faxdaha liiska Webhooks oo aan la buuxin oo lagu darayo Webhook cusub](/img/admin/webhooks-list-empty.png)

Markaas waxaad wax ka beddeli kartaa qaabka webhook-ga:

![Barnaamijka ku darsiga Webhook cusub oo leh qaybaha Magaca, Dhacdo (Event), iyo URL](/img/admin/webhook-add-modal.png)

Marka aad samaynayso webhook cusub, waxaa laga codsan doonaa macluumaad sida **Magaca (Name), URL,** iyo **Dhacdo (Event)**. Waxaad isticmaali kartaa magac kasta oo aad rabto ee webhook-gaaga. Qaybaha ugu muhiimsan waa URL iyo Event.

![Sawirka interface-ka wax lagu beddelayo Webhook oo muujinaya qaybta URL iyo muuqaalka payload-ka](/img/admin/webhook-url-field.png)

URL-ku waa **endpoint ama meesha u socda** (destination) uu Ultimate Multisite ku dirayo **payload-ga ama data**. Waa app-ka qaadaya macluumaadkaas.

Zapier waa xalka ugu caansan ee isticmaalayaasha adeegsada si ay fududaato isku xirnaanta (integration) app-yada saddexaad. Iyada la'aanta platform sida Zapier, waxaad u baahan doontaa inaad si gacanta ah u samayso function gaar ah oo soo qaadaysa data oo waxay ka shaqaysaa. Waxaad arki kartaa maqaalkan ku saabsan **sida loo isticmaalo webhook-ka Ultimate Multisite ee Zapier**.

Maqaatan kuwan, waxaan diiridhaan fikradda aasaasiga ah sida webhook-ka u shaqeeyo iyo dhacdooyinka la heli karo Ultimate Multisite. Waxaan isticmaalaynaa meel saddexaad oo la yiraahdo [requestbin.com](https://requestbin.com/). Meeshaani waxay noqon doontaa inay nagu oggolaato inaan abuurno endpoint (meel gaar ah) oo aan code-gareyn, si aan u qabannay payload-ka iyada oo aan wax coding ah ku samayn. _**Fadlan ogow: dhammaan waxa ay sameynayaan waa inay nala muujiyaa in xogta la qaaday.**_ Ma jirto wax hagaajin ama ficil ah oo lagu sameeyo payload-ka.

Tag [requestbin.com](https://requestbin.com/) oo riix "Create Request Bin".

Markaad riixdo badhankaas, waxay ku weydiin doontaa inaad galo haddii aad horeyso lahayd account ama inaad samayso mid cusub. Haddii aad horeyso lahayd account, waxay si toos ah kuu qaadi doontaa dashboard-ka (barnaamijka) ay leeyihiin. Dashboard-kan, waxaad isla markiiba arki doontaa endpoint-ka ama URL-ka aad isticmaali karto inaad abuurtid webhook-kaaga Ultimate Multisite.

Hadda, nuqul (copy) URL-ka oo ku dhex qabso oo dib ugu laabso Ultimate Multisite. Ku dhig endpoint-ka qaybta URL-ka oo dooro dhacdo (event) ka mid ah liiska hoos ahaan. Tusaale ahaan, waxaan doonayna inaan doorano **Payment Received** (Lacag la qaaday).

Dhacdan waxaa la dhiga marka isticmaaleyaha lacag bixiyo. Dhammaan dhacdooyinka la heli karo, sharraaftooda, iyo payload-yada ayaa lagu qorayaa hooska bogga. Riix badhanka **Add New Webhook** si aad u kaydsato webhook-kaaga.

![Webhook event dropdown with Payment Received selected](/img/admin/webhook-event-picker.png)

Hadda, waxaan u dirnaa dhacdo test ah endpoint-ka si aan u aragno in webhook-ka aan abuuro uu shaqaynayo. Waxaan taas samayn karnaa iyadoo la riixayo **Send Test Event** hoos ka dhaca webhook-ka aan abuuro.

![Webhooks list showing one configured webhook and Send Test action](/img/admin/webhooks-list-populated.png)

Tani waxay muujinaysaa daaqad oggolaansho (confirmation window) oo sheegaysa in test-ka uu guuleystay.

![Webhook test event result after sending a test payload](/img/admin/webhook-test-result.png)

Hadda haddii aan ku noqono meesha loo yaqaano _Requestbin_, waxaad arki doontaa in payload-ka la qaaday uu soo gaaray isagoo leh macluumaad tijaabo ah.

Waa mabaadi'da aasaasiga ah sida webhook iyo endpoints ay u shaqeeyaan. Haddii aad rabto inaad samayso endpoint gaar ah (custom endpoint), waxaad u baahan doontaa inaad samayso function gaar ah oo lagu maamulo macluumaadka aad ka helay Ultimate Multisite.
