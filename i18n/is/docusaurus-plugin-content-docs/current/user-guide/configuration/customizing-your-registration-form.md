---
title: Að sérsníða skráningareyðublaðið þitt
sidebar_position: 17
_i18n_hash: 3dada0e900a1f46d950e1815ae8f5085
---
# Sérsníða skráningareyðublaðið þitt

Til að láta netið þitt líta einstakt út miðað við öll önnur SaaS sem byggð eru á WordPress-vettvanginum, gerir Ultimate Multisite þér kleift að sérsníða skráningar- og innskráningarsíðurnar þínar með **Checkout Forms** eiginleikanum okkar.

Þótt þau séu auðveld og sveigjanleg leið til að prófa mismunandi nálganir þegar reynt er að breyta nýjum viðskiptavinum, eru þau aðallega notuð til að búa til persónusniðin skráningareyðublöð. Þessi grein miðar að því að sýna þér hvernig þú getur gert það.

## Innskráningar- og skráningarsíður:

Við uppsetningu Ultimate Multisite býr það sjálfkrafa til sérsniðnar innskráningar- og skráningarsíður á aðalvefnum þínum. Þú getur breytt þessum sjálfgefnu síðum hvenær sem er með því að fara á **Ultimate Multisite > Settings > Login & Registration** síðuna þína.

![Stillingasíða innskráningar og skráningar](/img/config/settings-general.png)

Hér er heildarsýn af stillingasíðu innskráningar og skráningar:

![Heildarsíða stillinga innskráningar og skráningar](/img/config/settings-login-registration-full.png)

Skoðum hvern valkost sem þú getur sérsniðið á **Login & Registration** síðunni:

  * **Virkja skráningu:** Þessi valkostur virkjar eða óvirkjar skráningu á netinu þínu. Ef slökkt er á honum geta viðskiptavinir þínir ekki skráð sig og gerst áskrifendur að vörunum þínum.

  * **Virkja staðfestingu tölvupósts:** Ef kveikt er á þessum valkosti fá viðskiptavinir sem gerast áskrifendur að ókeypis áskriftarleið eða greiddri áskriftarleið með prufutímabili staðfestingartölvupóst og þurfa að smella á staðfestingartengilinn til að vefsvæðin þeirra verði búin til.

  * **Sjálfgefin skráningarsíða:** Þetta er sjálfgefna síðan fyrir skráningu. Þessi síða þarf að vera birt á vefsvæðinu þínu og hafa skráningareyðublað (einnig þekkt sem checkout form) - þar sem viðskiptavinir þínir gerast áskrifendur að vörunum þínum. Þú getur búið til eins margar skráningarsíður og checkout forms og þú vilt, mundu bara að setja shortcode fyrir checkout form á skráningarsíðuna, annars birtist það ekki.

  * **Nota sérsniðna innskráningarsíðu:** Þessi valkostur gerir þér kleift að nota sérsniðna innskráningarsíðu, aðra en sjálfgefnu wp-login.php síðuna. Ef kveikt er á þessum valkosti geturðu valið hvaða síða verður notuð fyrir innskráningu í **Default login page** valkostinum (beint fyrir neðan).

  * **Dylja upprunalegu innskráningarslóðina (wp-login.php)** : Ef þú vilt fela upprunalegu innskráningar-URL geturðu kveikt á þessum valkosti. Þetta er gagnlegt til að koma í veg fyrir brute-force árásir. Ef þessi valkostur er virkjaður mun Ultimate Multisite birta 404 villu þegar notandi reynir að opna upprunalega wp-login.php tengilinn

  * **Þvinga samstillta birtingu vefsvæðis:** Eftir að viðskiptavinur gerist áskrifandi að vöru á neti þarf að breyta nýja vefsvæðinu í bið í raunverulegt netvefsvæði. Birtingarferlið gerist í gegnum Job Queue, ósamstillt. Virkjaðu þennan valkost til að þvinga birtinguna til að gerast í sömu beiðni og skráningin.

Nú skulum við skoða aðra valkosti sem tengjast enn innskráningar- og skráningarferlinu. Þeir eru beint fyrir neðan **Other options** á sömu Login & registration síðu:

  * **Sjálfgefið hlutverk:** Þetta er hlutverkið sem viðskiptavinir þínir munu hafa á vefsvæðinu sínu eftir skráningarferlið.

  * **Virkja Jumper:** Virkjar Jumper flýtileiðina á stjórnandasvæðinu. Jumper gerir stjórnendum kleift að hoppa hratt á Ultimate Multisite skjái, nethluti og aðra studda áfangastaði án þess að fletta í gegnum hverja valmynd. Slökktu á því ef þú vilt frekar fela þetta hraðleiðsagnartól úr stjórnandaviðmótinu.

  * **Bæta notendum einnig við aðalvefinn:** Með því að virkja þennan valkost verður notandanum einnig bætt við aðalvef netsins þíns eftir skráningarferlið. Ef þú virkjar þennan valkost birtist einnig valkostur til að stilla **sjálfgefið hlutverk** þessara notenda á vefsvæðinu þínu beint fyrir neðan.

  * **Virkja marga reikninga:** Leyfðu notendum að hafa reikninga á mismunandi vefsvæðum netsins þíns með sama netfangi. Ef slökkt er á þessum valkosti geta viðskiptavinir þínir ekki búið til reikning á öðrum vefsvæðum sem keyra á netinu þínu með sama netfangi.

