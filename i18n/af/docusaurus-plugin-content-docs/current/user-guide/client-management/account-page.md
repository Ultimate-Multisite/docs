---
title: Klantrekeningblad
sidebar_position: 14
_i18n_hash: 5eabf7a1ac4c1e867c6e627bbf1f2954
---
# Jou Kliënt se Rekeningblad (v2)

_**BELANGRIKIEKE OPMERKING: Hierdie artikel verwys na Ultimate Multisite weergawe 2.x.**_

Wanneer kliënte 'n plan op jou netwerk inteken, kry hulle toegang tot 'n webwerf en sy dashboard met belangrike inligting oor hul betalings, lidmaatskappe, domeine, planbeperkings, ens...

In hierdie tutorieel sal ons jou lei deur die kliënt se rekeningblad en jy sal sien wat jou kliënte daarin kan sien en doen.

## Die Rekeningblad

Die rekeningblad is toeganklik deur op **Account** in jou kliënt se dashboard te klik.

![Account menu in the customer dashboard](/img/account-page/account-menu.png)

![Customer account page overview](/img/account-page/overview.png)

Nadat 'n kliënt daarop klik, sal hulle 'n oorsig van hul lidmaatskap, faktuuradres, fakture, domeine, webwerfbeperkings, ens., sien en sal ook in staat wees om die ****Site Template** te verander (indien dit in jou netwerk toegelaat word)**.

Hulle kan ook die lidmaatskap na 'n ander plan verander, of 'n ander pakket of diens wat jy aanbied, koop. Kom ons kyk na elke afdeling afsonderlik.

### Jou Lidmaatskap Oorsig:

Die eerste blok reg onder jou kliënte se webwerfnaam toon 'n oorsig van hul huidige plan en dienste/pakkette wat daarmee gekoop is. Die blok toon ook die lidmaatskapnommer, die aanvanklike bedrag wat daarvoor betaal is, hoeveel die plan en enige diens/pakket kos, en hoeveel keer hulle vir hierdie lidmaatskap gefaktureer is. Hulle kan ook sien of die lidmaatskap **Active** , **Expired** of **Canceled** is.

![Membership overview showing plan, amount, and billing details](/img/account-page/membership-card.png)

Reg onder hierdie blok kan jou kliënte die **About This Site** en die **Site Limits** blokke sien. Hierdie blokke wys vir hulle al die beperkings wat by hul plan aankom: skijfspasie, plase, bladsye, besoeke, ens... Hierdie beperkings kan op elke planblad op **Ultimate Multisite > Products** gekonfigureer word.

![About This Site and Site Limits blocks showing plan limitations](/img/account-page/site-limits.png)

Aan die regterkant van **Your Membership** , kan kliënte op **Change** klik. Dit sal vir hulle al die beskikbare planne en pakkette/dienste wys. As hulle 'n ander plan kies, sal die beperkings vir die plan in plaas van die huidige beperkings van die lidmaatskap geld - dit maak nie saak of hulle afgradeer of opgradeer nie.

Nou, as jou kliënte besluit om pakkette of dienste vir hierdie huidige lidmaatskap te koop - soos meer skijfspasie of besoeke - sal die huidige lidmaatskap nie verander word nie, maar slegs die nuwe pakkette sal daaraan bygevoeg word.

Let wel dat kortingskodes nie op hierdie lidmaatskapveranderingsblad bygevoeg kan word nie. As die kliënt 'n kortingskode op die eerste lidmaatskapaankoop gebruik het, sal die kode ook op hierdie nuwe lidmaatskap van toepassing wees.

### Opdatering van die Faktuuradres:

Op die rekeningblad kan jou kliënte ook hul faktuuradres opdateer. Hulle hoef net op **Update** te klik langs _Billing Address_.

![Billing Address section with Update button](/img/account-page/billing-address.png)

'n Nuut venster sal vir jou kliënt verskyn. Alles wat hy hoef te doen, is om die nuwe adres in te vul en op _Save Changes_ te klik.

![Update billing address form](/img/account-page/billing-address-form.png)

### Verandering van die Site Template:

Om jou kliënte in staat te stel om hul webwerf-templates te verander, moet jy na **Ultimate Multisite > Settings > Sites** gaan en die opsie **Allow Template Switching** aan skakel.

Verder, op **Ultimate Multisite > Products**, kies jou planne en gaan na die **Site Templates** tab. Maak seker dat die opsie **Allow Site Templates** aan geskakel is en op **Site Template Selection Mode** , word die opsie **Choose Available Site Templates** geselekteer.

![Product site templates tab with template selection mode](/img/config/product-site-templates.png)

Jy sal al die beskikbare webwerf-templates op jou webwerf kan sien. Kies watter een jy beskikbaar wil maak en watter een jy nie wil hê jou kliënte wat onder hierdie plan ingeskryf is, beskikbaar moet hê nie. Let wel dat hierdie opsie ook die checkout-formulier beïnvloed, dus enige template wat as **Not Available** gekies word, sal nie op die registrasieblad vir hierdie plan verskyn nie.

Nou kan jou kliënte op **Change Site Template** klik binne hul rekeningblad.

![Change Site Template button on account page](/img/account-page/change-template-button.png)

Ultimate Multisite 2.10.0 toon 'n herontwerpte template-skakelaar paneel. Die paneel begin met 'n **current-template card** sodat kliënte kan sien watter template aktief is voordat hulle 'n vervanger kies.

