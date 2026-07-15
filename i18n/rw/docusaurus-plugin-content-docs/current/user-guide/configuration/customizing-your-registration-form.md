---
title: Gutunganya ifishi yawe yo kwiyandikisha
sidebar_position: 17
_i18n_hash: 3dada0e900a1f46d950e1815ae8f5085
---
# Guhindura uko Ifishi yawe yo Kwiyandikisha imeze

Kugira ngo urubuga rwawe rugaragare rwihariye ugereranyije n’izindi SaaS zose zubatswe kuri platform ya WordPress, Ultimate Multisite igufasha guhindura impapuro zawe zo kwiyandikisha no kwinjira ukoresheje umwihariko wacu wa **Checkout Forms**.

Nubwo ari uburyo bworoshye kandi bworohereza kugerageza inzira zitandukanye mu gihe ushaka guhindura abakiriya bashya, ahanini bukoreshwa mu gukora amafishi yo kwiyandikisha yihariye. Iyi ngingo igamije kukwereka uko wabikora.

## Impapuro zo kwinjira no kwiyandikisha: {#login-and-registration-pages}

Iyo Ultimate Multisite imaze gushyirwamo, ihita ikora impapuro zihariye zo kwinjira no kwiyandikisha ku rubuga rwawe nyamukuru. Ushobora guhindura izi mpapuro zisanzwe igihe icyo ari cyo cyose ujya kuri paji yawe ya **Ultimate Multisite > Settings > Login & Registration**.

![Paji y’igenamiterere ryo Kwinjira no Kwiyandikisha](/img/config/settings-general.png)

Dore ishusho yuzuye ya paji y’igenamiterere ryo kwinjira no kwiyandikisha:

![Paji yuzuye y’igenamiterere ryo Kwinjira no Kwiyandikisha](/img/config/settings-login-registration-full.png)

Reka turebe buri kimwe mu byo ushobora guhindura kuri paji ya **Login & Registration**:

  * **Enable registration:** Iri hitamo rizafungura cyangwa rifunge kwiyandikisha ku rubuga rwawe. Niryazimwa, abakiriya bawe ntibazashobora kwiyandikisha no gufata ifatabuguzi ku bicuruzwa byawe.

  * **Enable email verification:** Iri hitamo nirifungurwa, abakiriya bafata ifatabuguzi rya plan y’ubuntu cyangwa plan yishyurwa ifite igihe cy’igerageza bazakira email yo kugenzura, kandi bazasabwa gukanda ku ihuza ryo kugenzura kugira ngo imbuga zabo zikorerwe.

  * **Default registration page:** Iyi ni paji isanzwe yo kwiyandikisha. Iyi paji igomba kuba yatangajwe ku rubuga rwawe kandi ikagira ifishi yo kwiyandikisha (nanone izwi nka checkout form) - aho abakiriya bawe bazafatira ifatabuguzi ku bicuruzwa byawe. Ushobora gukora impapuro zo kwiyandikisha n’ama checkout forms uko ubishaka kose, gusa ujye wibuka gushyira shortcode ya checkout form kuri paji yo kwiyandikisha, bitabaye ibyo ntizagaragara.

  * **Use custom login page:** Iri hitamo rigufasha gukoresha paji yo kwinjira yahinduwe uko ubyifuza, itandukanye na paji isanzwe ya wp-login.php. Iri hitamo nirifungurwa, ushobora guhitamo paji izakoreshwa mu kwinjira mu ihitamo rya **Default login page** (riri hasi gato).

  * **Obfuscate the original login url (wp-login.php)** : Niba ushaka guhisha URL y’umwimerere yo kwinjira, ushobora gufungura iri hitamo. Ibi bifasha gukumira ibitero bya brute-force. Iri hitamo nirifungurwa, Ultimate Multisite izerekana ikosa rya 404 igihe umukoresha agerageje kugera ku ihuza ry’umwimerere rya wp-login.php

  * **Force synchronous site publication:** Nyuma y’uko umukiriya afashe ifatabuguzi ku gicuruzwa kuri network, site nshya itegereje igomba guhindurwa site nyayo ya network. Igikorwa cyo gutangaza kiba binyuze muri Job Queue, mu buryo butagendera icyarimwe. Fungura iri hitamo kugira ngo gutangaza bibe mu busabe bumwe no kwiyandikisha.

