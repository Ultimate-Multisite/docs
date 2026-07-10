---
id: wu_page_load
title: Action - wu_page_load
sidebar_label: wu_page_load
_i18n_hash: ad34b2f5095d3cd6f3c54172f800e3fd
---
# Action: wu_page_load {#action-wupageload}

பிளக்இன் உருவாக்குநர்கள் (plugin developers) எங்கள் பக்கங்களில் கூடுதல் ஹூக்குகளை (hooks) சேர்க்க இது அனுமதிக்கிறது.

## அளவுருக்கள் (Parameters) {#parameters}

| பெயர் (Name) | வகை (Type) | விளக்கம் (Description) |
|------|------|-------------|
| $id | `string` | இந்த பக்கத்தின் ID. |
| $page_hook | `string` | இந்த பக்கத்தின் page hook. |
| $admin_page | `self` | பக்கத்தின் நிகழ்வு (page instance). |

### எப்போது இருந்து (Since) {#since}

- 1.8.2
- 2.0.4: மூன்றாவது அளவுரு சேர்க்கப்பட்டது: பக்கத்தின் நிகழ்வு (the page instance).
### மூலம் (Source) {#source}

வரி 318 இல் [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L318) இல் வரையறுக்கப்பட்டுள்ளது.
