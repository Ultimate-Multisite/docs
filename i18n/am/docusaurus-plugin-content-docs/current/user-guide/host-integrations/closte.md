---
title: Closte ማዋሃድ
sidebar_position: 7
_i18n_hash: 8f07c74ab2f7df614f502e0cc089c3e0
---
# Closte ውህደት

## አጠቃላይ እይታ (Overview)
Closte በGoogle Cloud infrastructure ላይ የተገነባ የWordPress hosting platform ነው። ይህ ውህደት (integration) Ultimate Multisite እና Closte መካከል የዶሜይን ስም (domain) መረጃን በራስ-ሰር ማመሳሰል (automatic syncing) እና የSSL certificate አስተዳደርን ያስችላል።

## ባህሪያት (Features)
- በራስ-ሰር የዶሜይን ስም ማመሳሰል
- የSSL certificate አስተዳደር
- Wildcard domain ድጋፍ
- በCloste ላይ እየሰሩ ከሆነ ምንም ቅንብር አያስፈልግም

## የሚያስፈልጉ ነገሮች (Requirements)
Closteን እየተጠቀሙ ከሆነ፣ የሚከተለው constant በ`wp-config.php` ፋይልዎ ውስጥ መገለጽ አለበት፦

```php
define('CLOSTE_CLIENT_API_KEY', 'your_api_key');
```

ይህ constant በአጠቃላይ በCloste ላይ እየሰሩ ከሆነ ቀድሞውኑ ተገልጿል (defined)።

## የማስጫን መመሪያዎች (Setup Instructions)

### 1. የCloste API Keyዎን ማረጋገጥ
በCloste ላይ እየሰሩ ከሆነ፣ የ`CLOSTE_CLIENT_API_KEY` constant በ`wp-config.php` ፋይልዎ ውስጥ ቀድሞውኑ መገለጽ አለበት። ይህንን ለማረጋገጥ የ`wp-config.php` ፋይልዎን መፈተሽ ይችላሉ።

### 2. ውህደቱን ማብራት (Enable the Integration)
1. በWordPress admin ውስጥ፣ ወደ Ultimate Multisite > Settings ይሂዱ።
2. ወደ "Domain Mapping" ታብ ይጓዙ።
3. እስከ "Host Integrations" ድረስ ዝቅ ይሏቸው።
4. የCloste ውህደትን ያብሩ (Enable)።
5. "Save Changes" የሚለውን ይጫኑ።

## እንዴት ይሰራል (How It Works)

በUltimate Multisite ውስጥ አንድ ዶሜይን ሲመዘገብ (mapped)፦

1. ውህደቱ ዶሜይኑ ወደ አፕሊኬሽኑ እንዲጨመር ወደ Closte's API ጥያቄ ይልካል።
2. Closte የSSL certificate አቅርቦትን (provisioning) በራስ-ሰር ይይዛል።
3. የዶሜይን ስም መመዝገብ ሲሰረዝ፣ ውህደቱ ዶሜይኑን ከCloste ያጠፋዋል።

ይህ ውህደት በUltimate Multisite ውስጥ ባለው የDNS check interval ቅንብርም ይሰራል፣ ይህም ስርዓቱ የDNS ስርጭትን (propagation) እና የSSL certificate መውጣትን ምን ያህል ጊዜ እንደሚፈትሽ እንዲያዘጋጁ ያስችላል።

## የዶሜይን መዝገብ መፍጠር (Domain Record Creation)

ይህ ውህደት አንድ ድረ-ገጽ ሲፈጠር ወይም ሲደገም (duplicated)፣ የዶሜይን መዝገብ በራስ-ሰር መፈጠሩን ያረጋግጣል። ይህ በተለይ ለCloste ውህደት በጣም አስፈላጊ ነው፣ ምክንያቱም የዶሜይን መዝገብ መፈጠር Closte API ዶሜይኑን እና የSSL certificate እንዲፈጥር ስለሚያስነሳ ነው።

## ችግር መፍታት (Troubleshooting)

### የAPI ግንኙነት ችግሮች (API Connection Issues)
- የCloste API keyዎ ትክክል መሆኑን ያረጋግጡ።
- የCloste accountዎ አስፈላጊውን ፈቃድ (permissions) እንዳለው ያረጋግጡ።

### የSSL Certificate ችግሮች (SSL Certificate Issues)
- Closte የSSL certificate ለመስጠት ጊዜ ሊወስድ ይችላል (በተለምዶ 5-10 ደቂቃ)።
- ዶሜይኖችዎ ወደ Closte server's IP address በትክክል እየጠቆሙ መሆናቸውን ያረጋግጡ።
- የዶሜይንዎ DNS መዝገቦችን (records) በመፈተሽ በትክክል ተዋቅረዋል መሆናቸውን ያረጋግጡ።

### ዶሜይን አልተጨመረም (Domain Not Added)
- በማንኛውም የስህተት መልዕክት (error messages) የUltimate Multisite logs መፈተሽ።
- ዶሜይኑ ቀድሞውኑ በCloste አለመጨመሩን ያረጋግጡ።
- የዶሜይንዎ DNS መዝገቦች በትክክል ተዋቅረዋል መሆናቸውን ያረጋግጡ።

### የDNS ፍተሻ ክፍተት (DNS Check Interval)
- የSSL certificate መውጣት በጣም ዘግይቷል ብለው ከተሰማዎት፣ በDomain Mapping settings ውስጥ የDNS check intervalን ማስተካከል ይችላሉ።
- መደበኛው ክፍተት 300 ሰከንዶች (5 ደቂቃ) ነው፣ ነገር ግን በሙከራ ጊዜ ፈጣን ፍተሻ እንዲኖርዎ እስከ 10 ሰከንዶች ድረስ ማዘጋጀት ይችላሉ።
