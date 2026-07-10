---
title: 'Pangajaran 3: Nyetél Jaringan Anjeun'
sidebar_position: 4
_i18n_hash: 4bffe2f3ba68d1a58bfc32d6b0a3c5c7
---
# Pangajaran 3: Nyetél Jaringan Anjeun {#lesson-3-setting-up-your-network}

Waktuna ngawangun. Dina pangajaran ieu anjeun bakal masang Ultimate Multisite jeung ngonpigurasikeun pondasi jaringan FitSite. Unggal kaputusan di dieu dijieun kalayan ngémutan ceruk kabugaran.

## Dugi ka Mana Urang Saméméhna {#where-we-left-off}

Urang geus milih studio kabugaran salaku ceruk urang jeung ngesahkeun kasempetanana. Ayeuna urang ngarobah gagasan éta jadi platform anu jalan.

## Milih Hosting Anjeun {#choosing-your-hosting}

Pilihan hosting anjeun leuwih penting pikeun platform ceruk tibatan pikeun hiji ramatloka tunggal. Anjeun lain ngan nga-host hiji situs -- anjeun nga-host jaringan anu bakal tumuwuh jadi puluhan atawa ratusan situs.

### Anu Kudu Dipilarian {#what-to-look-for}

- **Dukungan WordPress Multisite**: Henteu kabéh host bisa nanganan multisite kalayan hadé
- **Wildcard SSL**: Penting pikeun jaringan dumasar subdomain
- **Sumber daya anu bisa diskalakeun**: Anjeun butuh rohangan pikeun tumuwuh tanpa migrasi
- **Integrasi Ultimate Multisite**: Pemetaan domain otomatis jeung SSL ngahémat usaha operasional anu signifikan

### Pendekatan anu Disarankeun {#recommended-approach}

Pilih host tina daptar [Panyadia anu Cocog](/user-guide/host-integrations/closte). Ieu geus diuji jeung Ultimate Multisite sarta nyayogikeun integrasi anu anjeun butuhkeun pikeun pemetaan domain jeung otomasi SSL.

Pikeun FitSite, urang bakal ngagunakeun konfigurasi subdomain. Ieu hartina situs palanggan mimitina bakal mucunghul salaku `studioname.fitsite.com` saméméh maranéhna sacara opsional memetakeun domain sorangan.

## Masang WordPress Multisite {#installing-wordpress-multisite}

Lamun anjeun can boga pamasangan WordPress Multisite:

1. Pasang WordPress dina panyadia hosting anjeun
2. Turutan pituduh [Kumaha Masang WordPress Multisite](/user-guide/getting-started/how-to-install-wordpress-multisite)
3. Pilih konfigurasi **subdomain** nalika dipenta

:::tip Kunaon Subdomain?
Subdomain masihan unggal situs palanggan alamat anu béda sorangan (`studio.fitsite.com`) tibatan path (`fitsite.com/studio`). Ieu leuwih profésional pikeun palanggan anjeun jeung ngahindarkeun konflik permalink. Tingali [Ultimate Multisite 101](/user-guide/getting-started/ultimate-multisite-101) pikeun babandingan anu jéntré.
:::

## Masang Ultimate Multisite {#installing-ultimate-multisite}

Turutan pituduh [Masang Ultimate Multisite](/user-guide/getting-started/installing-ultimate-multisite) pikeun:

1. Unggah jeung aktipkeun plugin sacara sakabéh jaringan
2. Jalankeun [Setup Wizard](/user-guide/getting-started/multisite-setup-wizard)

Salila Setup Wizard, tetep émut ceruk FitSite:

- **Mata uang**: Setél kana mata uang anu dipaké ku palanggan studio kabugaran anjeun
- **Ngaran pausahaan**: "FitSite" (atawa ngaran mérek anu anjeun pilih)
- **Logo pausahaan**: Unggah logo mérek anjeun -- ieu mucunghul dina invoice jeung email

## Ngonpigurasikeun pikeun Ceruk Kabugaran {#configuring-for-the-fitness-niche}

Kalayan Ultimate Multisite geus dipasang, jieun pilihan konfigurasi husus ceruk ieu:

### Setélan Umum {#general-settings}

Buka **Ultimate Multisite > Settings** jeung konpigurasikeun:

- **Ngaran situs**: FitSite
- **Peran baku**: Administrator -- nu boga studio kabugaran butuh kontrol lengkep kana eusi situsna
- **Pendaptaran**: Aktipkeun pendaptaran pamaké supaya nu boga studio bisa ngadaptar sorangan

### Konfigurasi Email {#email-configuration}

Email sistem anjeun kudu nyarita ku basa ceruk anjeun. Buka **Ultimate Multisite > Settings > Emails** jeung saluyukeun:

- Ganti basa umum "situs anyar anjeun" ku pesen anu husus kabugaran
- Conto subjek wilujeng sumping: "Ramatloka studio kabugaran anjeun geus siap"
- Conto eusi wilujeng sumping: Rujuk kana studio maranéhna, kelas-kelas, jeung ngamimitian nganggo situs kabugaran maranéhna

Urang bakal nyampurnakeun ieu deui dina Pangajaran 8 (Onboarding Palanggan), tapi netepkeun nada ayeuna mastikeun sanajan pendaptaran uji awal karasa husus kana ceruk.

### Konfigurasi Domain {#domain-configuration}

Lamun ngagunakeun panyadia hosting anu cocog, konpigurasikeun pemetaan domain ayeuna:

1. Buka **Ultimate Multisite > Settings > Domain Mapping**
2. Turutan pituduh integrasi pikeun host husus anjeun
3. Uji yén subsitus anyar meunang SSL sacara otomatis

Ieu mastikeun yén nalika urang ngamimitian nyieun témplat jeung situs uji dina pangajaran salajengna, sagalana jalan ti tungtung ka tungtung.

## Jaringan FitSite Sajauh Ieu {#the-fitsite-network-so-far}

Dina ahir pangajaran ieu, ieu anu anjeun boga:

```
Jaringan FitSite
├── WordPress Multisite (mode subdomain)
├── Ultimate Multisite (dipasang jeung dikonpigurasikeun)
├── Hosting jeung wildcard SSL
├── Pemetaan domain dikonpigurasikeun
├── Témplat email husus ceruk (awal)
└── Siap pikeun témplat situs (pangajaran salajengna)
```

## Anu Urang Wangun dina Pangajaran Ieu {#what-we-built-this-lesson}

- Pamasangan **WordPress Multisite anu jalan** dina mode subdomain
- **Ultimate Multisite dipasang** jeung dikonpigurasikeun ku branding FitSite
- **Hosting jeung SSL** disetél pikeun jaringan anu tumuwuh
- **Pemetaan domain** dikonpigurasikeun pikeun panyadia hosting anjeun
- **Nada email husus ceruk** diadegkeun ti poé kahiji

---

**Salajengna:** [Pangajaran 4: Ngawangun Témplat Ceruk](lesson-4-templates) -- urang nyieun témplat situs anu sabenerna bakal hayang dipaké ku nu boga studio kabugaran.
