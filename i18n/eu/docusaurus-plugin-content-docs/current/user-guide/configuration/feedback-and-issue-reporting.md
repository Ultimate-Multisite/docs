---
title: Aldatutako informazioa eta problema-reportatzeko sistema
sidebar_position: 25
_i18n_hash: b8cc1801782ca29dbdcddcf9db34fb48
---
# Mendatutako Informazioa eta Problemaiko Iratsaldeak

Gratis AI Agent v1.5.0-ek iratsalde bat daude, zein irudi ez duendu informazioa markatzeko eta zuzen arteko problemaiak chat interface-etik direktamente iratsaldean emateko sistema bat hasteraz. Hau sistema berehaldearen erantzunak ez duendu edo problemaak direla iratsaldean emateko prozesua, onarripen gestiona, automatikatu informazioa emateko komanda eta backend-eko AI-lerarekin laguntutako triaje (sortu-erregistro) berehaldeak.

## Thumbs-Down Botonu {#thumbs-down-button}

AI asistentiaren artean aurkitutako leku guztietan **thumbs-down** (👎) botonu dago. Erregistro bat erabiltzailearen ikusteko, erantzun bat ez duendu edo ez daiko markatuko emateko prozesua.

- Botonak arteko lekuan erantzunak baten ondoren eratuenean erakusten dira.
- Ikusteko, **Feedback Consent Modal**a iradokitu da.
- Feedback-ek adierazten daiaren eta erantzunaren bestelako parte bat daude.

## Feedback Consent Modal {#feedback-consent-modal}

Erabiltzaileak thumbs-down botona ikusteko, datu edozein ematei aurretik modal bat iradokitu da. Modalak:

- Nola informazioa hartuko da (erantzunaren eredu, browser-ren konteksto).
- Erabiltzaileari datu hauek iratsaldeko jakinarazten onartzen ditelako ematen du.
- Problema dagoela adierazten erabilera erabiltzaileari emateko testu-liburu bat da.
- Ez ematei aurretik ezarritzeko **Cancel** opsioa ematen du.

Erabiltzailearen aukerarekin konfirmatzen ez da iratsaldeak emateko.

## Auto-Prompt Feedback Banner {#auto-prompt-feedback-banner}

Eskaintzen duen erantzunaren amaieran, asistentiaren lekuan **auto-prompt feedback banner** bat eradokia da — sesioa onartu edo ez duendu jakinarazten esaitzen informazio ez agintzen testua.

Hau bannerak erantzunaren lungari eta rezultatuaren ereduak bidez automatikoki eradokia da. Thumbs-down botona erabiliko duen feedback prozesuarekin jota dago. Erabiltzaileak feedback ematei ezarritzeko bannerak ezarritzen dituzte.

## /report-issue Slash Command {#report-issue-slash-command}

Erabiltzaileak chat inputan `/report-issue` eskatzen badon, direktamente feedback prozesua hasi dezakete. Hau komandak:

- Horrekidetza Modalaren (Feedback Consent Modal) hemen deshabilitatu.
- Deskribapena lekuan kontekstua informazioa ez dauden bilardoaren arteko jolaia erantzuneko informazioa ezarrituz pre-populatu egiten du.
- Zaharra emateko aurretik erabiltzaileei espezial detailuak gehitz diezaiola ematen du.

`/report-issue` komandua guztizko chat modueetan (inline, floating widget, full-screen) erabil daiteke.

## AI-Assisted Triage (AI-sortu eta irudi) {#ai-assisted-triage}

Bidututako horrekidetza informazioa AI sortu eta irudia lehiak duen layer-ra iriduta da, zehandiz:

- Horrekidetza informazioa kategorizatzen du (erantzun bat errazioko galera, eztenbest erantzuna, inaptatua kontentua, etc.).
- Jolaia espezial metadata-etan (conversation metadata) hartzen du.
- Sortu eta irudia lehiak duen horrekidetza sumariak konfiguratutako **Feedback Endpoint**-era bidaltzen du (erakurri [Settings > Advanced](#settings-advanced)).

Honek handiagoa manuel irudiaren testuinguruak lehen erantzuna ematen du.

## Settings > Advanced {#settings-advanced}

Horrekidetza backend-a aktiboa egiteko, **Gratis AI Agent → Settings → Advanced**-ean jarraitutako lehen testu hauek konfiguratatu:

| Field (Liku) | Deskribapena |
|---|---|
| **Feedback Endpoint URL** | JSON payload-ek POST esaitzen URL-a. |
| **Feedback API Key** | Horrekidetza bidutzeko autentikazioan `Authorization` header-ean bidaltzen bearing token (Bearer token). |

Hor obuurrekin lehen testuak deshabilitatu. Horrekidetza botontiak erabiltzaileei erakusten jarraitzen du, baina bidutzak ez dira bidaltzen daiteke.

:::tip
Feedback endpoint-ek `message_id`, `conversation_id`, `feedback_text` eta `triage_category` lehen testuak esaitzen JSON body bat hartzea behar da. Esperatutako schema-ra horrekidetzaa emateko erakundearen dokumentazioa ikusi.
:::
