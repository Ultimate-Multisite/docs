---
id: wu_page_this-id_load
title: 'მოქმედება - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d386046d2a23406f0fed8400e9aefa6e
---
# Action: wu_page_\{$this->id\}_load {#action-wupagethis-idload}

მიეცით plugin-ის დეველოპერებს საშუალება, ჩვენს გვერდებზე დამატებითი hooks დაამატონ.

## პარამეტრები {#parameters}

| სახელი | ტიპი | აღწერა |
|------|------|-------------|
| $id | `string` | ამ გვერდის ID. |
| $page_hook | `string` | ამ გვერდის hook. |
| $admin_page | `self` | გვერდის ეგზემპლარი. |

### ვერსიიდან {#since}

- 1.8.2
- 2.0.4: დაემატა მესამე პარამეტრი: გვერდის ეგზემპლარი.
### წყარო {#source}

განსაზღვრულია [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L332)-ში, ხაზზე 332
