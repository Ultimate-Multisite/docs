---
title: Interneto paieška
sidebar_position: 26
_i18n_hash: e0c88931760a1b490767e39aad86c70f
---
# Internetie ieškojimas {#internet-search}

Gratis AI Agent v1.5.0 pridėjo funkciją **Internet Search**, kuri leidžia AI asistentui gauti naujausi informacijas iš Interneto poaiškos metu. Šią funkciją palaiko [Brave Search API](https://brave.com/search/api/) arba [Tavily API](https://tavily.com/).

## Kaip tai veikia {#how-it-works}

Kai internetie ieškojimas yra įjungtas, asistentas automatiškai gali užduoti klausimą jūsų nustatytam iekytoje platformai, kai nurodytų, kad klausimui reikia naujų ar vidurinių informacijos – pavyzdžiui, naujienų, tiesioginės kainos ar dokumentacijos, kuri galėjo pakeisti nuo modelio mokymosi laiko.

Rezultatai gautomi realiu laiku ir įdėjami į asistento kontekstą prieš generuojant atsakymus. Asistentas nurodo, kai jis naudojo ieškojimo rezultatus, kad atsakytų į klausimą.

## Internetie ieškojimo įjungimas {#enabling-internet-search}

Internetie ieškojimui reikia API rašinio jūsų pasirinkto iekytoje platformai. Norėdami ją nustatyti:

1. Eikite į **Gratis AI Agent → Settings → Advanced**.
2. Raskykite **Internet Search Provider** 드롭다운 meniu ir pasirinkite arba **Brave Search**, arba **Tavily**.
3. Įveskite savo API rašinį atitinkamame lauke. Registracijos nuorodas rodomos kairėje prie kiekvieno lauko.
4. Spauskite **Save Settings** (Išsaugoti nustatymus).

Kai rašnis bus išsaugotas, Internetie ieškojimo galimybė būna automatiškai tersedia asistentui.

## Brave Search {#brave-search}

### Brave Search API rašinio gauti {#obtaining-a-brave-search-api-key}

1. Eikite į [Brave Search API puslapį](https://brave.com/search/api/).
2. Registruokite planą. Išsavailis yra su mėnesio laiko laiku skaičių limitu.
3. Kopijuokite savo API rašinį iš Brave Search developer dashboardo.
4. Įdėkite jį į **Brave Search API Key** lauką Gratis AI Agent nustatymuose.

### Naudojimo laimi {#usage-limits}

Vadyba skaičiuojama Brave Search pagal atsakytų klausimų skaičių. Kiekvienas AI atsakymas, kuris vyriauna paiešką, skaičiuojamas kaip vienas klausimas. Stabdymo peržiūrėkite [Brave Search developer dashboard](https://brave.com/search/api/), kad išvengtumėte neįvykdytų įnašymų.

## Tavily {#tavily}

Superdav AI Agent v1.10.0 pridėjo **Tavily** kaip alternatyvų internet paieškos tiekėją, siūlydami giliaus paieškos rezultatus ir pažangiajusiai tyrimo galimybes.

### Tavily API kodo įsigijimas {#obtaining-a-tavily-api-key}

1. Eikite [Tavily API puslapį](https://tavily.com/).
2. Registruokite paskyrą. Iš viso yra laisva lygis su mėnesio užklausų limitu.
3. Kopkite savo API kodo raktą iš Tavily dashboardo.
4. Įdėkite jį į **Tavily API Key** laukelį Gratis AI Agent nustatymuose.

### Naudojimo laimi {#usage-limits-1}

Naudojimas skaičiuojamas tavily pagal atliktų API vaizdų skaičių. Kiekvienas AI atsakymas, kuris vyriauna paiešką, skaičiuojamas kaip vienas vaizdas. Stabdymo peržiūrėkite [Tavily dashboardą](https://tavily.com/), kad išvengtumėte neįvykdytų įnašymų.

## Internet paieškos deaktivavimas {#disabling-internet-search}

Išimkite API kodą iš aktyvumo paieškos tiekėjo laukelio ir išsaugokite. Asistentui nebus siūlomas internet paieškos galimybe.

:::note
Internet paieška pridėja laiko atsakymams, nes asistentas turi laukti paieškos rezultatų prieš generuojant atsakymą. Laikyti svarbiems laiku atvejams, ar reikalinga realios laiko paieška ar ar asistento įtrauktas žinios yra pakankamos.
:::
