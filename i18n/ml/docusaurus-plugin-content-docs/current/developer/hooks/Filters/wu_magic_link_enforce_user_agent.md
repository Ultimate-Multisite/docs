---
id: wu_magic_link_enforce_user_agent
title: ഫിൽട്ടർ - wu_magic_link_enforce_user_agent
sidebar_label: wu_magic_link_enforce_user_agent
_i18n_hash: 33252b9660851a8fe51ff7ed586d9cf2
---
# Filter: wu_magic_link_enforce_user_agent {#filter-wumagiclinkenforceuseragent}

യൂസർ ഏജന്റ് വെരിഫിക്കേഷൻ നടപ്പിലാക്കണോ എന്ന് ഇത് ഫിൽട്ടർ ചെയ്യുന്നു.

ഇത് `false` ആക്കുകയാണെങ്കിൽ, ടോക്കണുകൾ വിവിധ ബ്രൗസറുകളിലും ഉപകരണങ്ങളിലും പ്രവർത്തിക്കാൻ അനുവദിക്കും. ഇത് സുരക്ഷ കുറയ്ക്കുന്നു, പക്ഷേ ഉപയോഗക്ഷമത കൂട്ടുന്നു.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $enforce | `bool` | യൂസർ ഏജന്റ് മാച്ചിംഗ് നടപ്പിലാക്കണോ വേണ്ടയോ എന്ന് ഇത് തീരുമാനിക്കുന്നു. |

### Since {#since}

- 2.0.0
### Source {#source}

[`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L410) എന്ന ഫയലിലെ 410-ാം വരിയിൽ നിർവചിച്ചിരിക്കുന്നു.
