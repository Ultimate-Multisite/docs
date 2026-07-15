---
title: Feedback sa Kliyente ug Pag-report sa Isyu
sidebar_position: 25
_i18n_hash: b8cc1801782ca29dbdcddcf9db34fb48
---
# Feedback ug Pag-report sa Problema sa Customer

Ang Gratis AI Agent v1.5.0 naghatag og built-in nga sistema para sa paghatag og feedback ug pag-report sa mga problema, diin ang mga end-user makapahimangno sa dili makatabang nga mga tubag ug direktang mag-report og mga problema gikan sa chat interface. Kini nga sistema naglakip sa consent management, usa ka automated reporting command, ug AI-assisted triage sa backend.

## Thumbs-Down Button {#thumbs-down-button}

Ang matag mensahe nga ipadala sa AI assistant adunay **thumbs-down** (👎) button. Kung gi-click kini sa user, mahimo nila i-marka ang tubag isip dili makatabang o sayop.

- Ang button anaa samtang nag-hover kini sa sunod matag mensahe sa assistant.
- Ang pag-click niini magbukas sa **Feedback Consent Modal**.
- Ang feedback konektado sa conversation thread ug sa piho nga mensahe.

## Feedback Consent Modal {#feedback-consent-modal}

Kung gi-click sa user ang thumbs-down button, adunay modal sa consent nga mo-appear sa dili pa mahimong ipadala ang bisan unsang data. Ang modal:

- Nagpatin-aw kung unsa nga impormasyon ang makolekta (excerpt sa conversation, browser context).
- Modangutana sa user kung nag-uyon sila sa pagpaambit niining data.
- Naghatag og free-text field para sa user aron mapasaysay kung unsa ang sayop.
- Naghatag og **Cancel** option aron mawala kini nga dili mag-submit.

Walay feedback ang irekord hangtod nga aktibo gyud kumpirmar sa user.

## Auto-Prompt Feedback Banner {#auto-prompt-feedback-banner}

Sa katapusan sa usa ka conversation, mahimong ipakita sa assistant ang usa ka **auto-prompt feedback banner** — usa ka message nga dili makaguba (non-intrusive) nga nagpangutana kung ang session nakatabang ba.

Kini nga banner awtomatikong mo-appear base sa gitas-on sa conversation ug sa mga pamaagi (heuristics). Nag-link kini sa parehas nga feedback flow sama sa thumbs-down button. Mahimo kining mawala sa banner bisan wala maghatag og feedback.

## /report-issue Slash Command {#report-issue-slash-command}

Mahimong mag-trigger ang mga user sa feedback flow direkta pinaagi sa pag-type og `/report-issue` sa chat input. Kini nga command:

Nagbukas dayon ang Feedback Consent Modal.
Nag-pre-populate na sa description field ang konteksto bahin sa kasamtang panag-istoryahanay.
Nagtugot kini sa mga user nga magdugang og dugang detalye sa dili pa mosubmit.

Ang `/report-issue` command anaa sa tanang chat modes (inline, floating widget, full-screen).

## AI-Assisted Triage {#ai-assisted-triage}

Ang gihatag nga feedback kay i-route sa usa ka AI triage layer nga:

- Nagkategorya sa report (factual error, unhelpful answer, inappropriate content, ug uban pa).
- Nag-attach og mga metadata bahin sa aktuwal nga panag-istoryahanay.
- Ipadala ang summary sa triage ngadto sa configured **Feedback Endpoint** (tan-awa ang [Settings > Advanced](#settings-advanced)).

Kini nagpamenos sa oras sa manual review pinaagi sa pagpakita una sa pinaka-kritikal nga mga isyu.

## Settings > Advanced {#settings-advanced}

Aron ma-enable ang feedback backend, i-configure ang mosunod nga mga field ubos sa **Gratis AI Agent → Settings → Advanced**:

| Field | Deskripsyon |
|---|---|
| **Feedback Endpoint URL** | Ang URL nga makadawat og POST requests uban ang feedback payloads (JSON). |
| **Feedback API Key** | Bearer token nga ipadala sa `Authorization` header para sa pag-authenticate sa mga submission sa feedback. |

Igiya ang duha ka field nga walay sulod aron mapahimangno ang pagkolekta og feedback. Ang mga individual feedback button nagpabilin nga makita sa mga user, apan dili ipadala ang mga submission.

:::tip
Ang feedback endpoint kinahanglan magdawat og JSON body nga adunay labing menos nga `message_id`, `conversation_id`, `feedback_text`, ug `triage_category` fields. Tan-awa ang dokumentasyon sa imong endpoint provider para sa gipaabot nga schema.
:::
