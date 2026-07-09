---
title: Yog zoo siv site
sidebar_position: 18
_i18n_hash: 7470e8d04c1f380b3dca6ba5559b34f5
---
# ជំនាញ Site Specification {#site-specification-skill}

**Site Specification skill** គឺជាវិធីរៀបចំជាលំដាប់ដើម្បីចាប់យកគោលដៅរបស់គេហទំព័ររបស់អ្នក អ្នកប្រើប្រាស់ និងអត្តសញ្ញាណម៉ាកយីហោ។ ព័ត៌មាននេះនឹងត្រូវបានរក្សាទុកក្នុង **site_brief** memory របស់អ្នក ដែល Agent ផ្សេងៗនឹងមើលទៅលើគ្រប់វគ្គដើម្បីផ្តល់ជំនួយដែលស៊ីសង្វាក់គ្នា និងយល់ពីបរិបទ។

## Site Specification ជាអ្វី? {#what-is-site-specification}

Site Specification គឺជាដំណើរការនៃការកត់ត្រា៖

- **គោលបំណងគេហទំព័រ (Site purpose)**: អ្វីដែលគេហទំព័ររបស់អ្នកធ្វើ និងហេតុអ្វីបានជាវាមាន
- **អ្នកប្រើប្រាស់គោលដៅ (Target audience)**: អ្នកណាខ្លះចូលមើលគេហទំព័ររបស់អ្នក ហើយពួកគេត្រូវការអ្វីខ្លះ
- **អត្តសញ្ញាណម៉ាកយីហោ (Brand identity)**: ពណ៌ សម្លេង និងរចនាបថរូបភាពរបស់អ្នក
- **គោលដៅអាជីវកម្ម (Business goals)**: តើភាពជោគជ័យសម្រាប់គេហទំព័ររបស់អ្នកមើលទៅដូចម្តេច
- **រចនាសម្ព័ន្ធខ្លឹមសារ (Content structure)**: គេហទំព័ររបស់អ្នកត្រូវបានរៀបចំយ៉ាងដូចម្តេច

ការកំណត់សម្គាល់នេះនឹងក្លាយជា **site_brief** របស់អ្នក ដែលជាអង្គចងចាំជាប់លាប់ដែល Agent ប្រើដើម្បីយល់ពីបរិបទនៃគេហទំព័ររបស់អ្នក។

## ហេតុអ្វីបានជាត្រូវប្រើ Site Specification? {#why-use-site-specification}

### ការស៊ីសង្វាក់គ្នាឆ្លងវគ្គ (Consistency Across Sessions) {#consistency-across-sessions}

បើគ្មាន site_brief អ្នកនឹងត្រូវពន្យល់ពីគោលបំណងគេហទំព័ររបស់អ្នកឡើងវិញរាល់ពេលចាប់ផ្តើមវគ្គថ្មី។ ជាមួយវា Agent នឹងយល់ភ្លាមៗថា៖

- គោលដៅ និងអ្នកប្រើប្រាស់របស់គេហទំព័រអ្នក
- ពណ៌ និងសម្លេងម៉ាកយីហោរបស់អ្នក
- រចនាសម្ព័ន្ធខ្លឹមសាររបស់អ្នក
- គោលបំណងអាជីវកម្មរបស់អ្នក

### ការផ្តល់អនុសាសន៍កាន់តែល្អ (Better Recommendations) {#better-recommendations}

Agent ប្រើ site_brief របស់អ្នកដើម្បី៖

- ស្នើសុំមុខងារដែលត្រូវនឹងគោលបំណងគេហទំព័ររបស់អ្នក
- ណែនាំរចនាសម្ព័ន្ធខ្លឹមសារដែលត្រូវនឹងគោលដៅរបស់អ្នក
- ផ្តល់សំណើការរចនាដែលស៊ីសង្វាក់ជាមួយម៉ាកយីហោរបស់អ្នក
- ជៀសវាងការស្នើសុំមុខងារដែលមិនសមស្របគ្នា

### ការចាប់ផ្តើមប្រើប្រាស់កាន់តែលឿន (Faster Onboarding) {#faster-onboarding}

Agent ថ្មី (ឬ Agent ក្នុងវគ្គថ្មី) អាចឆាប់យល់បានដោយអាន site_brief របស់អ្នកជំនួសឱ្យការសួរសំណួរដើម្បីពន្យល់។

## ការចាប់ផ្តើម Site Specification {#initiating-site-specification}

### ក្នុងអំឡុងពេល Onboarding Theme Builder {#during-theme-builder-onboarding}

