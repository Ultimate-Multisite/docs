---
title: Planaren eskaintzen edo zerbait jarraitzen azaltzea
sidebar_position: 7
_i18n_hash: ce49309d1cd1d8310fd360fa324119f3
---
# Plan batketa (v2)

_**IMPORTANTE NOTA: Hego kalpo Ultimate Multisite 2.x-ean referentzia da.**_

Plan edo abonazio bat batketa egin dezake client-ek, batez ere irudiak ez dute erresurgarriak aditzen edo subsite bat egindura behar ez duela.

## Plan bat batketa ondo jakinarazteko {#how-to-downgrade-a-plan}

Client-ek plan bat batketa egin dezakoki, bere subsitearen admin dashboard-era logi eta kontua eskatzen **Change** (Gehiago/Aldatu) botoia klikizik.

![Customer account page with Your Membership card and Change button](/img/account-page/membership-change-button.png)

**Change** (Aldatu) botoia klikizenean, erabiltzaileak/client-ek checkout lapera irekituko da, horretan plan bat emateko irudiari aukeratu dezake abonazioa aldatzeko.

![Downgrade plan options page on the customer side](/img/account-page/downgrade-picker.png)

Hau testuaren bitartean, plan bat **Premium** (Premium) den **Free** (Libertza) planera batketa egiten dugu.

Erabiltzaileak irudia jarraitzeko, **Complete Checkout** (Checkout-a amaitu) botoia klikizte behar du. Horrek kontua eskatzen laperaan itxarri du, horretan abonazioaren aldatzea pending batko informazioa emateko testu bat eratu da. Aldakileak client-en **next billing cycle** (next fakturazioa) gertatzen da.

![Account page showing pending membership change banner](/img/account-page/pending-change.png)

### Erabiltzailea plan bat batketa egin ondoren zer egiten du? {#what-happens-when-a-user-downgrades-their-plan}

Plan bat batketa egiteak erabiltzailearen subsitearen jakinarazteko beste konfiguratura ez aldatzen duela garrantzitsia esan nahi du.

Subsitearen template (formatoa) automatikoki aldatu ez du, koska site template-a aldatzea subsitearen guztia ezarritzi eta berri egitea da. Horrek datuen ezarritza eta berri egitea ematen duena ez dute beharrezkoa. Beraz, posts (artikuluak) barne ezarrituta, disk space, themes edo plugins ezberdinetarrak ez arrituko dira.

Adieraz da, ulertzen da, nahiz zure garrantzia preocupazioa hau da plan bat dio ezarritako limitazio eta quota-ek, baina gure parteak ez duzu irudi egitean zerbait eragiten potensialia duten erabiltzailearen subsite-ari zerker edo zehazteko konfiguratura hauek albizki.

Plan batean ezarritutako limitazioa gehiago izan zen post-ezinburuak dira, irudiak 3 aukera dituzte: **Post-ezinburua jarraitu** *,* **Post-ezinburua trash-legu aurkitu** *,* edo **Post-ezinburua draft-legu aurkitu** *.* Haua Ultimate Multisite konfiguratura hauek ondorioz konfiguratatu daitezke.

![Network Admin Settings Sites page showing post-limit-exceeded behaviour options](/img/account-page/settings-sites-post-limit.png)

### Zer egin da labenguaren (payment) {#what-happens-to-the-payment}

3.0 bertsioan, proration-ekin lotutako labenguarekin ez duzu beharrezkoa erregistroa.

Hau da, sistema bere membership dagoen postuak **billing cycle batean amaitu ondoren** gure plan/membership berria erabiliko den. Berria membership-aren billing zehaztea automatikoki aplikatuz eta antzeko billing cyclean aurkituz izango da.
