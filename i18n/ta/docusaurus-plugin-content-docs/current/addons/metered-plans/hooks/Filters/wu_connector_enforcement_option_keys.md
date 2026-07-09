---
id: wu_connector_enforcement_option_keys
title: வடிகட்டி - wu_connector_enforcement_option_keys
sidebar_label: wu_connector_enforcement_option_keys
_i18n_hash: d6beae90e3f1bf32a08ce35257fb0dfc
---
# Filter: wu_connector_enforcement_option_keys {#filter-wuconnectorenforcementoptionkeys}

பிரதான தளத்திலிருந்து செயல்படுத்தப்பட வேண்டிய AI வழங்குநர் விருப்பத் திறவுகோல்களின் (option keys) பட்டியலை வடிகட்டுகிறது.

தனிப்பயன் (custom) அல்லது மூன்றாம் தரப்பு (third-party) AI வழங்குநர் plugins-களுக்கான விருப்பத் திறவுகோல்களைச் சேர்க்கவும். இதன் மூலம், துணைத் தளங்களில் (subsites) உள்ள அமைப்புகளும் பிரதான தளத்திலிருந்து பெறப்படும்.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $keys | `string[]` | செயல்படுத்தப்பட வேண்டிய விருப்பத் திறவுகோல் பெயர்கள் (Option key names). (இது ஏற்கனவே டைனமிக்காகக் கண்டறியப்பட்ட கனெக்டர் திறவுகோல்கள் மற்றும் EXTRA_PROVIDER_OPTIONS-ஐ உள்ளடக்கியுள்ளது). |

### Since {#since}

- 1.2.0
### Source {#source}

Defined in [`inc/managers/class-connector-enforcement.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-metered-plans/blob/main/inc/managers/class-connector-enforcement.php#L206) at line 206
