---
title: Ultimate AI Connector for WebLLM izmaiņu žurnāls
sidebar_position: 99
_i18n_hash: da117fc30b104eada947892d417a2899
---
# Ultimate AI Connector for WebLLM izmaiņu žurnāls

## Versija 1.1.0 — izlaista 2026-04-09 {#version-110--released-on-2026-04-09}

* Jauns: peldošs tērzēšanas logrīks ar admin-bar statusa indikatoru — jebkurš pieteicies lietotājs var uzdot vaicājumu pārlūka puses LLM tieši no priekšgala.
* Jauns: SharedWorker izpildlaiks — MLC dzinis tagad darbojas SharedWorker, lai vairākas cilnes koplietotu vienu GPU sesiju, nevis savstarpēji par to cīnītos.
* Jauns: apiFetch starpprogrammatūras pārtvērējs — WordPress REST pieprasījumi, kas atbilst AI Client SDK modelim, tiek caurspīdīgi maršrutēti uz lokālo WebLLM brokeri, bez nepieciešamības veikt loopback HTTP turp-atpakaļ pieprasījumu.
* Jauns: logrīka iestatījumu UI Connector panelī tērzēšanas logrīka pārslēgšanai un automātisko vaicājumu darbības konfigurēšanai.
* Labojums: piespiedu IndexedDB kešatmiņas backend, lai modeļa svaru lejupielādes pārdzīvotu HuggingFace xet CDN pāradresācijas, kas salauž noklusējuma Cache API ceļu.
* Labojums: izlaist context_window KV-cache pārrakstīšanu iegulšanas modeļiem (tiem nav dekodera, un pārrakstīšana izraisīja izpildlaika kļūdu).
* Labojums: reklamēt aukstā starta kandidātmodeli /webllm/v1/models, pirms worker cilne ir ielādēta, lai SDK patērētāji uzreiz redzētu modeli.
* Labojums: pieslēgt WebLLM wpai_preferred_text_models filtram, lai AI Experiments funkcija maršrutētu uz pārlūka dzini, kad ir konfigurēts modelis.
* Uzlabots: kešatmiņas apiešana, satura normalizācija un aparatūras atsauču labojumi, kas atklājās pilna cikla testēšanas laikā.

## Versija 1.0.0 — sākotnējais laidiens {#version-100--initial-release}
