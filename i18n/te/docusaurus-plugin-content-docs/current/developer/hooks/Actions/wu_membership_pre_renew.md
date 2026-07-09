---
id: wu_membership_pre_renew
title: చర్య - wu_membership_pre_renew
sidebar_label: wu_membership_pre_renew
_i18n_hash: 404f491e8f2f80099b721e1f475b4668
---
# Action: wu_membership_pre_renew {#action-wumembershipprerenew}

సభ్యత్వం పునరుద్ధరణ (membership renewal) జరగడానికి ముందు ఇది ట్రిగ్గర్ అవుతుంది.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $expiration | `string` | సెట్ చేయవలసిన కొత్త గడువు తేదీ. |
| $membership_id | `int` | సభ్యత్వం యొక్క ID. |
| $membership | `\Membership` | సభ్యత్వం ఆబ్జెక్ట్. |

### Since {#since}

- 2.0
### Source {#source}

[`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2204) లోని 2204వ లైన్‌లో నిర్వచించబడింది.