ជំនាញ Site Specification នឹងត្រូវបានចាប់ផ្តើមដោយស្វ័យប្រវត្តិក្នុងអំឡុងពេល **Theme Builder onboarding flow**។ Agent Setup Assistant នឹងសួរសំណួរ និងបង្កើត site_brief របស់អ្នក។

### ការចាប់ផ្តើមដោយដៃ (Manual Initiation) {#manual-initiation}

ເຈົ້າສາມາດເລີ່ມ Site Specification ໄດ້ທຸກເວລາ:

```
"ຂໍກຳນົດສະເພາະຂອງເວັບໄຊຂອງຂ້ອຍ"
```

ຫຼື

```
"ຊ່ວຍຂ້ອຍສ້າງ site brief"
```

## ຂັ້ນຕອນການເຮັດ Site Specification {#the-site-specification-process}

### ຂັ້ນຕອນທີ 1: ຈຸດປະສົງຂອງເວັບໄຊ (Site Purpose) {#step-1-site-purpose}

Agent ຈະຖາມວ່າ:

```
ຈຸດປະສົງຫຼັກຂອງເວັບໄຊເຈົ້າແມ່ນຫຍັງ?
- ຮ້ານຄ້າອີເລັກໂຄນິກ (E-commerce store)
- ເບລັອກ ຫຼື ເວັບໄຊເນື້ອຫາ (Blog or content site)
- ຕຳແໜ່ງງານ ຫຼື ການສະແດງຜົນ (Portfolio or showcase)
- ແອັບ SaaS (SaaS application)
- ຊຸມຊົນ ຫຼື ເຟອມ (Community or forum)
- ອື່ນໆ: [ອະທິບາຍ]
```

ເຈົ້າສາມາດເລືອກປະເພດ ຫຼື ບອກຈຸດປະສົງຂອງເຈົ້າເອງໄດ້.

### ຂັ້ນຕອນທີ 2: ກຸ່ມເປົ້າໝາຍ (Target Audience) {#step-2-target-audience}

```
ກຸ່ມເປົ້າໝາຍຫຼັກຂອງເຈົ້າແມ່ນໃຜ?
- ຄົນໃຊ້ທົ່ວໄປ / ສາທາລະນະຊົນ
- ມືອາຊີບທາງທຸລະກິດ
- ນັກພັດທະນາ / ຜູ້ໃຊ້ດ້ານເຕັກນິກ
- ນັກຮຽນ / ຄູອາຈານ
- ອື່ນໆ: [ອະທິບາຍ]

ຄວາມຕ້ອງການຫຼັກຂອງເຂົາເຈົ້າແມ່ນຫຍັງ?
```

### ຂັ້ນຕອນທີ 3: ຮູບແບບແບຣນ (Brand Identity) {#step-3-brand-identity}

```
ສີຂອງແບຣນເຈົ້າແມ່ນຫຍັງ?
- ສີຫຼັກ: [ເລືອກສີ ຫຼື code hex]
- ສີຮອງ: [ເລືອກສີ ຫຼື code hex]
- ສີເນັ້ນ: [ທາງເລືອກ]

ເຈົ້າຈະອະທິບາຍໂທນຂອງແບຣນເຈົ້າໄດ້ແນວໃດ?
- ເປັນມືອາຊີບ / องค์กร (Professional / corporate)
- ມີຄວາມຄິດສ້າງສັນ / ສິລະປະ (Creative / artistic)
- ເປັນມ່ວນຊື່ນ / ທຳມະດາ (Playful / casual)
- ຂັ້ນຕ່ຳ / ທັນສະໄໝ (Minimal / modern)
- ອົບອຸ່ນ / ເປັນມິດ (Warm / friendly)
```

### ຂັ້ນຕອນທີ 4: ເປົ້າໝາຍທາງທຸລະກິດ (Business Goals) {#step-4-business-goals}

```
ຄວາມສຳເລັດຂອງເວັບໄຊເຈົ້າເບິ່ງເປັນແນວໃດ?
- ສ້າງລູກຄ້າໂອກາດ (Generate leads)
- ຂາຍຜະລິດຕະພັນ (Sell products)
- ສ້າງຊຸມຊົນ (Build community)
- ແບ່ງປັນຄວາມຮູ້ (Share knowledge)
- ສ້າງຄວາມໜ້າເຊື່ອຖື (Establish authority)
- ອື່ນໆ: [ອະທິບາຍ]

ຕົວວັດແທກຫຼັກຂອງເຈົ້າແມ່ນຫຍັງ?
- ລາຍຮັບ (Revenue)
- ການມີສ່ວນຮ່ວມຂອງຜູ້ໃຊ້ (User engagement)
- ການເຂົ້າເຖິງເນື້ອຫາ (Content reach)
- ການປ່ຽນເປັນລູກຄ້າ (Conversions)
- ອື່ນໆ
```

