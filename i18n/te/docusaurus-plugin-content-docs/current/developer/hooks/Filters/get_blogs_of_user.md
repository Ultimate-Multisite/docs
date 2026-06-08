---
id: get_blogs_of_user
title: Filter - get_blogs_of_user
sidebar_label: get_blogs_of_user
_i18n_hash: 77871d3651eb7f3ab1d055fdb89c061e
---
# Filter: get_blogs_of_user

ఇది అసలు WP ఫిల్టర్‌ను ఇక్కడ మళ్లీ అమలు చేస్తుంది, పూర్తి భద్రత కోసం.

ఒక యూజర్‌కు చెందిన సైట్‌ల జాబితాను ఫిల్టర్ చేస్తుంది.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $sites | `object[]` | యూజర్‌కు చెందిన సైట్ ఆబ్జెక్ట్‌ల శ్రేణి (array). |
| $user_id | `int` | యూజర్ ID. |
| $all | `bool` | తిరిగి వచ్చే సైట్‌ల శ్రేణిలో 'deleted', 'archived', లేదా 'spam' అని మార్క్ చేయబడిన సైట్‌లు కూడా ఉండాలా వద్దా అని చెప్తుంది. డిఫాల్ట్ విలువ false. |

### Since

- 2.0.11
### Source

[`inc/managers/class-site-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-site-manager.php#L851) లోని 851వ లైన్‌లో నిర్వచించబడింది.
