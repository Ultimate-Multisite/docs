---
title: ຄຸນສົມບັດຂອງເວັບໄຊທ໌
sidebar_position: 18
_i18n_hash: 7470e8d04c1f380b3dca6ba5559b34f5
---
# ทักษะการกำหนดสเปคเว็บไซต์ (Site Specification Skill)

**ทักษะการกำหนดสเปคเว็บไซต์ (Site Specification skill)** คือวิธีการที่เป็นระบบในการเก็บข้อมูลเกี่ยวกับเป้าหมาย กลุ่มเป้าหมาย และเอกลักษณ์ของแบรนด์สำหรับเว็บไซต์ของคุณ ข้อมูลนี้จะถูกเก็บไว้ในหน่วยความจำที่ชื่อว่า **site_brief** ซึ่งเอเจนต์ต่างๆ จะอ้างถึงข้ามเซสชันเพื่อช่วยให้การช่วยเหลือมีความสม่ำเสมอและเข้าใจบริบทได้ดี

## Site Specification คืออะไร? {#what-is-site-specification}

Site Specification คือกระบวนการบันทึกข้อมูลเหล่านี้:

- **วัตถุประสงค์ของเว็บไซต์ (Site purpose)**: เว็บไซต์ของคุณทำอะไร และมีอยู่เพื่ออะไร
- **กลุ่มเป้าหมาย (Target audience)**: ใครเข้ามาเยี่ยมชมเว็บไซต์ของคุณ และพวกเขาต้องการอะไร
- **เอกลักษณ์ของแบรนด์ (Brand identity)**: สี น้ำเสียง และสไตล์ภาพของคุณ
- **เป้าหมายทางธุรกิจ (Business goals)**: ความสำเร็จสำหรับเว็บไซต์ของคุณมีหน้าตาเป็นอย่างไร
- **โครงสร้างเนื้อหา (Content structure)**: เว็บไซต์ของคุณถูกจัดระเบียบไว้อย่างไร

ข้อมูลเหล่านี้จะกลายเป็น **site_brief** ของคุณ ซึ่งเป็นหน่วยความจำถาวรที่เอเจนต์ใช้เพื่อทำความเข้าใจบริบทของเว็บไซต์ของคุณ

## ทำไมต้องใช้ Site Specification? {#why-use-site-specification}

### ความสม่ำเสมอในทุกเซสชัน (Consistency Across Sessions) {#consistency-across-sessions}

ถ้าไม่มี site_brief คุณจะต้องอธิบายวัตถุประสงค์ของเว็บไซต์ซ้ำทุกครั้งที่คุณเริ่มเซสชันใหม่ แต่เมื่อมีมัน เอเจนต์จะเข้าใจทันทีว่า:

- เป้าหมายและกลุ่มเป้าหมายของเว็บไซต์คุณคืออะไร
- สี น้ำเสียง และเอกลักษณ์ของแบรนด์ของคุณเป็นอย่างไร
- โครงสร้างเนื้อหาของคุณเป็นแบบไหน
- วัตถุประสงค์ทางธุรกิจของคุณคืออะไร

### คำแนะนำที่ดีขึ้น (Better Recommendations) {#better-recommendations}

เอเจนต์จะใช้ site_brief ของคุณเพื่อ:

- แนะนำฟีเจอร์ที่สอดคล้องกับวัตถุประสงค์ของเว็บไซต์คุณ
- แนะนำโครงสร้างเนื้อหาที่ตรงกับเป้าหมายของคุณ
- เสนอการออกแบบที่เข้ากับแบรนด์ของคุณ
- หลีกเลี่ยงการแนะนำฟีเจอร์ที่ไม่เข้ากัน

### การเริ่มต้นใช้งานที่รวดเร็ว (Faster Onboarding) {#faster-onboarding}

เอเจนต์ใหม่ (หรือเอเจนต์ในเซสชันใหม่) สามารถเรียนรู้ได้อย่างรวดเร็วโดยการอ่าน site_brief ของคุณ แทนที่จะต้องถามคำถามเพื่อชี้แจงต่างๆ

