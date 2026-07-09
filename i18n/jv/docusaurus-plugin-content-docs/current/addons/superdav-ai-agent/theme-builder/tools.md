---
title: Piranti lan Konfigurasi
sidebar_position: 4
_i18n_hash: 78a3b6062e985598d020eaee28754120
---
# Piranti lan Konfigurasi {#tools-and-configuration}

Theme Builder nggunakake sakumpulan piranti kanggo nganalisis, ngrancang, lan mbangun situs WordPress panjenengan. Ing versi 1.16.0, **sd-ai-agent/site-scrape saiki dadi piranti Tier 1**, saéngga kasedhiya kanthi gawan ing Theme Builder. Superdav AI Agent v1.18.0 uga ngenalaké paket pendamping Advanced sing disebaraké kanthi kapisah kanggo alur kerja pangembang sing dipercaya; piranti-piranti kuwi dudu bagéan saka paket inti WordPress.org lan kudu diinstal sarta diwènèhi wewenang kanthi kapisah.

## Piranti sing Kasedhiya {#available-tools}

### Piranti Tier 1 (Tansah Kasedhiya) {#tier-1-tools-always-available}

Piranti Tier 1 kasedhiya kanthi gawan ing Theme Builder tanpa konfigurasi tambahan.

#### sd-ai-agent/site-scrape {#sd-ai-agentsite-scrape}

**Tujuan:** Nganalisis situs web sing wis ana kanggo njupuk inspirasi desain, struktur konten, lan fungsionalitas.

**Kapabilitas:**

- **Analisis situs web** — scrape lan analisis situs web pesaing utawa inspirasi
- **Ekstraksi desain** — ngenali warna, font, lan pola tata letak
- **Struktur konten** — mangertèni organisasi lan hierarki kaca
- **Deteksi fitur** — ngenali tambahan lan fungsionalitas
- **Analisis performa** — mriksa kacepetan kaca lan optimasi
- **Analisis SEO** — mriksa meta tags lan data terstruktur

**Panggunaan:**

```
Analisis desain example.com lan gunakna minangka inspirasi kanggo situsku.
```

**Sing Diekstrak:**

- Palet warna lan panggunaan warna
- Tipografi (font lan ukuran)
- Struktur tata letak lan jarak
- Pola navigasi
- Organisasi konten
- Panggunaan gambar lan media
- Unsur interaktif
- Responsivitas seluler

**Watesan:**

- Ora bisa scrape situs sing dilindhungi sandhi
- Ngurmati robots.txt lan kabijakan situs
- Bisa uga ora nyekel konten dinamis
- Situs sing abot JavaScript bisa nduwèni analisis winates
- Situs gedhé bisa butuh wektu luwih suwé kanggo dianalisis

### Piranti Tier 2 (Opsional) {#tier-2-tools-optional}

Piranti Tier 2 kasedhiya nalika diaktifaké kanthi tegas ing setelan Theme Builder.

#### Advanced Analytics {#advanced-analytics}

Nyedhiyakake metrik performa rinci:

- Wektu muat kaca
- Core Web Vitals
- Skor SEO
- Skor aksesibilitas
- Skor praktik paling apik

#### Content Optimizer {#content-optimizer}

Nganalisis lan nyaranaké panyempurnaan kanggo:

- Gampang diwaca
- Optimasi SEO
- Panggunaan tembung kunci
- Struktur konten
- Panggonan ajakan tumindak

### Piranti Tier 3 (Premium) {#tier-3-tools-premium}

Piranti Tier 3 mbutuhake konfigurasi tambahan utawa fitur premium.

#### AI Content Generator {#ai-content-generator}

Ngasilaké konten kanggo:

- Katrangan produk
- Kaca layanan
- Kiriman blog
- Katrangan meta
- Salinan ajakan tumindak

#### Advanced Design Tools {#advanced-design-tools}

Nyedhiyakake kapabilitas desain lanjut:

- Panggawéan CSS kustom
- Panggawéan animasi
- Desain unsur interaktif
- Teori warna lanjut
- Optimasi tipografi

### Piranti Pendamping Advanced (Paket Kapisah) {#advanced-companion-tools-separate-package}

