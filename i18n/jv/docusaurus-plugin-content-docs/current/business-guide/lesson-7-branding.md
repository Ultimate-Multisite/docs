---
title: 'Piwulang 7: Ndadekake Iku Duwekmu'
sidebar_position: 8
_i18n_hash: 90013fc79a9cbb15283ce89b688002b1
---
# Piwulang 7: Nggawé Dadi Duwèkmu

Pelangganmu aja nganti rumangsa lagi nganggo "sawijining WordPress plugin." Dheweke kudu rumangsa lagi nganggo FitSite -- platform sing dibangun kanggo indhustriné. Piwulang iki nyakup branding, white-labeling, lan nggawé platform krasa kaya produk.

## Panggonan Pungkasan Kita

FitSite wis nduwèni alur pambayaran sing mlaku, sing nuntun pamilik studio fitness saka milih paket nganti dadi situs aktif. Saiki kita nggawé kabèh pengalaman krasa kaya produk sing nyawiji lan nduwèni merek.

## Domain Platformmu

Dhasar merekmu yaiku domainmu. Kanggo FitSite:

- **Domain utama**: `fitsite.com` (situs marketing lan oyod jaringanmu)
- **Situs pelanggan**: `studioname.fitsite.com` (subdomain)
- **Domain khusus**: Pelanggan ing paket Growth lan Pro bisa map domainé dhéwé

### Nyetel Domainmu

1. Dhaptaraké domain platformmu
2. Arahaké menyang panyedhiya hostingmu
3. Konfigurasi wildcard DNS (`*.fitsite.com`) kanggo subdomain pelanggan
4. Pesthèkaké wildcard SSL wis aktif

Delengen [Carané Ngonfigurasi Domain Mapping](/user-guide/domain-mapping/how-to-configure-domain-mapping) kanggo pandhuan rinci.

## White-Labeling Pengalaman Admin

Nalika pamilik studio fitness mlebu menyang Dashboard situsé, dheweke kudu weruh merekmu, dudu branding WordPress utawa Ultimate Multisite.

### Kaca Login Khusus

Kustomisasi kaca login WordPress supaya nampilaké:

- Logo FitSitemu
- Gambar latar sing cocog karo fitness
- Werna merekmu

### Branding Dashboard

Gunakaké addon [Admin Page Creator](/addons/admin-page-creator) utawa CSS khusus kanggo:

- Ngganti logo WordPress nganggo logo FitSitemu
- Ngatur skema werna admin supaya cocog karo merekmu
- Nambah widget Dashboard khusus kanthi pranala cepet lan sumber bantuan sing khusus kanggo fitness

### Kaca Admin Khusus

Timbang nggawé kaca admin khusus sing nampilaké tumindak sing paling relevan kanggo pamilik studio fitness:

- "Sunting Jadwal Kelasmu"
- "Anyari Profil Pelatih"
- "Deleng Situsmu"

Iki nyuda kurva sinau kanthi nyeleh tumindak sing relevan karo niche ing ngarep lan tengah, tinimbang didhelikaké ing menu WordPress standar.

## Branding Komunikasimu

Saben email, invoice, lan kabar kudu nguataké merekmu.

### Email Sistem

Navigasi menyang **Ultimate Multisite > Settings > Emails** lan kustomisasi kabèh email sistem:

- **Jeneng pangirim**: FitSite
- **Email pangirim**: hello@fitsite.com
- **Template email**: Gunakaké werna merek lan logo
- **Basa**: Khusus fitness ing kabèh bagean

Email penting sing kudu dikustomisasi:

| Email | Versi Umum | Versi FitSite |
|-------|----------------|-----------------|
| Sugeng rawuh | "Situs anyar sampeyan wis siyap" | "Situs web studio fitness sampeyan wis aktif" |
| Bukti pambayaran | "Pambayaran ditampa" | "Pambayaran langganan FitSite dikonfirmasi" |
| Uji coba arep rampung | "Uji coba sampeyan bakal rampung sedhéla manèh" | "Uji coba FitSite sampeyan rampung ing 3 dina -- tetep aktifaké situs web studiomu" |

### Invoice

Kustomisasi template invoice nganggo:

- Logo FitSite lan werna merekmu
- Rincian bisnismu
- Jeneng produk khusus fitness (dudu ID paket umum)

## Situs Sing Dideleng Pelanggan

Domain utamamu (`fitsite.com`) butuh situs marketing sing adol platform. Iki kapisah saka admin jaringan Ultimate Multisite -- iki pasuryan umum bisnismu.

Kaca penting:

- **Homepage**: Proposisi nilai sing cetha kanggo bisnis fitness
- **Fitur**: Apa sing ditindakaké FitSite, nganggo istilah fitness
- **Rega**: Telung paketmu nganggo perbandingan fitur khusus niche
- **Conto**: Tampilaké situs sing dibangun ing platform
- **Dhaptar**: Pranala menyang formulir pambayaranmu

:::tip Situs Marketingmu Bisa Dadi Situs Jaringan
Gawé situs marketingmu minangka situs ing njero jaringanmu dhéwé. Iki ngidini sampeyan ngelola saka Dashboard sing padha lan nduduhaké kapabilitas platformmu dhéwé.
:::

## Domain Khusus kanggo Pelanggan

Kanggo pelanggan ing paket sing nyakup domain khusus, dokumèntasikaké prosèsé kanthi cetha:

1. Pelanggan ndhaptaraké utawa mindhah domainé menyang registrar
2. Pelanggan nganyari DNS supaya ngarah menyang platformmu (wènèhana cathetan sing pas)
3. Ultimate Multisite nangani domain mapping lan SSL

Gawé artikel pitulungan utawa entri basis kawruh khusus kanggo prosès iki, ditulis kanggo pamilik studio fitness sing ora teknis.

## Jaringan FitSite Nganti Saiki

```
Jaringan FitSite
├── WordPress Multisite (mode subdomain)
├── Ultimate Multisite (wis dikonfigurasi + dibranding)
├── Domain Platform (fitsite.com + wildcard SSL)
├── Template Situs (Studio Essential, Gym Pro, Fitness Chain)
├── Produk (Starter, Growth, Pro + Order Bumps)
├── Alur Pambayaran (khusus niche, wis diuji)
├── Branding
│   ├── Kaca login khusus
│   ├── Dashboard admin bermerek
│   ├── Email sistem khusus niche
│   ├── Invoice bermerek
│   └── Situs marketing ing fitsite.com
└── Siyap kanggo alur onboarding (piwulang sabanjuré)
```

## Sing Kita Bangun ing Piwulang Iki

- **Domain platform lan DNS** dikonfigurasi kanggo pengalaman bermerek
- **Admin white-label** nganggo branding FitSite ing kabèh bagean
- **Komunikasi sing dikustomisasi** -- email, invoice, lan kabar kabèh cocog karo merek
- **Situs marketing** sing adol FitSite marang pamilik studio fitness
- **Dokumentasi domain khusus** kanggo pelanggan sing kepengin domainé dhéwé

---

**Sabanjuré:** [Piwulang 8: Onboarding Pelanggan](lesson-8-onboarding) -- kita ngrancang pengalaman sing ngowahi pendaftar anyar dadi pelanggan aktif lan seneng.