## การเริ่มใช้ Site Specification {#initiating-site-specification}

### ระหว่างการเริ่มต้นใช้งาน Theme Builder (During Theme Builder Onboarding) {#during-theme-builder-onboarding}

ทักษะ Site Specification จะถูกเริ่มขึ้นโดยอัตโนมัติในระหว่าง **กระบวนการเริ่มต้นใช้งาน Theme Builder** เอเจนต์ Setup Assistant จะถามคำถามและสร้าง site_brief ของคุณให้เอง

### การเริ่มต้นด้วยตนเอง (Manual Initiation) {#manual-initiation}

ເຈົ້າສາມາດເລີ່ມການກຳນົດສະເພາະຂອງໄຊທ໌ (Site Specification) ໄດ້ທຸກເວລາ:

```
"ຂໍໃຫ້ຂ້ອຍກຳນົດສະເພາະຂອງໄຊທ໌ຂອງຂ້ອຍ"
```

ຫຼື

```
"ຊ່ວຍຂ້ອຍສ້າງບຣີຟໄຊທ໌"
```

## ຂັ້ນຕອນການກຳນົດສະເພາະຂອງໄຊທ໌ (The Site Specification Process) {#the-site-specification-process}

### ຂັ້ນຕອນທີ 1: ຈຸດປະສົງຂອງໄຊທ໌ (Site Purpose) {#step-1-site-purpose}

ຕົວແທນຈະຖາມວ່າ:

```
ຈຸດປະສົງຫຼັກຂອງໄຊທ໌ເຈົ້າແມ່ນຫຍັງ?
- ຮ້ານຄ້າອີເລັກໂທຣນິກ (E-commerce store)
- ບລັອກ ຫຼື ໄຊທ໌ເນື້ອຫາ (Blog or content site)
- ໂປຣຕໂຟລີ ຫຼື ສະແດງຜົນງານ (Portfolio or showcase)
- ແອັບພລິເຄຊັນ SaaS
- ຊຸມຊົນ ຫຼື ເຟອມ (Community or forum)
- ອື່ນໆ: [ອະທິບາຍ]
```

ເຈົ້າສາມາດເລືອກປະເພດ ຫຼື ອະທິບາຍຈຸດປະສົງຂອງເຈົ້າເອງໄດ້.

### ຂັ້ນຕອນທີ 2: ກຸ່ມເປົ້າໝາຍ (Target Audience) {#step-2-target-audience}

```
ກຸ່ມເປົ້າໝາຍຫຼັກຂອງເຈົ້າແມ່ນໃຜ?
- ຄົນໃຊ້ບໍລິການ / ສາທາລະນະຊົນທົ່ວໄປ
- ພະນັກງານທຸລະກິດ
- ນັກພັດທະນາ / ຜູ້ໃຊ້ດ້ານເຕັກນິກ
- ນັກຮຽນ / ຄູອາຈານ
- ອື່ນໆ: [ອະທິບາຍ]

ຄວາມຕ້ອງການຫຼັກຂອງເຂົາເຈົ້າແມ່ນຫຍັງ?
```

### ຂັ້ນຕອນທີ 3: ຮູບແບບແບຣນ (Brand Identity) {#step-3-brand-identity}

```
ສີຂອງແບຣນຂອງເຈົ້າແມ່ນຫຍັງ?
- ສີຫຼັກ: [ເລືອກສີ ຫຼື code hex]
- ສີຮອງ: [ເລືອກສີ ຫຼື code hex]
- ສີເນັ້ນ: [ທາງເລືອກ]

ເຈົ້າຈະອະທິບາຍໂທນຂອງແບຣນຂອງເຈົ້າໄດ້ແນວໃດ?
- ເປັນມືອາຊີບ / องค์กร (Professional / corporate)
- ສ້າງສັນ / ມີສະຕິປັນຍາ (Creative / artistic)
- ເປັນມ່ວນຊື່ນ / ທຳມະຊາດ (Playful / casual)
- ງ່າຍດາຍ / ທັນສະໄໝ (Minimal / modern)
- ອົບອຸ່ນ / ເປັນມິດ (Warm / friendly)
```

