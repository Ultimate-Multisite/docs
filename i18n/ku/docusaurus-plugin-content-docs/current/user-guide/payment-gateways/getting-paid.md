---
title: Pere wergirtin
sidebar_position: 15
_i18n_hash: 7808f514b91797f7ffb68811b12c48be
---
# Pere wergirtin (v2) {#getting-paid-v2}

_**TÊBÎNIYA GIRÎNG: Ev gotar li ser Ultimate Multisite guhertoya 2.x ye.**_

Ultimate Multisite xwedî pergala endametî û fatûrekirinê ya çêkirî ye. Ji bo ku pergala me ya fatûrekirinê bixebite, me dergehên dravdanê yên herî gelemperî ku di e-commerce de têne bikaranîn yek kirine. Dergehên dravdanê yên standard di Ultimate Multisite de _Stripe_ , _PayPal_ , û Tezmînata Destî ne. Her wiha tu dikarî _WooCommerce_ , _GoCardless_ û _Payfast_ jî bi sazkirina pêvekên wan ên taybet ji bo wergirtina dravdanan bikar bînî.

## Mîhengên bingehîn {#basic-settings}

Tu dikarî her yek ji van dergehên dravdanê di bin mîhengên dravdanê yên Ultimate Multisite de saz bikî. Tu dikarî wê bi çûna **menuya Ultimate Multisite > Mîheng > Dravdan** bibînî.

![Rûpela mîhengên dravdanê di Ultimate Multisite de ku panela Dravdan nîşan dide](/img/config/payments-settings-page.png)

Berî ku tu dergehê xwe yê dravdanê saz bikî, ji kerema xwe li mîhengên bingehîn ên dravdanê yên ku dikarî saz bikî binêre:

**Nûkirina xweber ferz bike** **:** Ev piştrast dike ku dravdan li dawiya her dewreya fatûrekirinê, li gorî dûbarebûna fatûrekirinê ya ku bikarhêner hilbijartiye, bixweber dubare bibe.

<!-- Wêneşan tune ye: Mîhenga guheroka Nûkirina Xweber Ferz Bike li ser rûpela mîhengên Dravdanê -->

Ultimate Multisite v2.13.0 berî tomarkirina endametiyek dubare bi nûkirina xweber ya çalak, kontrol dike ka dergehê çalak xwedî pêbaweriyek nûkirinê ya dîsa-bikaranînê ye an na. Pêbaweriyek nûkirinê dikare abonetiya dergehê, lihevkirina fatûrekirinê, nîşaneya tomarkirî ya vault, an rêbazek dravdanê ya dîsa-bikaranînê ya wekhev be. Heke dergeh ragihîne ku pêbaweriyek bikêr tune ye, Ultimate Multisite endametiyê tomar dike lê nûkirina xweber vedimirîne û rewşa kêmbûna pêbaweriyê tomar dike da ku rêvebir an rêya piştgiriyê bikare ji xerîdar bixwaze berî roja nûkirinê dravdanê dîsa destûr bide.

Ev asteng dike ku endametî wekî xweber tê nûkirin xuya bibe dema ku dergeh tenê dikare dravdanên yek-carî bistîne. Pêvekên dergehê divê piştrast bikin ku checkout-ên dubare pêbaweriyek dîsa-bikaranînê tomar dikin, bi taybetî dema ku dergeh hem girtina yek-carî û hem modên dravdanê yên vaulted/abonetiyê piştgirî dike.

**Destûr bide ceribandinan bê rêbaza dravdanê:** Bi vê vebijarkê ya çalak, client ê te di pêvajoya tomarkirinê de neçar nabe agahiyên darayî zêde bike. Ev tenê piştî ku dema ceribandinê biqede dê pêwîst be.

<!-- Wêneşan tune ye: Guheroka Destûr Bide Ceribandinan Bê Rêbaza Dravdanê li ser rûpela mîhengên Dravdanê -->

**Di pejirandina dravdanê de fatûre bişîne:** Ev vebijarkekê dide te ka piştî dravdanê fatûre were şandin an na. Têbînî bike ku bikarhêner dê di bin Dashboard-a malpera xwe ya binî de gihîştina dîroka dravdanê ya xwe hebin. Ev vebijark li ser dergehê destî nayê sepandin.

