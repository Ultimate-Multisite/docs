---
title: Zapier Integrazioa
sidebar_position: 12
_i18n_hash: 7f23136e0e69417e244a9930f9620e95
---
# Ultimate Multisite-aren Zapierarekin integratzen

Artikulu battenan, [Webhooks](webhooks.md) eta horiek non-langide aplikazioetararekin integratzeko erabiltzea eztabadu.

Webhooks erabilizkileko da bitoreagoa, koska code-aren eta payload-ak hartzeko advanced jakinarazpena behar du. **Zapier** da modu bat da zerbait horrek gaindira.

Zapier-ek 5000+ aplikazioarekin integrazioa dago, zehazki aplikazio arteko komunikazioa eraginkoratzen du.

Zerbitzuak (Triggers) sortu dezakezu, zein irudienetan ezarritzen dira network-an gebeurtasun guztiak (adibidez, kontua sortzea eta `account_create` irudia sortzea) edo zerbait ekstergo gebeurtasunez eragiten Akitera (adibidez, Ultimate Multisite network-an irudi berria kontu sortzea).

Hau posible da because **Ultimate Multisite Zapier's triggers** eta actionsak [REST API](https://developer.ultimatemultisite.com/api/docs/) batekin erabiliz dira.

## Zerren ditu

Lehenik, Ultimate Multisitea Zapier aplikazio listan bilatu. Alternatiboa, hailei honetatik klik egin dezakezu [hor linkuaren](https://zapier.com/apps/wp-ultimo/integrations).

Dashboardra jarraitu eta eskurri-batera (left sidebar) **+** **Create Zap** botoia dituzteko da, irudi sortzeko.

![Zapier dashboard with Create Zap button](/img/admin/webhooks-list.png)

Sortu Zapa-ren eskurri egiten dira.

Bilatu testu-boxan "wp ultimo" eta **Beta** bertsio opsioa aukeratzeko klik egin.

![Searching for WP Ultimo in Zapier app list](/img/admin/webhooks-list.png)

Aplikazioa aukeratuta, irudiak dituzten gebeurtasuna aukeratu: **New Ultimate Multisite Event**.

![Selecting New Ultimate Multisite Event trigger](/img/admin/webhooks-list.png)

Aurrera egin behar da Zapier-rek **network-era** erabiliz lehenik. **Sign in** an klikileak irudi berria aukeratzen du, non **API credentials** behar dira.

![Zapier Sign in prompt for API credentials](/img/admin/webhooks-list.png)

Goi zure network admin panelera irigatu **Ultimate Multisite > Settings** > **API & Webhooks** eta API Settings seksioa aldiru.

**Enable API** opsioa aukeratu, nahiz lehiak konektazioa funtzionatzeko beharrezkoa da.

![API and Webhooks settings with API Settings and Enable API options](/img/admin/settings-api-webhooks.png)

API Key eta API Secret lekuetan **Copy to Clipboard** ikonia erabilu eta horiek ermelduko jardueraren ekranean jarri.

URL lekuan, protocoloa (HTTP edo HTTPS) barne sartu zure network oso URL-a.

![Zapier integration screen with API Key, Secret, and URL fields](/img/admin/webhooks-list.png)

**Yes, Continue** botoia klikatu, irrenditua lehen urtsuaren jarraituz. Hau guztiz ondo jakin dira, zure akunak berria konektatuta dagoela! **Continue** klikatu da bere triggera berragarri egiteko.

## Trigger berria ereintzea

Akountak konektatuta dagoenean, erabilgarri dituzten esaiak ikusten duzu. Hau tutorialaren bitartean **payment_received** esaiak aukeratu.

![Selecting payment_received event in Zapier trigger](/img/admin/webhooks-list.png)

Esaiak aukeratuta dagoenean eta **continue** klikatu duenean, **test step** bat erabiliko da.

![Zapier test step for the trigger](/img/admin/webhooks-list.png)

Hau fasean, Zapier aurkituko da iragazlearen (payload) **besteko esai zehatza aurkitu dezake** edo ez du. Beste esaiak berriro, hori pareko estructuraarekin informazioa bidali da.

![Zapier trigger test completed successfully with payload](/img/admin/webhooks-list.png)

In our tutorial the test was **completed successfully** and returned the payload example information. This example information will be useful to guide us while creating actions. Your trigger is now created and ready to be connected to other applications.

## Tindear Actions (Actions) ez dauden

Tindear Actions (Actions) erabiltzen ditu beste trigger-ek informazioa erabiliz eta network-ean irudien berriak sortzeko.

**Action step sortzen** prozesuan, Ultimate Multisite **Beta**-koa eta **Create Items on Ultimate Multisite** opsioak aukeratu duzu.

![Creating an action with Create Items on Ultimate Multisite](/img/admin/webhooks-list.png)

Aurrerako etapaz, autentifikazioa sortzen duzu, **How to start**-an egin zuen bezala, edo sortutako autentifikazio bat aukeratu duzu. Hau tutorial-ean sortutako autentifikazioa aukeratu dugu.

![Selecting authentication for the Zapier action](/img/admin/webhooks-list.png)

### Action Sortzen (Setting up the Action)

Hau da **action-aren lehen etapua** eta aipatzen da, hian gertunak ahazko dira. Lehen informazioa aukeratu duzu da **Item**. Item da network-aren informazio modela, for example **Customers, Payments, Sites, Emails** eta beste batzuk.

![Choosing Item type for the Zapier action](/img/admin/webhooks-list.png)

Item bat aukeratzen duenean, forma hau aukeratu item-eko **besak beharrezko eta opzioak** bringatzeko reorganizazioa egin du.

Adibidez, **Customer** itema aukeratu duenean, forma-ren besak beharrezko dauden guztia bringatzen du, network-ean Customer berria sortzeko beharrezkoa izango da.

![Customer item fields in Zapier action setup](/img/admin/webhooks-list.png)

**Beharrezko** markatutako guztia amaitu eta konturu egin ondoren, lehen ekrida hau aukeratu besak eta ez dagoen besak erakusten du.

![Zapier action test showing filled and unfilled fields](/img/admin/webhooks-list.png)

Testu ama konponazioa iragatik eta bere sukses bat izan zenenean, aksiak (action) hori konfiguratuta dago. Atao ere network-an kontrolatu behar duzu zerbait ez daiteke testuaren bidez sortutako elementua izan dion.
