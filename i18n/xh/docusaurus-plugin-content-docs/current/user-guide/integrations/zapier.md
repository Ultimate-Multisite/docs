---
title: Udibaniso lwe-Zapier
sidebar_position: 12
_i18n_hash: 7f23136e0e69417e244a9930f9620e95
---
# Ukudibanisa Ultimate Multisite ne Zapier {#integrating-ultimate-multisite-with-zapier}

Kwelinye lamanqaku, sixoxe nge [Webhooks](webhooks.md) nendlela enokusetyenziswa ngayo ukudibanisa nezicelo zamaqela esithathu.

Ukusebenzisa webhooks kunzima kancinci kuba kufuna ulwazi oluphambili ekubhaleni ikhowudi nasekubambeni payloads. Ukusebenzisa **Zapier** yindlela yokukunceda udlule kuloo ngxaki.

Zapier inodibaniso ne-apps ezingaphezu kwe-5000+, nto leyo eyenza unxibelelwano phakathi kwezicelo ezahlukeneyo lube lula.

Unokudala **Triggers** eziza kuqalisa xa iziganeko zisenzeka kwinethiwekhi yakho (umz. i-account idaliwe kwaye iqala isiganeko account_create) okanye uvelise **Actions** kwinethiwekhi yakho eziphendula kwiziganeko zangaphandle (umz. dala ubulungu be-account obutsha kwinethiwekhi yakho ye-Ultimate Multisite).