Og þetta eru allir valkostirnir sem tengjast innskráningu og skráningu sem þú getur sérsniðið! Ekki gleyma að vista stillingarnar þínar þegar þú hefur lokið við að breyta þeim.

## Nota mörg skráningareyðublöð:

Ultimate Multisite 2.0 býður upp á ritil fyrir checkout form sem gerir þér kleift að búa til eins mörg eyðublöð og þú vilt, með mismunandi reitum, vörum í boði o.s.frv.

Bæði innskráningar- og skráningarsíðurnar eru felldar inn með shortcodes: **[wu_login_form]** á innskráningarsíðunni og**[wu_checkout]** fyrir skráningarsíðuna. Þú getur sérsniðið skráningarsíðuna frekar með því að byggja eða búa til checkout forms.

Til að fá aðgang að þessum eiginleika skaltu fara í **Checkout Forms** valmyndina, á vinstri hliðarstikunni.

![Checkout Forms valmynd í hliðarstikunni](/img/config/checkout-forms-list.png)

Á þessari síðu geturðu séð öll checkout forms sem þú átt.

Ef þú vilt búa til nýtt skaltu einfaldlega smella á **Add Checkout Form** efst á síðunni.

Þú getur valið einn af þessum þremur valkostum sem upphafspunkt: eitt skref, mörg skref eða autt. Smelltu síðan á **Go to the Editor**.

![Bæta við Checkout Form með valkostunum eitt skref, mörg skref eða autt](/img/config/checkout-forms-list.png)

Að öðrum kosti geturðu breytt eða afritað eyðublöðin sem þú ert þegar með með því að smella á valkostina fyrir neðan nafn þeirra. Þar finnurðu einnig valkostina til að afrita shortcode eyðublaðsins eða eyða eyðublaðinu.

![Aðgerðir þegar sveimað er yfir checkout form, með breyta, afrita og eyða](/img/config/checkout-form-hover-actions.png)

Ef þú velur eitt skref eða mörg skref verður checkout form nú þegar forútfyllt með grunnskrefunum sem þarf til að það virki. Síðan, ef þú vilt, geturðu bætt við aukaskrefum.

### Breyta Checkout Form:

Eins og við nefndum áður geturðu búið til checkout forms í mismunandi tilgangi. Í þessu dæmi munum við vinna með skráningareyðublað.

Eftir að hafa farið í ritil checkout form skaltu gefa eyðublaðinu þínu nafn (sem verður aðeins notað til innri tilvísunar) og slug (notað til að búa til shortcodes, til dæmis).

![Ritill fyrir greiðsluform með reitum fyrir nafn og slug](/img/config/checkout-form-name-slug.png)

Form eru gerð úr skrefum og reitum. Þú getur bætt við nýju skrefi með því að smella á **Bæta við nýju skrefi í greiðsluferli**.

![Hnappur til að bæta við nýju skrefi í greiðsluferli](/img/config/checkout-form-add-step.png)

Á fyrsta flipa sprettigluggans skaltu fylla út efni skrefsins í forminu þínu. Gefðu því ID, nafn og lýsingu. Þessir hlutir eru að mestu notaðir innanhúss.

![Efnisflipi skrefs í greiðsluformi með ID, nafni og lýsingu](/img/config/checkout-form-step-content.png)

Næst skaltu stilla sýnileika skrefsins. Þú getur valið á milli **Sýna alltaf** , **Sýna aðeins fyrir innskráða notendur** eða **Sýna aðeins fyrir gesti**.

![Sýnileikavalkostir skrefs í greiðsluformi](/img/config/checkout-form-step-visibility.png)

Að lokum skaltu stilla útlit skrefsins. Þessir reitir eru valfrjálsir.

![Stillingar fyrir útlit skrefs í greiðsluformi](/img/config/checkout-form-step-style.png)

Nú er kominn tími til að bæta reitum við fyrsta skrefið okkar. Smelltu einfaldlega á **Bæta við nýjum reit** og veldu þá tegund hluta sem þú vilt.

![Hnappur til að bæta við nýjum reit](/img/config/checkout-form-add-field-button.png)![Fellivalmynd fyrir val á reitategund](/img/config/checkout-form-field-type-dropdown.png)

Hver reitur hefur mismunandi færibreytur sem þarf að fylla út. Fyrir þessa fyrstu færslu veljum við **Notandanafn**-reitinn.

![Stillingar fyrir Notandanafn-reit](/img/config/checkout-form-username-content.png)![Færibreytur Notandanafn-reits](/img/config/checkout-form-username-visibility.png)![Viðbótarstillingar fyrir Notandanafn-reit](/img/config/checkout-form-username-style.png)

