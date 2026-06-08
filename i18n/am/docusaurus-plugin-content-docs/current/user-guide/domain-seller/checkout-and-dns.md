---
title: የቼክአውት መስክ እና የደንበኛ DNS
sidebar_position: 3
_i18n_hash: 6723eb72a4f1a6663a643a8d310c2e63
---
# የቼክአውት መስክ እና የደንበኛ DNS አስተዳደር

## የዶሜን ምርጫ የቼክአውት መስክ

የ**Domain Selection** መስክ የደንበኞች የድረ-ገጽ ዶሜን እንዴት ማግኘት እንደሚችሉ ምርጫ የሚሰጥ የቼክአውት አካል ነው። የዶሜን ሽያጭን ለማስቻል ወደ ማንኛውም የቼክአውት ፎርም ይጨምሩት።

### መስኩን ወደ የቼክአውት ፎርም መጨመር

1. ወደ **Network Admin › Ultimate Multisite › Checkout Forms** ይሂዱ።
2. የቼክአውት ፎርም ይክፈቱ ወይም ይፍጠሩ።
3. በቼክአውት አርታኢው ውስጥ **Add Field** ላይ ይጫኑ።
4. ከየመስክ ዝርዝር ውስጥ **Domain Selection** ይምረጡ።
5. የመስኩ አማራጮችን ያቅዱ (በታች ይመልከቱ)።
6. ፎርሙን ያስቀምጡ።

### የመስክ አማራጮች

**የዶሜን ሁነታዎች (Domain modes)** — ደንበኛው የትኞቹ ታቦች እንደሚመለከት ይምረጡ። እያንዳንዱ ሁነታ በራሱ ሊበራ ወይም ሊጠፋ ይችላል፡

| ሁነታ | ምን ያደርጋል |
|---|---|
| **Subdomain** | ደንበኛው በኔትዎርክዎ ላይ ነጻ የንዑስ ዶሜን ይጠቀማል (ለምሳሌ፣ `mysite.yournetwork.com`)። ክፍያ አያስፈልግም። |
| **Register New Domain** | ደንበኛው አዲስ ዶሜን ይፈልጋል እና በቅዱስ አቅራቢዎ (provider) በኩል ይመዝግበዋል። ለዋጋ አወጣጥ የሚስማማውን የዶሜን ምርት ይጠቀማል። |
| **Existing Domain** | ደንበኛው ቀድሞውኑ የራሱ የሆነ ዶሜን ያዛመዳል። የምዝገባ ክፍያ የለም። ዶሜኑ በራስ-ሰር ወደ ድረ-ገጹ ይዛመዳል። |

**የመነሻ ሁነታ (Default mode)** — ሁሉም ሶስቱ ሁነታዎች ሲበሩ፣ የትኛው ታብ በመጀመሪያ ይከፈታል። የዶሜን ምዝገባ አማራጭ እንዲሆን **Subdomain** ላይ ያዘጋጁት፣ ወይም ግዢን ለማበረታታት **Register New Domain** ላይ ያዘጋጁት።

**የዶሜን ምርት (Domain product)** — ይህንን መስክ በঐচ্ছিকভাবে ወደ አንድ የተወሰነ የዶሜን ምርት ማያያዝ ይችላሉ። ካልተቀመጠ፣ አድ-አን (addon) ደንበኛው በሚፈልገው TLD (Top-Level Domain) ላይ በመመስረት የሚስማማውን ምርት በራስ-ሰር ይመርጣል።

### የregistrant contact መስኮች

ደንበኛው **Register New Domain** ታብ ሲመርጥ፣ የቼክአውት ፎርሙ በቦታው የሚከተሉትን የregistrant የእውቂያ መስኮች ይጨምራል፡

- የመጀመሪያ ስም / የመጨረሻ ስም
- የኢሜል አድራሻ
- አድራሻ (የመስመር 1፣ ከተማ፣ ግዛት/ክልል፣ የፖስታ ኮድ፣ ሀገር)
- የስልክ ቁጥር

እነዚህ በሁሉም የregistrars የሚፈለጉ ሲሆኑ እና የምዝገባ API ጥሪ ከመደረጉ በፊት ይረጋገጣሉ። የስልክ ቁጥሮች በregistrars በሚጠበቀው `+CC.NNN` ዓለም አቀፍ ቅርጸት በራስ-ሰር ይቀርጻሉ።

### በራስ-የተፈጠረ የድረ-ገጽ URL

ደንበኛው ዶሜን ሲመዝግበው ወይም ሲያዛምድ፣ የድረ-ገጽ URL መስኩ በምርጫው ዶሜን በራስ-ሰር ይሞላል። ደንበኞች የተለየ URL መስክ መሙላት አያስፈልጋቸውም።

