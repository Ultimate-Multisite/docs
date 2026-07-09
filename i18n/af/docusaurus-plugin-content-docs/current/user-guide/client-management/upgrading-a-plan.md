---
title: Opgradeer 'n Plan
sidebar_position: 11
_i18n_hash: 292fe52b63762d11e65c720ada133d39
---
# Opgradeer 'n Plan (v2) {#upgrading-a-plan-v2}

_**BELANGRIKIEKE OPMERKING: Hierdie artikel verwys na Ultimate Multisite weergawe 2.x.**_

Jou kliënte kan hul plan op enige tyd opgradeer. Hulle kan óf opgradeer na 'n ander plan óf enige bykomende dienste of pakkette koop wat jy op jou netwerk aanbied.

In hierdie handleiding gaan ons verduidelik hoe hulle hul plan kan opgradeer en wat gebeur nadat die opgraderingsproses voltooi is.

Om hul plan op te gradeer, moet jou kliënte na hul dashboard gaan en na die **Rekening**-bladsy gaan.

![Customer subsite dashboard with Account menu link visible](/img/account-page/account-menu.png)

Op die Rekening-bladsy sal hulle hul huidige lidmaatskap en die plan wat daarmee geassosieer is, sien. Om na 'n ander plan op te gradeer, moet hulle op **Verander** klik in die boonste-reghoek van die **Jou Lidmaatskap**-afdeling.

![Account page Your Membership card with Change button](/img/account-page/membership-change-button.png)

Hulle sal na 'n afrekenformulier herlei word waar al die beskikbare planne vertoon sal word.

Hulle sal ook die **dienste en pakkette wat beskikbaar is vir hul huidige plan** kan sien, indien hulle net 'n spesifieke diens of pakket wil koop (soos onbeperkte besoeke of skyfspasie in ons voorbeeld hier), en nie die plan wil opgradeer nie.

![Upgrade picker showing available plans and packages on the customer side](/img/account-page/upgrade-picker.png)

Nadat hulle die produk gekies het wat hulle wil koop, sal hulle sien hoeveel hulle nou moet betaal – minus enige bestaande krediet – en hoeveel hulle op die volgende faktuurdatum belas sal word.

Gewoonlik, as die produk 'n ander plan is en die betaling tussen 'n lidmaatskapheffing plaasvind, sal hulle 'n krediet ontvang vir die bedrag wat op die eerste plan betaal is.

![Upgrade payment summary showing credit applied and next billing amount](/img/account-page/upgrade-summary.png)

As hulle 'n plan of pakket kies wat niks verander nie van die huidige lidmaatskap, sal hulle 'n boodskap sien wat dit verduidelik.

![Notice when the selected plan does not change the subscription](/img/account-page/upgrade-no-change.png)

Nadat die afrekening voltooi is, sal die nuwe produk(te) by jou kliënte se rekening gevoeg word en al die beperkings of kenmerke van die nuwe produk(te) sal onmiddellik daaraan bygevoeg word: besoeke, skyfspasie, plase, ens...

##

##

## Opgradeer- en Afgradeerpaaie {#upgrade-and-downgrade-paths}

Op elkeen van jou produkte sal jy 'n **Op & Afgradeer**-tab hê. Die eerste opsie op daardie tab is 'n veld genaamd **Plan Groep**.

**Plan groepe** is wat Ultimate Multisite toelaat om te weet dat sekere planne tot dieselfde "familie" behoort, en daarom gebruik moet word om opgradeer/afgradeer padopsies te skep.

![Product edit Up and Downgrades tab with Plan Group field](/img/config/product-upgrades-plan-group.png)

Byvoorbeeld, jy het 'n **Gratis plan**, 'n **Basiese Plan** en 'n **Premium Plan** beskikbaar. Jy wil hê dat gebruikers wat onder die **Gratis Plan** geregistreer is, slegs na die **Premium Plan** kan opgradeer en jy wil nie hê dat hulle die "Basiese Plan" as 'n opgraderingsopsie moet sien nie. Alles wat jy hoef te doen, is om dieselfde plan groepsnaam vir beide Gratis en Premium planne toe te ken, soos getoon in die skermkiekieë hieronder.

![Free Plan product page with High End plan group assigned](/img/config/product-upgrades-free.png)

![Premium Plan product page with High End plan group assigned](/img/config/product-upgrades-premium.png)

Wat dit moet doen, is Ultimate Multisite vertel dat daar 'n "familie" van planne in die netwerk is genaamd **High End**. Wanneer opgraderings of afgraderings aangebied word, sal slegs planne uit dieselfde familie as 'n opsie vir die gebruiker voorgestel word.
