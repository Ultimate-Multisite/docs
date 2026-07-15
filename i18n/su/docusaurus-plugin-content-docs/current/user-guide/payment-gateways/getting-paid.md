---
title: Narima Bayaran
sidebar_position: 15
_i18n_hash: 7808f514b91797f7ffb68811b12c48be
---
# Meunang Bayaran (v2)

_**CATETAN PENTING: Artikel ieu ngarujuk kana Ultimate Multisite vérsi 2.x.**_

Ultimate Multisite miboga sistem membership jeung tagihan bawaan. Supaya sistem tagihan kami tiasa jalan, kami geus ngahijikeun gateway pamayaran anu paling umum dipaké dina e-commerce. Gateway pamayaran standar dina Ultimate Multisite nyaéta _Stripe_ , _PayPal_ , jeung Pamayaran Manual. Anjeun ogé tiasa nganggo _WooCommerce_ , _GoCardless_ jeung _Payfast_ pikeun narima pamayaran ku cara masang add-on masing-masing.

## Setélan Dasar {#basic-settings}

Anjeun tiasa ngonpigurasikeun salah sahiji gateway pamayaran ieu dina setélan pamayaran Ultimate Multisite. Anjeun tiasa manggihanana ku muka **ménu Ultimate Multisite > Setélan > Pamayaran.**

![Kaca setélan Pamayaran dina Ultimate Multisite anu némbongkeun panel Pamayaran](/img/config/payments-settings-page.png)

Saméméh anjeun nyetél gateway pamayaran, punten tingali heula setélan pamayaran dasar anu tiasa anjeun konpigurasikeun:

**Paksa perpanjangan otomatis** **:** Ieu bakal mastikeun yén pamayaran bakal otomatis diulang dina ahir unggal siklus tagihan gumantung kana frékuénsi tagihan anu dipilih ku pamaké.

<!-- Screenshot unavailable: Force Auto-Renew toggle setting on the Payments settings page -->

Ultimate Multisite v2.13.0 mariksa naha gateway anu aktip miboga kredénsial perpanjangan anu tiasa dipaké deui saméméh nyimpen membership berulang kalayan perpanjangan otomatis diaktipkeun. Kredénsial perpanjangan tiasa mangrupa langganan gateway, kasapukan tagihan, token vault anu disimpen, atawa métode pamayaran anu sarimbag jeung tiasa dipaké deui. Lamun gateway ngalaporkeun yén teu aya kredénsial anu tiasa dipaké, Ultimate Multisite nyimpen membership tapi mareuman perpanjangan otomatis sarta nyatet kaayaan kredénsial anu leungit sangkan administrator atawa alur dukungan tiasa ménta palanggan pikeun ngotorisasi deui pamayaran saméméh tanggal perpanjangan.

Ieu nyegah membership katingali siga otomatis diperpanjang nalika gateway ngan tiasa narima pamayaran sakali. Add-on gateway kedah mastikeun yén checkout berulang nyimpen kredénsial anu tiasa dipaké deui, utamana nalika gateway ngarojong boh modeu pamayaran tangkep sakali boh vault/langganan.

**Idinan uji coba tanpa** **métode pamayaran:** Kalayan pilihan ieu diaktipkeun, client anjeun henteu kudu nambahkeun inpormasi kauangan naon waé salila prosés pendaptaran. Ieu ngan bakal diperlukeun sanggeus période uji coba béak.

<!-- Screenshot unavailable: Allow Trials Without Payment Method toggle on the Payments settings page -->

**Kirim invoice nalika pamayaran dikonfirmasi:** Ieu méré anjeun pilihan naha rék ngirim invoice sanggeus pamayaran atawa henteu. Catet yén pamaké bakal boga aksés kana riwayat pamayaran maranéhanana dina dashboard subsite maranéhanana. Pilihan ieu henteu lumaku pikeun Gateway Manual.

<!-- Screenshot unavailable: Send Invoice on Payment Confirmation toggle on the Payments settings page -->

