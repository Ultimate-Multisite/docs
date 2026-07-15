---
id: wp_ultimo_skip_network_active_check
title: Шүүлтүүр - wp_ultimo_skip_network_active_check
sidebar_label: wp_ultimo_skip_network_active_check
_i18n_hash: e2f5feea7c780608ddb520691a69fea8
---
# Шүүлтүүр: wp_ultimo_skip_network_active_check

Хөгжүүлэгчдэд сүлжээний идэвхжүүлэлтийн шалгалтыг шууд алгасах боломж олгоно.

Энэ нь composer-д суурилсан болон бусад захиалгат тохиргоонуудыг ашиглах үед, жишээлбэл Bedrock зэрэгт, plugin-уудыг mu-plugins болгон ашиглах нь хэвийн байдаг тохиолдолд хэрэгтэй.

## Параметрүүд {#parameters}

| Нэр | Төрөл | Тайлбар |
|------|------|-------------|
| $skip_network_activation_check | `bool` | Шалгалтыг алгасах эсэх; анхдагчаар false. |

### Эхэлсэн хувилбар {#since}

- 2.0.0
### Эх сурвалж {#source}

[`inc/class-requirements.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/class-requirements.php#L272)-д 272-р мөрөнд тодорхойлсон


## Буцаах утга {#returns}
Шалгалтыг алгасахыг хүсвэл true, эс бөгөөс false.
