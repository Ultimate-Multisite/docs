---
title: Uppsetning á Ultimate Multisite
sidebar_position: 12
_i18n_hash: dda8f0d2b67bc421c0a484c76c8eae6d
---
# Uppsetning á Ultimate Multisite {#installing-ultimate-multisite}

:::note
Þessi kennsluefni gerir ráð fyrir að þú hafir þegar sett upp og stillt WordPress Multisite. Til að læra hvernig, skoðaðu [þetta kennsluefni](https://www.wpbeginner.com/glossary/multisite/) frá WP Beginner.
:::

## Uppsetning á viðbótinni {#installing-the-plugin}

Ultimate Multisite er fáanlegt ókeypis á [WordPress.org](https://wordpress.org/plugins/ultimate-multisite/).

Í **Network Admin Dashboard**, farðu í **Plugins → Add New Plugin**.

![Network Admin Add New Plugin síða](/img/installation/add-new-plugin.png)

Leitaðu að **"Ultimate Multisite"** (með gæsafjötrum fyrir nákvæma samsvörun) og það mun birtast sem fyrsta niðurstaðan. Smelltu á **Install Now**.

![Leitarniðurstöður sem sýna Ultimate Multisite](/img/installation/search-ultimate-multisite.png)

Þegar það er sett upp, smelltu á **Network Activate** til að virkja viðbótina í öllu netkerfinu þínu.

![Viðbót sett upp með Network Activate hnappi](/img/installation/plugin-installed.png)

Eftir virkjun verður þú sjálfkrafa beint á leiðsögukerfið (Setup Wizard).

![Viðbót virk og beind á leiðsögukerfið](/img/installation/plugin-activated.png)

## Leiðsögukerfi {#setup-wizard}

Leiðsögukerfið mun leiða þig í gegnum uppsetningu Ultimate Multisite á um 10 mínútum.

### Velkomin {#welcome}

Smelltu á **Get Started** til að hefja.

![Velkominn skjár leiðsögukerfisins](/img/installation/wizard-welcome.png)

### Foruppsetningarathugun {#pre-install-checks}

Þessi stig athugar kerfisupplýsingar þínar og WordPress uppsetningu til að tryggja að hún uppfylli kröfur Ultimate Multisite. Ef allt lítur vel út, smelltu á **Go to the Next Step**.

![Foruppsetningarathugun sem sýnir kerfisþörf](/img/installation/wizard-pre-install-checks.png)

:::note Network Activate hnappur (v2.6.1+)
Ef Ultimate Multisite var sett upp en **enn ekki virkjað í netinu** – til dæmis, ef þú smelltir á **Activate** (einstaklingssíða) frekar en **Network Activate** frá skjánum fyrir viðbótir í netinu – mun foruppsetningarathugunarstigið greina þetta og sýna **Network Activate** hnapp.

Þegar þú smellir á **Network Activate**, virkjar það viðbótina sjálfkrafa í öllu multisite netkerfinu þínu. Eftir virkjun heldur leiðsögukerfið áfram venjulega til næsta skrefa. Þú þarft ekki að yfirgefa leiðsögukerfið til að laga virkjunina.
:::

### Uppsetning {#installation}

Uppsetjarinn mun búa til nauðsynlegu gagnagrunnstöflurnar og setja upp `sunrise.php` skrána sem Ultimate Multisite þarf til að virka. Smelltu á **Install** til að halda áfram.

![Uppsetningarstig sem sýnir gagnagrunnstöflur og sunrise.php](/img/installation/wizard-installation.png)

### Fyrirtækið þitt {#your-company}

Fylltu út upplýsingar um fyrirtækið þitt og stilltu sjálfgefið gjaldmiðil. Þessar upplýsingar verða notaðar í gegnum WaaS (Website as a Service) kerfið þitt. Smelltu á **Continue** þegar þú ert búinn.

![Fyrirtækisuppsetningarstig](/img/installation/wizard-your-company.png)

### Sjálfgefið efni {#default-content}

Þetta stig gerir þér kleift að setja upp fyrirfram skilgreindar sniðmátar, vörur og annað byrjunarefni. Þetta er frábær leið til að kynnast eiginleikum Ultimate Multisite. Smelltu á **Install** til að bæta við sjálfgefu efni eða slepptu þessu stigi ef þú vilt hefja frá grunni.

![Uppsetning sjálfgefins efnis](/img/installation/wizard-default-content.png)

### Mæltu viðbótir {#recommended-plugins}

Valkvæmt er að setja upp mæltar tengdviðbótir. Smelltu á **Install** til að bæta þeim við eða slepptu þessu stigi til að halda áfram.

![Mæltu viðbótir stig](/img/installation/wizard-recommended-plugins.png)

### Tilbúið! {#ready}

Það er allt! Uppsetningin á Ultimate Multisite er lokið. Þú getur nú byrjað að byggja upp Website as a Service kerfið þitt frá **Network Admin Dashboard**.

![Uppsetning lokið - Tilbúinn skjár](/img/installation/wizard-ready.png)

![Network Admin Dashboard með virkri Ultimate Multisite](/img/installation/network-dashboard.png)

Farðu í gang og skemmtu þér!
