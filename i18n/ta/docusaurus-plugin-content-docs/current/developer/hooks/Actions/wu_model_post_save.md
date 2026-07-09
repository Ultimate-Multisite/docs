---
id: wu_model_post_save
title: Action - wu_model_post_save
sidebar_label: wu_model_post_save
_i18n_hash: dd2afb7dda9751cf6d2e2f8e0ff2b428
---
# Action: wu_model_post_save {#action-wumodelpostsave}

ஒரு Object தரவுத்தளத்தில் சேமிக்கப்பட்ட பிறகு இது இயங்கும்.

## அளவுருக்கள் {#parameters}

| பெயர் | வகை | விளக்கம் |
|------|------|-------------|
| $model | `string` | மாடல் ஸ்லக். |
| $data | `array` | சேமிக்கப்பட வேண்டிய Object தரவு, இது serialized செய்யப்பட்டிருக்கும். |
| $data_unserialized | `array` | சேமிக்கப்பட வேண்டிய Object தரவு. |
| $this | `\Base_Model` | Object இன் நிகழ்வு (instance). |

### எப்போது இருந்து {#since}

- 2.0.0
### ஆதாரம் {#source}

- [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L613) இல் 613 வரியில் வரையறுக்கப்பட்டுள்ளது
- [`inc/models/class-site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-site.php#L1743) இல் 1743 வரியில் வரையறுக்கப்பட்டுள்ளது