<!-- Wêneşan tune ye: Guheroka Şandina Fatûreyê Di Pejirandina Dravdanê De li ser rûpela mîhengên Dravdanê -->

**Pergala hejmarkirina fatûreyê:** Li vir, tu dikarî koda referansa dravdanê an pergala hejmarên li pey hev hilbijêrî. Heke tu ji bo fatûreyên xwe bikaranîna koda referansa dravdanê hilbijêrî, pêwîst nake tu tiştek saz bikî. Heke tu bikaranîna pergala hejmarên li pey hev hilbijêrî, divê tu **hejmara fatûreya din** saz bikî (Ev hejmar dê wekî hejmara fatûreyê ji bo fatûreya din a ku li ser pergalê tê çêkirin were bikaranîn. Her carê fatûreyek nû tê çêkirin, ew bi yekê zêde dibe. Tu dikarî wê biguherînî û tomar bikî da ku hejmara li pey hev a fatûreyê vegerînî nirxek taybet) û **pêşgira hejmara fatûreyê**.

<!-- Wêneşan tune ye: Dropdown-a pergala hejmarkirina fatûreyê bi vebijarkên Koda Referansa Dravdanê û Hejmara Li Pey Hev -->

<!-- Wêneşan tune ye: Zeviyên hejmara fatûreya din û pêşgira hejmara fatûreyê dema ku Hejmara Li Pey Hev hat hilbijartin têne nîşandan -->

## Dergeh li ku têne dîtin: {#where-to-find-the-gateways}

Tu dikarî dergehên dravdanê li ser heman rûpelê saz bikî ( **Ultimate Multisite > Mîheng > Dravdan**). Rast li jêr **dergehên dravdanê yên çalak** , tu dê bikaribî bibînî: _Stripe_ , _Stripe_ _Checkout_ , _PayPal_ û _Destî_.

![Beşa Dergehên Dravdanê yên Çalak ku Stripe, Stripe Checkout, PayPal û Destî rêz dike](/img/config/payments-active-gateways.png)

Me ji bo her dergehê dravdanê gotareke taybet heye ku te di gavên sazkirina wê de rêberî dike; tu dikarî wan di girêdanên jêrîn de bibînî.

Tu dikarî hûrgiliyên dravdanê bibînî û biguherînî:

![Navrûya guherandina dravdanê](/img/admin/payment-edit.png)

Ev dîtina tevahî ya rûpela guherandina dravdanê ye:

![Navrûya tevahî ya guherandina dravdanê](/img/admin/payment-edit-full.png)

Her wiha ev jî dîtina tevahî ya mîhengên dergehên dravdanê ye:

![Rûpela tevahî ya mîhengên dergehên dravdanê](/img/config/settings-payments-gateways-full.png)

**Sazkirina dergehê Stripe**

**Sazkirina dergehê PayPal**** **

**Sazkirina dravdanên destî**

Niha, heke tu bixwazî _WooCommerce_ , _GoCardless_ an _Payfast_ wekî dergehê xwe yê dravdanê bikar bînî, divê tu **pêvekên wan saz û mîheng bikî**.

### Çawa pêveka WooCommerce saz bikî: {#how-to-install-the-woocommerce-add-on}

Em fam dikin ku _Stripe_ û _PayPal_ li hin welatan tune ne, û ev bikarhênerên Ultimate Multisite sînordar dike an rê li ber bikaranîna bi bandor a plugin-a me digire. Ji ber vê yekê me pêvekek çêkir da ku _WooCommerce,_ yek bikin; ew plugin-ek e-commerce ya pir populer e. Pêşdebirên li seranserê cîhanê pêvek çêkirine da ku dergehên dravdanê yên cuda bi wê re yek bikin. Me ji vê sûd wergirt da ku dergehên dravdanê yên ku tu dikarî bi pergala fatûrekirinê ya Ultimate Multisite bikar bînî berfireh bikin.

_**GIRÎNG:** Ultimate Multisite: WooCommerce Integration hewce dike ku WooCommerce herî kêm li ser malpera te ya sereke çalak be._

