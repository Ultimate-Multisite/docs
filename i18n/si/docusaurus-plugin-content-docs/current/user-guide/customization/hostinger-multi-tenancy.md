---
title: හෝස්ටිංගර් බහු-තමාවාදය
sidebar_position: 8
_i18n_hash: d7facb9c131877c2c834bd2184d9a073
---
# Hostinger Multi-Tenancy

Ultimate Multisite: Multi-Tenancy 1.2.0 එකෙන් Hostinger multi-tenancy හැකියාව එකතු කර තිබෙනවා. ඒක හරියට තියෙන්නේ දැනට තියෙන Hostinger domain-mapping integration එක්ක, සත්කාරක දාම (hosted domains) වලට ස්වෛරී කුලීකරුවන් (sovereign tenants) ලබා දීමේ හැකියාව සමඟයි.

Hostinger hPanel එක හරහා කුලීකරුවන්ගේ දාම සහ වෙන් කළ කුලීකරුවන්ගේ යටිතල පහසුකම් (isolated tenant infrastructure) කළමනාකරණය කරන විට මේ හැකියාව භාවිතා කරන්න.

## Setup notes {#setup-notes}

1. **Ultimate Multisite > Settings > Host Integrations** එක යටතේ core Hostinger integration එක configure කරන්න.
2. Target domain එක හෝ subdomain එක manage කිරීමට Hostinger API token එකට අවසර තිබේදැයි තහවුරු කරගන්න.
3. Multi-Tenancy addon එක enable කරන්න.
4. කුලීකරු ප්‍රකාශයට (publishing) නිකුත් කිරීමට පෙර tenant isolation strategy එක configure කරන්න.
5. production traffic එක tenant වෙත යැවීමට පෙර migration verification workflow එක run කරන්න.

Hostinger හැකියාව සඳහා host-side මෙහෙයුම් සඳහා shared Hostinger connection එක භාවිතා කරනවා. DNS එක තවමත් නිවැරදි Hostinger ගිණුමට pointing විය යුතු අතර, hPanel ගිණුමේ සීමාවන් තවමත් අදාළ වෙනවා.

## Capability-specific changes {#capability-specific-changes}

- host-aware domain operations සමඟ sovereign tenants නිර්මාණය කළ හැකියි.
- grant verification ලබා දීමට පෙර same-machine database host strings normalize කරනු ලැබේ.
- WordPress runtime එකට local override අවශ්‍ය නොවේ නම්, Hostinger-managed tenants විසින් hPanel එකේ පෙන්වන database host value භාවිතා කළ යුතුය.
- SSO visits සඳහා tenant domain එක Hostinger විසින් සත්කාරක කරන ලද tenant වෙත resolution වීම මත රඳා පවතී.

## Troubleshooting Hostinger tenants {#troubleshooting-hostinger-tenants}

- tenant install එකක් අසාර්ථක වුවහොත්, එම domain එක දැනටමත් Hostinger ගිණුමට සම්බන්ධ කර තිබේදැයි තහවුරු කරන්න.
- database verification එක අසාර්ථක වුවහොත්, hPanel සමඟ tenant DB username, database name සහ host binding එක සංසන්දනය කරන්න.
- **Visit (SSO)** අසාර්ථක නම්, tenant domain සඳහා DNS සහ SSL ක්‍රියාත්මක දැයි තහවුරු කරන්න.
- teardown කිරීමෙන් host resources ඉතිරි වී ඇත්නම්, backup කර ඇති බව තහවුරු කිරීමෙන් පසු hPanel එකේ ඉතිරිව ඇති සියලුම databases, users හෝ folders ඉවත් කරන්න.
