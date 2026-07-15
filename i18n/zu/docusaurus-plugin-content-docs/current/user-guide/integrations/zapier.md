---
title: Ukuhlanganiswa ne-Zapier
sidebar_position: 12
_i18n_hash: 7f23136e0e69417e244a9930f9620e95
---
# Ukuhlanganisa Ultimate Multisite ne-Zapier

Kwesinye sezindatshana, sixoxe nge-[Webhooks](webhooks.md) nokuthi zingasetshenziswa kanjani ukuhlanganisa nezinhlelo zokusebenza zezinkampani zangaphandle.

Ukusebenzisa ama-webhooks kuyinkimbinkimbi kancane ngoba kudinga ulwazi oluthuthukile ekubhaleni ikhodi nasekubambeni ama-payloads. Ukusebenzisa **Zapier** kuyindlela yokukusiza ukudlula lokho.

I-Zapier inokuhlanganiswa nezinhlelo zokusebenza ezingaphezu kuka-5000+, okwenza ukuxhumana phakathi kwezinhlelo zokusebenza ezahlukene kube lula.

Ungakha **Triggers** ezizoqalwa lapho izehlakalo zenzeka kunethiwekhi yakho (isib. i-account iyadalwa bese iqala umcimbi we-account_create) noma ukhiqize **Actions** kunethiwekhi yakho eziphendula izehlakalo zangaphandle (isib. dala ubulungu obusha be-account kunethiwekhi yakho ye-Ultimate Multisite).

