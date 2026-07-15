---
title: Maoni ya Wateja na Kuripoti Matatizo
sidebar_position: 25
_i18n_hash: b8cc1801782ca29dbdcddcf9db34fb48
---
# Kutoa Maoni na Kuripoti Matatizo ya Mtumiaji

Gratis AI Agent v1.5.0 inatangulia mfumo uliojengwa wa kutoa maoni na kuripoti matatizo ambao unaruhusu watumiaji wa mwisho kutambua majibu ambayo hayasaidii na kuripoti matatizo moja kwa moja kutoka kwenye interface ya chat. Mfumo huu unajumuisha usimamizi wa idhini (consent management), amri ya kuripoti kiotomatiki, na kupanga matatizo kwa msaada wa AI (AI-assisted triage) upande wa backend.

## Kitufe cha Kidole Chinyuma (Thumbs-Down Button) {#thumbs-down-button}

Kila ujumbe uliotolewa na msaidizi wa AI unadhihirisha kitufe cha **kidole chinyuma** (👎). Mtumiaji anapobonyeza kitufe hiki, anaweza kutambua jibu kama lisisaidii au si sahihi.

- Kitufe kinaonekana kwa kuweka kionjo (hover) karibu na kila ujumbe wa msaidizi.
- Kubonyeza kitufe hiki kunafungua **Feedback Consent Modal**.
- Maoni yanahusishwa na mnyororo wa mazungumzo na ujumbe mahususi.

## Feedback Consent Modal {#feedback-consent-modal}

Mwenyeji anapobonyeza kitufe cha kidole chinyuma, modal ya idhini inaonekana kabla ya data yoyote kutumwa. Modal hii:

- Inaeleza ni taarifa gani zitikusanywa (kifungu cha mazungumzo, muktadha wa browser).
- Inamwomba mtumiaji kuthibitisha kwamba anatoa idhini ya kushiriki data hii.
- Inatoa sehemu ya maandishi huru kwa mtumiaji kuelezea nini kilikuwa kimekwenda vibaya.
- Inatoa chaguo la **Cancel** ili kufuta bila kuwasilisha.

Hakuna maoni yanayorekodiwa mpaka mtumiaji atathibitisha waziwazi.

## Auto-Prompt Feedback Banner {#auto-prompt-feedback-banner}

Mwishoni mwa mazungumzo, msaidizi anaweza kuonyesha **auto-prompt feedback banner** — ujumbe usio na usumbufu unaouliza kama kikao hicho kilikuwa kikiwasaidia.

Banner hii inaonekana kiotomatiki kulingana na urefu na matokeo ya mazungumzo. Inahusishwa na mtiririko huo wa maoni kama kitufe cha kidole chinyuma. Watumiaji wanaweza kufuta banner bila kutoa maoni.

## Amri ya Slash /report-issue {#report-issue-slash-command}

Watumiaji wanaweza kuanzisha mtiririko wa maoni moja kwa moja kwa kuandika `/report-issue` kwenye sehemu ya kuingiza chat. Amri hii:

- Inafungua Feedback Consent Modal mara moja.
- Inajaza awali sehemu ya maelezo na muktadha kuhusu mazungumzo ya sasa.
- Inaruhusu watumiaji kuongeza undani zaidi kabla ya kuwasilisha.

Amri ya `/report-issue` inapatikana katika mitindo yote ya chat (inline, floating widget, full-screen).

## AI-Assisted Triage {#ai-assisted-triage}

Maoni yaliyowasilishwa yanatumiwa kwenye tabaka la AI triage ambalo:

- Yanatabainisha ripoti (kosa la kiukweli, jibu lisisaidii, maudhui yasiyofaa, n.k.).
- Yanashughulisha metadata muhimu za mazungumzo.
- Yanatuma muhtasari wa triage kwenda **Feedback Endpoint** iliyowekwa (angalia [Settings > Advanced](#settings-advanced)).

Hii inapunguza muda wa ukaguzi wa kibinadamu kwa kuonyesha matatizo muhimu zaidi kwanza.

## Settings > Advanced {#settings-advanced}

Ili kuwezesha backend ya maoni, weka mipangilio ifuatayo chini ya **Gratis AI Agent → Settings → Advanced**:

| Field | Description |
|---|---|
| **Feedback Endpoint URL** | URL ambayo inapokea ombi za POST zenye payload za maoni (JSON). |
| **Feedback API Key** | Bearer token inayotumwa kwenye kichwa cha `Authorization` kwa ajili ya kuthibitisha uwasilishaji wa maoni. |

Acha sehemu zote mbili ziko wazi ili kuzima ukusanyaji wa maoni. Vitufe vya maoni vya mtu binafsi vinabaki kuonekana kwa watumiaji, lakini uwasilishaji hautawahi kutumwa.

:::tip
Feedback endpoint lazima iweze kupokea mwili wa JSON wenye angalau sehemu za `message_id`, `conversation_id`, `feedback_text`, na `triage_category`. Angalia waraka wa mtoa huduma wako wa endpoint kwa ajili ya muundo unaotarajiwa.
:::
