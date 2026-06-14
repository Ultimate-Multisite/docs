---
title: Innviðing á skráningarskjumnum þínum
sidebar_position: 17
_i18n_hash: 13f72671d55f48becd6bd89f6571f111
---
# Innstilla þig í skráningarsíðu

Til að gera netverk þitt einstakt frá öllum öðrum SaaS sem eru byggð á WordPress, leysir Ultimate Multisite þér möguleika á að breyta skráningarsíðunni og innri síðuna með eigin **Checkout Forms** eiginleika.

Þótt þær séu einfald og hlutverk til að prófa mikið við mörgu tengingu þegar þú reynir að breyta nýjum viðskiptavinum, eru þær að hlutgað til að skapa persónulega skráningarsíður. Þessi grein hefur tilgangi að sýna þér hvernig þú getur þetta gerð.

## Innri og skráningarsíður:

Þegar þú notar Ultimate Multisite, skapar það sjálft sér persónuleða innri og skráningarsíður á hlutina þín. Þú getur breytt þessar vinnuferli einafni með því að ferðast í **Ultimate Multisite > Settings > Login & Registration** síðuna.

![Skráningarsíða settir](/img/config/settings-general.png)

Hér er fullt sýn á settum innri og skráningarsíðunni:

![Full síða settir innri og skráningarsíðunni](/img/config/settings-login-registration-full.png)

Látum okkur skoða hverja valkost í **Login & Registration** síðunni sem þú getur breytt:

  * **Enable registration (Skráning):** Þetta valkostur mun leyfa eða neita skráning á netverk þínu. Ef það er slått af, gæti ekki viðskiptavinir þín skráð sig og tekið þá þá þínum vörum.

  * **Enable email verification (Skráning með tölvupósti):** Ef þetta valkostur er slått á, munu viðskiptavinir sem tekja þá frekari plan eða betalsplan með prófanir fá tölvupóst til staðar og verða að klikka á staðsetningu til að skrá sínum vörfum.

* **Standard enskráningasíða (Default registration page):** Þetta er standardíð fyrir enskráningu. Þessi síða þarf að vera upplýst á netasíðuna þinni og hafa enskráningarskjali (sem er kennt sem checkout form) - þar sem viðskiptavinir þín eru að teikna sig inn í vörum þínum. Þú getur skráð þér með hversu mikið enskráningasíða og checkout forms þú vilja, en hugsa það: þú verður að setja shortcode fyrir checkout forminn á enskráningarsíðuna, annars mun hann ekki sýnast.

* **Notkun sérsniðnu innskráningarsíðu (Use custom login page):** Þessi valkostur leyfir þér að nota sérsniðnu innskráningarsíða, sem er annar en standardíðina wp-login.php. Ef þetta valkostur er á hlutinn "on", geturðu velja hvern síðu sem skal nota í innskráningu á valkostnum **Standard innskráningasíða** (nánast undir).

* **Hýra upprunalega innskráningarsíðuna (Obfuscate the original login url (wp-login.php))**: Ef þú vilt hýra upprunalega innskráningarsíðuna, geturðu velja þetta valkostur á "on". Þetta er gagnlegt til að koma í veg fyrir brute-force áhættu. Ef þessi valkostur er á "on", mun Ultimate Multisite sýna 404 villu þegar notari reynir að hleðja upprunalega wp-login.php linkinn.

* **Forna samkvæmt síðaupplýsingum (Force synchronous site publication)**: Í eftir því sem viðskiptavinur teiknar sig inn í vöru á netverk, þarf nýr undirbúið síti að breytast í verkelegt netverkssíti. Lausnaraferðin fer með Job Queue, asynkrónlega. Skilið þetta valkostur til að forna upplýsinguna til að hleðja upp á sama skipti sem enskráningin er starfð.

En nú sjáum okkur andre valkostum sem eru enn mjög mikilvæg fyrir innskráningu og enskráningartilboð: Þau eru undir **Örvefni** á sama síðu Innskráningu og enskráningarsíða:

* **Standard hlutverk (Default role):** Þetta er hlutverki sem viðskiptavinir þín munu hafa á síðunni sínum eftir að enskráningaraferðin hefur verið starfð.

* **Aktiva Jumper:** Aktivar þetta ger Jumper shortcutinn í administrasjónuna að gildi. Jumper leyfir administratorum að spjalla raskt til skrána fyrir Ultimate Multisite, netverkstafna og övrantar stöðuvar, án þess að þurfa ferðast á hverjum menulinum. Skipti það af í gegnum ef þú vilt hýða þetta hraða nákvæmandi verkfæri frá administrasjónunni.

  * **Blaði við notendur í hlutina að hópnum:** Aktivað þessi valmið mun einnig bæta notandann við hvatninguna fyrir hópinn á hvíli sínu netverk eftir að skráningin er starfð. Ef þú aktivarð þetta valmið, mun valkostur til að setja **default role** þessar notendur á vefsíðunni þinni sýna sér strax undir.

  * **Aktiva fleiri reikninga:** Leita fyrir notendum að hafa reikninga í öllum hlutum netverkinn með sama tölvupóstfanni. Ef þetta valkostur er afskipti, gæti ekki viðskiptavinir þín skapað reikning á övrum vefsíðunum sem renna á netverkinn þínum með sama tölvupóstfanni.

