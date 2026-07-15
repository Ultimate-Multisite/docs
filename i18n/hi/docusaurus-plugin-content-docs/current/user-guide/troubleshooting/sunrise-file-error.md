---
title: Sunrise फ़ाइल त्रुटि
sidebar_position: 12
_i18n_hash: 53d988d644c244d20f04444350bd5d3c
---
# Sunrise फ़ाइल इंस्टॉल करने में Error

sunrise.php फ़ाइल एक विशेष फ़ाइल है जिसे WordPress अपने शुरुआती load के दौरान खोजता है। WordPress को sunrise.php फ़ाइल का पता लगाने के लिए, इसे **wp-content फ़ोल्डर** के अंदर होना ज़रूरी है।

जब आप Ultimate Multisite को activate करते हैं और screenshot में दिखाए गए setup wizard से गुज़रते हैं, तो Ultimate Multisite हमारी sunrise.php फ़ाइल को wp-content फ़ोल्डर में copy करने की कोशिश करता है।

<!-- Screenshot unavailable: Setup wizard page showing sunrise.php installation step -->

ज़्यादातर मामलों में, हम फ़ाइल को सफलतापूर्वक copy कर पाते हैं और सब कुछ ठीक से काम करता है। लेकिन अगर कुछ सही तरीके से सेट नहीं है (जैसे फ़ोल्डर की permissions), तो आपको ऐसी स्थिति का सामना करना पड़ सकता है जहाँ Ultimate Multisite फ़ाइल को copy नहीं कर पाता।

अगर आप Ultimo का error message पढ़ें, तो आपको पता चलेगा कि यहाँ वही हुआ है: **Sunrise copy failed**।

<!-- Screenshot unavailable: Error message showing Sunrise copy failed -->

इसे ठीक करने के लिए, आप बस wp-ultimo plugin फ़ोल्डर के अंदर से sunrise.php फ़ाइल को copy करें और अपने wp-content फ़ोल्डर में paste कर दें। ऐसा करने के बाद, wizard page को reload करें और सभी checks पास हो जाने चाहिए।

<!-- Screenshot unavailable: File manager showing sunrise.php inside wp-ultimo plugin folder --> किसी भी स्थिति में, भविष्य में समस्याओं से बचने के लिए अपने फ़ोल्डर की permissions की जाँच करना अच्छा रहेगा (न केवल Ultimate Multisite के लिए बल्कि अन्य plugins और themes के लिए भी)।

**Health Check tool** जो WordPress का हिस्सा है (आप इसे अपनी main site के **admin panel > Tools > Health Check** से access कर सकते हैं) आपको बता सकता है कि क्या आपके फ़ोल्डर की permissions ऐसी values पर सेट हैं जो WordPress के साथ समस्याएँ पैदा कर सकती हैं।

<!-- Screenshot unavailable: WordPress Health Check tool showing folder permissions status -->
