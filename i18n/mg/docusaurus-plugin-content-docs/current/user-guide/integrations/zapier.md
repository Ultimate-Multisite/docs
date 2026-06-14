---
title: Fandaharan'ny Zapier
sidebar_position: 12
_i18n_hash: 7f23136e0e69417e244a9930f9620e95
---
# Ultimate Multisite sy Zapier mifandray

Ao an'ny lahatsoratra iray, nolazainay ny momba ireo [Webhooks](webhooks.md) ary ny fomba azo ampiasaina amin'ny fampifandraisana amin'ny rindrambaiko hafa.

Ny fampiasana webhooks dia sarotra kely satria mitaky fahalalana lalina amin'ny fandaharana sy ny fanaraha-maso ireo *payloads*. Ny **Zapier** dia fomba iray ahafahanao manao izany.

Manana fampifandraisana amin'ny rindrambaiko mihoatra ny 5000+ an'ny Zapier izay manamora ny fifandraisana eo amin'ny rindrambaiko samihafa.

Afaka mamorona **Triggers** ianao izay ho mihetsika rehefa misy zava-nitranga eo amin'ny tambajotra (ohatra, nisy kaonty voarakitra ary miteraka ny *event* `account_create`). Na afaka manao **Actions** ianao eo amin'ny tambajotram-piara-miasa anao izay mihetsika amin'ny zava-nitranga ivelany (ohatra, famoronana fidirana vaovao ao amin'ny tambajotra Ultimate Multisite anao).

Mety atao izany satria ny **triggers** sy ny *actions* an'ny [Ultimate Multisite Zapier](https://developer.ultimatemultisite.com/api/docs/) dia miasa mampiasa ny [REST API](https://developer.ultimatemultisite.com/api/docs/).

## Ahoana no fanombohana

Voalohany, mitadiava Ultimate Multisite ao amin'ny lisitry ny fampiharana Zapier. Na dia afaka tsindrio ity [link ity](https://zapier.com/apps/wp-ultimo/integrations) aza ianao.

Mandehana any amin'ny *dashboard* anao ary tsindrio ny bokotra **+** **Create Zap** eo anaty lafiny ankavanana mba hanomanana Zap vaovao.

