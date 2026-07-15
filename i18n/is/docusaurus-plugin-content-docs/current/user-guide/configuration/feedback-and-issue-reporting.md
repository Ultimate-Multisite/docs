---
title: Til aðilfargildi og ávarðtölur
sidebar_position: 25
_i18n_hash: b8cc1801782ca29dbdcddcf9db34fb48
---
# Samræmi og Tilbylgdir við Klientum

Gratis AI Agent v1.5.0 hefur innbyggt kerfi fyrir tilbylgdir og tilbylgdir um það sem er ekki hlutverandi, sem leysir því að endvirkjafar geti merkt óhjákvæmilega svar og tilgreina vanda beint frá chat-menulinum. Þetta kerfi felur í sér stjórnun samþykki, sjálfskipta tilbylgdir kommando og AI-hjálpað sorteringu bak við skjalann.

## Knúkur Ned (Thumbs-Down Button) {#thumbs-down-button}

Hvert sem texta sem AI-hjálparinn sender, sýnir **knúk ned** (👎) knapp. Þegar notandi klikkar á hana, getur hann merkt svar sem er óhjákvæmilega ekki hlutverandi eða óréttur.

- Knappen sýnist við hover næst hverjum texta sem hjálparinn hefur send.
- Þegar það klikkast á, opnast **Feedback Consent Modal**.
- Tilbylgdin er tengd samræðarþráð og sérstaklega textanum.

## Feedback Consent Modal {#feedback-consent-modal}

Þegar notandi klikkar á knúk ned, sýnist einn samþykki modalur fyrir því að nýtt data sé send. Modalurinn:

- Skýr hvaða upplýsingar munu verið safna (tekstafra útdræði samræðarinnar, samhengi brauzers).
- Spyr notandann um samþykki að deila þessum upplýsingum.
- Felir fram fræðilegt felt fyrir notandann til að lýsa því hvað var óréttur.
- Felir fram **Cancel** valkostning sem getur skipti úr án þess að senda fylgja.

Inga tilbylgdir eru rekinn eftir því sem notandi sjálfur bekreftar það.

## Sjálfskipt Feedback Banner {#auto-prompt-feedback-banner}

Í stuttu máli á síð endar samræðarinnar, getur hjálparinn sýna **sjálfskipt feedback banner** — ekki innrihaldsleg texta sem spyr um því hvort session var hlutverandi.

Þessi banner sýnist sjálfskipt eftir lengd samræðarinnar og skilyrði á raunni. Hann tengist sama tilbylgdir ferli sem knúkur ned. Notendur geta skipti úr bannari án þess að gefa tilbylgdir.

## /report-issue Slash Command {#report-issue-slash-command}

Notendur geta hringt fram tilbylgdir ferli beint með því að skrifa `/report-issue` í inntakshlutinn fyrir chat. Þessi kommando:

Opnar fyrir Tilgangsstjórnarskjalinu strax.
Fyllir skjalinn með samhengi um samtalið.
Leitir að því að leita að auðveldlega viðbótshlut.

`/report-issue` kommandoinn er til að nota í öllum samtalsformum (inline, floating widget, full-screen).

## AI-Assisted Triage {#ai-assisted-triage}

Tilgangurinn er sendur til AI triage lag sem:

- Skilgreinir skýrslu (faktúar villu, óhjálpandi svari, ólýsingarinnu innihald, osakan).
- Skýrir viðeigandi metadatas samtalsins.
- Sendur samantekt til triage **Feedback Endpoint** (sjá [Settings > Advanced](#settings-advanced)).

Þetta minnkar þörf fyrir mannan skoðun með því að sýna algengustu og mikilvægasteilur fyrst.

## Settings > Advanced {#settings-advanced}

Til að aktíva backend tilgangsinn, skilja eftir eftirfarandi felta undir **Gratis AI Agent → Settings → Advanced**:

| Felt | Skjalði |
|---|---|
| **Feedback Endpoint URL** | URL sem tekur POST skjalði með feedback upplýsingum (JSON). |
| **Feedback API Key** | Bearer token sem sendast í `Authorization` header fyrir staðfestingu innsendunar tilgangsins. |

Látðu bæði felta blanka til að inaktíva innsendingu tilgangsins. Einkunnar viðbótshlutir eru framkvæmdar fyrir notendur, en innsendingar verða ekki sendar vidare.

:::tip
Tilgangurinn þarf að taka JSON body með mínst `message_id`, `conversation_id`, `feedback_text` og `triage_category` felta. Sjá dokumentasjonen þínum endpoint-hugbúnaðarinnar fyrir væntan skjalann.
