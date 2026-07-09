---
title: Ukwenza ngokwezifiso ifomu yakho yobhaliso
sidebar_position: 17
_i18n_hash: 3dada0e900a1f46d950e1815ae8f5085
---
# Ukwenza iRegistration Form yakho ibe yeyakho

Ukuze wenze inethiwekhi yakho ibonakale yahlukile kuzo zonke ezinye ii-SaaS ezakhiwe kwiqonga le-WordPress, Ultimate Multisite ikuvumela ukuba wenze amaphepha akho okubhalisa nawokungena abe ngawe usebenzisa uphawu lwethu lwe-**Checkout Forms**.

Nangona ziyindlela elula neguquguqukayo yokuzama iindlela ezahlukeneyo xa uzama ukuguqula abathengi abatsha, zisetyenziswa kakhulu ukwenza iifom zokubhalisa ezenzelwe umntu. Eli nqaku lijolise ekukuboniseni indlela onokuyenza ngayo.

## Amaphepha okungena nawokubhalisa:

Xa kufakwa Ultimate Multisite, yenza ngokuzenzekelayo amaphepha okungena nawokubhalisa enziwe ngokwezifiso kwisiza sakho esiphambili. Ungawatshintsha la maphepha angagqibekanga nanini na ngokuya kwiphepha lakho le-**Ultimate Multisite > Settings > Login & Registration**.

![Iphepha leesethingi zokungena nokubhalisa](/img/config/settings-general.png)

Nanku umbono opheleleyo wephepha leesethingi zokungena nokubhalisa:

![Iphepha elipheleleyo leesethingi zokungena nokubhalisa](/img/config/settings-login-registration-full.png)

Masijonge ukhetho ngalunye onokulwenza ngokwezifiso kwiphepha le-**Login & Registration**:

  * **Vumela ubhaliso:** Olu khetho luya kuvumela okanye luvale ubhaliso kwinethiwekhi yakho. Ukuba lucinyiwe, abathengi bakho abayi kukwazi ukubhalisa nokurhuma kwiimveliso zakho.

  * **Vumela ukuqinisekiswa kwe-imeyile:** Ukuba olu khetho luvuliwe, abathengi abarhumela kwisicwangciso sasimahla okanye kwisicwangciso esihlawulelwayo esinexesha lovavanyo baya kufumana i-imeyile yokuqinisekisa kwaye kuya kufuneka bacofe ikhonkco lokuqinisekisa ukuze iiwebhusayithi zabo zenziwe.

  * **Iphepha lobhaliso elingagqibekanga:** Eli liphepha elingagqibekanga lobhaliso. Eli phepha kufuneka lipapashwe kwiwebhusayithi yakho kwaye libe nefom yokubhalisa (ekwabizwa ngokuba yi-checkout form) - apho abathengi bakho baya kurhuma kwiimveliso zakho. Ungadala amaphepha obhaliso kunye nee-checkout forms ezininzi kangangoko ufuna, khumbula nje ukubeka i-shortcode ye-checkout form kwiphepha lobhaliso, kungenjalo ayiyi kuvela.

  * **Sebenzisa iphepha lokungena elenziwe ngokwezifiso:** Olu khetho lukuvumela ukuba usebenzise iphepha lokungena elenziwe ngokwezifiso, elingeyiyo iphepha elingagqibekanga le-wp-login.php. Ukuba olu khetho luvuliwe, ungakhetha ukuba leliphi iphepha eliza kusetyenziselwa ukungena kukhetho lwe-**Default login page** (ngqo ngezantsi).

  * **Fihla i-URL yokungena yokuqala (wp-login.php)** : Ukuba ufuna ukufihla i-URL yokungena yokuqala, ungavula olu khetho. Oku kuluncedo ekuthinteleni uhlaselo lwe-brute-force. Ukuba olu khetho luvuliwe, Ultimate Multisite iya kubonisa impazamo ye-404 xa umsebenzisi ezama ukufikelela kwikhonkco lokuqala le-wp-login.php

  * **Nyanzelisa ukupapashwa kwesiza ngexesha elinye:** Emva kokuba umthengi erhumela kwimveliso kwinethiwekhi, isiza esitsha esisalindileyo kufuneka siguqulelwe kwisiza sokwenene senethiwekhi. Inkqubo yokupapasha yenzeka nge-Job Queue, ngendlela engahambelaniyo ngexesha. Vula olu khetho ukunyanzelisa ukupapashwa ukuba kwenzeke kwisicelo esinye nokubhalisa.

