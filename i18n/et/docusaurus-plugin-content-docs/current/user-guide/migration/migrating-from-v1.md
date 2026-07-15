---
title: Migreerimine V1-ist
sidebar_position: 17
_i18n_hash: 1deefaf09206b741c89be6666fe2143c
---
# Migratsioon V1-istestest

## Ultimate Multisite on siinist V1.x versioon 2.x versioon. {#ultimate-multisite-has-switched-from-its-original-1x-family-of-releases-to-the-2x-family-of-releases}

Ultimate Multisite versioon 2.0 ja hilisem on täielik uudisversioon (rewrite) kogu koodisaadme, mida meil on väga vähe ühtsamust vanu ja uue versiooni vahel. Selle tõttu tuleb, kui uuendate V1.x-ist V2.x-ile, teie andmeid migreerida formaatti, mida uued versioonid mõistavad.

Arvatavasti Ultimate Multisite 2.0+ **sisaldab migratsjoni tööriistaga (migrator)**, mis on sisse lauletud core'i osaks ja suutlik vanu versiooni andmeid tuvastada ja neid ülesannetada uue formaatti. See migratsioon toimub V2.0+ **Seadistaja** ajal.

See õppetunn on ülevaate sellest, kuidas migratsor töötab, mida teha vika korral ja kuidas lahendada selleks, et protsessil võib esineda probleeme.

_**TÄHTIS: Enne alustamist uuendamiseks versioonist 1.x versioonist versioonile 2.0 veidi veenduge, et te saate oma sainiandmebaasi (database) koopia.*_

## Esimlikud sammud {#first-steps}

Esimlikku sammu on allalaadida plugin .zip-fail ja installida versioon 2.0 oma võrku administraatoripaneelile.

Kui [installite ja aktiveerite versiooni 2.0](../getting-started/installing-ultimate-multisite.md), tuvastab süsteem automaatselt, et teie Multisite töötab vanu versiooni peal, ja te näete selle sõnumi pluginipaneeli ülal.

_**Märkus:** Kui teil on Ultimate Multisite 1.x installitud oma Multisitele, saate välja valiku asenda plugin uue allalaadimise versiooniga. Palun klikkige **Asenda praegu laaditudega**. _

Järgmine lehekül on teile, millest on installitud vanema versiooni (1.x) lisamoodule ja annab juhiste selle kohta, kas kasutaja kasutatav versioon on compatibel v2.0 versiooniga või kas tuleb pärast migratsiooni lisamoodul uuendada.

<!-- Screenshot unavailable: Message on the top of the plugins page about updating to v2.0, with list of add-ons that need updating -->

Kui olete valmis jätkamiseks, saate klõpsata nuput **Kanda installija lõpetamiseks**.

<!-- Screenshot unavailable: Button saying Visit the Installer to finish the upgrade -->

See viie teid siis installijase juhendile, kus on mõned tervitusuudangud. Peidi peate lihtsalt klõpsama **Alustada**, et minna järgmisele lehekülile.

<!-- Screenshot unavailable: Setup Wizard welcoming page with Get Started button -->

**Get Started** klõpsamise pärast viie teid Pre-install Checks_._ See näitab teil oma süsteemi teavet ja WordPressi installatsiooni, ning ütleb, kas see täidab **Ultimate Multisite'i nõuded**.

<!-- Screenshot unavailable: Pre-install Checks page showing system requirements confirmation -->

Järgmine samm on sisestada Ultimate Multisite lisakood ja aktiveerida plugin. See tagab, et kõik funktsioonid, sealhulgas lisamoodulid, on saadaval teie veebile.

<!-- Screenshot unavailable: License activation page with license key input and Agree and Activate button -->

Koodi pärast sisestamist klõpsake **Arvesta ja aktiveeri**.

Lisentsaktivateerimise pärast saate algata tõelise installimise klõpsama järgmise lehekülil **Install**. See luuab automaatselt vajalikud failid ja database, mis on v2.0 versiooni toimimiseks vajalikud.

## Nüüd migratsioon {#now-the-migration}

Migratsoril on sisse sisse sisse sisse sisemine turvalisus, mis kontrollib teie kogu multisite'i, et kõik Ultimate Multisite andmed saab migreerida ilma probleemide ilma. Alustage protsess **Run Check** (Kontrolli käivitamine) nupuga.

Järgmiselt kontrolli käivitamise pärast on kaks võimalust: tulemus võib olla kas **või** viga või **välja**.

### Viga korral {#with-error}

Kui sa saavad viga sõnumit, pead meeldiva meie toetusemeeskonale kontaktide ja nad võivad sind aidata viga lahendamas. Pärast tikuga (ticket) luomist on kindlustatud, et **annete logi** annate. Saate logi allalaadida või klikata linki, mis ütleb "vaata meie toetusemeeskonale". See avab abikasti-widgeti teie lehe paremal pool, kus sul on ette pandud väljad, millel viga logid on kirjutatud kirjelduses.

_**Selle, et süsteem leidis viga, ei saa te jätkata migratsiooni versioon 2.0'sle. Siis saate tagasi versioon 1.x'le, et jätkata võrku käitamist kuni viga lahendamise.**_

### Viga ilma korral {#without-error}

Kui süsteem viga ei leida, näete õnnestumise sõnumi ja allpool **Migrate** (Migreeri) nupuga, mis võimaldab teil migratsiooni jätkata. Sellele lehel teile on meeldiva tagada oma database-kohandiku enne edasi liikumist, mida me väga soovitamme. Klõpsake **Migrate**, kui teil juba kohandik on.

Andmeid ei ole saadaval: Migreeri nupuga allpool

Võimalik on jätkata Wizard seadistuse käivitamist, et uuendada oma logo ja muud asja võrku konfiguratsioonides, või alustada navigeerida Ultimate Multisite versiooni 2.0 menüü ja selle uue kasutajaliidese kaudu. Alustage ja nautige protsessit!
