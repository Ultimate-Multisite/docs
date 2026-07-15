---
title: 'Palajaran 12: Ngajalankeun Usaha'
sidebar_position: 13
_i18n_hash: 0fe6371df216b74a2051b95972ad68e8
---
# Palajaran 12: Ngajalankeun Usaha

Platform lain proyék anu réngsé ku anjeun -- éta téh usaha anu anjeun jalankeun. Palajaran ieu ngabahas operasi sapopoé pikeun ngatur FitSite: dukungan, tagihan, pangropéa, jeung ngajaga konsumén tetep bagja.

## Tempat Urang Eureun Saméméhna {#where-we-left-off}

FitSite geus live jeung konsumén mimiti ngadaptar. Ayeuna anjeun kudu ngajalankeun operasi sacara lestari.

## Operasi Sapopoé {#daily-operations}

### Monitoring {#monitoring}

Pariksa ieu unggal poé (atawa atur béwara):

- **Uptime**: Naha platform bisa diaksés? Paké layanan monitoring uptime.
- **Pangdaftaran anyar**: Sabaraha konsumén anyar anu ngadaptar poé ieu?
- **Pamayaran gagal**: Naha aya kagagalan pamayaran anu perlu diperhatikeun?
- **Paménta dukungan**: Naha aya patarosan konsumén anu can kajawab?

### Dukungan Konsumén {#customer-support}

Fokus niche anjeun jadi kaunggulan di dieu. Kusabab sakabéh konsumén anjeun studio kabugaran, anjeun bakal ningali patarosan anu sarua sacara terus-terusan:

**Patarosan umum anu bakal anjeun tarima:**

- "Kumaha carana ngamutahirkeun jadwal kelas kuring?"
- "Naha kuring bisa ngarobah warna site kuring?"
- "Kumaha carana nambahkeun palatih anyar ka site kuring?"
- "Domain kuring teu jalan"
- "Kumaha carana ngabatalkeun/ngamutahirkeun plan kuring?"

Bangun pangkalan pangaweruh anjeun (dimimitian dina Palajaran 8) dumasar kana patarosan anu terus muncul ieu. Unggal tiket dukungan anu sabenerna bisa jadi artikel pangkalan pangaweruh téh sinyal pikeun nulis artikel éta.

### Tingkatan Dukungan {#support-tiers}

Nalika anjeun tumuwuh, susun dukungan dumasar kana plan:

| Plan | Tingkat Dukungan | Waktu Réspon |
|------|--------------|---------------|
| Starter | Pangkalan pangaweruh + email | 48 jam |
| Growth | Dukungan email | 24 jam |
| Pro | Email prioritas + telepon onboarding | 4 jam |

[Addon Tiket Dukungan](/addons/support-tickets) bisa ngabantu ngatur paménta dukungan dina platform.

## Operasi Tagihan {#billing-operations}

### Pamayaran Berulang {#recurring-payments}

Ultimate Multisite ngurus tagihan berulang sacara otomatis ngaliwatan gateway pamayaran anjeun. Tugas anjeun nyaéta monitoring pikeun:

- **Pamayaran gagal**: Tindak lanjut gancang. Kaseueuran kagagalan téh kartu kadaluwarsa, lain pembatalan anu dihaja.
- **Dunning**: Atur logika coba deui otomatis ngaliwatan gateway pamayaran anjeun (Stripe ngurus ieu kalayan alus)
- **Paménta pembatalan**: Paham kunaon konsumén ninggalkeun. Unggal pembatalan téh eupan balik.

### Ngatur Memberships {#managing-memberships}

Arahkeun ka **Ultimate Multisite > Memberships** pikeun:

- Ningali sakabéh langganan aktif
- Ngurus paménta upgrade jeung downgrade
- Ngolah refund lamun diperlukeun
- Ngatur kadaluwarsa trial

Tingali [Ngatur Memberships](/user-guide/administration/managing-memberships) pikeun rujukan lengkep.

### Invoice {#invoicing}

Pastikeun invoice dijieun kalayan bener pikeun unggal pamayaran. Konsumén bisa butuh invoice pikeun laporan waragad usaha. Tingali [Ngatur Pamayaran jeung Invoice](/user-guide/administration/managing-payments-and-invoices).

## Pangropéa Platform {#platform-maintenance}

### Apdet WordPress jeung Plugin {#wordpress-and-plugin-updates}

Salaku administrator jaringan, anjeun tanggung jawab pikeun:

- **Apdet inti WordPress**: Uji dina site staging saméméh diterapkeun ka produksi
- **Apdet plugin**: Sarua -- uji heula, tuluy terapkeun ka sakabéh jaringan
- **Apdet theme**: Pastikeun template masih katingali bener sanggeus apdet theme
- **Apdet Ultimate Multisite**: Turutan changelog jeung uji saméméh ngapdet

