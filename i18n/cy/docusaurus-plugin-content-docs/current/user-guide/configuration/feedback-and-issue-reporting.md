---
title: Cyflwyniad y cydweithredwyr a cyflwyniad o fethau
sidebar_position: 25
_i18n_hash: b8cc1801782ca29dbdcddcf9db34fb48
---
# Adferiadau Client a Cyflwyno Prosessedau {#customer-feedback--issue-reporting}

Mae Gratis AI Agent v1.5.0 yn cyflwyno system adferiadau ac cyflwyno prosessedau sydd wedi'i gynnwys i'r benyn, gan gael y benwylwyr cyffredinol gallu alwio ymatebion nid oeddent yn helpu a cyflwyno problemau yn uniongyrchol o'r ffurf chat. Mae'r system hwn yn cynnwys rheoli cymhwysedd (consent management), amrad cyflwyno prosessedau awtomatig, ac triage AI-assisted ar y benyn.

## Botyn Cynllunio (Thumbs-Down Button) {#thumbs-down-button}

Mae pob message a ddifynwyd gan yr asiant AI yn dangos botyn **thumbs-down** (👎). Pan mae'r benwylwr yn credu iddo, gallai nhw gwneud ymateb fel nid oedd yn helpu neu yn ddogfen.

- Mae'r botyn yn dangos ar gyfer hover yn agor ymateb asiant.
- Pan credu iddo, mae'n agor y **Feedback Consent Modal**.
- Mae'r adferiad wedi'i gysylltu â'r llinell siarad a'r message penodol.

## Feedback Consent Modal {#feedback-consent-modal}

Pan credu'r benwylwr ar botyn thumbs-down, mae modal cymhwysedd yn dangos cyn cael unrhyw data i ddarganfod. Mae'r modal:

- Yn esbonio beth yw wybodaethau a fydd yn cael eu cyfathogh (cyflwyniad siarad, context y browser).
- Yn gofyn iddo gwneud cadarnid ei cymhwysedd i rhannu'r data hwn.
- Yn chyflwyno ffordd text sydd ar gael i'r benwylwr i ddisgrifio beth oedd yn cael ei wneud ddogfen.
- Yn cynnig opsiwn **Cancel** i ddarganfod heb cyflwyno.

Nid oes unrhyw adferiadau wedi'u cadarnio heb fod y benwylwr wedi'i cadarnio yn unigol.

## Auto-Prompt Feedback Banner {#auto-prompt-feedback-banner}

Ar ddiwedd siarad, gall yr asiant dangos **auto-prompt feedback banner** — message nid yn cael ei gael yn drosol— sydd ar gael i'r benwylwr i gwrddwch a oes y sesiwn oedd yn helpu.

Mae'r banner hwn yn dangos yn awtomatig yn seiliedig ar lled y siarad a'r enw. Mae'n cysylltu â ffordd adferiadau fel botyn thumbs-down. Gallai benwylwyr ddarganfod y banner heb rhoi adferiadau.

## /report-issue Slash Command {#report-issue-slash-command}

Gall benwylwyr gwthio'r ffordd adferiadau yn uniongyrchol gan ddefnyddio `/report-issue` mewn input siarad. Mae'r amrad hwn yn:

Mae'r modd yn agor y Modal Cynmunau (Feedback Consent Modal) yn gyflym.
Mae'n cyflwyno'r ffurf disgrifiad gyda chyflwyniad am y siarad hwnnw.
Mae'n sylw'r benwiol i'r benwyr iddo ddhaneddau ychwanegol قبل y cyflwyniad.

Mae'r bwrdd `/report-issue` ar gael yn holl ffurfau siarad (inline, floating widget, full-screen).

## Triage gyda chydchefn AI (AI-Assisted Triage) {#ai-assisted-triage}

Mae cyflwyniadau sydd wedi'u cyflwyno yn cael eu cyfeiriant i llawer triage AI sy mae:

- Yn cyflwyno'r mynediad (error ffurfiol, ateb nid yn helpu, cynnwys anghweddol, etc.).
- Yn ychwanegu data metadynol ychwanegol o'r siarad.
- Yn gyflwyno'r cyfathrebu triage i'r **Feedback Endpoint** a ddefnyddiwyd (gweli [Settings > Advanced](#settings-advanced)).

Mae hyn yn redusio amser gwylio manwl gan ddifynnu'r pethau agored yn gyntaf.

## Settings > Advanced {#settings-advanced}

I chymryd y backend cynmunau, rheoli'r ffeiliau canlynol o dan **Gratis AI Agent → Settings → Advanced**:

| Ffeiliau | Disgrifiad |
|---|---|
| **Feedback Endpoint URL** | Y URL sydd yn derbyn cyflwyniadau POST gyda payload cynmunau (JSON). |
| **Feedback API Key** | Token Bearer a ddifynol yn cael ei anfon mewn header `Authorization` i ddefnyddio'r cynrychioliad y cyflwyniadau. |

Rhaid i'r ffeiliau allan gwrthod i ddeall cynmunau cynmunau. Mae benwyr cynmunau unig yn parhau i'r benwyr, ond nid yn cael eu gyflwyno.

:::tip
Mae'r ffyniad cynmunau yn ddefnyddio bod yn derbyn bod yn JSON gyda'r ffeiliau `message_id`, `conversation_id`, `feedback_text`, a `triage_category` yn ôl. Gweli y ddogfen y cyflwyniad eich cyfarwyddiadau am y schema a ddefnyddiol.
:::