![Zapier dashboard miaraka amin'ny bokotra Create Zap](/img/admin/webhooks-list.png)

Ho rahitra ianao amin'ny pejy famoronana Zap.

Ao anatin'ny *search box*, soraty "wp ultimo". Tsindrio mba hisafidianana ny safidy **Beta**.

![Mitadiava WP Ultimo ao amin'ny lisitry ny fampiharana Zapier](/img/admin/webhooks-list.png)

Rehefa voafidy an'ity rindrambaiko ity, safidio ny *event* azo atao: **New Ultimate Multisite Event**.

![Safidy ny New Ultimate Multisite Event trigger](/img/admin/webhooks-list.png)

Ity dia mila manome fidirana an'ny **tambajotram-piara-miasa** anao i Zapier isika. Ny tsindriana amin'ny **Sign in** dia hanokatra varavarankely vaovao izay mitaky ny **API credentials**.

![Zapier Sign in prompt for API credentials](/img/admin/webhooks-list.png)

Mandehana ny panel admin anareo ary mandroso amin'ny **Ultimate Multisite > Settings** > **API & Webhooks** dia mitady ny faritra API Settings.

Safidio ny safidy **Enable API** satria ilaina izany mba hiara-miasa ity fifandraisana ity.

![API and Webhooks settings with API Settings and Enable API options](/img/admin/settings-api-webhooks.png)

Ampiasao ny sary **Copy to Clipboard** eo amin'ny sehatry ny API Key sy API Secret ary apetraho ireo sandana ireo ao amin'ny écran fandraisana (integration screen).

Eo amin'ny faritra URL, apetaho ny URL manontolo anareo ho an'ny tambajotra anareo, ahitana ny protocol (HTTP na HTTPS).

![Zapier integration screen with API Key, Secret, and URL fields](/img/admin/webhooks-list.png)

Tsindrio ny bokotra **Yes, Continue** mba handefasana amin'ny dingana manaraka. Raha mandeha tsara izany rehetra izany, dia ho voalaza anareo ny kaonty vaovao mifandray! Tsindrio ny **Continue** mba hamoronana trigger vaovao.

## Ahoana no famoronana Trigger vaovao

Rehefa mifandray ny kaontinao dia afaka mahita ireo zava-nitranga (events) azo atao ianao. Andeha safidio ny zava-nitranga **payment_received** ho an'ity tutorial ity.

![Selecting payment_received event in Zapier trigger](/img/admin/webhooks-list.png)

Rehefa voafidy ilay zava-nitranga ary tsindrio ny **continue**, dia hiseho ny **test step**.

![Zapier test step for the trigger](/img/admin/webhooks-list.png)

Amin'ity dingana ity, hanandrana ataon'i Zapier raha afaka **mitady ilay payload manokana ho an'io zava-nitranga io** ny Zap anareo. Amin'ny zava-nitranga mitovy amin'izany any aoriana, dia hisy fanomezana vaovao misy ity firafitry ny fampahalalana ity.

![Zapier trigger test completed successfully with payload](/img/admin/webhooks-list.png)

Ao anatinay amin'ny tutorial dia **nahavita tsara ny fanandramana** ary namerina ny ohatra fampahalalana (payload example information). Ireo fampahalalana ohatra ireo dia ho manampy antsika rehefa mamorona asa. Eto anefa, efa voaray ny trigger ary vonona hampifandraisana amin'ny rindrambaiko hafa izy.

## Ahoana no famoronana Actions (Asa)

Ny Actions dia mampiasa fampahalalana avy amin'ny triggers hafa mba hamoronana sokajy vaovao ao anatin'ny tambajotra (network) anareo.

Ao amin'ny **famoronana dingana action** ianao dia safidy ny Ultimate Multisite **Beta** ary ny safidy hoe **Create Items on Ultimate Multisite**.

![Creating an action with Create Items on Ultimate Multisite](/img/admin/webhooks-list.png)

Amin'ilay dingana manaraka, na mamorona ny authentication (fanamarinana) ianao toy izay nataontsika tao amin'ny **How to start**, na misafidy authentication efa voaray. Amin'ity tutorial ity dia safidy ny authentication efa vita teo aloha isika.

![Selecting authentication for the Zapier action](/img/admin/webhooks-list.png)

### Fametrahana ny Action (Action Setup)

Ity no **dingana lehibe amin'ny action** ary misy zavatra hafa kely eo. Ny fampahalalana voalohany izay safidinao dia ny **Item**. Ny Item dia ny **modely fampahalalana** anareo ao anatin'ny tambajotra, toy ny **Customers (Mpanjifa), Payments (Fandoavam-bola), Sites (Tranonkala), Emails**, ary hafa.

![Choosing Item type for the Zapier action](/img/admin/webhooks-list.png)

Rehefa misafidy item iray, dia hanova ny endrika ny forms mba hampidirana ireo fampahafantarana ilaina sy tsy ilaina ho an'ilay item voafidy.

Ohatra, rehefa misafidy ny item **Customer**, dia hisaraka ny fomba fametrahana ny forms izay mitondra ny zavatra rehetra ilaina mba hamoronana Mpanjifa vaovao ao anatin'ny tambajotra.

![Customer item fields in Zapier action setup](/img/admin/webhooks-list.png)

Rehefa vita ny famafazana ireo fampahafantarana voalaza fa **ilaina (required)** ary tsindrio ny continue, dia hiseho eo amin'ny efijery farany ny fampahalalana efa voafafana sy ireo fampahafantarana izay mbola tsy voafafana.

[Image: Zapier action test showing filled and unfilled fields](/img/admin/webhooks-list.png)

Ny foto fanandramana (test) anao dia vita sy nahomby, dia voarafitra ny fiasa anao izany. Zava-dehibe koa fa jereo amin'ny tambajotra (network) raha nisy zavatra no namboarina tamin'ilay test nataonao.