Og það eru þessar allar valkostir sem tengjast inniheldingu og skráningu sem þú getur breytt! Hugsi ekki að spara settum þínum eftir að þú ert farnið í breytinguna.

## Notkun fleiri skráningartífa:

Ultimate Multisite 2.0 býður upp á efni fyrir bráðskipti (checkout form editor) sem leyfir þér að skapa hvaða fjölda tífa sem þú vilt, með öllum skilaboðum og vörum sem eru til við salg, osbn.

Báta inniheldingu og skráningarsíðu eru innbyggðar með shortcodes: **[wu_login_form]** á skráningarsíðuna og **[wu_checkout]** fyrir skráningarsíðuna. Þú getur vafinn further breytt skráningarsíðuna með því að byggja eða skapa bráðskipti tífa (checkout forms).

Til að komast í þennan eiginleika, ferst til menulinum **Checkout Forms** á vinstri hítli.

![Checkout Forms menu in the sidebar](/img/config/checkout-forms-list.png)

Á þessum síðu geturð að sjá allar bráðskipti tífa sem þú hefur.

Ef þú vilt skapa nýtt, bara klikka á **Add Checkout Form** uppstofa á síðuna.

Þú getur velja eina af þessum þrem mögulegum aðferðum sem byrjun: single step (einnstigi), multi-step (fleiri stig) eða blank (eng). Þar eftir, klikka á **Go to the Editor** (Gangi í vísarbandann).

![Add Checkout Form with single step, multi-step, or blank options](/img/config/checkout-forms-list.png)

Einnig geturðu breytt eða upplýst formin sem þú hefur að búa á með því að klikka á möguleikana undir nafni þeirra. Þar finnurðu persónustöðvar til að kopya shortcode formans eða til að slette formann.

![Checkout form hover actions with edit, duplicate, and delete](/img/config/checkout-form-hover-actions.png)

Ef þú velur single step (einnstigi) eða multi-step (fleiri stig), er checkout forminn jákvæð með grunnstígum sem þarf til að hann verki. Þar eftir, ef þú vilt, geturðu bætt við extra stigi í honum.

### Breytt checkout form:

Eins og við nefndum áður, geturðu skapa checkout forms fyrir ólíkt lehli. Í þessum dæmi verður við að breyttum um skráningarskjali (registration form).

Á meðan þú ferst í editor checkout formans, gefðu formi nafn (sem notarð til innri vísunar) og slug (sem notarð til að skapa shortcakes, t.d.).

![Checkout form editor with name and slug fields](/img/config/checkout-form-editor.png)

Forms eru sett saman af stígum og felta (fields). Þú getur bætt nýjum stigum í við með því að klikka á **Add New Checkout Step** (Bæta nýjan checkout step).

![Add New Checkout Step button](/img/config/checkout-form-add-step.png)

Á fyrra tabinn í modal window, fylli inn innihaldi stigs formans þíns. Gefðu þessum ID, nafn og skýring (description). Þessi hlutir eru aðeins notað innri vísunar.

![Checkout step content tab with ID, name, and description](/img/config/checkout-form-step-content.png)

Næst, setðu sýnarlög stigsins. Þú getur veldur milli **Always show** (Sjá alltaf), **Only show for logged in users** (Sjá aðeins fyrir skráðar notendur) eða **Only show for guests** (Sjá aðeins fyrir gjestar).

![Checkout step visibility options](/img/config/checkout-form-step-visibility.png)

Lokaðu að setja stigi-stíl. Þetta eru valfræðar feldi.

![Checkout step style configuration](/img/config/checkout-form-step-style.png)

En þá er komið að bæta feldi í fyrsta stigum okkar. Klikka bara á **Add New Field** (Bæta nýtt feld) og veldu hvern eiginleika fyrir hluta sem þú vilt.

![Add New Field button](/img/config/checkout-form-step-with-fields.png)![Field type selection dropdown](/img/config/checkout-form-field-type-dropdown.png)

Hvert feldi hefur annarra þáttana sem þarf að fylla út. Til þessum fyrstu innleiðingu veljum við **Username** (Notkunannafn) feldið.

![Username field configuration](/img/config/checkout-form-username-content.png)![Username field parameters](/img/config/checkout-form-username-visibility.png)![Username field additional settings](/img/config/checkout-form-username-style.png)