'n Aanhoudende rooster van beskikbare webwerf-templates bly sigbaar terwyl kliënte hul opsies deurkyk. Dit help hulle om die templates wat vir hul plan toegelaat is te vergelyk sonder om die huidige keuse uit sig te verloor.

![Available site templates list for the plan](/img/config/site-templates-list.png)

Nadat hulle die een wat hulle wil verander gekies het, sal hulle gevra word om die verandering te bevestig.

![Site template switch confirmation dialog](/img/account-page/template-switch-confirm.png)

Nadat die bevestiging aan geskakel en op **Process Switch** geklik is, sal die nuwe webwerf-template op jou kliënt se webwerf gebruik word.

Kliënte kan ook **Reset current template** van hierdie paneel gebruik wanneer hulle die webwerf terug na die tans toegewysde template wil reset. Soos met die skakeling na 'n ander template, kan die herstel van 'n template webwerf-inhoud oorwrit, dus moet kliënte dit slegs bevestig wanneer hulle die herstelaksie verstaan.

### Byvoeging van Pasgemaakte Domeine:

Jou kliënte sal ook die opsie hê om 'n pasgemaakte domein vir hierdie plan op hul rekeningblad by te voeg. Om jou kliënte toe te laat om pasgemaakte domeine te gebruik, gaan na **Ultimate Multisite > Settings >** **Domain Mapping**.

Skakel die opsie **Enable Domain Mapping** aan. Dit sal jou kliënte toelaat om pasgemaakte domeine op 'n netwerkvlak te gebruik.

Moenie vergeet om ook te kyk of die domeinmapping op produkbasis ingeskakel is - want jy kan 'n produk beperk om jou kliënte te verhinder om pasgemaakte domeine te gebruik.

Gaan na **Ultimate Multisite > Products**. Kies die plan van jou keuse en gaan na die **Custom Domains** tab. Skakel die opsie **Allow Custom Domains** aan.

![Custom Domains tab with Allow Custom Domains toggle](/img/config/product-custom-domains.png)

Dit sal alle kliënte wat aan hierdie spesifieke plan ingeskryf is, toelaat om pasgemaakte domeine te gebruik. Nou, op die Rekeningblad, kan jou kliënte 'n pasgemaakte domein byvoeg deur op **Add Domain** te klik.

![Add Domain button on the account page](/img/account-page/add-domain-button.png)

Die eerste venster wat oopmaak, sal jou kliënte 'n boodskap wys wat hulle instruksies gee oor hoe om hul DNS-rekords op te dateer om hierdie pasgemaakte domein op jou netwerk te laat werk.

![DNS instructions shown when adding a custom domain](/img/account-page/add-domain-dns.png)

Hierdie boodskap kan (deur jou) op **Ultimate Multisite > Settings > Domain Mapping > Add New Domain Instructions** bewerk word.

![Add New Domain Instructions setting in Domain Mapping](/img/config/settings-domain-mapping.png)

Hier is 'n volledige uitsig van die domeinmapping-instellingsblad:

![Domain mapping settings full page](/img/config/settings-domain-mapping-full.png)

Nadat jy op **Next Step** klik, kan jou kliënte hul pasgemaakte domeinnaam byvoeg en kies of hierdie pasgemaakte domein die primêre een sal wees. Let wel dat jou kliënte meer as een pasgemaakte domein vir hul webwerwe kan gebruik, dus kan hulle kies watter een die primêre een sal wees.

![Custom domain name entry with primary domain option](/img/account-page/add-domain-primary.png)

Nadat op **Add Domain** geklik is, sal die domein by jou kliënt se rekening bygevoeg word. Alles wat hulle nou hoef te doen, is om die DNS-rekords van hierdie pasgemaakte domein by hul domeinregistreur te verander.

### Verandering van Wenkwoord:

Binne die rekeningdashboard kan jou kliënte ook hul wagwoord verander deur op **Change Password** te klik.

![Change Password button on account page](/img/account-page/change-password-button.png)

Dit sal 'n nuwe venster wys waar jou kliënte hul huidige wagwoord moet invul en dan die nuwe wagwoord wat hulle wil gebruik.

![Change password form with current and new password fields](/img/account-page/change-password-form.png)

### Gevaarlike Gebied:

Ons het ook twee opsies wat op die **Danger Zone** deel getoon word: **Delete Site** en **Delete Account**. Hulle is albei op die Danger Zone deel omdat hierdie twee aksies onherroepelik is. As jou kliënte hul webwerf of hul rekening verwyder, kan hulle dit nie herstel nie.

![Danger Zone with Delete Site and Delete Account options](/img/account-page/danger-zone.png)

As jou kliënte op enige van hierdie twee opsies klik, sal hulle 'n venster getoon word waar hulle die opsie moet skakel om die webwerf of rekening te verwyder en hulle sal gewaarsku word dat hierdie aksie nie teruggedra word nie.

![Delete Site confirmation dialog](/img/account-page/delete-site-confirm.png)

![Delete Account confirmation dialog](/img/account-page/delete-account-confirm.png)

As hulle hul webwerf verwyder, sal hul rekening en lidmaatskap steeds ongemoeid wees. Hulle sal net al die inhoud op hul webwerf verloor. As hulle hul rekening verwyder, sal al webwerwe, lidmaatskappe en inligting rakende hierdie rekening verlore wees.
