---
id: wu_connector_enforcement_option_keys
title: Filter - wu_connector_enforcement_option_keys
sidebar_label: wu_connector_enforcement_option_keys
_i18n_hash: d6beae90e3f1bf32a08ce35257fb0dfc
---
# Filter: wu_connector_enforcement_option_keys

ከዋናው ድረ-ገጽ (main site) ላይ የሚተገበሩ የAI አቅራቢ አማራጮች ቁልል (option keys) ዝርዝርን ያጣfilt።

በተጨማሪም፣ ለበይበጅ (custom) ወይም ለሶስተኛ ወገን AI አቅራቢ ፕልጊኖች (plugins) የተዘጋጁ አማራጮች ቁልልዎችን በመጨመር፣ በእነዚህ ፕልጊኖች ቅንብሮች በሰርብ-ሳይትስ (subsites) ላይ ከዋናው ድረ-ገጽ እንዲወረሱ ያደርጋል።

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $keys | `string[]` | ሊተገበሩ የሚገባቸው አማራጮች ቁልል ስሞች (ይህ ቀድሞውንም በራስ-ሰር የተገኙ የኮነክተር ቁልልዎችን እና EXTRA_PROVIDER_OPTIONSን ያካትታል)። |

### Since {#since}

- 1.2.0
### Source {#source}

በ[`inc/managers/class-connector-enforcement.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-metered-plans/blob/main/inc/managers/class-connector-enforcement.php#L206) ፋይል ላይ በ206ኛው መስመር ተገልጿል።
