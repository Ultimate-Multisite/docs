---
id: wu_make_primary_domain_redirect_url
title: Филтр - wu_make_primary_domain_redirect_url
sidebar_label: wu_make_primary_domain_redirect_url
_i18n_hash: bda96824db400b25e97802e5567df22d
---
# Филтр: wu_make_primary_domain_redirect_url

URL-и равонасозиро пас аз primary кардани домен филтр мекунад.

Ба таҳиягарон имкон медиҳад, ки ҷойеро, ки корбарон пас аз бомуваффақият ҳамчун primary таъин кардани домен ба он равона карда мешаванд, танзим кунанд. Ба таври пешфарз, ба URL-и ҷорӣ дар сомонаи асосӣ ё ба URL-и admin-и сомонае, ки тағйир дода мешавад, равона мекунад.

## Параметрҳо

| Ном | Навъ | Тавсиф |
|------|------|-------------|
| $redirect_url | `string` | URL-и равонасозии пешфарз. Ё URL-и ҷорӣ (агар сомонаи асосӣ бошад) ё URL-и admin-и сомонаи ҷорӣ. |
| $current_site | `int` | ID-и сомонае, ки домени он primary карда мешавад. |
| $domain | `\Domain` | Объекти домен, ки primary карда шуд. |
| $old_primary_domains | `array` | Массиви ID-ҳои доменҳое, ки қаблан primary буданд. |

### Аз версияи

- 2.0.0
### Манбаъ

Дар [`inc/ui/class-domain-mapping-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-domain-mapping-element.php#L639) дар сатри 639 муайян шудааст


## Бармегардонад
URL-и равонасозии филтршуда.
