---
title: 'Piwulang 12: Nglakokake Bisnis'
sidebar_position: 13
_i18n_hash: 0fe6371df216b74a2051b95972ad68e8
---
# Wulangan 12: Nglakokake Bisnis

Platform dudu proyek sing rampung -- platform iku bisnis sing kudu sampeyan lakokake. Wulangan iki nyakup operasi saben dina kanggo ngatur FitSite: dhukungan, tagihan, pangopènan, lan njaga pelanggan tetep wareg.

## Panggonan Pungkasan Kita

FitSite wis aktif lan pelanggan wiwit ndhaptar. Saiki sampeyan kudu nglakokake operasi kanthi lestari.

## Operasi Saben Dina

### Monitoring

Priksa iki saben dina (utawa pasang tandha):

- **Uptime**: Apa platform bisa diakses? Gunakake layanan monitoring uptime.
- **Pendaftaran anyar**: Pira pelanggan anyar sing ndhaptar dina iki?
- **Pembayaran gagal**: Apa ana kegagalan pembayaran sing perlu digatekake?
- **Panjalukan dhukungan**: Apa ana pitakon pelanggan sing durung dijawab?

### Dhukungan Pelanggan

Fokus niche sampeyan dadi kauntungan ing kene. Amarga kabeh pelanggan sampeyan studio fitness, sampeyan bakal kerep ndeleng pitakon sing padha:

**Pitakon umum sing bakal sampeyan tampa:**

- "Kepiye carane nganyari jadwal kelas?"
- "Apa aku bisa ngganti werna situsku?"
- "Kepiye carane nambah pelatih anyar menyang situsku?"
- "Domainku ora bisa digunakake"
- "Kepiye carane mbatalake/upgrade paketku?"

Bangun basis kawruh sampeyan (diwiwiti ing Wulangan 8) adhedhasar pitakon sing bola-bali iki. Saben tiket dhukungan sing sakjane bisa dadi artikel basis kawruh iku sinyal kanggo nulis artikel kasebut.

### Tingkat Dhukungan

Nalika sampeyan saya gedhe, atur dhukungan miturut paket:

| Paket | Tingkat Dhukungan | Wektu Tanggapan |
|------|--------------|---------------|
| Starter | Basis kawruh + email | 48 jam |
| Growth | Dhukungan email | 24 jam |
| Pro | Email prioritas + telpon onboarding | 4 jam |

[Tambahan Tiket Dhukungan](/addons/support-tickets) bisa mbantu ngatur panjalukan dhukungan ing njero platform.

## Operasi Tagihan

### Pembayaran Ambalan

Ultimate Multisite nangani tagihan ambalan kanthi otomatis liwat payment gateway sampeyan. Tugas sampeyan yaiku ngawasi:

- **Pembayaran gagal**: Tindak lanjuti kanthi cepet. Umume kegagalan amarga kertu kadaluwarsa, dudu pembatalan kanthi sengaja.
- **Dunning**: Pasang logika nyoba maneh otomatis liwat payment gateway sampeyan (Stripe nangani iki kanthi apik)
- **Panjalukan pembatalan**: Mangerteni kenapa pelanggan lunga. Saben pembatalan iku umpan balik.

### Ngatur Keanggotaan

Navigasi menyang **Ultimate Multisite > Keanggotaan** kanggo:

- Ndeleng kabeh langganan aktif
- Nangani panjalukan upgrade lan downgrade
- Ngolah refund yen perlu
- Ngatur kadaluwarsa trial

Deleng [Ngatur Keanggotaan](/user-guide/administration/managing-memberships) kanggo referensi lengkap.

### Invoice

Priksa manawa invoice digawe kanthi bener kanggo saben pembayaran. Pelanggan bisa mbutuhake invoice kanggo laporan biaya bisnis. Deleng [Ngatur Pembayaran lan Invoice](/user-guide/administration/managing-payments-and-invoices).

## Pangopènan Platform

### Nganyari WordPress lan Tambahan

Minangka administrator jaringan, sampeyan tanggung jawab kanggo:

- **Nganyari inti WordPress**: Tes ing situs staging sadurunge ditrapake menyang production
- **Nganyari tambahan**: Padha -- tes dhisik, banjur terapake ing saindenging jaringan
- **Nganyari tema**: Verifikasi template isih katon bener sawise nganyari tema
- **Nganyari Ultimate Multisite**: Tindakake changelog lan tes sadurunge nganyari

