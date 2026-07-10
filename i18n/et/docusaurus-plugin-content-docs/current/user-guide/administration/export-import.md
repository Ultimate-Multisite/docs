---
title: |+
  Väljaeksport ja impord

sidebar_position: 12
_i18n_hash: 6536f9ebee269a8553a57733e4cb03fc
---
# Eksportimine ja importimisele {#export--import}

Ultimate Multisite 2.9.0 lisab **Tools > Export & Import** (Nüüd: Nüüd: Lahendused > Eksporti ja import) menüüme ühe-site eksporti ja importimise tööriistaga. Kasutage seda, kui vajate üht WordPress-saiti pakendada ZIP-failiks, seda ZIP-ilt taastada või saiti liikumiseks compatibilsete Ultimate Multisite ja ühe-site WordPress-installaatsioonide vahel.

## vajalikud lubanded {#required-permissions}

Peate logi sisse kasutajana, kes on administrator ja saab päästa selle saiti **Tools** (Lahendused) menüüle eksporteerimisel või importimisel. Multisaitse võrku korral kasutage võrku administraatori konti subsaitide eksportimise või importimise ajal võrku taseme Ultimate Multisite tööriistadega.

Eksport ZIP-al olevad allalaadimised annetakse autentseeritud allalaadimise lõpppunkti kaudu, seetõttu peate admin sessiooni aktiivset hoidma kuni allalaadimise lõpuni ja jagage genereeritud allalaadimise URL-id ei avalikuna.

## Saiti eksportimine ZIP-iks {#exporting-a-site-to-a-zip}

1. Valige selle saiti administratiivse paneeli kurss, mida soovite kopienda, **Tools > Export & Import** (Lahendused > Eksporti ja import).
2. Avage eksporti ala ja valige see sait, mida soovite pakendada.
3. Valige valikuline sisu, mida anda sisuliseks, näiteks laadimised, pluginid ja teemad, kui need valikud on saadaval.
4. Alustage eksportimine ja oodake protsessi lõpuni. Suured saitid võivad olla tagasiplaneerimisel lõpma, enne kui ZIP fail on valmis.
5. Allalaadige lõpetatud ZIP-fail eksportide listist.

Hoidke ZIP-fail turvalises kohas. See võib sisaldada saiti sisu, seadistusi, media failid ja valitud koodi asetusi.

## Mis eksport hõlmab {#what-the-export-includes}

Eksport ZIP-il võib olla:

- Valitud saiti database-sisu ja konfiguratsiooni.
- Laadimised on included, kui laadimised on sisaldatud.
- Pluginid ja teemad, kui need valikud on valitud.
- Import metadata, mida Export & Import tööriist kasutab saiti uuesti loodud selle sihtinstallaatsioonile.

Kõige ZIP faili suuruse sõltub meedia mängus, valitud pluginide ja teemide kauga ning veebilehe database tabelite suurustest.

## Veebilehe importimine ZIP-failist {#importing-a-site-from-a-zip}

1. Minenda sihtveebilehe **Tools > Export & Import** menüüpunktile.
2. Avage importi ruut ja laadige Export & Import tööriistaga loodud ZIP-fail.
3. Sisestage asendava URL, kui veebilehel tuleb kasutada uut aadressi, või jätke sulja valik tühjaks, et säilitada originaalset URL-t.
4. Valige, kas laaditud ZIP-fail tuleb pärast importi lõppu eemaldada.
5. Klõpsake **Begin Import** (Alusta import).
6. Jälgige ootavat importi lõpuni. Kasutage ainult **Cancel Import** (Tühista import), kui soovite protsessi lõpetada enne lõppu.
7. Kontrollige importitud veebilehe üle enne, kui luba tavaline liiklust või kasutajate külastamist.

Üksveebiliste WordPress-installaatsioonil ZIP-faili importimine asendab oleva veebilehe importitud veebilehega. Loomi eelnevalt täieliku varjenduse sihtveebilehe ja vältige ühtsamate veebilehte samaaegset importimist.

## Piirangud ja compatibiliteetide märkused {#limitations-and-compatibility-notes}

Suuratele üles laadimise direktoriumide või mediabibliotete võib luua suurt ZIP-failid. Kontrollige PHP üleslaadimise piiseid, käivitusepiiseid, diskruumi ruumi, memori ja serveri ajastundekohasti seadistusi enne suurte sidetud süsteid eksportimist või importimist.
Suuratele mediabibliotete võib olla vaja liigutada vähe liiklustel hooldusajastu ajal.
Lõpulev WordPress-installaatsioon peab töötama kooskõlas oleva WordPress-, PHP-, Ultimate Multisite-, plugin- ja teema versioonidega.
Üks süsteeni import asendab sihet süsteeni. See ei ole ühendamise tööriist.
Multisite-üles üksiksüsteeni ja üksiksüsteeni üles multisite'i liigutused on toetatud ainult siis, kui sihtkülgneb keskkond suudab eksporteeritud süsteeni pluginide, teemade, URL-ade ja vajalikud Ultimate Multisite komponentid käivitada.
Hoidke ZIP privaatseks. See võib sisaldada database-sisu, üles laadimise failid ja eksporteeritud süsteeni konfiguratsioonitutandeid.

Väsimlikule võetudest võrku taseme eksportviiside kohta lugege [Site Export](https://yourdomain.com/user-guide/administration/site-export).
