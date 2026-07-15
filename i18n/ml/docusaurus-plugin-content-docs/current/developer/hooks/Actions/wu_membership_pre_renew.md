---
id: wu_membership_pre_renew
title: പ്രവർത്തനം - wu_membership_pre_renew
sidebar_label: wu_membership_pre_renew
_i18n_hash: 404f491e8f2f80099b721e1f475b4668
---
# Action: wu_membership_pre_renew

മെമ്പർഷിപ്പ് പുതുക്കുന്നതിന് മുൻപ് ഇത് പ്രവർത്തിപ്പിക്കുന്നു.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $expiration | `string` | സജ്ജമാക്കേണ്ട പുതിയ കാലാവധി തീയതി. |
| $membership_id | `int` | മെമ്പർഷിപ്പിന്റെ ID. |
| $membership | `\Membership` | മെമ്പർഷിപ്പ് ഒബ്ജക്റ്റ്. |

### Since {#since}

- 2.0
### Source {#source}

[`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2204) എന്ന ഫയലിലെ 2204 വരിയിൽ നിർവചിച്ചിരിക്കുന്നു.
