---
title: Txhawm Hauv Qhov Kev Tsoom
sidebar_position: 11
_i18n_hash: 0259b88b319090b358483322ad97fc2d
---
# ຕາຕະລາງຂໍ້ມູນການຕັ້ງຄ່າ

ໜ້າTHIS page ຈະຕິດຕາມການຕັ້ງຄ່າທີ່ສົ່ງຜົນກະທົບຕໍ່ການບໍລິຫານປະຈຳວັນ ແລະ ການປ່ຽນແປງພຶດຕິກຳບໍ່ດ lâuໃນ Ultimate Multisite.

## ທາງເລືອກອື່ນໆ (Other Options)

ສ່ວນ **Other Options** ຈະສະແດງຢູ່ໃຕ້ **Ultimate Multisite > Settings > Login & Registration**.

| ການຕັ້ງຄ່າ | ຄຳອະທິບາຍ |
|---|---|
| **Enable Jumper** | ສະແດງເຄື່ອງມື quick navigation ຊື່ວ່າ Jumper ໃນ khu vực admin. ໃຊ້ເພື່ອຂ້າມໄປຫາໜ້າ Ultimate Multisite, network objects ແລະ ຈຸດປາຍທາງຂອງ admin ທີ່ຮອງຮັບໂດຍກົງ. ຖ້າບໍ່ຕ້ອງການໃຫ້ shortcut ນີ້ເຫັນ, ໃຫ້ປິດ (Disable) ອອກ. |

## ການລາຍງານຂໍ້ຜິດພາດ ແລະ telemetry

ການຕັ້ງຄ່າເພີ່ມເຕີມເພື່ອສະໝັກເຂົ້າສູ່ລະບົບການລາຍງານຂໍ້ຜິດພາດກ່ອນໜ້ານີ້ ໄດ້ຖືກເອົາອອກຈາກໜ້າ settings ແລ້ວ. ການສົ່ງຂໍ້ມູນ telemetry ທີ່ບໍ່ເປີດເຜີຍຕົວຕົນ (Anonymous) ໄດ້ຖືກປິດໄວ້ ແລະ ບໍ່ມີ UI toggle ເພື່ອເປີດມັນ.

ຖ້າທ່ານຮັກສາ runbooks ຫຼື screenshots ຂອງໜ້າ settings ໄວ້, ໃຫ້ເອົາການອ້າງອີງເຖິງ error-reporting opt-in field ເກົ່າອອກ ເພື່ອໃຫ້ຜູ້ບໍລິຫານບໍ່ໄດ້ຊອກຫາການຕັ້ງຄ່າທີ່ບໍ່ມີຢູ່ແລ້ວ.

## ການຕັ້ງຄ່າ Import/Export

Tab **Import/Export** ຈະອະທິບາຍວ່າການຕັ້ງຄ່ານີ້ຄວບຄຸມຫຍັງ ແລະ ເຊື່ອມຕໍ່ໂດຍກົງກັບ **Ultimate Multisite > Site Export** ສຳລັບ archive ຂອງ site ແລະ network. ໃຊ້ tab settings ນີ້ສຳລັບການຕັ້ງຄ່າ import/export, ໃຊ້ **Tools > Export & Import** ສຳລັບ workflow ການ export/import ແບບ single-site, ແລະ ໃຊ້ເຄື່ອງມື Site Export ເມື່ອທ່ານຕ້ອງການ archive Network Export ໃໝ່.

## ການຕັ້ງຄ່າ AI provider connector settings

ການຕັ້ງຄ່າ AI provider connector ແມ່ນສະແດງໃຫ້ເຫັນພຽງແຕ່ account pools OAuth ທີ່ຮອງຮັບເທົ່ານັ້ນ:

| Provider | Setup flow |
|---|---|
| **Anthropic Max** | ໃຊ້ปุ่ม OAuth เชื่อมต่อบัญชี Anthropic Max หนึ่งบัญชีหรือมากกว่านั้น. ຖ້າ browser sandboxed ບໍ່ສາມາດເຮັດການ redirect ໂດຍອັດຕະໂນມັດໄດ້, ໃຫ້ໃຊ້ manual OAuth fallback ເປັນທາງເລືອກ. |
| **OpenAI ChatGPT/Codex** | ໃຊ້ workflow OAuth ດຽວກັນເພື່ອເຊື່ອມຕໍ່ບັນຊີ ChatGPT. ການປະຕິບັດການທີ່ຮອງຮັບ connector ສາມາດໃຊ້ tool calls ຂອງ ChatGPT Codex ໄດ້ຫຼັງຈາກເຊື່ອມຕໍ່ບັນຊີແລ້ວ. |
| **Google AI Pro** | ເຊື່ອມຕໍ່ບັນຊີ Google AI Pro ຜ່ານ OAuth, ແລ້ວໃຫ້ refresh connector ຖ້າລາຍການບັນຊີບໍ່ອັບເດດທັນທີ. |

Cursor Pro ບໍ່ໄດ້ຮັບການສະໜັບສະໜູນອີກຕໍ່ໄປ. ໃຫ້ເອົາຮູບພາບພາຍໃນ, runbooks, ຫຼື ຂັ້ນຕອນການ onboard ເກົ່າໆທີ່ກ່າວເຖິງ field setup ຫຼື connector paths ຂອງ Cursor Pro ອອກ.

ເມື່ອເພີ່ມ ຫຼື ລຶບບັນຊີ provider, ໃຫ້ໃສ່ email address ທີ່ຖືກຕ້ອງສຳລັບບັນຊີທີ່ຈະ refresh ຫຼື ລຶບ ແລະ ບັນທຶກການຕັ້ງຄ່າ provider ກ່ອນທີ່ຈະທົດສອບການປະຕິບັດການທີ່ໃຊ້ connector.
