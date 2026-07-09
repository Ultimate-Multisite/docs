---
title: Breytingaskrá VSK
sidebar_position: 99
_i18n_hash: 6a39ef4779b6ed52a08804c75ca25fc9
---
# VAT-breytingaskrá

Útgáfa 1.0.7 - Gefin út 2026-02-03

* Lagfæring: Þýsk (DE) VAT-númer féllu á staðfestingu vegna MS_MAX_CONCURRENT_REQ-villna í VIES SOAP-þjónustunni. Skipt var úr eldri SOAP API yfir í opinbera EU VIES REST API fyrir áreiðanlegri staðfestingu.
* Lagfæring: VAT-númer eru nú samþykkt þegar VIES-þjónustan er tímabundið óaðgengileg, í stað þess að þeim sé ranglega hafnað. Skráningarfærsla er búin til fyrir síðari yfirferð.
* Lagfæring: VAT/Tax ID-reiturinn er nú sýnilegur fyrir öll lönd, ekki aðeins aðildarríki ESB. Skattnúmer utan ESB (t.d. svissnesk CHE-númer) eru vistuð til birtingar á reikningum án VIES-staðfestingar.
* Lagfæring: Uppfletting VAT-forskeytis fyrir Grikkland (GR), Mónakó (MC) og Mön (IM) var biluð vegna rangrar rökvísi við uppflettingu í fylki.
* Umbót: Óþarfa wp-cli-bundle þróunarháð var fjarlægt, sem gat valdið alvarlegum villum þegar það var notað samhliða Site Exporter-viðbótinni.
* Umbót: Bætti við yfirgripsmiklu einingaprófasafni (53 próf).

Útgáfa 1.0.6 - Gefin út 2026-01-25

* Lagfæring: Innlend B2B-viðskipti rukka nú VAT rétt. Samkvæmt VAT-reglum ESB gildir öfug skattlagning aðeins um B2B-viðskipti yfir landamæri, ekki þegar land viðskiptavinarins samsvarar landi fyrirtækisins.

Útgáfa 1.0.5 - Gefin út 2026-01-22

* Lagfæring: Viðbót hlóðst ekki inn eða virkaði ekki rétt.
* Breyting: Skipt var um gagnagjafa fyrir VAT-hlutföll úr euvatrates.com yfir í ibericode/vat-rates-geymsluna fyrir áreiðanlegri og virkt viðhaldin gögn.
* Lagfæring: Leiðrétt innsláttarvilla í option-gildi super_reduced_rates.
* Umbót: Bætti við null-athugunum fyrir meðhöndlun landskóða til að koma í veg fyrir villur.
* Breyting: Fjarlægði meðfylgjandi þýðingarskrár í þágu sjálfvirkra uppfærslna í gegnum Traduttore.

Útgáfa: 1.0.3 - Gefin út 2025-09-28

* Endurnefna forskeyti í ultimate-multisite; uppfæra text domain; hækka útgáfu.

Útgáfa 1.0.0-beta.4 - 2021-09-24

* Bætt við: sía wp_ultimo_skip_network_active_check fyrir uppsetningar byggðar á mu-plugins;

Útgáfa 1.0.0 - 05/08/2021 - Fyrsta útgáfa
