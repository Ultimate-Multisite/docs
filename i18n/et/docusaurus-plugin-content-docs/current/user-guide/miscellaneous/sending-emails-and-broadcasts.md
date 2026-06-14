---
title: E-postide ja levitamise saatmine
sidebar_position: 11
_i18n_hash: e9ddc461d32299505e4a7a5af491cff6
---
# E-maile ja levitamise (v2)

_**TÄHTIS NOTE: See artikli viitab Ultimate Multisite versioonile 2.x.**_

Ultimate Multisite on seadusega saadud funktsioon, mis võimaldab teil kommunikatsiooni käivitada oma klientidega e-posti saatmist sihtitud kasutajale või kasutaja grupi, samuti teavet levitamiseks nende administraatori paneelile.

## Lisage administraatori teavet klientide dashboardile levitamise abil

Ultimate Multisite levitamisfunktsiooni kasutades saate lisada **administraatorite teavete** oma kasutaja alsubist administraatori dashboardile.

See on väga kasulik, kui peate teavitama ülesannete nagu süsteemi hooldus või uute toodete ja teenuste pakkumise esitamiseks olemasolevate kasutajate. See on selline, kuidas administraatorite teave näeb oma kasutaja dashboardil.

<!-- Screenshot unavailable: Administraatorite teavete levitamine näed klientide alsubist dashboardil -->

Administraatorite teavete algamiseks külastage oma võrku administrati paneeli ja **Ultimate Multisite** menüü all leiate **Broadcasts** (Levitamised) valik.

![Broadcasts loendileht Ultimate Multisite administraatoris](/img/admin/broadcasts-list.png)

Saate ka muuta olemasolevaid levitamisi:

![Broadcasti redigeerimise kasutuseinterface](/img/admin/broadcast-edit.png)

Seele lehel klõpsake ülal olevat **Add Broadcast** (Lisage levitamine) nupulile.

See avab Add broadcast -modaali, kus saate välja valida, millise tüüpi levitamist soovite saata.

Valige siis **Message** (Teave) ja klõpsake **Next Step** (Järgmine samm) nupulile.

