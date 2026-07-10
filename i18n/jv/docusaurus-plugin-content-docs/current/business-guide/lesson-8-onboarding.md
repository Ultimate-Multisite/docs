---
title: 'Piwulang 8: Pangenalan Pelanggan'
sidebar_position: 9
_i18n_hash: 5b71133bebf067164c77d33db7c81806
---
# Piwulang 8: Onboarding Pelanggan {#lesson-8-customer-onboarding}

Nggawe pelanggan ndhaptar kuwi mung separo gaweyan. Yen dheweke mlebu, rumangsa kebacut bingung, banjur ora bali maneh, sampeyan wis kelangan dheweke. Piwulang iki ngrancang pengalaman sing ngowahi signup anyar dadi pelanggan sing aktif lan melu.

## Pungkasan Sadurunge {#where-we-left-off}

FitSite wis kebak nganggo brand kanthi alur checkout sing bisa mlaku. Saiki kita fokus marang apa sing kedadeyan sawisé pemilik studio fitness ngrampungaké signup lan tekan situs anyaré kanggo pisanan.

## Napa Onboarding Penting {#why-onboarding-matters}

30 menit pisanan sawisé signup nemtokaké apa pelanggan bakal tetep utawa mandheg. Pemilik studio fitness sing:

- Mlebu lan ndeleng situs sing wis katon kaya situs fitness → tetep
- Ngerti persis apa sing kudu ditindakake sabanjuré → tetep
- Rumangsa kesasar ing WordPress dashboard umum → lunga

Cithakan niche sampeyan (Piwulang 4) ngurusi poin pisanan. Piwulang iki ngurusi sing kapindho.

## Pengalaman Mlebu Pisanan {#the-first-login-experience}

### Widget Dashboard Sugeng Rawuh {#welcome-dashboard-widget}

Gawe widget dashboard kustom sing nyapa pelanggan anyar lan nuntun dheweke liwat persiyapan. Iki kudu katon cetha nalika dheweke pisanan mlebu.

**FitSite Quick Start:**

1. **Tambah jeneng lan logo studio sampeyan** -- Tautan menyang Customizer utawa setelan Site Identity
2. **Anyari jadwal kelas sampeyan** -- Tautan langsung menyang editor kaca Classes
3. **Tambah pelatih sampeyan** -- Tautan menyang editor kaca Trainers
4. **Setel rincian kontak sampeyan** -- Tautan menyang editor kaca Contact
5. **Pratinjau situs sampeyan** -- Tautan menyang frontend

Saben langkah nyambung langsung menyang kaca utawa setelan sing cocog. Ora perlu nggoleki ing menu.

### Sederhanakake Dashboard {#simplify-the-dashboard}

Pelanggan anyar ora perlu ndeleng saben item menu WordPress. Coba:

- Ndhelikake item menu sing ora relevan kanggo manajemen situs fitness (umpamané, Comments yen ora digunakake)
- Nata ulang menu supaya item sing paling kerep digunakake ana ing ngarep
- Nambah label menu kustom sing luwih cocog kanggo niche ("Studio Sampeyan" tinimbang "Appearance")

Tambahan [Plugin & Theme Manager](/addons/plugin-and-theme-manager) bisa mbantu ngontrol apa sing dideleng pelanggan.

## Rerangkèn Email Sugeng Rawuh {#welcome-email-sequence}

Siji email sugeng rawuh wae ora cukup. Setel rerangkèn sing nuntun pelanggan sajrone minggu pisanané:

### Email 1: Sugeng Rawuh (Langsung sawisé signup) {#email-1-welcome-immediately-after-signup}

- Subjek: "Sugeng rawuh ing FitSite -- situs web studio sampeyan wis aktif"
- Isi: Tautan mlebu, langkah quick start, tautan menyang sumber bantuan
- Gaya: Semangat, nyengkuyung, khusus fitness

### Email 2: Kamenangan Cepet (Dina 1) {#email-2-quick-wins-day-1}

- Subjek: "3 perkara sing kudu ditindakake dhisik ing FitSite sampeyan"
- Isi: Tambah logo sampeyan, anyari gambar hero homepage, tambah jadwal kelas sampeyan
- Lebokake screenshot sing nuduhaké persis endi sing kudu diklik

### Email 3: Gawe Dadi Duwekmu (Dina 3) {#email-3-make-it-yours-day-3}

- Subjek: "Gawe situs fitness sampeyan luwih mencolok"
- Isi: Kustomisasi werna, tambah foto pelatih, tulis crita studio sampeyan
- Tautan menyang conto situs fitness apik ing platform

### Email 4: Go Live (Dina 7) {#email-4-go-live-day-7}