:::warning Aja Tau Nganyari ing Production Tanpa Testing
Nganyari sing rusak mengaruhi saben situs pelanggan ing jaringan sampeyan. Tansah tes nganyari ing salinan staging jaringan sampeyan dhisik.
:::

### Keamanan

- Jaga kabeh software tetep paling anyar
- Gunakake tembung sandhi sing kuwat lan autentikasi loro faktor kanggo akun admin
- Monitor aktivitas sing mencurigakan
- Duwe rencana kanggo insiden keamanan

### Kinerja

Nalika jaringan sampeyan saya gedhe, monitor:

- **Wektu muat kaca**: Apa situs pelanggan cepet?
- **Panggunaan sumber daya server**: CPU, memori, ruang disk
- **Kinerja database**: Jaringan gedhe butuh optimasi database saka wektu ke wektu

Coba nerapake caching (page cache, object cache) lan CDN yen durung. [Integrasi Cloudflare](/user-guide/host-integrations/cloudflare) nangani akeh bagean iki.

## Manajemen Siklus Urip Pelanggan

### Nyuda Churn

Churn yaiku persentase pelanggan sing mbatalake saben sasi. Kanggo bisnis langganan, nyuda churn padha pentinge karo entuk pelanggan anyar.

**Alesan umum pelanggan studio fitness churn:**

- Dheweke ora bisa ngerti carane nggunakake platform → apikake onboarding
- Situs ora katon cukup apik → apikake template
- Dheweke ora weruh nilai → apikake fitur utawa komunikasi
- Dheweke nemokake alternatif sing luwih murah → kuwatake nilai niche sampeyan
- Bisnise tutup → ora bisa diendhani, nanging lacak iki kanthi kapisah

### Nyengkuyung Upgrade

Pelanggan ing Starter sing wis sukses kudu disengkuyung kanggo upgrade:

- Nalika tekan wates paket (situs, panyimpenan), tampilake ajakan upgrade
- Kirim email terarah sing nyorot fitur paket Growth sing bakal migunani kanggo dheweke
- Tampilake apa sing wis dibangun pelanggan Growth/Pro

### Kampanye Win-Back

Nalika pelanggan mbatalake:

1. Takon kenapa (survei metu utawa email)
2. Tangani keprihatinane yen bisa
3. Wenehi diskon supaya bali (30-60 dina sawise pembatalan)

## Rutinitas Mingguan lan Saben Sasi

### Mingguan

- Tinjau pendaftaran anyar lan pembatalan
- Wangsuli kabeh tiket dhukungan sing isih mbukak
- Priksa kinerja platform lan uptime
- Tinjau pembayaran sing gagal

### Saben Sasi

- Analisis metrik kunci (MRR, churn, pelanggan anyar, upgrade)
- Terapake nganyari WordPress lan tambahan (sawise tes staging)
- Tinjau lan nganyari basis kawruh adhedhasar pola dhukungan
- Kirim newsletter utawa kabar nganyari marang pelanggan (fitur anyar, tips, kabar industri fitness)

### Saben Kuartal

- Tinjau rega dibandhingake pesaing lan umpan balik pelanggan
- Evaluasi desain template -- apa perlu disegarkan?
- Nilai kapasitas hosting -- apa sampeyan perlu scale?
- Tinjau lan apikake onboarding adhedhasar data aktivasi

## Sing Kita Bangun ing Wulangan Iki

- **Rutinitas ngawasi saben dina** kanggo wektu aktif, pandhaftaran, pambayaran, lan dhukungan
- **Struktur dhukungan bertingkat** sing dicocogake karo tataran paket
- **Operasi tagihan** kalebu penagihan tunggakan lan penanganan pembatalan
- **Tata cara pangopènan** kanggo pembaruan, keamanan, lan kinerja
- **Strategi nyuda pelanggan mandheg** sing khusus kanggo ceruk fitness
- **Rutinitas operasional saben minggu, saben wulan, lan saben triwulan**

---

**Sabanjuré:** [Wulangan 13: Ngembangaké Skala](lesson-13-growth) -- ngembangaké FitSite saka operasi cilik dadi bisnis nyata.