### የፍለጋ ባህሪ (Search behaviour)

- ደንበኛው ሲጽፍ የዶሜን መገኘቱ በቅጽበት (real-time) በAJAX ይፈተሻል።
- ተመራጭ ዶሜን ባይገኝም አማራጭ TLD ጥቆማዎች ይታያሉ።
- ዋጋው በቅጽበት ተሰብስቦ በግልጽ ይታያል (የምዝገባ ዋጋ፣ የቅድመ-ታደስ ዋጋ፣ አማራጭ WHOIS ግላዊነት ክፍያ)።
- የኩፖን ኮዶች ለዶሜን ምርቶች ሁሉንም ምርቶች የሚሰጡት በተመሳሳይ መንገድ ይሠራሉ።

**የፍለጋ ምላሽ ሰጪነትን ማስተካከል (Tuning search responsiveness):**

```php
// የAPI ጥሪዎችን ለመቀነስ (በቀርፋፋ ግንኙነቶች ላይ) የdebounce delayን (በሚሊሰከንዶች) ይጨምሩ
add_filter('wu_domain_seller_search_delay', function($delay) {
    return 800; // default: 500
});
```

**በዶሜን ፍለጋ ፎርም የባለሙያ መስኮችን መጨመር:**

```php
add_filter('wu_checkout_form_register_domain_form_fields', function($fields) {
    $fields['custom_note'] = [
        'type'  => 'text',
        'label' => 'Additional notes',
    ];
    return $fields;
});
```

---

## የደንበኛ DNS አስተዳደር

ደንበኞች የየተመዘገቡባቸው ዶሜኖች የDNS መዝገቦችን በ**My Account** ገጽ፣ በየዶሜኑ መረጃ ስር፣ ማስተዳደር ይችላሉ።

### የሚደገፉ የመዝገብ አይነቶች

| አይነት | አጠቃቀም |
|---|---|
| **A** | የ호ስቶን ስም (hostname)ን ወደ IPv4 አድራሻ ያዛመዳል |
| **AAAA** | የ호ስቶን ስም (hostname)ን ወደ IPv6 አድራሻ ያዛመዳል |
| **CNAME** | ወደ ሌላ የ호ስቶን ስም የሚያመለክት ቅጽል (alias) ይፈጥራል |
| **MX** | የፖስታ ልውውጥ አገልጋዩን (mail exchange server) ያዘጋጃል |
| **TXT** | SPF, DMARC, ማረጋገጫ ወይም ሌላ የጽሑፍ መዝገቦችን ይጨምራል |

### የትኞቹ አቅራቢዎች DNS አስተዳደርን ይደግፋሉ?

የDNS አስተዳደር (መዝገቦችን መጨመር፣ ማርትዕ፣ መሰረዝ) በ**OpenSRS**, **ResellerClub**, እና **Enom** ላይ ይገኛል። Namecheap, GoDaddy, እና NameSilo ዶሜኖች የሁኔታ እና የማብቂያ መረጃን ያሳያሉ፣ ነገር ግን DNS በregistrar's control panel ውስጥ በራሱ መተዳደር አለበት።

### መነሻ DNS መዝገቦች

ዶሜን ሲመዘገብ በራስ-ሰር የሚተገበሩ መነሻ DNS መዝገቦችን ማቅረብ ይችላሉ። ወደ **Settings › Domain Seller › Default DNS Records** ይሂዱ።

የመነሻ መዝገብ እሴቶች ሁለት ቶከኖችን ይደግፋሉ፡

| ቶከን | ምን ይተካዋል |
|---|---|
| `{DOMAIN}` | የተመዘገበውን የዶሜን ስም (ለምሳሌ፣ `example.com`) |
| `{SITE_URL}` | ለደንበኛው ድረ-ገጽ የWordPress site URL |

**ምሳሌ — የዋናውን ዶሜን እና www ወደ የሰርቨር IPዎ ማሳየት:**

```
Type: A
Name: {DOMAIN}
Value: 203.0.113.10

Type: CNAME
Name: www.{DOMAIN}
Value: {DOMAIN}
```

### አስተዳዳሪ: DNSን መመልከት እና ማርትዕ

ኔትወርክ አስተዳዳሪዎች የደንበኛ ዶሜን የDNS መዝገቦችን በ**Network Admin › Ultimate Multisite › Domains** ውስጥ ባለው የዶሜን ማርትዕ ገጽ መመልከት እና ማርትዕ ይችላሉ።
