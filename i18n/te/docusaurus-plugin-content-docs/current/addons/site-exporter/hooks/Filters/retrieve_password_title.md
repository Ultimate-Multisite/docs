---
id: retrieve_password_title
title: Filter - retrieve_password_title
sidebar_label: retrieve_password_title
_i18n_hash: 7fcf454c64361885b8f64cc6fbc9ba93
---
# Filter: retrieve_password_title

పాస్‌వర్డ్ రీసెట్ ఈమెయిల్ యొక్క సబ్జెక్ట్‌ను (subject) మార్చడానికి ఉపయోగపడుతుంది.

## పారామీటర్లు (Parameters) {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $title | `string` | డిఫాల్ట్ ఈమెయిల్ శీర్షిక. |
| $user_login | `string` | యూజర్ యొక్క యూజర్‌నేమ్. |
| $user_data | `\WP_User` | WP_User ఆబ్జెక్ట్. |

### ఎప్పటి నుండి (Since) {#since}

- 2.8.0
- 4.4.0: <code>$user_login</code> మరియు <code>$user_data</code> పారామీటర్లను జోడించారు.
### మూలం (Source) {#source}

ఇది [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L135) ఫైల్‌లో 135వ లైన్‌లో నిర్వచించబడింది.


## తిరిగి ఇచ్చే విలువ (Returns) {#returns}
డిఫాల్ట్ ఈమెయిల్ శీర్షిక.
