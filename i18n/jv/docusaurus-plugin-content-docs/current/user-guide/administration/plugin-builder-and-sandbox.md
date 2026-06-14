---
title: Pembangun Plugin & Sandbox
sidebar_position: 21
_i18n_hash: 74c409a36b52ea261922998822b286d0
---
# Plugin Builder & Sandbox

Gratis AI Agent v1.5.0 ngeniake **Plugin Builder & Sandbox System**, sing ngidini asisten AI kanggo nggawe, ngaktifake, lan ngelola plugin WordPress ing jaringanmu — kabeh liwat lingkungan sandbox sing aman lan terisolasi.

## Gambaran Umum

Plugin Builder ngidini asisten AI nulis plugin WordPress khusus miturut permintaan basa alami (natural language). Plugin sing digawe bakal ditimbang, disimpan, lan diaktifake ing lapisan sandbox sadurunge duwe pengaruh apa wae marang fungsi situs langsung.

Conto panggunaane yaiku:

- Nggawe plugin utilitas ringan tanpa perlu keterlibatan developer.
- Prototyping fitur sing mbutuh WordPress hooks utawa custom post types.
- Nggawe skrip otomatisasi sing durasi cendhek kanggo operasi massal (batch operations).

## Nggawe Plugin liwat AI

Kanggo nggawe plugin, buka antarmuka obrolan Gratis AI Agent lan jelasna apa sing kok butuh. Contone:

> "Buat plugin sing nambah notice admin khusus ing dashboard."

AI bakal:

1. Ngasilake kode PHP plugin miturut pemrosesan kode sing terstruktur (structured code generation).
2. Ngetes output kanggo kesalahan sintaks lan pola sing ora aman.
3. Disimpan plugin sing digawe menyang sandbox store.
4. Nggawa balesan konfirmasi karo slug plugin lan tombol **Activate in Sandbox**.

Sampeyan bisa ngresiki hasil kasebut kanthi tindak lanjut ing utas obrolan sing padha sadurunge diaktifake.

## Aktivasi Sandbox

Ngaktifake plugin sing digawe ing sandbox iku beda karo ngaktifake ing jaringan langsung (live network). Sandbox kuwi:

- Njalankan plugin ing lingkungan WordPress terisolasi (wp-env).
- Nangkep kesalahan PHP, peringatan, utawa konflik hook.
- Ngirim laporan hasil aktivasi bali menyang antarmuka obrolan.

Kanggo ngaktifake plugin ing sandbox, klik tombol **Activate in Sandbox** ing balesan obrolan AI, utawa gunakake perintah slash:

```
/activate-plugin <plugin-slug>
```

Pesan status bakal ngasih tau apakah aktivasi berhasil utawa gagal. Yen gagal, log kesalahane bakal ditampilake nang thread obrolan.

## Ngelola Plugin sing Dibuat Otomatis (Generated Plugins)

Plugin sing wis digawe otomatis bakal ana nang **Gratis AI Agent → Plugin Builder → Manage Plugins**. Saka layar iki sampeyan bisa:

| Aksi | Deskripsi |
|---|---|
| **View source** | Ndelok kode PHP plugin kabeh. |
| **Re-activate in sandbox** | Ngulang cek aktivasi nang sandbox. |
| **Install on network** | Nggolekake plugin menyang jaringan WordPress sing aktif (butuh konfirmasi manual). |
| **Update** | Menehi versi anyar lewat AI, ngumbah kode sing wis ana. |
| **Delete** | Ngilangake plugin saka toko sandbox. Dulu di-deactivate nang kabeh situs. |

:::warning
**Install on network** bakal nggolekake plugin sing digawe otomatis menyang WordPress multisite aktifmu. Cek dhisik kode plugin sadurunge lanjut. Gratis AI Agent bakal njaluk konfirmasi sadurunge instalasi langsung.
:::

## Nggolekake Plugin Sing Dibuat Otomatis Nang Jaringan (Network)

Yen sampeyan wis marem karo plugin sing ana nang sandbox, sampeyan bisa nggolekake menyang jaringan aktif:

1. Tindakake **Gratis AI Agent → Plugin Builder → Manage Plugins**.
2. Klik **Install on Network** ing sebelah plugin sing arep di-deploy.
3. Konfirmasi dialog kasebut. Plugin bakal diinstal nang `wp-content/plugins/` lan diaktifake nang jaringan.

Alternatifé, sampeyan bisa nggunakake slash command nang antarmuka obrolan:

```
/install-plugin <plugin-slug>
```

## Panyegaran Plugin (Plugin Updates)

Kanggo ngupdate plugin sing digawe otomatis, deskripsikake owahanane marang asisten AI ing obrolan anyar:

> "Update dashboard-notice plugin supaya mung nuduh notice kanggo administrator."

AI bakal nggawe versi anyar, sing bakal muncul nang sandbox bareng karo versi sing wis ana. Sampeyan bisa delok diff-e lan konfirmasi sadurunge update diterapkan.

## Integrasi HookScanner

Plugin Builder nggunakake **HookScanner** sing wis terintegrasi kanggo nganalisis hook lan filter sing diregistrasi dening saben plugin sing digawe. Hasil saka HookScanner bakal ditunjuka ing balesan obrolan lan kalebu:

- Action hooks sing diregistrasi (`add_action` calls).
- Filter hooks sing diregistrasi (`add_filter` calls).
- Iki uga ngene kanggo nggoleki hook maneh ing dependensi plugin (direwangi folder `vendor/` lan `node_modules/`).

Iki mbantu sampeyan mangerteni tumindak utawa perilaku plugin sadurunge diaktifake.

## Pertimbangan Keamanan

- Plugin sing digawe disimpan terpisah saka plugin sing dipasang manual lan ora bisa diakses liwat layar manajemen plugin WordPress standar nganti sampeyan eksplisit nggawe instalasi ing jaringan.
- Sandbox nggunakake validasi jalur kanggo mencegah *directory traversal* nalika nulis file plugin.
- Plugin kanthi panggilan fungsi sing berbahaya (contone, `eval`, `exec`, `system`) bakal ditandai sajrone validasi lan ora bakal diaktifake.