**Skéma panomoran invoice:** Di dieu, anjeun tiasa milih boh kode rujukan pamayaran boh skéma nomer runtuyan. Lamun anjeun milih ngagunakeun kode rujukan pamayaran pikeun invoice anjeun, anjeun henteu kudu ngonpigurasikeun nanaon. Lamun anjeun milih ngagunakeun skéma nomer runtuyan, anjeun kudu ngonpigurasikeun **nomer invoice salajengna** (Nomer ieu bakal dipaké salaku nomer invoice pikeun invoice salajengna anu dijieun dina sistem. Ieu bakal ditambah hiji unggal aya invoice anyar dijieun. Anjeun tiasa ngarobahna jeung nyimpenna pikeun ngareset nomer runtuyan invoice kana nilai husus) jeung **awalan nomer invoice.**

<!-- Screenshot unavailable: Invoice numbering scheme dropdown with Payment Reference Code and Sequential Number options -->

<!-- Screenshot unavailable: Next invoice number and invoice number prefix fields shown when Sequential Number is selected -->

## Dimana manggihan gateway: {#where-to-find-the-gateways}

Anjeun tiasa nyetél gateway pamayaran dina kaca anu sarua ( **Ultimate Multisite > Setélan > Pamayaran**). Pas di handapeun **gateway pamayaran aktip** , anjeun bakal tiasa ningali: _Stripe_ , _Stripe_ _Checkout_ , _PayPal_ jeung _Manual_.

![Bagian Gateway Pamayaran Aktip anu ngadaptarkeun Stripe, Stripe Checkout, PayPal jeung Manual](/img/config/payments-active-gateways.png)

Kami boga artikel husus pikeun unggal gateway pamayaran anu bakal nungtun anjeun ngaliwatan léngkah-léngkah nyetélna, anu tiasa anjeun manggihan dina tautan di handap.

Anjeun tiasa ningali jeung ngédit wincikan pamayaran:

![Antarmuka édit pamayaran](/img/admin/payment-edit.png)

Ieu tampilan lengkep tina kaca édit pamayaran:

![Antarmuka édit pamayaran lengkep](/img/admin/payment-edit-full.png)

Ieu ogé tampilan lengkep tina setélan gateway pamayaran:

![Kaca lengkep setélan gateway pamayaran](/img/config/settings-payments-gateways-full.png)

**Nyetél gateway Stripe**

**Nyetél gateway PayPal**** **

**Nyetél pamayaran manual**

Ayeuna, lamun anjeun hoyong nganggo _WooCommerce_ , _GoCardless_ atawa _Payfast_ salaku gateway pamayaran anjeun, anjeun kedah **masang jeung ngonpigurasikeun add-on maranéhanana**.

### Kumaha masang add-on WooCommerce: {#how-to-install-the-woocommerce-add-on}

Kami ngartos yén _Stripe_ jeung _PayPal_ henteu sayogi di sababaraha nagara anu ngawatesan atawa ngahalangan pamaké Ultimate Multisite pikeun ngagunakeun plugin kami sacara éféktif. Ku kituna kami nyieun add-on pikeun ngahijikeun _WooCommerce,_ anu mangrupa plugin e-commerce anu pohara populér. Pamekar di sakuliah dunya nyieun add-on pikeun ngahijikeun rupa-rupa gateway pamayaran ka dinya. Kami ngamangpaatkeun ieu pikeun ngalegaan gateway pamayaran anu tiasa anjeun pake jeung sistem tagihan Ultimate Multisite.

_**PENTING:** Ultimate Multisite: WooCommerce Integration merlukeun WooCommerce diaktipkeun sahenteuna dina situs utama anjeun._

Mimiti, punten buka kaca add-on. Anjeun tiasa manggihanana ku muka **Ultimate Multisite > Setélan**. Anjeun kedah ningali tabel **Add-on**. Klik **Pariksa Add-on Kami**.