Pêşî, ji kerema xwe here rûpela pêvekan. Tu dikarî wê bi çûna **Ultimate Multisite > Mîheng** bibînî. Divê tu tabloya **Pêvek** bibînî. Li ser **Pêvekên me kontrol bike** bitikîne.

<!-- Wêneşan tune ye: Tabloya pêvekan li ser aliyê mîhengên Ultimate Multisite bi girêdana Pêvekên me kontrol bike -->

Piştî tikandina li ser **Pêvekên me kontrol bike** , tu dê beralî rûpela pêvekan bibî. Li vir tu dikarî hemû pêvekên Ultimate Multisite bibînî. Li ser pêveka **Ultimate Multisite: WooCommerce Integration** bitikîne.

![Rûpela pêvekan ku pêvekên Ultimate Multisite, tevî WooCommerce Integration, rêz dike](/img/addons/addons-page.png)

Pencereyek dê bi hûrgiliyên pêvekê vebe. Tenê li **Niha saz bike** bitikîne.

<!-- Wêneya ekranê ne berdest e: diyaloga hûrgiliyên pêveka Ultimate Multisite WooCommerce Integration bi bişkoka Niha saz bike -->

Piştî ku sazkirin qediya, tu dê vegerî rûpela pêvekan. Li vir, tenê li **Li Torê çalak bike** bitikîne û pêveka WooCommerce dê li ser tora te çalak bibe.

<!-- Wêneya ekranê ne berdest e: rûpela pêvekan bi girêdana Li Torê çalak bike ji bo pêveka WooCommerce Integration -->

Piştî çalakkirina wê, heke hîn jî pêveka WooCommerce li ser malpera te nehatibe sazkirin û çalakkirin, tu dê bîranînekê bistînî.

<!-- Wêneya ekranê ne berdest e: agahdariya rêveberiyê ku rêveber bîr tîne pêveka WooCommerce saz bike û çalak bike -->

Ji bo zêdetir xwendinê derbarê pêveka WooCommerce Integration de, **li vir bitikîne**.

### Çawa pêveka GoCardless saz bikî: {#how-to-install-the-gocardless-add-on}

Gavên sazkirina pêveka _GoCardless_ hema hema wekî pêveka _WooCommerce_ ne. Ji kerema xwe biçin rûpela pêvekan û pêveka **Ultimate Multisite: GoCardless Gateway** hilbijêrin.

<!-- Wêneya ekranê ne berdest e: rûpela pêvekan ku pêveka Ultimate Multisite GoCardless Gateway tê nîşankirin -->

Pencereya pêvekê dê vebe. Li **Niha saz bike** bitikîne.

<!-- Wêneya ekranê ne berdest e: diyaloga hûrgiliyên pêveka Ultimate Multisite GoCardless Gateway bi bişkoka Niha saz bike -->

Piştî ku sazkirin qediya, tu dê vegerî rûpela pêvekan. Li vir, tenê li **Li Torê çalak bike** bitikîne û pêveka _GoCardless_ dê li ser tora te çalak bibe.

<!-- Wêneya ekranê ne berdest e: rûpela pêvekan bi girêdana Li Torê çalak bike ji bo pêveka GoCardless Gateway -->

Ji bo fêrbûnê ka çawa bi dergeha _GoCardless_ dest pê bikî, **vê gotarê bixwîne**.

### Çawa pêveka Payfast saz bikî: {#how-to-install-the-payfast-add-on}

Biçe rûpela pêvekan û pêveka **Ultimate Multisite: Payfast Gateway** hilbijêre.

<!-- Wêneya ekranê ne berdest e: rûpela pêvekan ku pêveka Ultimate Multisite Payfast Gateway tê nîşankirin -->

Pencereya pêvekê dê vebe. Li **Niha saz bike.** bitikîne.

<!-- Wêneya ekranê ne berdest e: diyaloga hûrgiliyên pêveka Ultimate Multisite Payfast Gateway bi bişkoka Niha saz bike -->

Piştî ku sazkirin qediya, tu dê vegerî rûpela pêvekan. Li vir, tenê li **Li Torê çalak bike** bitikîne û pêveka _Payfast_ dê li ser tora te çalak bibe.

<!-- Wêneya ekranê ne berdest e: rûpela pêvekan bi girêdana Li Torê çalak bike ji bo pêveka Payfast Gateway -->
