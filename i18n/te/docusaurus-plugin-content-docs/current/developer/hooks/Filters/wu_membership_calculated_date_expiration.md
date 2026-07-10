---
id: wu_membership_calculated_date_expiration
title: Filter - wu_membership_calculated_date_expiration
sidebar_label: wu_membership_calculated_date_expiration
_i18n_hash: 92e1113e33a3b69e4fc3d07d6dcd8d69
---
# Filter: wu_membership_calculated_date_expiration {#filter-wumembershipcalculateddateexpiration}

లెక్కించిన గడువు ముగిసే తేదీని (calculated expiration date) ఫిల్టర్ చేస్తుంది.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $expiration | `string` | MySQL ఫార్మాట్‌లో లెక్కించిన గడువు ముగిసే తేదీ. |
| $membership_id | `int` | మెంబర్‌షిప్ యొక్క ID. |
| $membership | `\WP_Ultimo\Models\Membership` | మెంబర్‌షిప్ ఆబ్జెక్ట్. |

### Since {#since}

- 2.0
### Source {#source}

[`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L1309) లోని 1309వ లైన్‌లో నిర్వచించబడింది.
