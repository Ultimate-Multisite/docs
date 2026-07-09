---
title: Integrasyon ng Zapier
sidebar_position: 12
_i18n_hash: 7f23136e0e69417e244a9930f9620e95
---
# Pag-integrate ng Ultimate Multisite sa Zapier

Sa isa sa mga artikulo, tinalakay namin ang [Webhooks](webhooks.md) at kung paano magagamit ang mga ito para mag-integrate sa mga 3rd party application.

Medyo komplikado ang paggamit ng webhooks dahil nangangailangan ito ng advanced na kaalaman sa coding at pagkuha ng mga payload. Ang paggamit ng **Zapier** ay isang paraan para malampasan mo iyon.

May integration ang Zapier sa mahigit 5000+ app kaya mas napapadali nito ang komunikasyon sa pagitan ng iba't ibang application.

Maaari kang gumawa ng **Triggers** na mapapaandar kapag may mga event na nangyari sa iyong network (hal. may ginawang account at tina-trigger ang account_create event) o bumuo ng **Actions** sa iyong network bilang tugon sa mga panlabas na event (hal. gumawa ng bagong account membership sa iyong Ultimate Multisite network).

Posible ito dahil ang **Ultimate Multisite Zapier's triggers** at actions ay pinapagana ng [REST API](https://developer.ultimatemultisite.com/api/docs/).

## Paano magsimula

Una, hanapin ang Ultimate Multisite sa listahan ng mga Zapier app. Bilang alternatibo, maaari mong i-click ang [link na ito](https://zapier.com/apps/wp-ultimo/integrations).

Pumunta sa iyong dashboard at pindutin ang **+** **Create Zap** button sa kaliwang sidebar para mag-set up ng bagong Zap.

![Zapier dashboard na may Create Zap button](/img/admin/webhooks-list.png)

Ire-redirect ka sa pahina ng paggawa ng Zap.

Sa search box, i-type ang "wp ultimo". I-click para piliin ang opsyon na bersyong **Beta**.

![Paghahanap ng WP Ultimo sa listahan ng mga Zapier app](/img/admin/webhooks-list.png)

Pagkatapos piliin ang aming app, piliin ang available na event: **New Ultimate Multisite Event**.

![Pagpili ng New Ultimate Multisite Event trigger](/img/admin/webhooks-list.png)

Ngayon kailangan nating bigyan ang Zapier ng access sa **iyong network**. Ang pag-click sa **Sign in** ay magbubukas ng bagong window na mangangailangan ng **API credentials**.

![Zapier Sign in prompt para sa API credentials](/img/admin/webhooks-list.png)

Pumunta sa admin panel ng iyong network at mag-navigate sa **Ultimate Multisite > Settings** > **API & Webhooks** at hanapin ang seksyong API Settings.

Piliin ang opsyong **Enable API** dahil kinakailangan ito para gumana ang connection na ito.

![Mga setting ng API and Webhooks na may mga opsyong API Settings at Enable API](/img/admin/settings-api-webhooks.png)

Gamitin ang icon na **Copy to Clipboard** sa mga field ng API Key at API Secret at i-paste ang mga value na iyon sa integration screen.

Sa URL field, ilagay ang buong URL ng iyong network, kasama ang protocol (HTTP o HTTPS).

![Zapier integration screen na may mga field na API Key, Secret, at URL](/img/admin/webhooks-list.png)

I-click ang **Yes, Continue** button para magpatuloy sa susunod na hakbang. Kung gumana ang lahat, sasalubungin ka ng iyong bagong nakakonektang account! I-click ang **Continue** para gumawa ng bagong trigger.

## Paano gumawa ng bagong Trigger

Ngayong nakakonekta na ang iyong account, makikita mo ang mga available na event. Piliin natin ang event na **payment_received** para sa tutorial na ito.

![Pagpili ng payment_received event sa Zapier trigger](/img/admin/webhooks-list.png)

Kapag napili na ang event at na-click mo ang **continue** , lalabas ang isang **test step**.

![Zapier test step para sa trigger](/img/admin/webhooks-list.png)

Sa yugtong ito, susubukan ng Zapier kung kaya ng iyong Zap na **kunin ang partikular na payload para sa event na iyon**. Sa mga susunod na event ng parehong uri, ipapadala ang impormasyong may ganitong parehong istruktura.

![Matagumpay na nakumpleto ang test ng Zapier trigger na may payload](/img/admin/webhooks-list.png)

Sa aming tutorial, ang test ay **matagumpay na nakumpleto** at ibinalik ang halimbawang impormasyon ng payload. Magiging kapaki-pakinabang ang halimbawang impormasyong ito para gabayan tayo habang gumagawa ng mga action. Nagawa na ang iyong trigger at handa na itong ikonekta sa iba pang application.

## Paano gumawa ng Actions

Gumagamit ang actions ng impormasyon mula sa iba pang triggers para gumawa ng mga bagong entry sa iyong network.

Sa **hakbang ng paggawa ng action** pipiliin mo ang Ultimate Multisite **Beta** at ang opsyon na **Create Items on Ultimate Multisite**.

![Paggawa ng action gamit ang Create Items on Ultimate Multisite](/img/admin/webhooks-list.png)

Sa susunod na hakbang, gagawa ka ng iyong authentication, tulad ng ginawa natin sa **Paano magsimula** , o pipili ng nagawang authentication. Sa tutorial na ito, pipiliin natin ang parehong authentication na ginawa dati.

![Pagpili ng authentication para sa Zapier action](/img/admin/webhooks-list.png)

### Pag-set up ng Action

Ito ang **pangunahing hakbang ng action** at dito ay medyo naiiba ang mga bagay. Ang unang impormasyong pipiliin mo ay ang **Item**. Ang item ay ang **modelo ng impormasyon** ng iyong network tulad ng **Customers, Payments, Sites, Emails** at iba pa.

![Pagpili ng uri ng Item para sa Zapier action](/img/admin/webhooks-list.png)

Kapag pumipili ng item, ang form ay **aayusin muli para ilabas ang mga required at optional na field** para sa napiling item.

Halimbawa, kapag pinili ang item na **Customer** , ilalabas ng mga field ng form ang lahat ng kinakailangang punan para gumawa ng bagong Customer sa network.

![Mga field ng Customer item sa setup ng Zapier action](/img/admin/webhooks-list.png)

Pagkatapos punan ang lahat ng field na minarkahang **required** at i-click ang continue, ipapakita sa iyo ng huling screen ang mga napunang field at ang mga field na hindi napunan.

![Test ng Zapier action na nagpapakita ng napunan at hindi napunang mga field](/img/admin/webhooks-list.png)

Sa sandaling makumpleto at maging matagumpay ang iyong test, naka-configure na ang iyong action. Mahalaga ring tingnan sa iyong network kung nagawa ang item gamit ang test ng iyong action.
