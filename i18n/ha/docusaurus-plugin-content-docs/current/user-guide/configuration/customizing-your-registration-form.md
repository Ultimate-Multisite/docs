---
title: Keɓance Fom ɗin Rajistarka
sidebar_position: 17
_i18n_hash: 3dada0e900a1f46d950e1815ae8f5085
---
# Keɓance fom ɗin Rajistarka {#customizing-your-registration-form}

Don sa hanyar sadarwarka ta zama ta musamman daga duk sauran SaaS da aka gina a kan dandamalin WordPress, Ultimate Multisite yana ba ka damar keɓance shafukan rajista da shiga ta amfani da fasalinmu na **Checkout Forms**.

Ko da yake hanya ce mai sauƙi da sassauƙa don gwada hanyoyi daban-daban yayin ƙoƙarin jawo sababbin abokan ciniki, galibi ana amfani da su ne don ƙirƙirar fom ɗin rajista na musamman. Wannan labarin yana nufin nuna maka yadda za ka iya yin hakan.

## Shafukan shiga da rajista: {#login-and-registration-pages}

Bayan shigar da Ultimate Multisite, yana ƙirƙirar shafukan shiga da rajista na musamman ta atomatik a babban shafinka. Za ka iya canza waɗannan tsoffin shafuka a kowane lokaci ta zuwa shafin **Ultimate Multisite > Settings > Login & Registration** naka.

![Shafin saitunan Shiga da Rajista](/img/config/settings-general.png)

Ga cikakken kallon shafin saitunan shiga da rajista:

![Cikakken shafin saitunan Shiga da Rajista](/img/config/settings-login-registration-full.png)

Bari mu duba kowanne daga cikin zaɓuɓɓukan da za ka iya keɓancewa a shafin **Login & Registration**:

  * **Kunna rajista:** Wannan zaɓi zai kunna ko kashe rajista a kan hanyar sadarwarka. Idan an kashe shi, abokan cinikinka ba za su iya yin rajista ko biyan kuɗin samfuran ka ba.

  * **Kunna tabbatar da email:** Idan an kunna wannan zaɓi, abokan ciniki da suka yi rajista don shirin kyauta ko shirin biya mai lokacin gwaji za su karɓi email na tabbatarwa kuma za su buƙaci danna mahaɗin tabbatarwa domin a ƙirƙiri shafukansu.

  * **Tsohon shafin rajista:** Wannan shi ne tsohon shafi don rajista. Wannan shafi yana buƙatar a wallafa shi a shafinka kuma ya kasance da fom ɗin rajista (wanda kuma aka sani da fom ɗin checkout) - inda abokan cinikinka za su yi biyan kuɗin samfuran ka. Za ka iya ƙirƙirar shafukan rajista da fom ɗin checkout da yawa yadda kake so, kawai ka tuna saka shortcode na fom ɗin checkout a shafin rajista, in ba haka ba ba zai bayyana ba.

  * **Yi amfani da shafin shiga na musamman:** Wannan zaɓi yana ba ka damar amfani da shafin shiga da aka keɓance, ba tsohon shafin wp-login.php ba. Idan an kunna wannan zaɓi, za ka iya zaɓar wane shafi za a yi amfani da shi don shiga a zaɓin **Tsohon shafin shiga** (kai tsaye a ƙasa).

  * **Ɓoye asalin login url (wp-login.php)** : Idan kana son ɓoye asalin URL na shiga, za ka iya kunna wannan zaɓi. Wannan yana da amfani wajen hana hare-haren brute-force. Idan an kunna wannan zaɓi, Ultimate Multisite zai nuna kuskuren 404 lokacin da mai amfani ya yi ƙoƙarin samun dama ga asalin mahaɗin wp-login.php

  * **Tilasta wallafa shafi a lokaci guda:** Bayan abokin ciniki ya yi biyan kuɗin samfur a kan hanyar sadarwa, sabon shafin da ke jiran amincewa yana buƙatar a mayar da shi shafin hanyar sadarwa na gaske. Tsarin wallafawa yana faruwa ta hanyar Job Queue, ba a lokaci guda ba. Kunna wannan zaɓi don tilasta wallafawa ta faru a cikin buƙata ɗaya da rajistar.

