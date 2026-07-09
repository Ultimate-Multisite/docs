---
id: add_user_to_blog
title: ການກະທຳ - add_user_to_blog
sidebar_label: add_user_to_blog
_i18n_hash: ac7b281fe49bfc7d858869b1a24e9ae3
---
# ການກະທຳ: add_user_to_blog {#action-addusertoblog}

ເຮັດວຽກທັນທີຫຼັງຈາກຜູ້ໃຊ້ຖືກເພີ່ມເຂົ້າໄປໃນເວັບໄຊ.

## ພາຣາມິເຕີ {#parameters}

| ຊື່ | ປະເພດ | ຄຳອະທິບາຍ |
|------|------|-------------|
| $user_id | `int` | ID ຜູ້ໃຊ້. |
| $role | `string` | ບົດບາດຜູ້ໃຊ້. |
| $blog_id | `int` | ID ບລັອກ. |

### ຕັ້ງແຕ່ {#since}

- MU: MU
### ແຫຼ່ງທີ່ມາ {#source}

ກຳນົດໄວ້ໃນ [`inc/mu-migration/includes/helpers.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/helpers.php#L174) ທີ່ບັນທັດ 174
