---
id: wu_membership_post_cancel
title: చర్య - wu_membership_post_cancel
sidebar_label: wu_membership_post_cancel
_i18n_hash: f8d5d59dbde2d29c6006ef82edd7384a
---
# Action: wu_membership_post_cancel

Membership రద్దు అయిన తర్వాత ఇది ట్రిగ్గర్ అవుతుంది.

ఇది రద్దు చేసుకునే ఈమెయిల్ పంపడానికి కారణమవుతుంది.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $membership_id | `int` | Membership యొక్క ID. |
| $membership | `\WP_Ultimo\Models\Membership` | Membership ఆబ్జెక్ట్. |

### Since

- 2.0
### Source

[`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2290) లోని 2290వ లైన్‌లో నిర్వచించబడింది.
