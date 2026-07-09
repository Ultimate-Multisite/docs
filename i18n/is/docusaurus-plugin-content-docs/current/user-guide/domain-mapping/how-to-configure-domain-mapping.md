---
title: Hvernig á að stilla Domain Mapping
sidebar_position: 6
_i18n_hash: 5e3edfad8e0d51fa677f5c6f40a105e4
---
# Hvernig á að stilla lénavörpun (v2)

_**MIKILVÆG ATHUGASEMD: Þessi grein vísar til Ultimate Multisite útgáfu 2.x.**_

Einn öflugasti eiginleiki úrvalsnets er möguleikinn á að bjóða viðskiptavinum okkar tækifæri til að tengja top-level domain við vefsvæðin sín. Þegar öllu er á botninn hvolft, hvort lítur fagmannlegra út: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) eða [_**joesbikeshop.com**_](http://joesbikeshop.com)? Þess vegna býður Ultimate Multisite upp á þennan eiginleika innbyggðan, án þess að þurfa að nota viðbætur frá þriðja aðila.

## Hvað er lénavörpun?

Eins og nafnið gefur til kynna er lénavörpun sá möguleiki sem Ultimate Multisite býður til að taka við beiðni um sérsniðið lén og varpa þeirri beiðni á samsvarandi vefsvæði í netinu sem hefur þetta tiltekna lén tengt.

### Hvernig á að setja upp lénavörpun á Ultimate Multisite-netinu þínu

Lénavörpun krefst nokkurrar uppsetningar af þinni hálfu til að virka. Sem betur fer sjálfvirknivæðir Ultimate Multisite erfiðu vinnuna fyrir þig svo þú getir auðveldlega uppfyllt kröfurnar.

Við uppsetningu Ultimate Multisite mun leiðsagnarforritið sjálfkrafa afrita og setja upp **sunrise.php** í tiltekna möppu. **Leiðsagnarforritið leyfir þér ekki að halda áfram fyrr en þessu skrefi er lokið**.

<!-- Skjáskot ekki tiltækt: Ultimate Multisite uppsetningarleiðsagnarforrit með sunrise.php skrefi -->

Þetta þýðir að þegar Ultimate Multisite uppsetningarleiðsagnarforritið hefur lokið við að setja upp netið þitt geturðu byrjað að varpa sérsniðna léninu strax.

Athugaðu að lénavörpun í Ultimate Multisite er ekki skyldubundin. Þú hefur val um að nota innbyggða lénavörpunaraðgerð WordPress Multisite eða einhverja aðra lénavörpunarlausn.

Ef þú þarft að slökkva á lénavörpun Ultimate Multisite til að rýma fyrir öðrum lénavörpunarlausnum geturðu slökkt á þessum eiginleika undir **Ultimate Multisite > Settings > Domain Mapping**.

![Stillingasíða lénavörpunar sem sýnir admin-tilvísun, vörpunarskilaboð og DNS-valkosti](/img/config/domain-mapping-settings.png)

Rétt fyrir neðan þennan valkost geturðu einnig séð valkostinn **Force Admin Redirect**. Þessi valkostur gerir þér kleift að stjórna því hvort viðskiptavinir þínir geti opnað admin Dashboard bæði á sérsniðna léninu sínu og undirléninu eða aðeins á öðru þeirra.

Ef þú velur **Force redirect to mapped domain** geta viðskiptavinir þínir aðeins opnað admin Dashboard sitt á sérsniðnu lénunum sínum.

Valkosturinn **Force redirect to** **network domain** gerir nákvæmlega hið gagnstæða - viðskiptavinum þínum verður aðeins leyft að opna Dashboard sín á undirléninu sínu, jafnvel þótt þeir reyni að skrá sig inn á sérsniðnu lénunum sínum.

Og valkosturinn **Allow access to the admin by both mapped domain domain and network domain** gerir þeim kleift að opna admin Dashboard sín bæði á undirléninu og sérsniðna léninu.

![Admin Redirect fellilisti opinn sem sýnir þrjá tilvísunarvalkosti](/img/config/domain-mapping-redirect-options.png)

Það eru tvær leiðir til að varpa sérsniðnu léni. Sú fyrri er með því að varpa léninu úr admin Dashboard netsins sem super admin og sú seinni er í gegnum admin Dashboard undirvefsvæðisins undir Account-síðunni.

En áður en þú byrjar að varpa sérsniðna léninu á eitt af undirvefsvæðunum í netinu þínu þarftu að ganga úr skugga um að **DNS-stillingar** lénsins séu rétt stilltar.

###

### Að ganga úr skugga um að DNS-stillingar lénsins séu rétt stilltar

Til að vörpun virki þarftu að ganga úr skugga um að lénið sem þú ætlar að varpa vísi á IP-tölu netsins þíns. Athugaðu að þú þarft IP-tölu netsins - IP-tölu lénsins þar sem Ultimate Multisite er sett upp - ekki IP-tölu sérsniðna lénsins sem þú vilt varpa. Til að leita að IP-tölu tiltekins léns mælum við til dæmis með því að fara á [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html).

Til að varpa léninu rétt þarftu að bæta við **A RECORD** í **DNS**-uppsetningunni þinni sem vísar á þessa **IP-tölu**. DNS-umsýsla er mjög mismunandi milli mismunandi lénaskrásetjara, en það er nóg af leiðbeiningum á netinu um þetta ef þú leitar að " _Creating A Record on XXXX_ " þar sem XXXX er lénaskrásetjarinn þinn (t.d.: " _Creating A Record on_ _GoDaddy_ ").

Ef þú lendir í vandræðum með að fá þetta til að virka skaltu **hafa samband við þjónustuver lénaskrásetjarans þíns** og þau geta hjálpað þér með þennan hluta.

Ef þú ætlar að leyfa viðskiptavinum þínum að varpa eigin lénum þurfa þeir sjálfir að vinna þennan hluta. Vísaðu þeim á þjónustukerfi skrásetjarans síns ef þeir geta ekki búið til A Record.

### Vörpun sérsniðins léns sem Super Admin

Þegar þú ert skráð(ur) inn sem super admin á netinu þínu geturðu auðveldlega bætt við og stjórnað sérsniðnum lénum með því að fara undir **Ultimate Multisite > Domains**.

![Lénalistasíða í Ultimate Multisite](/img/admin/domains-list.png)

Á þessari síðu geturðu smellt á **Add Domain** hnappinn efst og þá opnast sprettigluggi þar sem þú getur stillt og fyllt inn **sérsniðna lénið** , **undirvefsvæðið** sem þú vilt beita sérsniðna léninu á, og ákveðið hvort þú viljir stilla það sem **aðallén** eða ekki (athugaðu að þú getur varpað **mörgum lénum á eitt undirvefsvæði**).

![Add Domain sprettigluggi með léni, vefsvæðisvali og aðallénsrofa](/img/admin/domain-add-modal.png)

Eftir að hafa sett inn allar upplýsingarnar geturðu síðan smellt á **Add Existing Domain** hnappinn neðst.

Þetta mun hefja ferlið við að sannreyna og sækja DNS-upplýsingar sérsniðna lénsins. Þú munt einnig sjá annál neðst á síðunni svo þú getir fylgst með ferlinu sem það fer í gegnum. Þetta ferli getur tekið nokkrar mínútur að ljúka.

Ultimate Multisite v2.13.0 býr einnig sjálfkrafa til innri lénaskráninguna þegar ný síða er stofnuð á hýsil sem á að meðhöndla sem lén fyrir hverja síðu. Ef hýsillinn er aðallén netsins, eða eitt af sameiginlegu grunnlénum greiðsluformsins sem eru stillt á **Vefslóð síðu**-reit, er sjálfvirku vörpuðu lénaskráningunni sleppt svo að sameiginlega grunnlénið haldist tiltækt fyrir allar síður sem nota það.

Þegar viðskiptavinur skráir nýtt lén í gegnum Domain Seller v1.3.0 eða nýrra, varpar Ultimate Multisite skráða léninu sjálfkrafa á netsíðu viðskiptavinarins sjálfgefið. Stjórnendur þurfa ekki lengur að bæta við sérstakri vörpuðu lénaskráningu eftir árangursríka skráningu nema þeir vilji breyta valkostum á borð við aðallénsflagg, virkjunarstöðu eða SSL-meðhöndlun.

**Stigið** eða staðan ætti að breytast úr **Athugar DNS** í **Tilbúið** ef allt er rétt sett upp.

<!-- Skjámynd ekki tiltæk: Lénalína sem sýnir stigið Athugar DNS í lénalistanum -->

<!-- Skjámynd ekki tiltæk: Lénalína sem sýnir stigið Tilbúið með græna stöðuvísinum -->

Ef þú smellir á lénaheitið geturðu séð nokkra valkosti inni í því. Skoðum þá í fljótu bragði:

![Upplýsingasíða léns með rofum fyrir stig, síðu, virkt, aðal og SSL](/img/admin/domain-edit.png)

**Stig:** Þetta er stigið sem lénið er á. Þegar þú bætir léninu fyrst við verður það líklega á stiginu **Athugar DNS**. Ferlið athugar DNS-færslurnar og staðfestir að þær séu réttar. Síðan verður lénið sett á stigið **Athugar SSL**. Ultimate Multisite athugar hvort lénið sé með SSL eða ekki og flokkar lénið þitt sem **Tilbúið** eða **Tilbúið (án SSL)**.

**Síða:** Undirlénið sem er tengt þessu léni. Varpaða lénið mun sýna efni þessarar tilteknu síðu.

**Virkt:** Þú getur kveikt eða slökkt á þessum valkosti til að virkja eða óvirkja lénið.

**Er aðallén?:** Viðskiptavinir þínir geta haft fleiri en eitt varpað lén fyrir hverja síðu. Notaðu þennan valkost til að velja hvort þetta sé aðallénið fyrir tiltekna síðu.

**Er öruggt?:** Þó Ultimate Multisite athugi hvort lénið sé með SSL-vottorð eða ekki áður en það er virkjað, geturðu handvirkt valið að hlaða léninu með eða án SSL-vottorðs. Athugaðu að ef vefsíðan er ekki með SSL-vottorð og þú reynir að þvinga hana til að hlaðast með SSL, getur það valdið villum.

### Vörpun sérsniðins lénaheitis sem notandi undirsíðu

Stjórnendur undirsíðna geta einnig varpað sérsniðnum lénaheitum úr stjórnborði undirsíðu sinnar.

Fyrst þarftu að ganga úr skugga um að þú virkir þennan valkost undir stillingunum **Lénavörpun**. Sjá skjámyndina hér að neðan.

<!-- Skjámynd ekki tiltæk: Stillingar lénavörpunar sem leyfa notendum undirsíðna að varpa lénum með rofanum DNS-stjórnun viðskiptavina -->

Þú getur einnig sett eða stillt þennan valkost á **Áætlunar**-stigi eða í valkostum vöru á **Ultimate Multisite > Vörur**.

![Hluti fyrir sérsniðin lén á breytingarsíðu vöru](/img/config/product-custom-domains.png)

Þegar einhver þessara valkosta er virkjaður og notanda undirsíðu er heimilt að varpa sérsniðnum lénaheitum ætti notandi undirsíðunnar að sjá metabox undir **Account**-síðunni sem kallast **Lén**.

<!-- Skjámynd ekki tiltæk: Lénametabox á Account-síðu undirsíðu með hnappinum Bæta við léni -->

Notandinn getur smellt á hnappinn **Bæta við léni** og þá birtist sprettigluggi með nokkrum leiðbeiningum.

<!-- Skjámynd ekki tiltæk: Sprettigluggi fyrir Bæta við léni sem sýnir leiðbeiningar um DNS A-færslu fyrir notendur undirsíðna -->

Notandinn getur síðan smellt á **Næsta skref** og haldið áfram að bæta við sérsniðna lénaheitinu. Hann getur einnig valið hvort þetta verði aðallénið eða ekki.

<!-- Skjámynd ekki tiltæk: Eyðublað fyrir Bæta við léni með reit fyrir sérsniðið lénaheiti og rofa fyrir aðallén -->

<!-- Skjámynd ekki tiltæk: Staðfestingarskref fyrir Bæta við léni sem ræsir DNS-staðfestingu -->

Að smella á **Bæta við léni** mun hefja ferlið við að staðfesta og sækja DNS-upplýsingar sérsniðna lénsins.

### Um samstillingu léna

Samstilling léna er ferli þar sem Ultimate Multisite bætir sérsniðna lénaheitinu við hýsingarreikninginn þinn sem viðbótarléni **til að lénavörpunin virki**.

Samstilling léna gerist sjálfkrafa ef hýsingaraðilinn þinn er með samþættingu við lénavörpunareiginleika Ultimate Multisite. Sem stendur eru þessir hýsingaraðilar _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways,_ og _Cpanel._

Þegar samþætting hýsingaraðila er virk getur Ultimate Multisite einnig sett DNS- eða undirlénsstofnunarverkefni hýsingaraðilans í biðröð fyrir nýstofnaðar síður. Ef engin samþætting hlustar eftir því verkefni er bakgrunnsverkinu sleppt til að forðast biðraðarfærslur sem gera ekkert. DNS- og SSL-athuganir fyrir vörpuð lén halda áfram að keyra í gegnum venjulega ferlið fyrir lénastig.

Þú þarft að virkja þessa samþættingu í stillingum Ultimate Multisite undir flipanum **Samþætting**.

![Samþættingarflipi í stillingum Ultimate Multisite sem sýnir hýsingaraðila](/img/config/integrations-tab.png)

<!-- Skjámynd ekki tiltæk: Stillingartenglar hýsingaraðila á flipanum Samþættingarstillingar -->

_Athugaðu að ef hýsingaraðilinn þinn er ekki einn af þeim aðilum sem nefndir eru hér að ofan, **þarftu að samstilla eða bæta lénaheitinu handvirkt við** hýsingarreikninginn þinn._
