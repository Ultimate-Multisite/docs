---
title: 'Palajaran 8: Ngawanohkeun Palanggan'
sidebar_position: 9
_i18n_hash: 5b71133bebf067164c77d33db7c81806
---
# Palajaran 8: Ngawanohkeun Palanggan Anyar

Meunangkeun palanggan pikeun daptar téh ngan satengah pagawéan. Lamun maranéhna asup, ngarasa kawalahan, terus teu balik deui, anjeun geus kaleungitan maranéhna. Palajaran ieu ngarancang pangalaman anu ngarobah daptaran anyar jadi palanggan anu aktif jeung kalibet.

## Di Mana Urang Eureun {#where-we-left-off}

FitSite geus pinuh boga merek kalayan alur checkout anu jalan. Ayeuna urang museurkeun kana naon anu kajadian sanggeus nu boga studio kabugaran ngaréngsékeun daptar sarta asup ka situs anyarna pikeun kahiji kalina.

## Kunaon Ngawanohkeun Palanggan Anyar Penting {#why-onboarding-matters}

30 menit munggaran sanggeus daptar nangtukeun naha palanggan bakal tetep atawa eureun. Nu boga studio kabugaran anu:

- Asup sarta ningali situs anu geus katingali kawas ramatloka kabugaran → tetep
- Nyaho persis naon anu kudu dipigawé salajengna → tetep
- Ngarasa leungit dina WordPress dashboard anu umum → indit

Template niche anjeun (Palajaran 4) ngatur titik kahiji. Palajaran ieu ngatur titik kadua.

## Pangalaman Asup Kahiji {#the-first-login-experience}

### Widget Dashboard Wilujeng Sumping {#welcome-dashboard-widget}

Jieun widget dashboard kustom anu ngabagéakeun palanggan anyar sarta nungtun maranéhna ngaliwatan setélan awal. Ieu kudu mucunghul jelas nalika maranéhna asup pikeun kahiji kalina.

**Mimitian Gancang FitSite:**

1. **Tambahkeun ngaran studio jeung logo anjeun** -- Tautan ka Customizer atawa setélan Site Identity
2. **Anyarkeun jadwal kelas anjeun** -- Tautan langsung ka éditor kaca Classes
3. **Tambahkeun palatih anjeun** -- Tautan ka éditor kaca Trainers
4. **Setel rinci kontak anjeun** -- Tautan ka éditor kaca Contact
5. **Tilik situs anjeun** -- Tautan ka frontend

Unggal léngkah numbu langsung ka kaca atawa setélan anu patali. Teu kudu neangan dina ménu.

### Sederhanakeun Dashboard {#simplify-the-dashboard}

Pelanggan anyar teu perlu ningali unggal item ménu WordPress. Pertimbangkeun:

- Nyumputkeun item ménu anu teu patali jeung ngokolakeun situs kabugaran (contona, Comments lamun teu dipaké)
- Ngatur deui urutan ménu pikeun nempatkeun item anu pangmindengna dipaké di hareup
- Nambahkeun labél ménu kustom anu asup akal pikeun niche ("Studio Anjeun" tibatan "Appearance")

Addon [Pangatur Plugin & Theme](/addons/plugin-and-theme-manager) bisa ngabantu ngadalikeun naon anu ditempo ku palanggan.

## Runtuyan Email Wilujeng Sumping {#welcome-email-sequence}

Hiji email wilujeng sumping henteu cukup. Setel runtuyan anu nungtun palanggan ngaliwatan minggu kahijina:

### Email 1: Wilujeng Sumping (Langsung sanggeus daptar) {#email-1-welcome-immediately-after-signup}

- Judul: "Wilujeng sumping di FitSite -- ramatloka studio anjeun geus hirup"
- Eusi: Tautan asup, léngkah mimiti gancang, tautan ka sumberdaya pitulung
- Nada: Sumanget, ngadorong, husus kabugaran

### Email 2: Kameunangan Gancang (Poé 1) {#email-2-quick-wins-day-1}

- Judul: "3 hal anu kudu dipigawé heula dina FitSite anjeun"
- Eusi: Tambahkeun logo anjeun, anyarkeun gambar hero homepage, tambahkeun jadwal kelas anjeun
- Lebetkeun screenshot anu nunjukkeun persis di mana kudu diklik

### Email 3: Jadikeun Milik Anjeun (Poé 3) {#email-3-make-it-yours-day-3}

- Judul: "Jadikeun situs kabugaran anjeun leuwih nonjol"
- Eusi: Kustomisasi warna, tambahkeun poto palatih, tulis carita studio anjeun
- Tautan ka conto situs kabugaran anu alus dina platform