:::warning Ulah Kungsi Ngapdet di Produksi Tanpa Nguji
Apdet anu ruksak mangaruhan unggal site konsumén dina jaringan anjeun. Salawasna uji apdet dina salinan staging jaringan anjeun heula.
:::

### Kaamanan {#security}

- Jaga sakabéh software tetep panganyarna
- Paké kecap akses anu kuat jeung autentikasi dua-faktor pikeun Account admin
- Monitoring kagiatan anu curiga
- Boga rencana pikeun kajadian kaamanan

### Kinerja {#performance}

Nalika jaringan anjeun tumuwuh, monitor:

- **Waktu muat kaca**: Naha site konsumén gancang?
- **Pamakéan sumber daya server**: CPU, mémori, rohangan disk
- **Kinerja database**: Jaringan gedé butuh optimasi database sapanjang waktu

Pertimbangkeun pikeun nerapkeun caching (cache kaca, cache objék) jeung CDN lamun anjeun can ngalakukeunana. [Integrasi Cloudflare](/user-guide/host-integrations/cloudflare) ngurus loba bagian tina ieu.

## Ngatur Daur Hirup Konsumén {#customer-lifecycle-management}

### Ngurangan Churn {#reducing-churn}

Churn nyaéta perséntase konsumén anu ngabatalkeun unggal bulan. Pikeun usaha langganan, ngurangan churn sarua pentingna jeung meunangkeun konsumén anyar.

**Alesan umum konsumén studio kabugaran churn:**

- Maranéhna teu bisa ngarti kumaha ngagunakeun platform → tingkatkeun onboarding
- Site teu katingali cukup alus → tingkatkeun template
- Maranéhna teu ningali niléy → tingkatkeun fitur atawa komunikasi
- Maranéhna manggihan alternatif anu leuwih murah → pertegas niléy niche anjeun
- Usaha maranéhna tutup → teu bisa dihindari, tapi lacak ieu sacara misah

### Ngadorong Upgrade {#encouraging-upgrades}

Konsumén dina Starter anu keur hasil kudu didorong pikeun upgrade:

- Nalika maranéhna ngahontal wates plan (site, panyimpenan), tampilkeun ajakan upgrade
- Kirim email anu ditargétkeun pikeun nyorot fitur plan Growth anu bakal mangpaat pikeun maranéhna
- Tampilkeun naon anu geus diwangun ku konsumén Growth/Pro

### Kampanye Win-Back {#win-back-campaigns}

Nalika konsumén ngabatalkeun:

1. Tanya kunaon (survei kaluar atawa email)
2. Tangani kahariwang maranéhna lamun mungkin
3. Tawarkeun diskon pikeun balik deui (30-60 poé sanggeus pembatalan)

## Rutinitas Mingguan jeung Bulanan {#weekly-and-monthly-routines}

### Mingguan {#weekly}

- Tinjau pangdaftaran anyar jeung pembatalan
- Bales sakabéh tiket dukungan anu kabuka
- Pariksa kinerja platform jeung uptime
- Tinjau sagala pamayaran gagal

### Bulanan {#monthly}

- Analisis métrik konci (MRR, churn, konsumén anyar, upgrade)
- Terapkeun apdet WordPress jeung plugin (sanggeus uji staging)
- Tinjau jeung apdet pangkalan pangaweruh dumasar kana pola dukungan
- Kirim newsletter atawa apdet ka konsumén (fitur anyar, tips, warta industri kabugaran)

### Triwulanan {#quarterly}

- Tinjau harga dibandingkeun jeung pesaing jeung eupan balik konsumén
- Évaluasi desain template -- naha perlu disegerkeun?
- Nilai kapasitas hosting -- naha anjeun kudu scale?
- Tinjau jeung tingkatkeun onboarding dumasar kana data aktivasi

## Naon Anu Urang Bangun dina Palajaran Ieu {#what-we-built-this-lesson}

- **Rutinitas pangawasan sapopoé** pikeun uptime, pendaptaran, pamayaran, jeung dukungan
- **Struktur dukungan bertingkat** anu dicocogkeun jeung tingkat rarancang
- **Operasi tagihan** kaasup dunning jeung pangaturan pembatalan
- **Prosedur pangropéa** pikeun apdet, kaamanan, jeung kinerja
- **Strategi ngurangan churn** anu husus pikeun niche kabugaran
- **Rutinitas operasional mingguan, bulanan, jeung triwulanan**

---

**Salajengna:** [Pangajaran 13: Ngagedékeun Skala](lesson-13-growth) -- ngamekarkeun FitSite tina operasi leutik jadi usaha nyata.
