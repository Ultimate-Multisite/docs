---
id: wp_ultimo_skip_network_active_check
title: පෙරහන - wp_ultimo_skip_network_active_check
sidebar_label: wp_ultimo_skip_network_active_check
_i18n_hash: e2f5feea7c780608ddb520691a69fea8
---
# පෙරහන: wp_ultimo_skip_network_active_check

සංවර්ධකයන්ට ජාල සක්‍රියකරණ පරීක්ෂාව කෙටි මඟින් මඟහැරීමට ඉඩ දෙයි.

උදාහරණයක් ලෙස Bedrock වැනි composer-මත පදනම් වූ සහ වෙනත් අභිරුචි සැකසුම් භාවිතා කරන විට මෙය ප්‍රයෝජනවත්ය, එහිදී plugins, mu-plugins ලෙස භාවිතා කිරීම සාමාන්‍ය ක්‍රමය වේ.

## පරාමිතීන් {#parameters}

| නම | වර්ගය | විස්තරය |
|------|------|-------------|
| $skip_network_activation_check | `bool` | අපි පරීක්ෂාව මඟහැරිය යුතුද නැද්ද යන්න; පෙරනිමිය false වේ. |

### සිට {#since}

- 2.0.0
### මූලාශ්‍රය {#source}

[`inc/class-requirements.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/class-requirements.php#L272) තුළ 272 වන පේළියේ නිර්වචනය කර ඇත


## ආපසු ලබාදීම {#returns}
ඔබ පරීක්ෂාව මඟහැරීමට කැමති නම් true, නැතිනම් false.
