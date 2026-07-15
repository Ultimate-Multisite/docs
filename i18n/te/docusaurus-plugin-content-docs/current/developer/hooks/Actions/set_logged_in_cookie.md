---
id: set_logged_in_cookie
title: Action - set_logged_in_cookie
sidebar_label: set_logged_in_cookie
_i18n_hash: f26ccae9b12cf56942b7e99a288ea87c
---
# Action: set_logged_in_cookie

లాగిన్ అయిన యూజర్ యొక్క ఆథెంటికేషన్ కుకీ సెట్ అవ్వడానికి *వెంటనే* ఈ యాక్షన్ కాల్ చేయబడుతుంది.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $logged_in_cookie | `string` | లాగిన్ అయిన కుకీ విలువ. |
| $expire | `int` | లాగిన్ గ్రేస్ పీరియడ్ ఎక్స్‌పైర్ అయ్యే సమయం (యూనిక్స్ టైమ్‌స్టాంప్‌గా). డిఫాల్ట్‌గా, కుకీ ఎక్స్‌పైరీ అయిన సమయం నుండి 12 గంటలు. |
| $expiration | `int` | లాగిన్ అయిన ఆథెంటికేషన్ కుకీ ఎక్స్‌పైర్ అయ్యే సమయం (యూనిక్స్ టైమ్‌స్టాంప్‌గా). డిఫాల్ట్‌గా, ఈ రోజు నుండి 14 రోజులు. |
| $user_id | `int` | యూజర్ ID. |
| $scheme | `string` | ఆథెంటికేషన్ స్కీమ్. డిఫాల్ట్‌గా 'logged_in'. |
| $token | `string` | ఈ కుకీ కోసం ఉపయోగించాల్సిన యూజర్ సెషన్ టోకెన్. |

### Since {#since}

- 2.6.0
- 4.9.0: <code>$token</code> పారామీటర్ జోడించబడింది.
### Source {#source}

[`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L141) లోని 141వ లైన్‌లో నిర్వచించబడింది.