<!-- Screenshot unavailable: Add-ons table on the Ultimate Multisite Settings sidebar with the Check our Add-ons link -->

Sanggeus ngaklik **Pariksa Add-on Kami** , anjeun bakal dialihkeun ka kaca add-on. Di dieu anjeun tiasa manggihan sadaya add-on Ultimate Multisite. Klik add-on **Ultimate Multisite: WooCommerce Integration**.

![Kaca add-on anu ngadaptarkeun add-on Ultimate Multisite kaasup WooCommerce Integration](/img/addons/addons-page.png)

Jandéla bakal mucunghul kalayan wincikan tambihan. Kantun klik **Pasang Ayeuna**.

<!-- Potret layar teu sadia: dialog wincikan tambihan Ultimate Multisite WooCommerce Integration kalayan tombol Pasang Ayeuna -->

Sanggeus pamasangan réngsé, anjeun bakal dialihkeun ka kaca pangaya. Di dieu, kantun klik **Aktipkeun Jaringan** sarta tambihan WooCommerce bakal diaktipkeun dina jaringan anjeun.

<!-- Potret layar teu sadia: kaca pangaya kalayan tumbu Aktipkeun Jaringan pikeun tambihan WooCommerce Integration -->

Sanggeus ngaktipkeunana, lamun anjeun masih teu acan masang jeung ngaktipkeun pangaya WooCommerce dina situs wéb anjeun, anjeun bakal nampa panginget.

<!-- Potret layar teu sadia: béwara admin anu ngingetkeun pangurus pikeun masang jeung ngaktipkeun pangaya WooCommerce -->

Pikeun maca leuwih seueur ngeunaan tambihan WooCommerce Integration, **klik di dieu**.

### Kumaha masang tambihan GoCardless: {#how-to-install-the-gocardless-add-on}

Léngkah-léngkah pikeun masang tambihan _GoCardless_ ampir sarua jeung tambihan _WooCommerce_. Mangga buka kaca tambihan jeung pilih tambihan **Ultimate Multisite: GoCardless Gateway**.

<!-- Potret layar teu sadia: kaca tambihan kalayan tambihan Ultimate Multisite GoCardless Gateway disorot -->

Jandéla tambihan bakal mucunghul. Klik **Pasang Ayeuna**.

<!-- Potret layar teu sadia: dialog wincikan tambihan Ultimate Multisite GoCardless Gateway kalayan tombol Pasang Ayeuna -->

Sanggeus pamasangan réngsé, anjeun bakal dialihkeun ka kaca pangaya. Di dieu, kantun klik **Aktipkeun Jaringan** sarta tambihan _GoCardless_ bakal diaktipkeun dina jaringan anjeun.

<!-- Potret layar teu sadia: kaca pangaya kalayan tumbu Aktipkeun Jaringan pikeun tambihan GoCardless Gateway -->

Pikeun diajar kumaha ngamimitian nganggo gerbang _GoCardless_, **baca tulisan ieu**.

### Kumaha masang tambihan Payfast: {#how-to-install-the-payfast-add-on}

Buka kaca tambihan jeung pilih tambihan **Ultimate Multisite: Payfast Gateway**.

<!-- Potret layar teu sadia: kaca tambihan kalayan tambihan Ultimate Multisite Payfast Gateway disorot -->

Jandéla tambihan bakal mucunghul. Klik **Pasang Ayeuna.**

<!-- Potret layar teu sadia: dialog wincikan tambihan Ultimate Multisite Payfast Gateway kalayan tombol Pasang Ayeuna -->

Sanggeus pamasangan réngsé, anjeun bakal dialihkeun ka kaca pangaya. Di dieu, kantun klik **Aktipkeun Jaringan** sarta tambihan _Payfast_ bakal diaktipkeun dina jaringan anjeun.

<!-- Potret layar teu sadia: kaca pangaya kalayan tumbu Aktipkeun Jaringan pikeun tambihan Payfast Gateway -->
