---
title: Izvoz in uvoz
sidebar_position: 12
_i18n_hash: 6536f9ebee269a8553a57733e4cb03fc
---
# Izvoz in import

Ultimate Multisite 2.9.0 dodaja enostavno orodje za **Izvoz in import** pod menijem **Tools > Export & Import**. Uporabite ga, če potrebujete paketirati eno WordPress spletno mesto v ZIP datoteko, obnoviti ta ZIP ali premestiti spletno mesto med kompatibilnimi instalacijami Ultimate Multisite in single-site WordPress.

## Potrebna dovoljenja {#required-permissions}

Morate se prijaviti kot administrator, ki ima dostop do menija **Tools** na spletnem mestu, ki ga izvozite ali importirate. Na mreži multisite uporabite račun administratorja mreže ob izvozu ali importiranju podspletnih strani z orodji Ultimate Multisite na ravni mreže.

Izvozne ZIP datoteke se služe preko avtentificiranega endpointa za prenos, zato ostanite aktivno v adminsem sestanku do dokončanja prenosov in ne delite javno generirane URL-e za prenos.

## Izvoz spletnega mesta v ZIP {#exporting-a-site-to-a-zip}

1. V WordPress adminu za spletno mesto, ki ga želite kopirati, gre do **Tools > Export & Import**.
2. Odprite območje za izvoz in izberite spletno mesto, ki ga želite paketirati.
3. Izberite opcionalni vsebine, ki jih želite vključiti, kot so uploadi, pluginovi in teme, če so ti odprti.
4. Začnite izvoz in počakajte, da se proces dokonča. Velika spletna mesta se lahko morajo dokončati v pozadju pred temeljitvijo ZIP datoteke.
5. Prenesite končano ZIP datoteko iz seznamov izvoževanj.

Ohranite ZIP datoteko na varnem mestu. Lahko vsebuje vsebino spletnega mesta, nastavitve, medije in izbrane kode.

## Kaj je vključeno pri izvozu {#what-the-export-includes}

ZIP datoteka za izvoz lahko vsebuje:

- Bazo podatkov in konfiguracijo izbranega spletnega mesta.
- Uploadirane medijske datoteke, če so bile vključene uploadi.
- Pluginove in teme, če so ti opcije izbrane.
- Metadata za import, ki jo uporablja orodje Export & Import za ponovno sestavljanje spletnega mesta na ciljni instalaciji.

Točna velikost ZIP arhive je odvisna od količine medijev, izbranih pluginov in tem, ter velikosti baze podatkov strani.

## Import strani iz ZIP arhive {#importing-a-site-from-a-zip}

1. Na ciljni WordPress strani gre do **Tools > Export & Import**.
2. Odprite prostor za import in vnesite ZIP arhiv, ki ste ga ustvarili z orodjem Export & Import.
3. Vnesite nadomestno URL, če stran uporablja novo naslov, ali pustite polje prazno, če želite ohraniti originalni URL.
4. Izberite, ali želite odstraniti vnesen ZIP arhiv po dokončanju importiranja.
5. Kliknite na **Begin Import** (Začeti import).
6. Nadzirajte neobdelano importiranje, dokler se ne konča. Uporabite **Cancel Import** (Prekinite import) le če potrebujete prekiniti proces pred dokončanjem.
7. Preverite stran, ki je vnesena, pred dovoljenjem običajnega prometa ali dostopa strankam.

Pri instalaciji WordPressa z eno stranjo, import ZIP arhive zamenja trenutno stran s vneseno stranjo. Pred začetkom preverite popoln rezervni kopič (backup) ciljne strani in izogibajte se začetku večjem importiranja iste strani hkrati.

## Omejitve in opombe o kompatibilnosti {#limitations-and-compatibility-notes}

Veliko napolnjevanja direktoriji ali medijskih knjižnic lahko povzročijo velike ZIP datoteke. Pred izvozem ali uvozom velikih spletnikov je preverite omejitve PHP naložb, omejitve izvrševanja, prostori na disku, memorijo in nastavitve časovnega roka serverja.
Velike medijske knjižnice se lahko morajo premestiti med obdobje nizke obremenjenosti za vzdrževanje.
Cilna WordPress instalacija mora delovati z kompatibilnimi različicami WordPressa, PHP-ja, Ultimate Multisite, pluginov in tem.
Uvoz na eno spletno stran nadomešča ciljno stran. To ni orodje za združevanje (merge tool).
Premešanje med Multisite in eno spletno stran in eno spletno stran v Multisite je podporno le, če lahko ciljno okolje deluje z pluginovi, temi, URL-i in potrebni elementi Ultimate Multisite izvožene strani.
Ohranite ZIP zasebno. Lahko vsebuje podatke baze podatkov, naložene datoteke in konfiguracijske podatke izvožene strani.

Za starejše postopke izvoza na ravni omrežja se ogledajte v [Site Export](/user-guide/administration/site-export).
