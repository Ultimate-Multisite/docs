---
title: සර්වොජන් මාරුව සත්‍යාපනය
sidebar_position: 16
_i18n_hash: a19bc6263b278573f09cbba17581f632
---
# ආධිපත්‍ය මාරුවීම් තහවුරු කිරීම (Sovereign Migration Verification)

Ultimate Multisite: Multi-Tenancy 1.2.0 හි ස්වෛරී කුලීකරුවන් (sovereign tenant) මාරු කිරීම් සඳහා WP-CLI තහවුරු කිරීමේ විධාන ඇතුළත් වේ. කුලීකුවක් මාරු කිරීම, SSO පිවිසුමක් හෝ වෙනම ස්ථාපනයක් අපේක්ෂිත පරිදි ක්‍රියා නොකරන්නේ නම් ඒවා භාවිතා කරන්න.

## ක්‍රියාත්මක කළ යුතු විධාන (Commands to run) {#commands-to-run}

ජාල WordPress ස්ථාපනයෙන් තහවුරු කිරීම සිදු කරන්න:

```bash
wp tenant verify-no-legacy --site=<site-id>
wp tenant verify-sovereign-push --site=<site-id>
```

ඔබ මාරු කරන කුලීකුව සඳහා site ID භාවිතා කරන්න. පළමු විධානයෙන් කුලීකුව තවදුරටත් පැරණි ජාල දත්ත මත රඳා නොපවතින්නේදැයි පරීක්ෂා කරයි. දෙවන විධානයෙන් ස්වෛරී push රැකියා (jobs) සැකසීමට සහ බැහැර කිරීමට (drain) හැකිද යන්න තහවුරු කරයි.

## පොදු අසාර්ථකතා (Common failures) {#common-failures}

### දත්ත සමුදා අනුමැතිය සත්කාරකයාට නොගැලපේ (Database grants do not match the host) {#database-grants-do-not-match-the-host}

තහවුරු කිරීමෙන් අනුමැතිය හෝ ලේඛක පරිශීලකයාගේ (writer-user) අසාර්ථකතා වාර්තා කරන්නේ නම්, වින්‍යාස කළ දත්ත සමුදා සත්කාරකයා පරීක්ෂා කරන්න. `localhost`, `127.0.0.1`, සහ කන්ටේනර සේවාවක නම MySQL අනුමැතිය සඳහා වෙනස් වේ. කුලීකුව සත්කාරක බැඳීම (tenant host binding) හෝ දත්ත සමුදා අනුමැතිය යාවත්කාලීන කර, නැවත තහවුරු කිරීම ක්‍රියාත්මක කරන්න.

### Bedrock හෝ දේශීය ස්ථාපන සම්බන්ධ විය නොහැක (Bedrock or local installs cannot connect) {#bedrock-or-local-installs-cannot-connect}

Bedrock සහ දේශීය සොකට් ස්ථාපන මගින් දත්ත සමුදා `localhost` ලෙස වාර්තා කළ හැකි නමුත්, runtime එක නෝමල් කර ඇති ලිපිනයක් හරහා සම්බන්ධ වේ. 1.2.0 අනුවාදය එම යන්ත්‍රයේ ඇති සත්කාරක තන්ත්‍ර (host strings) සාමාන්‍යකරණය කරයි, නමුත් අභිරුචි සත්කාරක ආවරණ (custom host overrides) දත්ත සමුදා අනුමැතිය සමඟ ගැටීමට ඉඩ ඇත.

### Asynch push රැකියා පේළිය බැහැර නොවේ (Async push queue does not drain) {#async-push-queue-does-not-drain}

`verify-sovereign-push` අවසන් නොවුණහොත්, Action Scheduler හෝ වින්‍යාස කළ අසමකාලීන ක්‍රියාකරුව (async runner) පරීක්ෂා කරන්න. නැවත උත්සාහ කිරීමට හෝ බැහැර කිරීමට ආරක්ෂිත බව තහවුරු කිරීමෙන් පසු අසාර්ථක රැකියා මකා දැමීමට පමණක් සිදු කරන්න.

### කුලීකුව පරිශීලක ගණන වැරදියි (Tenant user count is wrong) {#tenant-user-count-is-wrong}

මාරු කිරීමේදී ස්වෛරී කුලීකුව සඳහා පරිශීලකයින් සපයනු ඇත. අපේක්ෂිත ස්ථාපන පරිශීලකයා නොමැති නම්, SSO නැවත උත්සාහ කිරීමට පෙර පරිශීලක සැපයුම් පියවර (user provisioning step) නැවත ක්‍රියාත්මක කරන්න.

### SSO පිවිසුම ප්‍රතික්ෂේප වේ (SSO visit is rejected) {#sso-visit-is-rejected}

Stateless tenant autologin වලට ටේන්න්ට් ડોමේන් (tenant domain), ඔරිජින් පින් (origin pin), ටෝකන් අරමුණ (token purpose), නොන්ස් (nonce) සහ කාලය අවසන් වීම (expiry) එකිනෙකට ගැලපිය යුතුයි. SSO විමර්ශනය (SSO visit) ජනනය කිරීමෙන් පසු, ටේන්ට් URL නිවැරදි දැයි තහවුරු කර, ඉක්මනින් ලොග් වීමට උත්සාහ කරන්න.

## නැවත උත්සාහ කළ යුත්තේ කවදාද {#when-to-retry}

සෑම යටිතල පහසුකම් වෙනස් කිරීමකින් පසු තහවුරු කිරීම (verification) නැවත උත්සාහ කරන්න. සියලුම තහවුරු කිරීමේ පරීක්ෂණ සමත් වන තුරු නිෂ්පාදන ගමනාගමනය (production traffic) වෙනස් නොකරන්න, මූලාශ්‍ර දත්ත (source data) මකා නොදමන්න හෝ සංක්‍රමණ නිශ්චිත (migration credentials) ඉවත් නොකරන්න.
