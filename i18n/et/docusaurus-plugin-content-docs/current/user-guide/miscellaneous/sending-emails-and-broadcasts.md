---
title: E-kirjade ja teadete saatmine
sidebar_position: 11
_i18n_hash: 0563b0c364cc014990c7066b8251ba36
---
# E-kirjade ja teadaannete saatmine (v2)

_**OLULINE MÄRKUS: see artikkel viitab Ultimate Multisite versioonile 2.x.**_

Ultimate Multisite sisaldab funktsiooni, mis võimaldab sul klientidega suhelda, saates e-kirja sihitud kasutajale või kasutajate rühmale, samuti saata teateid nende admini dashboardile teadaannete edastamiseks

## Lisa admini teated oma klientide dashboardile Broadcasts abil {#add-admin-notices-to-your-customers-dashboard-with-broadcasts}

Kasutades Ultimate Multisite teadaannete funktsiooni, saad lisada **admini teateid** oma kasutaja alamlehe admini dashboardile.

See on äärmiselt kasulik, kui pead tegema teadaande, näiteks süsteemihoolduse kohta, või pakkuma olemasolevatele kasutajatele uusi tooteid või teenuseid. Nii näeb admini teade välja sinu kasutaja dashboardil.

<!-- Kuvatõmmis pole saadaval: admini teade, mida näidatakse kliendi alamlehe dashboardil -->

Admini teate alustamiseks mine oma võrgu admini dashboardile ja **Ultimate Multisite** menüü alt leiad valiku **Broadcasts**.

![Broadcasts loendi leht Ultimate Multisite adminis](/img/admin/broadcasts-list.png)

Samuti saad muuta olemasolevaid teadaandeid:

![Teadaande muutmise liides](/img/admin/broadcast-edit.png)

Sellel lehel klõpsa üleval nuppu **Add Broadcast**.

See avab „Add broadcast“ modaaliakna, kus saad valida, millist tüüpi teadaannet soovid saata.

Vali **Message** ja seejärel klõpsa nuppu **Next Step**.

![Teate lisamise modaal, kus Message valik on valitud](/img/admin/broadcast-add-message.png)

Järgmine aken küsib sinult kas **Target customer** või **Target product**. Pane tähele, et saad valida rohkem kui ühe kasutaja või rohkem kui ühe toote.

Kasutajakonto või toote otsimiseks pead alustama märksõna sisestamist välja sisse.

Välja **Message type** all saad valida teate värvi. See rõhutab sinu sõnumi kiireloomulisust.

Seejärel saad klõpsata **Next Step**.

![Target customers, target product ja message type väljad Message teadaande jaoks](/img/admin/broadcast-message-targets.png)

Järgmises aknas saad alustada oma sõnumi koostamist, sisestades teema ja sisu/sõnumi, mida soovid kasutajatele edastada.

![Teadaande sõnumi teema ja sisu redaktor koostamise sammul](/img/admin/broadcast-edit.png)

Pärast sõnumi loomist saad vajutada nuppu **Send**.

Ja see ongi kõik. Admini teade peaks kohe ilmuma sinu kasutaja dashboardile.

## Saada e-kirju oma klientidele {#send-emails-to-your-customers}

Kasutades Ultimate Multisite teadaannete funktsiooni, saad saata kasutajatele e-kirja. Sul on võimalus saata e-kiri ainult konkreetsetele kasutajatele või sihtida kindlat kasutajarühma toote või plaani alusel, mille all nad on tellinud.

E-kirja teadaande alustamiseks mine oma võrgu admini dashboardile ja Ultimate Multisite menüü alt leiad Broadcast valiku.

![Broadcasts loendi leht, mida kasutatakse e-kirja teadaande lähtepunktina](/img/admin/broadcasts-list.png)

Sellel lehel klõpsa üleval nuppu **Add broadcast**.

See avab „Add broadcast“ modaaliakna, kus saad valida, millist tüüpi teadaannet soovid saata. Vali **Email** ja seejärel klõpsa nuppu **Next Step**.

![Teadaande lisamise modaal, kus Email valik on valitud](/img/admin/broadcast-add-email.png)

