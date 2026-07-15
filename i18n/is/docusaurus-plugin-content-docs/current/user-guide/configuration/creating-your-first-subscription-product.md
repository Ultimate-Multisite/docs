---
title: Skráningur fyrsta endurskoða produktans þíns
sidebar_position: 6
_i18n_hash: a4a36ed896f6691eebb099208a746cd7
---
# Skráning fyrri skýrslu þín (v2)

_**VIÐSKÖTTU: Þessi grein er aðeins fyrir notendur Ultimate Multisite v2.x. Ef þú notar v1.x,**_ **_sjáðu þetta grein**_**.

Til að byrja nota netinu þínu og byrja selja þjónustu þína mögulegum notendum þarf að hafa ólíka skráninga (subscription) valkostlunar. Hvernig geturðu skapað þessar vörumeri? Hvað eru nauðsynlegir vörumeri sem þú getur bjóða? Í þessari greinin munum við dekka allt sem þú þarft að vita um vörumeri.

## Vörumeriöfl {#product-type}

Með Ultimate Multisite geturð bjóða fólkið þitt í tveimur hluta: **plans** og **add-ons (Order Bump)**. Add-ons geta verið skipt í tveir öfl: **packages** og **services**. Við munum sjá að því hvernig þeir eru skilvirkir og hvaða sérstök þættir þeir hafa næst.

  * **Plans**: Grundvörumeri Ultimate Multisite. Notendur þín geta að hafa meðlimskipti ef það er tengt plan. Plan gerir notendum þínum einn eða fleiri vísarstæður (sites) (þetta kemur af því hvernig þú setur takmarkanir á síðunni fyrir vörumeri þitt).

  * **Packages**: Add-ons sem hafa beint áhrif á skýrslur og möguleika Ultimate Multisite. Þau breyta takmarkunum eða bæta nýjum vísarstæðum, pluginum eða themes við upprunalegan plan sem notandinn hefur kaupa. Til dæmis getur grunnplan leyfa 1,000 bílferðir á mánuði og þú getur bjóða upp package sem breytir þennan algjörðum nýja á 10,000.

  * **Services**: Add-ons sem ekki breytir skýrslur og möguleika Ultimate Multisite. Þetta eru verk sem þú mun fullfærja fyrir notendann þinn á að koma í gegnum planinn þeirra sem hafa kaupa. Til dæmis getur notandinn kaupa plan sem leyfir einn vísarstæð og samkvæmt því betalla fyrir extra þjónustu sem mun gera þennan vísarstæð designa.

## Stjórnun vörumeri {#managing-products}

Fyrir mörgum er **Products** tabinn í Ultimate Multisite **(Ultimate Multisite > Products)** getur samþættast við plan í tradinvefuþjónustu.

Í Ultimate Multisite sé Products tabinn ákveðnir byggð og takmarkanir sem eru skilyrðar fyrir sérstaka vöru eða þjónustu. Þessar byggðir ná til vörudrektur, verðs, skattara og réttbundna eiginleika.

Þessi hluti mun leiða þig í uppgöng um þennan mikilvægan grunnstaðinn í Ultimate Multisite.

![Products list page](/img/config/products-list.png)

## Að bæta vörum við {#adding-products}

Eða plan, pakki eða þjónusta sem er aðgangur til að skilgreina nýja einstaklingar er með **Ultimate Multisite > Products > Add Product**.

![Add Product button](/img/config/product-add-button.png)

Í grífinni eru tveir aðalhlutblönd. Á vinstri gefst fleiri tablar sem hjálpa við skilgreiningu vörunnar og á réttri hlið eru nokkrar hlutar til að skilgreina grunnverði vörunnar, aktivt stað og mynd af vörunni.

![Product edit page overview](/img/config/product-edit-full.png)

### Skilgreining {#description}

Grunnmiðlar vörunnar getur skilgreina með því að gefa vörudna nafn og skilgreiningu. Þessar kennslustaf eru sýndar har sem vörudrekturinn er nauðsynlegur, eins og val planins og verða, faktu, skipti og þess slíku.

![Product description section](/img/config/product-description.png)

### Verðslustípar {#pricing-type}