Ngoku, masibone ezinye iinketho ezisabalulekileyo kwinkqubo yokungena nokubhalisa. Zingaphantsi kwe-**Other options** kwiphepha elifanayo le-Login & registration:

  * **Indima engagqibekanga:** Le yindima abathengi bakho abaya kuba nayo kwiwebhusayithi yabo emva kwenkqubo yokubhalisa.

  * **Vumela i-Jumper:** Ivumela isinqumli se-Jumper kwindawo yolawulo. I-Jumper ivumela abalawuli ukuba batsibele ngokukhawuleza kwizikrini ze-Ultimate Multisite, izinto zenethiwekhi, kunye nezinye iindawo ezixhaswayo ngaphandle kokukhangela kuyo yonke imenyu. Yicime ukuba ukhetha ukufihla eso sixhobo sokuhamba ngokukhawuleza kujongano lolawulo.

  * **Yongeza abasebenzisi kwisiza esiphambili kwakhona:** Ukuvumela olu khetho kuya kongeza nomsebenzisi kwisiza esiphambili senethiwekhi yakho emva kwenkqubo yokubhalisa. Ukuba uvula olu khetho, ukhetho lokuseta **indima engagqibekanga** yaba basebenzisi kwiwebhusayithi yakho luya kuvela ngqo ngezantsi.

  * **Vumela ii-akhawunti ezininzi:** Vumela abasebenzisi ukuba babe neeakhawunti kwiindawo ezahlukeneyo zenethiwekhi yakho besebenzisa idilesi ye-imeyile efanayo. Ukuba olu khetho lucinyiwe, abathengi bakho abayi kukwazi ukwenza iakhawunti kwezinye iiwebhusayithi ezisebenza kwinethiwekhi yakho besebenzisa idilesi ye-imeyile efanayo.

Kwaye zizizo zonke iinketho ezinxulumene nokungena nokubhalisa onokuzilungisa ngokwezifiso! Ungalibali ukugcina iisethingi zakho emva kokugqiba ukuzihlela.

## Ukusebenzisa iifom zobhaliso ezininzi:

Ultimate Multisite 2.0 inika umhleli we-checkout form okuvumela ukuba wenze iifom ezininzi kangangoko ufuna, ezinamabala ahlukeneyo, iimveliso ezikhoyo, njalo njalo.

Omabini amaphepha okungena nawokubhalisa afakwe ngee-shortcodes: **[wu_login_form]** kwiphepha lokungena kunye ne-**[wu_checkout]** kwiphepha lobhaliso. Ungaqhubeka ulungisa iphepha lobhaliso ngokwezifiso ngokwakha okanye ngokudala ii-checkout forms.

Ukufikelela kolu phawu, yiya kwimenyu ye-**Checkout Forms**, kwicala lasekhohlo.

![Imenyu ye-Checkout Forms kwi-sidebar](/img/config/checkout-forms-list.png)

Kweli phepha, ungabona zonke ii-checkout forms onazo.

Ukuba ufuna ukwenza entsha, cofa nje ku-**Add Checkout Form** phezulu ephepheni.

Ungakhetha enye kwezi ndlela zintathu njengendawo yakho yokuqala: inyathelo elinye, amanyathelo amaninzi okanye engenanto. Emva koko, cofa ku-**Go to the Editor**.

![Yongeza i-Checkout Form eneenketho zenyathelo elinye, amanyathelo amaninzi, okanye engenanto](/img/config/checkout-forms-list.png)

Kungenjalo, ungahlela okanye uphinde wenze ikopi yeefom osele unazo ngokucofa iinketho ezingaphantsi kwegama layo. Apho, uya kufumana kwakhona iinketho zokukopa i-shortcode yefom okanye ukucima ifom.

![Izenzo ze-checkout form xa kubekwe imouse ngaphezulu, ezinokuhlela, ukuphinda, nokucima](/img/config/checkout-form-hover-actions.png)

Ukuba ukhetha inyathelo elinye okanye amanyathelo amaninzi, i-checkout form iya kube sele igcwaliswe kwangaphambili ngamanyathelo asisiseko ukuze isebenze. Emva koko, ukuba uyafuna, ungongeza amanyathelo ongezelelweyo kuyo.

### Ukuhlela i-Checkout Form:

Njengoko besitshilo ngaphambili, ungadala ii-checkout forms ngeenjongo ezahlukeneyo. Kulo mzekelo siza kusebenza kwifom yobhaliso.

