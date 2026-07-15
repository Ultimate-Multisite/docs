---
title: Isdhexgalka Zapier
sidebar_position: 12
_i18n_hash: 7f23136e0e69417e244a9930f9620e95
---
# Iskuulka Ultimate Multisite iyo Zapierka Lagu Xiriirayo

Maqaallo ka mid ah, waxaan ka warrabixiyay [Webhooks](webhooks.md) sida loo isticmaali karo si loo xiriirayo barnaamijyada saddexaad (3rd party applications).

Isticmaalka webhooks waa shay oo xooggan sababtoo ah waxay u baahan macluumaad sare oo ku saabsan coding iyo in la qabto waxyaabaha soo socda (payloads). Isticmaalka **Zapier** waa hab aad ka fogaan karto dhibaatadaas.

Zapier wuxuu leeyahay isdhexgalka (integration) ka badan 5000 barnaamij oo ka caawiya in la fududeeyo waraaq-qaadashada (communication) inta u dhaxaysa barnaamijyada kala duwan.

Waxaad samayn kartaa **Triggers** (dhiirigelin) kuwaasoo dib u shaqeeya marka dhacdooyin ka dhaca shirkaddaada (tusaale, xog cusub oo la abuuro oo keenta dhacdada `account_create`) ama aad samayn karto **Actions** (marka laga jawaabo) oo ku saabsan shirkaddaada iyadoo la tixgelinayo dhacdooyin dibadda ah (tusaale, abuurista xubnimo cusub oo kooxda Ultimate Multisite-kaaga).

Tani waxay suurtagalka ah tahay sababtoo ah **Ultimate Multisite Zapier's triggers** iyo actions waxaa la hawlgeliyay [REST API](https://developer.ultimatemultisite.com/api/docs/).

## Sida Loo Bilow {#how-to-start}

