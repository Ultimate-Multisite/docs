---
id: wu_domain_became_primary
title: Action - wu_domain_became_primary
sidebar_label: wu_domain_became_primary
_i18n_hash: c7757c05c88e7b75f88777504426a970
---
# Action: wu_domain_became_primary {#action-wudomainbecameprimary}

ஒரு டொமைன் ஒரு தளத்தின் முதன்மை டொமைனாக மாறும் போது இது தூண்டப்படுகிறது.

ஒரு டொமைனின் `primary_domain` கொடி `true` என அமைக்கப்படும்போது இந்த செயல்பாடு தூண்டப்படுகிறது. இது ஒரு புதிய முதன்மை டொமைனை உருவாக்கும்போதும், அல்லது ஏற்கனவே உள்ள டொமைனை முதன்மை டொமைனாக மாற்றும்போதும் நிகழலாம்.

## அளவுருக்கள் (Parameters) {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | முதன்மை டொமைனாக மாறிய டொமைன். |
| $blog_id | `int` | பாதிக்கப்பட்ட தளத்தின் பிளாக் ID. |
| $was_new | `bool` | இது புதிதாக உருவாக்கப்பட்ட டொமைனா இல்லையா என்பது. |

### Since {#since}

- 2.0.0
### Source {#source}

[`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L560) என்ற கோப்பில் 560 வரியில் வரையறுக்கப்பட்டுள்ளது.
