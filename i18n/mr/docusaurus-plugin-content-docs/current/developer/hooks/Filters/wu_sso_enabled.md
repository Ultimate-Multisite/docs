---
id: wu_sso_enabled
title: फिल्टर - wu_sso_enabled
sidebar_label: wu_sso_enabled
_i18n_hash: 67263dea6df806158e5d4c9bdb984acf
---
# Filter: wu_sso_enabled

क्रॉस-डोमेन सिंगल-साईन-ऑन (single-sign-on) क्षमता सक्षम (enable) किंवा अक्षम (disable) करण्यासाठी.

सिंगल-साईन-ऑन पूर्णपणे बंद करण्यासाठी किंवा विशिष्ट परिस्थितीत ते सक्षम करण्यासाठी या मूल्यावर फिल्टर लावा.

## पॅरामीटर्स {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $enabled | `bool` | SSO सक्षम करायचे आहे का? चालू करण्यासाठी `True` आणि बंद करण्यासाठी `false` वापरा. |

### Since {#since}

- 2.0.11
### Source {#source}

[`inc/sso/class-sso.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-sso.php#L110) या फाईलमध्ये लाइन 110 वर परिभाषित केले आहे.

## Returns {#returns}
SSO सक्षम आहे की नाही, हे मूल्य परत करते.