### ຂັ້ນຕອນທີ 5: ໂຄງສ້າງເນື້ອຫາ (Content Structure) {#step-5-content-structure}

```
ເນື້ອຫາຂອງເຈົ້າຈັດລະບຽບແນວໃດ?
- ແບບປளுບ (Flat - ເນື້ອຫາທັງໝົດຢູ່ໃນລະດັບດຽວກັນ)
- ແບບມີลำดับຊັ້ນ (Hierarchical - ປະເພດ ແລະ ປະເພດຍ່ອຍ)
- ແບບຕາມເວລາ (Chronological - ແບບບລັອກ)
- ແບບອີງໃສ່ຜະລິດຕະພັນ (Product-based - ຄະຕ catalog)
- ອື່ນໆ: [ອະທິບາຍ]

ເຈົ້າໃຊ້ເນື້ອຫາປະເພດໃດແດ່?
- ບລັອກ (Blog posts)
- ໜ້າຜະລິດຕະພັນ (Product pages)
- ກໍລະນີສຶກສາ (Case studies)
- ເອກະສານອ້າງອີງ (Documentation)
- ວິດີໂອ (Videos)
- ອື່ນໆ
```

## ຊ່ອງຈຳຂອງ site_brief ຂອງເຈົ້າ (Your site_brief Memory) {#your-sitebrief-memory}

ຫຼັງຈາກເຮັດ Site Specification ແລ້ວ, ຂໍ້ມູນຂອງເຈົ້າຈະຖືກເກັບໄວ້ເປັນ **site_brief** ໃນ Agent memory. ນີ້ແມ່ນບັນທຶກທີ່ມີໂຄງສ້າງທີ່ບັນຈຸ:

## Xem và Cập nhật tóm tắt trang web của bạn (site_brief) {#viewing-and-updating-your-sitebrief}

### Xem tóm tắt trang web của bạn {#view-your-sitebrief}

Hãy hỏi trợ lý này:

```
"Show me my site brief"
```

hoặc

```
"What do you know about my site?"
```

Trợ lý sẽ hiển thị thông tin chi tiết mà bạn đã lưu.

### Cập nhật tóm tắt trang web của bạn {#update-your-sitebrief}

Nếu trang web của bạn thay đổi, bạn có thể cập nhật nó:

```
"Update my site brief: we're now targeting B2B customers"
```

hoặc

```
"Refresh my site specification"
```

Việc này sẽ chạy lại kỹ năng Site Specification với thông tin hiện có của bạn làm điểm khởi đầu.

## Trợ lý sử dụng tóm tắt trang web như thế nào {#how-agents-use-sitebrief}

### Đề xuất thiết kế (Design Recommendations) {#design-recommendations}

Khi bạn yêu cầu thay đổi về thiết kế, trợ lý sẽ tham khảo tóm tắt trang web của bạn:

```
Bạn: "Redesign my homepage"
Trợ lý: "Dựa trên tóm tắt trang web của bạn, bạn đang nhắm đến phụ nữ từ 25-45 tuổi
với giọng văn ấm áp, thủ công mỹ nghệ. Tôi sẽ tạo một thiết kế nhấn mạnh
trang sức làm bằng tay và các giá trị bền vững của bạn."
```

### Đề xuất tính năng (Feature Suggestions) {#feature-suggestions}

Trợ lý đề xuất các tính năng phù hợp với mục tiêu của bạn:

```
Bạn: "What features should I add?"
Trợ lý: "Đối với một cửa hàng thương mại điện tử tập trung vào lòng trung thành của khách hàng,
tôi đề xuất: chương trình khách hàng thân thiết (loyalty program), đánh giá của khách hàng,
bản tin email và gợi ý sản phẩm."
```

### Cấu trúc nội dung (Content Structure) {#content-structure}

Trợ lý sẽ đề xuất cách sắp xếp nội dung dựa trên cấu trúc bạn đã có:

Kuv: "Ib txhaw kuv blog zoo li cas?"
Agent: "Kuv yuav txhob hauv catalog ntawm blog uas koj siv, kuv yuav saib tias koj yuav txhob hloov posts zoo li txoj kev tsoom hauv qauv (product category) thiab ua 'styling guides' uas tsoom tau cov khoom ntau rau sab nrhiav."

## Kev Ua Zoo Hauv Kev Tsiagana (Best Practices) {#best-practices}

