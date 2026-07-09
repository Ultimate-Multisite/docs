---
id: get_blogs_of_user
title: පෙරහන - get_blogs_of_user
sidebar_label: get_blogs_of_user
_i18n_hash: 77871d3651eb7f3ab1d055fdb89c061e
---
# පෙරහන: get_blogs_of_user

ආරක්ෂාවට, මෙහි මුල් WP පෙරහන නැවත ක්‍රියාත්මක කරයි.

පරිශීලකයෙකු අයත් වන අඩවි ලැයිස්තුව පෙරහන් කරයි.

## පරාමිතීන්

| නම | වර්ගය | විස්තරය |
|------|------|-------------|
| $sites | `object[]` | පරිශීලකයාට අයත් අඩවි වස්තු මාලාවක්. |
| $user_id | `int` | පරිශීලක ID. |
| $all | `bool` | ආපසු ලබාදෙන අඩවි මාලාවෙහි 'deleted', 'archived', හෝ 'spam' ලෙස සලකුණු කළ ඒවා ඇතුළුව සියලු අඩවි තිබිය යුතුද යන්න. පෙරනිමිය false. |

### සිට

- 2.0.11
### මූලාශ්‍රය

[`inc/managers/class-site-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-site-manager.php#L851) තුළ 851 වන පේළියේ නිර්වචනය කර ඇත.
