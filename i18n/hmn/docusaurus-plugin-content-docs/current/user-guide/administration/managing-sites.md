---
title: Tsoom txhua hnub
sidebar_position: 14
_i18n_hash: 520a6eed862c756f0475de6f264632c6
---
# ការគ្រប់គ្រង Site

Site (ឬ subsites) គឺជាចំណុចសំខាន់បំផុតនៃអាជីវកម្ម WaaS របស់អ្នក។ Ultimate Multisite មានប្រភេទ site ៣ យ៉ាង៖

- **Customer-owned** — Site ដែលជាកម្មសិទ្ធិរបស់អតិថិជនជាក់លាក់ម្នាក់ៗ
- **Site Templates** — Site ដែលបានកំណត់ទុកជាមុន ដែលអតិថិជនអាចជ្រើសរើសយកមកប្រើជាចំណុចចាប់ផ្តើមបាន
- **Main Site** — Site មេ (Primary network site) របស់អ្នក

## ការមើល Site {#viewing-sites}

ចូលទៅកាន់ **Ultimate Multisite → Sites** ដើម្បីមើល subsites ទាំងអស់នៅក្នុងបណ្តាញរបស់អ្នក។ រាល់ site នីមួយៗនឹងមានស្លាកប្រភេទ ហើយអ្នកអាចច្រោះ (filter) ដោយ All Sites, Customer-Owned, Templates, ឬ Pending បាន។

![Sites list page](/img/admin/sites-list.png)

## ការបន្ថែម Site ថ្មី {#adding-a-new-site}

ចុចលើប៊ូតុង **Add Site** ដើម្បីបង្កើត site ថ្មី។ អ្នកនឹងត្រូវផ្តល់ព័ត៌មានដូចខាងក្រោម៖

- **Site Title** — ឈ្មោះនៃ site ថ្មី
- **Site URL** — ដែន (domain) ឬផ្លូវ (path) សម្រាប់ site นั้น
- **Site Type** — តើវាជា site របស់អតិថិជន, template, ឬ site ធម្មតា។

ជម្រើស **Copy Site** អនុញ្ញាតឱ្យអ្នកបង្កើត site ថ្មីដោយផ្អែកលើ site template ដែលមានស្រាប់។ នៅពេលបើកដំណើរការ អ្នកអាចជ្រើសរើសយក template មួយណាជាចំណុចចាប់ផ្តើមបាន។ សូមប្រាកដថាបានបើក **Copy Media on Duplication** ដើម្បីបញ្ចូលឯកសារ media ផងដែរ។

## ការគ្រប់គ្រង Site ដែលមានស្រាប់ {#managing-an-existing-site}

ចុចលើ **Manage** នៅលើ site ណាមួយដើម្បីបើកទំព័រ **Edit Site**។ នៅទីនេះ អ្នកនឹងឃើញ៖

### ព័ត៌មានមូលដ្ឋាន (Basic Information) {#basic-information}

ឈ្មោះ site, ប្រភេទ, site ID, និងការពិពណ៌នា។ អ្នកក៏នឹងឃើញដែនដែលបានភ្ជាប់ (mapped domain), សមាជិកដែលពាក់ព័ន្ធ (associated membership), និងគណនីអតិថិជនដែលជាម្ចាស់ site នោះផងដែរ។

### ជម្រើស Site (Site Options) {#site-options}

កំណត់លក្ខណៈសម្បត្តិ និងដែនកំណត់របស់ site៖

- **Visit limits** — ចំនួននៃការចូលមើល site ក្នុងមួយពេលអតិបរមា
- **User account limits** — កំណត់សម្រាប់តួនាទីអ្នកប្រើប្រាស់ម្នាក់ៗ
- **Disk space** — ទំហំផ្ទុកសម្រាប់ site นั้น
- **Custom domain** — បើកដំណើរការការភ្ជាប់ដែន (domain mapping) សម្រាប់ site នេះ
- **Plugin and theme visibility** — ควบคุมថា plugin និង theme ណាខ្លះដែលមើលឃើញ, លាក់ ឬបើកដំណើរការជាមុន

By default, sites follow the limits set at the membership level. Setting limits on the site level will override the membership settings.

### Associations {#associations}

Tha thiaj tsis raug, hauv thluag (site) tawm ua raug li thluag chaw (membership) uas ua raug. Thluag chaw (site) uas ua raug limit-u ua raug thluag chaw (membership) uas ua raug.

Below the site options you'll find information about:

- **Mapped domains** associated with the site
- **Membership** the site is under
- **Customer account** linked to the site

### Right Sidebar {#right-sidebar}

Hauv ib buj (right side) chu, koj yuav los:

- **Enable/disable the site** loom hauv nút toggle
- **Change the site type** lossis reassign ownership
- **Set a site image/thumbnail** (displayed on the frontend for site templates)
- **Delete the site** permanently

:::warning
Deleting a site is irreversible. The site and all its content will be permanently removed.
:::