Á réttri hlið grífinni getur grunnverði skilgreina.

![Pricing and save section](/img/config/product-pricing-save.png)

Ultimate Multisite stendur fyrir þremur skilgreiningum verðs. **Paid** (betra) valinn kallar netverkstjórnara til upplýsinga um verði vörunnar og hönnun á betalingshertuðum.

### Verðslustíkur {#pricing}

Verðsgefnan skilgrein grunnverða vörunnar og betalingsinterval.

![Prísning og færðar hluti](/img/config/product-pricing-save.png)

á því er t.d. verð á $29.99 með settum 1 mánuði að því að reikna $29.99 hver mánuði. Á sama hátt, verð á $89.97 með settum 3 mánuðum er að reikna þessar sumur hver kvartal.

### Reikningstímar (Billing Cycles) {#billing-cycles}

Í hluta um reikningstíma er nákvæmlega sagnir um hversu oft reikningurinn skal skiptast, og þetta er almennt skilningur í samræmi við samninga eða fastar tímabundin álagningar.

![Prísning og færðar hluti](/img/config/product-pricing-save.png)

Til dæmis, ef verð vörunar er $29.99 með tveimur mánuði og 12 reikningstíma, skal það reikna $29.99 hver mánuði fyrir vöruna í næstu 12 mánuðum. Að annað höfundur: slítt settum skapar fasta verðarmiðil á $29.99 per mánuði í 12 mánuð og þá skal reikningurinn stoppa.

### Prófa-tími (Trial Period) {#trial-period}

Við það að slá úr tilboðsprófa-brytjarinn getur netverslunarmannstjóri staða tölvunar fyrir vöruna.

![Prísning og færðar hluti](/img/config/product-pricing-save.png)

Á prófa-tíma er viðskiptavinum leyfið að nota vöruna og þeim skal ekki reikna þessar sumur þar sem prófa-tíminn hefur verið stuðlað á.

### Settup-geð (Setup Fee) {#setup-fee}

Þú getur einnig skila settup-geð á planinn þinn.

![Prísning og færðar hluti](/img/config/product-pricing-save.png)

Þetta þýðir að viðskiptavinurinn skal halda yfir extra sumu á fyrstu reikningu (á hætti saman við verðarmiði planins) sem er samsvarandi geðum sem þú hefur sett í þessum hluta.

### Aktivt (Active) {#active}

Aktivt brytjarinn skilgreinir effektivt hvort vöruna sé að gangi fyrir viðskiptavini til nýrann skráningu.

![Aktivt brytjarinn](/img/config/product-active.png)

Ef það eru núna viðkomandi viðskiptavinir á þessum plani, gerir það að skráninguna (toggle) er afskráð, og þetta fjarlægja planinn úr framtíðar skráningar. **Viðkomandi viðskiptavinir á planinum verða haldað eftir að þeir eru skilað til nýs plans eða fjarlægja frá planinum.**

### Prödu mynd {#product-image}

Knappinn **Upload Image** leyfir netverkstjórnara að nota media-bibliotékin til séravalda eða upplufna prödu mynd.

![Product image section](/img/config/product-image.png)

### Slettja {#delete}

Knappinn **Delete Product** slettir prödu úr kerfinum. Hún kemur fram þegar prödu er skoðin.

![Delete product section](/img/config/product-delete.png)

Á skilnað við övrantar slettingar, er prödu ekki stóð í nokkrar "trash" (slettingu) tilstandi. Því að það sé slett í, er aðgenglið óskiljanlegt.

### Prödu valkostir {#product-options}

Eft sem grunnupplýsingar um prödu eru settar upp, hjálpa **Product Options** netverkstjórnara við að skilgreina sérstaklega eiginleika prödu.

#### Algengt {#general}

Taburinn **General** skilgreinir algengu eiginleika prödu sem ekki er skýrð í nokkrum áhrifsvæðum fyrir övrantar taburefni um prödu.

![General tab](/img/config/product-general-tab.png)

Sjálfvirk **product slug** skilgreinir sluga sem pröda er nefndur í URL-um og övrum áhrifsvæðum í Ultimate Multisite.