### ຂັ້ນຕອນທີ 4: ເປົ້າໝາຍທາງທຸລະກິດ (Business Goals) {#step-4-business-goals}

```
ຄວາມສຳເລັດຂອງໄຊທ໌ເຈົ້າຈະເປັນແນວໃດ?
- ສ້າງລູກຄ້າໂອກາດ (Generate leads)
- ຂາຍຜະລິດຕະພັນ
- ສ້າງຊຸມຊົນ
- ແບ່ງປັນຄວາມຮູ້
- ສ້າງຄວາມໜ້າເຊື່ອຖື
- ອື່ນໆ: [ອະທິບາຍ]

ຕົວວັດແທກຫຼັກຂອງເຈົ້າແມ່ນຫຍັງ?
- ລາຍຮັບ (Revenue)
- ການມີສ່ວນຮ່ວມຂອງຜູ້ໃຊ້ (User engagement)
- ການເຂົ້າເຖິງເນື້ອຫາ (Content reach)
- ປ່ຽນເປັນລູກຄ້າ (Conversions)
- ອື່ນໆ
```

### ຂັ້ນຕອນທີ 5: ໂຄງສ້າງເນື້ອຫາ (Content Structure) {#step-5-content-structure}

```
ເນື້ອຫາຂອງເຈົ້າຈັດລະບຽບແນວໃດ?
- ແບບປளுບ (Flat - ເນື້ອຫາທັງໝົດຢູ່ໃນລະດັບດຽວກັນ)
- ແບບມີลำดับຊັ້ນ (Hierarchical - ປະເພດ ແລະ ນະບປະເພດຍ່ອຍ)
- ແບບຕາມເວລາ (Chronological - ແບບບລັອກ)
- ແບບອີງໃສ່ຜະລິດຕະພັນ (Product-based - ຄັງຂໍ້ມູນ)
- ອື່ນໆ: [ອະທິບາຍ]

ເຈົ້າໃຊ້ເນື້ອຫາປະເພດໃດແດ່?
- ບລັອກ (Blog posts)
- ໜ້າຜະລິດຕະພັນ (Product pages)
- ກໍລະນີສຶກສາ (Case studies)
- ເອກະສານອ້າງອີງ (Documentation)
- ວິດີໂອ (Videos)
- ອື່ນໆ
```

## ຄວາມຈຳຂອງ site_brief ຂອງເຈົ້າ (Your site_brief Memory) {#your-sitebrief-memory}

ຫຼັງຈາກເຮັດການກຳນົດສະເພາະຂອງໄຊທ໌ແລ້ວ, ຂໍ້ມູນຂອງເຈົ້າຈະຖືກເກັບໄວ້ເປັນ **site_brief** ໃນຄວາມ

## ການເບິ່ງ ແລະ ອັບເດດ site_brief ຂອງທ່ານ {#viewing-and-updating-your-sitebrief}

### ເບິ່ງ site_brief ຂອງທ່ານ {#view-your-sitebrief}

ໃຫ້ຖາມ Agent ແນວນີ້:

```
"Show me my site brief"
```

ຫຼື

```
"What do you know about my site?"
```

Agent ຈະສະແດງຂໍ້ມູນທີ່ທ່ານໄດ້ເກັບໄວ້.

### ອັບເດດ site_brief ຂອງທ່ານ {#update-your-sitebrief}

ຖ້າເວັບໄຊຂອງທ່ານມີການປ່ຽນແປງ, ທ່ານສາມາດອັບເດດມັນໄດ້:

```
"Update my site brief: we're now targeting B2B customers"
```

ຫຼື

```
"Refresh my site specification"
```