Þú getur bætt við eins mörgum skrefum og reitum og þú þarft. Til að birta vörurnar þínar svo viðskiptavinir geti valið eina skaltu nota Verðtöflu-reitinn. Ef þú vilt leyfa viðskiptavinum þínum að velja sniðmát skaltu bæta við Sniðmátsvals-reitnum. Og svo framvegis.

![Ritill fyrir greiðsluform með reit fyrir val á sniðmáti](/img/config/checkout-form-with-template-field.png)

_**Athugið:** Ef þú býrð til vöru eftir að þú hefur búið til greiðsluformið þitt þarftu að bæta vörunni við í Verðtöflu-hlutanum. Ef þú bætir henni ekki við mun varan ekki birtast viðskiptavinum þínum á skráningarsíðunni._

_**Athugið 2:** notandanafn, netfang, lykilorð, heiti síðu, URL síðu, pöntunaryfirlit, greiðsla og senda-hnappur eru skyldureitir til að búa til greiðsluform._

Á meðan þú vinnur í greiðsluforminu þínu geturðu alltaf notað Forskoða-hnappinn til að sjá hvernig viðskiptavinir þínir munu sjá formið. Þú getur líka skipt á milli þess að skoða sem núverandi notandi eða gestur.

![Forskoða-hnappur í ritli greiðsluforms](/img/config/checkout-form-preview-button.png)![Forskoðun greiðsluforms sem gestur eða núverandi notandi](/img/config/checkout-form-preview-modal.png)

Að lokum, í **Ítarlegir valkostir** geturðu stillt skilaboðin fyrir **Þakka þér**-síðuna, bætt við kóðabútum til að rekja viðskipti, bætt sérsniðnu CSS við greiðsluformið þitt eða takmarkað það við ákveðin lönd.

![Ítarlegir valkostir með Þakka þér-síðu, viðskiptarakningu og sérsniðnu CSS](/img/config/checkout-form-advanced.png)

Þú getur einnig virkjað eða afvirkjað greiðsluformið þitt handvirkt með því að víxla þessum valkosti í hægri dálkinum, eða eytt forminu varanlega.

![Virknirofi og eyðingarvalkostur fyrir greiðsluform](/img/config/checkout-form-active.png)

Ekki gleyma að vista greiðsluformið þitt!

![Vista greiðsluform-hnappur](/img/config/checkout-form-save.png)

Til að fá shortcode formsins þíns skaltu smella á **Búa til Shortcode** og afrita niðurstöðuna sem birtist í sprettiglugganum.

![Búa til Shortcode-sprettigluggi með shortcode til að afrita](/img/config/checkout-form-editor.png)

_**Athugið:** Þú þarft að bæta þessu shortcode við skráningarsíðuna þína til að bæta þessu greiðsluformi við hana._

## Forval á vörum og sniðmátum með URL-færibreytum:

Ef þú vilt búa til sérsniðnar verðtöflur fyrir vörurnar þínar og forvelja í greiðsluforminu þá vöru eða það sniðmát sem viðskiptavinurinn velur af verðtöflunni þinni eða sniðmátasíðunni, geturðu notað URL-færibreytur fyrir þetta.

### **Fyrir áskriftarleiðir:**

Farðu í **Ultimate Multisite > Vörur > Veldu áskriftarleið**. Þú ættir að sjá **Smelltu til að afrita deilanlegan hlekk**-hnappinn efst á síðunni. Þetta er hlekkurinn sem þú getur notað til að forvelja þessa tilteknu áskriftarleið í greiðsluforminu þínu.

![Vörusíða með hnappi fyrir deilanlegan hlekk](/img/config/products-list.png)

Athugaðu að þessi deilanlegi hlekkur gildir aðeins fyrir **Áskriftarleiðir**. Þú getur ekki notað deilanlega hlekki fyrir pakka eða þjónustur.

### Fyrir sniðmát:

Ef þú vilt forvelja síðusniðmát í greiðsluforminu þínu geturðu notað færibreytuna: **?template_id=X** á URL skráningarsíðunnar þinnar. Skipta þarf "X" út fyrir **ID-númer síðusniðmátsins**. Til að fá þetta númer skaltu fara í **Ultimate Multisite > Síður**.

Smelltu á **Stjórna** rétt fyrir neðan síðusniðmátið sem þú vilt nota. Þú munt sjá SITE ID-númerið. Notaðu einfaldlega þetta númer fyrir þetta tiltekna síðusniðmát til að láta forvelja það í greiðsluforminu þínu. Í okkar tilviki hér væri URL-færibreytan **?template_id=2**.

![Síðulisti sem sýnir ID síðusniðmáts](/img/config/site-templates-list.png)

Segjum að netvefurinn okkar sé [**www.mynetwork.com**](http://www.mynetwork.com) og skráningarsíðan okkar með greiðsluforminu okkar sé staðsett á **/register**-síðunni. Heildar-URL með þessu síðusniðmáti forvöldu mun líta svona út: [**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2**.

Og ef þú vilt geturðu forvalið bæði vörur og sniðmát í greiðsluforminu þínu. Allt sem þú þarft að gera er að afrita deilanlega hlekkinn fyrir áskriftarleiðina og líma sniðmátsfæribreytuna aftast. Það mun líta svona út: [**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2**.
