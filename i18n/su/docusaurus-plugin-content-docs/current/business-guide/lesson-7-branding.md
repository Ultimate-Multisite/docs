---
title: 'Pangajaran 7: Ngajadikeun Ieu Milik Anjeun'
sidebar_position: 8
_i18n_hash: 90013fc79a9cbb15283ce89b688002b1
---
# Pangajaran 7: Ngajadikeun Milik Anjeun

Palanggan anjeun ulah nepi ka ngarasa yén maranéhna keur ngagunakeun "sawatara tambahan WordPress." Maranéhna kudu ngarasa keur ngagunakeun FitSite -- hiji platform anu diwangun pikeun industri maranéhna. Pangajaran ieu ngabahas branding, white-labeling, jeung kumaha ngajadikeun platform karasa siga hiji produk.

## Di Mana Urang Eureun {#where-we-left-off}

FitSite boga alur checkout anu jalan, anu mawa nu boga studio kabugaran ti milih paket nepi ka situs anu hirup. Ayeuna urang ngajadikeun sakabéh pangalaman karasa siga produk anu ngahiji jeung boga brand anu écés.

## Domain Platform Anjeun {#your-platform-domain}

Pondasi brand anjeun nyaéta domain anjeun. Pikeun FitSite:

- **Domain utama**: `fitsite.com` (situs marketing anjeun jeung akar jaringan)
- **Situs palanggan**: `studioname.fitsite.com` (subdomain)
- **Domain khusus**: Palanggan dina paket Growth jeung Pro bisa map domain sorangan

### Nyetél Domain Anjeun {#setting-up-your-domain}

1. Daptarkeun domain platform anjeun
2. Arahkeun ka panyadia hosting anjeun
3. Konpigurasikeun wildcard DNS (`*.fitsite.com`) pikeun subdomain palanggan
4. Pastikeun wildcard SSL aktip

Tingali [Kumaha Ngonpigurasikeun Domain Mapping](/user-guide/domain-mapping/how-to-configure-domain-mapping) pikeun pitunjuk rinci.

## White-Labeling Pangalaman Admin {#white-labeling-the-admin-experience}

Nalika nu boga studio kabugaran asup ka dashboard situsna, maranéhna kudu ningali brand anjeun, lain branding WordPress atawa Ultimate Multisite.

### Kaca Login Khusus {#custom-login-page}

Saluyukeun kaca login WordPress pikeun nembongkeun:

- Logo FitSite anjeun
- Gambar latar anu cocog jeung kabugaran
- Warna brand anjeun

### Branding Dashboard {#dashboard-branding}

Paké addon [Panyipta Kaca Admin](/addons/admin-page-creator) atawa CSS khusus pikeun:

- Ngaganti logo WordPress ku logo FitSite anjeun
- Nyaluyukeun skéma warna admin supaya cocog jeung brand anjeun
- Nambahkeun widget dashboard khusus jeung tautan gancang sarta sumber bantosan anu husus pikeun kabugaran

### Kaca Admin Khusus {#custom-admin-pages}

Pertimbangkeun nyieun kaca admin khusus anu nembongkeun tindakan anu paling relevan pikeun nu boga studio kabugaran:

- "Édit Jadwal Kelas Anjeun"
- "Apdet Profil Palatih"
- "Tingali Situs Anjeun"

Ieu ngurangan kurva diajar ku nempatkeun tindakan anu relevan jeung niche di hareup jeung tengah, tibatan nyumputkeunana dina ménu WordPress standar.

## Branding Komunikasi Anjeun {#branding-your-communications}

Unggal email, invoice, jeung bewara kudu nguatkeun brand anjeun.

### Email Sistem {#system-emails}

Buka **Ultimate Multisite > Settings > Emails** jeung saluyukeun sakabéh email sistem:

- **Ngaran ti**: FitSite
- **Email ti**: hello@fitsite.com
- **Template email**: Paké warna brand jeung logo anjeun
- **Basa**: Husus kabugaran sapanjangna

Email penting pikeun disaluyukeun:

| Email | Vérsi Umum | Vérsi FitSite |
|-------|----------------|-----------------|
| Wilujeng sumping | "Situs anyar anjeun geus siap" | "Ramatloka studio kabugaran anjeun geus hirup" |
| Resi pamayaran | "Pamayaran ditampa" | "Pamayaran langganan FitSite dikonfirmasi" |
| Trial rék réngsé | "Trial anjeun rék réngsé geura-giru" | "Trial FitSite anjeun réngsé dina 3 poé -- tetepkeun ramatloka studio anjeun hirup" |

### Invoice {#invoices}

Saluyukeun template invoice jeung:

- Logo FitSite jeung warna brand anjeun
- Rinci bisnis anjeun
- Ngaran produk husus kabugaran (lain ID paket umum)

## Situs Hareup Palanggan {#the-customer-facing-site}

Domain utama anjeun (`fitsite.com`) peryogi situs marketing anu ngajual platform. Ieu misah ti admin jaringan Ultimate Multisite -- ieu raray publik bisnis anjeun.

Kaca penting:

- **Homepage**: Proposisi nilai anu écés pikeun bisnis kabugaran
- **Fitur**: Naon anu dilakukeun FitSite, dina istilah kabugaran
- **Harga**: Tilu paket anjeun jeung babandingan fitur anu husus niche
- **Conto**: Pamerkeun situs anu diwangun dina platform
- **Daptar**: Tautan ka formulir checkout anjeun

:::tip Situs Marketing Anjeun Bisa Jadi Situs Jaringan
Jieun situs marketing anjeun salaku situs dina jaringan anjeun sorangan. Ieu ngamungkinkeun anjeun ngatur ti dashboard anu sarua jeung nembongkeun kamampuhan platform anjeun sorangan.
:::

## Domain Khusus pikeun Palanggan {#custom-domain-for-customers}

Pikeun palanggan dina paket anu kaasup domain khusus, dokuméntasikeun prosésna sacara écés:

1. Palanggan ngadaptarkeun atawa mindahkeun domainna ka registrar
2. Palanggan ngapdet DNS pikeun nunjuk ka platform anjeun (pasihkeun rékaman anu pasti)
3. Ultimate Multisite ngurus domain mapping jeung SSL

Jieun artikel bantosan atawa éntri pangaweruh khusus pikeun prosés ieu, ditulis pikeun nu boga studio kabugaran anu henteu téknis.

## Jaringan FitSite Nepi ka Ayeuna {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured + branded)
├── Platform Domain (fitsite.com + wildcard SSL)
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products (Starter, Growth, Pro + Order Bumps)
├── Checkout Flow (niche-specific, tested)
├── Branding
│   ├── Custom login page
│   ├── Branded admin dashboard
│   ├── Niche-specific system emails
│   ├── Branded invoices
│   └── Marketing site on fitsite.com
└── Ready for onboarding flow (next lesson)
```

## Anu Urang Wangun Dina Pangajaran Ieu {#what-we-built-this-lesson}

- **Domain platform jeung DNS** dikonpigurasikeun pikeun pangalaman anu boga brand
- **Admin white-labeled** jeung branding FitSite sapanjangna
- **Komunikasi anu disaluyukeun** -- email, invoice, jeung bewara sadayana saluyu jeung brand
- **Situs marketing** anu ngajual FitSite ka nu boga studio kabugaran
- **Dokuméntasi domain khusus** pikeun palanggan anu hoyong domain sorangan

---

**Salajengna:** [Pangajaran 8: Onboarding Palanggan](lesson-8-onboarding) -- urang ngarancang pangalaman anu ngarobah pendaftar anyar jadi palanggan anu aktip jeung bagja.
