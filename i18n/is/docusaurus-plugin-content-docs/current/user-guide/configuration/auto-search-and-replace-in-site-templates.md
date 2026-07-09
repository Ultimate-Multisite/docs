---
title: Sjálfsviðsökunar og skipta í stað á vísitalmum
sidebar_position: 8
_i18n_hash: 0842f53505d24579010d91568e06ef68
---
# Sjálfsvættur og skipti í vísitalinn (v2) {#auto-search-and-replace-in-site-templates-v2}

_**Þessi leiðbeiningar krefst WP UItimo úr 2.x.**_

Eitt af sterkastum eiginleikum Ultimate Multisite er möguleiki að bæta nánast hvaða texta, lögnum og valandi felta í skráningarskjarni viðskiptavina viðskipti. Eftir að við höfum fanga það upplýsinguna, getum við nota hana til að fyrirfram fylla inn innihald í sérstökum hlutunum á vísitalinn sem er valinn. Þegar nýtt vefsíða er lögð út, mun Ultimate Multisite skipta staðfestingarnar með raunverulegum upplýsingum sem var fanga við skráningu.

Til dæmis geturðu nota vísitalin þín með staðfestingarnar - {{placeholder_name}}. Þau verða að vera umhugaðir af tvö djúpum curly braces - {{placeholder_name}}.

Þegar þú hefur það, geturðu bara bætt við samsvarandi skráningarfelt til að fanga þá upplýsinguna.

Þín viðskiptavinur getur þá fylla það felta felti í gegnum skráninguna.

Ultimate Multisite mun þá skipta staðfestingarnar með upplýsingum sem viðskiptavinurinn hefur gefið.

## **Lögun á „vísitalinn fullur af staðfestingarnum“** {#solving-the-template-full-of-placeholders-problem}

Allt það er glæp, en við komum í ólíklega óþægilegan vandamál: nú eru vísitalin okkar - sem viðskiptavinir okkar geta beita á - fullur af ólíklegum staðfestingarnum sem ekki segja mikið.

Til að lösa þetta, býðum við möguleika að setja falska gildi fyrir staðfestingarnar, og við notum þá gildi til að leita eftir og skipta þeim með innihaldi á vísitalin en viðskiptavinir okkar eru í gangi.

Þú getur aðgang til vísitalinn staðfestingarskjarni fá með því að ferðast yfir í **Ultimate Multisite > Settings > Sites**, skrópa ned til myndinni um valkostninga vísitalinn, og síðan klikka á tengilinn **Edit Placeholders**.

![Mynd um myndina um valkostninga vísitalinn í skráningarskjarnum](/img/config/settings-sites-templates-section.png)

Þetta mun leða þig til vísitalinn staðfestingarskjarni, þar sem þú getur bætt við staðfestingar og innihaldi þeirra.

![Editor fyrir skýrslur um staðir og temaplakstæði](/img/config/settings-sites-templates-section.png)
