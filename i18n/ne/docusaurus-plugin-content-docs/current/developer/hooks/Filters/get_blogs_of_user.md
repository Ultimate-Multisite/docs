---
id: get_blogs_of_user
title: फिल्टर - get_blogs_of_user
sidebar_label: get_blogs_of_user
_i18n_hash: 77871d3651eb7f3ab1d055fdb89c061e
---
# फिल्टर: get_blogs_of_user {#filter-getblogsofuser}

थप सुनिश्चितताका लागि, मूल WP फिल्टरलाई यहाँ पुनरुत्पादन गर्छ।

प्रयोगकर्ता आबद्ध साइटहरूको सूचीलाई फिल्टर गर्छ।

## प्यारामिटरहरू {#parameters}

| नाम | प्रकार | विवरण |
|------|------|-------------|
| $sites | `object[]` | प्रयोगकर्तासँग सम्बन्धित साइट वस्तुहरूको array। |
| $user_id | `int` | प्रयोगकर्ता ID। |
| $all | `bool` | फर्काइएको साइटहरूको array मा 'deleted', 'archived', वा 'spam' चिह्न लगाइएका साइटहरू सहित सबै साइटहरू समावेश हुनुपर्छ कि हुँदैन। पूर्वनिर्धारित false। |

### देखि {#since}

- 2.0.11
### स्रोत {#source}

लाइन 851 मा [`inc/managers/class-site-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-site-manager.php#L851) भित्र परिभाषित गरिएको छ।
