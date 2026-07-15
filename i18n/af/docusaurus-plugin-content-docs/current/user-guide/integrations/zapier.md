---
title: Zapier-integrasie
sidebar_position: 12
_i18n_hash: 7f23136e0e69417e244a9930f9620e95
---
# Integrasie van Ultimate Multisite met Zapier

In een van die artikels het ons [Webhooks](webhooks.md) bespreek en hoe dit gebruik kan word om met derdeparty-toepassings te integreer.

Die gebruik van webhooks is ’n bietjie ingewikkeld, aangesien dit gevorderde kennis van kodering en die vasvang van payloads vereis. Die gebruik van **Zapier** is ’n manier vir jou om dit te omseil.

Zapier het integrasie met meer as 5000+ apps, wat kommunikasie tussen verskillende toepassings makliker maak.

Jy kan **Triggers** skep wat geaktiveer sal word wanneer gebeure op jou netwerk plaasvind (bv. ’n Account word geskep en aktiveer die account_create-gebeurtenis) of **Actions** op jou netwerk genereer wat op eksterne gebeure reageer (bv. skep ’n nuwe Account-lidmaatskap in jou Ultimate Multisite-netwerk).

Dit is moontlik omdat **Ultimate Multisite Zapier se triggers** en actions deur die [REST API](https://developer.ultimatemultisite.com/api/docs/) aangedryf word.

## Hoe om te begin {#how-to-start}

Soek eers na Ultimate Multisite in die Zapier-applys. Alternatiewelik kan jy op [hierdie skakel](https://zapier.com/apps/wp-ultimo/integrations) klik.

Gaan na jou dashboard en druk die **+** **Create Zap**-knoppie op die linker sybalk om ’n nuwe Zap op te stel.

![Zapier-dashboard met Create Zap-knoppie](/img/admin/webhooks-list.png)

Jy sal na die Zap-skeppingsblad herlei word.

Tik "wp ultimo" in die soekkassie. Klik om die **Beta**-weergawe-opsie te kies.

![Soek na WP Ultimo in Zapier-applys](/img/admin/webhooks-list.png)

Nadat jy ons app gekies het, kies die beskikbare gebeurtenis: **New Ultimate Multisite Event**.

![Kies New Ultimate Multisite Event-trigger](/img/admin/webhooks-list.png)

Nou moet ons Zapier toegang tot **jou netwerk** gee. Deur op **Sign in** te klik, sal ’n nuwe venster oopmaak wat die **API credentials** vereis.

![Zapier Sign in-porboodskap vir API credentials](/img/admin/webhooks-list.png)

Gaan na jou netwerk-administrasiepaneel en navigeer na **Ultimate Multisite > Settings** > **API & Webhooks** en soek die API Settings-afdeling.

Kies die **Enable API**-opsie, aangesien dit vereis word sodat hierdie verbinding kan werk.

![API and Webhooks-instellings met API Settings- en Enable API-opsies](/img/admin/settings-api-webhooks.png)

Gebruik die **Copy to Clipboard**-ikoon op die API Key- en API Secret-velde en plak daardie waardes op die integrasieskerm.

In die URL-veld, plaas jou netwerk se volledige URL, insluitend die protokol (HTTP of HTTPS).

![Zapier-integrasieskerm met API Key-, Secret- en URL-velde](/img/admin/webhooks-list.png)

Klik die **Yes, Continue**-knoppie om na die volgende stap te gaan. As alles reg werk, behoort jy deur jou nuwe gekoppelde Account begroet te word! Klik **Continue** om ’n nuwe trigger te skep.

## Hoe om ’n nuwe Trigger te skep {#how-to-create-a-new-trigger}

Noudat jou Account gekoppel is, kan jy beskikbare gebeure sien. Kom ons kies die **payment_received**-gebeurtenis vir hierdie tutoriaal.

![Kies payment_received-gebeurtenis in Zapier-trigger](/img/admin/webhooks-list.png)

Sodra die gebeurtenis gekies is en jy op **continue** klik, sal ’n **test step** verskyn.

![Zapier-test step vir die trigger](/img/admin/webhooks-list.png)

In hierdie stadium sal Zapier toets of jou Zap die **spesifieke payload vir daardie gebeurtenis kan haal**. In toekomstige gebeure van dieselfde tipe sal inligting met dieselfde struktuur gestuur word.

![Zapier-trigger-toets suksesvol voltooi met payload](/img/admin/webhooks-list.png)

In ons tutoriaal is die toets **suksesvol voltooi** en het die payload-voorbeeldinligting teruggestuur. Hierdie voorbeeldinligting sal nuttig wees om ons te lei terwyl ons actions skep. Jou trigger is nou geskep en gereed om aan ander toepassings gekoppel te word.

## Hoe om Actions te skep {#how-to-create-actions}

Actions gebruik inligting van ander triggers om nuwe inskrywings in jou netwerk te skep.

In die **skep van ’n action-stap** sal jy die Ultimate Multisite **Beta** kies en die opsie **Create Items on Ultimate Multisite**.

![Skep ’n action met Create Items on Ultimate Multisite](/img/admin/webhooks-list.png)

In die volgende stap sal jy óf jou verifikasie skep, net soos ons in **Hoe om te begin** gedoen het, óf ’n geskepte verifikasie kies. In hierdie tutoriaal sal ons dieselfde verifikasie kies wat voorheen geskep is.

![Kies verifikasie vir die Zapier-action](/img/admin/webhooks-list.png)

### Stel die Action op {#setting-up-the-action}

Dit is die **hoofstap van die action** en hier is dinge ’n bietjie anders. Die eerste inligting wat jy sal kies, is die **Item**. Item is die **inligtingsmodel** van jou netwerk, soos **Customers, Payments, Sites, Emails** en ander.

![Kies Item-tipe vir die Zapier-action](/img/admin/webhooks-list.png)

Wanneer jy ’n item kies, sal die vorm **herrangskik om die vereiste en opsionele velde** vir die gekose item te bring.

Byvoorbeeld, wanneer jy die item **Customer** kies, sal die vormvelde alles bring wat nodig is om in te vul om ’n nuwe Customer in die netwerk te skep.

![Customer-itemvelde in Zapier-action-opstelling](/img/admin/webhooks-list.png)

Nadat jy alle velde wat as **required** gemerk is ingevul het en op continue geklik het, sal ’n laaste skerm vir jou die ingevulde velde en die velde wat oningevul gelaat is wys.

![Zapier-action-toets wat ingevulde en oningevulde velde wys](/img/admin/webhooks-list.png)

Sodra jou toets voltooi en suksesvol is, is jou action gekonfigureer. Dit is ook belangrik om op jou netwerk te kontroleer of die item met die toets van jou action geskep is.
