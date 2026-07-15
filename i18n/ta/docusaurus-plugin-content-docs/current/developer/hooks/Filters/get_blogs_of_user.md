---
id: get_blogs_of_user
title: வடிகட்டி - get_blogs_of_user
sidebar_label: get_blogs_of_user
_i18n_hash: 77871d3651eb7f3ab1d055fdb89c061e
---
# Filter: get_blogs_of_user

இது அசல் WP Filter-ஐ இங்கே மீண்டும் செயல்படுத்துகிறது, கூடுதல் பாதுகாப்பிற்காக.

ஒரு பயனர் சொந்தமாக இருக்கும் தளங்களின் பட்டியலை வடிகட்டுகிறது.

## அளவுருக்கள் (Parameters) {#parameters}

| Name | Type | விளக்கம் (Description) |
|------|------|-------------|
| $sites | `object[]` | பயனருக்குச் சொந்தமான தள ஆப்ஜெக்டுகளின் ஒரு வரிசை (array). |
| $user_id | `int` | பயனர் ஐடி (User ID). |
| $all | `bool` | திரும்ப வரும் தளங்கள் வரிசையில் 'நீக்கப்பட்டது' (deleted), 'ஆவணப்படுத்தப்பட்டது' (archived), அல்லது 'ஸ்பேம்' (spam) என்று குறிக்கப்பட்ட தளங்கள் உட்பட அனைத்தும் இருக்க வேண்டுமா. இயல்புநிலை (Default) மதிப்பு false. |

### எப்போது இருந்து (Since) {#since}

- 2.0.11
### ஆதாரம் (Source) {#source}

[`inc/managers/class-site-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-site-manager.php#L851) என்ற கோப்பில் 851 வரியில் வரையறுக்கப்பட்டுள்ளது.
