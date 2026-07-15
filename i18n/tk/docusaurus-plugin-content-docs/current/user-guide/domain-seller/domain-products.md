---
title: Alanlar we narapdaşlyk
sidebar_position: 2
_i18n_hash: 48757ad5b423db8f169a793b96d7bc71
---
# Alanlar Ürünleri we Narahatlik (Pricing)

Alanlar ürünleri, narahatlik (pricing), TLD'ler (Top-Level Domains), WHOIS gizliliği we provayderini saýlaýan usullar barada size kontrol bermegi üçündir. Her bir alanlar ürünü standart Multisite Ultimate ürünü bolup, ona **Domain Settings** tabyny hasaplaýan ek tab aşakdaky ýaly.

## Alanlar ürünü döretmek {#creating-a-domain-product}

1. **Network Admin › Ultimate Multisite › Products** bilen gitdirin
2. **Add New** (New goşmak) basyň
3. Ürün turyny **Domain** diýlip saýlaň
4. **Domain Settings** tabyny görkeziji we sazlamalary (aşağda görkeziň) görkeziň
5. Saýlaň

Alanlar ürünleri ürünler listinde mor **Domain** belgi bilen görünýär we **Domain Products** tabyny ulanman bilen filtrlenebilir.

## Domain settings taby {#domain-settings-tab}

### Provider (Provayder) {#provider}

Bu ürün üçin resminamany kimdir işlediklerini saýlaň. Bu, Domain Seller sazlamalarynda goýulan global **Default provider** (Default provayder) bilen sazlanýar.

### Supported TLDs (Durnuklary Goldan Alanlar) {#supported-tlds}

Biri başga produkt bilen eşleşme tapylmasa, ähli TLD'lere (toplanma) tapan **catch-all product** döretmek üçin boş qalaň.

Başga bir produkt bilen eşleşmese, belli bir uzantylara (TLD) degişli bolan bir produkt döretmek üçin TLD'ler listini (mysal üçin `.com, .net, .org`) ayırýan sanly listi giripdiň.

**Produkt eşleşmesi nädip işläýär:** Müşteri domen peshleşdirse, addon iň aniq eşleşen produkt bilen işe ynanyşar. TLD listinde `.com` bolan produkt başga bir catch-all produktdan öňünde has uly hakka malikdir. Eger hiç hili TLD-spesifik produkt eşleşmese, catch-all produkt ulanylýar. Produkt ýok bolsa, domen peshleşdirilmezi görkezilýär.

### Markup tipi {#markup-type}

Sizi saýlaw narjy (retail price) howa salmak üçin wholesale maliýeden nädip hasaplaýjanyňyz üçin üç model işlemekde ulanylýan usullar:

| Mode | Nasıl işləyir |
|---|---|
| **Percentage** | Təchizatçı (wholesale) xərci üzərin bir faiz əlavə edir. 10 dollarlı təchizatçı domenə 20% artım qoyursunuzsa, bu 12 dollara olur. |
| **Fixed markup** | Sabit dollar məbləğ əlavə edirsiniz. 10 dollarlı bir domainə 5 dollar artım qoysanız, bu 15 dollara olur. |
| **Fixed price** | Təchizatçı xərci ilə tamamilə baş çəkir. Daim daxil etdiyiniz məbləği yükləyir. |

### Giriş qiymətləndirməsi (Introductory pricing) {#introductory-pricing}

İlk il üçün endirimli qiymət təklif etmək imkanı verir. Normal **Yenilənmə qiyməti** (2-ci ildən başlayır) ilə yanaşı, ayrıca bir **Giriş qiyməti** (1-ci il qiyməti) qoyun. Müştəri ödəniş zamanı hər iki qiyməti görəcək ki, yenilənmədə nə gözləyəcəyini bilsin.

### WHOIS gizliliyi (WHOIS privacy) {#whois-privacy}

Bu məhsul vasitəsilə qeydiyyatdan keçmiş domenlər üçün WHOIS gizliliyi qorunmasının təklif edilməsini idarə edir.

| Setting | İşlemi |
|---|---|
| **Disabled** | WHOIS gizliliği heç bir vaat edilmez ýa-da işleýär. |
| **Always Included** | WHOIS gizliliği hakdaşylykda (registration) we pulsuz bilen awtomatiki wepleşdirilip bilner. |
| **Customer Choice** | Satyn alyş aşamasyna (checkout) bir çyzyk görkezýär. **Gizlilik bahasy** (Privacy price) ýyllyk üçin almak üçin goýmak ýa-da onu pulsuz teklip etmek üçin $0 bilen saýlaň. |

Namecheap üçin WHOIS gizliliği WhoisGuard ulanyp, bu her wagt pulsuzdyr. OpenSRS üçin olaryny özleriň gizlilik hyzmatyny ulanyp bilýär (göçülikde ýagdaýa görä bahasy bolup biler).

---

## TLD import we senkronizasiýa {#tld-import-and-sync}

Domain önümçilikleri (products) baglan hyzmat edijiden (provider) alnan gerwaha (wholesale pricing) hem-de wagtlaýyn ýagdaýda görkezýär. Bu işlemek üçin, TLDler (Top-Level Domains) import edilmelidir.

**Manuel senkronizasiýa:** Settings › Domain Seller › Sync TLDs (her bir provayder üçin)
**Awtotik senkronizasiýa:** Barlanan ähli provayderler boýunça her gün terjimelen cron işi arkaly amalaşýar

Senkronizasiýadan soň, har bir domain önüminiň Domain Settings tabyna gitdir we TLD picker-y bilen barada bolan TLDleri we olaryň häzirki tolmalar narjy bilen görüp bilersiňiz.

---

## Awtotik seretme (Auto-renewal) {#auto-renewal}

Domain seretmeleri müşderiniň üjeýi statusyna baglanýar:

- Üjeýy seretende we domain birine baglanylanda, domain seretmesi awtomatiki görnüşde ýigdirilýär
- Seretme denemeleri müşderiniň işje edýän tölemek kanaly arkaly amalaşdyrylýar
- Başaramaz seretmeler awtomatiki derejeli geri gelip (exponential backoff) reddenýär
- Başarnyklarynyň üstünlikli seretmeleri, başaramazlyklary we gowşaklanma wagty bar bolanlar üçin elektronik habarlar ýüklenýär

Domain ömür döwrüniň waka dogrylygy üçin elektron poçta şablon IDleri:

| Event | Template ID |
|---|---|
| Domain registered | `domain_registered` |
| Domain renewed | `domain_renewed` |
| Renewal failed | `domain_renewal_failed` |
| Domain expiring soon | `domain_expiring_soon` |

---

## Admin: Manual domain registration {#admin-manual-domain-registration}

Müşteri checkout (satyn alma) prosesinden geçmeden, o müşteräni adına domenini qeydirmek üçin:

1. **Network Admin › Ultimate Multisite › Register Domain** bölümini açyň.
2. Müşderini seçiň we domen adyny giriň.
3. Qeydiyyatdan geçýan ýerlik maglumatlaryny (ad, adres, telefon) tolgawçyň.
4. **Register** düwmenine basyň.

Domeni qeydini döredip müşderini hasaby bilen baglantsylykda saklaýar.