Þú getur lagt í þá fjölda stigi og feldi sem þér þarf. Til að sýna vörumerðina þína fyrir viðskiptavili til að velja eitthva, nota **Pricing Table** (Verðlisti) feldið. Ef þú vilt leita þínum viðskiptavinum í skrefvalknir, bætu í **Template Selection** (Val á skammtstíl) feldið og svo framferð.

_**Athugi:** Ef þú tengst vöru eftir að þú hefur skráð ferlið fyrir viðskiptavinum, þurfa þú að bæta vöruna í hluta **Pricing Table**. Ef þú hefur ekki bætt hana í, mun vöruna ekki sýna sér fyrir viðskiptavili á skráningasíðunni._

_**Athugi 2:** username (notkunannafn), email (tölvupóstur), password (lösenord), site title (steypna námskeiðsnafni), site URL (námskeiðsvefsstaður), order summary (samantekt á bestelli), payment (greiðsla) og submit button (skilja knappinn) eru nauðsynleg feldi til að skapa ferli fyrir viðskiptavinum._

Þegar þú ert að vinnu á ferli fyrir viðskiptavinum, geturð alltaf nota **Preview** (Fyrirspat) knappa til að sjá hvernig viðskiptavinir sjá ferlið. Þú getur einnig skipt í sýningu sem núverandi notandinn eða gjurfélagi.

![Preview button on the checkout form editor](/img/config/checkout-form-preview-button.png)![Checkout form preview as visitor or existing user](/img/config/checkout-form-preview-modal.png)

Loptuð, í **Advanced Options** geturðu stilla textann fyrir **Thank You** síðuna, bæta sniðum til að fylgjast með konversjunum (conversions), bæta sérstök CSS í skilaboðinn á greðslustafnum þínum eða hætta við formann til sérstökna lands.

![Advanced Options with Thank You page, conversion tracking, and custom CSS](/img/config/checkout-form-advanced.png)

Þú getur einnig mannvætt sett upp eða slá úr því sett upp greðslustafninn með því að skipta þessum valkostningi á hreyfistjörnu í höfrüfn, eða sýna formann sem er litið af.

![Active toggle and delete option for checkout form](/img/config/checkout-form-active.png)

Gleymdu ekki að hafa hugsað til að hefja greðslustafninn þinn!

![Save Checkout Form button](/img/config/checkout-form-save.png)

Til að fá kortlið þess þíns formans, klikka á **Generate Shortcode** og kopla úr niðurstöðuna sem sýnist í modalu glugga.

![Generate Shortcode modal with shortcode to copy](/img/config/checkout-form-editor.png)

_**Athugi:** Þú þarft að bæta þessum kortliði í skráningasíðuna þína til að bæta þessum greðslustafn með því._

## Forbestilling hugtaka og mallar með URL-parametrimum:

Ef þú vilt skapa sérsniðna príslisti fyrir hugtakið þitt og forbestilla á greðslustafnið eða mallann sem viðskiptavinurinn velur úr príslistanum eða mallar sínu, geturðu nota URL-parametrimum til þess.

### **Fyrir plan:**

Gangi í **Ultimate Multisite > Products > Select a plan**. Þar þarftu að sjá knappa sem heitið **Click to copy Shareable Link** uppstofa á toppum síðunnar. Þetta er linkurinn sem þú getur notað til forbestilling þess sérstaka plans á greðslustafni þínum.

![Product page with shareable link button](/img/config/products-list.png)

Merkurið er aðeins viðeigandi fyrir **Plans**. Þú getur ekki notað shareable links fyrir pakka eða þjónustu.

### Til skipti með temblitum (templates):

Ef þú vilt framkvæmt ákveðna síti-temblita á skjama kaupumanna í formi, geturðu notað parametrinn: **?template_id=X** á URL-inni yfirmskyrslu þín. "X" þarf að skipta fyrir **ID-númer temblitsins**. Til að fá þennan númerið, ferðu í **Ultimate Multisite > Sites**.

Klikkaðu á **Manage** (Styring) undir síti-tembliti sem þú vilt nota. Þar sjáðu SITE ID númer. Notaðu bara þetta númer fyrir þennan sérstaka síti-tembli til að það sé framkvæmt á skjama kaupumanna þínum. Í okkar tilfelli mun URL-parametrinn verið **?template_id=2**.

![Sites list showing site template ID](/img/config/site-templates-list.png)

Látum segja að netverkssíti okkar sé [**www.mynetwork.com**](http://www.mynetwork.com) og síti yfirmskyrslu með formi kaupanna sé á `/register` síðu. Heildar URL-in með þessum framkvæmt tembliti sem er framkvæmt á skjama kaupumanna mun líta eins og [**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2**.

Og ef þú vilt, geturðu framkvæmt ákveðna vörumer og temblit á skjama kaupumanna þínum. Allt sem þú þarft að gera er að kopya shareable link fyrir planinn og setja template-parametrann í endan. Það mun líta eins og [**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2**.
