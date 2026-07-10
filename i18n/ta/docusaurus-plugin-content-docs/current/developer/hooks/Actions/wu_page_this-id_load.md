---
id: wu_page_this-id_load
title: 'Action - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d386046d2a23406f0fed8400e9aefa6e
---
# Action: wu_page_{$this->id}_load {#action-wupagethis-idload}

பிளக்இன் உருவாக்குநர்கள் (plugin developers) எங்கள் பக்கங்களில் கூடுதல் ஹூக்குகளை (hooks) சேர்க்க இது அனுமதிக்கிறது.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $id | `string` | இந்த பக்கத்தின் ID. |
| $page_hook | `string` | இந்த பக்கத்தின் page hook. |
| $admin_page | `self` | பக்கத்தின் நிகழ்வு (page instance). |

### Since {#since}

- 1.8.2
- 2.0.4: மூன்றாவது அளவுரு சேர்க்கப்பட்டது: பக்கத்தின் நிகழ்வு (the page instance).
### Source {#source}

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L332) என்ற கோப்பில் 332 வரியில் வரையறுக்கப்பட்டுள்ளது.
