---
title: Stjórnaraferð fyrir multisítuuppsetning
sidebar_position: 3
_i18n_hash: fd09dc94f24b0b37245b847380feea3f
---
# Multisite Uppsetar

Ultimate Multisite hefur innbyggt uppsetar sem sjálfskiptir breytur almenna WordPress-innstallsannferð í nýja WordPress Multisite netverk. Þetta fjölstyrkir þarf manulega að breyta `wp-config.php` eða framkvæma skjalaskiljanlegar fyrirmönnum í MySQL.

:::tip
Ef WordPress-innstallsinn þitt er ekki enn framkvæmt sem Multisite netverk, geturðu skoða þennan skref ekkert. Uppsetarið sýnist aðeins þegar Multisite hefur ekki verið aktivert.
:::

## Hér sýnist uppsetarið?

Þegar þú aktiverir Ultimate Multisite á almennum (einnig ekki Multisite) WordPress-innstallsannferð, mæler pluginurinn með því að Multisite sé ekki framkvæmt og leiðir þig sjálfskiptilega til Multisite Uppsetar í stað reglulegs uppsetar.

Þú getur einnig hurið þessum beint í **WP Admin > Ultimate Multisite > Multisite Setup**.

## Skilyrði fyrir uppsetuna

Fyrir að byrja með uppsetunni, saksara:

- Þú þarft **administratorrétt** á WordPress-innstallsannferð þinni
- `wp-config.php` lausninn á serverinn þínum verður **skriflegur** fyrir webbserverinn
- Þú þarft **nýlega uppfærð bakgrunn** af fólki og skjalaskiljanlegum grunnins

:::warning
Uppsetarið breytur `wp-config.php` lausninn þinn og skapar nýja grunnitablar í grunninum. Skapa alltaf bakgrunn áður en þú byrjar með uppsetunni.
:::

## Skref 1: Velkomið

Fyrsta skjá sýnir hvað WordPress Multisite er og hvað uppsetarið mun gera:

- Aktiva Multisite eiginleika í innstallsannferðinni þinni
- Skapa nauðsynleg grunnitablar fyrir netverkið
- Íbúa nauðsynleg multisite konstantur í `wp-config.php`
- Aktiva Ultimate Multisite á netverkið

![Multisite Setup Wizard - Welcome step](/img/installation/multisite-wizard/wizard-welcome.png)

Klikka á **Continue** til að halda fram.

## Skref 2: Netverkarsetning

Þessi skrefur mæler þig með því að setja upp settningar fyrir netverkið þitt.

### Site Structure

Velduðu hvernig þú vilt að netsveitirna þín sé sést:

- **Sub-domains** (Aðinsins álitandi) — Hlutum fái eigin sub-domain, t.d. `site1.yourdomain.com`
- **Sub-directories** — Hlutum eru sköpt sem leiðir, t.d. `yourdomain.com/site1`

:::note
Ef þú valdar sub-domains, þurfaðu að settja upp **wildcard DNS** og **wildcard SSL certificate** fyrir domænnann þinn. Stóra hluti stýrðar WordPress hosta hannað þetta sjálf. Sjá [Ultimate Multisite 101](./ultimate-multisite-101) fyrir nánari samanburði.
:::

### Nettititel

Skrifa nafn fyrir netið þitt. Þetta er sett á þann sem titil þínna núverandi staðar með orðinu "Network" við brennandi. Þú getur breytt þetta seinara í nettinnstillingum.

### Nettitil Administrað E-mail

E-mail hugsanlega notaður fyrir tilkynningarnir um stjórnun netlandsins. Þetta er sett á e-mail hugsanlega notandans núverandi e-mail.

![Multisite Setup Wizard - Network Configuration](/img/installation/multisite-wizard/wizard-network-configuration.png)

Eft sem þú hefur fyllt í feldi, klikkaðu á **Continue** til að halda fram.

## Stig 3: Inntök

Klikkaðu á knappa **Install** til að byrja. Wizardurinn gerir fimm sjálfsháttar stefnuferli í nákvæm röð, þar sem hann sýnir framgang hans í sanntíma:

![Multisite Setup Wizard - Installation pending](/img/installation/multisite-wizard/wizard-installation-pending.png)

