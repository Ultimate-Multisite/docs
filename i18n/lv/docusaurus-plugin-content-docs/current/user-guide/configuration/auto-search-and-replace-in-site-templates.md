---
title: Automātiskais meklēšana un aizstāšana vietnes šabloniem
sidebar_position: 8
_i18n_hash: 0842f53505d24579010d91568e06ef68
---
# Automāts me aizstāšana vietnes šabloniem (v2) {#auto-search-and-replace-in-site-templates-v2}

_**Šis tutorial prasa Ultimate Multisite versiju 2.x.**_

Ultimate Multisite vienas no spēcīgākajām funkcijām ir iespēja pievienot jebkuru tekstu, krāsas un izvēles laukus reģistrācijas formā. Kad mēs saņemam šos datus, varam tos izmantot, lai iepriekš iestatu saturu konkrētās vietnes šablona daļās. Tad, kad jauns vietnes būs publicēts, Ultimate Multisite aizstāve (placeholders) mainīs ar reģistrācijas laikā ievadīto reālu informāciju.

 Piemēram, jūs varat izmantot savus šabloni ar placeholders. Placeholders jāievada ar dubultām krūklēm - {{placeholder_name}}.

Tad jūs vienkārši dodiet atbilstošu reģistrācijas lauku, lai saņemtu šos datus.

Tad jūsu klienti varēs iepildīt šo lauku reģistrēšanās laikā.

Ultimate Multisite automātiski aizstāve (placeholders) mainīs ar klientam sniegto informāciju.

## **Līdzsvarot "šablons pilns placeholders" problēmu** {#solving-the-template-full-of-placeholders-problem}

Tas viss ir lieliski, bet mēs saskaramies ar nepatīkamu problēmu: tagad mūsu vietnes šabloni - kas var tiek apmeklēti klienti - ir pilni nepatīkamiem placeholders, kas neiztiek daudz.

Lai to risinātu, mēs piedāvājam iespēju iestatīt fabrikas vērtības (fake values) placeholders un izmantojam šos vērtības, lai meklētu un aizstātētu viņu saturu šajos šablona vietnēs, kamēr klienti tos apmekl.

Jūs varat piekļūt šablona placeholders redaktōi, dodoties uz **Ultimate Multisite > Settings > Sites**, scrollējot uz Site Template Options daļu un tad noklikšķinot uz saites **Edit Placeholders** linka.

![Site Template Options area in the Sites settings page](/img/config/settings-sites-templates-section.png)

Tas aizved jūs uz placeholders satura redaktōju, kur varat pievienot placeholders un to atbilstošu saturu.

![Šabli atkarības redaktors ieejas punkts](/img/config/settings-sites-templates-section.png)