Ultimate Multisite stendur fyrir fleiri prödutyper eins og Plan, Package og Service. Taburefni **Product Options** breytast dynamískt eftir því hvernig prödutype er sést.

**Customer Role** skilgreinir hvernig ról (hver hvern) er skilað við viðskiptavinann þegar sítið er skráð upp. Almennt fyrir hönd flest netverkstjórnara er þetta Ultimate Multisite default eða Administrator. Default rólinn í Ultimate Multisite getur sést sett í **Ultimate Multisite > Settings > Login & Registration**.

![Customer role settings](/img/config/product-customer-role-settings.png)

#### Oppgraderingar og nedgrunnar {#up--downgrades}

Þessi flugur sýnir uppgraderingarpáthefandi og nedgrunnarpáthefandi sem eru til við klienta í þeirri sérstakri styrkuna (tier).

Til að skilja þennan hugmyndum skoðaðu dæmi þar sem nítandi Ultimate Multisite innreiðslu býður upp á læringarmagnanlegan lausnir fyrir viðskiptavili sínum. Til að ná þessum þrjú plófum (Basic, Plus og Premium) eru þeir sést sérstök pluginir aktivaðar fyrir hvert plóf (sjá seinara í þessari hluta fyrir leiðbeiningar um aktivaðar pluginir).

Ef Ultimate Multisite innreiðslan þjónar einnig viðskiptavellusteymi eða netversíti, gætu þessar plóf krefjast annarra pluginira til að vera aktivaðar.

Til þess að koma í raun áttum er óþagslegt og óvenjulegt að láta læringarmagnanlegan viðskiptavili skila yfir í plóf fyrir netversíti, þar sem þessir plóf, prís og takmarkanir gætu ekki verið hentugt.

Því til að takmarka áttuna klienta og koma í veg fyrir áfoundum getur netversíti-stjórnari skilgreindur plan group og innan þessar grupu sérstaka plóf sem klienti getur skila yfir í.

![Up and Downgrades tab](/img/config/product-upgrades.png)

Til að skilgreina plan group, sést viðkomandi plóf innan lista **plan group**. **Product order** bestemmer hvernig plóf eru sett á og sýndar frá lægri til háar.

Ultimate Multisite felur einnig í sér möguleika fyrir **order bump**, þar sem viðeigandi auðveldlegir vörp og þjónustur geta verið að bæta við plóf. Þetta er sýnt viðskiptavili sem aðferðarinnar vörp sem getur verið bætt við plóf á tíma á skráningu eða á meðan uppgraderingu fer.

#### Prísbreytingar {#price-variations}

Leiðing á verðarveitingum leyfir netverkstjórnara að skilgreina annar verðarstigi sem er afhängist á lengduna. Þessi innstilling gerir því mögulegt að bjóða upp á mánuðleg, kvartalslega, árs-eða einhver annað reikningstíma fyrir sama vögu. Til dæmis geturðu sett vögu upp á $29.99/mánað með viðskiptaheimildum á árinu til $249.99/ár.

![Price Variations tab](/img/config/product-price-variations-tab.png)

Til að skapa verðarveitingar, set **Enable Price Variations** (Viðskiptaheimildir verðarstigi) á aktivt og klikkaðu á knappa **Add new Price Variation** (Búa til nýtt verðarstigi).

![Product price variations](/img/config/product-price-variations.png)

Til að gefa inn verðarstigi, set lengduna, tíma og verði verðarstiginn. Þú getur tekið inn vöxtarstigi sem erin með því að klikka á knappa aftur.

Til dæmis, ef grunnverð vögu þinn er $29.99 per mánuð, gætirðu lagt við:

  * **3 Mánuð** á $79.99 (smá viðskiptaheimildur samanborið við mánuðlegt)
  * **1 Ár** á $249.99 (mikilviðskiptaheimild á árinu)

:::tip Visning reikningstíma-toggans á front endi