Emva kokuhamba uye kumhleli we-checkout form, nika ifom yakho igama (eliya kusetyenziswa kuphela njengereferensi yangaphakathi) kunye ne-slug (esetyenziselwa ukudala ii-shortcodes, umzekelo).

![Umhleli wefomu yokuhlawula onemimandla yegama ne-slug](/img/config/checkout-form-name-slug.png)

Iifomu zenziwe ngamanyathelo nemimandla. Ungongeza inyathelo elitsha ngokucofa ku-**Yongeza iNyathelo elitsha lokuHlawula**.

![Iqhosha lokongeza iNyathelo elitsha lokuHlawula](/img/config/checkout-form-add-step.png)

Kwithebhu yokuqala yefestile ye-modal, gcwalisa umxholo wenyathelo lefomu yakho. Yinike i-ID, igama nenkcazelo. Ezi zinto zisetyenziswa kakhulu ngaphakathi.

![Ithebhu yomxholo wenyathelo lokuhlawula ene-ID, igama, nenkcazelo](/img/config/checkout-form-step-content.png)

Okulandelayo, seta ukubonakala kwenyathelo. Ungakhetha phakathi kwe-**Soloko ubonisa** , **Bonisa kuphela kubasebenzisi abangene ngemvume** okanye **Bonisa kuphela kwiindwendwe**.

![Iinketho zokubonakala kwenyathelo lokuhlawula](/img/config/checkout-form-step-visibility.png)

Ekugqibeleni, qwalasela isitayile senyathelo. Le yimimandla ekhethwayo.

![Uqwalaselo lwesitayile senyathelo lokuhlawula](/img/config/checkout-form-step-style.png)

Ngoku, lixesha lokongeza imimandla kwinyathelo lethu lokuqala. Cofa nje ku-**Yongeza uMmandla oMtsha** uze ukhethe uhlobo lwecandelo olifunayo.

![Iqhosha lokongeza uMmandla oMtsha](/img/config/checkout-form-add-field-button.png)![Uluhlu oluhlayo lokukhetha uhlobo lommandla](/img/config/checkout-form-field-type-dropdown.png)

Ummandla ngamnye uneeparamitha ezahlukeneyo ekufuneka zigcwaliswe. Kolu ngeniso lokuqala, siza kukhetha ummandla we-**Igama lomsebenzisi**.

![Uqwalaselo lommandla wegama lomsebenzisi](/img/config/checkout-form-username-content.png)![Iiparamitha zommandla wegama lomsebenzisi](/img/config/checkout-form-username-visibility.png)![Iisetingi ezongezelelweyo zommandla wegama lomsebenzisi](/img/config/checkout-form-username-style.png)

Ungongeza amanyathelo nemimandla emininzi kangangoko uyifunayo. Ukubonisa iimveliso zakho ukuze abathengi bakho bakhethe enye, sebenzisa ummandla weTheyibhile yaMaxabiso. Ukuba ufuna ukuvumela abathengi bakho bakhethe itemplate, yongeza ummandla wokuKhetha iTemplate. Kwaye njalo njalo.

![Umhleli wefomu yokuhlawula onommandla wokukhetha itemplate](/img/config/checkout-form-with-template-field.png)

_**Qaphela:** Ukuba wenza imveliso emva kokwenza ifomu yakho yokuhlawula, kuya kufuneka wongeze imveliso kwicandelo leTheyibhile yaMaxabiso. Ukuba awuyongezi, imveliso ayizukuvela kubathengi bakho kwiphepha lobhaliso._

_**Qaphela 2:** igama lomsebenzisi, i-imeyile, igama lokugqitha, isihloko sesayithi, i-URL yesayithi, isishwankathelo se-odolo, intlawulo, kunye neqhosha lokuthumela yimimandla enyanzelekileyo yokwenza ifomu yokuhlawula._

Ngelixa usebenza kwifomu yakho yokuhlawula, ungasoloko usebenzisa iqhosha lokuJonga kwangaphambili ukubona indlela abathengi bakho abaza kuyibona ngayo ifomu. Ungatshintsha kwakhona phakathi kokuyijonga njengomsebenzisi okhoyo okanye njengondwendwe.

![Iqhosha lokuJonga kwangaphambili kumhleli wefomu yokuhlawula](/img/config/checkout-form-preview-button.png)![Ukujonga kwangaphambili ifomu yokuhlawula njengondwendwe okanye umsebenzisi okhoyo](/img/config/checkout-form-preview-modal.png)