Yanzu, bari mu ga wasu zaɓuɓɓuka da har yanzu suke da alaƙa da tsarin shiga da rajista. Suna kai tsaye ƙarƙashin **Sauran zaɓuɓɓuka** a kan wannan shafin Login & registration:

  * **Tsohuwar rawa:** Wannan ita ce rawar da abokan cinikinka za su samu a shafinsu bayan tsarin rajista.

  * **Kunna Jumper:** Yana kunna gajeriyar hanyar Jumper a yankin gudanarwa. Jumper yana ba masu gudanarwa damar tsallakawa da sauri zuwa allon Ultimate Multisite, abubuwan hanyar sadarwa, da sauran wuraren da ake tallafawa ba tare da bincika kowanne menu ba. Kashe shi idan ka fi so ka ɓoye wannan kayan aikin kewaya da sauri daga fuskar gudanarwa.

  * **Ƙara masu amfani zuwa babban shafi ma:** Kunna wannan zaɓi zai kuma ƙara mai amfani zuwa babban shafin hanyar sadarwarka bayan tsarin rajista. Idan ka kunna wannan zaɓi, zaɓi don saita **tsohuwar rawa** ta waɗannan masu amfani a shafinka zai kuma bayyana kai tsaye a ƙasa.

  * **Kunna asusu da yawa:** Ba masu amfani damar samun asusu a shafuka daban-daban na hanyar sadarwarka da adireshin email ɗaya. Idan wannan zaɓi a kashe yake, abokan cinikinka ba za su iya ƙirƙirar asusu a wasu shafukan yanar gizo da ke gudana a kan hanyar sadarwarka da adireshin email ɗaya ba.

Kuma waɗannan su ne duk zaɓuɓɓukan da suka shafi shiga da rajista da za ka iya keɓancewa! Kada ka manta ka adana saitunanka bayan ka gama gyara su.

## Amfani da fom ɗin rajista da yawa: {#using-multiple-registration-forms}

Ultimate Multisite 2.0 yana ba da editan fom ɗin checkout wanda ke ba ka damar ƙirƙirar fom da yawa yadda kake so, da filaye daban-daban, samfuran da ake bayarwa, da sauransu.

Duka shafukan shiga da rajista an saka su da shortcodes: **[wu_login_form]** a shafin shiga da**[wu_checkout]** don shafin rajista. Za ka iya ƙara keɓance shafin rajista ta hanyar gina ko ƙirƙirar fom ɗin checkout.

Don samun damar wannan fasali, je zuwa menu na **Checkout Forms**, a gefen hagu.

![Menu na Checkout Forms a cikin gefen gefe](/img/config/checkout-forms-list.png)

A wannan shafi, za ka iya ganin duk fom ɗin checkout da kake da su.

Idan kana son ƙirƙirar sabo, kawai danna **Ƙara Checkout Form** a saman shafin.

Za ka iya zaɓar ɗaya daga cikin waɗannan zaɓuɓɓuka uku a matsayin wurin farawa: mataki guda, matakai da yawa ko fanko. Sannan, danna **Je zuwa Edita**.

![Ƙara Checkout Form da zaɓuɓɓukan mataki guda, matakai da yawa, ko fanko](/img/config/checkout-forms-list.png)

A madadin haka, za ka iya gyara ko kwafi fom ɗin da kake da su ta danna zaɓuɓɓukan da ke ƙasa da sunansa. A can, za ka kuma sami zaɓuɓɓukan kwafi shortcode na fom ɗin ko share fom ɗin.

![Ayyukan shawagi na fom ɗin checkout tare da gyara, kwafi, da sharewa](/img/config/checkout-form-hover-actions.png)

Idan ka zaɓi mataki guda ko matakai da yawa, fom ɗin checkout zai riga ya kasance an cika shi da muhimman matakai domin ya yi aiki. Sannan, idan kana so, za ka iya ƙara masa ƙarin matakai.

### Gyara Checkout Form: {#editing-a-checkout-form}