- Subjek: "Siyap nuduhake FitSite sampeyan marang donya?"
- Isi: Checklist babagan apa sing kudu diverifikasi sadurungé nuduhake, carané nyambungaké domain kustom (yen nganggo Growth/Pro), tips nuduhake ing sosial

:::tip Otomasi Email
Gunakake [Webhooks](/user-guide/integrations/webhooks) utawa [Zapier](/user-guide/integrations/zapier) kanggo micu email-email iki liwat platform marketing email sampeyan. Iki menehi sampeyan kontrol luwih gedhé marang wektu pangiriman lan ngidini sampeyan nglacak engagement.
:::

## Sumber Bantuan {#help-resources}

Gawe konten bantuan khusus niche sing njawab pitakonan sing pancèn ditakokaké pemilik studio fitness:

### Artikel Knowledge Base {#knowledge-base-articles}

- "Carané nganyari jadwal kelas sampeyan"
- "Nambah lan nyunting profil pelatih"
- "Ngganti logo lan werna studio sampeyan"
- "Nyambungaké jeneng domain sampeyan dhewe" (kanggo pelanggan Growth/Pro)
- "Nambah widget booking menyang situs sampeyan"

Tulis iki kanggo pangguna non-teknis. Gunakake screenshot. Aja nganggo jargon WordPress.

### Video Pandhuan {#video-walkthroughs}

Rekaman layar cekak (2-3 menit) sing nuduhaké:

- Mlebu pisanan lan orientasi
- Nyunting homepage
- Nganyari jadwal kelas
- Nambah pelatih anyar

Iki ora kudu dadi produksi sing mulus banget. Sing penting cetha, migunani, lan khusus niche.

## Kaca Account {#the-account-page}

Ultimate Multisite kalebu [Account Page](/user-guide/client-management/account-page) sing diadhepake marang pelanggan, ing ngendi pelanggan ngatur subscription. Kustomisasi iki kanggo:

- Nuduhake plan FitSite sing saiki digunakake
- Nampilaké pilihan upgrade kanthi manfaat khusus fitness
- Nyedhiyakake riwayat tagihan lan undhuhan invoice
- Nyambung menyang sumber bantuan

## Ngukur Kasuksesan Onboarding {#measuring-onboarding-success}

Lacak indikator iki kanggo ngerti apa onboarding sampeyan bisa mlaku:

- **Tingkat aktivasi**: Pira persèn signup sing pancèn ngustomisasi situsé sajrone minggu pisanan?
- **Login minggu pisanan**: Sepira kerepé pelanggan anyar mlebu sajrone minggu pisanané?
- **Tiket dhukungan saka pelanggan anyar**: Volume dhuwur tegese onboarding sampeyan isih ana celah
- **Konversi trial-dadi-bayar**: Yen sampeyan nawakaké trial, pira persèn sing konversi?

## Jaringan FitSite Nganti Saiki {#the-fitsite-network-so-far}

```
Jaringan FitSite
├── WordPress Multisite (mode subdomain)
├── Ultimate Multisite (dikonfigurasi + nganggo brand)
├── Domain Platform (fitsite.com + wildcard SSL)
├── Cithakan Situs (Studio Essential, Gym Pro, Fitness Chain)
├── Produk (Starter, Growth, Pro + Order Bumps)
├── Alur Checkout (khusus niche, wis dites)
├── Branding (login, Dashboard, email, invoice, situs marketing)
├── Onboarding Pelanggan
│   ├── Widget Dashboard Quick Start
│   ├── Dashboard sing disederhanakake kanggo manajemen situs fitness
│   ├── Rerangkèn 4 email sugeng rawuh
│   ├── Knowledge base khusus niche
│   ├── Video pandhuan
│   └── Account Page sing dikustomisasi
└── Siyap kanggo strategi rega (piwulang sabanjuré)
```

## Sing Kita Gawe Ing Piwulang Iki {#what-we-built-this-lesson}

- **Pengalaman mlebu pisanan sing dipandu** nganggo widget Quick Start
- **Dashboard sing disederhanakake** fokus ing tugas manajemen situs fitness
- **Rerangkèn email sugeng rawuh** sing nuntun pelanggan sajrone minggu pisanané
- **Sumber bantuan khusus niche** sing ditulis kanggo pemilik studio fitness non-teknis
- **Metrik onboarding** kanggo nglacak lan ningkataké pengalaman

---

**Sabanjuré:** [Piwulang 9: Pricing kanggo Bathi](lesson-9-pricing) -- kita nyempurnakaké strategi pricing kanggo nggedhèkaké revenue lan nyilikaké churn.
