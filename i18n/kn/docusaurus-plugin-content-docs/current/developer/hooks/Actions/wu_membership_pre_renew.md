---
id: wu_membership_pre_renew
title: ಕ್ರಿಯೆ - wu_membership_pre_renew
sidebar_label: wu_membership_pre_renew
_i18n_hash: 404f491e8f2f80099b721e1f475b4668
---
# Action: wu_membership_pre_renew {#action-wumembershipprerenew}

ಸದಸ್ಯತ್ವ ನವೀಕರಣದ ಮೊದಲು ಕಾರ್ಯಗತವಾಗುತ್ತದೆ.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $expiration | `string` | ಹೊಂದಬೇಕಾದ ಹೊಸ ಅವಧಿ ದಿನಾಂಕ. |
| $membership_id | `int` | ಸದಸ್ಯತ್ವದ ಐಡಿ. |
| $membership | `\Membership` | ಸದಸ್ಯತ್ವ ಆಬ್ಜೆಕ್ಟ್. |

### Since {#since}

- 2.0
### Source {#source}

[`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2204) ನಲ್ಲಿ 2204 ಸಾಲಿನಲ್ಲಿ ವ್ಯಾಖ್ಯಾನಿಸಲಾಗಿದೆ.
