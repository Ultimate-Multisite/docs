---
title: Log perubahan
sidebar_position: 5
_i18n_hash: 9747e37b1fd831941c9f86e6c3f85c81
---
# Log perubahan {#changelog}

## 1.18.0 — Dikeluarkan pada 2026-06-29 {#1180--released-on-2026-06-29}

### Baharu {#new}

- **Alat Google Calendar** — baca kalendar dan acara yang dikonfigurasikan untuk automasi yang peka jadual
- **Pemetaan kenalan dan pembantu peserta** — padankan peserta kalendar dengan pengguna dan kenalan laman
- **Pintu kelulusan manusia dan rekod peringatan** — jedakan automasi untuk semakan dan elakkan pemberitahuan pendua
- **Penyedia SMS TextBee** — hantar pemberitahuan mesej teks yang dikonfigurasikan melalui TextBee
- **Pakej pendamping lanjutan** — tambah alat sistem fail pembangun dipercayai, pangkalan data, WP-CLI, pengagih REST, pembina plugin, petikan git, pengurusan pengguna, dan penanda aras yang diedarkan secara berasingan daripada binaan WordPress.org

### Ditambah baik {#improved}

- **Persediaan perkhidmatan Superdav terurus** — tambah endpoint perkhidmatan dihoskan dan penyediaan sambungan automatik untuk laman yang disokong
- **Pembungkusan keluaran** — bina ZIP teras dan Advanced yang berasingan, terbitkan kedua-duanya di GitHub, dan hantar hanya pakej teras ke WordPress.org

### Dibetulkan {#fixed}

- **Kebolehpercayaan permintaan AI** — tingkatkan pemilihan model, tamat masa permintaan, model persediaan lalai, pengendalian teks penaakulan, dan panduan cuba semula untuk panggilan alat tidak sah
- **Pengukuhan kalendar dan peringatan** — kukuhkan token Google Calendar dan penyahpenduaan peringatan
- **Penyambungan semula onboarding dan kelulusan** — betulkan pelancaran onboarding frontend dan penyambungan semula keupayaan yang disahkan
- **Isu semakan pembungkusan WordPress.org** — tangani maklum balas semakan pembungkusan untuk keluaran teras

## 1.16.0 — Dikeluarkan pada 2026-05-20 {#1160--released-on-2026-05-20}

### Baharu {#new-1}

- **Keupayaan Jana Logo SVG** — Theme Builder kini boleh menjana dan membenamkan SVG logo tersuai dengan sanitasi selamat namespace
- **Muat naik foto dalam temu bual penemuan** — temu bual penemuan Theme Builder kini menyertakan langkah muat naik foto untuk konteks reka bentuk yang lebih kaya
- **Keupayaan Sahkan Kontras Palet** — semak pasangan warna untuk pematuhan WCAG sebelum menerapkannya pada theme
- **Menu hospitaliti** — Theme Builder kini boleh menjana halaman menu makanan dan minuman berstruktur untuk perniagaan hospitaliti
- **Perenderan pratonton desktop dan mudah alih** — pratonton reka bentuk anda pada peranti desktop dan mudah alih semasa pemilihan arah reka bentuk
- **Parameter label navigasi** — keupayaan Create Menu kini menyokong `navigation_label` yang berasingan daripada tajuk halaman
- **Ketersediaan alat Tier 1** — sd-ai-agent/site-scrape kini ialah alat Tier 1 yang tersedia secara lalai dalam Theme Builder

### Dibetulkan {#fixed-1}

- **Cache AI Client** — kini disokong oleh transient untuk kegigihan merentas permintaan, mengelakkan kehilangan data pada tugasan agent yang berjalan lama
- **Pautan tindakan baris plugin** — dibetulkan dan dinamakan semula untuk kejelasan

## 1.10.0 — Dikeluarkan pada 2026-05-05 {#1100--released-on-2026-05-05}

### Baharu {#new-2}

- **Carian internet Tavily** — tambah Tavily sebagai penyedia carian untuk hasil carian internet yang lebih kaya bersama Brave Search
- **Kemahiran terbina dalam peka theme** — panduan kemahiran Block Themes, Classic Themes, Kadence Blocks, dan Kadence Theme kini disertakan dengan plugin
- **Keupayaan borang kenalan pembina laman** — tambah borang kenalan pada mana-mana halaman terus daripada antara muka chat

### Ditambah baik {#improved-1}

- **Integrasi WooCommerce difaktorkan semula** — kini menggunakan API WooCommerce asli untuk kebolehpercayaan dan keserasian yang lebih baik
- **Senarai penyedia disegar semula secara automatik** — apabila mana-mana plugin diaktifkan atau dinyahaktifkan

### Dibetulkan {#fixed-2}

- **Keupayaan navigate-to** — membetulkan gelung muat semula tanpa henti pada sesetengah halaman pentadbir
- **Keupayaan list-posts** — kini menyelesaikan nama kategori dan tag kepada slug dengan betul
- **Arahan WP-CLI** — memulihkan alias namespace yang hilang selepas refaktor sebelumnya
- **Automasi acara** — mengendalikan laman dengan baik apabila jadual automasi belum dicipta
- **Keupayaan memory-save** — kini menggunakan awalan namespace yang betul dalam pembina arahan sistem
- **Hasil alat skalar** — kini dibalut dengan betul sebelum dikembalikan kepada AI
- **Statistik penggunaan** — kini mengendalikan format kunci keupayaan legasi dengan betul semasa naik taraf daripada versi lama
