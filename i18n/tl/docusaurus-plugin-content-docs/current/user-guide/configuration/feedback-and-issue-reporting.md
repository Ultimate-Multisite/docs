---
title: Feedback ng Customer at Pag-uulat ng Isyu
sidebar_position: 25
_i18n_hash: b8cc1801782ca29dbdcddcf9db34fb48
---
# Feedback at Customer & Isyu Reporting

Ang Gratis AI Agent v1.5.0 ay may kasamang sistema para sa pag-report ng feedback at isyu na pinapayagan ang mga end user na mag-flag ng hindi nakakatulong na sagot at mag-report ng problema nang direkta mula sa chat interface. Kasama sa sistemang ito ang consent management, isang automated reporting command, at AI-assisted triage sa backend.

## Thumbs-Down Button {#thumbs-down-button}

Bawat mensaheng ipinapadala ng AI assistant ay may **thumbs-down** (👎) button na ipinapakita. Kapag pinindot ito ng user, maaari nilang markahan ang isang sagot bilang hindi nakakatulong o mali.

- Lumilitaw ang button kapag nag-hover sa tabi ng bawat mensahe ng assistant.
- Ang pagpindot dito ay magbubukas ng **Feedback Consent Modal**.
- Ang feedback na ito ay iniuugnay sa thread ng usapan at sa partikular na mensahe.

## Feedback Consent Modal {#feedback-consent-modal}

Kapag pinindot ng user ang thumbs-down button, may lalabas na consent modal bago ipadala ang anumang data. Ang modal na ito ay:

- Nagpapaliwanag kung anong impormasyon ang kokolektahin (excerpt ng usapan, konteksto ng browser).
- Tinatanong sa user kung sumasang-ayon sila na ibahagi ang datos na ito.
- Nagbibigay ng free-text field para ilarawan ng user kung ano ang nagkamali.
- Nag-aalok ng opsyong **Cancel** upang itapon nang hindi nagpapadala.

Walang feedback ang itatala hangga't tahasang kinukumpirma ito ng user.

## Auto-Prompt Feedback Banner {#auto-prompt-feedback-banner}

Sa dulo ng isang usapan, maaaring magpakita ang assistant ng isang **auto-prompt feedback banner** — isang mensaheng hindi nakakaabala na nagtatanong kung nakatulong ba ang sesyon.

Lumilitaw ang banner na ito nang awtomatiko batay sa haba at resulta (heuristics) ng usapan. Ito ay naka-link sa parehong daloy ng feedback gaya ng thumbs-down button. Maaaring itapon ng mga user ang banner nang hindi nagbibigay ng feedback.

## /report-issue Slash Command {#report-issue-slash-command}

Maaari ring magsimula ng feedback flow ang mga user sa pamamagitan ng pag-type ng `/report-issue` sa chat input. Ang command na ito:

Agaduhin agad ang Feedback Consent Modal.
Awtomatikong pupunan ng impormasyon ang field na description gamit ang konteksto tungkol sa kasalukuyang usapan.
Pinapayagan nito ang mga user na magdagdag ng karagdagang detalye bago mag-submit.

Ang command na `/report-issue` ay available sa lahat ng chat mode (inline, floating widget, full-screen).

## AI-Assisted Triage {#ai-assisted-triage}

Ang feedback na isinumite ay ipapasa muna sa isang AI triage layer na:

- Nag-uuri ng report (factual error, hindi nakakatulong na sagot, hindi angkop na nilalaman, atbp.).
- Naglalagay ng mga kaugnay na metadata ng usapan.
- Ipinapadala ang buod ng triage sa naka-configure na **Feedback Endpoint** (tingnan ang [Settings > Advanced](#settings-advanced)).

Binabawasan nito ang oras ng manual review sa pamamagitan ng pagpapakita muna ng pinakamahahalagang isyu.

## Settings > Advanced {#settings-advanced}

Para i-enable ang feedback backend, i-configure ang mga sumusunod na field sa ilalim ng **Gratis AI Agent → Settings → Advanced**:

| Field | Deskripsyon |
|---|---|
| **Feedback Endpoint URL** | Ang URL na tumatanggap ng POST requests na may feedback payloads (JSON). |
| **Feedback API Key** | Bearer token na ipinapadala sa `Authorization` header para mag-authenticate ng mga submission ng feedback. |

Hayaan ang parehong field na walang laman para i-disable ang pagkolekta ng feedback. Ang mga indibidwal na feedback button ay mananatiling nakikita sa mga user, ngunit hindi ipapasa ang mga submission.

:::tip
Ang feedback endpoint ay dapat tumanggap ng JSON body na mayroon nang `message_id`, `conversation_id`, `feedback_text`, at `triage_category` fields. Tingnan ang documentation ng iyong endpoint provider para sa inaasahang schema.
