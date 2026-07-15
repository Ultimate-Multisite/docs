---
title: Template siti
sidebar_position: 4
_i18n_hash: fec01b1bf4e915bea1e8cd662fc1b465
---
# Modelli Siti (v2)

_**NOTA: Danestatshu huwa riferitu à Ultimate Multisite versjoni 2.x. Jekk qed tiffa bi versjoni 1.x,**_ **qri leqsa** _**.**_

L-għan tagħna meta nistgħu bidiċent network b'Ultimate Multisite huwa li nautomizzaw il-maġribi possibbli fl-mejdan, waqt li niddiyyem lil kliemiet fleksibilità u opzioni differenti biex jiġu għażlu meta jikunu qed jagħmlu is-siti tagħhom. Un waħda l-modi sħiħa biex nisħu dan il-balans hija li nistgħu nistgħu l-funzjoni ta Site Templates ta Ultimate Multisite.

## X'la huwa Site Template? {#what-is-a-site-template}

Bħal meta jgħid il-isem tiegħu, Site Template huwa siti boilerplate (template) li jista' jintigħdu bħala base meta qed tgħmli siti ġodda f'network tiegħek.

Dan jkun significa li tista' tgħmli sito base, attiva plugin differenti, tsetti tema aktiva, u tistgħi tippersonalizzali kif tħseb. Mura, meta il-customer tiegħek jagħmel kont ġdid, invece ta li jiddeq sit WordPress default li ma għandu mhux kontent b'signifikanza fih, hu jiddeq kopja tal-sito base tiegħek mal-kull l-personalizzazzjonijiet u l-kontenut imħallin.

Dan jiddeq awsolenti, iżda kif nistgħu nistgħu template ta sito ġdida? Huwa sempliċi kif ma jistax jkoll.

## Għmli u Edita Site Template ġdid {#creating-and-editing-a-new-site-template}

Site Templates huma siti normali fuq network tiegħek. Biex tgħmli template ġdid, tista' tmur biss għand **Network Admin > Ultimate Multisite > Sites > Add Site.**

**![Add site button in the Sites list page](/img/config/site-templates-list.png)**

Dan jiftħaq modal window li jista' jiddemkien biex jista' jiddemka l-**Site title, Site Domain/path,** u **Site type**. Nkundol fil-field drop-down ta **Site Type** għal ma tsetti li tagħżel **Site Template** *.

_![Add site template modal with site type dropdown](/img/config/site-templates-list.png)_

Tista' tiddarru wkoll deskrizzjoni biex tgħmel l-customer biex jaf għal cosa li jinkludi il-template:

![Site template description field on the site template edit screen](/img/config/site-template-edit-description.png)

F'forma ta l-bottom tal-form, tiegħek tista' tara il-toggle switch **Copy Site**. Dan jippermettik ليك tgħmli template diġament ġdid bbażat fuq template esistenti come punto partenza biex tgħmel ħafna temp, invece ta li tgħmli template mill-zero.

![Add site template modal with copy site toggle](/img/config/site-templates-list.png)

### Personalizzazzjoni tal-kontenut tal-Site Template {#customizing-the-contents-of-a-site-template}

Biex tista' personalizza il-site template tiegħek, għandu tmur dashboard panel tiegħu u tagħmel il-modifikazzjonijiet li għandek biex tgħmel. Tista' tgħmli postijiet (posts) nuovi, pages, attiva plugin, u tgħmli l-theme aktivi. Tista' persuni tnejt flim Customizer u tgħmli tutti konfiguraturi ta personalizzazzjoni.

![Site template edit interface](/img/config/site-template-edit.png)

Kull dan il-data seppur titkopat meta l-customer jagħmel site ġdid bbażat fuq dak Site Template.

### Opzjonijiet Avanzati {#advanced-options}

Jekk għandek konnaċċiment f xi coding kustom, tista' ufaq l-API ta Search and Replace tiegħene biex tiġi sostitwita informazzjoni fuq is-site ġdid wara li jkun creat. Dan huwa utlu għal ħjatit bħal sostituzzjoni tal-nomi tal-kompagnija fuq una About page, o s-sostitu tal-email ta kontatt fuq una Contact page, ecc.

### Użu tal-Site Templates {#using-site-templates}

Ok, qed tgħmlt għalcom template diġament differenti b'dissigni, themes u impostazzjonijiet differenti. Come tista' tgħmelhom utli fil-network tiegħek?

Bbażitament, jidher żmien li tista' użu taċċajji (approaches) iż-oħra (ma qed tiġi użu tagħhom meta l-customer jagħmel sign-up).

  * Attaġġ ta template diġament waħad għal kulla Plan tiegħek

