---
title: ການຄົ້ນຫາ ແລະ ປ່ຽນຂໍ້ຄວາມອັດຕະໂນມັດໃນແບບຟອມເວັບໄຊທ໌
sidebar_position: 8
_i18n_hash: 0842f53505d24579010d91568e06ef68
---
# ການຄົ້ນຫາ ແລະ ປ່ຽນຂໍ້ຄວາມອັດຕະໂນມັດໃນ Site Templates (v2)

_**ການສອນນີ້ຕ້ອງການ WP UItimo version 2.x.**_

ໜຶ່ງໃນຟີເຈີທີ່ຊົງພະລັງທີ່ສຸດຂອງ Ultimate Multisite ແມ່ນຄວາມສາມາດໃນການເພີ່ມຂໍ້ຄວາມ, ສີ ແລະ ເລືອກ field ໃດໆເຂົ້າໄປໃນແບບຟອມລົງທະບຽນໄດ້. ເມື່ອເຮົາເກັບຂໍ້ມູນນັ້ນໄດ້ແລ້ວ, ເຮົາສາມາດໃຊ້ຂໍ້ມູນນັ້ນເພື່ອຕື່ມເນື້ອຫາລ່ວງໜ້າໃນສ່ວນຕ່າງໆຂອງ site template ທີ່ເລືອກໄວ້. ແລ້ວ, ເມື່ອ site ໃໝ່ຖືກເຜີຍແຜ່, Ultimate Multisite ຈະປ່ຽນ placeholder (ບ່ອນຮັກ) ດ້ວຍຂໍ້ມູນຕົວຈິງທີ່ຜູ້ໃຊ້ໄດ້ໃສ່ໃນລະຫວ່າງການລົງທະບຽນ.

ຕົວຢ່າງເຊັ່ນ, ເຈົ້າສາມາດເຮັດ site template ຂອງເຈົ້າໃຫ້ມີ placeholders ໄດ້. Placeholders ຄວນຖືກເພີ່ມໂດຍການລ້ອມຮອບດ້ວຍ double curly braces - {{placeholder_name}}.

ຈາກນັ້ນ, ເຈົ້າພຽງແຕ່ເພີ່ມ field ລົງທະບຽນທີ່ກົງກັບມັນເພື່ອເກັບຂໍ້ມູນນັ້ນ.

ຫຼັງຈາກນັ້ນ, ລູກຄ້າຂອງເຈົ້າກໍຈະສາມາດຕື່ມຂໍ້ມູນໃນ field ນັ້ນໄດ້ໃນລະຫວ່າງການລົງທະບຽນ.

Ultimate Multisite ຈະປ່ຽນ placeholders ດ້ວຍຂໍ້ມູນທີ່ລູກຄ້າໃຫ້ໄວ້ໂດຍອັດຕະໂນມັດ.

## **ການແກ້ໄຂບັນຫາ "template ທີ່ເຕັມໄປດ້ວຍ placeholders"**

ສິ່ງເຫຼົ່ານັ້ນດີທັງໝົດ, ແຕ່ເຮົາເຈົ້າຈະພົບກັບບັນຫາທີ່ບໍ່ສວຍງາມ: site template ຂອງເຮົາ - ທີ່ລູກຄ້າສາມາດເຂົ້າເຖິງໄດ້ - ເຕັມໄປດ້ວຍ placeholders ທີ່ບໍ່ມີຄວາມໝາຍຫຼາຍ.

ເພື່ອແກ້ໄຂບັນຫານີ້, ເຮົາສະເໜີທາງເລືອກໃນການຕັ້ງຄ່າຄ່າປອມ (fake values) ສຳລັບ placeholders ແລະ ເຮົາໃຊ້ຄ່ານັ້ນໃນການຄົ້ນຫາ ແລະ ປ່ຽນເນື້ອໃນຂອງພວກມັນໃນ site template ໃນຂະນະທີ່ລູກຄ້າກຳລັງເຂົ້າເຖິງ.

ເຈົ້າສາມາດເຂົ້າເຖິງ editor ຂອງ template placeholders ໄດ້ໂດຍການໄປທີ່ **Ultimate Multisite > Settings > Sites**, ເລື່ອນລົງໄປຫາ area Site Template Options, ແລະ ຈາກນັ້ນກົດລິ້ງ **Edit Placeholders**.

![Site Template Options area in the Sites settings page](/img/config/settings-sites-templates-section.png)

ສິ່ງນີ້ຈະພາເຈົ້າໄປທີ່ editor ຂອງ placeholders, ເຊິ່ງເຈົ້າສາມາດເພີ່ມ placeholders ແລະ ເນື້ອໃນທີ່ກ່ຽວຂ້ອງກັບມັນໄດ້.

![จุดเริ่มต้นของตัวแก้ไขเทมเพลตหน้า](https://yourdomain.com/img/config/settings-sites-templates-section.png)
