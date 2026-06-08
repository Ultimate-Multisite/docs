---
id: wp_ultimo_skip_network_active_check
title: Filter - wp_ultimo_skip_network_active_check
sidebar_label: wp_ultimo_skip_network_active_check
_i18n_hash: e2f5feea7c780608ddb520691a69fea8
---
# Filter: wp_ultimo_skip_network_active_check

विकसकांना (developers) नेटवर्क सक्रियता तपासणी (network activation check) वगळण्याची (skip) सोय देते.

जेव्हा तुम्ही composer-आधारित आणि इतर कस्टमाइज्ड सेटअप्स वापरत असता, जसे की Bedrock, जिथे mu-plugins म्हणून प्लगइन्स वापरणे सामान्य आहे, तेव्हा हे उपयुक्त ठरते.

## पॅरामीटर्स

| Name | Type | Description |
|------|------|-------------|
| $skip_network_activation_check | `bool` | आपल्याला ही तपासणी वगळायची आहे की नाही, हे ठरवते. डीफॉल्ट (default) मूल्य false असते. |

### Since

- 2.0.0
### Source

[`inc/class-requirements.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/class-requirements.php#L272) मध्ये लाइन 272 वर परिभाषित केले आहे.


## Returns
जर तुम्हाला ही तपासणी वगळायची असेल, तर `true` आणि अन्यथा `false` परत करतो.
