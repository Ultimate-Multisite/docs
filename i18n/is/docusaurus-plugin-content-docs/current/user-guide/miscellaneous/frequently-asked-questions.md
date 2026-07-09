---
title: Vanlegar spurningar
sidebar_position: 18
_i18n_hash: 2aae003605ca306aebc782d92f605d7c
---
# Mikildu spurningar {#frequently-asked-questions}

Hér eru nokkar **Mikildu spurningar**, sem oftast kemur upp í viðbragðsmiðlunum.

  * **Hvað er Ultimate Multisite?**

Ultimate Multisite er WordPress plugin, sem er byggt á WordPress multisite installum, og það breytir WordPress installann þinn yfir í fræðilega netverk stóðna – eins og [WordPress.com](https://WordPress.com) – sem leyfir viðskiptavinum að skapa staðna með mánuðar-, kvartal- eða ársgeðar fjármun. (Þú getur einnig skráð frelgja plan).

  * **Verkið Ultimate Multisite virka án Multisite?**

Nei. Ultimate Multisite þarf WordPress multisite, subdirektori eða subdomain.

  * **Hvað eru kröfur fyrir Ultimate Multisite?**

Ultimate Multisite krefst:

**WordPress Vörjun** : v5.3+ (Aðinsins: Símsilastæðarútgáfa)
**PHP Vörjun** : 7.4.x (Styfingur í > 8.0 kemur næst)
**MySQL Vörjun** : v5+ (Aðinsins: Vörjun 5.6, ef þú hefur ekki 8.0 til að leiða á vefsítandi hjartabundana þínum)

_Multisite (subdomain eða subdirektori) þarf að vera aktivert._ [Hvernig nota WordPress Multisite](/user-guide/getting-started/how-to-install-wordpress-multisite).

  * **Verkið Ultimate Multisite virka með Multisite með Subdirektum?**

Já. Ultimate Multisite stendur fyrir bæði subdirektori installa og subdirektori installa.

  * **Verkið Ultimate Multisite virka með Multisite með Subdomainum?**

Já. Ultimate Multisite stendur fyrir bæði subdirektori installa og subdomain installa.

  * **Get ég nota Ultimate Multisite til að takmarka vinnu þess sem vinnuþjónustu (Plugins) og skýrslur (Themes) notenda geta nota?**

Já. Með Ultimate Multisite geturð tú velja hvaða plugins og themes eru til viðkomandi plan á netverk þínum.

  * **Get ég nota Ultimate Multisite til að takmarka fjölda postanna sem notaðar vinnuþjónustu (posts) nota á sínu/sínu staðni?**

Já. Við þegar þú notar Ultimate Multisite geturðu sett post quotas fyrir **hvert mögulegan post type** á netverk þínum. Þú getur einnig hægt að takast við fjölda notenda sem administratorinn getur bjóða inn, **hlutfall skráningarsvæði**, og margar öðrum mögulegum eins auglýsingum.

  * **Stykir Ultimate Multisite Site Templates?**

Já. Við þegar notar Ultimate Multisite geturðu skapa með því að þú vilt, fjölda Site Templates. Site Templates eru ekki themes; þau eru almennar síður á netverk þínum. Þú getur aktivert plugins, themes og breytt það Site Template á hvaða hátt sem þú vilt. Ef notandi velur þennan template, verður síður hans eina kopía þess templateins, með öll breytingum settar í hana.

Þú getur einnig sett sérstaka template fyrir plan. Þegar þú gert þetta, verður hver notandi sem fylgir þessu plana síður hans eina kopía þess Site Templateins.

  * **Integjur Ultimate Multisite með WooCommerce?**

Já!

Ef þú vilt að notendur netverk þinn haldið fram við WooCommerce til að nota, þar sem þeir geta sett upp stöðustöðvar, er það mögulegt með Ultimate Multisite. Þú getur jafnvel takast við fjölda hugbúnaðar í hverjum planstigi sem þínum viðskiptavinum geta skapað.

Hinsum um skýrslu um skýrslur fyrir Ultimate Multisite, geturðu nota [Ultimate Multisite: WooCommerce Integration Add-on](https://ultimatemultisite.com/addons/wp-ultimo-woocommerce/) til að láta þínum Ultimate Multisite viðskiptavinum halda fólka nota WooCommerce gateways á hlutstæðum þínum. Þannar hátt geturðu nýtt það hjá hugjaldsborði af betalingsgerðum sem eru þróaðir fyrir WooCommerce og nota þau til að reikna skýrslur fyrir Ultimate Multisite viðskiptavini þínu.

  * **Er það mögulelegt að migra skýrslur frá WPMUDEV Pro Sites?**

Já býður Ultimate Multisite nú með [hjálpfullt verkfæri til að hjálða þér við að migra](https://ultimatemultisite.com/addons/wp-ultimo-pro-sites-migrator/) í Pro Sites nýlan þinn.

  * **Hvað er “Allowed Plugins” taburinn (Tilnefndar vinnuþróunar) eins og er beint?**

Ultimate Multisite leyfir þér að neita eða gefa aðgang til vinnuþróunarmóða sem eru ekki aktiva á nýlan þinni. Þegar vinnuþróunarmóður er aktiva, er hún af náttúruðum háilið laðin í hvert síti í nýlan þinni.

Ef þú ert ekki með nokkrar vinnuþróunarmóða listir á taburinn “Allowed Plugins”, skoða ef vinnuþróunarmóður sem þér þarf er aktiva eða ekki.

  * **Get ég að nota eigin hlutina fyrir príslisti?**

Já. Í samræmi við útgáfu 1.4.0 stendur Ultimate Multisite með því að støðla (template overrides) eru mögulega.

  * **Vinnur Ultimate Multisite með WP Engine?**

Já. Ultimate Multisite var alltaf stöðlað með WP Engine, en að fá að virka domæna mappaði krefjist mannvægranir í admin-menulegi (að bæta domænum í WP Engine panel). **Þetta er ekki lengur það sé eftir útgáfu 1.6.0.** Ultimate Multisite tengist WP Engine API beint og domænar eru bætt í panelinn sjálf eftir mappað.

  * **Hvern veitir þú til að nota staðvarp (hosting) framkvæmdandi?**

Ultimate Multisite þarf að virka með öllum staðvarpi. Einangurinn er að nokkönnu staðvarpi eins og Closte, Serverpilot, WPMUDEV, WP Engine, Cloudways, Gridpane og [Runcloud.io](http://Runcloud.io) hefur nákvæmari tengingu fyrir mappað domæna, svo þau virka beint úr fólki. Fyrir övrantar staðvarp þarftu að sett upp mappað domæna mannvægranir sjálf.
