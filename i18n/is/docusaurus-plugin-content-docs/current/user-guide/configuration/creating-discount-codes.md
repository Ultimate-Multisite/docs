---
title: Skráning viðskildi
sidebar_position: 19
_i18n_hash: d6adaf916f3e21b4fda2deeaa6672d00
---
# Skráning Viðskiptaheimildar (v2)

_**VIÐSKIPURLEIKN: Þessi grein er tengd Ultimate Multisite útgáfu 2.x.**_

Með Ultimate Multisite geturðu skapa viðskiptaheimildar til að gefa þínum viðskiptavinum álagningu á skýrslu sína. Og að skapa þau er englega ekki í vé.

## Skráning og breyting af Viðskiptaheimildum {#creating-and-editing-discount-codes}

Til að skapa eða breyta viðskiptaheimild, ferðu yfir til **Ultimate Multisite > Discount Codes**.

![Lista viðskiptaheimildum — óskráðar staða fyrir það sem er ekki enn skráð](/img/config/discount-codes-empty.png)

Þar munu þú sjá lista yfir viðskiptaheimildum sem þú hefur skráð.

Þú getur klikkað á **Add Discount Code** (Búa til Viðskiptaheimild) til að skapa ný coupon eða breyta þeim sem þú hefur með því að halda niður yfir þeim og klikka á **Edit**.

![Lista viðskiptaheimildum með hálfni hvarferðar sýnandi Edit og Delete link](/img/config/discount-codes-list-hover.png)

![Knapp til að búa til viðskiptaheimild í upphafsheitið á síðunni](/img/config/discount-codes-add-button.png)

Þú verður leiðréttur yfir til síðu þar sem þú skapar eða breytir coupon kódann þinn. Á þessum dæmis munum við búa til nýr.

![Breytingasíða fyrir viðskiptaheimild með öll hluta sýnandi](/img/config/discount-code-edit.png)

Látum okkur sjá hvað er að gera í þessum settum:

**Enter Discount Code:** Þetta er bara nafn þitt viðskiptaheimildar. Þetta er ekki kódinn sem viðskiptavinir þínum verða að nota á skráningarsíðu.

**Description:** Hér geturðu kortlega lýst hvað þessi coupon er fyrir.

![Nafn og lýsing af viðskiptaheimildinni í upphafsheitið á breytingasíðunni](/img/config/discount-code-description.png)

Þú getur einnig sýnt viðskiptaheimildina sem virkandi eða ekki:

![Virkni staða viðskiptaheimildar](/img/config/discount-code-active.png)

**Coupon code:** Hér er það staður þar sem þú skilgreindar kódinn sem viðskiptavinir þínum verða að nota á skráningarsíðu.

![Coupon code fältur þar sem viðskiptavinir skrifa kóða á tíma á lausn](/img/config/discount-code-coupon-field.png)

**Aðskráning:** Hér geturðu sett **hlutfall** eða **fastjörð** eftirpenga fyrir viðskiptakóða þinn.

![Settun á hlutfall eða fastjörðarhlutfall með dropdown](/img/config/discount-code-amount.png)

**Áskráning til uppfærslu:** Ef er þessi valmiðni afsvátt (off), verður þessi viðskiptakóði aðeins notaður fyrir **fyrirpenguna**. Allar övrar betalingar munu ekki hafa áréttingu. Ef er hún afsvátt (on), verður viðskiptakóðið rétt fyrir allar framtíðarbetalingar.

**Aðskráning til fastefni:** Ef er þessi valmiðni afsvátt, mun kóðinn **ekki gefa áréttingu fyrir fastefni** (setup fee) á bestöðinni. Ef er hún afsvátt, geturðu setja áréttinguna (hlutfall eða fastjörð) sem þessi kóði munu gefa á fastefni plananna þín.

![Valmiðni til uppfærslu og aðskráning til fastefnis á skipti](/img/config/discount-code-renewals.png)

**Ávinnandi:** Á manuell hátt aktiva eða deaktiva þennan viðskiptakóði.

![Ávinnandi valmiðni til manuella aktiva eða deaktiva á viðskiptakóði](/img/config/discount-code-active.png)

Undir **Aðskráningum** (Advanced Options) sem við havemdu eftirfarandi sett:

![Aðskráningu viðskiptakóða með framkvæmdum valmiðnum](/img/config/discount-code-advanced.png)

**Begri nota:**

  * **Notkun:** Hér geturðu sjá hversu oft viðskiptakóðið hefur verið notið.

  * **Hestastofnun:** Þetta mun takmarka hversu oft notendur geta notið þess viðskiptakóða. Til dæmis, ef þú setur 10 hér, gæti kóðinn bara verið notaður 10 gångar. Í eftir þessum takmarki getur ekki kóðinn verið notið aftur.

![Settun á begri nota með núverandi nota og hestastofnun](/img/config/discount-code-limit-uses.png)

**Start- og utløpsdatoar:** Her får þú valkostningur að bæta við byrjunardag og/eða lausað daga í kupónann þínum.

![Byrjunardags- og lausað dags-feldi fyrir skjaldi kód](/img/config/discount-code-dates.png)

**Begjarnir vörur:** Ef þú skilar **Select products** (Velja vörur) í á, sýnist allar vörur þín. Þú sjaldurðu að nota mannvægi til að velja (þrátt fyrir að slá í á eða úr) hvaða vörur geta að taka við þessum kupónakóði. Vörur sem eru skilar í þessari hluta mun ekki sýna neina breytingar ef viðskiptavinir þín reyna nota þennan kupónakóð fyrir þá.

![Begjarnir vörur hluti með skila-svitjum fyrir vörur](/img/config/discount-code-limit-products.png)

Eftir að hafa sett upp allar þessar valkostir, klikka á **Save Discount Code** (Sérðu kupónakóði) til að fari í tryggingu kupónans og er allt klár!

![Save Discount Code hnappur á undir breytingasíðunni](/img/config/discount-code-save.png)

Kupóninn er nú á lista þinni, og frá þá geturðu klikka í **edit or delete** (breyta eða slette) hann.

![Röð kupónakóða í listanum með hover hlutum fyrir breyting og sletting](/img/config/discount-codes-list-hover.png)

###

### Notkun URL-parametrast: {#using-url-parameters}

Ef þú vilt sérsniða príslista eða byggja fínlega kupónakóðu síðu fyrir netseyðingu og vilja nota kupónakóðuna á skráningarsíðunni þinni, geturð þetta gera með URL-parametrast.

Fyrst þarftu að fá deilistæan linkinn fyrir planann þinn. Til þess hefurðu að ferðast yfir í **Ultimate Multisite > Products** (Ultimate Multisite > Vörur) og velja eina plan.

Klikka á hnappinum **Click to Copy Shareable Link** (Klikka til að kopya deilistæan link). Þetta mun gefa þér deilistæan linkinn fyrir þennan sérstaka planann. Í okkar tilfelli var deilistæan linkur sem fór gefin: [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/)_.

![Vörursíða með hnappum fyrir deilistæan link](/img/config/products-list.png)

Til að nota tilboðskóði þinn á þessum sérstaka plani, bæti bara parametrinn **?discount_code=XXX** við URL-inni. Þar sem **XXX** er kóðinn fyrir tilboðinn.

Í dæmi okkar munum nota kóða **50OFF** á þessu sérstaka vörunni.

URL-in fyrir þennan sérstaka plan og með tilboðskóði 50OFF settum, sjaldmerkjanlegur, mun líta eins og: [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/) _**?discount_code=50OFF**_.

###
