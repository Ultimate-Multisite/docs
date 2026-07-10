---
id: wu_magic_link_enforce_ip
title: ഫിൽട്ടർ - wu_magic_link_enforce_ip
sidebar_label: wu_magic_link_enforce_ip
_i18n_hash: b785314a6a2d9ea45d3beab38baa58fe
---
# Filter: wu_magic_link_enforce_ip {#filter-wumagiclinkenforceip}

IP വിലാസം പരിശോധിക്കൽ നടപ്പിലാക്കണോ എന്ന് ഇത് ഫിൽട്ടർ ചെയ്യുന്നു.

ടോക്കണുകൾക്ക് വ്യത്യസ്ത നെറ്റ്‌വർക്കുകളിൽ നിന്ന് പ്രവർത്തിക്കാൻ അനുവദിക്കാൻ ഇത് `false` ആക്കുക. ഇത് സുരക്ഷ കുറയ്ക്കുന്നു, പക്ഷേ ഉപയോഗക്ഷമത കൂട്ടുന്നു (ഉദാഹരണത്തിന്, നെറ്റ്‌വർക്കുകൾ മാറുന്ന മൊബൈൽ ഉപയോക്താക്കൾക്ക്).

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $enforce | `bool` | IP വിലാസം പൊരുത്തപ്പെടുത്തൽ നടപ്പിലാക്കണോ വേണ്ടയോ. |

### Since {#since}

- 2.0.0
### Source {#source}

Defined in [`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L422) at line 422