### Email 4: Go Live (Poé 7) {#email-4-go-live-day-7}

- Judul: "Siap ngabagikeun FitSite anjeun ka dunya?"
- Eusi: Daptar pariksa naon anu kudu diverifikasi saméméh dibagikeun, kumaha nyambungkeun domain kustom (lamun dina Growth/Pro), tips ngabagikeun ka média sosial

:::tip Email Automation
Use [Webhooks](/user-guide/integrations/webhooks) or [Zapier](/user-guide/integrations/zapier) to trigger these emails through your email marketing platform. This gives you more control over timing and allows you to track engagement.
:::

## Sumberdaya Pitulung {#help-resources}

Jieun eusi pitulung husus niche anu ngajawab patarosan anu sabenerna ditanyakeun ku nu boga studio kabugaran:

### Artikel Basis Pangaweruh {#knowledge-base-articles}

- "Kumaha nganyarkeun jadwal kelas anjeun"
- "Nambahkeun jeung ngédit profil palatih"
- "Ngarobah logo jeung warna studio anjeun"
- "Nyambungkeun ngaran domain anjeun sorangan" (pikeun palanggan Growth/Pro)
- "Nambahkeun widget booking ka situs anjeun"

Tulis ieu pikeun pamaké non-téknis. Paké screenshot. Ulah nganggo jargon WordPress.

### Video Pituduh Léngkah-léngkah {#video-walkthroughs}

Rekaman layar pondok (2-3 menit) anu nunjukkeun:

- Asup kahiji jeung orientasi
- Ngédit homepage
- Nganyarkeun jadwal kelas
- Nambahkeun palatih anyar

Ieu teu kudu jadi produksi anu sampurna. Anu penting téh jelas, mantuan, jeung husus niche.

## Kaca Account {#the-account-page}

Ultimate Multisite ngawengku [Kaca Account](/user-guide/client-management/account-page) anu nyanghareup ka palanggan, tempat palanggan ngokolakeun langgananana. Kustomisasi ieu pikeun:

- Nembongkeun plan FitSite maranéhna ayeuna
- Mintonkeun pilihan upgrade kalayan mangpaat husus kabugaran
- Nyadiakeun riwayat tagihan jeung unduhan invoice
- Tautan ka sumberdaya pitulung

## Ngukur Kasuksésan Ngawanohkeun Palanggan Anyar {#measuring-onboarding-success}

Lacak indikator ieu pikeun nyaho naha prosés ngawanohkeun palanggan anyar anjeun jalan:

- **Laju aktivasi**: Sabaraha persén daptaran anu sabenerna ngustomisasi situsna dina minggu kahiji?
- **Asup minggu kahiji**: Sabaraha kali palanggan anyar asup salila minggu kahijina?
- **Tikét dukungan ti palanggan anyar**: Volume luhur hartina prosés ngawanohkeun palanggan anyar anjeun boga kakurangan
- **Konversi trial-ka-mayar**: Lamun anjeun nawarkeun trial, sabaraha persén anu robah jadi mayar?

## Jaringan FitSite Nepi Ka Ayeuna {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured + branded)
├── Platform Domain (fitsite.com + wildcard SSL)
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products (Starter, Growth, Pro + Order Bumps)
├── Checkout Flow (niche-specific, tested)
├── Branding (login, dashboard, emails, invoices, marketing site)
├── Customer Onboarding
│   ├── Quick Start dashboard widget
│   ├── Simplified dashboard for fitness site management
│   ├── 4-email welcome sequence
│   ├── Niche-specific knowledge base
│   ├── Video walkthroughs
│   └── Customized account page
└── Ready for pricing strategy (next lesson)
```

## Naon Anu Urang Bangun Dina Palajaran Ieu {#what-we-built-this-lesson}

- **Pangalaman asup kahiji anu dipandu** kalayan widget Quick Start
- **Dashboard anu disederhanakeun** anu museur kana tugas ngokolakeun situs kabugaran
- **Runtuyan email wilujeng sumping** anu nungtun palanggan ngaliwatan minggu kahijina
- **Sumberdaya pitulung husus niche** anu ditulis pikeun nu boga studio kabugaran non-téknis
- **Métrik ngawanohkeun palanggan anyar** pikeun ngalacak jeung ningkatkeun pangalaman

---

**Salajengna:** [Palajaran 9: Netepkeun Harga pikeun Kauntungan](lesson-9-pricing) -- urang nyaring strategi harga pikeun ngamaksimalkeun panghasilan jeung ngaminimalkeun churn.