Ekugqibeleni, ku-**Iinketho eziPhambili** ungaqwalasela umyalezo wephepha le-**Enkosi**, wongeze ii-snippets zokulandelela uguquko, wongeze i-CSS yesiko kwifomu yakho yokuhlawula okanye uyithintele kumazwe athile.

![Iinketho eziPhambili ezinephepha le-Enkosi, ukulandelela uguquko, kunye ne-CSS yesiko](/img/config/checkout-form-advanced.png)

Ungayivula okanye uyivale ngesandla ifomu yakho yokuhlawula ngokutshintsha le nketho kwikholamu esekunene, okanye uyicime ngokusisigxina ifomu.

![Ukutshintsha kokusebenza kunye nenketho yokucima ifomu yokuhlawula](/img/config/checkout-form-active.png)

Ungalibali ukugcina ifomu yakho yokuhlawula!

![Iqhosha lokugcina iFomu yokuHlawula](/img/config/checkout-form-save.png)

Ukufumana i-shortcode yefomu yakho cofa ku-**Yenza i-Shortcode** uze ukope isiphumo esiboniswe kwifestile ye-modal.

![I-modal yokwenza i-Shortcode ene-shortcode yokukopa](/img/config/checkout-form-editor.png)

_**Qaphela:** Kuya kufuneka wongeze le shortcode kwiphepha lakho lobhaliso ukuze le fomu yokuhlawula yongezwe kulo._

## Ukukhetha kwangaphambili iimveliso neetemplate ngeeparamitha ze-URL:

Ukuba ufuna ukwenza iitheyibhile zamaxabiso ezilungiselelwe iimveliso zakho kwaye ukhethe kwangaphambili kwifomu yokuhlawula imveliso okanye itemplate ekhethwa ngumthengi wakho kwitheyibhile yakho yamaxabiso okanye kwiphepha leetemplate, ungasebenzisa iiparamitha ze-URL ukwenza oku.

### **Ngezicwangciso:**

Yiya ku-**Ultimate Multisite > Iimveliso > Khetha isicwangciso**. Kufuneka ubone iqhosha le-**Cofa ukukopa iLinki eKwabelwana ngayo** phezulu ephepheni. Le ylinki onokuyisebenzisa ukukhetha kwangaphambili esi sicwangciso sithile kwifomu yakho yokuhlawula.

![Iphepha lemveliso elineqhosha lelinki ekwabelwana ngayo](/img/config/products-list.png)

Qaphela ukuba le linki ekwabelwana ngayo isebenza kuphela kwi-**Zicwangciso**. Awunakusebenzisa iilinki ekwabelwana ngazo kwiipakethe okanye kwiinkonzo.

### Ngeetemplate:

Ukuba ufuna ukukhetha kwangaphambili iitemplate zesayithi kwifomu yakho yokuhlawula, ungasebenzisa iparamitha: **?template_id=X** kwi-URL yephepha lakho lobhaliso. U-"X" kufuneka atshintshwe **yinombolo ye-ID yetemplate yesayithi**. Ukufumana le nombolo, yiya ku-**Ultimate Multisite > Iisayithi**.

Cofa ku-**Lawula** kanye phantsi kwetemplate yesayithi ofuna ukuyisebenzisa. Uza kubona inombolo ye-SITE ID. Sebenzisa nje le nombolo kule template yesayithi ithile ukuze ikhethwe kwangaphambili kwifomu yakho yokuhlawula. Kwimeko yethu apha, iparamitha ye-URL iya kuba ngu-**?template_id=2**.

![Uluhlu lweesayithi olubonisa i-ID yetemplate yesayithi](/img/config/site-templates-list.png)

Masithi iwebhusayithi yenethiwekhi yethu ngu-[**www.mynetwork.com**](http://www.mynetwork.com) kwaye iphepha lethu lobhaliso elinefomu yethu yokuhlawula likwiphepha le-**/register**. I-URL epheleleyo enale template yesayithi ekhethwe kwangaphambili iya kubonakala ngolu hlobo [**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2**.

Kwaye ukuba uyafuna, ungakhetha kwangaphambili zombini iimveliso neetemplate kwifomu yakho yokuhlawula. Into ekufuneka uyenzile kukukopa ilinki ekwabelwana ngayo yesicwangciso uze uncamathisele iparamitha yetemplate ekupheleni. Iya kubonakala ngolu hlobo [**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2**.