Kamar yadda muka ambata a baya, za ka iya ƙirƙirar fom ɗin checkout don manufofi daban-daban. A wannan misali za mu yi aiki a kan fom ɗin rajista.

Bayan ka shiga editan fom ɗin checkout, ba fom ɗinka suna (wanda za a yi amfani da shi don tunani na ciki kawai) da slug (wanda ake amfani da shi don ƙirƙirar shortcakes, misali).

![Editan fom ɗin kammala saye tare da filayen suna da slug](/img/config/checkout-form-name-slug.png)

Ana yin fom ne da matakai da filaye. Za ka iya ƙara sabon mataki ta danna **Ƙara Sabon Matakin Kammala Saye**.

![Maɓallin Ƙara Sabon Matakin Kammala Saye](/img/config/checkout-form-add-step.png)

A shafin farko na taga modal, cika abubuwan da ke cikin matakin fom ɗinka. Ba shi ID, suna da bayanin kwatance. Ana yawan amfani da waɗannan abubuwa a ciki.

![Shafin abun ciki na matakin kammala saye tare da ID, suna, da bayanin kwatance](/img/config/checkout-form-step-content.png)

Na gaba, saita ganuwar matakin. Za ka iya zaɓa tsakanin **A nuna koyaushe** , **A nuna kawai ga masu amfani da suka shiga** ko **A nuna kawai ga baƙi**.

![Zaɓuɓɓukan ganuwar matakin kammala saye](/img/config/checkout-form-step-visibility.png)

A ƙarshe, daidaita salon matakin. Waɗannan filaye ne na zaɓi.

![Daidaita salon matakin kammala saye](/img/config/checkout-form-step-style.png)

Yanzu, lokaci ya yi da za mu ƙara filaye zuwa matakinmu na farko. Kawai danna **Ƙara Sabon Fili** kuma zaɓi nau’in sashe da kake so.

![Maɓallin Ƙara Sabon Fili](/img/config/checkout-form-add-field-button.png)![Jerin zaɓin nau’in fili](/img/config/checkout-form-field-type-dropdown.png)

Kowane fili yana da sigogi daban-daban da za a cika. Don wannan shigarwar ta farko, za mu zaɓi filin **Sunan mai amfani**.

![Daidaita filin Sunan mai amfani](/img/config/checkout-form-username-content.png)![Sigogin filin Sunan mai amfani](/img/config/checkout-form-username-visibility.png)![Ƙarin saitunan filin Sunan mai amfani](/img/config/checkout-form-username-style.png)

Za ka iya ƙara matakai da filaye gwargwadon bukatarka. Don nuna kayayyakinka ga kwastomominka su zaɓi ɗaya, yi amfani da filin Teburin Farashi. Idan kana son barin abokan cinikinka su zaɓi samfuri, ƙara filin Zaɓin Samfuri. Da sauransu.

![Editan fom ɗin kammala saye tare da filin zaɓin samfuri](/img/config/checkout-form-with-template-field.png)

_**Lura:** Idan ka ƙirƙiri kaya bayan ƙirƙirar fom ɗin kammala sayenka, za ka buƙaci ƙara kayan a sashen Teburin farashi. Idan ba ka ƙara shi ba, kayan ba zai bayyana ga kwastomominka a shafin rajista ba._

_**Lura 2:** sunan mai amfani, imel, kalmar sirri, taken shafi, URL na shafi, taƙaitaccen oda, biyan kuɗi, da maɓallin aikawa filaye ne dole don ƙirƙirar fom ɗin kammala saye._

Yayin da kake aiki a kan fom ɗin kammala sayenka, koyaushe za ka iya amfani da maɓallin Dubawa don ganin yadda abokan cinikinka za su ga fom ɗin. Haka kuma za ka iya sauyawa tsakanin dubawa a matsayin mai amfani da ke akwai ko baƙo.

![Maɓallin Dubawa a kan editan fom ɗin kammala saye](/img/config/checkout-form-preview-button.png)![Duban fom ɗin kammala saye a matsayin baƙo ko mai amfani da ke akwai](/img/config/checkout-form-preview-modal.png)

