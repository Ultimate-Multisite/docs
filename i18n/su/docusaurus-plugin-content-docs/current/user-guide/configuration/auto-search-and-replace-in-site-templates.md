---
title: Pencarian Otomatis dan Penggantian di Template Situs
sidebar_position: 8
_i18n_hash: 0842f53505d24579010d91568e06ef68
---
# Auto Search and Replace di Site Template (v2)

_**Tutorial ieu butuh WP UItimo versi 2.x.**_

Salah sahiji fitur pangkuatna Ultimate Multisite téh kemampuan pikeun nambahan téks, warna, jeung pilihan field ka form registrasi. Nalika urang geus ngagandahar data éta, urang bisa ngagunakeun éta pikeun ngaberekeun konten di bagian-bagian tertentu tina template site anu dipilih. Terus, nalika site anyar dipublikasikeun, Ultimate Multisite bakal ngaganti placeholder jeung informasi asli anu geus diisikeun nalika registrasi.

Contona, anjeun bisa ngalakukeun template site anjeun kalayan placeholder. Placeholder kudu ditambahan dibungkus ku dua kurung ganda - {{placeholder_name}}.

Terus, anjeun ngan ukur bisa nambahan field registrasi anu cocong pikeun ngagandahar data éta.

Si pelanggan anjeun teras bakal bisa ngisikeun field éta nalika registrasi.

Ultimate Multisite teras bakal ngaganti placeholder ku data anu parantos dipasihkeun ku pelanggan téh sacara otomatis.

## **Ngaréngkék masalah "template pinuh ku placeholder"** {#solving-the-template-full-of-placeholders-problem}

Sakitu mah saé, tapi urang manggihan masalah anu teu éndah: ayeuna template site urang - anu bisa dikunjung ku pelanggan urang - pinuh ku placeholder anu teu jelas.

Kanggo ngalaksanakeun éta, urang nawarkeun pilihan pikeun ngatur nilai palsu (fake values) pikeun placeholder, sarta urang ngagunakeun nilai éta pikeun nyari jeung ngaganti eusina dina template site nalika pelanggan anjeun keur ngunjungkeun.

Anjeun bisa ngakses editor placeholder template ku cara indit ka **Ultimate Multisite > Settings > Sites**, scroll ka bagian Site Template Options, teras klik tautan **Edit Placeholders**.

![Site Template Options area in the Sites settings page](/img/config/settings-sites-templates-section.png)

Éta bakal ngabawa anjeun ka editor konten placeholder, di mana anjeun bisa nambahan placeholder jeung eusina masing-masing.

![Editor template placeholder](/img/config/settings-sites-templates-section.png)
