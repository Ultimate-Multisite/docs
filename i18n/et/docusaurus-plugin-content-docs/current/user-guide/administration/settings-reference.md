---
title: Seadistusviide
sidebar_position: 11
_i18n_hash: 0259b88b319090b358483322ad97fc2d
---
# Sättedustused viivitus

See lehekülendus jälgib sätteid, mis mõjutavad igapäevastlikku administraatorimist ja hiljutisi käitumis muutusi Ultimate Multisite'is.

## Muud valikud

**Muud valikud** on nähtavad **Ultimate Multisite > Settings > Login & Registration** allpool.

| Sätted | Kirjeldus |
|---|---|
| **Enable Jumper** (Jumperi aktiveerimine) | Näitab Jumperi kiire navigatsioonivara adminiituri allpool. Kasutage seda, et hüpata otse Ultimate Multisite ekrane, võrku objekti ja toetatud adminiituri kohalikele. Lülitage see välja, kui ei soovi seda kiiraltielet näha. |

## Väljakutuse ja telemetria raportimine

Esimene väljakutuse raportimise aktiveerimise sätte on eemaldatud sätteleheest. Anonüümne telemetria on välja lülitatud, ja selle aktiivset kontrolli jaoks UI-l ei ole seadistust.

Kui säilitate sisemisi tööjuhendid või pildid sättelehe kohta, eemaldage viidused vanuse väljakutuse aktiveerimise valikust, et administraatorid ei otsida sätteet, mis on nüüd mitteolemas.

## Import/Export sätted

**Import/Export** tab kirjeldab, millise seadistuste see kontrollib ja linkub otse **Ultimate Multisite > Site Export**i jaoks site- ja võrku arkidele. Kasutage sättest tab import/export konfiguratsiooniks, kasutage **Tools > Export & Import**i jaoks ühtlaiksite export/import töövoogiku ja kasutage Site Exporti tööriitu, kui vajate täielikat Võrku Export arkivi.

## AI-pakkumise kontakti sätted

AI-pakkumise kontaktide sätted avastavad nüüd ainult toetatud OAuth konto poolid:

| Püüdja | Seadistusviis |
|---|---|
| **Anthropic Max** | Ühendage üks või mitu Anthropic Max konti OAuth-nupuga. Kasutage manuaalset OAuth-alternatiivi, kui sandboxed brauser ei suuda automaatselt ühendust lõpetada. |
| **OpenAI ChatGPT/Codex** | Ühendage ChatGPT kontid sama OAuth-pool töövoogu abil. Kontessoriga toetud operatsioonid võivad konto ühendamist pärast seda ChatGPT Codex tööriistatest kasutada. |
| **Google AI Pro** | Ühendage Google AI Pro kontid OAuth-ga, seejärel värskendage kontessori, kui konti loend ei uuenda kohelt. |

Cursor Pro on enam mitte toetatud püüdj. Eemaldage vanad sisemised screenshots, runbookid või onboarding sammud, mis mainivad Cursor Pro seadistuse väljakutekuid või kontessorite tegelema.

Püüdja kontide lisamise või eemaldamise ajal tuleb sisestada valide email aadress konto värskendamiseks või eemaldamiseks ja salvestada püüdj seadistused enne kontessoriga toetud operatsioonide testimist.
