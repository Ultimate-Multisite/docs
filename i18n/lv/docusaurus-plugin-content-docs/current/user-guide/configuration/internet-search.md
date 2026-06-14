---
title: Interneta meklēšana
sidebar_position: 26
_i18n_hash: e0c88931760a1b490767e39aad86c70f
---
# Interneta meklēšana

Gratis AI Agent v1.5.0 dod iespēju **Interneta meklēšanu**, kas ļauj AI asistentam saņemties aktuলাস informācijas no interneta mūsu sarunas laikā. Šo funkciju palieca [Brave Search API](https://brave.com/search/api/) vai [Tavily API](https://tavily.com/).

## Kā tas darbojas

Kad Interneta meklēšana ir ieslēgta, asistentam var automātiski jautāt jūsu konfiguriētu meklēšanas pakalpojumu, ja tas novērš uzmanību uz to, ka jautājumam nepieciešama aktuāla vai ārējā informācija — piemēram, jaunumi, dzīvs cenas vai dokumentācija, kas var būt mainījusies kopš modela apmācības pēdējā datumu.

Rezultāti tiek saņemti reālla laikā un iediedināti asistentam kontekstā pirms tas sniedz atbildi. Asistents norāda, kad ir izmantojis meklēšanas rezultātus jautājumam atbildēt.

## Interneta meklēšanas ieslēgšana

Interneta meklēšanai nepieciešams API sils no jūsu izvēlēto meklēšanas pakalpojuma. Konfigurēšanu veikt:

1. Ieiet uz **Gratis AI Agent → Settings → Advanced**.
2. Atrodiet atvēršanas sarakstu **Internet Search Provider** un izvēlieties vai **Brave Search**, vai **Tavily**.
3. Īstiet savu API sili correspondingā laukā. Pēc katra lauka ir redzami reģistrācijas saiti.
4. Nospiediet **Save Settings**.

Kad sils ir saglabāts, Interneta meklēšanas iespēja automātiski kļūst pieejama asistentam.

## Brave Search

### API sils iegūšana Brave Search

1. Apmeklējiet [Brave Search API lapu](https://brave.com/search/api/).
2. Reģistrējieties plānā. Ir pieejams bezmaksas līmenis ar mēnesīgu pieprasījumu ierobežojumu.
3. Kopējiet savu API sili no Brave Search developer dashboarda.
4. Piestipriniet to **Brave Search API Key** laukā Gratis AI Agent iestatījumos.

### Izmantojuma ierobežojumi

Izmaksas tiek maksātas Brave Searcha atkarīgi no meklēto jautājumu skaitu. Katra AI atbilde, kas izraisīja meklēšanu, skaits kā viena jautājums. Uzraudziet savu lietošanu [Brave Search developer dashboard](https://brave.com/search/api/), lai izvairītos no nepriekšparedzami maksājumiem.

## Tavily

Superdav AI Agent v1.10.0 pievieno **Tavily** kā alternatīvu interneta meklēšanas pakalpojumu, kas piedāvā rīcīgākus meklēšanas rezultātus un uzlabotas pētījuma iespējas.

### Tavily API svara iegūšana

1. Apmeklējiet [Tavily API lapu](https://tavily.com/).
2. Reģistrējieties kā lietotājs. Ir pieejams bezmaksas līmenis ar mēnesīgu pieprasījumu ierobežojumu.
3. Kopējiet savu API svari no Tavily dashboarda.
4. Piestipriniet to **Tavily API Key** laukā Gratis AI Agent iestatījumos.

### Lietošanas ierobežojumi

Lietošana tiek maksāta Tavilyem atkarīgi no veikto API zvanu skaita dēļ. Katra AI atbilde, kas izraisīja meklēšanu, skaits kā viens zvanis. Uzraudziet savu lietošanu [Tavily dashboardā](https://tavily.com/), lai izvairītos no nepriekšparedzami maksājumiem.

## Interneta meklēšanas atslēgšana

Atņemiet API svari no aktīvās meklēšanas pakalpojuma lauka un saglabājiet. Asistenta interneta meklēšanas spējā vēl nepietiks piedāvāt.

:::note
Interneta meklēšana palielina atbildēm vērpjojumu, jo asistents jāgaida meklēšanas rezultāti pirms atbildes generēšanas. Laika kritiskās lietotnes, ko varētu izmantot, apskatiet, vai reala meklēšana ir nepieciešama vai vai asistenta iekļautais zinātnis ir pietiekams.
:::
