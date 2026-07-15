---
title: Faahfaahin iyo Warbixin Suurtagalka Macmiilka
sidebar_position: 25
_i18n_hash: b8cc1801782ca29dbdcddcf9db34fb48
---
# Warbixinta Macnaha Macaamihii iyo Warbixinta Dhibaatooyinka

Gratis AI Agent v1.5.0 wuxuu soo bandhigay nidaam la dhisay oo lagu bixiyo warbixinta macnaha iyo dhibaatooyinka, kaas oo u oggolaanaya isticmaalayaasha ugu dambayska inay calaamadeyn ku jawaabaha aan caawinayn oo ay si toos ah uga warbixiyaan interface-ka wada hadalka. Nidaamkan waxaa ka mid ah maamulka oggolaanshaha (consent management), amarka warbixinta oo automatigueed, iyo kala qaadista AI-ga ee dhanka dambe (backend).

## Badhka "Thumbs-Down" (Ka Duubka) {#thumbs-down-button}

Qayb kasta oo uu bixiyo agabka caawiyaha AI-ga waxaa ku yaalla badhan **thumbs-down** (👎). Marka isticmaaluhu gujiyeeyo, waxay samayn karaan jawaabta inay tahay mid aan caawinayn ama mid khaldan.

- Badhku wuxuu soo muuqdaa marka la eego (hover) oo ku yaalla jawaab kasta oo ka dambeysa agabka caawiyaha.
- Gujinta badhka waxay furaysaa **Feedback Consent Modal** (Modal-ka Oggolaanshaha Macnaha).
- Macnaha ayaa la xiriira dhanka wada hadalka iyo qoraalka gaarka ah ee jawaabta.

## Feedback Consent Modal (Modal-ka Oggolaanshaha Macnaha) {#feedback-consent-modal}

Marka isticmaaluhu gujiyeeyo badhka thumbs-down, modal-ka oggolaanshaha ayaa soo muuqda ka hor inta aan la dirin wax data ah. Modal-ku wuxuu:

- Sharaxayaa macluumaadka la qaadayo (qayb ka mid ah wada hadalka, goobta browser-ka).
- Weydiinaya isticmaalaha inuu xaqiijiyo inuu ogolaanayo inuu wadaagto dataani.
- Bixiya meel qoraal oo la isku beddelo (free-text field) si isticmaalahu u sharaxo waxa ka lumay.
- Bixiya fursad **Cancel** si loo xirmo iyadoon la dirin.

Ma jirto warbixin la diiwaangeliyo ilaa isticmaaluhu si cad u xaqiijiyo.

## Auto-Prompt Feedback Banner (Bannarka Warbixinta Tooska ah) {#auto-prompt-feedback-banner}

Marka la dhammaado wada hadalka, caawiyaha ayaa laga yaabaa inuu soo bandhigo **auto-prompt feedback banner** — fariin aan si xoog leh u ah oo weydiinaysa maalinaysay session-ku mid caawin ah.

Bannarkaasi wuxuu si toos ah ugu soo muuqdaa iyadoo ku xiran habka wada hadalka iyo natiijada uu ka dhashay. Wuxuu la xiriira habka warbixinta ee badhka thumbs-down. Isticmaalayaasha waxay ka xirayaan bannarka iyadoon bixin macnaha.

## /report-issue Slash Command (Amarka "Slash Command") {#report-issue-slash-command}

Isticmaalayaasha waxay si toos ah u dhaqmi karaan habka warbixinta adigoo qoraya `/report-issue` gudaha meesha lagu qoraa wada hadalka. Amarkani wuxuu:

- Si furmiso Modal-ka Ogolaanshaha (Feedback Consent) si furaa isla markiiba.
- Waxay buuxdaa qoraalka sharraxaadda (description field) macluumaad ku saabsan wada hadalka hadda jira.
- Waxay u oggolaanaysaa isticmaalayaasha inay ku darto faahfaahin dheeri ah ka hor inta aan la soo gudbiyo.

Amarka `/report-issue` waxaa loo isticmaali karaa dhammaan qaababka wada hadalka (inline, floating widget, full-screen).

## AI-Assisted Triage (Talaabooyinka AI-ga caawinaya) {#ai-assisted-triage}

Macluumaadka la soo gudbiyay ayaa loo diraya heer kala saarista (triage layer) oo ah AI kaas oo:

- Qaybinta warbixinta (error-ka macluumaadka, jawaabta aan caawinaysa, waxyaabaha khaldan/aan u habboon, iwm.).
- Ku xiraya macluumaadka la xiriira wada hadalka.
- Soo diraya soo koobidda kala saarista (triage summary) **Feedback Endpoint** ee aad dejisay (arkoo arki [Settings > Advanced](#settings-advanced)).

Tani waxay yareysaa waqtiga dib u eegista gacanta iyadoo la soo bandhigayo arrimaha ugu muhiimsan marka hore.

## Settings > Advanced {#settings-advanced}

Si aad u furto saddexda dhinac ee AI-ga caawinaya (feedback backend), si fiican u dejinta qaybaha soo socda oo ku jira **Gratis AI Agent → Settings → Advanced**:

| Field | Sharaxaad |
|---|---|
| **Feedback Endpoint URL** | URL-ka uu qaadanayo codsiyada POST ee la soo diraya macluumaadka faahfaahinta (JSON). |
| **Feedback API Key** | Token-ka Bearer-ka ah ee lagu dirayo header-ka `Authorization` si loo xaqiijiyo soo gudbinta warbixinta. |

Haddii aad labada dhinac iska tagto, waxaad ka hor-u-furtaa ururinta warbixinta (feedback collection). Badanka badhalka faahfaahinta (feedback buttons) wuu weli muuqdaa isticmaalayaasha, laakiin soo gudbiyaha ma la dirin.

:::tip
Feedback endpoint-ka waa inuu aqbalaa body JSON oo leh qaybo ugu dambaysa `message_id`, `conversation_id`, `feedback_text`, iyo `triage_category`. Sii dokumentiga bixiyaha endpoint-kaaga si aad u aragto qaabka la filayo (schema).
:::
