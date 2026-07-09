---
title: Meðhöndlun skatta
sidebar_position: 4
_i18n_hash: 8b94c58406519f9c55fe837c6addfc12
---
# Meðhöndlun skatta {#tax-handling}

Ultimate Multisite er með einingu fyrir innheimtu skatta innbyggða í kjarnaplugin okkar, þannig að ef þú þarft að innheimta söluskatta af áætlunum þínum, pökkum og þjónustu geturðu auðveldlega gert það án þess að þurfa að setja upp nein viðbót.

Fyrir fyrirtæki staðsett í Evrópu bjóðum við upp á **viðbót** sem bætir við verkfærum og eiginleikum til að **styðja betur við VAT** samræmi.

Ultimate Multisite skilar ekki inn eða greiðir skatta fyrir þína hönd til stjórnvalda; við hjálpum þér einfaldlega að innheimta viðeigandi skatta á þeim tíma sem færslan fer fram. **Þú þarft samt að greiða skattana sjálf/ur.**

## Virkja skattheimtu {#enabling-tax-collection}

Skattheimta er ekki virkjuð sjálfgefið. Til að virkja hana þarftu að fara í **Ultimate Multisite > Settings > Taxes** og kveikja á stillingunni Enable Taxes.

![Kveikjurofi fyrir Enable Taxes efst á stillingasíðu skatta](/img/config/settings-taxes-enable.png)

Hér er heildaryfirlit yfir stillingasíðu skatta:

![Heil stillingasíða skatta](/img/config/settings-taxes-full.png)

Þú getur einnig skoðað skattastillingar fyrir einstakar vörur:

![Skattastillingar fyrir vörur](/img/config/settings-taxes.png)

### Skattur utan verðs vs. skattur innifalinn {#tax-excluded-vs-tax-included}

Sjálfgefið eru öll vöruverð þín án skatts, sem þýðir að skattar **eru ekki innifaldir** í verði vörunnar. Ef við ákveðum að viðskiptavinur eigi að greiða skatta af tilteknum kaupum bætum við sköttunum **ofan á** millisamtöluna.

Ef þú vilt frekar hafa skatta innifalda í verði vörunnar geturðu gert það með því að virkja stillinguna **Inclusive Tax**.

![Röð með kveikjurofa fyrir Inclusive Tax fyrir neðan Enable Taxes stillinguna](/img/config/settings-taxes-inclusive.png)

Ekki gleyma að **vista** breytingarnar sem þú hefur gert.

###

## Búa til skatthlutföll {#creating-tax-rates}

Eftir að þú virkjar skattheimtu þarftu að búa til skatthlutföll fyrir tilteknar staðsetningar með ritlinum okkar fyrir skatthlutföll.

Þú getur opnað ritilinn með því að smella á hnappinn **Manage Tax Rates** í hliðarstikunni á stillingasíðu skatta.

![Manage Tax Rates hlekkur í Tax Rates spjaldinu á stillingasíðunni](/img/config/settings-taxes-manage-rates.png)

Á síðu ritilsins fyrir skatthlutföll geturðu bætt við nýjum skatthlutföllum með því að smella á hnappinn **Add new Row**.

![Tafla í ritli skatthlutfalla með Add new Row hnappi efst](/img/config/tax-rates-editor.png)

Þú þarft að gefa hverju skatthlutfalli **titil** (notað á reikningum). Síðan geturðu valið **land** (skyldubundið), **ríki/fylki,** og **borg** (bæði valfrjálst) þar sem þessi skattur verður innheimtur. Að lokum skaltu bæta við **skatthlutfallinu í prósentum**.

### Skattflokkar {#tax-categories}

Þú getur einnig búið til marga skattflokka til að bæta við mismunandi skatthlutföllum fyrir mismunandi tegundir vara.

Smelltu til að **Add new Tax Category** , skrifaðu síðan nafn flokksins og ýttu á **Create**.

![Add new Tax Category hnappur efst í ritli skatthlutfalla](/img/config/tax-categories-add.png)

![Tax Category Name innsláttarreitur í glugganum til að búa til flokk](/img/config/tax-categories-create-modal.png)

