---
title: Puna ng Kustomer at Pag-uulat ng Isyu
sidebar_position: 25
_i18n_hash: b8cc1801782ca29dbdcddcf9db34fb48
---
# Pagbibigay ng Feedback at Pag-uulat ng Problema

Nagpapakilala ang Gratis AI Agent v1.5.0 ng isang built-in na sistema para sa pagbibigay ng feedback at pag-uulat ng problema. Pinapayagan nito ang mga end-user na markahan ang mga sagot na hindi nakakatulong at mag-ulat ng mga problema nang direkta mula sa chat interface. Kasama sa sistemang ito ang consent management, isang automated reporting command, at AI-assisted triage sa backend.

## Thumbs-Down Button

Ang bawat mensahe na ipinadala ng AI assistant ay nagpapakita ng **thumbs-down** (👎) button. Kapag pinindot ito ng user, maaari nilang markahan ang isang sagot bilang hindi nakakatulong o mali.

- Lumalabas ang button sa pag-hover sa tabi ng bawat mensahe ng assistant.
- Kapag pinindot ito, lalabas ang **Feedback Consent Modal**.
- Ang feedback ay iniuugnay sa conversation thread at sa tiyak na mensahe.

## Feedback Consent Modal

Kapag pinindot ng user ang thumbs-down button, lalabas ang isang consent modal bago ipadala ang anumang data. Ang modal ay:

- Nagpapaliwanag kung anong impormasyon ang kokolektahin (excerpt ng conversation, browser context).
- Hinihiling sa user na kumpirmahin na pumapayag sila sa pagbabahagi ng data na ito.
- Nagbibigay ng free-text field para ilarawan ng user kung ano ang nagkamali.
- Nag-aalok ng **Cancel** option para isara nang hindi nagpapadala.

Walang feedback ang ire-record hangga't hindi hayag na kinukumpirma ng user.

## Auto-Prompt Feedback Banner

Sa pagtatapos ng isang conversation, maaaring magpakita ang assistant ng isang **auto-prompt feedback banner** — isang hindi nakakaabala na mensahe na nagtatanong kung nakatulong ba ang session.

Ang banner na ito ay awtomatikong lumalabas batay sa haba at mga heuristic ng outcome ng conversation. Ito ay nagli-link sa parehong feedback flow ng thumbs-down button. Maaari ding isara ng user ang banner nang hindi nagbibigay ng feedback.

## /report-issue Slash Command

Maaari ding i-trigger ng mga user ang feedback flow sa pamamagitan ng pag-type ng `/report-issue` sa chat input. Ang command na ito ay:

- Agad na nagbubukas ng Feedback Consent Modal.
- Naglalagay ng pre-populated na konteksto tungkol sa kasalukuyang conversation sa description field.
- Nagpapahintulot sa mga user na magdagdag pa ng detalye bago mag-submit.

Ang `/report-issue` command ay available sa lahat ng chat modes (inline, floating widget, full-screen).

## AI-Assisted Triage

Ang ipinasa na feedback ay dinadala sa isang AI triage layer na:

- Nagkakategorya ng report (factual error, unhelpful answer, inappropriate content, atbp.).
- Nagkakabit ng kaugnay na conversation metadata.
- Ipinapasa ang triage summary sa naka-configure na **Feedback Endpoint** (tingnan ang [Settings > Advanced](#settings-advanced)).

Binabawasan nito ang manual review time sa pamamagitan ng pagpapakita muna ng pinaka-kritikal na mga isyu.

## Settings > Advanced {#settings-advanced}

Upang ma-enable ang feedback backend, i-configure ang mga sumusunod na field sa ilalim ng **Gratis AI Agent → Settings → Advanced**:

| Field | Description |
|---|---|
| **Feedback Endpoint URL** | Ang URL na tumatanggap ng POST requests na may feedback payloads (JSON). |
| **Feedback API Key** | Bearer token na ipinapadala sa `Authorization` header para sa pag-authenticate ng mga feedback submission. |

Iwanang blangko ang parehong field upang i-disable ang pagkokolekta ng feedback. Mananatiling visible sa mga user ang individual feedback buttons, ngunit hindi ipapasa ang mga submission.

:::tip
Dapat tanggapin ng feedback endpoint ang isang JSON body na may hindi bababa sa mga field na `message_id`, `conversation_id`, `feedback_text`, at `triage_category`. Tingnan ang dokumentasyon ng iyong endpoint provider para sa inaasahang schema.
:::
