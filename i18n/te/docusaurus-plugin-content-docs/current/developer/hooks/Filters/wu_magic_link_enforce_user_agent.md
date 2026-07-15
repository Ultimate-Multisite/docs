---
id: wu_magic_link_enforce_user_agent
title: Filter - wu_magic_link_enforce_user_agent
sidebar_label: wu_magic_link_enforce_user_agent
_i18n_hash: 33252b9660851a8fe51ff7ed586d9cf2
---
# Filter: wu_magic_link_enforce_user_agent

యూజర్ ఏజెంట్ వెరిఫికేషన్‌ను అమలు చేయాలా వద్దా అని ఫిల్టర్ చేస్తుంది.

దీన్ని `false` గా సెట్ చేస్తే, టోకెన్‌లు వివిధ బ్రౌజర్‌లు/డివైజ్‌లలో పని చేయడానికి అనుమతిస్తుంది. ఇది భద్రతను తగ్గిస్తుంది కానీ ఉపయోగించడానికి సౌలభ్యాన్ని పెంచుతుంది.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $enforce | `bool` | యూజర్ ఏజెంట్ మ్యాచింగ్‌ను అమలు చేయాలా వద్దా. |

### Since {#since}

- 2.0.0
### Source {#source}

Defined in [`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L410) at line 410