**OPPURE**

  * Permetta lil kliemiet tiegħek li jgħażlu anqas templates diġament بنفسhom klentar tal-sign-up.

#### Mod 1: Assegna Site Template {#mode-1-assign-site-template}

בי מצב זה, הלקוחות שלך לא יוכלו לבחור תבנית (template) כשיוצרים חשבון, אלא אתה תחליט איזו תבנית צריכה להיות בשימוש בכל אחד מהתשקיפים (Plans) שלך.

כדי לעשות זאת, תצטרך להיכנס ל-**Ultimate Multisite > Products > Edit**.

![Edit product to assign site template](/img/config/product-site-templates.png)

זה יקח אותך לדף **Edit Product**. תחת סעיף **Product Options**, מצא את הלשונית (tab) **Site template** ובחר באפשרות **Assign Site Template** מהרשימה הנפתחת. זה יפתח לך את הרשימה של תבניות האתר הזמינות ותאפשר לך לבחור רק תבנית אחת המוקדשת למוצר.

![Product site template tab with assign site template option](/img/config/product-site-templates.png)

#### מצב 2: בחירת תבנית אתר זמינה {#mode-2-choose-available-site-template}

במצב הזה, תעניק ללקוחות שלך בחירה במהלך תהליך ההרשמה. הם יוכלו לבחור מבין תבניות אתר שאתה מגדיר בהגדרות המוצר. יש לך אפשרות להגביל את תבניות האתר שהם יכולים לבחור מהמוצר שנבחר. זה יאפשר לך להחזיק סטים שונים של תבניות אתר תחת כל מוצר, וזה אידיאלי כדי להדגיש פונקציות ותכונות שונות עבור מוצר בעל מחיר גבוה יותר.

Faqed la **Edit Product** (Edita Prodott). Taħt secشن **Product Options** (Opzjonijiet tal-Prodott), għinnilqu fuq l-tab **Site template** u għal-dropdown field, issaċċċja l-opzjoni **Choose Available Site Template** (Iċekkja il-Site Template Madjod). Dan jgħidkom lil lista tal-site templates li huma disponibbli u jagħtik b'possibilità tagħżil tal-site template li tista' tkun disponibbli. Tista' tal-għażla dan b'iżgurar: **Available** (Disponibbli) jekk tista' l-site template jkollu f'lista, _**Not Available**_ (Mott Disponibbli) jekk ma tista' li juri come opzjoni, u **Pre-selected** (Pre-selett) jekk tista' li waħda mill-site templates li għandhom f'lista tkun selett bħala default.

![Choose available site templates with behavior options](/img/config/product-site-templates.png)

### Default Mode: Site template selection on the Checkout form (Selezzjoni tal-Site Template fuq il-Checkout form) {#default-mode-site-template-selection-on-the-checkout-form}

Jekk tista' li kull l-site templates tiegħek jkunu disponibbli klentari w digħla, jew ma tista' tkun xi ħaġa ta l-għamel ekstra biex tgħallim o tspecifika site templates taħt kulle prodott li tgħmli. Allora, tista' setti l-selezzjoni tal-site template taħt il-**Checkout Form** tiegħek. Biex tgħmel dan, għandi la **Ultimate Multisite > Checkout Forms** u għalqu fuq **Edit** taħt il-form li tista' tgħallim.

Dan jgħidkom lilna l-paġna **Edit Checkout Form**. Iċekkja l-field **Template Selection** (Selezzjoni tal-Template) u għalqu fuq **Edit** taħt tiegħu.

Tista' tispariċċja finestra modal. Taħt il-field **Template Sites**, tista' tagħżel u tiġi lista kull site template li tista' tkun disponibbli klentar. Il-site templates li tspecifika minn hekk jkun disponibbli indipendentemente minn id-prodott li segwiti l-user.

![Template selection field in the checkout form editor](/img/config/checkout-form-template-step.png)

Fuq il-frontend, il-klientijiet jorru l-chooser tal-template klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar klentar

![Frontend template chooser during registration](/img/config/frontend-template-chooser.png)

### Opzioni Template Sites {#site-template-options}

Il jidda għandhom funqjuni ta template siti oħra li tista' attiva jew inattiva sotto l-settings tal-Ultimate Multisite.

![Site template options in Ultimate Multisite settings](/img/config/settings-sites-templates-section.png)

#### Permetta il Switch ta Template {#allow-template-switching}

Attivazzjoni din l-opzione tista' tispjega lil klijenzi li jgħażlu template li għalihom żżewġa fl-proċess tal-sign-up, wara li jkollhom l-account u s-sito kienet creat. Dan huwa util mill-perspettiva tal-klijent peress li jista' jsogħtu b'template ieħor meta jifhmu li l-għażla ormoda mhix l-effettifika għall-ħtieġat speċifi tahom.

