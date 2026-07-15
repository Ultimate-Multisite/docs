---
id: set_auth_cookie
title: Action - set_auth_cookie
sidebar_label: set_auth_cookie
_i18n_hash: 30ea64dc01d9f9805c09717f5113e4fd
---
# Action: set_auth_cookie

ఆథెంటికేషన్ కుకీ సెట్ అవ్వడానికి సరిగ్గా ముందు ఇది పనిచేస్తుంది.

## పారామీటర్లు {#parameters}

| పేరు | రకం | వివరణ |
|------|------|-------------|
| $auth_cookie | `string` | ఆథెంటికేషన్ కుకీ విలువ. |
| $expire | `int` | లాగిన్ గ్రేస్ పీరియడ్ ఎప్పుడు ముగుస్తుందో UNIX టైమ్‌స్టాంప్‌గా సమయం. డిఫాల్ట్‌గా కుకీ గడువు ముగిసిన సమయం నుండి 12 గంటలు ఉంటుంది. |
| $expiration | `int` | ఆథెంటికేషన్ కుకీ ఎప్పుడు గడువు ముగుస్తుందో UNIX టైమ్‌స్టాంప్‌గా సమయం. డిఫాల్ట్‌గా ఈ రోజు నుండి 14 రోజులు ఉంటుంది. |
| $user_id | `int` | యూజర్ ID. |
| $scheme | `string` | ఆథెంటికేషన్ స్కీమ్. విలువల్లో 'auth' లేదా 'secure_auth' వంటివి ఉంటాయి. |
| $token | `string` | ఈ కుకీ కోసం ఉపయోగించాల్సిన యూజర్ సెషన్ టోకెన్. |

### ఎప్పటి నుండి {#since}

- 2.5.0
- 4.9.0: <code>$token</code> పారామీటర్ జోడించబడింది.
### మూలం {#source}

[`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L124) లోని 124వ లైన్‌లో నిర్వచించబడింది