Noneho, reka turebe andi mahitamo agifitanye isano n’igikorwa cyo kwinjira no kwiyandikisha. Ari munsi gato ya **Other options** kuri iyo paji imwe ya Login & registration:

  * **Default role:** Uru ni uruhare abakiriya bawe bazagira ku rubuga rwabo nyuma y’igikorwa cyo kwiyandikisha.

  * **Enable Jumper:** Ifungura shortcut ya Jumper mu gice cy’ubuyobozi. Jumper ifasha abayobozi guhita bajya vuba kuri screens za Ultimate Multisite, objects za network, n’ahandi hantu hashyigikiwe batiriwe banyura muri buri menu. Yizimye niba wifuza guhisha icyo gikoresho cyihuse cyo kugendagenda muri admin interface.

  * **Add users to the main site as well:** Gufungura iri hitamo bizongera no gushyira umukoresha kuri site nyamukuru ya network yawe nyuma y’igikorwa cyo kwiyandikisha. Nufungura iri hitamo, ihitamo ryo gushyiraho **default role** y’aba bakoresha ku rubuga rwawe na ryo rizagaragara hasi gato.

  * **Enable multiple accounts:** Emerera abakoresha kugira accounts ku mbuga zitandukanye za network yawe bakoresheje aderesi ya email imwe. Iri hitamo nirizima, abakiriya bawe ntibazashobora gukora account ku zindi mbuga zikora kuri network yawe bakoresheje aderesi ya email imwe.

Kandi ibyo ni byo byose bijyanye n’amahitamo yo kwinjira no kwiyandikisha ushobora guhindura! Ntuzibagirwe kubika igenamiterere ryawe nyuma yo kurangiza kurihindura.

## Gukoresha amafishi menshi yo kwiyandikisha: {#using-multiple-registration-forms}

Ultimate Multisite 2.0 itanga editor ya checkout form igufasha gukora amafishi uko uyashaka kose, afite fields zitandukanye, ibicuruzwa bitangwa, n’ibindi.

Impapuro zombi zo kwinjira no kwiyandikisha zashyizwemo shortcodes: **[wu_login_form]** kuri paji yo kwinjira na**[wu_checkout]** ku paji yo kwiyandikisha. Ushobora kurushaho guhindura paji yo kwiyandikisha wubaka cyangwa ukora checkout forms.

Kugira ngo ugere kuri uyu mwihariko, jya kuri menu ya **Checkout Forms**, ku ruhande rw’ibumoso.

![Menu ya Checkout Forms muri sidebar](/img/config/checkout-forms-list.png)

Kuri iyi paji, ushobora kubona checkout forms zose ufite.

Niba ushaka gukora nshya, kanda gusa kuri **Add Checkout Form** hejuru ya paji.

Ushobora guhitamo rimwe muri aya mahitamo atatu nk’aho uhera: intambwe imwe, intambwe nyinshi cyangwa ubusa. Hanyuma, kanda kuri **Go to the Editor**.

![Kongeramo Checkout Form ifite amahitamo y’intambwe imwe, intambwe nyinshi, cyangwa ubusa](/img/config/checkout-forms-list.png)

Ubundi buryo, ushobora guhindura cyangwa gukoporora amafishi usanzwe ufite ukanda ku mahitamo ari munsi y’izina ryayo. Aho, uzahasanga kandi amahitamo yo gukoporora shortcode y’ifishi cyangwa gusiba ifishi.

![Ibikorwa bigaragara iyo unyuze hejuru ya checkout form birimo guhindura, gukoporora, no gusiba](/img/config/checkout-form-hover-actions.png)

Nuhitamo intambwe imwe cyangwa intambwe nyinshi, checkout form izaba yamaze kuzuzwa mbere intambwe z’ibanze ziyifasha gukora. Hanyuma, niba ubishaka, ushobora kuyongeraho izindi ntambwe.

### Guhindura Checkout Form: {#editing-a-checkout-form}

Nk’uko twabivuze mbere, ushobora gukora checkout forms ku ntego zitandukanye. Muri uru rugero turakora ku ifishi yo kwiyandikisha.

Nyuma yo kujya muri editor ya checkout form, ha ifishi yawe izina (rizakoreshwa gusa nk’icyerekezo cy’imbere) na slug (ikoreshwa mu gukora shortcodes, urugero).

![Muhinduzi w'ifishi yo kwishyura ufite imyanya y'izina na slug](/img/config/checkout-form-name-slug.png)

