---
id: wu_enforce_password_rules
title: Filter - wu_enforce_password_rules
sidebar_label: wu_enforce_password_rules
_i18n_hash: bb85ebfcf4a234a043f75de3d07e47ee
---
# Filter: wu_enforce_password_rules {#filter-wuenforcepasswordrules}

అదనపు పాస్‌వర్డ్ నియమాలను అమలు చేయాలా వద్దా అని ఇది ఫిల్టర్ చేస్తుంది.

ఇది `true` అయినప్పుడు, కనీస పొడవు (minimum length) మరియు అక్షరాల (character) అవసరాలను అమలు చేస్తుంది. ఇది "Super Strong" సెట్టింగ్ కోసం లేదా Defender Pro యొక్క Strong Password ఫీచర్ యాక్టివ్‌గా ఉన్నప్పుడు ఆటోమేటిక్‌గా ఎనేబుల్ అవుతుంది.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $enforce_rules | `bool` | అదనపు నియమాలను అమలు చేయాలా వద్దా. |
| $strength_setting | `string` | అడ్మిన్ సెట్టింగ్ విలువ. |
| $defender_active | `bool` | Defender Pro Strong Password యాక్టివ్‌గా ఉందో లేదో. |

### Since {#since}

- 2.4.0
### Source {#source}

Defined in [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L531) at line 531
