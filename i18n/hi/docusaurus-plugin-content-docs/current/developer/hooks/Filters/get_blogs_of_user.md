---
id: get_blogs_of_user
title: फ़िल्टर - get_blogs_of_user
sidebar_label: get_blogs_of_user
_i18n_hash: 77871d3651eb7f3ab1d055fdb89c061e
---
# Filter: get_blogs_of_user

यह मूल WP Filter की कार्यक्षमता को यहाँ दोहराता है, ताकि यह सुनिश्चित किया जा सके कि सब कुछ सही काम करे।

यह किसी उपयोगकर्ता से जुड़े साइटों की सूची को फ़िल्टर करता है।

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $sites | `object[]` | उपयोगकर्ता से संबंधित साइट ऑब्जेक्ट्स की एक ऐरे (array)। |
| $user_id | `int` | उपयोगकर्ता की ID। |
| $all | `bool` | यह निर्धारित करता है कि लौटाए गए साइटों की ऐरे में सभी साइटें शामिल होनी चाहिए या नहीं, जिसमें 'deleted', 'archived', या 'spam' के रूप में चिह्नित साइटें भी शामिल हैं। डिफ़ॉल्ट रूप से false है। |

### Since

- 2.0.11
### Source

[`inc/managers/class-site-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-site-manager.php#L851) में लाइन 851 पर परिभाषित है