Amafishi agizwe n’intambwe n’imyanya. Ushobora kongeramo intambwe nshya ukanze kuri **Ongeraho Intambwe Nshya yo Kwishyura**.

![Buto yo Ongeraho Intambwe Nshya yo Kwishyura](/img/config/checkout-form-add-step.png)

Ku gice cya mbere cy’idirishya rya modal, shyiramo ibikubiye mu ntambwe y’ifishi yawe. Yiha ID, izina n’ibisobanuro. Ibi bintu akenshi bikoreshwa imbere muri sisitemu.

![Agace k'ibikubiye mu ntambwe yo kwishyura gafite ID, izina n'ibisobanuro](/img/config/checkout-form-step-content.png)

Hanyuma, shiraho uko intambwe igaragara. Ushobora guhitamo hagati ya **Buri gihe yerekane** , **Yerekane gusa ku bakoresha binjiye** cyangwa **Yerekane gusa ku bashyitsi**.

![Amahitamo y'ukugaragara kw'intambwe yo kwishyura](/img/config/checkout-form-step-visibility.png)

Hanyuma, tunganya imiterere y’intambwe. Iyi myanya kuyuzuza si itegeko.

![Igenamiterere ry'imiterere y'intambwe yo kwishyura](/img/config/checkout-form-step-style.png)

Ubu, igihe kirageze cyo kongera imyanya ku ntambwe yacu ya mbere. Kanda gusa kuri **Ongeraho Umwanya Mushya** maze uhitemo ubwoko bw’igice ushaka.

