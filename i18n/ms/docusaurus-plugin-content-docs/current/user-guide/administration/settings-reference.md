---
title: Rujukan Tetapan
sidebar_position: 11
_i18n_hash: d9ab375be74a5dff1aaf4f4eaf80c3be
---
# Rujukan Settings {#settings-reference}

Halaman ini menjejaki Settings yang mempengaruhi pentadbiran harian dan perubahan tingkah laku terkini dalam Ultimate Multisite.

## Pilihan Lain {#other-options}

Kawasan **Other Options** muncul di bawah **Ultimate Multisite > Settings > Login & Registration**.

| Tetapan | Penerangan |
|---|---|
| **Enable Jumper** | Menunjukkan alat navigasi pantas Jumper di kawasan admin. Gunakannya untuk melompat terus ke skrin Ultimate Multisite, objek rangkaian, dan destinasi admin yang disokong. Lumpuhkannya jika anda tidak mahu pintasan ini kelihatan. |

## Pelaporan ralat dan telemetri {#error-reporting-and-telemetry}

Tetapan ikut serta pelaporan ralat sebelum ini telah dialih keluar daripada halaman settings. Telemetri tanpa nama dilumpuhkan dan tiada togol UI untuk mendayakannya.

Jika anda menyelenggara runbook dalaman atau tangkapan skrin untuk halaman settings, alih keluar rujukan kepada field ikut serta pelaporan ralat lama supaya pentadbir tidak mencari tetapan yang tidak lagi wujud.

## Tetapan Import/Export {#importexport-settings}

Tab settings **Import/Export** menerangkan tetapan yang dikawalnya dan memaut terus ke **Ultimate Multisite > Site Export** untuk arkib site dan rangkaian. Gunakan tab settings untuk konfigurasi import/export, gunakan **Tools > Export & Import** untuk aliran kerja eksport/import single-site, dan gunakan alat Site Export apabila anda memerlukan arkib Network Export penuh.

## Amaran baki Domain Seller HostAfrica {#domain-seller-hostafrica-balance-warning}

Apabila addon Domain Seller disambungkan ke HostAfrica, pentadbir rangkaian kini melihat amaran baki rendah yang boleh ditutup apabila baki Account reseller terlalu rendah untuk pemprosesan pendaftaran atau pembaharuan domain yang boleh dipercayai.

Anggap notis ini sebagai amaran operasi: tambah nilai baki reseller HostAfrica sebelum menerima lebih banyak pendaftaran domain berbayar, kemudian kembali ke settings Domain Seller atau skrin pemantauan domain untuk mengesahkan pendaftaran dan pembaharuan boleh diteruskan seperti biasa.

## Tetapan penyambung penyedia AI {#ai-provider-connector-settings}

Tetapan penyambung penyedia AI kini hanya mendedahkan kumpulan Account OAuth yang disokong:

| Penyedia | Aliran persediaan |
|---|---|
| **Anthropic Max** | Sambungkan satu atau lebih Account Anthropic Max dengan butang OAuth. Gunakan fallback OAuth manual apabila pelayar sandboxed tidak dapat melengkapkan pengalihan secara automatik. |
| **OpenAI ChatGPT/Codex** | Sambungkan Account ChatGPT melalui aliran kerja kumpulan OAuth yang sama. Operasi yang disokong penyambung boleh menggunakan panggilan alat ChatGPT Codex selepas Account disambungkan. |
| **Google AI Pro** | Sambungkan Account Google AI Pro melalui OAuth, kemudian segarkan semula penyambung jika senarai Account tidak dikemas kini serta-merta. |

Cursor Pro bukan lagi penyedia yang disokong. Alih keluar tangkapan skrin dalaman lama, runbook, atau langkah onboarding yang menyebut field persediaan Cursor Pro atau laluan penyambung.

Apabila menambah atau mengalih keluar Account penyedia, masukkan alamat e-mel yang sah untuk Account yang sedang disegarkan atau dipadam dan simpan settings penyedia sebelum menguji operasi yang disokong penyambung.
