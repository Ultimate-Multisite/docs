---
title: Ukukhokhelwa
sidebar_position: 15
_i18n_hash: 7808f514b91797f7ffb68811b12c48be
---
# Ukukhokhelwa (v2) {#getting-paid-v2}

_**INOTHI ELIBALULEKILE: Le ndatshana ibhekisela ku-Ultimate Multisite version 2.x.**_

Ultimate Multisite inesistimu yobulungu nokukhokhisa eyakhelwe ngaphakathi. Ukuze isistimu yethu yokukhokhisa isebenze, sihlanganise amasango okukhokha avame kakhulu asetshenziswa kwezohwebo nge-inthanethi. Amasango okukhokha azenzakalelayo ku-Ultimate Multisite yi-_Stripe_ , _PayPal_ , kanye ne-Ukukhokha Mathupha. Ungasebenzisa futhi _WooCommerce_ , _GoCardless_ kanye ne-_Payfast_ ukwamukela izinkokhelo ngokufaka ama-add-on awo afanele.

## Izilungiselelo Eziyisisekelo {#basic-settings}

Ungalungiselela noma yiliphi kulawa masango okukhokha ngaphansi kwezilungiselelo zokukhokha ze-Ultimate Multisite. Ungakuthola ngokuya ku-**imenyu ye-Ultimate Multisite > Izilungiselelo > Izinkokhelo.**

![Ikhasi lezilungiselelo zezinkokhelo ku-Ultimate Multisite libonisa iphaneli Yezinkokhelo](/img/config/payments-settings-page.png)

Ngaphambi kokuthi usethe isango lakho lokukhokha, sicela ubheke izilungiselelo eziyisisekelo zokukhokha ongazilungiselela:

**Phoqelela ukuvuselela okuzenzakalelayo** **:** Lokhu kuzoqinisekisa ukuthi inkokhelo izophindwa ngokuzenzakalelayo ekupheleni komjikelezo ngamunye wokukhokhisa kuye ngokuvama kokukhokhisa okukhethwe umsebenzisi.

<!-- Isithombe-skrini asitholakali: Isilungiselelo sokuvula/ukuvala Phoqelela Ukuvuselela Okuzenzakalelayo ekhasini lezilungiselelo Zezinkokhelo -->

Ultimate Multisite v2.13.0 ihlola ukuthi isango elisebenzayo linobufakazi bokuvuselela obungasetshenziswa kabusha yini ngaphambi kokulondoloza ubulungu obuphindaphindayo obunokuvuselela okuzenzakalelayo okuvunyelwe. Ubufakazi bokuvuselela bungaba ukubhalisa kwesango, isivumelwano sokukhokhisa, ithokheni ye-vault elondoloziwe, noma indlela yokukhokha efanayo engasetshenziswa kabusha. Uma isango libika ukuthi akukho bufakazi obusebenzisekayo obukhona, Ultimate Multisite ilondoloza ubulungu kodwa icime ukuvuselela okuzenzakalelayo futhi iqophe isimo sobufakazi obushodayo ukuze umlawuli noma ukugeleza kokusekela kucele ikhasimende ukuthi ligunyaze kabusha inkokhelo ngaphambi kosuku lokuvuselela.

Lokhu kuvimbela ubulungu ukuthi bubonakale sengathi buvuselelwa ngokuzenzakalelayo lapho isango lingakwazi ukuqoqa izinkokhelo zesikhathi esisodwa kuphela. Ama-add-on amasango kufanele aqinisekise ukuthi ama-checkout aphindaphindayo alondoloza ubufakazi obungasetshenziswa kabusha, ikakhulukazi lapho isango lisekela kokubili ukubamba inkokhelo yesikhathi esisodwa nezindlela zokukhokha ze-vaulted/subscription.

**Vumela izilingo ngaphandle kwendlela** **yokukhokha:** Uma le nketho ivunyelwe iklayenti lakho ngeke kudingeke lingeze noma yiluphi ulwazi lwezezimali ngesikhathi senqubo yokubhalisa. Lokhu kuzodingeka kuphela lapho isikhathi sesilingo sesiphelelwe.

<!-- Isithombe-skrini asitholakali: Ukuvula/ukuvala Vumela Izilingo Ngaphandle Kwendlela Yokukhokha ekhasini lezilungiselelo Zezinkokhelo -->

**Thumela i-invoyisi ekuqinisekisweni kwenkokhelo:** Lokhu kukunikeza inketho yokuthi uthumele noma ungayithumeli i-invoyisi ngemva kokukhokha. Qaphela ukuthi abasebenzisi bazokwazi ukufinyelela umlando wabo wokukhokha ngaphansi kwe-dashboard yesayithi labo elincane. Le nketho ayisebenzi kuSango Lokukhokha Mathupha.

