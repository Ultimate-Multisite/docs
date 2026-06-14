---
title: Stuur E-posse en Uitsendings
sidebar_position: 11
_i18n_hash: e9ddc461d32299505e4a7a5af491cff6
---
# Stuur E-posse en Uitroepberigte (v2)

_**BELANGRIKIEKE OPMERKING: Hierdie artikel verwys na Ultimate Multisite weergawe 2.x.**_

Ultimate Multisite kom met 'n kenmerk wat jou toelaat om jou kliënte te kontak deur 'n e-pos na 'n teikengebruiker of 'n groep gebruikers te stuur, asook om kennisgewings op hul admin-dashboard te plaas om aankondigings uit te stuur.

## Voeg admin-kennisgewings by aan jou kliënte se dashboard met Uitroepberigte

Met die Ultimate Multisite uitroepberig-kenmerk kan jy **admin-kennisgewings** by jou gebruiker se subsite admin-dashboard voeg.

Dit is uiters nuttig indien jy 'n aankondiging moet maak, soos stelselonderhoud of die aanbieding van nuwe produkte of dienste aan jou bestaande gebruikers. So lyk die admin-kennisgewing op jou gebruiker se dashboard.

<!-- Screenshot unavailable: Admin-kennisgewing uitgestuur op 'n kliënt se subsite dashboard -->

Om 'n admin-kennisgewing te begin, gaan na jou netwerk-admin-dashboard en onder die **Ultimate Multisite**-menu sal jy die **Broadcasts**-opsie vind.

![Broadcasts lysblad in Ultimate Multisite admin](/img/admin/broadcasts-list.png)

Jy kan ook bestaande uitroepberigte wysig:

![Broadcast wysig-koppelvlak](/img/admin/broadcast-edit.png)

Van hierdie bladsy, klik op die **Add Broadcast**-knoppie bo-op.

Dit sal die Add broadcast modale venster oopmaak waar jy kan kies watter tipe uitroepberig jy wil stuur.

Kies dan **Message** en klik op die **Next Step**-knoppie.

![Add broadcast modale venster met die Message-opsie geselekteer](/img/admin/broadcast-add-message.png)

Die volgende venster sal jou vra vir die **Target customer** of **Target product**. Let op dat jy meer as een gebruiker of meer as een produk kan kies.

Om óf 'n gebruikersrekening óf produk te soek, moet jy die sleutelwoord in die veld begin tik.

Onder die **Message type**-veld kan jy die kleur van die kennisgewing kies. Dit sal die dringendheid van jou boodskap beklemtoon.

Jy kan dan op **Next Step** klik.