A ƙarshe, a kan **Zaɓuɓɓukan Ci-gaba** za ka iya daidaita saƙon shafin **Na Gode**, ƙara snippets don bibiyar sauyawa, ƙara CSS na musamman zuwa fom ɗin kammala sayenka ko takaita shi ga wasu ƙasashe.

![Zaɓuɓɓukan Ci-gaba tare da shafin Na Gode, bibiyar sauyawa, da CSS na musamman](/img/config/checkout-form-advanced.png)

Haka kuma za ka iya kunna ko kashe fom ɗin kammala sayenka da hannu ta kunna ko kashe wannan zaɓin a ginshiƙin dama, ko share fom ɗin har abada.

![Sauya kunnawa da zaɓin sharewa don fom ɗin kammala saye](/img/config/checkout-form-active.png)

Kar ka manta ka adana fom ɗin kammala sayenka!

![Maɓallin Adana Fom ɗin Kammala Saye](/img/config/checkout-form-save.png)

Don samun shortcode na fom ɗinka danna **Samar da Shortcode** kuma kwafi sakamakon da aka nuna a taga modal.

![Modal na Samar da Shortcode tare da shortcode da za a kwafa](/img/config/checkout-form-editor.png)

_**Lura:** Za ka buƙaci ƙara wannan shortcode zuwa shafin rajistarka domin a ƙara wannan fom ɗin kammala saye a kansa._

## Zaɓar kayayyaki da samfura tun da fari ta hanyar sigogin URL: {#pre-selecting-products-and-templates-via-url-parameters}

Idan kana son ƙirƙirar teburin farashi na musamman don kayayyakinka kuma ka zaɓi a gaba a kan fom ɗin kammala saye kayan ko samfurin da kwastomanka ya zaɓa daga teburin farashinka ko shafin samfura, za ka iya amfani da sigogin URL don wannan.

### **Don tsare-tsare:** {#for-plans}

Je zuwa **Ultimate Multisite > Kayayyaki > Zaɓi tsari**. Ya kamata ka ga maɓallin **Danna don kwafa Haɗin da Za a Iya Rabawa** a saman shafin. Wannan shi ne haɗin da za ka iya amfani da shi don zaɓar wannan takamaiman tsari a gaba a kan fom ɗin kammala sayenka.

![Shafin kaya tare da maɓallin haɗin da za a iya rabawa](/img/config/products-list.png)

Ka lura cewa wannan haɗin da za a iya rabawa yana aiki ne kawai ga **Tsare-tsare**. Ba za ka iya amfani da haɗin da za a iya rabawa don fakitoci ko ayyuka ba.

### Don samfura: {#for-templates}

Idan kana son zaɓar samfuran shafi a gaba a kan fom ɗin kammala sayenka, za ka iya amfani da sigar: **?template_id=X** a kan URL na shafin rajistarka. Ana buƙatar maye gurbin "X" da **lambar ID ta samfurin shafi**. Don samun wannan lamba, je zuwa **Ultimate Multisite > Shafuka**.

Danna **Sarrafa** kai tsaye a ƙasa da samfurin shafin da kake son amfani da shi. Za ka ga lambar SITE ID. Kawai yi amfani da wannan lamba don wannan takamaiman samfurin shafi don a zaɓe shi a gaba a kan fom ɗin kammala sayenka. A misalinmu a nan, sigar URL za ta kasance **?template_id=2**.

![Jerin shafuka da ke nuna ID na samfurin shafi](/img/config/site-templates-list.png)

A ce gidan yanar gizon network ɗinmu shi ne [**www.mynetwork.com**](http://www.mynetwork.com) kuma shafin rajistarmu tare da fom ɗin kammala sayenmu yana kan shafin **/register**. Cikakken URL tare da wannan samfurin shafi da aka riga aka zaɓa zai yi kama da [**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2**.

Kuma idan kana so, za ka iya zaɓar kayayyaki da samfura dukansu a gaba zuwa fom ɗin kammala sayenka. Abin da kawai kake buƙatar yi shi ne kwafa haɗin da za a iya rabawa na tsarin sannan ka manna sigar samfurin a ƙarshe. Zai yi kama da [**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2**.