Til að fletta í gegnum flokka skaltu smella á **Switch** og velja flokkinn sem þú vilt bæta nýjum sköttum við.

![Switch fellilistahnappur til að skipta á milli skattflokka](/img/config/tax-categories-switch.png)

![Fellilisti fyrir val á skattflokki sem sýnir tiltæka flokka](/img/config/tax-categories-select.png)

Þú getur stillt skattflokk fyrir tiltekna vöru með því að fara á **breytingasíðu vöru** og síðan í Taxes flipann.

![Taxes flipi vöru með skattflokki og taxable kveikjurofa](/img/config/product-taxes.png)

Á sama skjá geturðu slökkt á rofanum **Is Taxable?** til að láta Ultimate Multisite vita að það eigi ekki að innheimta skatta af þessari tilteknu vöru.

## Stuðningur við evrópskt VAT {#european-vat-support}

Eins og áður var nefnt erum við með viðbót tiltæka fyrir viðskiptavini í ESB sem hafa viðbótarkröfur vegna evrópskra VAT reglna.

VAT verkfærin okkar hjálpa við nokkra mikilvæga hluti:

  * Auðveld hleðsla á VAT hlutföllum ESB;

  * Söfnun og staðfesting VAT númers - og öfug gjaldfærsla fyrir aðila sem eru undanþegnir VAT (svo sem fyrirtæki með gild VAT númer);

Til að setja upp þá viðbót skaltu fara í **Ultimate Multisite > Settings** og smella síðan á hlekkinn **Check our Add-ons** í hliðarstikunni.

![Hliðarstika stillingasíðu með Check our Add-ons hlekk](/img/config/settings-taxes-addons-link.png)

Þér verður vísað á viðbótasíðuna okkar. Þar geturðu leitað að **Ultimate Multisite VAT add-on** og sett hana upp.

<!-- Screenshot unavailable: VAT add-on tile on the Add-ons page -->

<!-- Screenshot unavailable: VAT add-on Install Now dialog -->

Farðu síðan í **Network Admin > Plugins** og virkjaðu þá viðbót á öllu netinu.

<!-- Screenshot unavailable: Network Activate action for the VAT add-on on the Plugins page -->

Ef þú ferð aftur í **Tax Settings tab** sérðu nýja valkosti í boði. Kveiktu á valkostinum **Enable VAT Support** til að virkja nýju VAT verkfærin. Ekki gleyma að **vista** stillingarnar þínar!

<!-- Screenshot unavailable: Enable VAT Support toggle in the Tax settings after add-on activation -->

### Sækja VAT skatthlutföll {#pulling-on-vat-tax-rates}

Eitt af verkfærunum sem samþættingin okkar bætir við er möguleikinn á að hlaða inn skatthlutföllum fyrir aðildarríki ESB. Það er hægt að gera með því að heimsækja síðu ritilsins fyrir skatthlutföll eftir að stuðningur við EU VAT hefur verið virkjaður.

Neðst á síðunni sérðu valkosti fyrir að sækja VAT. Með því að velja tegund hlutfalls og smella á hnappinn **Update EU VAT Rates** verður taflan sótt og sjálfkrafa fyllt út með skatthlutföllum fyrir hvert aðildarríki ESB. Síðan þarftu aðeins að vista hana.

![Update EU VAT Rates hnappur neðst í ritli skatthlutfalla](/img/config/tax-rates-vat-pull.png)

Þú getur einnig breytt gildunum eftir að þú sækir þau. Til að gera það skaltu einfaldlega breyta töflulínunni sem þú þarft og smella til að vista nýju gildin.

### VAT staðfesting {#vat-validation}

Þegar VAT stuðningur er virkjaður mun Ultimate Multisite bæta við viðbótarreit á greiðsluformið, fyrir neðan reitinn fyrir reikningsheimilisfang. Reiturinn birtist aðeins viðskiptavinum sem staðsettir eru í ESB.

<!-- Screenshot unavailable: VAT Number field on the frontend checkout form below the billing address -->

Ultimate Multisite staðfestir þá VSK-númerið og ef það reynist gilt er öfugri skattskyldu beitt og skatthlutfallið stillt á 0% fyrir þá pöntun.
