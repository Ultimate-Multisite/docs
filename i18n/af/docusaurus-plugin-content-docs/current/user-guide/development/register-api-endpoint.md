---
title: Registreer API-eindpunt
sidebar_position: 6
_i18n_hash: 8d9b47668bce413a2466cf2b1c37d2cf
---
# Die Ultimate Multisite Register API-eindpunt {#the-ultimate-multisite-register-api-endpoint}

In hierdie tutorie sal u leer hoe om die Ultimate Multisite /register API-eindpunt te gebruik om die hele aanmeldingsproses vir 'n nuwe kliënt in u netwerk te skep, en hoe om dit te doen met Zapier.

Die eindpunt gebruik die POST-metode en word deur die URL _**https://yoursite.com/wp-json/wu/v2/register**_ aangeroep. In hierdie oproep sal 4 prosesse binne u netwerk uitgevoer word:

*   'n Nuwe WordPress-gebruiker of sy identifikasie via die gebruikers-ID sal geskep word.

*   'n Nuwe Kliënt in Ultimate Multisite of sy identifikasie via die kliënt-ID sal geskep word.

*   'n Nuwe webwerf op die WordPress-netwerk sal geskep word.

*   Ten slotte sal 'n nuwe Lidmaatskap in Ultimate Multisite geskep word.

Vir hierdie proses sal u u API-kredensiele benodig. Om dit te kry, gaan na u netwerk-administrasiepaneel, navigeer na **Ultimate Multisite > Settings** > **API & Webhooks**, en kyk na die API Settings-afdeling.

![API Settings section in Ultimate Multisite](/img/config/settings-api.png)

Hier is 'n volledige uitsig van die API-instellingsblad:

![API settings full page](/img/config/settings-api-full.png)

Kies **Enable API** en kry u API-kredensiele.

Kom nou, kom ons verken die eindpunt en skep dan 'n registrasieaksie in Zapier.

## Eindpunt-liggaamparameters {#endpoint-body-parameters}

Kom ons kyk na 'n oorsig van die minimuminligting wat ons na die eindpunt moet stuur. Aan die einde van hierdie artikel vind u die volledige oproep.

### Customer {#customer}

Dit is die inligting wat nodig is vir die proses van die skep van die Gebruiker en die Ultimate Multisite Kliënt:

"customer_id" : integer

Dit is moontlik om die kliënt-ID wat in u netwerk geskep is, te stuur. Indien nie ingegee nie, sal die inligting hieronder gebruik word om 'n nuwe kliënt en 'n nuwe WordPress-gebruiker te skep. Die gebruikers-ID kan ook op dieselfde manier as die kliënt-ID gestuur word.

"customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", },

### **Membership** {#membership}

Die enigste inligting wat ons binne hierdie objek benodig, is die Lidmaatskapstatus.