Oku kuyenzeka kuba **ii-trigger ze-Ultimate Multisite Zapier** kunye ne-actions zixhaswa yi [REST API](https://developer.ultimatemultisite.com/api/docs/).

## Uqala njani {#how-to-start}

Okokuqala, khangela Ultimate Multisite kuluhlu lwe-app lwe-Zapier. Kungenjalo, unokucofa [eli khonkco](https://zapier.com/apps/wp-ultimo/integrations).

Yiya kwi-dashboard yakho uze ucinezele iqhosha **+** **Create Zap** kwibar esecaleni yasekhohlo ukuseta i-Zap entsha.

![I-dashboard ye-Zapier eneqhosha le-Create Zap](/img/admin/webhooks-list.png)

Uza kuthunyelwa kwiphepha lokudala i-Zap.

Kwibhokisi yokukhangela chwetheza "wp ultimo". Cofa ukuze ukhethe ukhetho lwenguqulelo **Beta**.

![Ukukhangela i-WP Ultimo kuluhlu lwe-app lwe-Zapier](/img/admin/webhooks-list.png)

Emva kokukhetha i-app yethu, khetha isiganeko esikhoyo: **New Ultimate Multisite Event**.

![Ukukhetha i-trigger ye-New Ultimate Multisite Event](/img/admin/webhooks-list.png)

Ngoku kufuneka sinike Zapier ukufikelela **kwinethiwekhi yakho**. Ukucofa ku **Sign in** kuya kuvula ifestile entsha efuna **API credentials**.

![Isicelo se-Zapier Sign in se-API credentials](/img/admin/webhooks-list.png)

Yiya kwiphaneli yolawulo yenethiwekhi yakho uze uye ku **Ultimate Multisite > Settings** > **API & Webhooks** uze ukhangele icandelo le-API Settings.

Khetha ukhetho **Enable API** kuba luyafuneka ukuze olu qhagamshelo lusebenze.

![Iisetingi ze-API ne-Webhooks ezineenketho ze-API Settings kunye ne-Enable API](/img/admin/settings-api-webhooks.png)

Sebenzisa i-ayikhoni **Copy to Clipboard** kumasimi e-API Key kunye ne-API Secret uze uncamathisele ezo xabiso kwisikrini sodibaniso.

Kumhlaba we-URL, faka i-URL epheleleyo yenethiwekhi yakho, kuquka iprothokholi (HTTP okanye HTTPS).

![Isikrini sodibaniso se-Zapier esinemimandla ye-API Key, Secret, kunye ne-URL](/img/admin/webhooks-list.png)

Cofa iqhosha **Yes, Continue** ukuze uye kwinyathelo elilandelayo. Ukuba yonke into isebenza kakuhle, kufuneka wamkelwe yi-account yakho entsha eqhagamshelweyo! Cofa **Continue** ukuze udale i-trigger entsha.

## Uyidala njani i-Trigger entsha {#how-to-create-a-new-trigger}

Ngoku ekubeni i-account yakho iqhagamshelwe, ungabona iziganeko ezikhoyo. Masikhethe isiganeko **payment_received** kwesi sifundo.

![Ukukhetha isiganeko se-payment_received kwi-trigger ye-Zapier](/img/admin/webhooks-list.png)

Nje ukuba isiganeko sikhethiwe kwaye ucofe **continue** , kuya kuvela **inyathelo lovavanyo**.

![Inyathelo lovavanyo lwe-Zapier le-trigger](/img/admin/webhooks-list.png)

Kwesi sigaba, Zapier iza kuvavanya ukuba i-Zap yakho ingakwazi **ukuzisa i-payload ethile yeso siganeko**. Kwiziganeko zexesha elizayo zohlobo olufanayo, ulwazi olunolu lwakhiwo lunye luza kuthunyelwa.

![Uvavanyo lwe-trigger ye-Zapier lugqitywe ngempumelelo kunye ne-payload](/img/admin/webhooks-list.png)

Kwisifundo sethu uvavanyo **lugqitywe ngempumelelo** kwaye lubuyise ulwazi lomzekelo we-payload. Olu lwazi lomzekelo luya kuba luncedo ukusikhokela ngelixa sidala actions. I-trigger yakho ngoku idaliwe kwaye ilungele ukudityaniswa kwezinye izicelo.

## Uyidala njani i-Actions {#how-to-create-actions}

Actions zisebenzisa ulwazi oluvela kwezinye ii-trigger ukudala amangeniso amatsha kwinethiwekhi yakho.

Kwi **nyathelo lokudala i-action** uza kukhetha i-Ultimate Multisite **Beta** kunye nokhetho lwe **Create Items on Ultimate Multisite**.

![Ukudala i-action nge-Create Items on Ultimate Multisite](/img/admin/webhooks-list.png)

Kwinqanaba elilandelayo uza kudala uqinisekiso lwakho, kanye njengoko senzile ku **Uqala njani** , okanye ukhethe uqinisekiso olusele lwenziwe. Kwesi sifundo siza kukhetha uqinisekiso olufanayo olwenziwe ngaphambili.

![Ukukhetha uqinisekiso lwe-action ye-Zapier](/img/admin/webhooks-list.png)

### Ukuseta i-Action {#setting-up-the-action}

Eli **linyathelo eliphambili le-action** kwaye apha izinto zahluke kancinci. Ulwazi lokuqala oza kulukhetha yi **Item**. Item yi **modeli yolwazi** yenethiwekhi yakho efana no **Customers, Payments, Sites, Emails** nabanye.

![Ukukhetha uhlobo lwe-Item ye-action ye-Zapier](/img/admin/webhooks-list.png)

Xa ukhetha i-item, ifom iya **kuzilungisa kwakhona ukuze izise amasimi afunekayo kunye nawokuzikhethela** e-item ekhethiweyo.

Umzekelo, xa ukhetha i-item **Customer** , amasimi efom aya kuzisa yonke into efunekayo ukuyizalisa ukuze kudalwe Customer omtsha kwinethiwekhi.

![Amasimi e-item Customer kuseto lwe-action ye-Zapier](/img/admin/webhooks-list.png)

Emva kokuzalisa onke amasimi aphawulwe njenge **required** kwaye ucofe ku-continue, isikrini sokugqibela siya kukubonisa amasimi agcwalisiweyo kunye namasimi ashiywe engazaliswanga.

![Uvavanyo lwe-action ye-Zapier lubonisa amasimi agcwalisiweyo nangazaliswanga](/img/admin/webhooks-list.png)

Nje ukuba uvavanyo lwakho lugqitywe kwaye luphumelele, i-action yakho iqwalaselwe. Kwakhona kubalulekile ukujonga kwinethiwekhi yakho ukuba i-item yenziwe ngovavanyo lwe-action yakho.
