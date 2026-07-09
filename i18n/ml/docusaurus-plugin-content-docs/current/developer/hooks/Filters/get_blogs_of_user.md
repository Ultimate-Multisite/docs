---
id: get_blogs_of_user
title: Filter - get_blogs_of_user
sidebar_label: get_blogs_of_user
_i18n_hash: 77871d3651eb7f3ab1d055fdb89c061e
---
# Filter: get_blogs_of_user {#filter-getblogsofuser}

യഥാർത്ഥ WP ഫിൽട്ടറിനെ ഇവിടെ അതേപടി പുനഃസൃഷ്ടിക്കുന്നു, കൂടുതൽ ഉറപ്പാക്കാൻ.

ഒരു യൂസർ ഉൾപ്പെടുന്ന സൈറ്റുകളുടെ ലിസ്റ്റ് ഇത് ഫിൽട്ടർ ചെയ്യുന്നു.

## പാരാമീറ്ററുകൾ {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $sites | `object[]` | യൂസറിന് സ്വന്തമായ സൈറ്റ് ഒബ്ജക്റ്റുകളുടെ ഒരു അറേ. |
| $user_id | `int` | യൂസർ ഐഡി. |
| $all | `bool` | 'deleted', 'archived', അല്ലെങ്കിൽ 'spam' എന്ന് അടയാളപ്പെടുത്തിയ സൈറ്റുകൾ ഉൾപ്പെടെ എല്ലാ സൈറ്റുകളും റിട്ടേൺ ചെയ്യുന്ന സൈറ്റുകളുടെ അറേയിൽ വേണോ എന്നത്. ഡിഫോൾട്ട് മൂല്യം false ആണ്. |

### മുതൽ {#since}

- 2.0.11
### സ്രോതസ്സ് {#source}

[`inc/managers/class-site-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-site-manager.php#L851) എന്ന ഫയലിലെ 851-ാം വരിയിൽ നിർവചിച്ചിരിക്കുന്നു.