"membership" { "status" : "string", // een van "pending", "active", "trialing", "expired", "on-hold", "canceled" },

### **Products** {#products}

Produkte word gegee as 'n array met 1 of meer produk-ID's van u netwerk. Let op, hierdie eindpunt skep nie produkte nie. Raadpleeg Ultimate Multisite se dokumentasie om die produk-skep-eindpunt beter te verstaan.

**"products" : [1,2],**

### Betaling {#payment}

Soos met Lidmaatskap, benodig ons net die status.

**"payment" { "status" : "string", // een van "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "canceled" },**

### Site {#site}

En om die liggaam te sluit, benodig ons die webwerf se URL en Titel, albei binne die Site-objek.

**"site" : { "site_url" : "string", "site_title" : "string" }**

Die terugvoer van die register-eindpunt sal 'n array wees met die nuut geskepde lidmaatskapinligting.

## 'n Aksie in Zapier Skep {#creating-an-action-in-zapier}

Met die bekendstelling van hierdie nuwe en meer robuuste rekening-skep-eindpunt, sal u ook 'n nuwe aksie in Zapier sien.

Weet u hoe om en om alles te geniet wat die nuwe weergawe van Zapier bied? Leer meer hier. (link?)

### 'n Aksie Skep {#creating-an-action}

Om beter te illustreer hoe om die registrasie-eindpunt met Zapier te gebruik, kom ons skep 'n integrasie met Google Forms. Elke keer as hierdie form ingevul word en die inligting in die form se antwoordblad gestoor word, sal 'n nuwe lidmaatskap in die Ultimate Multisite netwerk geskep word.

Maak in Google Forms 'n form met die minimumvelde wat nodig is om 'n nuwe lidmaatskap in die netwerk te skep.

<!-- Screenshot unavailable: Google Forms form with fields for creating a new membership -->

Nou in Zapier, maak 'n nuwe Zap en koppel die geskepde form in Google aan die spreiwerk waar die data gestoor word.

<!-- Screenshot unavailable: Zapier trigger configuration connecting to Google Forms spreadsheet -->

Gedaan! Die Google Forms-form is gekoppel met Zapier en gereed om met die netwerk geïntegreer te word. Kom nou, kom ons beweeg na die Aksie wat as gevolg sal wees van die Trigger wat Google Forms elke keer wat dit ingevul word, aktiveer.

Lokaliseer die nuwe Ultimate Multisite-app en kies dit. Vir hierdie tipe Zap kies u die Register-opsie.

<!-- Screenshot unavailable: Zapier action selection showing Ultimate Multisite app with Register option -->

Na hierdie eerste stap, kies die rekening wat met hierdie Zap gekoppel sal word.<!-- Screenshot unavailable: Zapier account connection step for Ultimate Multisite -->

Dit is die mees sensitiewe deel van die hele proses. Ons moet die velde wat van Google Forms gekom het, pas met die minimumvelde wat nodig is vir die register-eindpunt, soos getoon in die vorige afdeling van hierdie artikel.

In hierdie voorbeeld het ons net die gebruikersnaam, e-pos, wagwoord, naam en URL van die webwerf nodig. Die res word vooraf bepaal sodat alle lidmaatskappe wat op hierdie Google Forms gegenereer word, dieselfde produk- en statuspatroon volg.

<!-- Screenshot unavailable: Zapier field mapping between Google Forms and Ultimate Multisite register endpoint -->

Met die inligting opgestel, gaan voort na die finale toets. Op die laaste skerm kan u al die velde sien wat na die eindpunt gestuur sal word, hul reswek inligting en die velde wat leeg gestuur sal word.<!-- Screenshot unavailable: Zapier test screen showing all fields to be sent to the register endpoint -->

Toets u nuwe Zap en dit behoort suksesvol te voltooi. Indien enige fout voorkom, kyk al die velde na en of hulle korrek gestuur word. Aangesien daar baie inligting is, kan sommige dinge onopgemerk bly.

### Volledige eindpuntparameters {#complete-endpoint-parameters}

Hier is die volledige oproep en al die moontlikhede van velde wat gestuur kan word.

"customer_id" : integer, "customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", }, "membership" : { "status" : "string", // een van "pending", "active", "trialing", "expired", "on-hold", "canceled" "date_expiration" : "string", "date_trial_end" : "string", "date_activated" : "string", "date_renewed" : "string", "date_cancellation" : "string", "date_payment_plan_completed": "string", }, "products" : [1,2], "duration" : "string", "duration_unit" : "string", "discount_code" : "string", "auto_renew" : "boolean", "country" : "string", "currency" : "string", "payment" { "status" : "string", // een van "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "canceled" }, "payment_method" : { "gateway" : "string", "gateway_customer_id" : "string", "gateway_subscription_id" : "string", "gateway_payment_id" : "string", }, "site" : { "site_url" : "string", "site_title" : "string", "publish" : "boolean", "template_id" : "string", }