Paket pendamping Advanced disebaraké kanthi kapisah saka rilis inti Superdav AI Agent. Iki ditujokaké kanggo lingkungan pangembang lan pamilik situs sing dipercaya, ing ngendi administrator kanthi tegas ngidini agen nggunakake piranti kanthi dampak gedhé.

Kapabilitas pendamping Advanced bisa kalebu:

- **Piranti sistem berkas** — mriksa lan ngowahi berkas sing disetujoni ing lingkungan sing dipercaya
- **Piranti database** — takon utawa nganyari data situs nalika diwènèhi wewenang kanthi tegas
- **Piranti WP-CLI** — nglakokaké prentah pangopènan lan pamriksan WordPress
- **Piranti dispatcher REST** — nelpon titik pungkasan REST sing kadhaftar liwat alur kerja dispatch sing dikendhalèkaké
- **Piranti panggawe tambahan** — scaffold lan ngulang-ulang kode tambahan
- **Piranti snapshot Git** — nggawe snapshot sadurungé operasi pangembang sing bebayani
- **Piranti manajemen pangguna** — mbantu mriksa utawa nyetel cathetan pangguna yen diidinaké
- **Piranti benchmark** — nglakokaké benchmark performa utawa kapabilitas kanggo tinjauan pangembangan

Aja ndokumentasèkaké iki minangka piranti Theme Builder sing kasedhiya umum kanggo saben instalasi. Piranti iki mung kasedhiya nalika paket pendamping Advanced wis diinstal, diaktifaké, lan diwatesi kanggo administrator sing dipercaya.

## Konfigurasi Piranti {#tool-configuration}

### Ngaktifaké Piranti {#enabling-tools}

Kanggo ngaktifaké piranti tambahan ing Theme Builder:

1. Navigasi menyang **Gratis AI Agent → Settings**
2. Pindhah menyang **Theme Builder → Tools**
3. Toggle piranti urip/mati miturut kabutuhan
4. Simpen setelan

### Idin Piranti {#tool-permissions}

Sawetara piranti mbutuhake idin:

- **Scraping situs** — mbutuhake akses internet
- **Analytics** — mbutuhake integrasi Google Analytics
- **Panggawéan konten** — mbutuhake API keys
- **Fitur lanjut** — bisa mbutuhake langganan premium
- **Piranti pendamping Advanced** — mbutuhake paket Advanced sing disebaraké kanthi kapisah lan kapercayan administrator kanthi tegas

### API Keys lan Kredensial {#api-keys-and-credentials}

Konfigurasi API keys kanggo piranti sing mbutuhake:

1. Pindhah menyang **Gratis AI Agent → Settings → API Keys**
2. Lebokaké kredensial kanggo saben piranti
3. Tes sambungan
4. Simpen kanthi aman

### Nginstal Paket Pendamping Advanced {#installing-the-advanced-companion-package}

Paket pendamping Advanced dirilis kanthi kapisah saka ZIP inti WordPress.org. Instal mung saka kanal distribusi proyek resmi kanggo rilis kasebut, banjur watesi akses kanggo administrator sing dipercaya. Tinjau gerbang persetujuan manungsa lan prilaku snapshot git sadurungé ngaktifaké piranti sistem berkas, database, WP-CLI, dispatcher REST, panggawe tambahan, manajemen pangguna, utawa benchmark ing situs produksi.

## Nggunakake sd-ai-agent/site-scrape {#using-sd-ai-agentsite-scrape}

### Panggunaan Dhasar {#basic-usage}

Jaluk Theme Builder kanggo nganalisis situs web:

```
Analisis desain situs pesaingku ing competitor.com
lan saranaké panyempurnaan desain kanggo situsku.
```

### Analisis Tertentu {#specific-analysis}

Nyuwun jinis analisis tartamtu:

```
Ekstrak palet warna saka example.com lan gunakna minangka inspirasi.
```

```
Analisis struktur navigasi example.com lan terapna organisasi
sing padha menyang situsku.
```

```
Priksa responsivitas seluler example.com lan pesthèkaké situsku
padha responsifé.
```

### Analisis Perbandingan {#comparison-analysis}

Bandhingaké pirang-pirang situs:

```
Bandhingaké desain site1.com lan site2.com banjur gawé desain
sing nggabungaké unsur paling apik saka kalorone.
```

