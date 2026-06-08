---
id: wu_sso_loaded
title: Action - wu_sso_loaded
sidebar_label: wu_sso_loaded
_i18n_hash: b51fa54f84ebce1962a42dac87fcd923
---
# Action: wu_sso_loaded

પ્લગઇન ડેવલપર્સને જરૂર પડ્યે વધારાના હૂક્સ ઉમેરવાની મંજૂરી આપે છે.

આને `init` સુધી વિલંબિત કરવાની જરૂર છે કારણ કે SSO એ કંઈક છે જે `sunrise` પર ચાલે છે.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $sso | `self` | SSO ક્લાસ. |

### Since

- 2.0.0
### Source

Defined in [`inc/sso/class-sso.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-sso.php#L285) at line 285