Verðarveitingar sjálfur þjónna ekki toggel eða skipti á front endi betalingsíðunni. Til að laða viðskiptavini til að skipta milli reikningstíma (t.d. Mánuðlegt / Ár) þarfurðu að bæta **Period Selection** (Val lengdunarstigs) fälti í betalingsformið þitt. Sjá [Checkout Forms: Adding a Period Selection Toggle](checkout-forms#adding-a-period-selection-toggle) fyrir skref-skrefarferli.
:::

#### Skattar {#taxes}

**Taxes** (Skattar) tabinn er tengd skattarstillingum sem eru gefnar í **Ultimate Multisite > Settings > Taxes** og sérstaklega viðskiptaheimildum skattarratum sem eru settir. Til að aktíva skattar og skilgreina viðkomandi skattarratum skoða þetta dokument á **Ultimate Multisite: Settings**.

![Taxes tab](/img/config/product-taxes.png)

Áður var við þessu dæmi skiptum lokala skattarhlutfalli á 7,25% sem varði fyrir viðskiptavili í Kaliforníu (Verehyndisins).

Eftir að skattarhlutfall er sett í **Ultimate Multisite > Settings > Manage Tax Rates**, getur það veljað á vöruskildi.

![Taxes tab](/img/config/product-taxes.png)

Til að gefa til vörunar um að vönd sé skattafærandi, setni **Is Taxable** toggleinn á aktivt og veldu viðkomandi skattarhlutfall frá dropdowni Tax Category.

#### Site Templates (Vöruskildi) {#site-templates}

Í ensku eru site templates fullkomna WordPress-vísitaldir sem klónast yfir í vöndu síðar við byrjun meðferðar.

![Site Templates tab](/img/config/product-site-templates.png)

Nettverkstjóri skapar og sett upp template siteins sem almenna WordPress-síða með aktíva og sett upp þema, pluginum og innihaldi. Template sídan klónast nákvæmlega yfir í vöndu.

Þessi tab leyfir nettverkstjóra að gefa til vörunar um hvernig site templates verða á hverjum nýri meðferðarferli. Til að nota site templates fyrir þennan plan, setni **Allow Site Templates** toggleinn á aktivt staða.

Þegar **Allow Site Templates** er afskipt í, geta ekki viðskiptavinir á planinu veldur vali template-a sjávar og þótt skattarform, deilist linkur eða URL-parametr séu til að gera templates til viðbót. Ultimate Multisite tryggir nú þetta takmarkið með fallbacks í gegnum tilfelli: planinn settur fyrst, síðan settingar fyrir checkout-form template-a, svo pre-selected eða URL-tiltekna templates. Þetta heldur takmarkanir planins eins og er og hindrar templates frá því að spýja fram fyrir vörum sem ekki ættu að bjóða þeim til.

**site template selection mode** sé rétturinn sem styrkir hvernig site templates verða á meðan meðferðarferli er í gangi.

Innstillingin **D** **efault** følgja skrefumarkmi í kassaferli. Ef netversustjóri hefur sett upp stega fyrir val staflæðsformlets í kassaferli og er steinnurðin sett með staflæðsformletjum, mun þessi innstilling viðhalda leiðbeiningunum sem eru settar í steginum í kassaferli.

Við **A** **ssign Site Template** þvingar val á staflæðsformletjum sem er beint gefinn. Á eftir vemist allar stega fyrir val staflæðsformlets í kassaferli fjarlægr.

Líkurlega, **C** **hoose Available Site Templates** við mynd þástaflæðsformletjum sem eru settar í steginum í kassaferli með staflæðsformletjum valda í þessari innstillingunni. Niðurvalinn staflæðsformletur getur einnig verið sett til að hjálpa við valið fyrir viðskiptavininn.

Líkurlega, ef netversustjóri vill að staflæðsformletjum verði valdi í steginum í kassaferli, er innstillingin ' _default_ ' auðveldast tilfelli. Eða sem tækifæri til að fjarlægja og loka valstaflæðsformletsins og leggja valið á planinninn, gæti ' _assign new template_ ' eða ' _choose available site templates_ ' valdi verið góð.

#### Staflætur (Sites) {#sites}

**Sites** tabur er hluti af takmarkunni í Ultimate Multisite.

![Sites tab](/img/config/product-sites.png)

Þessi innstilling sýnir stöðvar eftir hópinn staflætur sem viðskiptavin getur skapað undir samþykki sínum.

Til að aktíva takmarkunina, set **limit sites** toggle í aktivt staða og gefðu stöðvar eftir hópinn í felti **site allowance**.

#### Umsóknir (Visits) {#visits}

**Visits** tabur er enn hluti af kerfisins fyrir takmarkunni í Ultimate Multisite. Þessi innstilling leyfir reikning og eftir það hættingu einstaka gjöfendur á staflætur viðskiptavinin.

![Visits tab](/img/config/product-visits.png)

Frá marka sjónar geta netkunna stjórnendur nota þetta settning sem leið til að uppmunast viðkomandi viðskiptavendur til að uppgradda planinn þess mínu þegar takmarkanir eru náðar. Þessi settning getur einnig hjálpa netkunna stjórnenda í að hindra og fórnsku yfirferð á síti sem er óþarf til að varðveita kerfisauði.

Til notkun þess eiginleika, setni **limit unique visits** (takmarkun einstakla heimsóknar) toggilinn í aktivt staða og gefðu upp hæsta fjölda einstaka gjöfendanna í felti **unique visits quota** (takmarkun einstaka gjöfna).

Eftir að þessi takmarkun er náð, mun Ultimate Multisite stoppa að veita viðskiptavendurinn sítt síti í stað þess að sýna texta sem gefur til vetta að takmarkanir séu náðar.

#### Notendur (Users) {#users}

Takmarkanir 'Users' í Ultimate Multisite leyfa netkunna stjórnenda að leggja takmark á fjölda notenda sem geta verið sköpt og gefnu hlutverki.

![Users tab](/img/config/product-users.png)

Til að aktíva takmarkunina setni **limit user** (takmarkun notenda) toggilinn í aktivt staða með því að draga hann til høgre.

Næst fyrir hvert hlutverki sem skal takmarka, setni toggilinn nýttan við það og skildu hæsta upphæði í viðeigandi felti.

#### Post Types (Gjörð postanna) {#post-types}

**Post Types** tab leyfir netkunna stjórnendur að leggja nákvæma takmarkar á breiðan hlutfall gjörðum postanna í WordPress.

![Post Types tab](/img/config/product-post-types.png)

Þegar það er byggt upp WordPress, eru posts og post types mikilvæg hluti af grundvallarfunninum þess, og því er takmarkunssystem Ultimate Multisite sniðna til að hjálpa netkunna stjórnendur í uppsetningu og viðhaldi takmarkana.

Til aktíva þess takmarkunssystem setni **limit post types** (takmarkun gjörðum postanna) toggilinn í aktivt staða með því að draga hann til høgre.

Næst, fyrir hvert posttype sem þú vilt takmarka, skaltu það á með því að draga það til höndar yraum og gefðu upp hæsta takmarki í viðeigandi feltinu.

#### Disk Space (Skráningur) {#disk-space}

**Disk Space** tabinn leyfir nýsköpunarstjórnendur að takmarka yfirborðsveita sem viðskiptavinir nota.

![Disk Space tab](/img/config/product-disk-space.png)

Almennt í WordPress multisite eru kjarnafilginn (core files) sama fyrir alla staðir, og einstaklingariririr (directories) sem eru sköpt fyrir miðlaflög og upplufna myndir sem þessum settum og takmarkunum er tengd.

Til að aktíva takmarkningu diskveits, set **limit disk size per site** toggle á aktivt staða með því að draga það til höndar yraum.

Næst, gefðu upp hæsta takmarki í megabyte í feltinu **disk space allowance**.

#### Custom Domain (Eigilegt vísar) {#custom-domain}

Með því að skipta þessari möguleika á á, geturðu leyfa eigilega domænum á þessum plani sér.

![Custom Domains tab](/img/config/product-custom-domains.png)

#### Themes (Skynslur) {#themes}

**Themes** tabinn í mögulegum skiptum á netverkssjónvaröfunni leyfir netverkstjórnendur að gera skynslur til viðskiptavina til vals og að þýðja valkostnaðar fyrir skynsluna.

![Themes tab](/img/config/product-themes.png)

_**Athugi: Til að skynslur verji til viðskiptavina, þær verjast netverkstjórnendur í netverkssjónvaröfunni.**_

![Network themes page](/img/config/product-themes-network-enabled.png)

**visibility** (sýn) möguleiki sést til að staðfesta hvort þessi skynsla sé sýn fyrir viðskiptavininn þegar hann skoðar tabinn **Appearance > Themes** í sínum stað. Set þennan möguleika á **Hidden** (Hýrt) fjæri skynsluna úr sýn og takmarka því að velja og aktiva hana.

![Themes tab](/img/config/product-themes.png)

**behavior** (áferð) valkostur leyfir netverkstjórnendur að skilja stað skynslunnar eftir að viðskiptavina staður er skráð.

Í **Aðskiltu** (Available) tilstandi er þemað aðgengst fyrir viðskiptavininn til sjálfsvirkunar. Til heldurs í **Not Available** (Ekki aðgengst) tilstandi fjernir það viðskiptavinni möguleika á að virkja þemað. Í lokum ferlið **Force Activate** (Virkja á) þar sem val og virkjun þemað er tvíðvirk, sem setur það sem dæmi upp á síðunni við sköpun.

#### Plugins {#plugins}

Eins og í tabinn fyrir Themes leyfir Ultimate Multisite netverkstjórnara að skilgreina sýnargildi plugins til viðskiptavina eins og stöðu þeirra þegar ný síða er skönnuð.

![Plugins tab](/img/config/product-plugins.png)

**Sýnargildi** (visibility) dropdown leyfir að plugin sé sést eða hýrt fyrir viðskiptavininn þegar hann skoðar síðuna sína í menulinum Plugins.

Netverkstjórnari getur vísar further á hámarka á áhrifum pluginsins með því að nota valkostninga í dropdowni fyrir áhrif (behavior).

![Plugins tab](/img/config/product-plugins.png)

**Default** (Dæmi) valið hefur áhrif á stöðu pluginins sem er skilgreind í síðunartempli sem viðskiptavinurinn hefur valdið. Því eru plugins sem eru virka í templi sem klónist til viðskiptavina sínu síðu virka þegar templið klónist.

**Force Activate** (Virkja á) setur plugininn í virkandi stöðu við sköpun síðunnar og **Force Inactivate** (Hýra á) hýr plugininn af viðsköpun síðunnar. Í þessum bæði tilfellum getur viðskiptavinurinn mannvirkjast stöðu pluginins með menulinum WordPress Plugins.

Innstillingin **Force Activate & Lock** virkar eins og áður, en hindrar viðkomandi þróunni (customer) að breyta staðalsetningum plugininnar. Því mun innstillingin Force Activate and Lock tvinga plugininn í aktivt staða og hindra viðkomandi frá deaktiveringu. Á sama hátt mun innstillingin **Force Inactivate & Lock** tvinga plugininn í inaktivt staða og hindra notandann frá aktivering.

Netverkstjóri getur vilja að skoða innstillingar Force Activate & Lock og Force Inactivate & Lock í samnvirtun með vísitalmblöndunir (site templates) sem plugins, þar sem pluginstaðalsetningar innan blöndunlurnum gæti verið áhrifsvælt af þessum innstillingum ef þær eru valin.

#### Viðbótum fyrir viðbrögð (Reset Limitations) {#reset-limitations}

Viðbótum fyrir viðbrögð (Reset Limitations) taburinn setja upp aftur allar sérstaka takmarkanir sem eru settar á vöruna. Til að setja upp aftur takmarkanir, klikkaðu á knappa **reset limitations**.

![Reset Limitations tab](/img/config/product-reset-limitations.png)

Til að staðfesta aðgengni drauma (action) dráum **confirm reset** skráninguna til aktiv staða á hönnunni og klikkaðu á knappa **reset limitations**.

![Reset Limitations tab](/img/config/product-reset-limitations.png)

## Breyta, Duplika eða Slettein Vöruna (Edit, Duplicate, or Delete Product) {#edit-duplicate-or-delete-product}

Nýr vörur getur breytt, duplika eða slettein með því að ferðast í **Ultimate Multisite > Products** og halda á núverandi vörunafnullu.

![Product hover actions](/img/config/product-hover-actions.png)
