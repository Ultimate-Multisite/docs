---
id: wu_magic_link_enforce_ip
title: ማጣሪያ - wu_magic_link_enforce_ip
sidebar_label: wu_magic_link_enforce_ip
_i18n_hash: b785314a6a2d9ea45d3beab38baa58fe
---
# Filter: wu_magic_link_enforce_ip

የIP አድራሻ ማረጋገጫ መፈጸም አለመፈጸም የሚቆጣጠር ፊልተር ነው።

ወደ `false` ሲቀመጥ፣ ቶከኖች (tokens) በተለያዩ ኔትወርኮች (networks) እንዲሰሩ ያስችላል። ይህ ደህንነትን ይቀንሳል፣ ነገር ግን የአጠቃቀም ምቾትን (usability) ይጨምራል (ለምሳሌ፣ ኔትወርኮችን የሚቀይሩ ለሞባይል ተጠቃሚዎች)።

## መለኪያዎች {#parameters}

| Name | Type | መግለጫ |
|------|------|-------------|
| $enforce | `bool` | የIP አድራሻ መመሳሰል መፈጸም አለመፈጸም። |

### ከ {#since}

- 2.0.0
### ምንጭ {#source}

በ[`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L422) በ422ኛው መስመር ተገልጿል።