<!-- Isithombe-skrini asitholakali: Ukuvula/ukuvala Thumela I-invoyisi Ekuqinisekisweni Kwenkokhelo ekhasini lezilungiselelo Zezinkokhelo -->

**Uhlelo lokunombola ama-invoyisi:** Lapha, ungakhetha noma ikhodi yesithenjwa senkokhelo noma uhlelo lwezinombolo ezilandelanayo. Uma ukhetha ukusebenzisa ikhodi yesithenjwa senkokhelo kuma-invoyisi akho, awudingi ukulungiselela lutho. Uma ukhetha ukusebenzisa uhlelo lwezinombolo ezilandelanayo, kuzodingeka ulungiselele **inombolo ye-invoyisi elandelayo** (Le nombolo izosetshenziswa njengenombolo ye-invoyisi ye-invoyisi elandelayo ekhiqizwa ohlelweni. Yenyuswa ngo-one njalo uma kudalwa i-invoyisi entsha. Ungayishintsha futhi uyilondoloze ukuze usethe kabusha inombolo elandelanayo ye-invoyisi ibe yinani elithile) kanye **nesiqalo senombolo ye-invoyisi.**

<!-- Isithombe-skrini asitholakali: Imenyu eyehlayo yohlelo lokunombola ama-invoyisi enezinketho Zekhodi Yesithenjwa Senkokhelo kanye Nenombolo Elandelanayo -->

<!-- Isithombe-skrini asitholakali: Izinkambu zenombolo ye-invoyisi elandelayo nesiqalo senombolo ye-invoyisi eziboniswa lapho kukhethwe Inombolo Elandelanayo -->

## Ungawathola kuphi amasango: {#where-to-find-the-gateways}

Ungasetha amasango okukhokha ekhasini elifanayo ( **Ultimate Multisite > Izilungiselelo > Izinkokhelo**). Ngaphansi nje kokuthi **amasango okukhokha asebenzayo** , uzokwazi ukubona: _Stripe_ , _Stripe_ _Checkout_ , _PayPal_ kanye ne-_Manual_.

![Isigaba Samasango Okukhokha Asebenzayo sifaka ohlwini i-Stripe, Stripe Checkout, PayPal kanye ne-Manual](/img/config/payments-active-gateways.png)

Sine-athikili ezinikele esangweni ngalinye lokukhokha ezokuqondisa ezinyathelweni zokulisetha, ongayithola kuzixhumanisi ezingezansi.

Ungabuka futhi uhlele imininingwane yokukhokha:

![Isixhumi sokuhlela inkokhelo](/img/admin/payment-edit.png)

Nawu umbono ogcwele wekhasi lokuhlela inkokhelo:

![Isixhumi esigcwele sokuhlela inkokhelo](/img/admin/payment-edit-full.png)

Nawu futhi umbono ogcwele wezilungiselelo zamasango okukhokha:

![Ikhasi eligcwele lezilungiselelo zamasango okukhokha](/img/config/settings-payments-gateways-full.png)

**Ukusetha isango le-Stripe**

**Ukusetha isango le-PayPal**** **

**Ukusetha izinkokhelo ezenziwa mathupha**

Manje, uma ufuna ukusebenzisa _WooCommerce_ , _GoCardless_ noma _Payfast_ njengesango lakho lokukhokha, kuzodingeka **ufake futhi ulungiselele ama-add-on awo**.

### Indlela yokufaka i-add-on ye-WooCommerce: {#how-to-install-the-woocommerce-add-on}

Siyaqonda ukuthi _Stripe_ kanye ne-_PayPal_ akutholakali kwamanye amazwe, okukhawulela noma okuvimbela abasebenzisi be-Ultimate Multisite ekusebenziseni i-plugin yethu ngempumelelo. Ngakho sidale i-add-on yokuhlanganisa _WooCommerce,_ okuyi-plugin yezohwebo nge-inthanethi ethandwa kakhulu. Abathuthukisi emhlabeni wonke badale ama-add-on okuhlanganisa amasango okukhokha ahlukene kuyo. Sisebenzise lokhu ukwandisa amasango okukhokha ongawasebenzisa nesistimu yokukhokhisa ye-Ultimate Multisite.

_**OKUBALULEKILE:** Ultimate Multisite: WooCommerce Integration idinga ukuthi WooCommerce ivulwe okungenani kusayithi lakho eliyinhloko._

