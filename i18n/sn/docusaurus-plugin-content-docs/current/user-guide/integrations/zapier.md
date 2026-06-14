---
title: Kugadzirisa Zapier
sidebar_position: 12
_i18n_hash: 7f23136e0e69417e244a9930f9620e95
---
# Kuita Ultimate Multisite neine Zapier

Mune muita mweya, tinagadzirisa [Webhooks](webhooks.md) uye kuti zviri kuendesa naye nekuti zvichangopfungwa kuitanisa nemapuator anonyanya vakaoma.

Kutanga kutenda webhooks kunogona kunge kune kuratidza kwakawanda, kunenge kune zvinokosha mumweya uye kuti uone zvinhu zviri kuita (payloads). Kutanga ne **Zapier** ndiyo nzira inotenderera iwe kuti usawane naye.

Zapier inenge inowanikira kutanisa nemapuator akawanda anonyanya vakaoma 5000+ uye izvi zvinokufarira kuita kunge kune kuratidza kwakawanda pakati pe mapuator ekuti zvinhu zviri kuita zvinhu zvakanaka.

Unogona kuita **Triggers** (Mavhondso) anozivaka kana zvichangopfungwa kana zvinhu zviri kuita mumweya wako (sekuita account uye kunge kuitanga event ya account_create) kana kuita **Actions** (Zvinotenderera) mumweya wako kuti zvisarurire zvinhu zvakare kubva pamapuator ekutanga (sekuita membership yakare yechikamu mune Ultimate Multisite network yako).

Izvi zvinoita nekuti **Ultimate Multisite Zapier's triggers** uye actions dzine kuita ne [REST API](https://developer.ultimatemultisite.com/api/docs/).

## Kuita sei

Mazuva akapfiri, unogona kutanga kunge Ultimate Multisite mu app list ya Zapier. Nekuti iwe rakaunyangana, unogona kuita [this link](https://zapier.com/apps/wp-ultimo/integrations).

Enda kuenda kwenye dashboard yako uye chibvumirano **+** **Create Zap** pamweya wako wekuti utange zap new.

![Zapier dashboard with Create Zap button](/img/admin/webhooks-list.png)

Utaunwa kuenda kwenye page yekutanga zap.

Mune search box, ndichira "wp ultimo". Chira kuti uone option ya **Beta**.

![Searching for WP Ultimo in Zapier app list](/img/admin/webhooks-list.png)

Panguva unochera app yedu, chira event inowanikira: **New Ultimate Multisite Event**.

![Selecting New Ultimate Multisite Event trigger](/img/admin/webhooks-list.png)

Nekuti ndiri kuita kuti Zapier ine access kune **network yako**. Chira mu **Sign in** chinogona kunge kuita window yakare inodzinga **API credentials**.

![Zapier Sign in prompt for API credentials](/img/admin/webhooks-list.png)

Penda kuenda kwenye panel yako ya admin wenyewe (network admin panel) na uende kwa **Ultimate Multisite > Settings** > **API & Webhooks** ukutafute sehemu ya API Settings.

Chagua chaguo la **Enable API** kwani ni muhimu ili muungano huu uweze kufanya kazi.

![API and Webhooks settings with API Settings and Enable API options](/img/admin/settings-api-webhooks.png)

Tumia ikoni ya **Copy to Clipboard** kwenye sehemu za API Key na API Secret ukakopi zile thamani zako kuziweka kwenye skrini ya integration.

Kwenye fani ya URL, chagua URL yako yote ya mtandao, iwe ni HTTP au HTTPS.

![Zapier integration screen with API Key, Secret, and URL fields](/img/admin/webhooks-list.png)

Chagua kitufe cha **Yes, Continue** ukuiende kwa hatua inayofuata. Kana chokwadi chinonwa kuona akaunti yako mpya iliyoungana! Chagua **Continue** ili kuanza trigger mpya.

## Jinsi ya kuunda Trigger mpya

Sasa uko na akaunti imejungushwa, unaweza kuona matukio yanayopatikana. Tuchague matukio ya **payment_received** kwa ajili ya hio tutorial.

![Selecting payment_received event in Zapier trigger](/img/admin/webhooks-list.png)

Mara tu utakapochagua tukio hilo na ukapakiwa **continue**, kutakuwa na hatua ya majaribio (test step).

![Zapier test step for the trigger](/img/admin/webhooks-list.png)

Katika hatua hii, Zapier itajaribu kama Zap yako inaweza **kupata payload maalum kwa tukio hilo**. Matukio mengine ya aina hiyo yatafanya hivyo na muundo ule ule wa habari utafanywa.

![Zapier trigger test completed successfully with payload](/img/admin/webhooks-list.png)

Muninga wese mutoriro wose, ndiri **akagadzirwa zvakanaka** uye achipa chishanduro chekuita (payload example information). Chishanduro ichi chinogona kuita kuti tiri kuratidze kana tikatiine zvinotora. Trigger yako imweya yakagadzirwa uye inogona kutanga kuitana nekuita zvinhu zvakasiyana-nyaya.

## Sei Kuratidza Actions (Actions)

Actions dzinoratidza matanho ekuti dziri kuita zvinotora mune nzvimbo yako yakawanda (network).

Muninga **kuratidza action step**, uchaona Ultimate Multisite **Beta** uye chine option ya **Create Items on Ultimate Multisite**.

![Creating an action with Create Items on Ultimate Multisite](/img/admin/webhooks-list.png)

Mune nguva isingiro, unogona kuratidza authentication yako, seunenge rakaita mu **How to start**, kana utange authentication yakagadzirwa. Mune this tutorial, tiri kuita authentication yakanaka yakagadzirwa.

![Selecting authentication for the Zapier action](/img/admin/webhooks-list.png)

### Kuratidza Action (Setting up the Action)

Iyi **nguva yakakosha yekuti action iite**, uye pano zvinhu zviri kune kuratidzo kwakasiyana. Chishanduro chatinogona kuita nguva yakare, ndiri **Item**. Item ndiri **model ye matanho** ekunzwisisa yako yakawanda, se **Customers (Vakakubatsira), Payments (Mhando dzemakasi), Sites (Maviri), Emails**, uye zvinhu zvakasiyana.

![Choosing Item type for the Zapier action](/img/admin/webhooks-list.png)

Nekuti unenge ukutanga Item, form inogona **kugadzirwa kuti itore zvinotore nezvakakosha** zveItem yakagadzirwa.

Zvakasiyana, kana uchigadzira Item **Customer**, zvinhu zveform dzichatonga zvose zvakakosha kuti uite Customer wekutanga mune network yako.

![Customer item fields in Zapier action setup](/img/admin/webhooks-list.png)

Apana unenge ukatiine zvose zvinotore uye utange continue, chine screen chinotora zvinhu dzakagadzirwa nezvinhu zvakasiyana zvakasiyana zvakaisarirwa.

![zapier action test showing filled and unfilled fields](/img/admin/webhooks-list.png)

Pasi ndiriwo kana chokwadi kuti uri kuita test uye inenge inenge inenge inenge yakapfuura, action yako inenge yakagadzirwa. Kunzwisisa zvakakosha kutaura ne network yako kuti zvinhu zvakaita zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita nezvinhu zvakaita