Järgmine aken küsib sinult kas **Target customer** või **Target produc** t. Pane tähele, et saad valida rohkem kui ühe kasutaja või rohkem kui ühe toote.

Kasutajakonto või toote otsimiseks pead alustama märksõna sisestamist välja sisse.

Kui sihtrühm on valitud, saad klõpsata **Next Step**.

![Target customers ja target product valik Email teadaande jaoks](/img/admin/broadcast-email-targets.png)

Järgmises aknas saad alustada oma e-kirja koostamist, sisestades teema ja sisu/sõnumi, mida soovid kasutajatele saata.

<!-- Kuvatõmmis pole saadaval: e-kirja teadaande teema ja sisu redaktor koostamise sammul -->

Pärast sõnumi loomist saad vajutada nuppu **Send**.

Ja nii lihtne ongi saata e-kiri oma lõppkasutajatele, kasutades teadaannete funktsiooni.

## Süsteemi e-kirjad {#system-emails}

Ultimate Multisite süsteemi e-kirjad on need **automaatsed teavitused**, mille süsteem saadab pärast teatud toiminguid, nagu registreerimine, makse, domeeni sidumine jne. Neid e-kirju saab Ultimate Multisite seadetes muuta või kohandada. Sellega kaasneb ka funktsioon, mis võimaldab lähtestada ja importida olemasolevaid seadeid teisest Ultimate Multisite installatsioonist.

### Lähtestamine ja importimine {#resetting--importing}

Uued Ultimate Multisite versioonid, samuti lisad, võivad ja hakkavad aeg-ajalt uusi e-kirju registreerima.

Konfliktide ja muude probleemide vältimiseks **me ei lisa uusi e-kirja malle sinu installatsiooni System Emails alla automaatselt**, välja arvatud juhul, kui need on antud funktsiooni korrektseks toimimiseks hädavajalikud.

Siiski saavad superadminid ja agendid neid äsja registreeritud e-kirju importija tööriista kaudu importida. See protsess loob uue süsteemi e-kirja uue e-kirja malli sisu ja konfiguratsiooniga, võimaldades superadminil teha soovitud muudatusi või jätta need nii, nagu need on.

#### Kuidas importida süsteemi e-kirju {#how-to-import-system-emails}

Mine oma Ultimate Multisite seadete lehele ja ava vahekaart **Emails**.

![Emails vahekaart Ultimate Multisite seadetes, kus kuvatakse System Emails jaotis](/img/config/settings-emails-tab.png)

Seejärel klõpsa külgribal nuppu **Customize System Emails**.

<!-- Kuvatõmmis pole saadaval: Customize System Emails nupp System Emails külgriba paneelil -->

System Emails lehel näed üleval toimingunuppu **Reset & Import**. Selle nupu klõpsamine peaks avama importimise ja lähtestamise modaaliakna.

![Reset or Import toimingunupp System Emails admini lehel](/img/admin/system-emails-reset-import.png)

Seejärel saad lülitada Import Emails valikuid, et näha, milliseid süsteemi e-kirju saab importida.

<!-- Kuvatõmmis pole saadaval: lähtestamise ja importimise modaalaken, kus e-kirjade importimise valikud on laiendatud -->

#### Süsteemi e-kirjade lähtestamine {#reseting-system-emails}

Mõnikord märkad, et konkreetse e-kirja malli muudatused ei sobi sulle enam ja soovid selle lähtestada **vaikeolekusse**.

Sellistel juhtudel on sul kaks võimalust: võid süsteemi e-kirja lihtsalt kustutada ja uuesti importida (kasutades ülaltoodud juhiseid) – see kustutab saatmismõõdikud ja muud andmed, mistõttu on see meetod kõige vähem eelistatud.

Või võid kasutada **lähtestamise ja importimise tööriista**, et see e-kirja mall lähtestada.

E-kirja malli lähtestamiseks järgi ülaltoodud samme, kuni jõuad lähtestamise ja importimise tööriistani, seejärel lülita sisse valik **Lähtesta** ja vali e-kirjad, mille soovid vaikesisule tagasi lähtestada.

<!-- Kuvatõmmis pole saadaval: lähtestamise ja importimise modaalaken, kus e-kirjade lähtestamise valikud on laiendatud -->
