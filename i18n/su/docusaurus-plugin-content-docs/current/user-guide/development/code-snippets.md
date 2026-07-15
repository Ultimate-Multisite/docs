---
title: Cuplikan Kode
sidebar_position: 1
_i18n_hash: 2284b14474d86f665fa7c84cc305553e
---
# Cuplikan Kode pikeun v2

Intina, cuplikan kode pikeun **WordPress** dipaké pikeun ngalakukeun sababaraha kagiatan anu biasana butuh plugin leutik khusus. Cuplikan kode saperti kitu dipasang dina salah sahiji file inti WordPress atawa tema (biasana file `functions.php` tina tema anjeun) atawa bisa dipaké salaku MU plugin.

Dina artikel ieu urang bakal nunjukkeun tilu cuplikan kode anu bisa dipaké jeung **Ultimate Multisite v2**:

  * [**Ngubah posisi item menu Akun**](#changing-the-position-of-the-account-menu-item)

  * [**Kumaha cara nguji upami pengguna aya dina rencana tertentu sareng/atawa gaduh langganan aktif**](#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription)

  * [**Ngabenerkeun masalah CORS jeung Font-Icons di domain anu dipetakan**](#fixing-cors-issues-with-font-icons-in-mapped-domains)

## Ngubah posisi item menu Akun {#changing-the-position-of-the-account-menu-item}

Kanggo ngubah posisi item menu Akun dina Dashboard klien anjeun, cukup tambihan cuplikan kode ieu ka file `functions.php` tina tema utama situs anjeun anu aktif. Anjeun ogé bisa masukan cuplikan éta di salah sahiji mu-plugin atawa plugin kustom anjeun.

```php
add_filter('wu_my_account_menu_position', function() { return 10; // Sesuaikan nilai ieu pikeun ngadamel menu dina posisi anu dipikahoyong.
```

## Kumaha cara nguji upami pengguna aya dina rencana tertentu sareng/atawa gaduh langganan aktif {#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription}

Salaku admin jaringan, anjeun mungkin perlu nyiptake fungsi kustom anu bakal ngalakukeun tindakan dasar atawa ngajadikeun layanan/fitur ka kelompok pelanggan atanapi pamiang anu dipilih, dumasar kana status langganan jeung rencana anu dipikahoyongna.

Fungsi asli Ultimate Multisite ieu bakal ngabantosan anjeun dina hal éta.

Kanggo nguji upami pengguna mangrupa anggota rencana tertentu, anjeun bisa maké fungsi:

```php
wu_has_plan($user_id, $plan_id)
```

Kanggo nguji lamun langganan téh aktif atawa henteu, anjeun bisa nganggo fungsi:

`wu_is_active_subscriber($user_id)`

Di handap ieu conto kode anu nguji upami user ayeuna aya dina rencana tartamtu (_Plan ID 50_) jeung lamunan (subscription) user téh aktif.

`$user_id = get_current_user_id(); $plan_id = 50; if (wu_has_plan($user_id, $plan_id) && wu_is_active_subscriber($user_id)) { // USER ANAK RENCANA JEUNG LAMUNANNA AKTIF, LAKUKAN HAL IEU } else { // USER TEU ANAK RENCANA -- ATAWA -- LAMUNANNA TEU AKTIF, LAKUKAN HAL LAIN } // akhir if;`

Catatan yén `_**wu_has_plan**_` butuh "Plan ID" supados bisa ngagantung.

Kanggo meunang ID rencana, anjeun bisa ka **Ultimate Multisite > Products**. ID unggal produk bakal ditunjuke di sisi kanan tabel.

Catatan yén user ngan ukur bisa langganan **Plan**, lain Package atawa Service, sabab maranéhna ngan ukur tambahan pikeun **Plan**.

![Daftar Produk nunjukkeun ID rencana](/img/admin/products-list.png)

## Ngajaga CORS issues jeung Font-Icons dina domain anu di-map {#fixing-cors-issues-with-font-icons-in-mapped-domains}
## Ngajaga CORS issues jeung Font-Icons dina domain anu di-map {#fixing-cors-issues-with-font-icons-in-mapped-domains-1}

Sanggeus mapkeun domain ka sub-site, anjeun bisa nemokkeun yén situs téh keur susah ngabaca font kustom. Éta sababna téh blok lintas origin (cross-origin block) dina pengaturan server anjeun.

Sabab file font hampir salawasna dimuat langsung tina CSS, plugin map domain urang teu bisa nulis ulang URL-na pikeun nganggo domain anu di-map tibatan domain asli, jadi supados masalah téh tiasa diatasi, anjeun kudu ngarobah file konfigurasi server anjeun.

Ieu sababaraha kode pikeun ngabenerkeun masalahna kanggo Apache jeung NGINX. Perubahan ieu butuh élmu anu loba ngeunaan konfigurasi server (file .htaccess jeung file config NGINX). Lamun anjeun teu betah ngarobah éta sorangan, kirimkeun halaman ieu ka agen support penyedia hosting nalika anjeun butuh bantuan.

### Apache {#apache}

Di file .htaccess anjeun, tambihan:

<FilesMatch “.(ttf|ttc|otf|eot|woff|font.css|css)$”> Header set Access-Control-Allow-Origin “*”

### NGINX {#nginx}

Di file config server anjeun (lokasina bisa béda ti server ka server), tambihan:

location ~ .(ttf|ttc|otf|eot|woff|font.css|css)$ { add_header Access-Control-Allow-Origin “*”;}
