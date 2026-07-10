---
id: networks_pre_user_is_network_admin
title: Filter - networks_pre_user_is_network_admin
sidebar_label: networks_pre_user_is_network_admin
_i18n_hash: f8e04e42fb6f7c1f20a1280c46bf53b5
---
# Filter: networks_pre_user_is_network_admin {#filter-networkspreuserisnetworkadmin}

ஒரு பயனர் எந்தெந்த நெட்வொர்க்குகளின் நிர்வாகி என்பதை வடிகட்டி, செயல்முறையை நேரடியாக முடிவுக்குக் கொண்டு வர (short-circuit) இது உதவுகிறது.

## அளவுருக்கள் (Parameters) {#parameters}

| பெயர் (Name) | வகை (Type) | விளக்கம் (Description) |
|------|------|-------------|
| $ | `array\|bool\|null` | நெட்வொர்க் ID-களின் பட்டியல் அல்லது false. null தவிர வேறு எதுவாக இருந்தாலும் செயல்முறையை குறுக்கிடும் (short-circuit) வேலையைச் செய்யும். |
| $ | `int` | நெட்வொர்க்குகள் திரும்ப வர வேண்டிய பயனர் ID. |

### இதிலிருந்து (Since) {#since}

- 2.0.0
### மூலம் (Source) {#source}

[inc/functions/network.php](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L688)-ல் வரையறுக்கப்பட்டுள்ளது, 688 வரியில்.
