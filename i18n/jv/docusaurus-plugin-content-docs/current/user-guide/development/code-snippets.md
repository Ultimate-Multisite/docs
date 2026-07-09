---
title: Cuplikan Kode
sidebar_position: 1
_i18n_hash: 2284b14474d86f665fa7c84cc305553e
---
# Cuplikan Kode kanggo v2 {#code-snippets-for-v2}

Intine, cuplikan kode kanggo **WordPress** iku digunakake kanggo nindakake tumindak tartamtu sing biasane butuh plugin cilik dhewe. Cuplikan kode kaya ngene iki ditempatake ing salah siji file inti WordPress utawa tema (biasane file functions.php saka tema sampeyan) utawa bisa uga dienggo minangka MU plugin.

Ing artikel iki kita bakal nunjukake telung cuplikan kode sing bisa digunakake karo **Ultimate Multisite v2**:

  * [**Ngubah posisi item menu Account**](#changing-the-position-of-the-account-menu-item)

  * [**Cara ngecek yen user ana ing rencana tartamtu lan/utawa duwe langganan aktif**](#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription)

  * [**Ngarap masalah CORS karo Font-Icons ing domain sing dipetakan**](#fixing-cors-issues-with-font-icons-in-mapped-domains)

## Ngubah posisi item menu Account {#changing-the-position-of-the-account-menu-item}

Kanggo ngubah posisi item menu Account ing Dashboard klienmu, cukup tambahkan cuplikan kode iki menyang file functions.php saka tema utama situsmu sing aktif. Sampeyan uga bisa nempatake cuplikan kasebut ing salah siji mu-plugin utawa custom plugin sampeyan.

add_filter('wu_my_account_menu_position', function() { return 10; // Sesuaikan nilai iki kanggo nempatake menu ing posisi sing diinginkan.

Kanggo kanggo ngecek yen langganan wis aktif, sampeyan bisa nggunakake fungsi iki:

`wu_is_active_subscriber($user_id)`

Ing ngisor iki conto kode sing ngecek apa pengguna saiki ana ing paket tartamtu (_Plan ID 50_) lan yen langganan pengguna aktif.

`$user_id = get_current_user_id(); $plan_id = 50; if (wu_has_plan($user_id, $plan_id) && wu_is_active_subscriber($user_id)) { // PENGGUNA MERUPAKAN ANGGOTA PAKET LAN LANGGANANNYA AKTIF, LAKUKAN SESUATU } else { // PENGGUNA DUDUK PAKET -- ATAU -- LANGGANANNYA ora Aktif, LAKUKAN SESUATU Liyane } // end if;`

Cathet yen `_**wu_has_plan**_` butuh "Plan ID" supaya bisa makarya.

Kanggo nggolek ID paket, sampeyan bisa menyang **Ultimate Multisite > Products**. ID saben produk bakal ditunjuka ing sisi tengene tabel.

Cathet yen pengguna mung bisa langganan **Paket** (_Plan_), ora bisa Paket utawa Layanan, amarga iku mung tambahan kanggo **Paket**.

![Products list showing plan IDs](/img/admin/products-list.png)

## Nggolek Solusi Masalah CORS karo Font-Icons ing domain sing dipetakan {#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription}
## Nggolek Solusi Masalah CORS karo Font-Icons ing domain sing dipetakan {#fixing-cors-issues-with-font-icons-in-mapped-domains}

Sawise maperang domain menyang sub-site, sampeyan bisa nemokake yen situs kasebut angel muat font khusus. Iku disebabkan oleh blok lintas-asal (_cross-origin block_) ing pengaturan server sampeyan.

Amarga file font hampir selalu dimuat langsung saka CSS, plugin pemetaan domain kita ora bisa nulis ulang URL supaya nggunakake domain sing dipetakan tinimbang sing asli. Dadi kanggo ngatasi masalah iki, sampeyan bakal perlu ngowahi file konfigurasi server sampeyan.

Kanggo kanggo ngatasi masalah iki kanggo Apache lan NGINX. Perubahan iki butuh ilmu sing luwih jero babagan file konfigurasi server (.htaccess lan file config NGINX). Yen sampeyan ora nyaman nggawe perubahan kasebut dhewe, kirim wae halaman iki menyang agen dukungan penyedia hosting nalika butuh bantuan.

### Apache {#fixing-cors-issues-with-font-icons-in-mapped-domains-1}

Ing file .htaccess sampeyan, tambahkan:

<FilesMatch “.(ttf|ttc|otf|eot|woff|font.css|css)$”> Header set Access-Control-Allow-Origin “*”

### NGINX {#apache}

Ing file config server (lokasine beda saka server menyang server), tambahkan:

location ~ .(ttf|ttc|otf|eot|woff|font.css|css)$ { add_header Access-Control-Allow-Origin “*”;}