| Árangur | Skjalði |
|---|---|
| **Aktiva Multisite** | Ímdu `WP_ALLOW_MULTISITE` konstant í `wp-config.php` |
| **Skapa Nettverk** | Skapa multisite skráseturinn (`wp_site`, `wp_sitemeta`, `wp_blogs`, osaf) og fylli þá með því mið netverksinnar uppsetningarsjávar |
| **Uppfærðu Uppsetningu** | Ímdu lokunarconstantar multisite í `wp-config.php` (`MULTISITE`, `SUBDOMAIN_INSTALL`, `DOMAIN_CURRENT_SITE`, osaf) |
| **Lögðu Fikningur** | Tryggðu að vörðarstaðurlinn (site URL) sé rétt í netverksuppsetningarsjávar til að koma í veg fyrir að það verði áhyggjandi hugsanleiki um auþreystingarproblema eftir aktivaðu |
| **Aktiva Nettverk-plugin** | Aktiva nettverki með Ultimate Multisite svo það körrdu í heildar netverksinn |

Hvert skref sýnir eina af þessum staðum:

- **Pending** — Vitið að verða beint
- **Installing...** — Viðar fram núna
- **Success!** — Fullført ánan villur
- **Error message** — Villustilf er komið (textinn mun skipta því í hvernig árið var)

Eftir að allar skref sé fylgdu ánan villur, sjáðu þú grænt "Success!" stað fyrir hvert liði:

![Multisite Setup Wizard - Installation complete](/img/installation/multisite-wizard/wizard-installation-complete.png)

Þá mun uppsetningarsjávar sjálf ánar fram til fullferðar.

## Skref 4: Fullferð

Eftir að uppsetningin sé fylgdu, sjáðu þú stað fyrir árangur sem staðfestir að WordPress Multisite hafi verið aktivaður.

![Multisite Setup Wizard - Setup Complete](/img/installation/multisite-wizard/wizard-complete.png)

Þú getur nú haldið fram með uppsetningarsjávar Ultimate Multisite til að hleðja þína WaaS platform (tölvustofupplýsingar, vinnuþjónustu, betalingshættir osaf).

:::note
Þegar multisite-innstillingin er fullfærð, mun brauzerrið þitt leita áfram í nýlega ensettu netni stjórnarskrá. Þú gætir þurft að logga inn aftur þar sem auðkenningartakinsmið (authentication cookies) eru uppfærð fyrir multisite-umhverfið.
:::

## Manuell uppsetning sem vafn

Ef vafninn ekki geti skrifað í `wp-config.php` lausnar (vegna réttkvæmdar á lausnum eða þess að serverinn hætrar því), mun hann sýna nákvæma kóðann sem þú þarft að bæta í handbók:

1. **wp-config.php konstantir** sem þarf að bæta ofan linuna `/* Það er allt, stopp úr upplýsingum! */`
2. **.htaccess rewrite reglur** sem eru viðeigandi fyrir valinn vísarstafna (subdomain eða subdirectory)

Eftir að hafa skipti í handbókinni, uppfrisðu síðuna og vafninn mun skilja að multisite er nú á hjá.

## Feilfellingar

### Vafninn segir að wp-config.php sé ekki skrifað í

Webbserviþjónustinn þinn þarf skrifa réttkvæmd til `wp-config.php` lausnum. Þú getur eða:

- Tilfyllt sem viðkvæmt breytt réttkvæmd á lausnum `644` eða `666`
- Notið huleðar uppsetningu sem er í vafni
- Spyr þjónustufara þinn um hjálp

### Síður eru ekki aðgengilegar eftir uppsetningu (subdomains)

Ef þú valdið subdomain stjórnun, þarfurðu að sett **wildcard DNS** fyrir domænnina þína. Bæta í DNS-skrá:

```
Type: A (eða CNAME)
Host: *
Value: [þinn server IP]
```

Skildu við þjónustufara þinn ef þú ert ekki viss um hvernig þú getur sett upp þetta.

### Auðkenningartakinsmið á eftir uppsetningu

Ef þú ert ekki loggað inn eða upplifir cookie-feil eftir multisite uppsetninguna:

1. Leita úr brauzerri cookie-um fyrir síðuna
2. Logga in aftur í `yourdomain.com/wp-login.php`
3. Ef því áhætta er áfram, skoða að `wp-config.php` þitt ekki sé sett með `COOKIE_DOMAIN` setningu `false` — þetta er þekkt hugbúnaðarferli á multisite uppsetningum með subdomain.

### Ein skref felið í uppsetningu

Ef einn af innreiðsluferlum sýnir villu:

1. Skrifa niður villunni sem er sýnd í skjámyndinni.
2. Fyrirbáta til uppsetningarpotstafernum og prófa aftur.
3. Ef villan varðar áfram, skoða PHP villuloginn á serverri þínum fyrir meiri upplýsingar.
4. Ferlum sem eru þegar starfa enn verður ekki skipt til við því á eftirfarandi körfunum (innreiðslustafurinn er idempotent).
