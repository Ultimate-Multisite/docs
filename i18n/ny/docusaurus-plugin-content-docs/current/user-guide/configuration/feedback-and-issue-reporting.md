---
title: Chikwera ya Mwana wa M'moyo ndi Kufotokozera Nkhani za M'moyo
sidebar_position: 25
_i18n_hash: b8cc1801782ca29dbdcddcf9db34fb48
---
# Kufumbutso ndi Kufotokoza Masomo (Customer Feedback & Issue Reporting)

Gratis AI Agent v1.5.0 imaperekera monga system ya kufotokoza masomo ndi kupotsa mato (feedback and issue reporting) yomwe imaphatikizira anthu omwe ali ndi mfundo kuti apotsere mavuto ndi kuteteza zinthu zomwe si zofunika, ndipo imapotsa mavuto monga momwe muli m'chat interface. System imeneyi imapambana ndi ulamulira (consent management), komando la kupotsa lomaliza bwino (automated reporting command), ndi kukhazikitsa kwa AI pa backend.

## Button ya Kupotsa (Thumbs-Down Button) {#thumbs-down-button}

Msonkhoto aliyense limene AI assistant imapereka limapereka button ya **thumbs-down** (👎). Pamene muntu amapereka, akhoza kupotsa msonkhoto monga si zofunika kapena si woyenera.

- Button imaperekedwa pamene muli pansi pa msonkhoto aliyense la assistant.
- Pamene amapereka, imaphatikizira **Feedback Consent Modal**.
- Kufotokoza lili lomwe limaperekedwa ndi m'conversation thread ndipo msonkhoto woyenera.

## Feedback Consent Modal {#feedback-consent-modal}

Pamene muntu amapereka button ya thumbs-down, modal ya ulamulira imaperekedwa pansi pa kulimbikitsa data. Modal imeneyi:

- Imapangidwa kuti kodi ndi mawu onse omwe adzakhala woperekedwa (conversation excerpt, browser context).
- Imapangidwa kuti muntu amakumbutsa kuti ali ndi ulamulira wokonzeka kupereka data ili.
- Imapereka field yomwe muntu akhoza kuyesa kuti kodi chiyenera kuli chiyenera (free-text field) kuti adzakhale momwe zinthu zikuyenera.
- Imapereka chagera la **Cancel** lomaliza pansi pamene si yofotokoza.

Sikuperekedwa kufotokoza mpaka muntu amakumbutsa woyenera bwino.

## Auto-Prompt Feedback Banner {#auto-prompt-feedback-banner}

Pansi pa m'conversation, assistant imapangidwa kuti ipereke **auto-prompt feedback banner** — ndi message yomwe si yofunika yomwe imapangidwa kuti kodi session imeneyi iliyonseza.

Banner imeneyi imaperekedwa monga momwezi m'conversation imapereka ndi kuyenera (heuristics). Imaphatikizira ku msonkhoto woyenera wosonyeza pansi pa button ya thumbs-down. Anthu amakhoza kulimbikitsa banner imeneyi pamene si yofotokoza kufotokoza.

## /report-issue Slash Command {#report-issue-slash-command}

Anthu amakhoza kuperekera flow ya feedback monga momwezi m'chat input imapereka `/report-issue`. Komando imeneyi:

- Kufuna Modal ya Kutumia Feedback (Feedback Consent) kuliulizwe mara moja.
- Kufungua sehemu ya maelezo kwa kutumia taarifa kuhusu mazungumzo yaliyopo.
- Kunaruhusu watumiaji kuongeza maelezo zaidi kabla ya kuwasilisha.

Amri `/report-issue` inapatikana katika mitindo yote ya picha (inline, floating widget, full-screen).

## AI-Assisted Triage (Usimamizi wa Awali unaosaidiawa na AI) {#ai-assisted-triage}

Feedback iliyowasilishwa inatolewa kwenye kiwango cha usimamizi wa awali (triage layer) kinachofanya yafuatayo:

- Kugawa ripoti (kosa la ukweli, jibu lisilo na msaada, maudhui yasiyo sahihi, n.k.).
- Kuambatisha data muhimu za mazungumzo.
- Kuwasilisha muhtasari wa usimamizi huo kwenye **Feedback Endpoint** iliyowekwa (angalia [Settings > Advanced](#settings-advanced)).

Hii inapunguza muda wa ukaguzi wa mwanadamu kwa kuonyesha masuala muhimu zaidi kwanza.

## Settings > Advanced {#settings-advanced}

Ili kuwasha mfumo wa feedback, weka idadi ifuatayo chini ya **Gratis AI Agent → Settings → Advanced**:

| Field | Maelezo |
|---|---|
| **Feedback Endpoint URL** | URL inayopokea POST requests na maelezo (payloads) ya feedback (JSON). |
| **Feedback API Key** | Bearer token inatumiwa kwenye `Authorization` header ili kuthibitisha kuwasilisha feedback. |

acha sehemu zote mbili tupu ili kuzima ukusanyaji wa feedback. Vituo vya feedback vya mtu binafsi bado vinaonekana kwa watumiaji, lakini mawasilishaji hayatawasilishwa.

:::tip
Feedback endpoint lazima lipe kwa mwili (body) wa JSON na angalau sehemu za `message_id`, `conversation_id`, `feedback_text`, na `triage_category`. Angalia hati ya mtoa huduma wako ili kujua muundo unaotarajiwa.
:::
