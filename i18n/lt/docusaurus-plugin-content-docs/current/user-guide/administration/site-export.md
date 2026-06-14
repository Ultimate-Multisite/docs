---
title: Sito eksportas
sidebar_position: 11
_i18n_hash: d25255aa1b01df64a9008f91e3dcbeb1
---
# Svetimo eksportas

Administracijos puslapis **Site Export** leidžia tinklo administratoriams pakutoti vieną svetainę arba visą tinklą į žaliavėlį, kurį galima atsisiųsti migracijos, saugumo ar atsiėmimo (hand-off) veiksmams.

## Vienos svetainės eksportavimas

Eikite į **Ultimate Multisite > Site Export** ir pasirinkite **Generate new Site Export**. Pasirinkite subsaitę, kurią norite eksportuoti, o tada nurodykite, ar arkivo turėtų būti įtraukta įkrovimai (uploads), pluginai ir temai.

Kai eksportas bus užbaigtas, atsisiųskite ZIP darybą iš sąrašo **Existing Exports**. Eksportavimo ZIP dalys dabar apima savarankiškai paleinantį `index.php` ir `readme.txt`, todėl arkivą galima įkelti į naują hostą ir pradėti veikimą, nepažeidžiant pirmą instalaciją atskirto importavimo plugino.

## Visos tinklo eksportavimas

Naudokite **Network Export** Site Export puslapyje, jei jums reikia vieno darybų, kuri turėtų visus subsaitas tinklu. Tai naudinga prieš host migracijas, katastrofinės atsitikimo varalius (disaster-recovery drills) ar staging rebuilds, kai kiekviena subsite turi eiti kartu.

Kadangi tinklo eksportas gali būti daug didesnis nei vienos svetainės eksportas, paleiskite jį per mažai naudojamą laikotarpį ir patikrinkite, ar jūsų tikslinė saugojimo vietos yra atstovus laisvos vietos įkrovimams, pluginams, temams ir generojami ZIP failais.

### Tinklo importavimo darybai (Network Import Bundles)

Nuo Ultimate Multisite 2.12.0 Site Exporter gali generuoti **network import bundles** – specializuotus arkivus, skirtus optimizuotai tinklo plėtiniu svetainų atnaujinimui. Tinklo importavimo daryba apima visus reikiamus failus ir metadatos, kad galėtumėte atnaujinti daug svetaini į naują tinklo instalaciją.

#### Tinklo importavimo darybos generavimas

1. Per **Ultimate Multisite > Site Export** eili
2. Paspažkite **Generate new Network Export** (Sukurti naują tinklo eksportą)
3. Pasirinkite **Network Import Bundle** kaip eksporto tipą
4. Nurodykite, ar norite įtraukti įtraukimus (uploads), pluginus ir temų
5. Paspažkite **Generate** (Sukurti)
6. Apsaukti ZIP paketį iš sąrašo **Existing Exports** (Eksistojantų eksportų)

#### Atvežimas iš Network Import Bundle

Atvežimui vietinių siti iš tinklo importo paketo:

1. Įdėkite Ultimate Multisite į jūsų tikslinį hostą
2. Pakeiskite multisite nustatymo žaizdį (setup wizard)
3. Per **Ultimate Multisite > Site Export** naujo tinkloje
4. Paspažkite **Import Network Bundle** (Atvežti tinklo paketą)
5. Įkeldinkite ZIP failą tinklo importo pakete
6. Sekite ekrano instrukcijas, kurios pateikiamos importui
7. Importas atvežs visus siti, jų turinį ir konfigūracijas

Network import bundle išlaiko:
- Siti turinį (posteriai, puslapiai, pritaikytų turinio tipai)
- Siti nustatymus ir parinktis
- Vartotojų vaidmenys ir įgalybės
- Pluginus ir temas (jei jie buvo įtraukti į paketą)
- Medijos įtraukimus (jei jie buvo įtraukti į paketą)
- Pritaikytų duomenų bazės lentelė ir duomenys

## Įdėkite savai paleidant eksporto ZIP failą

Atvežimui savai paleidant ZIP failą naujame hosty:

1. Įkeldinkite eksporto ZIP treści į tikslinio web root (pagrindinį katalogą)
2. Atidarykite įkeltą `index.php` naršalioje
3. Sekite ekrano instrukcijas, kurias pateikia paketui eksporto paketas
4. Peržiūrėkite paketui eksporto specifikus žymių (`readme.txt`) nurodytas pastabų prieš pašalinant vamzdyninius failus.

Daugiau informacijos apie įtraukimo ir importo detales, naudokite [Site Exporter addon documentation](/addons/site-exporter).

Jei naudojate vienos sito įrenginį Ultimate Multisite 2.9.0 versijoje, peržiūrėkite [Export & Import](/user-guide/administration/export-import).
