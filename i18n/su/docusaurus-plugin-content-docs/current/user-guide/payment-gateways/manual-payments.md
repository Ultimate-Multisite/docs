---
title: Nyetél Pamayaran Manual
sidebar_position: 20
_i18n_hash: 98210a45c3d3af7368f60d7593235163
---
# Nyetél Pangmayaran Manual (v2)

_**CATETAN PENTING: Artikel ieu ngarujuk kana Ultimate Multisite vérsi 2.x.**_

Pangmayaran manual nyaéta cara pikeun anjeun nawarkeun métode pangmayaran séjén lamun **Stripe** atawa **PayPal** teu sadia pikeun pamaké anjeun. Ieu bisa mangrupa transfer kawat atawa transfer bank, atawa métode pangmayaran séjén anu sadia sacara lokal pikeun pamaké anjeun.

## Kumaha ngaktipkeun Pangmayaran Manual {#how-to-enable-manual-payments}

Nyetél pangmayaran manual téh kacida gampangna. Anjeun ngan kudu ngaktipkeunana dina gerbang pangmayaran sarta ngalebetkeun parentah lengkep ngeunaan kumaha pamaké kudu ngirim pangmayaran.

Mimitina, buka **Ultimate Multisite > Setélan > Pangmayaran**. Di handapeun **Gerbang Pangmayaran** , hurungkeun **Manual**. Anjeun bakal ningali yén kotak **Parentah Pangmayaran** bakal nembongan pikeun anjeun.

Tambahkeun kana kotak ieu inpormasi anu diperlukeun ku palanggan anjeun pikeun ngalakukeun pangmayaran. Ieu bisa mangrupa rinci akun bank anjeun jeung email anjeun sangkan palanggan bisa ngirim konfirmasi pangmayaran ka anjeun, contona.

![Togél gerbang pangmayaran manual jeung wewengkon téks Parentah Pangmayaran](/img/config/manual-gateway-expanded.png)

Ieu panganteur setélan gerbang manual:

![Setélan gerbang manual](/img/config/manual-gateway-settings.png)

Sanggeus disetél, cukup klik **Simpen Setélan** sarta éta réngsé. Nalika pamaké ngadaptar ka jaringan anjeun, maranéhna bakal ningali pesen anu ngabéjaan yén maranéhna bakal nampa parentah ti anjeun pikeun ngaréngsékeun pameseran.

![Pesen konfirmasi pendaptaran anu ngabéjaan pamaké yén maranéhna bakal nampa parentah pangmayaran](/img/frontend/registration-manual-notice.png)

Sarta maranéhna ogé bakal nampa pesen dina kaca **Hatur Nuhun** anjeun kalayan parentah pangmayaran anjeun.

<!-- Screenshot unavailable: Thank You page showing payment instructions after checkout -->

## Mastikeun pangmayaran manual {#confirming-manual-payments}

Pikeun mastikeun pangmayaran manual, buka ménu **Pangmayaran** dina palang kénca. Di dinya anjeun bisa ningali sadaya pangmayaran dina jaringan anjeun jeung rincina, kaasup **status**-na. Pangmayaran manual bakal salawasna boga status **Ditangguhkeun** nepi ka anjeun ngarobahna sacara manual.

![Daptar pangmayaran anu némbongkeun pangmayaran manual ditangguhkeun](/img/admin/payments-list.png)

Asup ka kaca pangmayaran ku ngaklik **kode rujukan**. Dina kaca ieu anjeun boga sadaya rinci ngeunaan pangmayaran anu ditangguhkeun, saperti ID rujukan, produk, cap waktu, jeung sajabana.

![Kaca rinci pangmayaran anu némbongkeun kode rujukan, produk, jeung total](/img/admin/payment-edit.png)

Dina kolom katuhu, anjeun bisa ngarobah status pangmayaran. Ngarobahna jadi **Réngsé** jeung **ngahurungkeun pilihan Aktipkeun Kaanggotaan** bakal ngaktipkeun situs palanggan anjeun sarta kaanggotaan maranéhna bakal aktip.

![Kaca édit pangmayaran kalayan Status disetél ka Réngsé jeung togél Aktipkeun Kaanggotaan](/img/admin/payment-activate-membership.png)
