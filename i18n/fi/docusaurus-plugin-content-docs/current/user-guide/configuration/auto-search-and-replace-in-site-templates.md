---
title: Automaattinen haku ja korvauksen vaihtaminen sivustokopioissa
sidebar_position: 8
_i18n_hash: 0842f53505d24579010d91568e06ef68
---
# Automaattinen haku ja korvauksen teksti sivustokopioissa (v2)

_**Tämä opas vaatii WP UItimo version 2.x.**_

Ultimate Multisiten voimakkaimmista ominaisuuksista on kyky lisätä vapaasti tekstiä, värejä ja valittavia kenttiä rekisteröintilomakkeeseen. Kun olemme keränneet tuon datan, voimme käyttää sitä sisällön esivalmisteluun valituissa sivukopioiden osissa. Kun uusi sivu julkaistaan, Ultimate Multisite korvaa paikkamerkit todellisella tiedolla, jonka asiakas on syöttänyt rekisteröityessä.

Esimerkiksi voit tehdä sivukopiosi template-sivustoista paikkamerkeillä. Paikkamerkkejä tulisi lisätä kahden sulkujen ympärille - {{placeholder_name}}.

Sen jälkeen voit yksinkertaisesti lisätä vastaavan rekisteröintikentän datan keräämistä varten.

Asiakkaasi voi täyttää kyseisen kentän rekisteröinnin aikana.

Ultimate Multisite korvaa sitten paikkamerkit automaattisesti asiakkaalta annetulla datalla.

## **Ongelman ratkaiseminen "template täynnä paikkamerkkejä" -ongelmasta**

Kaikki tämä on loistavaa, mutta me kohtaamme häiritsevän ongelman: nyt sivustokopioissamme – joita asiakkaat voivat vierailla – on paljon häiritseviä paikkamerkkejä, jotka eivät kerro mitään.

Ratkaistaaksemme tämän tarjoamme vaihtoehdon asettaa paikkamerkeille harhaanjohtavia arvoja ja käytämme näitä arvoja etsimään ja korvaamaan niiden sisältöä template-sivuilla, kun asiakkaat vierailevat sivustoilla.

Voit päästä käsiksi template-paikkamerkkien muokkaimeen siirtymällä **Ultimate Multisite > Settings > Sites** -osioon, vierittämällä Site Template Options -alueelle ja napsauttamalla sitten linkkiä **Edit Placeholders**.

![Site Template Options area in the Sites settings page](/img/config/settings-sites-templates-section.png)

Tämä vie sinut paikkamerkkien sisältömuokkaimeen, jossa voit lisätä paikkamerkkejä ja niihin liittyvää sisältöäsi.

![Mallin paikkamerkkien muokkauskohta](/img/config/settings-sites-templates-section.png)
