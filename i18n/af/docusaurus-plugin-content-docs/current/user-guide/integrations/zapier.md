---
title: Zapier Integrasie
sidebar_position: 12
_i18n_hash: 4e43dfd722f07de3048b552c8f7b962f
---
# Integrasie van Ultimate Multisite met Zapier

In een van die artikels het ons oor [Webhooks](webhooks.md) gesels en hoe dit gebruik kan word om met derde-party toepassings te integreer.

Die gebruik van webhooks is bietjie ingewikkeld, aangesien dit gevorderde kennis van kodering en die vang van payloads vereis. Die gebruik van **Zapier** is egter 'n manier vir jou om dit te omseil.

Zapier het integrasie met meer as 5000+ toepassings, wat die kommunikasie tussen verskillende toepassings makliker maak.

Jy kan **Triggers** skep wat geaktiveer word wanneer gebeure op jou netwerk plaasvind (bv. 'n rekening word geskep en die `account_create` gebeurtenis trig) of **Actions** genereer op jou netwerk wat reageer op eksterne gebeure (bv. 'n nuwe rekeninglidmaatskap in jou Ultimate Multisite netwerk skep).

Dit is moontlik omdat **Ultimate Multisite Zapier's triggers** en aksies aangedryf word deur die [REST API](https://developer.ultimatemultisite.com/api/docs/).

## Hoe om te begin

Eerstens, soek na Ultimate Multisite in die Zapier-toepassingslys. Alternatief kan jy op [hierdie skakel](https://zapier.com/apps/wp-ultimo/integrations) klik.

Gaan na jou dashboard en druk op die **+** **Create Zap**-knoppie aan die linkerkantbalk om 'n nuwe Zap op te stel.

![Zapier dashboard with Create Zap button](/img/admin/webhooks-list.png)

Jy sal na die Zap-skepbladsy herlei word.

Tik "wp ultimo" in die soekbalk. Klik om die **Beta**-weergawe opsie te kies.

![Searching for WP Ultimo in Zapier app list](/img/admin/webhooks-list.png)

Nadat jy ons toepassing gekies het, kies die beskikbare gebeurtenis: **New Ultimate Multisite Event**.

![Selecting New Ultimate Multisite Event trigger](/img/admin/webhooks-list.png)

Nou moet ons Zapier toegang gee tot **jou netwerk**. Klik op **Sign in** sal 'n nuut venster oopmaak wat die **API credentials** vereis.

![Zapier Sign in prompt for API credentials](/img/admin/webhooks-list.png)

Gaan na jou netwerk-administrasiepaneel en navigeer na **Ultimate Multisite > Settings** > **API & Webhooks** en kyk na die API Settings-afdeling.

Kies die **Enable API**-opsie, aangesien dit vereis word vir hierdie verbinding om te werk.

![API Settings with Enable API option in Ultimate Multisite](/img/admin/webhooks-list.png)

Gebruik die **Copy to Clipboard**-ikoon op die API Key en API Secret velde en plak daardie waardes op die integrasie-skerm.

Op die URL-veld, plaas jou netwerk se volledige URL, insluitend die protokolle (HTTP of HTTPS).

![Zapier integration screen with API Key, Secret, and URL fields](/img/admin/webhooks-list.png)

Klik op die **Yes, Continue**-knoppie om na die volgende stap te beweeg. As alles goed werk, sal jy begroet word deur jou nuut gekoppelde rekening! Klik op **Continue** om 'n nuwe trigger te skep.

## Hoe om 'n nuwe Trigger te skep

Nou dat jou rekening gekoppel is, kan jy die beskikbare gebeurtenisse sien. Kom ons kies die **payment_received**-gebeurtenis vir hierdie tutorial.

![Selecting payment_received event in Zapier trigger](/img/admin/webhooks-list.png)

Sodra die gebeurtenis geselekteer is en jy klik op **continue**, sal 'n **teststap** verskyn.

![Zapier test step for the trigger](/img/admin/webhooks-list.png)

In hierdie fase sal Zapier toets of jou Zap die spesifieke **payload vir daardie gebeurtenis kan ophaal**. In toekomstige gebeurtenisse van dieselfde tipe, sal inligting met hierdie dieselfde struktuur gestuur word.

![Zapier trigger test completed successfully with payload](/img/admin/webhooks-list.png)

In ons tutorial was die toets **completed successfully** en het dit die voorbeeld-inligting van die payload teruggegee. Hierdie voorbeeld-inligting sal nuttig wees om ons te lei terwyl ons aksies skep. Jou trigger is nou geskep en gereed om gekoppel te word aan ander toepassings.

## Hoe om Actions te skep

Actions gebruik inligting van ander triggers om nuwe items in jou netwerk te skep.

By die **skep van 'n aksie-stap** sal jy Ultimate Multisite **Beta** en die opsie **Create Items on Ultimate Multisite** kies.

![Creating an action with Create Items on Ultimate Multisite](/img/admin/webhooks-list.png)

In die volgende stap sal jy óf jou outentisering skep, net soos ons in **Hoe om te begin** gedoen het, óf 'n geskepde outentisering kies. In hierdie tutorial sal ons dieselfde outentisering kies wat voorheen geskep is.

![Selecting authentication for the Zapier action](/img/admin/webhooks-list.png)

### Opstel van die Aksie

Dit is die **hoofstap van die aksie** en hier is dinge 'n bietjie anders. Die eerste inligting wat jy sal kies, is die **Item**. Item is die **inligtingmodel** van jou netwerk soos **Customers, Payments, Sites, Emails** en ander.

![Choosing Item type for the Zapier action](/img/admin/webhooks-list.png)

Wanneer jy 'n item kies, sal die formulier **herrangskik om die vereiste en opsionele velde** vir die gekose item te bring.

Byvoorbeeld, wanneer jy die item **Customer** kies, sal die formveld alles bring wat nodig is om 'n nuwe Klant in die netwerk te skep.

![Customer item fields in Zapier action setup](/img/admin/webhooks-list.png)

Nadat jy al die velde wat gemerk is as **required** invul en op continue klik, sal 'n laaste skerm jou die ingevulde velde en die velde wat onvoltooid is, wys.

![Zapier action test showing filled and unfilled fields](/img/admin/webhooks-list.png)

Sodra jou toets voltooi en suksesvol is, is jou aksie gekonfigureer. Dit is ook belangrik om op jou netwerk te kyk of die item met die toets van jou aksie geskep is.
