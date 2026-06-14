---
title: Ra'ayoyin Abokan Ciniki da Bincike Game da Matakai
sidebar_position: 25
_i18n_hash: b8cc1801782ca29dbdcddcf9db34fb48
---
# Shaidar da Abubuwan Aminta da Bincike Masu Musamman

Gratis AI Agent v1.5.0 yana kafa tsarin samun ra'ayoyi da bincike masubbar wanda ke ba masu amfani ƙarshe damar bayyana amsa ba ce mai kyau ko kuma yin tururan matsaloli kai tsaye daga interface na tattaunawa. Wannan tsari yana nuna sarrafa izinin samun ra'ayoyi, umarni bincike na ma'aikata (automated reporting command), da kuma tsare-tsaren bincike ta AI a bayan wajen gudanarwa.

## Ma'auni Na "Thumbs-Down" (Wannan Ba Mai Kyau Ba)

Kowane saƙo da AI assistant ya aiko yana nuna ma'aunin **thumbs-down** (👎). Lokacin da mai amfani ya danna shi, zai iya alamar amsa ba ce mai kyau ko kuma ta yi laifi.

- Ma'auni yana bayyana lokacin da ake tura saƙo a kusa da kowane saƙon ma'aikata.
- Lokacin da aka danna shi, ana buɗe **Feedback Consent Modal** (Wannan Wajen Samun Ra'ayoyi).
- Ra'ayin samun ra'ayi yana shafi lissafin tattaunawa da saƙo na musamman.

## Feedback Consent Modal (Wajen Samun Ra'ayoyi)

Lokacin da mai amfani ya danna ma'aunin thumbs-down, wajen samun ra'ayoyi zai bayyana kafin a aiko duk wani data. Wajen samun ra'ayoyi yana:

- Bayyana abubuwan da za a samu (kaddarwar tattaunawa, yanayin browser).
- Neman mai amfani ya tabbatar shi cewa ya yarda da raba wannan data.
- Bayar da wuri na rubutu don mai amfani ya bayyana abin da ya faru.
- Bayar da zaɓi na **Cancel** don tsayawa ba tare da a tura ba.

Ba duk ra'ayi za a riƙe ba har sai mai amfani ya tabbatar shi kai tsaye.

## Auto-Prompt Feedback Banner (Bannin Samun Ra'ayoyi Na Automa)

A ƙarshen tattaunawa, ma'aikata zai iya nuna **auto-prompt feedback banner** — wani saƙo na ba da shawarwari mai sauki wanda ke tambaya ko tattaunawarta ta yi kyau.

Wannan banner yana bayyana ne kawai bisa tsawon tattaunawa da sakamakon bincike. Yana haɗa da hanyar samun ra'ayoyi kamar ma'aunin thumbs-down. Mai amfani zai iya tsayawa wannan banner ba tare da ba da ra'ayi ba.

## /report-issue Slash Command (Umarni Na Bincike Masubbar)

Mai amfani zai iya fara bayar da samun ra'ayoyi kai tsaye ta hanyar rubuta `/report-issue` a cikin wurin shigarwa na tattaunawa. Wannan umarni yana:

- Modal gyaranin da Bayan da Shaidin (Feedback Consent) nan nan ba tare da wuce ba.
- Bayanin fildin (description field) da aka shafi da bayani game da tattaunawa ta yanzu.
- Yana ba masu amfani damar ƙara ƙarin bayani kafin su yi aiki.

Amr `/report-issue` yana dawo a duk nau'ikan tattaunawa (inline, floating widget, full-screen).

## Tabbatarwa ta AI (AI-Assisted Triage)

Bayanan ra'ayoyin da aka tura za a wuce tsarin tabbatarwar AI wanda ke:

- Bayan rubutun (report) shi (kuskuren bayanai, amsa ba ta taimako, abubuwan da ba daidai ba, da sauransu).
- Haɗa bayanan tattaunawa masu mahimmanci.
- Aiko bayanin tabbatarwar (triage summary) zuwa **Feedback Endpoint** da aka tsara (ga ga [Settings > Advanced](#settings-advanced)).

Wannan yana rage lokacin binciken kai tsaye ta hanyar nuna matsalolin mafi muhimmanci a farko.

## Settings > Advanced {#settings-advanced}

Don ƙarfafa bayanan sauyin ra'ayi (feedback backend), ka tsara waɗannan fildoshin da ke ƙasa a ƙarƙashin **Gratis AI Agent → Settings → Advanced**:

| Fildin | Bayani |
|---|---|
| **Feedback Endpoint URL** | Wurin URL da ke karɓar POST requests tare da bayanan sauyin ra'ayi (JSON). |
| **Feedback API Key** | Token na Bearer wanda ake aiko a cikin `Authorization` header don tabbatar da tura bayanan sauyin ra'ayi. |

Ka bar duk fildoshin ba tare da shafi ba don lalata karɓar bayanan sauyin ra'ayi. Kowane ƙubawar sauyin ra'ayi yana nan ga masu amfani, amma ba za a tura su.

:::tip
Wurin sauyin ra'ayi dole ne ya karɓi jigon JSON wanda ya haɗa da ƙalubalen `message_id`, `conversation_id`, `feedback_text`, da `triage_category`. Ga littafin bayanan (documentation) na gudanar da wannan tsarin don sanin tsari da ake bukata.
:::
