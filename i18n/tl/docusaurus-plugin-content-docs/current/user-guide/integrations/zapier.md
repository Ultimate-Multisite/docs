---
title: Integrasyon ng Zapier
sidebar_position: 12
_i18n_hash: 7f23136e0e69417e244a9930f9620e95
---
# Pag-integrate ng Ultimate Multisite sa Zapier

Sa isa sa mga artikulo, tinalakay natin ang [Webhooks](webhooks.md) at kung paano ito magagamit para makipag-ugnayan sa mga third-party application.

Ang paggamit ng webhooks ay medyo kumplikado dahil nangangailangan ito ng advanced na kaalaman sa coding at pagkuha ng mga payload. Ang **Zapier** naman ay isang paraan para malampasan iyan.

May integrasyon ang Zapier sa mahigit 5000+ apps na nagpapadali sa komunikasyon sa pagitan ng iba't ibang application.

Maaari kang gumawa ng mga **Triggers** na magsisimulang tumakbo kapag may nangyayaring pangyayari sa iyong network (halimbawa, ang isang account ay nalikha at nag-trigger ito ng `account_create` event) o gumawa ng mga **Actions** sa iyong network na tumutugon sa mga panlabas na pangyayari (halimbawa, lumikha ng bagong membership ng account sa iyong Ultimate Multisite network).

Ito ay posible dahil ang mga **triggers** at **actions** ng **Ultimate Multisite Zapier** ay pinapagana ng [REST API](https://developer.ultimatemultisite.com/api/docs/).

## Paano Magsisimula

Una, hanapin ang Ultimate Multisite sa listahan ng app ng Zapier. O kaya naman, maaari kang mag-click sa [link na ito](https://zapier.com/apps/wp-ultimo/integrations).

Pumunta sa iyong dashboard at pindutin ang **+** **Create Zap** button sa kaliwang sidebar para mag-set up ng bagong Zap.

![Zapier dashboard with Create Zap button](/img/admin/webhooks-list.png)

Maaaring ma-redirect ka sa page ng paglikha ng Zap.

Sa search box, i-type ang "wp ultimo". I-click ito para piliin ang opsyon na **Beta**.

![Searching for WP Ultimo in Zapier app list](/img/admin/webhooks-list.png)

Pagkatapos mong piliin ang ating app, piliin ang magagamit na event: **New Ultimate Multisite Event**.

![Selecting New Ultimate Multisite Event trigger](/img/admin/webhooks-list.png)

Ngayon kailangan nating bigyan ng access ang Zapier sa **iyong network**. Ang pag-click sa **Sign in** ay magbubukas ng bagong window na nangangailangan ng **API credentials**.

![Zapier Sign in prompt for API credentials](/img/admin/webhooks-list.png)

Pumunta sa network admin panel mo at pumunta sa **Ultimate Multisite > Settings** > **API & Webhooks** at hanapin ang seksyon na API Settings.

Piliin ang opsyong **Enable API** dahil kailangan ito para gumana ang koneksyong ito.

![API and Webhooks settings with API Settings and Enable API options](/img/admin/settings-api-webhooks.png)

Gamitin ang icon na **Copy to Clipboard** sa mga field ng API Key at API Secret at i-paste ang mga values na iyon sa integration screen.

Sa field na URL, ilagay ang buong URL ng iyong network, kasama ang protocol (HTTP o HTTPS).

![Zapier integration screen with API Key, Secret, and URL fields](/img/admin/webhooks-list.png)

I-click ang button na **Yes, Continue** para magpatuloy sa susunod na hakbang. Kung maayos lahat, dapat malugod kang batiin ng iyong bagong konektadong account! I-click ang **Continue** para gumawa ng bagong trigger.

## Paano Gumawa ng Bagong Trigger

Ngayon na nakakonekta na ang iyong account, makikita mo na ang mga available na events. Para sa tutorial na ito, piliin natin ang event na **payment_received**.

![Selecting payment_received event in Zapier trigger](/img/admin/webhooks-list.png)

Kapag napili na ang event at nag-click ka ng **continue**, lalabas ang isang **test step**.

![Zapier test step for the trigger](/img/admin/webhooks-list.png)

Sa yugtong ito, susubukan ng Zapier kung kaya nitong **kunin ang specific payload para sa event na iyon**. Sa mga susunod na events ng parehong uri, magpapadala rin ng impormasyon na may parehong istraktura.

![Zapier trigger test completed successfully with payload](/img/admin/webhooks-list.png)

Sa ating tutorial, ang test ay **matagumpay na natapos** at nagbalik ng halimbawa ng payload information. Ang halimbawang impormasyong ito ay magagamit sa paggabay sa atin habang gumagawa ng mga aksyon (actions). Ang iyong trigger ay nakagawa na at handa nang ikonekta sa ibang mga application.

## Paano Gumawa ng Actions

Ang mga actions ay gumagamit ng impormasyon mula sa ibang mga trigger para lumikha ng mga bagong entry sa iyong network.

Sa **paglikha ng action step**, pipiliin mo ang Ultimate Multisite **Beta** at ang opsyon na **Create Items on Ultimate Multisite**.

![Creating an action with Create Items on Ultimate Multisite](/img/admin/webhooks-list.png)

Sa susunod na hakbang, maaari kang gumawa ng iyong authentication, tulad ng ginawa natin sa **Paano Magsimula**, o pumili ng isang nilikhang authentication. Sa tutorial na ito, pipiliin natin ang parehong authentication na dati nang nilikha.

![Selecting authentication for the Zapier action](/img/admin/webhooks-list.png)

### Pag-set up ng Action

Ito ang **pangunahing hakbang ng action** at dito medyo iba ang mga bagay. Ang unang impormasyong pipiliin mo ay ang **Item**. Ang Item ay ang **information model** ng iyong network gaya ng **Customers, Payments, Sites, Emails** at iba pa.

![Choosing Item type for the Zapier action](/img/admin/webhooks-list.png)

Kapag pumipili ka ng item, ang form ay **magrearrange para ilabas ang mga kinakailangan at optional na fields** para sa napiling item.

Halimbawa, kapag pinili mo ang item na **Customer**, ang mga field ng form ay magdadala ng lahat ng kailangan upang punan ito at lumikha ng bagong Customer sa network.

![Customer item fields in Zapier action setup](/img/admin/webhooks-list.png)

Pagkatapos punan ang lahat ng mga field na markang **required** at i-click ang continue, isang huling screen ang magpapakita sa iyo ng mga napunang fields at ang mga fields na hindi pa napupunan.

[Image: Zapier action test showing filled and unfilled fields](/img/admin/webhooks-list.png)

Kapag natapos at nagtagumpay ang iyong test, naka-configure na ang iyong aksyon. Mahalaga rin ring i-check sa network mo kung nabuo ba ang item gamit ang test ng iyong aksyon.
