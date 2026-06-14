---
title: Hva er WordPress Multisite?
sidebar_position: 15
_i18n_hash: 5cb80eb341ce29b88cd433057da8bea2
---
# Hva er WordPress Multisite?

Innan kjarninn í WordPress finnur þú eiginleika nefndu „Multisite“ sem spyrst upp að áttum til 2010 með formögnum WordPress 3.0. Ís sem þá hefur tekið fleiri uppáhald og breytingar til að innleiða nýja eiginleika og styrkja öryggisendur.

Í ensku er einn einfaldleg hugmynd um WordPress multisite: Ein háskóli heldur í einn innreiðingu af WordPress, en hver fakultet heldur í sínum eiga WordPress vísitalinn.

##

## Hva er nákvæmlega WordPress Multisite?

Multisite er eiginleiki í WordPress sem leyfir fleiri vísitalinn að deila einum innreiðingu af WordPress. Þegar multisite er aktivert, breytist upprunalegur WordPress vísitalinn til að þjónast það sem er alaug nefndu **netverk vísitalanna**.

Þessi netverk deilir skipti (þetta þýðir að **plugins og themes eru einnig deildar**), database, kjarnafíli WordPress, wp-config.php osaf.

Þetta þýðir að uppfærðir fyrir WordPress, theme og plugin þurfa að framkvæma einn gongd fyrir alla netverk vísitalann þín vegna þeirra sem deila sama skipti á fílsaskiptum.

Þessi sanning er ein af aðal áhuga multisiteins, þar sem hún leyfir þér að vaxa fjölda vísitalanna sem þú stýrir án þess að þarfir þitt starfslaga til viðhalda vísitalanna þín að breytast.

##

## Subdomain eða Subdirectory?

Það eru tveir mögulegar háttar að framkvæma WordPress multisite – og þú þarft að velja einn þegar þú breytir regularinn WordPress innreiðingu í multisite innreiðingu:

**Subdomain:** t.d.: [site.domain.com](http://site.domain.com)

…eða

**Subdirectory:** t.d.: [yourdomain.com/site](http://yourdomain.com/site)

Hver háttur hefur eiginleika og óeigunni sem þú þarft að skoða þegar þú tekur þessari ákvörðun.

Eitt litla máli er er mikilvægt að merkið: eftir að þú hefur tekið ákvörðun, er það mjög óvænt að breyta netverkinn frá subdirectory í subdomain eða því og aftur – sérstaklega ef þú ert að hafa fleiri en einn vísbendingar sett upp.

Fyrir að taka þá ákvörðun eru hér nokkrar punktar sem er gott að hugsa á:

**Subdirectory Mode** er engasamtur raunast mikið í uppsetningu og viðhaldinu. Þetta er svo fyrir því að alls vefurann sé bara leiðir sem eru viðkomuldir að hlutina (t.d. [yourdomain.com/subsite](http://yourdomain.com/subsite)). Sem verið, þú þarft **eitt SSL-tækifæri** fyrir aðalvæðið og það mun dekt allan netverkinn.

Á sama tíma, vegna URL-struktursins, finna Google og stöðugt övrin leitarjafarstök munu allar subsíti á netverkið sem er byggt á subdirectory séð sem einn gigantur hlut. Sem verið, innihald sem viðskiptavinir þín leggja í subsíti getur áhrif á SEO-virkni aðalvæðisins þíns, t.d. fyrir landuneyjið. Hvernig mikil áhrif er er umdeild og er argument til að segja að slíkt uppsetningu geti sýnt sér í SEO-virkni.

**Subdomain Mode** er einnig littla flóknari að sett upp, en URL-struktursins (t.d. [subsite.yournetwork.com](http://subsite.yournetwork.com)) finna oft sem sjaldan "meðgengnari".

Eitt af aðal því sem er áskorun á uppsetningu subdomain mode er SSL-þekkingu (HTTPS) fyrir heildnetið. Þetta kemur fram því að brauzar sjá subdomainar sem tengdskiptir einstökum einingum. Sem einkenni þess er að þú þarft annar SSL-sertifikat fyrir hverja subdomain á netinu, eða sérstakt ölduinn sigilt sem **Wildcard SSL certificate**. Í nýjum árum eru staðfestingarsérstafnandi og paneler hjá hostara uppfærð í því að þeir bjóða nokkönn ölduinn sigilta með einum klikki, sem hampið er skilningurinn milli þessna tveir moda um nauðsynlegt sett upp.

Á hátt sem er í stað af subdirectory mode, eru subsíti á netinu sem byggist á subdomainum, sjónarstafan söktuna sem sér að skýrslum sem eru til á einum subsítanum ekki að hafa áhrif á SEO-virkni övrót subsíta.

## Super Adminurinn

Eitt-sítu WordPress uppsetningar leyfa þér að bæta við ólíkt fjölda notenda og gefa þeim ólíkja notendurhæfðir með ólíkum réttum.

Í WordPress Multisite opnast nýr notendatípa: **super admin** – og nýr admin panel opnast: **network admin panel**.

Eins og nafnið gefur til kynna, hefur super adminurinn ólíkja hvarf í netinu, getandi að stjórna öll subsíti hans, pluginum, þémum, allt!

Nánast þegar þú breytir eitt-sítu WordPress uppsetningu yfir í multisite, er upphaflega adminurinn á einum síti sjálfur sjálfvirkt uppfærður í super admin.

Plugin og þema eru aðeins mögulega að installa eða uninstalla frá network admin panel af super admins. Subsíti-admins geta þá velja að aktiva eða deaktiva þau plugin eða þema, nema super adminurinn netið aktivið einn plugin, sem þrýst það til að vera aktivt fyrir öll subsíti alltaf.

_Athugnota: eins sjá þú sér, að kalla fólk í netið þitt og gefa þeim super admin staðleika gerir þessar notendur fullan kontroll yfir netið þitt. Til dæmis geta öðrum super adminum sýnt þér fjölbreyttri aðgerðum, sem er virkilega eins og lokun þín út úr sínum eiga neti admin panel. Til að leyfa Ultimate Multisite viðskiptavinum að hafa nákvæma kontroll yfir hvað að öðrum super adminum geta gera, hefur við einn add-on sem heitir Support Agents. Þessi add-on leyfir þér að skapa enn eina skilgreindar notendur – agentar – með hanya þeim réttunum sem þeim deyja til að fullfða verkefni sína á netinu._

## Hva er sama milli subsíða og hvað er ekki

Eins við vorum nefndir áður, einn af lykilgildi WordPress multisite er það að allar subsíðir tengjast sama uppsetningu, kjarnafylkimli, themi, pluginir, WordPress core fylkimli osakan.

Það eru þó nokkrar þættir sem eru vel skilgreind á per-subsite vísar.

\- Til dæmis fær hver subsídi sína eiga uppluförðunafólki (uploads folder). Sem því geta upplufur sem notendur einrar subsíðar gera ekki aðgang til að hafa áfram á annar subsíðu.

\- Hver subsídi hefur sín eiga admin panel og getur aktivert eða inaktivert pluginir eða themi nema það sé net-aktivt af super adminum.

\- Þeir sem mestar database tables eru sköpt fyrir hver subsídi, það þýðir að posts, comments, pages, settings og meira eru skilgreind á hver subsídi.

## Notendastjórnun á WordPress Multisite

Eitt finnleiki málsátt í WordPress multisite er notendastjórnun. WordPress notendatabellinn er einn af nokkrum sem er sama milli allra subsíða.

Þessi uppsetning getur skapað nokkrar þættir eftir því hvað þú ert að planninga að byggja með netinu þínu. Dæmi hér að neðan hjálpar til að sýna mest áhyggjandi það.

Myndu þér eftir eftirfarandi sýnari:

Þú byggir upp nýtt WordPress multisite net og byrjar að bjóða subsítofer til fastegja mánuðar eftir því sem fólk vilja hafa e-commerce stöðu.

Þú fær fyrra betalanda – John. Þú byggir vísindalegsiti fyrir John á netinu, installir allar nauðsynlegar plugins og byggir síðan notandafólki fyrir John til að hann geti stýrt stöðu hans.

Þá kemur aftur tónn – Alice. Þú gerir það sama fyrir hana og hún hefur nú stöðu á netinu sem er í netinu þínu.

John og Alice eru bæði fastegjar þín, en þeir vita ekki hver er hvernig. Mikilvægri er það að ef einn af þeim hefur betur á sínu stöðustöðu, er ekki möguleiki að vita að þessi stöðustöðu sé staðsett í sama netinu.

Eitt dag þarf John að kaupa nýja skoða og finnur perfekt skoða í Alice’s stöðustöðustöðu. Þegar hann reynir að fullfærast kaupin, fær hann villu texta sem segir „tölvupóstur er ekki aftur notaður“, sem er óvenjulegt þar sem John er 100% viss um að þetta sé fyrsta ferli hans á Alice’s stöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðustöðust

Þótt notkunarveitandi er sama fyrir alla notendur, geta subsíti-stjórnarstjórar eða superstjórninn viðbúa og fjarlægja notendur frá subsítum, og þeir hafa jafnvel annar notendurhættir á öllum subsítum.

## Árangursgreiningar

WordPress multisite er alveg ótrúlega sterkur þegar kemur að því hversu mikið fjölskyldu staðnum það getist að stýra. Þetta getur testast með því að [WordPress.com](https://WordPress.com), Edublogs og Campuspress eru allir þjónustur sem nota multisite, og hver einn eigir þúsundir staðnum.

Þótt í því lýst ekki nánast ekki maxima fjölda staðna sem þú getur stýrt á einum WordPress multisite uppsetningu, er fjöldi staðna sem þú getur farið vel með eftir því sem er ólíkt af mörgum þróunandi þættum: hversu dýrðar staðnum eru, hvort sérstök pluginir eru til subsítum, osbn.

Sem reglur fyrir vöxt, þó sem nálagan þinn netverk er einfaldari, það er betra. Það er best að fari með staðna sem ekki eru alveg dýrðar (sem gerir þau góða kandidatá fyrir sterkar skráningstefnur) og halda plugin-stackinn eins ljóðlegt og mögulegt (þegar fleiri vinnandi pluginir eru til, það er betra). Þetta getur drast á fjölda subsítna sem þú getur stýrt á ótrúlega upp.

Besti hluti er að því að þar sem allt er WordPress, verða sama verkfæri sem þú ert að elska og þekkir fyrir framkvæmdarbetri skiptum að virka í multisite netverk.

Hæst hlutfallinn fyrir multisite er database, en ef allt annað er sett upp rétt, getur það taka á einna paar þúsund staðnum áður en þú þarft að óttast því. Þegar þá eru þó lausnir til að bæta við hvenær sem þarf (eins og database sharding lausnir).
