---
title: Whakawhanaungatanga o te mea whai whakaaro i te mea whai pētranga
sidebar_position: 25
_i18n_hash: b8cc1801782ca29dbdcddcf9db34fb48
---
# Te Whakarongo o Ngā mea Whakamahi me Ngā Pānga

Ko Gratis AI Agent v1.5.0 e whakauru ahau i te system whakamahi me ngā pānga (feedback and issue reporting) ki te chat, i te hoki mai i ngā end-user. E kitea i tēnei system te whai whakaae mō te whakamahi, he command whakamārama mō te pūtaiao, me te triage (whakamārama/whakawhiti) e whakamahia ai te AI i te pō.

## Button Whakarongo (Thumbs-Down Button)

Ko every message e rite mai e te assistant AI e whakaatu i he button **thumbs-down** (👎). I roto i te wā e whakatipu te kaukau, he taea ahau ki te whakamārama i te waiata he hāpai atu ana pe he pēnei.

- Ko te button e kitea i te hover i runga i te every message o te assistant.
- I roto i te whakatipu i a ia, ka puta te **Feedback Consent Modal**.
- Ko te feedback e whai ana ki te thread o te korero me te message tika.

## Feedback Consent Modal (Modal Whakarongo Whai Whakaae)

I roto i te wā e whakatipu te user i te button thumbs-down, ka puta he modal mō te whakaaae (consent modal) i tēnei mea i te rite ki te data e hoki mai. Ko te modal:

- E whakamārama ana i te korero o ngā mōhioinga e whai ake nei (excerpt o te korero, context o te browser).
- E whakataki i te user kia whakahau i te whakaae ahau ki te whakahoki i tēnei data.
- E hoatu i he field mō te wairua (free-text) mo te user kia whakatakoto i te mea kua pēnei.
- E hoatu i he option **Cancel** kia whakatika i te modal i roto i te waiho i te whakaae.

E koahau koako ko feedback e whai ake i te whakamārama o te user.

## Auto-Prompt Feedback Banner (Banner Whakarongo Ātomatico)

I te whāngai o te korero, he taea ai te assistant e whakaatu he **auto-prompt feedback banner** — he message e hoki mai ki te wairua (non-intrusive message) kia whakataki i te user mō te mea ko te session he hāpai atu ana.

Ko te banner e puta anō automatically based on te whakatipu o te korero me ngā heuristics (rules of thumb) mō te outcome. E rite ki te flow o te feedback o te button thumbs-down. He taea ai te user te whakatika i te banner i roto i te waiho i te feedback.

## /report-issue Slash Command (Command Whakarongo Pānga)

He taea ahau i te trigger te flow o te feedback i runga i te command `/report-issue` i te chat input. Ko te command này:

- Whakarongo i te Modal o Whakawhanaungatanga (Feedback Consent) i runga i te wāhi.
- Whakawhanaunga i te whakamārama i te whakataunga i te korero i roto i te pūrongo.
- Whakaaro i ngā whakamārama e pai ake i te whakamahi i te pūrongo mō te tino whaiaro i te rite.

He pūmanawa (command) o `/report-issue` e pēnei i roto i ngā mode chat katoa (inline, floating widget, full-screen).

## AI-Assisted Triage (Whakawhiti Pūrongo e Āwhina ai AI)

Ko te pūrongo whakahouwha (feedback) e pēnei i te whaiaro ki te parato (triage layer) o AI, i te whakaputa i:

- Whakamāhi i te pūrongo (pāporo whakamohana, whai mana, mea nui, etc.).
- Whakawhanaunga ngā mōhioinga o te korero e pai ana.
- Whakarite i te whakatau whakawhitiwhiti (triage summary) ki te **Feedback Endpoint** e whakatakiake (see [Settings > Advanced](#settings-advanced)).

Ko tēnei e whaihi ai ngā wakamārama manuahi (manual review time) e pēnei i te whakarongo i ngā pūrongo tino nui i te whakatau hou.

## Settings > Advanced {#settings-advanced}

Mō te whakamohoho i te backend o te feedback, whakatika i ngā rohe (fields) berikut i runga i **Gratis AI Agent → Settings → Advanced**:

| Field | Whakarāinga |
|---|---|
| **Feedback Endpoint URL** | Te URL e pēnei i te whaiaro i ngā POST requests me ngā payload o feedback (JSON). |
| **Feedback API Key** | Te token Bearer e pēnei i te header `Authorization` mō te whakamahi i te pūrongo feedback. |

Whakawāhi i ngā rohe katoa ki te whakahoki i te whakaputanga feedback. Ko ngā button o feedback whaiaro e pai ana ki te whakamahi ai e rite, engari kāore e whakawhanaunga ngā pūrongo.

:::tip
Ko te endpoint o feedback me te tino pātai (accept) te body JSON e he nui ki `message_id`, `conversation_id`, `feedback_text`, me `triage_category`. Pēnei i te whakamārama o te whānau schema o tō provider.