#### Permetta Li għall-Utenti użaw is-Sito tagħhom bħala template {#allow-users-to-use-their-site-as-templates}

Jekk l-utenti tal-subsite jgħandu ħin bidd jibnu u disigna is-sito tagħhom, jista' jgħandu li jkopjaw u jgħandu għalihom bħala waħda mill-template sites li magħrufu meta jikunu qed jgħandu subsite ieħor fuq laħduk. Dan l-opzione tista' tispjega li jistgħu jachfu dan.

#### Kopja tal-Media fil-Duplikazzjoni tal-Template {#copy-media-on-template-duplication}

Attivazzjoni din l-opzione tista' tkopja l-media li tikel fuq is-sito template għas-sito ġdid li kienet creat. Dan jista' jiġi superat (override) fuq kull minn il-plans.

#### **Previenta Metodi Iċċekkja (Search Engines) mn indixxi Template Sites** {#prevent-search-engines-from-indexing-site-templates}

Is-template sites biex tsoġġibu l-artikolu huwa boilerplate, iżda hija għall-network tiegħek u jista' jkunu disponibbli għall-metodi iċċekkja biex jiġu mndixxi. Dan l-opzione tista' tispjega li tgħajji is-template sites biex il-metodi iċċekkja jistgħu indixxu.

## Pre-populating Site Templates b auto search-and-replace {#pre-populating-site-templates-with-auto-search-and-replace}

Il-funzjoni li għall-Ultimate Multisite hija waḥad mill-piżi tagħha huwa l-possibbiltà ta li tiddispożi test, kollur u campi seleżjonati arbitrari fuq il-form ta reġistrazzjoni. Wakka nġarrbu dak l-data, nista użawha biex npre-popolaw il-kontenut f parti tal-template ta siti li sojnat. Imbagħad, meta is-sita ġdid jkun qed jiġi pubblika, l-Ultimate Multisite se tistitu l-placeholder b'informazzjoni effettiva li tmur fl-reġistrazzjoni.

Biex t-għidla, jekk tixtieq ism tal-kumpanija tal-utenti tiegħek klentari w tista' tixajja l-ism tal-kumpanija fuq l-homepage. Fu template ta siti homepage tiegħek għandek ażidi l-placeholder, bħal kif juri l-immaġini sott'ha (il-placeholder għandu jkun murat bl-ħafna żgħira – {{placeholder_name}}).

![Homepage with placeholder text in curly braces](/img/config/site-templates-list.png)

Imbagħad, tista' t-aḍdi b'mod semplice field ta reġistrazzjoni li jidher konforme fuq il-form tal-checkout tiegħek biex tiġi gurtabbil dan l-data. L-editor immahom huwa l-istess u użat għall-selezzjoni tal-template jippermenne li t-aḍdi campi kustom b'mod paralleli mal-chooser ta template:

![Template selection and registration fields in the checkout form editor](/img/config/checkout-form-template-step.png)

Il-klient tiegħek jista' jmleġġix dan il-field klentar tal-reġistrazzjoni.

![Frontend checkout form with template chooser](/img/config/frontend-template-chooser.png)

L-Ultimate Multisite se tistitu l-placeholder b'dati li forniti mill-klient b'mod awtomatiku.

![Placeholders replaced with customer data on the site](/img/config/site-templates-list.png)

### Soluzzjoni għall-problema ta "template kollu full ta placeholder" {#solving-the-template-full-of-placeholders-problem}

Kull dan huwa għażż, iżda nistgħu ntiq f problemi b'mod xebb: l-template tagħna – li klentar il-klient tiegħu jista' jmur bih – huma kollha full ta placeholder rreġistrazzjonali li ma jgħandu xi ħaġa.

Biex tiffa dan, ni noffru l-opzione ta impostare valori fittivi (fake values) għall-placeholder, u nistemplek b'oqsma tagħhom fuq siti template klienti meta huma qed jvisittoj.

Tista' tipprovvdi għall-editor tal-placeholder template billi tmur għal **Ultimate Multisite > Settings > Sites**, u poi, fil-sidebar, tkliqa l-link **Edit Placeholders**.

![Site template settings under the Sites settings page](/img/config/settings-sites-templates-section.png)

Dan jġibkixx għall-editor tal-kontenut tal-placeholder, fejn tista' tismella placeholders u l-kontenut proprju tagħhom.

![Template placeholders content editor entry point](/img/config/settings-sites-templates-section.png)
