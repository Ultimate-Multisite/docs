---
id: wu_magic_link_enforce_ip
title: Filter - wu_magic_link_enforce_ip
sidebar_label: wu_magic_link_enforce_ip
_i18n_hash: b785314a6a2d9ea45d3beab38baa58fe
---
# Filter: wu_magic_link_enforce_ip

IP అడ్రస్ ధృవీకరణను అమలు చేయాలా వద్దా అని ఫిల్టర్ చేస్తుంది.

దీనిని `false`గా సెట్ చేస్తే, టోకెన్‌లు వేర్వేరు నెట్‌వర్క్‌ల నుండి కూడా పనిచేయడానికి అనుమతిస్తుంది. ఇది భద్రతను కొద్దిగా తగ్గిస్తుంది, కానీ వినియోగాన్ని (usability) పెంచుతుంది (ఉదాహరణకు, నెట్‌వర్క్‌లను మారుస్తున్న మొబైల్ వినియోగదారుల కోసం).

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $enforce | `bool` | IP అడ్రస్ సరిపోలికను అమలు చేయాలా వద్దా. |

### Since {#since}

- 2.0.0
### Source {#source}

Defined in [`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L422) at line 422
