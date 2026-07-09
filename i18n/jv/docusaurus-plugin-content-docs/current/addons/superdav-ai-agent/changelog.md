---
title: Cathetan Owah-owahan
sidebar_position: 5
_i18n_hash: 9747e37b1fd831941c9f86e6c3f85c81
---
# Cathetan Owah-owahan

## 1.18.0 — Dirilis tanggal 2026-06-29

### Anyar

- **Piranti Google Calendar** — maca tanggalan lan acara sing wis dikonfigurasi kanggo otomatisasi sing ngerti jadwal
- **Pemetaan kontak lan pambiyantu peserta** — nyocogake peserta tanggalan karo panganggo lan kontak situs
- **Gapura persetujuan manungsa lan cathetan pangeling** — ngaso otomatisasi kanggo ditinjau lan nyingkiri kabar dobel
- **Panyedhiya SMS TextBee** — ngirim kabar pesen teks sing wis dikonfigurasi liwat TextBee
- **Paket pendamping lanjut** — nambah piranti filesystem pangembang kapercaya, basis data, WP-CLI, dispatcher REST, pambangun tambahan, snapshot git, manajemen panganggo, lan benchmark sing disebarake kapisah saka build WordPress.org

### Ditambah apik

- **Persiyapan layanan Superdav sing dikelola** — nambah endpoint layanan sing di-host lan panyedhiya sambungan otomatis kanggo situs sing didhukung
- **Paket rilis** — mbangun ZIP inti lan Advanced kapisah, nerbitake loro-lorone ing GitHub, lan mung ngirim paket inti menyang WordPress.org

### Dibenerake

- **Keandalan panjaluk AI** — nambah pilihan model, wektu entek panjaluk, model persiyapan gawan, penanganan teks penalaran, lan tuntunan nyoba maneh kanggo panggilan piranti sing ora sah
- **Pangukuhan tanggalan lan pangeling** — nguwatake token Google Calendar lan deduplikasi pangeling
- **Miwiti panganggo anyar lan nerusake persetujuan** — mbenerake peluncuran miwiti panganggo anyar ing frontend lan nerusake kawasisan sing wis dikonfirmasi
- **Masalah tinjauan paket WordPress.org** — nangani umpan balik tinjauan paket kanggo rilis inti

## 1.16.0 — Dirilis tanggal 2026-05-20

### Anyar

- **Kawasisan Nggawe Logo SVG** — Theme Builder saiki bisa nggawe lan nyematake SVG logo kustom kanthi sanitasi aman namespace
- **Unggah foto ing wawancara panemuan** — wawancara panemuan Theme Builder saiki kalebu langkah unggah foto kanggo konteks desain sing luwih sugih
- **Kawasisan Validasi Kontras Palet** — mriksa pasangan werna kanggo kepatuhan WCAG sadurunge ditrapake menyang tema
- **Menu hospitality** — Theme Builder saiki bisa nggawe kaca menu panganan lan omben-omben terstruktur kanggo bisnis hospitality
- **Rendering pratinjau desktop lan seluler** — pratinjau desain sampeyan ing piranti desktop lan seluler sajrone pilihan arah desain
- **Parameter label navigasi** — kawasisan Nggawe Menu saiki ndhukung `navigation_label` sing kapisah saka judhul kaca
- **Kasedhiyan piranti Tingkat 1** — sd-ai-agent/site-scrape saiki dadi piranti Tingkat 1 sing kasedhiya kanthi gawan ing Theme Builder

### Dibenerake

- **Cache AI Client** — saiki didhukung transients kanggo persistensi antar-panjaluk, nyegah data ilang ing tugas agent sing mlaku suwe
- **Tautan tumindak baris tambahan** — dibenerake lan diganti jenenge supaya luwih cetha

## 1.10.0 — Dirilis tanggal 2026-05-05

### Anyar

- **Panelusuran internet Tavily** — nambah Tavily minangka panyedhiya panelusuran kanggo asil panelusuran internet sing luwih sugih bebarengan karo Brave Search
- **Kaprigelan bawaan sing ngerti tema** — pandhuan kaprigelan Block Themes, Classic Themes, Kadence Blocks, lan Kadence Theme saiki dikirim bebarengan karo tambahan
- **Kawasisan formulir kontak pambangun situs** — nambah formulir kontak menyang kaca apa wae langsung saka antarmuka chat

### Ditambah apik

- **Integrasi WooCommerce direfaktor** — saiki nggunakake API asli WooCommerce kanggo keandalan lan kompatibilitas sing luwih apik
- **Dhaptar panyedhiya disegerake otomatis** — nalika tambahan apa wae diaktifake utawa dinonaktifake

### Dibenerake

- **kawasisan navigate-to** — mbenerake loop muat ulang tanpa wates ing sawetara kaca admin
- **kawasisan list-posts** — saiki kanthi bener ngrampungake jeneng kategori lan tag dadi slug
- **Prentah WP-CLI** — mbalekake alias namespace sing ilang sawise refactor sadurunge
- **Otomatisasi acara** — nangani kanthi alus situs sing tabel otomatisasine durung digawe
- **kawasisan memory-save** — saiki nggunakake prefiks namespace sing bener ing pambangun instruksi sistem
- **Asil piranti skalar** — saiki dibungkus kanthi bener sadurunge dibalekake menyang AI
- **Statistik panggunaan** — saiki kanthi bener nangani format kunci kawasisan warisan nalika upgrade saka versi lawas