![Buto yo Ongeraho Umwanya Mushya](/img/config/checkout-form-add-field-button.png)![Urutonde rumanuka rwo guhitamo ubwoko bw'umwanya](/img/config/checkout-form-field-type-dropdown.png)

Buri mwanya ufite ibipimo bitandukanye bigomba kuzuzwa. Kuri iyi nyongera ya mbere, tuzahitamo umwanya wa **Izina ry'ukoresha**.

![Igenamiterere ry'ibikubiye mu mwanya w'izina ry'ukoresha](/img/config/checkout-form-username-content.png)![Ibipimo by'umwanya w'izina ry'ukoresha](/img/config/checkout-form-username-visibility.png)![Igenamiterere ry'inyongera ry'umwanya w'izina ry'ukoresha](/img/config/checkout-form-username-style.png)

Ushobora kongeramo intambwe n’imyanya byinshi uko ukeneye. Kugira ngo wereke abakiriya bawe ibicuruzwa byawe bahitemo kimwe, koresha umwanya w’Imbonerahamwe y’Ibiciro. Niba ushaka kureka abakiriya bawe bagahitamo inyandikorugero, ongeramo umwanya wo Guhitamo Inyandikorugero. N’ibindi.

![Muhinduzi w'ifishi yo kwishyura ufite umwanya wo guhitamo inyandikorugero](/img/config/checkout-form-with-template-field.png)

_**Icyitonderwa:** Niba ukoze igicuruzwa nyuma yo gukora ifishi yawe yo kwishyura, uzakenera kongera icyo gicuruzwa mu gice cy’Imbonerahamwe y’ibiciro. Nutacyongeramo, icyo gicuruzwa ntikizagaragara ku bakiriya bawe ku rupapuro rwo kwiyandikisha._

_**Icyitonderwa 2:** izina ry’ukoresha, email, password, umutwe w’urubuga, URL y’urubuga, incamake y’itegeko, ubwishyu, na buto yo kohereza ni imyanya itegekwa kugira ngo ukore ifishi yo kwishyura._

Mu gihe uri gukora ku ifishi yawe yo kwishyura, ushobora buri gihe gukoresha buto yo Kureba Mbere kugira ngo urebe uko abakiriya bawe bazabona ifishi. Ushobora kandi guhinduranya hagati yo kureba nk’umukoresha usanzweho cyangwa umushyitsi.

![Buto yo Kureba Mbere kuri muhinduzi w'ifishi yo kwishyura](/img/config/checkout-form-preview-button.png)![Kureba mbere ifishi yo kwishyura nk'umushyitsi cyangwa umukoresha usanzweho](/img/config/checkout-form-preview-modal.png)

Hanyuma, kuri **Amahitamo Ateye Imbere** ushobora gutunganya ubutumwa bw’urupapuro rwa **Murakoze**, kongeramo snippets zo gukurikirana conversions, kongeramo CSS yihariye ku ifishi yawe yo kwishyura cyangwa kuyigarukira ku bihugu runaka.

![Amahitamo Ateye Imbere afite urupapuro rwa Murakoze, gukurikirana conversions, na CSS yihariye](/img/config/checkout-form-advanced.png)

Ushobora kandi gufungura cyangwa gufunga ifishi yawe yo kwishyura intoki uhinduranya iri hitamo riri mu nkingi y’iburyo, cyangwa ugasiba burundu iyo fishi.

![Toggle ikora n'ihitamo ryo gusiba ifishi yo kwishyura](/img/config/checkout-form-active.png)

Ntiwibagirwe kubika ifishi yawe yo kwishyura!

![Buto yo Kubika Ifishi yo Kwishyura](/img/config/checkout-form-save.png)

Kugira ngo ubone shortcode y’ifishi yawe kanda kuri **Kora Shortcode** maze ukoporore igisubizo kigaragazwa mu idirishya rya modal.

![Modal yo Kora Shortcode ifite shortcode yo gukoporora](/img/config/checkout-form-editor.png)

_**Icyitonderwa:** Uzakenera kongera iyi shortcode ku rupapuro rwawe rwo kwiyandikisha kugira ngo iyi fishi yo kwishyura yongerwemo._

## Guhitamo mbere ibicuruzwa n’inyandikorugero ukoresheje ibipimo bya URL: {#pre-selecting-products-and-templates-via-url-parameters}

Niba ushaka gukora imbonerahamwe z’ibiciro zihariye ku bicuruzwa byawe no guhitamo mbere ku ifishi yo kwishyura igicuruzwa cyangwa inyandikorugero umukiriya wawe ahitamo avuye ku mbonerahamwe y’ibiciro yawe cyangwa ku rupapuro rw’inyandikorugero, ushobora kubikoresha ukoresheje ibipimo bya URL.

### **Kuri gahunda:** {#for-plans}

Jya kuri **Ultimate Multisite > Ibicuruzwa > Hitamo gahunda**. Wagombye kubona buto ya **Kanda ukoporore Link Isangizwa** hejuru y’urupapuro. Iyi ni link ushobora gukoresha kugira ngo uhitemo mbere iyi gahunda yihariye ku ifishi yawe yo kwishyura.

![Urupapuro rw'igicuruzwa rufite buto ya link isangizwa](/img/config/products-list.png)

Menya ko iyi link isangizwa ikora gusa kuri **Gahunda**. Ntushobora gukoresha links zisangizwa ku mapaki cyangwa serivisi.

### Ku nyandikorugero: {#for-templates}

Niba ushaka guhitamo mbere inyandikorugero z’urubuga ku ifishi yawe yo kwishyura, ushobora gukoresha igipimo: **?template_id=X** kuri URL y’urupapuro rwawe rwo kwiyandikisha. "X" igomba gusimbuzwa **inomero ya ID y'inyandikorugero y'urubuga**. Kugira ngo ubone iyi nomero, jya kuri **Ultimate Multisite > Imbuga**.

Kanda kuri **Gucunga** munsi neza y’inyandikorugero y’urubuga ushaka gukoresha. Uzabona inomero ya SITE ID. Koresha gusa iyi nomero kuri iyi nyandikorugero y’urubuga yihariye kugira ngo ihitwemo mbere ku ifishi yawe yo kwishyura. Muri uru rugero rwacu hano, igipimo cya URL cyaba **?template_id=2**.

![Urutonde rw'imbuga rwerekana ID y'inyandikorugero y'urubuga](/img/config/site-templates-list.png)

Reka tuvuge ko urubuga rwacu rwa network ari [**www.mynetwork.com**](http://www.mynetwork.com) kandi urupapuro rwacu rwo kwiyandikisha rufite ifishi yacu yo kwishyura ruherereye ku rupapuro rwa **/register**. URL yose ifite iyi nyandikorugero y’urubuga yahiswemo mbere izasa na [**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2**.

Kandi niba ubishaka, ushobora guhitamo mbere ibicuruzwa n’inyandikorugero byombi ku ifishi yawe yo kwishyura. Icyo ukeneye gukora ni ugukoporora link isangizwa ya gahunda maze ugashyira igipimo cy’inyandikorugero ku mpera. Izasa na [**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2**.
