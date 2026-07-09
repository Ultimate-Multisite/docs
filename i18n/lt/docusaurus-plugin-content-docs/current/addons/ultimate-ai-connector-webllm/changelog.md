---
title: 'Ultimate AI Connector, skirtas WebLLM, pakeitimų žurnalas'
sidebar_position: 99
_i18n_hash: da117fc30b104eada947892d417a2899
---
# Ultimate AI Connector for WebLLM pakeitimų žurnalas

## Versija 1.1.0 — išleista 2026-04-09

* Nauja: slankusis pokalbių valdiklis su admin-bar būsenos indikatoriumi — bet kuris prisijungęs naudotojas gali pateikti užklausą naršyklės pusės LLM tiesiai iš priekinės sąsajos.
* Nauja: SharedWorker vykdymo aplinka — MLC variklis dabar veikia SharedWorker, todėl keli skirtukai dalijasi viena GPU sesija, užuot dėl jos varžęsi.
* Nauja: apiFetch middleware perėmiklis — WordPress REST užklausos, atitinkančios AI Client SDK šabloną, skaidriai nukreipiamos į vietinį WebLLM tarpininką, nereikia jokio loopback HTTP kelionės pirmyn ir atgal.
* Nauja: valdiklio nustatymų UI Connector skydelyje, skirta įjungti arba išjungti pokalbių valdiklį ir konfigūruoti automatinio raginimo elgseną.
* Pataisyta: priverstinai naudojama IndexedDB talpyklos posistemė, kad modelio svorių atsisiuntimai išliktų po HuggingFace xet CDN peradresavimų, kurie sugadina numatytąjį Cache API kelią.
* Pataisyta: praleidžiamas context_window KV-cache perrašymas įterpimo modeliams (jie neturi dekoderio, o perrašymas sukeldavo vykdymo klaidą).
* Pataisyta: cold-start kandidatinis modelis reklamuojamas /webllm/v1/models prieš įkeliant darbuotojo skirtuką, todėl SDK vartotojai modelį pamato iš karto.
* Pataisyta: WebLLM prijungtas prie wpai_preferred_text_models filtro, kad AI Experiments funkcija būtų nukreipiama į naršyklės variklį, kai modelis sukonfigūruotas.
* Patobulinta: talpyklos apeitis, turinio normalizavimas ir aparatinės įrangos nuorodų pataisymai, išryškėję visapusiško testavimo metu.

## Versija 1.0.0 — pradinis leidimas
