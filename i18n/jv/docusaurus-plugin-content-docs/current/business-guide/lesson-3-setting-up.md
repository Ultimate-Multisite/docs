---
title: 'Piwulang 3: Nyiyapake Jaringan Panjenengan'
sidebar_position: 4
_i18n_hash: 4bffe2f3ba68d1a58bfc32d6b0a3c5c7
---
# Piwulang 3: Nyiyapake Jaringan Panjenengan {#lesson-3-setting-up-your-network}

Wektune mbangun. Ing piwulang iki panjenengan bakal masang Ultimate Multisite lan ngonfigurasi pondhasar jaringan FitSite. Saben keputusan ing kene digawe kanthi niche fitness minangka tetimbangan.

## Ing Endi Kita Pungkasan {#where-we-left-off}

Kita milih studio fitness minangka niche lan wis mriksa manawa kesempatan iki sah. Saiki kita ngowahi gagasan kuwi dadi platform sing bisa mlaku.

## Milih Hosting Panjenengan {#choosing-your-hosting}

Pilihan hosting panjenengan luwih wigati kanggo platform niche tinimbang kanggo siji situs web. Panjenengan ora mung nge-host siji situs -- panjenengan nge-host jaringan sing bakal tuwuh dadi puluhan utawa atusan situs.

### Sing Perlu Digoleki {#what-to-look-for}

- **Dhukungan WordPress Multisite**: Ora kabeh host bisa nangani multisite kanthi apik
- **Wildcard SSL**: Penting kanggo jaringan adhedhasar subdomain
- **Sumber daya sing bisa diskalakake**: Panjenengan butuh ruang kanggo tuwuh tanpa migrasi
- **Integrasi Ultimate Multisite**: Domain mapping lan SSL otomatis ngirit upaya operasional sing gedhe

### Pendekatan sing Disaranake {#recommended-approach}

Pilih host saka dhaptar [Panyedhiya sing Kompatibel](/user-guide/host-integrations/closte). Iki wis dites karo Ultimate Multisite lan nyedhiyakake integrasi sing panjenengan butuhake kanggo domain mapping lan otomatisasi SSL.

Kanggo FitSite, kita bakal nggunakake konfigurasi subdomain. Iki tegese situs pelanggan wiwitane bakal katon minangka `studioname.fitsite.com` sadurunge kanthi opsional bisa map domain dhewe.

## Masang WordPress Multisite {#installing-wordpress-multisite}

Yen panjenengan durung duwe instalasi WordPress Multisite:

1. Pasang WordPress ing panyedhiya hosting panjenengan
2. Tindakake pandhuan [Cara Masang WordPress Multisite](/user-guide/getting-started/how-to-install-wordpress-multisite)
3. Pilih konfigurasi **subdomain** nalika dijaluk

:::tip Napa Subdomain?
Subdomain menehi saben situs pelanggan alamat sing dhewe lan cetha (`studio.fitsite.com`) tinimbang path (`fitsite.com/studio`). Iki luwih profesional kanggo pelanggan panjenengan lan ngindhari konflik permalink. Delengen [Ultimate Multisite 101](/user-guide/getting-started/ultimate-multisite-101) kanggo perbandingan sing rinci.
:::

## Masang Ultimate Multisite {#installing-ultimate-multisite}

Tindakake pandhuan [Masang Ultimate Multisite](/user-guide/getting-started/installing-ultimate-multisite) kanggo:

1. Unggah lan aktifake panyambung ing sakjaringan
2. Jalanake [Pandhuan Persiyapan](/user-guide/getting-started/multisite-setup-wizard)

Sajrone pandhuan persiyapan, elinga niche FitSite:

- **Mata uang**: Setel menyang mata uang sing digunakake pelanggan studio fitness panjenengan
- **Jeneng perusahaan**: "FitSite" (utawa jeneng merek sing panjenengan pilih)
- **Logo perusahaan**: Unggah logo merek panjenengan -- iki katon ing invoice lan email

## Ngonfigurasi kanggo Niche Fitness {#configuring-for-the-fitness-niche}

Sawise Ultimate Multisite dipasang, gawe pilihan konfigurasi khusus niche iki:

### Setelan Umum {#general-settings}

Navigasi menyang **Ultimate Multisite > Settings** lan konfigurasi:

- **Jeneng situs**: FitSite
- **Peran baku**: Administrator -- pemilik studio fitness butuh kontrol penuh marang konten situsé
- **Registrasi**: Aktifake registrasi pangguna supaya pemilik studio bisa ndhaptar dhewe

### Konfigurasi Email {#email-configuration}

Email sistem panjenengan kudu nganggo basa sing cocog karo niche panjenengan. Navigasi menyang **Ultimate Multisite > Settings > Emails** lan sesuaikake:

- Ganti basa umum "situs anyar panjenengan" nganggo pesen khusus fitness
- Tuladha subjek sambutan: "Situs web studio fitness panjenengan wis siyap"
- Tuladha isi sambutan: Sebutake studio, kelas, lan carane miwiti nganggo situs fitnessé

Kita bakal nyempurnakake iki maneh ing Piwulang 8 (Onboarding Pelanggan), nanging nyetel nada saiki mesthekake manawa sanajan pendaftaran tes awal krasa khusus niche.

### Konfigurasi Domain {#domain-configuration}

Yen nggunakake panyedhiya hosting sing kompatibel, konfigurasi domain mapping saiki:

1. Navigasi menyang **Ultimate Multisite > Settings > Domain Mapping**
2. Tindakake pandhuan integrasi kanggo host tartamtu panjenengan
3. Tes manawa subsitus anyar entuk SSL kanthi otomatis

Iki mesthekake manawa nalika kita miwiti nggawe cithakan lan situs tes ing piwulang sabanjure, kabeh bisa mlaku saka wiwitan nganti pungkasan.

## Jaringan FitSite Nganti Saiki {#the-fitsite-network-so-far}

Ing pungkasan piwulang iki, iki sing wis panjenengan duweni:

```
Jaringan FitSite
├── WordPress Multisite (mode subdomain)
├── Ultimate Multisite (wis dipasang lan dikonfigurasi)
├── Hosting nganggo wildcard SSL
├── Domain mapping dikonfigurasi
├── Cithakan email khusus niche (awal)
└── Siap kanggo cithakan situs (piwulang sabanjure)
```

## Sing Kita Bangun ing Piwulang Iki {#what-we-built-this-lesson}

- Instalasi **WordPress Multisite sing bisa mlaku** ing mode subdomain
- **Ultimate Multisite wis dipasang** lan dikonfigurasi nganggo branding FitSite
- **Hosting lan SSL** disiyapake kanggo jaringan sing tuwuh
- **Domain mapping** dikonfigurasi kanggo panyedhiya hosting panjenengan
- **Nada email khusus niche** ditetepake saka dina kapisan

---

**Sabanjure:** [Piwulang 4: Mbangun Cithakan Niche](lesson-4-templates) -- kita nggawe cithakan situs sing pancen bakal dipenginake digunakake dening pemilik studio fitness.
