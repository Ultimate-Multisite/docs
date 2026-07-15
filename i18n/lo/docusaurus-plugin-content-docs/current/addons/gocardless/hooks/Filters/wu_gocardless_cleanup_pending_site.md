---
id: wu_gocardless_cleanup_pending_site
title: ຕົວກອງ - wu_gocardless_cleanup_pending_site
sidebar_label: wu_gocardless_cleanup_pending_site
_i18n_hash: 12dc7cf40d5e91b9d4da3ea887286608
---
# ຕົວກອງ: wu_gocardless_cleanup_pending_site

ເຮັດວຽກກ່ອນລຶບ site ທີ່ກຳລັງລໍຖ້າແບບ orphaned ສຳລັບ GoCardless membership ທີ່ຖືກຍົກເລີກ.

ສົ່ງຄ່າ false ຈາກຕົວກອງນີ້ເພື່ອປ້ອງກັນການລຶບ.

## ພາລາມິເຕີ {#parameters}

| ຊື່ | ປະເພດ | ຄຳອະທິບາຍ |
|------|------|-------------|
| $blog_id | `int` | WordPress blog ID ຂອງ site ທີ່ກຳລັງລໍຖ້າ. |
| $membership | `\WP_Ultimo\Models\Membership` | membership ທີ່ຖືກຍົກເລີກ. |
| $old_status | `string` | ສະຖານະກ່ອນການຍົກເລີກ. |

### ຕັ້ງແຕ່ {#since}

- 2.0.0
### ແຫຼ່ງທີ່ມາ {#source}

ກຳນົດໄວ້ໃນ [`inc/gateways/class-gocardless-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-gocardless/blob/main/inc/gateways/class-gocardless-gateway.php#L1086) ທີ່ບັນທັດ 1086