Okokuqala, sicela uye ekhasini lama-add-on. Ungalithola ngokuya ku-**Ultimate Multisite > Izilungiselelo**. Kufanele ubone ithebula lama-**Add-ons**. Chofoza ku-**Hlola ama-Add-ons ethu**.

<!-- Isithombe-skrini asitholakali: Ithebula lama-Add-ons kubha eseceleni Yezilungiselelo ze-Ultimate Multisite elinesixhumanisi esithi Hlola ama-Add-ons ethu -->

Ngemva kokuchofoza ku-**Hlola ama-Add-ons ethu** , uzoqondiswa kabusha ekhasini lama-add-on. Lapha ungathola wonke ama-add-on e-Ultimate Multisite. Chofoza ku-add-on ye-**Ultimate Multisite: WooCommerce Integration**.

![Ikhasi lama-add-on elifaka ohlwini ama-add-on e-Ultimate Multisite kuhlanganise ne-WooCommerce Integration](/img/addons/addons-page.png)

Kuzovela iwindi elinemininingwane yesengezo. Vele uchofoze ku-**Faka Manje**.

<!-- Isithombe-skrini asitholakali: ibhokisi lemininingwane yesengezo se-Ultimate Multisite WooCommerce Integration elinenkinobho ethi Faka Manje -->

Ngemva kokuba ukufaka sekuphelile, uzoqondiswa kabusha ekhasini lezandiso. Lapha, vele uchofoze ku-**Sebenzisa Kunethiwekhi** futhi isengezo se-WooCommerce sizosebenza kunethiwekhi yakho.

<!-- Isithombe-skrini asitholakali: ikhasi lezandiso elinesixhumanisi se-Sebenzisa Kunethiwekhi sesengezo se-WooCommerce Integration -->

Ngemva kokusenza sisebenze, uma usengenaso isandiso se-WooCommerce esifakiwe nesisebenzayo kuwebhusayithi yakho, uzothola isikhumbuzi.

<!-- Isithombe-skrini asitholakali: isaziso se-admin esikhumbuza umlawuli ukuthi afake futhi asebenzise isandiso se-WooCommerce -->

Ukuze ufunde kabanzi ngesengezo se-WooCommerce Integration, **chofoza lapha**.

### Indlela yokufaka isengezo se-GoCardless: {#how-to-install-the-gocardless-add-on}

Izinyathelo zokufaka isengezo se-_GoCardless_ cishe ziyefana nezesengezo se-_WooCommerce_. Sicela uye ekhasini lezingezo bese ukhetha isengezo se-**Ultimate Multisite: GoCardless Gateway**.

<!-- Isithombe-skrini asitholakali: ikhasi lezingezo elinesengezo se-Ultimate Multisite GoCardless Gateway esigqanyisiwe -->

Iwindi lesengezo lizovela. Chofoza ku-**Faka Manje**.

<!-- Isithombe-skrini asitholakali: ibhokisi lemininingwane yesengezo se-Ultimate Multisite GoCardless Gateway elinenkinobho ethi Faka Manje -->

Ngemva kokuba ukufaka sekuphelile, uzoqondiswa kabusha ekhasini lezandiso. Lapha, vele uchofoze ku-**Sebenzisa Kunethiwekhi** futhi isengezo se-_GoCardless_ sizosebenza kunethiwekhi yakho.

<!-- Isithombe-skrini asitholakali: ikhasi lezandiso elinesixhumanisi se-Sebenzisa Kunethiwekhi sesengezo se-GoCardless Gateway -->

Ukuze ufunde ukuthi ungaqala kanjani nge-_GoCardless_ gateway, **funda lesi sihloko**.

### Indlela yokufaka isengezo se-Payfast: {#how-to-install-the-payfast-add-on}

Yiya ekhasini lezingezo bese ukhetha isengezo se-**Ultimate Multisite: Payfast Gateway**.

<!-- Isithombe-skrini asitholakali: ikhasi lezingezo elinesengezo se-Ultimate Multisite Payfast Gateway esigqanyisiwe -->

Iwindi lesengezo lizovela. Chofoza ku-**Faka Manje.**

<!-- Isithombe-skrini asitholakali: ibhokisi lemininingwane yesengezo se-Ultimate Multisite Payfast Gateway elinenkinobho ethi Faka Manje -->

Ngemva kokuba ukufaka sekuphelile, uzoqondiswa kabusha ekhasini lezandiso. Lapha, vele uchofoze ku-**Sebenzisa Kunethiwekhi** futhi isengezo se-_Payfast_ sizosebenza kunethiwekhi yakho.

<!-- Isithombe-skrini asitholakali: ikhasi lezandiso elinesixhumanisi se-Sebenzisa Kunethiwekhi sesengezo se-Payfast Gateway -->