## Watesan lan Pertimbangan Piranti {#tool-limitations-and-considerations}

### Watesan Laju {#rate-limiting}

- Scraping diwatesi tingkaté kanggo nyegah server kakehan beban
- Pirang-pirang panjaluk menyang situs sing padha bisa diwatesi
- Situs gedhé bisa mbutuhake wektu luwih suwé kanggo dianalisis

### Akurasi Konten {#content-accuracy}

- Konten dinamis bisa uga ora kacandhak kanthi pepak
- Konten sing dirender nganggo JavaScript bisa uga ora pepak
- Data wektu nyata bisa uga ora kagambar
- Sawetara konten bisa uga ana ing mburi paywall

### Pertimbangan Hukum lan Etika {#legal-and-ethical-considerations}

- Ajèni robots.txt lan kabijakan situs
- Aja scrape konten sing duwe hak cipta kanggo direproduksi
- Gunakna analisis kanggo inspirasi, dudu kanggo nyalin
- Verifikasi manawa sampeyan duwe hak kanggo nggunakake konten sing diekstrak
- Tindakake syarat layanan saka situs sing dianalisis

### Pengaruh Kinerja {#performance-impact}

- Scraping situs gedhé bisa mbutuhake wektu
- Pirang-pirang scrape bebarengan bisa luwih alon
- Sambungan jaringan mengaruhi kacepetan
- Dataset gedhé bisa mbutuhake pangolahan luwih akèh

## Praktik Paling Apik {#best-practices}

### Nggunakake Analisis Situs {#using-site-analysis}

1. **Analisis pirang-pirang situs** — kumpulna inspirasi saka sawetara sumber
2. **Fokus marang struktur** — sinaua pola tata letak lan organisasi
3. **Ekstrak warna** — gunakna palet warna minangka titik wiwitan
4. **Sinau tipografi** — temtokna kombinasi font sing sampeyan senengi
5. **Tinjau navigasi** — mangertèni organisasi menu

### Scraping sing Etis {#ethical-scraping}

1. **Ajèni robots.txt** — tindakake pandhuan situs
2. **Aja nyalin konten** — gunakna analisis mung kanggo inspirasi
3. **Verifikasi hak** — pastèkna sampeyan bisa nggunakake konten sing diekstrak
4. **Sebutna sumber** — wènèhana kredit marang sumber inspirasi
5. **Tindakake syarat** — patuh marang syarat layanan situs

### Ngoptimalake Efektivitas Piranti {#maximizing-tool-effectiveness}

1. **Cetha lan rinci** — jaluk jinis analisis tartamtu
2. **Wènèhana konteks** — terangna tujuan situs sampeyan
3. **Tetepna pangarepan** — terangna tujuan desain sampeyan
4. **Iterasi** — sempurnakna adhedhasar asil
5. **Gabungna piranti** — gunakna pirang-pirang piranti kanggo analisis sing komprehensif

## Ngatasi Masalah {#troubleshooting}

### Situs Ora Bisa Di-scrape {#site-wont-scrape}

- Priksa manawa situs bisa diakses umum
- Verifikasi robots.txt ngidini scraping
- Coba situs liya
- Priksa sambungan internet
- Hubungi dhukungan yen masalah isih ana

### Analisis Ora Pepak {#incomplete-analysis}

- Situs bisa uga duwe konten dinamis
- JavaScript bisa uga ora dirender kanthi pepak
- Situs gedhé bisa timeout
- Coba analisis kaca tartamtu wae
- Jaluk jinis analisis tartamtu

### Kinerja Alon {#slow-performance}

- Situs gedhé mbutuhake wektu luwih suwé kanggo dianalisis
- Pirang-pirang scrape bebarengan luwih alon
- Sambungan jaringan mengaruhi kacepetan
- Coba nalika jam ora rame
- Analisis bagean sing luwih cilik dhisik

## Dokumentasi Gegandhengan {#related-documentation}

- [Wawancara Panemuan](./discovery-interview.md) — nglumpukake informasi desain
- [Arah Desain](./design-direction.md) — nyempurnakake desain sampeyan
- [Menu Hospitality](./hospitality-menus.md) — gawe kaca menu