ສິ່ງນີ້ຈະເຮັດໃຫ້ skill Site Specification ດຳເນີນການໃໝ່ໂດຍໃຊ້ຂໍ້ມູນທີ່ມີຢູ່ແລ້ວຂອງທ່ານເປັນຈຸດເລີ່ມຕົ້ນ.

## Agents ນຳໃຊ້ site_brief ແນວໃດ {#how-agents-use-sitebrief}

### ຄຳແນະນຳດ້ານການອອກແບບ (Design Recommendations) {#design-recommendations}

ເມື່ອທ່ານຂໍການປ່ຽນແປງດ້ານການອອກແບບ, Agent ຈະອ້າງອີງເຖິງ site_brief ຂອງທ່ານ:

```
ເຈົ້າ: "Redesign my homepage"
Agent: "Based on your site brief, you're targeting women aged 25-45
with a warm, artisanal tone. I'll create a design that emphasizes
your handmade jewelry and sustainable values."
```

### ແນະນຳຟີເຈີ (Feature Suggestions) {#feature-suggestions}

Agents ຈະແນະນຳຟີເຈີທີ່ສອດຄ່ອງກັບເປົ້າໝາຍຂອງທ່ານ:

```
ເຈົ້າ: "What features should I add?"
Agent: "For an e-commerce store focused on customer loyalty,
I'd recommend: loyalty program, customer reviews, email newsletter,
and product recommendations."
```

### ໂຄງສ້າງເນື້ອຫາ (Content Structure) {#content-structure}

Agents ຈະສະເໜີການຈັດລະບຽບເນື້ອຫາໂດຍອີງຕາມໂຄງສ້າງຂອງທ່ານ:

คุณ: "ฉันควรจัดระเบียบบล็อกของฉันอย่างไรดี?"
Agent: "เนื่องจากคุณใช้ product catalog ที่มีบล็อกอยู่ ฉันขอแนะนำให้จัดระเบียบโพสต์ตามหมวดหมู่สินค้า และสร้าง 'คู่มือการจัดสไตล์' (styling guides) เพื่อแสดงสินค้าหลายชิ้นร่วมกัน"

## แนวทางปฏิบัติที่ดีที่สุด (Best Practices) {#best-practices}

### ระบุให้ชัดเจน (Be Specific) {#be-specific}

แทนที่จะบอกว่า "กลุ่มเป้าหมายทั่วไป" ให้บรรยายกลุ่มเป้าหมายจริงของคุณ:

- ✓ "ผู้หญิงอายุ 25-45 ปี ที่สนใจแฟชั่นยั่งยืน"
- ✗ "ทุกคน"

### อัปเดตเป็นประจำ (Update Regularly) {#update-regularly}

เมื่อเว็บไซต์ของคุณพัฒนาไปเรื่อยๆ ให้ปรับปรุง site_brief ของคุณ:

- เมื่อคุณเปลี่ยนกลุ่มเป้าหมายใหม่
- เมื่อคุณเพิ่มสินค้าไลน์ใหม่ๆ เข้ามา
- เมื่อเอกลักษณ์ของแบรนด์คุณเปลี่ยนแปลง
- เมื่อเป้าหมายทางธุรกิจของคุณเปลี่ยนไป

### ใช้คำศัพท์ที่สม่ำเสมอ (Use Consistent Terminology) {#use-consistent-terminology}

ใช้คำเดียวกันตลอดการใช้งาน:

- ✓ พูดว่า "เครื่องประดับยั่งยืน" เสมอ (ไม่ใช่ "เครื่องประดับที่เป็นมิตรต่อสิ่งแวดล้อม" และ "ผลิตภัณฑ์สีเขียว")
- ✓ อ้างถึงกลุ่มเป้าหมายของคุณด้วยวิธีเดียวกันเสมอ

### ใส่บริบท (Include Context) {#include-context}

ให้ข้อมูลพื้นฐานที่ช่วยให้ agent เข้าใจการตัดสินใจของคุณ:

- "เรากำลังกำหนดเป้าไปที่มืออาชีพที่ให้ความสำคัญกับคุณภาพมากกว่าราคา"
- "กลุ่มเป้าหมายของเรามีความรู้ด้านเทคโนโลยีและคาดหวังการออกแบบที่ทันสมัย"
- "เราเป็นสตาร์ทอัพที่เริ่มต้นด้วยเงินทุนจำกัด ดังนั้นเราจึงต้องการโซลูชันที่คุ้มค่า"

## ความสัมพันธ์กับการตั้งค่า Theme Builder (Relationship to Theme Builder Onboarding) {#relationship-to-theme-builder-onboarding}

ความสามารถ Site Specification จะถูกรวมเข้ากับ **ขั้นตอนการตั้งค่า Theme Builder** เมื่อคุณทำ onboarding เสร็จ site_brief ของคุณจะถูกสร้างขึ้นโดยอัตโนมัติด้วยข้อมูลที่คุณให้ไว้

คุณยังสามารถรัน Site Specification ได้อย่างอิสระ หากคุณต้องการ:

- ปรับปรุงข้อกำหนดของคุณหลังจากตั้งค่าเริ่มต้นแล้ว
- อัปเดต site brief ของคุณเมื่อเว็บไซต์ของคุณพัฒนาไปเรื่อยๆ
- สร้างข้อกำหนดโดยละเอียดก่อนเริ่ม Theme Builder

## การแก้ไขปัญหา (Troubleshooting) {#troubleshooting}

**site_brief ของฉันไม่ถูกใช้งาน**
- ตรวจสอบว่า agent เข้าถึง memory หรือไม่
- สั่งให้ agent "เรียกดู site brief ของฉัน" (recall my site brief)
- ตรวจสอบว่าได้เปิดใช้งาน memory ในการตั้งค่าของคุณแล้ว

**ຂ້ອຍຢາກເລີ່ມຕົ້ນໃໝ່ກັບ site_brief ໃໝ່**
- ຖາມຕົວແທນ: "Clear my site brief and start fresh" (ล้างข้อมูล site brief ของฉันและเริ่มใหม่)
- ແລ້ວໃຫ້ chạy Site Specification ອີກຄັ້ງ

**ຕົວແທນກຳລັງແນະນຳສິ່ງທີ່ບໍ່ກົງກັບ site_brief ຂອງຂ້ອຍ**
- ຖາມຕົວແທນວ່າ: "review my site brief" (ກວດເບິ່ງ site brief ຂອງຂ້ອຍ)
- ອັບເດດ site_brief ຂອງເຈົ້າຖ້າມັນເໝາະສົມກັບສະພາບຄວາມເປັນຈິງແລ້ວ
- ໃຫ້ຂໍ້ມູນເພີ່ມເຕີມໃນຄຳຮ້ອງຂໍຂອງເຈົ້າ

## ຂັ້ນຕອນຕໍ່ໄປ (Next Steps) {#next-steps}

ຫຼັງຈາກທີ່ເຈົ້າໄດ້ກຳນົດ Site Specification ແລ້ວ:

1. **ໃຊ້ Theme Builder**: ສ້າງ theme ໃໝ່ໂດຍອີງຕາມ site_brief ຂອງເຈົ້າ
2. **ປັບປຸງການອອກແບບ (Refine Design)**: ໃຊ້ທັກສະ Design System Aesthetics ເພື່ອເຮັດວຽກອອກແບບລາຍລະອຽດ
3. **ວາງແຜນເນື້ອຫາ (Plan Content)**: ຖາມຕົວແທນເພື່ອຂໍຄຳແນະນຳກ່ຽວກັບໂຄງສ້າງເນື້ອຫາ
4. **ສ້າງຟີເຈີ (Build Features)**: ຮ້ອງຂໍຟີເຈີທີ່ສອດຄ່ອງກັບເປົ້າໝາຍທາງທຸລະກິດຂອງເຈົ້າ
