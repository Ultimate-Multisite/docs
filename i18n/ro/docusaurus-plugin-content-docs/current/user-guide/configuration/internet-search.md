---
title: Căutare pe internet
sidebar_position: 26
_i18n_hash: e0c88931760a1b490767e39aad86c70f
---
# Căutare pe Internet

Gratis AI Agent v1.5.0 adaugă o capacitate de **Căutare pe Internet** care îi permite asistentului AI să recupereze informații actualizate de pe web în timpul unei conversații. Aceasta este alimentată de [Brave Search API](https://brave.com/search/api/) sau de [Tavily API](https://tavily.com/).

## Cum Funcționează

Când căutarea pe internet este activată, asistentul poate interoga automat furnizorul de căutare pe care l-ați configurat atunci când determină că o întrebare necesită informații actuale sau externe — de exemplu, știri recente, prețuri în timp real sau documentație care ar fi putut să se schimbe de la data limită de antrenare a modelului.

Rezultatele sunt recuperate în timp real și injectate în contextul asistentului înainte ca acesta să genereze o răspuns. Asistentul indică când a folosit rezultatele căutării pentru a răspunde la o întrebare.

## Activarea Căutării pe Internet

Căutarea pe internet necesită o cheie API de la furnizorul de căutare ales. Pentru a o configura:

1. Mergeți la **Gratis AI Agent → Settings → Advanced**.
2. Localizați meniul derulant **Internet Search Provider** și selectați fie **Brave Search**, fie **Tavily**.
3. Introduceți cheia API în câmpul corespunzător. Link-urile de înregistrare sunt afișate lângă fiecare câmp.
4. Faceți clic pe **Save Settings**.

Odată ce cheia este salvată, capacitatea de Căutare pe Internet este disponibilă automat pentru asistent.

## Brave Search

### Obținerea unei Chei API Brave Search

1. Vizitați pagina [Brave Search API](https://brave.com/search/api/).
2. Înregistrați-vă pentru un plan. Este disponibil un nivel gratuit cu un limită de cereri lunară.
3. Copiați cheia API din dashboard-ul dezvoltatorului Brave Search.
4. Lipiți-o în câmpul **Brave Search API Key** din setările Gratis AI Agent.

### Limitele de Utilizare

Utilizarea este facturată de Brave Search în funcție de numărul de interogări efectuate. Fiecare răspuns AI care declanșează o căutare se numără ca o interogare. Monitorizați utilizarea în [Brave Search developer dashboard](https://brave.com/search/api/) pentru a evita costuri neașteptate.

## Tavily

Superdav AI Agent v1.10.0 adaugă **Tavily** ca furnizor alternativ de căutare pe internet, oferind rezultate de căutare mai bogate și capacități avansate de cercetare.

### Obținerea unei Chei API Tavily

1. Vizitați pagina [Tavily API](https://tavily.com/).
2. Înregistrați-vă pentru un cont. Este disponibil un nivel gratuit cu un limită de cereri lunară.
3. Copiați cheia API din dashboard-ul Tavily.
4. Lipiți-o în câmpul **Tavily API Key** din setările Gratis AI Agent.

### Limitele de Utilizare

Utilizarea este facturată de Tavily în funcție de numărul de apeluri API efectuate. Fiecare răspuns AI care declanșează o căutare se numără ca un apel. Monitorizați utilizarea în [Tavily dashboard](https://tavily.com/) pentru a evita costuri neașteptate.

## Dezactivarea Căutării pe Internet

Eliminați cheia API din câmpul furnizorului de căutare activ și salvați. Capacitatea de Căutare pe Internet nu va mai fi oferită asistentului.

:::note
Căutarea pe internet adaugă latență răspunsurilor deoarece asistentul trebuie să aștepte rezultatele căutării înainte de a genera un răspuns. Pentru cazuri de utilizare sensibile în timp, luați în considerare dacă căutarea în timp real este necesară sau dacă cunoștințele încorporate ale asistentului sunt suficiente.
:::