![Add broadcast modaal, kus on valitud Message-vaik

Järgmine küsimus palub teil välja kas **Target customer** (Sihtklient) või **Target product** (Sihttoode). Pärustage, et saate valida rohkem kui ühte kasutaja või rohkem kui ühte toodet.

Eelamiseks kasutaja konto või toodet otsimiseks tuleb alustada sõnast mängida sulguoleku sisema sisse.

**Sõnumitüüpi** (Message type) välja valitud valgusest saate määrata teaduse värvi. See rõhutab teie sõnumi kiireloomulist olulisust.

Seejärel saate klõpsata **Järgmine samm**.

![Sihtkülgjuhil, sihttoot ja sõnumitüübi väljad sõnumi levitamiseks](/img/admin/broadcast-message-targets.png)

Järgmine akend on see paigut, kus saate alustada oma sõnumi koostamist otsingut ja sisulist välja, mida soovite kasutajatele levitada.

![Levitamise sõnumi teema ja sisu redigeerija loomise sammu](/img/admin/broadcast-edit.png)

Sõnumi luomise pärast saate klõpsata **Lähetada** (Send) nupul.

Ja see on kõik. Administratsiooni teade peaks väljuti esile ilmuma kasutaja dashboardile kohe.

## E-kirjude laitamine klientidele

Ultimate Multisite levitamise funktsiooni abil saate e-posti kasutajatele laita. Teil on võimalus laita e-posti ainult konkreetsetele kasutajatele või sihtida konkreetsete kasutaja gruppe selle põhjal, mille alusel nad on abonneeritud toote või plaaniga.

E-posti levitamise algamiseks külastage oma võrku administrati dashboardi ja Ultimate Multisite menüü all leiate Levitamise (Broadcast) valik.

![Levitamise nimekiri leht kasutatakse e-posti levitamiseks algusepunktina](/img/admin/broadcasts-list.png)

Seele lehtest klõpsake ülal olevat **Lisaindikas** (Add broadcast) nupul.

See avab Lisaindiksi akendi, kus saate välja valida, millise levitamist tüüpi soovite laita. Valige siis **E-post** ja klõpsake **Järgmine samm** nupul.

![Levitamise lisaindikas, kus E-posti valik on valitud](/img/admin/broadcast-add-email.png)

Järgmine akend küsib teilt kas **Sihtkülgjuhi** (Target customer) või **Sihttoot** (Target product). Pärustage, et saate välja valida rohkem kui ühte kasutaja või rohkem kui ühte toodet.

Vast kasutaja või toodet otsimiseks tuleb alustada sõna sisestamine sulgis välja.

Kui valides oma sihtgrupi ja sihttoodete, saate klõpsata **Next Step** (Järgmine samm).

![Sihtklientide ja sihttoodete valik Email-leade lahendamiseks](/img/admin/broadcast-email-targets.png)

Järgmine akend on see koht, kus alustate e-posti koostamise: sisestades teema ja sisu/viidandi, mida soovite käyttanutele saata.

<!-- Screenshot unavailable: Email-leade teema ja sisuredaktor compose sammu -->

Viimase pärast saate klõpsata **Send** (Saada) nupul.

See on nii lihtne, et e-posti saata oma lõppkäitlele broadcast funktsiooni abil.

## Süsteerid e-kirjalead

Ultimate Multisite'is süsteerid e-kirjalead on **automaatlikud teavitused**, mida süsteem lähevad pärast teatud toiminguid, nagu registreerimine, maksude tegemine, domeenide sulgimine jne. Need e-kirjad saab muuta või muudata Ultimate Multisite seadistustest. Sellel on ka funktsioon, mis võimaldab teil olemasolevaid seadistusi ümber asutada ja teist Ultimate Multisite installist importida.

### Ümberasutamine ja importimine

Uued Ultimate Multisite versioonid samuti add-onid võivad ajaga vahel registreida uusi e-kirju.

Konfliktide ja teiste probleemide vältimiseks **me ei lisa neid uusi e-kirjaleade mallid automaatselt Süsteerid e-kirjadena teie installile**, välja arvatud juhul, kui need on olulised selle konkreetse funktsiooni õiguse toimimise jaoks.

Kuid superadminid ja agentid saavad neid uusi registreeritud e-kirju importida importori tööriistaga. See protsess luuakse uue süsteerilise e-kirju, millel on uue e-kirjaleade malli sisu ja konfiguratsioon, võimaldades superadminil teha mida ta soovib muudata või hoida neid nagu on.

#### Süsteerid e-kirjade importimine

Minum oma Ultimate Multisite seadistus ja siit minema **Sähilishade** tabilele.

![Emails tab in Ultimate Multisite settings showing the System Emails section](/img/config/settings-emails-tab.png)

Seejärel, sivubari peal klõpsake **System Emailsi kohandamine** (Customize System Emails) nupulule.

<!-- Screenshot unavailable: Customize System Emails button on the System Emails sidebar panel -->

System Emailsi lehel näete ülal **Reset & Import** toimimise nupugi. Sellele klõpsamine avab importi ja resetimise modali (modal) akna.

![Reset or Import action button on the System Emails admin page](/img/admin/system-emails-reset-import.png)

Seejärel saate lülitada Import Emailid -vahetusi, et näha, millised system emailid on võimalik importida.

<!-- Screenshot unavailable: Reset and Import modal with the Import Emails options expanded -->

#### System Emailide resetimine

Teise korral teadete järgi mõtet, et et te sellele antud muutused antud e-posti mallile ei enam toimi ja soovite seda taastada selle **oletule olekust**.

Sellises juhul on teil kaks valikut: saate lihtsalt system emaili eemaldada ja see tagasi importida (kasutades ülal antud juhise), mis puhastab saatusmetriikat ja muud asja, mida seda meetodit kõige vähem soovitatakse.

Või saate kasutada **Reset & Import** tööriist을 selle emaili malli resetimiseks.

Emaili malli resetimiseks saate järgida ülal antud samuti sammude, kuni jõudmate Reset & Import tööriistule, ja siis lülitada sisse **Reset** valiku ning valige emailid, mida soovite tagasi oletule sisu seisukile.

<!-- Screenshot unavailable: Reset and Import modal with the Reset Emails options expanded -->
