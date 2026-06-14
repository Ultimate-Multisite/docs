---
title: Võimatu üürituse operatsioonid
sidebar_position: 15
_i18n_hash: bcde2032a685b60e17f1944b5b588f25
---
# Suvereenne lejas operaatsioonid

Ultimate Multisite versioon 1.2.0 lisab operatiivseid tööriistu suvereenilistele lejas (sovereign) lejas: subsaitide, mis töötavad oma database, faili süste root ja routing konteksti abil, samal ajal kui neid on nähtavest võrku administraatorilt.

Kasutage seda lehte, kui haldate eraldatud kliendite paigutustega, kaugjuhatud paigutuste ühendamist või migratsioone, mis viivad standardsubsite suvereenise infrastruktuuri juurde.

## Mis muutub administratiorile?

- **Tilmatult lejas logimine (Stateless tenant autologin)** — Võrku administraatorid saavad külastada suvereenit paigutust ilma püsivates ja jagatud sessioonist sõltumata. SSO token on tarkusasutuslik, origoni kinnitatud, laenud üles ja piiratud lühikese lühendamise ajavaiga.
- **Suvereenise teadaid routing** — Vanemad eraldatud võrdid ja suvereenised paigutused lahenduvad sama paigutuse routeri teel, vähendades algusoleva erinevusi vanade ja uute eraldatud installide vahel.
- **Võtmine migratsiooni staatuse kinnitusega** — Migratsiooni kinnituskontroll on kasutaja provisjonimise, database writeri lubuste, juurde jääva järjestuse (queue drain) staatuse ja vanade tabelite puutuse kontroll, enne kui paigutus tuvastatakse täielikult.
- **Turvalisem lahendamine** — Suvereenise lahendamine eemaldab nüüd lejas kasutaja andmeid puhaselt, seega ei jätta eemaldatud paigutused vanade database-lauseid jäljendatuna.

## Suvereenise paigutuse külastamine

1. Avage **Network Admin > Ultimate Multisite > Sites**.
2. Valige suvereenne paigus.
3. Kasutage **Visit (SSO)**, kui see on saadaval, instead of paroolide koopiimise või hetema administratiorile konto loomise.

Külastamise protsess luuakse sellele paigutusele lühikese logiini tokeni ja registreerib SSO-sutuse auditijärgule. Kui nupp on ebaõnnestunud, kontrollige, kas paigutus domeen lahendub ootatud installidele ja kas paigus saab jõududa võrku-lääne SSO-punktiga.

## Kaugjuhatud paigutuste operaatsioonide kontrolljuht (checklist)

Enne suvereenise või kaugjuhatud paigutuse muutmist kinnitage:

* A leigutaja dome (tenant domain) viitab hostile, millel on leigutaja failisüsteem.
* Leigutaja database host vastab selle installi jaoks konfigurieritud host bindinguga.
* Migratsiooni kinnituse käskud läbivad leigutaja jaoks.
* Asünkroonilised migratsioonijoonid (async migration queues) tühistatakse enne DNS- või omandamise muutuste tegemist.
* Leigutaja administraator kasutaja on loodud migratsiooni ajal ja saab sisse logi SSO abil.

## Väljaomandajate (sovereign tenants) eemaldamine

Väljaomandaja leigutaja eemaldamine on hävitav. Kontrollige enne eemaldamist varjupidamise ja eksportimise staatust, seejärel eemaldage selle sissejuhtimise küsimuse (site management screen) kaudu. Versioon 1.2.0 dekonstruoimiskäivit (teardown flow) eemaldab leigutaja database-kujutusi puhastusosa osana, kuid administraatorid peaksid kontrollima, et hosti tasemeldatabase kasutajad ja folderit on kadunud väljaspool hoitja paneeli kasutamise korral.

:::warning
Ärmalge väljaomandaja leigutaja eemaldamine migratsiooni kinnituse käivit ajal või asünkrooniliste push-juurud (async push jobs) küsimise ajal. Oota, kuni kinnitus on lõpetatud, et dekonstruoimiskäivit ei eemaldaks juurde vajalikke kujutusi.
:::