### Yog Koj Yuav Txhob Cuag Kev Zoo (Be Specific) {#be-specific}

Tsis txhob hais tias "txhua tus neeg," hais txog cov neeg uas koj xav txhua yam:

- ✓ "Cov lub niam uas muaj 25-45 taum, uas xav tau kev ua tsaug rau fashion uas tsim los ntawm cov khoom zoo"
- ✗ "Txhua tus neeg"

### Tsoom Kev Zoo Thim Hauv Kev Ua Zoo (Update Regularly) {#update-regularly}

Thaum koj lub website muaj kev loj, hais txog site_brief cua koj:

- Tha uas koj tsim los ua qauv neeg tshiab
- Tha koj rooj khoom tshiab ntau dua
- Tha koj lub ntseeg brand (brand identity) sib hèn
- Tha cov tswv txhua yam ntawm koj lub ceeb (business goals) sib hèn

### Siv Kev Hloov Neeg Ua Zoo (Use Consistent Terminology) {#use-consistent-terminology}

Siv cov lus uas sib txawv hauv txhua tus:

- ✓ Tsis txhob hais "sustainable jewelry" (tshiab los ntawm "eco-friendly jewelry" thiab "green products")
- ✓ Siv lub npe neeg uas koj xav txhua yam ua ib qho kev sib txawv

### Tiv Thaiv Kev Hloov Neeg Ua Zoo (Include Context) {#include-context}

Tsoom cov ntawv tsoom uas yuav pab tau cov agent paub ti koj yuav ua li:

- "Peb tsim los ntawm cov neeg uas xav tau kev zoo tshaj plaws dua txhua yam los ntawm kev txhais"
- "Cov neeg uas peb muaj yog leej twg thiab xav tau desain uas moden"
- "Peb yog startup uas tsim los ntawm cov khoom, kaya tsis paub, ti neeg peb yuav txhob siv cov kev tsoom zoo hauv txoj kev txhais"

## Kev Puaj Kev Zoo (Relationship to Theme Builder Onboarding) {#relationship-to-theme-builder-onboarding}

Cov skill Site Specification tau hauv **Theme Builder onboarding flow** los. Tha koj tsim los ua tau, site_brief cua koj yuav tsim los los ntawm cov ntaub uas koj tsoom.

Koj tseem muaj lub caijau los ua Site Specification txawm ti koj xav:

- Tsoom qab koj lub specification hauv kev tsim los
- Ua site_brief cua koj tshiab thaum koj lub website loj dua
- Tsim spec zoo nkauj tsis txhob mus rau Theme Builder

## Kev Tswv Kev Zoo (Troubleshooting) {#troubleshooting}

**Koj lub site_brief tsis tau siv**
- Tsoom qab ti cov agent muaj cai rau memory
- Haiv rau cov agent hais "recall my site brief"
- Tsoom qab ti memory muaj kev tsim los hauv koj settings

**Kuv xav yuav muaj txhua site\_brief shiyab**
- Kuj hais rau agent: "Clear my site brief and start fresh" (Tsoom site brief koj thiab hauv tshiab)
- Tsis txhob txhob run Site Specification yim yim.

**Agent yuav tshawb hais cov lus qhia uas tsis hlooh rau site\_brief koj**
- Kuj hais rau agent: "review my site brief" (tsuaj txog site brief koj)
- Txhawm rau muaj site\_brief zoo dua heev.
- Muaj cov ntaub ntawv tsis txhob hlooh los ntawm koj lub haujlwm uas ua rau nws tsis zoo.

## Cov qhov uas yuav ua los (Next Steps) {#next-steps}

Thaum koj tsoom koj site specification tawm:

1. **Use Theme Builder**: Tsim theme uas muaj kawm tshiab hauv site\_brief koj
2. **Refine Design**: Siv Design System Aesthetics skill rau cov khoom tsim phau uas zoo heev
3. **Plan Content**: Haiv rau agents hais txog qhov kev tsim phau ntawm cov ntaub ntawv (content structure recommendations)
4. **Build Features**: Xav tau cov feature uas hlooh rau tus qhov muag uas koj xav ua

**Txhua yam uas yuav tsis txhob thov:**
- Code: fenced code blocks, inline code, import statements, variable/function/class/hook names
- MDX/JSX tags and attributes (e.g. <Tabs>, <AddonBanner>)
- URLs, file paths, anchor links, cross-references
- Product/brand names: Ultimate Multisite, WordPress, WooCommerce, PHP, MySQL, Stripe, etc.
- HTML tags and attributes
- Frontmatter (the --- delimited header) — nws yuav tsis muaj hauv le yam no
