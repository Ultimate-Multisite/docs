---
title: Die Registrasieproses
sidebar_position: 3
_i18n_hash: ae01b241f684c1a85d93bdc765eec135
---
# Die Registrasieproses (v2)

_**BELANGRIKIEKE OPMERKING: Hierdie artikel verwys na Ultimate Multisite weergawe 2.x.**_

Gebruikers kan op verskillende maniere by jou netwerk registreer. Hulle kan jou registrasieformulier gebruik of 'n deelbare skakel na 'n voorafgekoese plan. Hier sal ons wys hoe jou kliënte op jou netwerk kan registreer met die beskikbare roetes en wat gebeur nadat hulle by jou netwerk geregistreer het.

## Gebruik van die Registrasieformulier:

Dit is die standaard registrasieproses. Jy skep 'n registasiebladsy met 'n **checkout form** en dit is waar jou kliënte sal gaan om op jou netwerk te registreer en vir 'n plan te inteken. Jy kan verskeie registasiebladsye hê, elkeen met 'n ander registrasieformulier as jy wil.

Die standaardbladsy vir registrasie is [_**yourdomain.com/register**_](http://yourdomain.com/register), maar jy kan dit enige tyd verander op **Ultimate Multisite > Settings > Login & Registration > Default Registration Page**.

Nadat 'n gebruiker by jou registasiebladsy aankom (gewoonlik deur op 'n **Sign in** of **Buy now** knoppie te klik), sal hulle jou registrasieformulier daar sien.

![Registration form displayed on the registration page](/img/frontend/registration-form.png)

Hier is 'n voorbeeld van die checkout form soos dit op die frontend verskyn:

![Frontend checkout registration form](/img/config/checkout-frontend-registration.png)

Alles wat hulle hoef te doen, is om al die verpligte velde in te vul – e-pos, gebruikersnaam, wagwoord, ens... – en vir die plan te betaal of hul e-posadres te bevestig as hulle vir 'n gratis plan of 'n betaalde plan met 'n proefperiode sonder betalingsinligting registreer.

Op die "Dankie" bladsy sal hulle 'n boodskap sien wat vir hulle sê of hulle hul e-posadres moet bevestig of of hul webwerf reeds geaktiveer is en hulle dit kan begin gebruik.

![Thank You page after registration](/img/frontend/registration-thank-you.png)

As 'n e-posadresbevestiging vereis word, moet hulle na hul e-posinbak gaan en op die verifikasielink klik. Hul webwerf sal nie geaktiveer word nie as hul e-posadres nie geverifieer word nie.

As hulle op 'n betaalde plan geregistreer het of die e-posverifikasie is nie verpligtend op jou netwerk nie, sal hulle hul webwerf onmiddellik na die checkout geaktiveer hê en sal 'n skakel getoon word om by hul dashboard in te teken.

![Site activated with link to sign in to dashboard](/img/frontend/site-activated.png)

## Gebruik van 'n Deelbare Skakel:

Die proses van registrasie met behulp van 'n deelbare skakel is basies dieselfde as die registrasieformulier; die enigste verskil is dat met die gebruik van 'n deelbare skakel, kan jou kliënte 'n produk of webwerf-sjabloon voorafgekoes op die checkout form hê (verwys na die afdeling Voorafkoes van produkte en sjablone via URL-parameters) of miskien 'n kuponkode bygevoeg (verwys na die afdeling Gebruik van URL-parameters).

Die registrasieproses sal dieselfde wees: hulle sal hoef hul naam, gebruikersnaam, e-posadres, webwerfnaam en titel, ens... in te vul, maar die plan of webwerf-sjabloon sal reeds vir hulle voorafgekoes wees.

### Registreer met Handmatige Betalings:

As jy nie wil gebruik om PayPal, Stripe of enige ander betalingshekwerk wat deur Ultimate Multisite of sy add-on-integrasies aangebied word nie, kan jy handmatige betalings vir jou kliënte gebruik. Op hierdie manier kan jy 'n faktuur vir hulle genereer om op jou verkiesde betalingsverwerker te betaal nadat hulle by jou netwerk geregistreer het.

Die registrasieproses sal presies dieselfde wees as hierbo, maar op die registasiebladsy sal jou kliënte 'n boodskap sien wat aandui dat hulle 'n e-pos sal ontvang met verdere instruksies om die betaling te voltooi.

![Manual payment message during registration](/img/frontend/registration-manual-notice.png)

En nadat die registrasie voltooi is, sal hulle die betalingsinstruksies sien wat jy ingestel het (en ook ontvang op hul e-pos).

![Payment instructions shown after registration](/img/frontend/registration-payment-instructions.png)

Die betalingsinstruksies kan verander word op **Ultimate Multisite > Settings > Payments** nadat jy die **Manual** betalingsopsie ingeskakel het:

![Manual payment toggle with payment instructions field](/img/config/manual-gateway-settings.png)

Nadat jou kliënte die handmatige betaling voltooi het en die bevestiging aan jou gestuur het, moet jy die betaling **handmatig bevestig** om die kliëntlidmaatskap en webwerf te aktiveer.

Om dit te doen, gaan na **Ultimate Multisite > Payments** en vind die kliëntbetaling. Dit moet steeds 'n **Pending** status toon.

![Payments list with pending manual payment](/img/admin/payments-list.png)

Klik op die betalingsnommer en jy sal in staat wees om die status na **Completed** te verander.

![Payment details page](/img/admin/payment-edit.png)

![Changing payment status to Completed](/img/admin/payment-status-completed.png)

Nadat jy die status na **Completed** verander het, moet jy 'n **Activate membership** boodskap sien. Skakel hierdie opsie **aan** om die lidmaatskap en webwerf wat met hierdie kliënt geassosieer is, te aktiveer. Klik dan om **Save Payment**.

![Activate membership toggle and Save Payment button](/img/admin/payment-activate-membership.png)

Jou kliënt moet nou toegang hê tot die dashboard en alle funksies waartoe hulle ingeskryf het.