Marka hore, raadi Ultimate Multisite app-ka Zapier-ga ah. Sida kale, waxaad ku riix kartaa [link-kan](https://zapier.com/apps/wp-ultimo/integrations).

U gudbi dashboard-kaaga oo riix badhadda **+** **Create Zap** ee dhinaca bidix si aad u diyaarisid Zap cusub.

![Zapier dashboard with Create Zap button](/img/admin/webhooks-list.png)

Waxaad la wareegi doontaa bogga abuurista Zap-ka.

In qalab raadinta (search box)-ka ku qor "wp ultimo". Riix si aad u doorato dooro **Beta** version-ka.

![Searching for WP Ultimo in Zapier app list](/img/admin/webhooks-list.png)

Marka aad doorato app-kaaga, dooro dhacdooyinka la heli karo: **New Ultimate Multisite Event**.

![Selecting New Ultimate Multisite Event trigger](/img/admin/webhooks-list.png)

Hadda waxaan u baahanahay inaan Zapier u siino fursad inay heliso isticmaalid (access) shirkaddaada. Marka aad riixdo **Sign in**, waxay furaysaa daaqad cusub oo u baahan **API credentials**-ka.

![Zapier Sign in prompt for API credentials](/img/admin/webhooks-list.png)

Mee gudaha network admin panel-ka aada, ka tagi **Ultimate Multisite > Settings** > **API & Webhooks** oo raadi qaybta API Settings.

Dooro doorashada **Enable API** (Furita API) sababtoo ah waa loo baahan yahay in isku xirnaanadan ay shaqeeyaan.

![API and Webhooks settings with API Settings and Enable API options](/img/admin/settings-api-webhooks.png)

Isticmaal astaanta **Copy to Clipboard** (Ku dhex-geli Clipboard-ka) ee qaybaha API Key iyo API Secret, ka dibna ku dheji qiimahaas shaashadda isku xirista (integration screen).

Qaybta URL-ka, ku qor URL-ka buuxa ee network-kaaga, oo ay ku jirto protocol-ka (HTTP ama HTTPS).

![Zapier integration screen with API Key, Secret, and URL fields](/img/admin/webhooks-list.png)

Riix badhka **Yes, Continue** (Haa, sii wad) si aad u gudubdo tallaabada xigta. Haddii dhammaan ay shaqeeyaan, waxaad la kulmi doontaa account-kaaga cusub ee la isku xiray! Riix **Continue** (Sii wad) si aad u abuurtid trigger cusub.

## Sida loo abuuro Trigger cusub {#how-to-create-a-new-trigger}

Hadda oo account-kaagu la isku xiray, waxaad arki kartaa dhacdooyinka la heli karo. Aan doorano dhacdada **payment_received** (Lacag la helay) ee casharkaas.

![Selecting payment_received event in Zapier trigger](/img/admin/webhooks-list.png)

Marka aad doorato dhacdada oo aad riixdo **continue**, waxaa soo muuqan doona **test step** (tallaabada imtixaanka).

![Zapier test step for the trigger](/img/admin/webhooks-list.png)

Gabagalkani, Zapier wuxuu hubinayaa in Zap-kaaga uu awoodo inuu **la qaado payload-ga gaarka ah ee dhacdadaas**. Dhacdooyinka kale ee isku midka ah, macluumaadka la midka ah qaabkan ayaa la soo diraya.

![Zapier trigger test completed successfully with payload](/img/admin/webhooks-list.png)

Markaashada testka waxaa si guuleed loo dhammaystiray oo ay soo celisay macluumaadka tusaalaha payload-ka ah. Macluumaadka tusaalahani wuxuu noqon doonaa mid muhiim ah inaan hagino marka aan samaynno actions (tallaabooyin). Trigger-kaaga ayaa hadda la abuuraa oo diyaar u yahay in la xiriiro barnaamijyo kale.

## Sida loo abuuro Actions {#how-to-create-actions}

Actions waxay isticmaalaan macluumaadka laga helo triggers kale si ay u abuuraan faallo cusub oo ku jira shabakadahaaga (network).

Marka aad **samaynayso action step-ka**, waxaad dooraysaa Ultimate Multisite **Beta** iyo doorarka ah **Create Items on Ultimate Multisite**.

![Creating an action with Create Items on Ultimate Multisite](/img/admin/webhooks-list.png)

In tallaabta xigta, waxaad ama samayn kartaa authentication-kaaga (xaqiijinta aqoonsiga), sida aan sameynay **How to start**-ka, ama aad doorato mid hore loo abuuro. In tutorialkan, waxaan dooran doonaa authentication-ka horey loo abuuro.

![Selecting authentication for the Zapier action](/img/admin/webhooks-list.png)

### Dejinta Action-ka (Setting up the Action) {#setting-up-the-action}

Tani waa **tallaabta ugu muhiimsan ee action-ka**, halkan waxyaabaha ayaa si yar oo kala duwan u ah. Macluumaadka ugu horreeya ee aad dooran doontid waa **Item**. Item waa qaabka macluumaadka (information model) shabakadahaaga sida **Customers, Payments, Sites, Emails** iyo kuwa kale.

![Choosing Item type for the Zapier action](/img/admin/webhooks-list.png)

Marka aad dooranayso item, foomku wuxuu **isbeddelayaa si uu u soo bandhigo qaybaha loo baahan yahay iyo kuwa la isku dayi karo (optional)** ee item-ka aad dooratay.

Tusaale ahaan, marka aad dooranayso item-ka **Customer**, foomka waxa uu soo qaadayaa dhammaan waxyaabaha loo baahan yahay si aan u buuxiyo si aan u abuuro Customer cusub oo shabakadaha ah.

![Customer item fields in Zapier action setup](/img/admin/webhooks-list.png)

Marka aad buuxisid dhammaan qaybaha lagu tilmaamay **required** (waajib ah) oo aad gujiso continue, shaashad ugu dambeysa ayaa kuu soo bandhiga macluumaadka la buuxiyay iyo kuwa aan la buuxin.

![Zapier action test showing filled and unfilled fields](/img/admin/webhooks-list.png)

Marka aad ku dhammaato imtixaanka oo uu guulaysto, habkaaga (action) wuxuu si toos ah u hagaagsan yahay. Waa muhiim in aad sidoo si hubiso shabakadahaaga haddii shayga la abuuro uu ahaa natiijada imtixaha habkaaga.