![Teikenklante, teikenproduk en kennisgewing-tipe velde vir 'n Message uitroepberig](/img/admin/broadcast-message-targets.png)

Die volgende venster is waar jy kan begin met die opstel van jou boodskap deur die onderwerp en die inhoud/boodskap wat jy wil uitroepberig aan die gebruikers te stuur, in te voer.

![Broadcast boodskap onderwerp en inhoud redigeerder op die opstel-stap](/img/admin/broadcast-edit.png)

Nadat jy jou boodskap geskep het, kan jy op die **Send**-knoppie klik.

En dit is dit. Die admin-kennisgewing sal onmiddellik op jou gebruiker se dashboard verskyn.

## Stuur e-posse aan jou kliënte

Met die Ultimate Multisite uitroepberig-kenmerk kan jy 'n e-pos aan jou gebruikers stuur. Jy het die opsie om die e-pos slegs aan spesifieke gebruikers te stuur of 'n spesifieke gebruikersgroep te teiken op grond van die produk of plan waarop hulle geregistreer is.

Om 'n e-pos uitroepberig te begin, gaan na jou netwerk-admin-dashboard en onder die Ultimate Multisite-menu sal jy die Broadcast-opsie vind.

![Broadcasts lysblad gebruik as die beginpunt vir 'n e-pos uitroepberig](/img/admin/broadcasts-list.png)

Van hierdie bladsy, klik op die **Add broadcast**-knoppie bo-op.

Dit sal die Add broadcast modale venster oopmaak waar jy kan kies watter tipe uitroepberig jy wil stuur. Kies dan **Email** en klik op die **Next Step**-knoppie.

![Add broadcast modale venster met die Email-opsie geselekteer](/img/admin/broadcast-add-email.png)

Die volgende venster sal jou vra vir die **Target customer** of **Target product**. Let op dat jy meer as een gebruiker of meer as een produk kan kies.

Om óf 'n gebruikersrekening óf produk te soek, moet jy die sleutelwoord in die veld begin tik.

Sodra jou teikengehoor geselekteer is, kan jy op **Next Step** klik.

![Teikenklante en teikenproduk keuse vir 'n E-pos uitroepberig](/img/admin/broadcast-email-targets.png)

Die volgende venster is waar jy kan begin met die opstel van jou e-pos deur die onderwerp en die inhoud/boodskap wat jy wil aan die gebruikers stuur, in te voer.

<!-- Screenshot unavailable: E-pos uitroepberig onderwerp en inhoud redigeerder op die opstel-stap -->

Nadat jy jou boodskap geskep het, kan jy op die **Send**-knoppie klik.

En so maklik is dit om 'n e-pos aan jou eindgebruikers te stuur met die uitroepberig-kenmerk.

## Sisteem-e-posse

Sisteem-e-posse in Ultimate Multisite is die **outomatiese kennisgewings** wat deur die stelsel gestuur word na sekere aksies soos registrasie, betaling, domein-mapping, ens. Hierdie e-posse kan in die Ultimate Multisite-instellings gewysig of aangepas word. Dit kom ook met 'n kenmerk wat jou toelaat om bestaande instellings te herstel en te importeer van 'n ander Ultimate Multisite-installasie.

### Herstel & Importeer

Nuwe Ultimate Multisite-weergawes, asook bykomende modules, kan en sal van tyd tot tyd nuwe e-posse registreer.

Om konflik en ander probleme te voorkom, **sal ons die nuwe e-pos-templates nie outomaties as Sisteem-e-posse op jou installasie byvoeg nie**, tensy dit noodsaaklik is vir die korrekte funksionering van 'n gegewe kenmerk.

Super-admins en agente kan egter hierdie nuut geregistreerde e-posse via die importer-instrument importeer. Daardie proses sal 'n nuwe stelsel-e-pos skep met die inhoud en konfigurasie van die nuwe e-pos-template, wat die super-admin in staat stel om enige aanpassings te maak wat hy wil of om dit so te laat.

#### Hoe om stelsel-e-posse te importeer

Gaan na jou Ultimate Multisite Instellingsbladsy en navigeer na die **Emails**-tab.

![Emails tab in Ultimate Multisite settings showing the System Emails section](/img/config/settings-emails-tab.png)

Klik dan, aan die sybalk, op die **Customize System Emails**-knoppie.

<!-- Screenshot unavailable: Customize System Emails button on the System Emails sidebar panel -->

Op die Sisteem-e-posse bladsy, sal jy die **Reset & Import**-aksie-knoppie bo-op sien. Om op daardie knoppie te klik, sal die import- en herstelmodale venster oopmaak.

![Reset or Import action button on the System Emails admin page](/img/admin/system-emails-reset-import.png)

Dan kan jy die Import Emails-opsies omskakel om te sien watter stelsel-e-posse beskikbaar is vir import.

<!-- Screenshot unavailable: Reset and Import modal with the Import Emails options expanded -->

#### Herstel van Sisteem-e-posse

Ander tye sal jy besef dat die veranderinge wat jy aan 'n gegewe e-pos-template gemaak het, nie meer vir jou werk nie en jy wil dit na sy **standaardtoestand** herstel.

In sulke gevalle het jy twee opsies: jy kan eenvoudig die stelsel-e-pos verwyder en dit terug importeer (met behulp van die instruksies hierbo) – wat sendmetrieke en ander dinge sal uitwis, wat hierdie metode die minste verkieslik maak.

Of jy kan die **Reset & Import tool** gebruik om daardie e-pos-template te herstel.

Om 'n e-pos-template te herstel, kan jy die stappe hierbo volg totdat jy by die Reset & Import tool kom, en dan, die **Reset**-opsie omskakel en die e-posse kies wat jy wil herstel na hul standaardinhoud.

<!-- Screenshot unavailable: Reset and Import modal with the Reset Emails options expanded -->
