---
title: ການກວດສອບການຍົກຍ້າຍອຳນາດ
sidebar_position: 16
_i18n_hash: a19bc6263b278573f09cbba17581f632
---
# ການກວດສອບການຍົກຍ້າຍແບບ Sovereign

Ultimate Multisite: Multi-Tenancy 1.2.0 ມີຄໍາສັ່ງຢືນຢັນ WP-CLI ສຳລັບການຍົກຍ້າຍ tenant ແບບ sovereign. ໃຫ້ໃຊ້ຄໍາສັ່ງເຫຼົ່ານີ້ເມື່ອການຍົກຍ້າຍ tenant, ການເຂົ້າຊົມ SSO, ຫຼືການຕິດຕັ້ງແບບຫຸ້ມຫໍ່ທີ່ແຍກອອກບໍ່ເປັນໄປຕາມທີ່ຄາດໄວ້.

## ຄໍາສັ່ງທີ່ຈະຕ້ອງເຮັດ {#commands-to-run}

ໃຫ້ດໍາເນີນການຢືນຢັນຈາກການຕິດຕັ້ງ WordPress ໃນເຄືອຂ່າຍ:

```bash
wp tenant verify-no-legacy --site=<site-id>
wp tenant verify-sovereign-push --site=<site-id>
```

ໃຫ້ໃຊ້ site ID ຂອງ tenant ທີ່ທ່ານກໍາລັງຍົກຍ້າຍ. ຄໍາສັ່ງທໍາອິດຈະກວດສອບວ່າ tenant ນັ້ນບໍ່ອີງໃສ່ຂໍ້ມູນແບບ legacy ຂອງເຄືອຂ່າຍອີກຕໍ່ໄປ. ຄໍາສັ່ງທີສອງຈະຢືນຢັນວ່າ job push ແບບ sovereign ສາມາດປະມວນຜົນ ແລະ ດູດຂໍ້ມູນອອກໄດ້.

## ຂໍ້ຜິດພາດທົ່ວໄປ {#common-failures}

### ການໃຫ້ສິດໃນຖານະ Database ບໍ່ກົງກັບ host {#database-grants-do-not-match-the-host}

ຖ້າການຢືນຢັນລາຍງານຄວາມຜິດພາດຂອງ grant ຫຼື writer-user, ກະລຸນາກວດສອບ database host ທີ່ຕັ້ງຄ່າໄວ້. `localhost`, `127.0.0.1`, ແລະ ຊື່ service container ແມ່ນ host MySQL grant ທີ່ແຕກຕ່າງກັນ. ອັບເດດການຜູກມັດ tenant host ຫຼື database grants ແລ້ວໃຫ້ຮັນຢືນຢັນຄືນໃໝ່.

### ການຕິດຕັ້ງ Bedrock ຫຼື local socket ບໍ່ສາມາດເຊື່ອມຕໍ່ໄດ້ {#bedrock-or-local-installs-cannot-connect}

Bedrock ແລະ local socket installs ອາດຈະລາຍງານວ່າ database ແມ່ນ `localhost` ໃນຂະນະທີ່ runtime ເຊື່ອມຕໍ່ຜ່ານ address ທີ່ປົກກະຕິແລ້ວ. ໃສ່ໃນເວີຊັນ 1.2.0 ຈະເຮັດໃຫ້ host string ຂອງເຄື່ອງດຽວກັນເປັນແບບປົກກະຕິ, ແຕ່ການປ່ຽນແປງ host ທີ່ເປັນ custom ກໍຍັງອາດຈະຂັດກັບ database grants ໄດ້.

### Async push queue ບໍ່ສາມາດດູດຂໍ້ມູນອອກໄດ້ {#async-push-queue-does-not-drain}

ຖ້າ `verify-sovereign-push` ບໍ່ສຳເລັດ, ກະລຸນາກວດສອບ Action Scheduler ຫຼື async runner ທີ່ຕັ້ງຄ່າໄວ້. ເອົາ job ທີ່ລົ້ມເຫຼວອອກເມື່ອຢືນຢັນແລ້ວວ່າມັນປອດໄພທີ່ຈະເຮັດຊ້ຳ ຫຼື ຖິ້ມມັນໄດ້.

### ຈໍານວນ user tenant ຜິດ {#tenant-user-count-is-wrong}

ການຍົກຍ້າຍຄວນຈະສ້າງ user ສຳລັບ tenant ແບບ sovereign. ຖ້າ missing install user ທີ່ຄາດໄວ້, ກະລຸນາຮັນຂັ້ນຕອນການສ້າງ user ອີກຄັ້ງກ່ອນທີ່ຈະລອງ SSO ອີກ.

### ການເຂົ້າຊົມ SSO ຖືກປະຕິເສດ {#sso-visit-is-rejected}

ການເຂົ້າສູ່ລະບົບອັດຕະໂນມັດຂອງ tenant ທີ່ບໍ່ມີສະແດງຂໍ້ມູນ (Stateless) ຮຽກຮ້ອງໃຫ້ domain ຂອງ tenant, origin pin, token purpose, nonce ແລະ expiry ຕ້ອງຈັບຄູ່ກັນ. ກວດສອບວ່າ URL ຂອງ tenant ເປັນຖືກຕ້ອງ ແລະ ລອງເຂົ້າສູ່ລະບົບໃນເວລາໃກ້ໆຫຼັງຈາກທີ່ໄດ້ສ້າງ SSO visit ແລ້ວ.

## ເມື່ອໃດຄວນລອງໃໝ່ (When to retry) {#when-to-retry}

ໃຫ້ລອງຢືນຢັນອີກຄັ້ງຫຼັງຈາກມີການປ່ຽນແປງໂຄງສ້າງພື້ນຖານ (infrastructure change) ທຸກເທື່ອ. ຫ້າມປ່ຽນທຣ্যাফিকຂອງ production, ລຶບຂໍ້ມູນຕົ້ນສະບັບ ຫຼື ລຶບຂໍ້ມູນການຍົກຍ້າຍ (migration credentials) ຈົນກວ່າການກວດສອບທັງໝົດຈະຜ່ານ.
