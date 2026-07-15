---
id: wu_wp_config_reference_hook_line_patterns
title: Filter - wu_wp_config_reference_hook_line_patterns
sidebar_label: wu_wp_config_reference_hook_line_patterns
_i18n_hash: 5fd70ec9bc5a2b3357660797baf5519b
---
# Filter: wu_wp_config_reference_hook_line_patterns

हम यह पता लगाने के लिए तीन पैटर्न की जाँच करते हैं कि हम अपने कॉन्स्टेंट्स (constants) कहाँ इंजेक्ट कर सकते हैं:

1. हम `$table_prefix` वेरिएबल की परिभाषा (definition) खोजते हैं; 2. हम और जटिल `$table_prefix` परिभाषाएँ खोजते हैं - वे जो env variables का उपयोग करती हैं, उदाहरण के लिए; 3. यदि वह उपलब्ध नहीं है, तो हम 'Happy Publishing' कमेंट की तलाश करते हैं; 4. यदि वह भी उपलब्ध नहीं है, तो हम फ़ाइल की शुरुआत की तलाश करते हैं। यहाँ की key पैटर्न को दर्शाती है और value यह बताती है कि कितनी लाइनों को जोड़ना है। यदि आप नकारात्मक लाइनों की संख्या पास करते हैं, तो यह पाई गई लाइन के बाद लिखने के बजाय, उससे पहले लिखने के लिए किया जा सकता है।

### Source {#source}

[`inc/helpers/class-wp-config.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/helpers/class-wp-config.php#L143) में लाइन 143 पर परिभाषित है।
