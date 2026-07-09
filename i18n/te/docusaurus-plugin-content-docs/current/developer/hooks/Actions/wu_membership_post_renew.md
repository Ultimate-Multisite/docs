---
id: wu_membership_post_renew
title: Action - wu_membership_post_renew
sidebar_label: wu_membership_post_renew
_i18n_hash: fbad65cce616f38b3b55d48b037365ad
---
# Action: wu_membership_post_renew {#action-wumembershippostrenew}

Membership renewal అయిన తర్వాత ఇది ట్రిగ్గర్ అవుతుంది.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $expiration | `string` | సెట్ చేయవలసిన కొత్త గడువు తేదీ (New expiration date). |
| $membership_id | `int` | మెంబర్‌షిప్ యొక్క ID. |
| $membership | `\Membership` | మెంబర్‌షిప్ ఆబ్జెక్ట్ (Membership object). |

### Since {#since}

- 2.0
### Source {#source}

[`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2235) లోని 2235వ లైన్‌లో నిర్వచించబడింది.
