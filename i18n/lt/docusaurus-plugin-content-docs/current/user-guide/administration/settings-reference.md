---
title: Nustatyimų referencija
sidebar_position: 11
_i18n_hash: 0259b88b319090b358483322ad97fc2d
---
# Referencė nustatymams

Ši puslapis surinkia nustatymus, kurie veikia kasdienį administravimą ir naujus veikimo pakeitimus Ultimate Multisite.

## Kiti pasirinkimai

**Kiti pasirinkimai** lauktas yra po **Ultimate Multisite > Settings > Login & Registration**.

| Nustatymas | Aprašymas |
|---|---|
| **Įjungti Jumper** | Rodo Jumper greitai naršymo įrankį administravimo srityje. Naudokite jį, kad tiesiogiai perėjote prie Ultimate Multisite ekranų, tinklo objektų ir palaikytos admininių vietų. Išjunkite jį, jei ne norite šio trumpinio angalo matyti. |

## Klaidų pranešimai ir telemetrijos

Ankštas nustatymas įjungti pranešimus apie klaidų sąlyginimą buvo pašalintas iš nustatyimų puslapio. Anoniminis telemetrijos įjungimas yra išjungtas, ir nėra UI mygtuko jį įjungimui.

Jei laikote internus veiklos instrukcijas (runbooks) ar vaizdo įrašus nustatymų puslapiui, pašalykite nuorodas į seną sąlyginimo laukelį pranešimų apie klaidų sąlyginimą, kad administratoriai ne ieškot naujo nustatymo, kuris jau nėra.

## Import/eksporto nustatymai

**Import/eksporto** nustatymai apibūdina, kokie nustatymus jie kontrolia ir tiesiogiai nuorodina į **Ultimate Multisite > Site Export**, kad gautumėte archyvas svetainės ir tinklo. Naudokite nustatyimų puslapį importo/eksporto konfigūracijai, naudokite **Tools > Export & Import** vienos svetainės eksporto/importo veiklos (workflow) ir naudokite Site Export įrankį, kai jums reikia visos tinklo eksporto archyvas.

## AI tiekėjo jungimo nustatymai

Nustatymai AI tiekėjo jungimo dabar atskleidžia tik palaikytus OAuth paskyrimų grupė:

| Privalėjas | Naudojimo procesas |
|---|---|
| **Anthropic Max** | Sujungkite vieną ar daugiau Anthropic Max paskyrų per mygtuką OAuth. Naudokite manualią OAuth alternatyvą, jei sandboxed naršė neperleidžia redirekcijos be problemų. |
| **OpenAI ChatGPT/Codex** | Sujungtakite ChatGPT paskyras naudojant tą samą procesą zonos (OAuth pool). Po sujungimo, konektoriai palaikomi operacijas, kurios gali naudoti įrankius ChatGPT Codex. |
| **Google AI Pro** | Sujungtakite Google AI Pro paskyras per OAuth, o tada atnaujinkite konektorį, jei sąrašas paskyrų neatsiranki iš karto. |

Cursor Pro nėra palaikomas privalėjas. Išjunkite senus vidinius skaitmeninius įvaizdus, veiksmų instrukcijas ar įkurimo žingsnius, kuriuose paminami Cursor Pro nustatymų laukai arba konektorinių kelių.

Įdarydami arba pašalintį privalėjo paskyras, įveskite galiojantą el. pašto adresą to paskyros, kurį atnaujinama ar ištrunčiate, ir išsaugokite privalėjo nustatymus prieš testuojant konektoriniu pagrįstas veiksmus.
