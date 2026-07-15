---
title: Kufotera Kukhazikira kwa M'moyo Woyamba
sidebar_position: 16
_i18n_hash: a19bc6263b278573f09cbba17581f632
---
# Sovereign Migration Verification

Ultimate Multisite: Multi-Tenancy 1.2.0 inalimbik ku commands za WP-CLI pa verification pamene m'mita (tenant) ya sovereign. Gumira kuti muli ndi m'mita wamene ukuyendera, muli m'mita wosankha SSO, kapena muli m'mita wosankha kwa m'mita wosangalala osati muli mwayi wopereka.

## Commands yomwe munggumbe {#commands-to-run}

Gumbe verification kuchokera ku WordPress yomwe yali ndi network:

```bash
wp tenant verify-no-legacy --site=<site-id>
wp tenant verify-sovereign-push --site=<site-id>
```

Gwiritsa ntchira site ID ya m'mita wosankha kuti muli mwayi wopereka. Command iliyonse imayamba kuti m'mita osati muli mwayi wopereka. Command iliyonse imayamba kuti m'mita wosangalala (sovereign push) yomwe ndi kuyendera ndi kupereka (drain) kumathandiza.

## Zotere zomwe zimakhala zosonyeza {#common-failures}

### Database grants siyo monga wopereka {#database-grants-do-not-match-the-host}

Ngati verification imayamba kuti kuli kukhala kukhazikitsa (grant) kapena kukhazikitsa wopereka (writer-user) kumathandiza, chonde simukumbukire database host yomwe yali yomwe. `localhost`, `127.0.0.1`, ndi dzina la service ya container ndi host za MySQL zosonyeza kuti ndi zina. Onesha m'mita wopereka wa tenant kapena grants za database, ndipo gumbe verification.

### Bedrock kapena local installs siyo monga wopereka {#bedrock-or-local-installs-cannot-connect}

Bedrock ndi local socket installs mungonetsa kuti database ndi `localhost` komwe runtime imayendera m'address yomwe yali yosonyeza (normalized address). Version 1.2.0 imayendetsa strings za host zomwe zikuyenera ku m'mita wosamakhala, koma overrides za host mungzowoneze kuti zimene kukhazikitsa grants za database.

### Async push queue siyo monga wopereka (drain) {#async-push-queue-does-not-drain}

Ngati `verify-sovereign-push` simayamba, chonde simukumbukire Action Scheduler kapena async runner yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe y

Kutete kuwamba kwa wamene (tenant) wosizopasa kuwa na hali ya kudumu (stateless autologin) kunahitaji kwamba domain la wamene, origin pin, madhumuni ya token, nonce, na muda wa kuisha yanapaswa kuwa sawa. Thibitisha kwamba URL ya wamene ni sahihi na kujaribu kuingia mara moja baada ya kutengeneza SSO visit.

## Lini unapaswa kujaribu tena (When to retry) {#tenant-user-count-is-wrong}

Jaribu uthibitisho baada ya kila mabadiliko ya miundombinu (infrastructure change). Usibadilishe mtiririko wa wateja wa uzalishaji (production traffic), usifute data ya chanzo, au uondoe credentials za migration mpaka majaribio yote ya uthibitisho yatakapopita.
