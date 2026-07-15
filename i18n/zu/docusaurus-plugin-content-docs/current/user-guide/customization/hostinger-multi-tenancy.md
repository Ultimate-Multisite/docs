---
title: Hostinger Ukuqashisa Kwabaqashi Abaningi
sidebar_position: 8
_i18n_hash: d7facb9c131877c2c834bd2184d9a073
---
# Hostinger Multi-Tenancy

Ultimate Multisite: Multi-Tenancy 1.2.0 yengeza ikhono le-Hostinger multi-tenancy ukuze ama-domain asingathiwe akwazi ukubamba iqhaza ekulungiselelweni kwama-tenant azimele kanye nokuhlanganiswa okukhona kwe-Hostinger domain-mapping.

Sebenzisa leli khono lapho ama-domain ama-tenant nengqalasizinda yama-tenant ehlukanisiwe kuphethwe nge-Hostinger hPanel.

## Amanothi okusetha {#setup-notes}

1. Lungiselela ukuhlanganiswa okuyisisekelo kwe-Hostinger ngaphansi kokuthi **Ultimate Multisite > Settings > Host Integrations**.
2. Qinisekisa ukuthi i-Hostinger API token ingaphatha i-domain noma i-subdomain eqondiwe.
3. Nika amandla i-addon ye-Multi-Tenancy.
4. Lungiselela isu lokuhlukanisa i-tenant ngaphambi kokushicilela i-tenant.
5. Qalisa inqubo yokuqinisekisa ukufuduka ngaphambi kokuthumela ithrafikhi yokukhiqiza ku-tenant.

Ikhono le-Hostinger lisebenzisa ukuxhumeka okwabiwe kwe-Hostinger emisebenzini yohlangothi lwe-host. I-DNS kusamele ikhombe ku-Account ye-Hostinger efanele, futhi imikhawulo ye-akhawunti ye-hPanel isasebenza.

## Izinguquko eziqondene naleli khono {#capability-specific-changes}

- Ama-tenant azimele angadalwa ngemisebenzi yama-domain eqaphela i-host.
- Izintambo ze-host ye-database emshinini ofanayo zenziwa zibe sesimweni esijwayelekile ngaphambi kokuqinisekisa izimvume.
- Ama-tenant aphethwe yi-Hostinger kufanele asebenzise inani le-host ye-database eliboniswa ku-hPanel ngaphandle uma i-WordPress runtime idinga ukweqa kwasendaweni.
- Ukuvakasha kwe-SSO kuncike ekutheni i-domain ye-tenant ixazululeke iye ku-tenant esingathwe yi-Hostinger.

## Ukuxazulula izinkinga zama-tenant e-Hostinger {#troubleshooting-hostinger-tenants}

- Uma ukufakwa kwe-tenant kwehluleka, qinisekisa ukuthi i-domain isivele inamathiselwe ku-Account ye-Hostinger.
- Uma ukuqinisekiswa kwe-database kwehluleka, qhathanisa igama lomsebenzisi le-DB ye-tenant, igama le-database, nokubophezela kwe-host ne-hPanel.
- Uma **Visit (SSO)** kwehluleka, qinisekisa ukuthi i-DNS ne-SSL kusebenzile ku-domain ye-tenant.
- Uma ukususwa kushiya izinsiza ze-host ngemuva, susa noma yimaphi ama-database, abasebenzisi, noma amafolda asele ku-hPanel ngemva kokuqinisekisa ama-backup.
