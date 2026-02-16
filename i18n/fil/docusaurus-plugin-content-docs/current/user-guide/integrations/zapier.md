---
title: Integrasyon sa Zapier
sidebar_position: 12
_i18n_hash: 4e43dfd722f07de3048b552c8f7b962f
---
# Paano Ikonekta ang Ultimate Multisite sa Zapier

Sa isa sa mga artikulo, tinalakay natin ang [Webhooks](webhooks.md) at kung paano ito magagamit para mag-integrate sa mga third-party na application.

Medyo komplikado ang paggamit ng webhooks dahil kailangan ng advanced na kaalaman sa coding at sa pag-catch ng mga payload. Ang paggamit ng **Zapier** ay isang paraan para makaiwas sa komplikasyong ito.

May integration ang Zapier sa mahigit 5000+ na apps kaya mas madali ang komunikasyon sa pagitan ng iba't ibang application.

Puwede kang gumawa ng mga **Trigger** na mag-a-activate kapag may nangyaring event sa iyong network (halimbawa, kapag may nagawang account at nag-trigger ng account_create event) o gumawa ng mga **Action** sa iyong network bilang tugon sa mga external na event (halimbawa, gumawa ng bagong account membership sa iyong Ultimate Multisite network).

Posible ito dahil ang mga **trigger** at action ng **Ultimate Multisite Zapier** ay pinapagana ng [REST API](https://developer.ultimatemultisite.com/api/docs/).

## Paano Magsimula

Una, hanapin ang Ultimate Multisite sa listahan ng Zapier app. Puwede ka ring mag-click sa [link na ito](https://zapier.com/apps/wp-ultimo/integrations).

Pumunta sa iyong dashboard at pindutin ang **+** **Create Zap** button sa kaliwang sidebar para mag-setup ng bagong Zap.

![Zapier dashboard na may Create Zap button](/img/admin/webhooks-list.png)

Ire-redirect ka sa pahina ng Zap creation.

Sa search box, i-type ang "wp ultimo". I-click para piliin ang **Beta** version option.

![Paghahanap ng WP Ultimo sa listahan ng Zapier app](/img/admin/webhooks-list.png)

Pagkatapos piliin ang ating app, piliin ang available na event: **New Ultimate Multisite Event**.

![Pagpili ng New Ultimate Multisite Event trigger](/img/admin/webhooks-list.png)

Ngayon, kailangan nating bigyan ang Zapier ng access sa **iyong network**. Kapag nag-click ka sa **Sign in**, magbubukas ang bagong window na hihingi ng **API credentials**.

![Zapier Sign in prompt para sa API credentials](/img/admin/webhooks-list.png)

Pumunta sa iyong network admin panel at mag-navigate sa **Ultimate Multisite > Settings** > **API & Webhooks** at hanapin ang API Settings section.

Piliin ang **Enable API** option dahil kailangan ito para gumana ang connection.

![API Settings na may Enable API option sa Ultimate Multisite](/img/admin/webhooks-list.png)

Gamitin ang **Copy to Clipboard** icon sa mga field ng API Key at API Secret at i-paste ang mga value na iyon sa integration screen.

Sa URL field, ilagay ang buong URL ng iyong network, kasama ang protocol (HTTP o HTTPS).

![Zapier integration screen na may API Key, Secret, at URL fields](/img/admin/webhooks-list.png)

I-click ang **Yes, Continue** button para magpatuloy sa susunod na hakbang. Kung maayos ang lahat, makikita mo ang iyong bagong connected account! I-click ang **Continue** para gumawa ng bagong trigger.

## Paano Gumawa ng Bagong Trigger

Ngayong nakakonekta na ang iyong account, makikita mo na ang mga available na event. Piliin natin ang **payment_received** event para sa tutorial na ito.

![Pagpili ng payment_received event sa Zapier trigger](/img/admin/webhooks-list.png)

Kapag napili na ang event at nag-click ka ng **continue**, lalabas ang **test step**.

![Zapier test step para sa trigger](/img/admin/webhooks-list.png)

Sa yugtong ito, susubukan ng Zapier kung kaya ng iyong Zap na **kunin ang specific na payload para sa event na iyon**. Sa mga susunod na event ng parehong uri, ipapadala ang impormasyon na may ganitong istruktura.

![Matagumpay na nakumpleto ang Zapier trigger test na may payload](/img/admin/webhooks-list.png)

Sa ating tutorial, **matagumpay na nakumpleto** ang test at nagbalik ng halimbawang impormasyon ng payload. Makakatulong ang halimbawang impormasyon na ito sa paggawa ng mga action. Nakagawa na ang iyong trigger at handa nang ikonekta sa ibang mga application.

## Paano Gumawa ng mga Action

Gumagamit ang mga action ng impormasyon mula sa ibang trigger para gumawa ng mga bagong entry sa iyong network.

Sa **creating an action step**, pipiliin mo ang Ultimate Multisite **Beta** at ang option na **Create Items on Ultimate Multisite**.

![Paggawa ng action gamit ang Create Items on Ultimate Multisite](/img/admin/webhooks-list.png)

Sa susunod na hakbang, gagawa ka ng iyong authentication, tulad ng ginawa natin sa **Paano Magsimula**, o pipili ng dating nagawang authentication. Sa tutorial na ito, pipiliin natin ang parehong authentication na ginawa natin kanina.

![Pagpili ng authentication para sa Zapier action](/img/admin/webhooks-list.png)

### Pag-setup ng Action

Ito ang **pangunahing hakbang ng action** at medyo iba ang mga bagay dito. Ang unang impormasyong pipiliin mo ay ang **Item**. Ang Item ay ang **information model** ng iyong network tulad ng **Customers, Payments, Sites, Emails** at iba pa.

![Pagpili ng Item type para sa Zapier action](/img/admin/webhooks-list.png)

Kapag pumili ka ng item, magbabago ang form para ipakita ang **required at optional na field** para sa napiling item.

Halimbawa, kapag pinili mo ang item na **Customer**, ipapakita ng form fields ang lahat ng kailangang punan para makagawa ng bagong Customer sa network.

![Customer item fields sa Zapier action setup](/img/admin/webhooks-list.png)

Pagkatapos punan ang lahat ng field na may markang **required** at mag-click sa continue, magpapakita ng huling screen na may mga napunan at hindi napunang field.

![Zapier action test na nagpapakita ng napunan at hindi napunang field](/img/admin/webhooks-list.png)

Kapag nakumpleto na ang iyong test at matagumpay ito, nakonfigure na ang iyong action. Mahalaga ring tingnan sa iyong network kung nagawa ba ang item sa pamamagitan ng test ng iyong action.
