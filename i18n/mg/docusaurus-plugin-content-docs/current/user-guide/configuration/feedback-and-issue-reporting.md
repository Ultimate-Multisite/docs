---
title: Fanehoana ny Fanehoan'ny Mpanjifa sy ny Tatitra Olana
sidebar_position: 25
_i18n_hash: b8cc1801782ca29dbdcddcf9db34fb48
---
# Famaran'ny Mpanjifa sy Fanambarana Olana {#customer-feedback--issue-reporting}

Ny Gratis AI Agent v1.5.0 dia manolotra rafitra fanambarana val fianarana (feedback) sy fanambarana olana mialoha izay ahafahana ny mpampiasa fahefana manamarina ireo valin-teny tsy nahomby sy manambara olana mivantana avy amin'ny interface chat. Ity rafitra ity dia ahitana fitantanana fankatoavana (consent management), baiko fanambarana ho azy, ary fandinihana (triage) an'ny AI any aoriana.

## Boina Fandavana (Thumbs-Down Button) {#thumbs-down-button}

Ny hafatra rehetra alefa avy amin'ny asistantin'ny AI dia mampiseho bokotra **thumbs-down** (👎). Rehefa tsindrin'ilay bokotra ny mpampiasa, afaka manamarina ny valiny ho tsy nahomby na diso izy.

- Mipoitra eo rehefa mifandray (hover) eo anilan'ny hafatra asistantin'ny AI isaky ny hafatra.
- Rehefa tsindrin'ilay bokotra dia misokatra ny **Feedback Consent Modal**.
- Ny fanambarana dia mifandray amin'ny tady resaka sy ny hafatra manokana.

## Feedback Consent Modal {#feedback-consent-modal}

Rehefa tsindrin'ny mpampiasa ilay bokotra thumbs-down, hiseho ny modal fankatoavana alohan'ny handefasana data aho. Ity modal ity dia:

- Manazava izay vaovao hatao angonina (fizarana resaka, tontolo iantsoina).
- Manontany ny mpampiasa mba hanamafisana fa manaiky ny fizarana ireo data ireo izy.
- Manolotra toerana fanoratana an-tsoratra ho an'ny mpampiasa mba hanazavana izay nisy diso.
- Manolotra safidy **Cancel** mba hialana tsy handefasana.

Tsy voarakitra ny fanambarana raha tsy manamafy mazava ny mpampiasa izany.

## Auto-Prompt Feedback Banner {#auto-prompt-feedback-banner}

Amin'ny faran'ny resaka, mety haneho ny asistantinao **auto-prompt feedback banner** — hafatra tsy mampitahotra izay mangataka raha nahomby ny fivoriana ilay fotoana.

Ity banner ity dia miseho ho azy arakaraka ny halavany sy ny vokatra azo avy amin'ny fandinihana (heuristics). Mifandray amin'ny lalana fanambarana mitovy amin'ilay bokotra thumbs-down izy. Afaka manala an-tsokosoko ny banner ianao nefa tsy manome fanambarana.

## /report-issue Slash Command {#report-issue-slash-command}

Afaka manomboka ny fomba fanambarana (feedback flow) mivantana ny mpampiasa amin'ny alalan'ny soratra `/report-issue` ao anatin'ny input chat. Ity baiko ity dia:

- Manokatra ny Modal fandraisana hevitra (Feedback Consent) dia misokatra avy hatrany.
- Ataovy ao anaty safidy ny famaritana (description field) amin'ny antsipiriany momba ny resaka iainana ankehitriny.
- Avelao ny mpampiasa hanampy antsipiriany hafa alohan'ny fametrahana azy.

Misy ny `command /report-issue` azo ampiasaina amin'ny fomba lahatsoratra (inline), widget mifandray (floating widget), ary écran manontolo (full-screen).

## AI-Assisted Triage (Fandaharam-potoana an'ny AI) {#ai-assisted-triage}

Ny hevitra voatoli dia alefa any amin'ny layer fandinihana (triage layer) an'ny AI izay:

- Manome famintinana ny tatitra (Categorises the report) (fahadisoana azo antoka, valiny tsy nampanantenana, votoaty tsy mety, sns.).
- Manampy ny fampahalalana mifandraika amin'ny resaka (Attaches relevant conversation metadata).
- Mandefa ny famintinana fandinihana ho any amin'ny **Feedback Endpoint** voafetra anareo (jereo [Settings > Advanced](#settings-advanced)).

Izany dia mampihena ny fotoana fandalinana manokana (manual review time) amin'ny alalan ny famoahana ireo olana tena ilaina voalohany.

## Settings > Advanced {#settings-advanced}

Mba hampandehanana ny backend an'ny hevitra, avereno ny lafiny manaraka eo ambanin'ny **Gratis AI Agent → Settings → Advanced**:

| Field | Famaritana |
|---|---|
| **Feedback Endpoint URL** | Ny URL izay mandray ny POST requests miaraka amin'ny payload an'ny hevitra (JSON). |
| **Feedback API Key** | Token Bearer izay alefa ao amin'ny `Authorization` header mba hanamafisana ny fametrahana ny hevitra. |

Avelao ho lafiny roa ireo dia tsy hamoahana ny fanangonana hevitra (disable feedback collection). Mbola hita eo anatrehan'ny mpampiasa ny bokotra fandraisana hevitra tsirairay, fa tsy ho alefa amin'ny fandefasana izany.

:::tip
Ny feedback endpoint dia tokony handray body JSON misy antsipiriany toy ny `message_id`, `conversation_id`, `feedback_text`, ary `triage_category`. Jereo ny dokumentation an'ny mpamatsy ny schéma (schema) tokony ho voalaza.
:::