Lokhu kungenzeka ngoba **ama-triggers e-Ultimate Multisite Zapier** nama-actions asekelwa yi-[REST API](https://developer.ultimatemultisite.com/api/docs/).

## Ungaqala kanjani {#how-to-start}

Okokuqala, sesha i-Ultimate Multisite ohlwini lwezinhlelo zokusebenza ze-Zapier. Kungenjalo, ungachofoza [lesi sixhumanisi](https://zapier.com/apps/wp-ultimo/integrations).

Iya ku-dashboard yakho bese ucindezela inkinobho ethi **+** **Create Zap** kubha eseceleni kwesobunxele ukuze usethe i-Zap entsha.

![I-dashboard ye-Zapier enenkinobho ethi Create Zap](/img/admin/webhooks-list.png)

Uzoqondiswa kabusha ekhasini lokudala i-Zap.

Ebhokisini lokusesha thayipha "wp ultimo". Chofoza ukuze ukhethe inketho yenguqulo ye-**Beta**.

![Ukusesha i-WP Ultimo ohlwini lwezinhlelo zokusebenza ze-Zapier](/img/admin/webhooks-list.png)

Ngemva kokukhetha uhlelo lwethu lokusebenza, khetha umcimbi otholakalayo: **New Ultimate Multisite Event**.

![Ukukhetha i-trigger ethi New Ultimate Multisite Event](/img/admin/webhooks-list.png)

Manje sidinga ukunikeza i-Zapier ukufinyelela **kunethiwekhi yakho**. Ukuchofoza ku-**Sign in** kuzovula iwindi elisha elidinga **imininingwane ye-API**.

![Umyalezo we-Zapier Sign in wemininingwane ye-API](/img/admin/webhooks-list.png)

Iya kuphaneli yokuphatha yenethiwekhi yakho bese uzulazula uye ku-**Ultimate Multisite > Settings** > **API & Webhooks** bese ubheka isigaba se-API Settings.

Khetha inketho ethi **Enable API** njengoba idingeka ukuze lokhu kuxhumana kusebenze.

![Izilungiselelo ze-API and Webhooks ezinezinketho ze-API Settings ne-Enable API](/img/admin/settings-api-webhooks.png)

Sebenzisa isithonjana esithi **Copy to Clipboard** ezinkundleni ze-API Key ne-API Secret bese unamathisela lawo manani esikrinini sokuhlanganisa.

Enkundleni ye-URL, faka i-URL ephelele yenethiwekhi yakho, kufaka phakathi iphrothokholi (HTTP noma HTTPS).

![Isikrini sokuhlanganisa se-Zapier esinezinkundla ze-API Key, Secret, ne-URL](/img/admin/webhooks-list.png)

Chofoza inkinobho ethi **Yes, Continue** ukuze uqhubekele esinyathelweni esilandelayo. Uma konke kuhamba kahle, kufanele wamukelwe yi-account yakho entsha exhunyiwe! Chofoza u-**Continue** ukuze udale i-trigger entsha.

## Ungayakha kanjani i-Trigger entsha {#how-to-create-a-new-trigger}

Manje njengoba i-account yakho ixhunyiwe ungabona izehlakalo ezitholakalayo. Masikhethe umcimbi we-**payment_received** kulesi sifundo.

![Ukukhetha umcimbi we-payment_received ku-trigger ye-Zapier](/img/admin/webhooks-list.png)

Uma umcimbi usukhethiwe futhi uchofoza u-**continue** , kuzovela **isinyathelo sokuhlola**.

![Isinyathelo sokuhlola se-Zapier se-trigger](/img/admin/webhooks-list.png)

Kulesi sigaba, i-Zapier izohlola ukuthi i-Zap yakho ingakwazi yini **ukulanda i-payload ethile yalowo mcimbi**. Ezehlakalweni zesikhathi esizayo zohlobo olufanayo, imininingwane enalesi sakhiwo esifanayo izothunyelwa.

![Ukuhlolwa kwe-trigger ye-Zapier kuqedwe ngempumelelo nge-payload](/img/admin/webhooks-list.png)

Esifundweni sethu ukuhlolwa **kuqedwe ngempumelelo** futhi kwabuyisa imininingwane yesibonelo se-payload. Le mininingwane yesibonelo izoba usizo ekusiqondiseni ngesikhathi sakha ama-actions. I-trigger yakho manje isidaliwe futhi isilungele ukuxhunywa kwezinye izinhlelo zokusebenza.

## Ungawakha kanjani ama-Actions {#how-to-create-actions}

Ama-actions asebenzisa imininingwane evela kwamanye ama-triggers ukuze adale okufakiwe okusha kunethiwekhi yakho.

Esinyathelweni **sokudala i-action** uzokhetha i-Ultimate Multisite **Beta** kanye nenketho ethi **Create Items on Ultimate Multisite**.

![Ukudala i-action nge-Create Items on Ultimate Multisite](/img/admin/webhooks-list.png)

Esinyathelweni esilandelayo uzodala ukuqinisekiswa kwakho, njengoba senzile ku-**Ungaqala kanjani** , noma ukhethe ukuqinisekiswa okudaliwe. Kulesi sifundo sizokhetha ukuqinisekiswa okufanayo okudalwe ngaphambilini.

![Ukukhetha ukuqinisekiswa kwe-action ye-Zapier](/img/admin/webhooks-list.png)

### Ukusetha i-Action {#setting-up-the-action}

Lesi **yisinyathelo esiyinhloko se-action** futhi lapha izinto zihlukile kancane. Imininingwane yokuqala ozoyikhetha yi-**Item**. I-Item **iyimodeli yolwazi** yenethiwekhi yakho njengokuthi **Customers, Payments, Sites, Emails** nokunye.

![Ukukhetha uhlobo lwe-Item lwe-action ye-Zapier](/img/admin/webhooks-list.png)

Lapho ukhetha i-item, ifomu **lizohlela kabusha ukuze lilethe izinkundla ezidingekayo nezingakhethwa** ze-item ekhethiwe.

Isibonelo, lapho ukhetha i-item ethi **Customer** , izinkundla zefomu zizoletha konke okudingekayo ukugcwaliswa ukuze kudalwe i-Customer entsha kunethiwekhi.

![Izinkundla ze-item ye-Customer ekusethweni kwe-action ye-Zapier](/img/admin/webhooks-list.png)

Ngemva kokugcwalisa zonke izinkundla ezimakwe njenge-**required** nokuchofoza ku-continue, isikrini sokugcina sizokubonisa izinkundla ezigcwalisiwe nezinkundla ezishiywe zingagcwalisiwe.

![Ukuhlolwa kwe-action ye-Zapier okubonisa izinkundla ezigcwalisiwe nezingagcwalisiwe](/img/admin/webhooks-list.png)

Ngokushesha nje lapho ukuhlolwa kwakho kuqeda futhi kuphumelela, i-action yakho isilungisiwe. Kubalulekile futhi ukuhlola kunethiwekhi yakho ukuthi i-item idaliwe yini ngokuhlolwa kwe-action yakho.
