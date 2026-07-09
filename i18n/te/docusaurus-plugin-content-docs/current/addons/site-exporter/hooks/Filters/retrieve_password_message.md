---
id: retrieve_password_message
title: Filter - retrieve_password_message
sidebar_label: retrieve_password_message
_i18n_hash: c1e9fbd9909dd93e70f291de55ba00e4
---
# Filter: retrieve_password_message {#filter-retrievepasswordmessage}

పాస్‌వర్డ్ రీసెట్ మెయిల్ సందేశం యొక్క బాడీని ఫిల్టర్ చేస్తుంది.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $message | `string` | డిఫాల్ట్ మెయిల్ సందేశం. |
| $key | `string` | యాక్టివేషన్ కీ. |
| $user_login | `string` | యూజర్ యొక్క యూజర్‌నేమ్. |
| $user_data | `\WP_User` | WP_User ఆబ్జెక్ట్. |

### Since {#since}

- 2.8.0
- 4.1.0: <code>$user_login</code> మరియు <code>$user_data</code> పారామీటర్లను జోడించారు.
### Source {#source}

[`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L149) లోని 149వ లైన్‌లో నిర్వచించబడింది.


## Returns {#returns}
డిఫాల్ట్ మెయిల్ సందేశం.
