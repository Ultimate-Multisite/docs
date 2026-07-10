---
id: wu_checkout_form_base_domains
title: फिल्टर - wu_checkout_form_base_domains
sidebar_label: wu_checkout_form_base_domains
_i18n_hash: 49dcc3fe0fa685304a70aeb9424749fd
---
# Filter: wu_checkout_form_base_domains {#filter-wucheckoutformbasedomains}

सामायिक checkout-form आधार डोमेन फिल्टर करते, जे mapped-domain नोंदी बनू नयेत.

जेव्हा एखादे integration checkout form **साइट URL** फील्डसाठी अतिरिक्त आधार डोमेन पुरवते तेव्हा हा filter वापरा. या filter द्वारे परत केलेले डोमेन प्रति-साइट custom डोमेनऐवजी सामायिक नोंदणी hosts म्हणून हाताळले जातात.

## पॅरामीटर्स {#parameters}

| नाव | प्रकार | वर्णन |
|------|------|-------------|
| $domains | `array` | checkout form configuration मधून गोळा केलेले सामायिक आधार डोमेन. |

### पासून {#since}

- 2.13.0

### स्रोत {#source}

`inc/functions/domain.php` मध्ये परिभाषित.


## परतावा {#returns}

normalized checkout-form आधार डोमेनचा array.
