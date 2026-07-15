---
title: Pembangun Plugin & Sandbox
sidebar_position: 21
_i18n_hash: 74c409a36b52ea261922998822b286d0
---
# Plugin Builder & Sandbox

Gratis AI Agent v1.5.0 ngajangkeun **Plugin Builder & Sandbox System**, anu ngidinan asisten AI pikeun ngagédéan, ngaktifkeun, jeung ngatur plugin WordPress di jaringan anjeun — sadayana ngaliwatan lingkungan sandbox anu aman jeung terisolasi.

## Gambaran Umum {#overview}

Plugin Builder ngabantu asisten AI nulis plugin WordPress kustom dumasar kana paménta basa alami (natural language). Plugin anu geus digédéan bakal divalidasi, disimpan, sarta diaktifkeun di jero lapisan sandbox saméméh éta ngahubung ka fungsi situs anu masih aktif.

Contona panggunana nyaéta:

- Ngagédéan plugin utilitas leutik tanpa perlu melibatkan developer.
- Prototip fitur anu mbutuh WordPress hooks atawa custom post types.
- Ngadamel skrip otomatisasi sing geus lila pikeun operasi batch.

## Ngagédéan Plugin ku AI {#generating-a-plugin-via-ai}

Kanggo ngagédéan plugin, buka antarmuka obrolan Gratis AI Agent sarta jelaskeun naon anu anjeun butuh. Contona:

> "Buat plugin anu nambahan notice admin kustom dina dashboard."

AI bakal:

1. Ngahasilkeun kode PHP plugin ngagunake structured code generation.
2. Ngalibrasi hasil output tina salah sintaks jeung pola anu teu aman.
3. Ngajaga plugin anu geus digédéan ka sandbox store.
4. Ngirimkeun konfirmasi kalayan slug plugin jeung tombol **Activate in Sandbox**.

Anjeun bisa ngarobah hasilna ku cara nanya deui dina obrolan anu sarua saméméh diaktifkeun.

## Aktivasi Sandbox {#sandbox-activation}

Ngaktifkeun plugin anu geus digédéan di sandbox béda jeung ngaktifkeunana di jaringan anu masih aktif. Sandbox:

- Ngajalankeun plugin dina lingkungan WordPress anu terisolasi (wp-env).
- Ngarekam sababaraha error PHP, warning, atawa konflik hook.
- Ngaboga laporan hasil aktivasi balik deui ka antarmuka obrolan.

Kanggo ngaktifkeun plugin di sandbox, klik tombol **Activate in Sandbox** dina jawaban obrolan AI, atawa nganggo slash command:

```
/activate-plugin <plugin-slug>
```

Pesan status bakal ngabohkeun upami aktivasina sukses atawa gagal. Upami gagal, log error bakal dipidangkeun dina *chat thread*.

## Ngatur Plugin Nu Di-generate {#managing-generated-plugins}

Plugin nu di-generate aya dina **Gratis AI Agent → Plugin Builder → Manage Plugins**. Ti layar ieu anjeun bisa:

| Aksi | Deskripsi |
|---|---|
| **View source** | Ngabaca kode PHP plugin sacara lengkap. |
| **Re-activate in sandbox** | Ngulang pengecekan aktivasi di *sandbox*. |
| **Install on network** | Ngirimkeun plugin ka jaringan *live* (perlu konfirmasi manual). |
| **Update** | Ngaréngan versi anyar via AI, ngaganti kode nu aya. |
| **Delete** | Ngahapus plugin tina *sandbox store*. Ngabédaunkeunana tina sadaya situs heula. |

:::warning
**Install on network** bakal ngirimkeun plugin nu di-generate ka WordPress multisite *live* anjeun. Tinjau kode plugin saméméh neraskeun. Gratis AI Agent bakal nanya konfirmasi saméméh ngalaksanakeun instalasi *live*.
:::

## Nginstal Plugin Nu Di-generate Dina Jaringan {#installing-a-generated-plugin-on-the-network}

Lamun anjeun geus puas jeung plugin nu aya di *sandbox*, anjeun bisa nginstaleunana dina jaringan *live*:

1. Ka **Gratis AI Agent → Plugin Builder → Manage Plugins**.
2. Klik **Install on Network** di sisi plugin nu hoyong dipasang.
3. Konfirmasi dialogna. Plugin bakal dipasang ka `wp-content/plugins/` jeung diaktifkeun dina jaringan.

Atawa, anjeun bisa nganggo perintah *slash* dina antarmuka *chat*:

```
/install-plugin <plugin-slug>
```

## Panyaruan Plugin {#plugin-updates}

Kanggo ngarobah plugin nu di-generate, jelaskeun gantiana ka asisten AI dina obrolan anyar:

> "Update plugin dashboard-notice supados ngan nunjukkeun notifikasi ka administrator."

AI bakal ngagenerakeun versi anyar, anu muncul di *sandbox* bareng jeung versi nu ayeuna. Anjeun bisa ningali *diff*-na jeung konfirmasi saméméh panyaruan éta dilaksanakeun.

## Integrasi HookScanner {#hookscanner-integration}

Plugin Builder ngagunake **HookScanner** anu nyambung pikeun nganalisis hook je filter anu geus didaftarkeun ku plugin anu dihasilkeun. Hasil tina HookScanner bakal ditunjukeun dina balesan obrolan sareng ngawengku:

- Action hooks anu didaftarkeun (`add_action` calls).
- Filter hooks anu didaftarkeun (`add_filter` calls).
- Sabaraha waé hook anu kapanggih dina plugin dependensi (diréngsékeun diréngsékeun folder `vendor/` je `node_modules/`).

Ieu ngabantos anjeun ngarti tingkah laku hiji plugin saméména diaktifkeun.

## Pertimbangan Keamanan {#security-considerations}

- Plugin anu dihasilkeun disimpan pisah tina plugin anu dipasang sacara manual je teu bisa diakses via layar manajemen plugin WordPress biasa nepi ka anjeun nginstaleunana sacara eksplisit dina jaringan.
- Sandbox ngagunake validasi jalur pikeun nyieun kajadian traversal folder nalika nulis file plugin.
- Plugin anu aya fungsi bahaya (contona, `eval`, `exec`, `system`) bakal ditandai salila validasi je moal diaktifkeun.
