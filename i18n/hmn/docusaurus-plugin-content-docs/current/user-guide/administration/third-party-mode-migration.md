---
title: Chuyển đổi Chế độ Bên thứ Ba
sidebar_position: 17
_i18n_hash: 21e66c5c40d03011402c58addf6d96f3
---
# ការផ្លាស់ប្តូរទៅរបៀបភាគីទីបី (Third-Party Mode Migration)

Superdav AI Agent v1.12.0 បានផ្លាស់ប្តូររបៀបដែលសមត្ថភាពរបស់ភាគីទីបីត្រូវបានគ្រប់គ្រង។ **របៀបភាគីទីបីឥឡូវនេះកំណត់ជាលំនាំដើមទៅជា "auto"** ដែលអនុញ្ញាតឱ្យមានការរួមបញ្ចូល API របស់ WordPress Abilities ដោយផ្ទាល់នៅលើ WordPress 7.0+ ដោយមិនចាំបាច់កំណត់រចនាសម្ព័ន្ធដោយដៃទៀតទេ។

## មានអ្វីបានផ្លាស់ប្តូរ? {#what-changed}

### មុន v1.12.0 {#before-v1120}

សមត្ថភាពភាគីទីបីទាមទារការកំណត់រចនាសម្ព័ន្ធដោយដៃ៖

- អ្នកត្រូវបើក "third-party mode" ដោយផ្ទាល់
- សមត្ថភាពត្រូវបានផ្ទុកពី registry ដែលអ្នកបង្កើតឡើងដោយខ្លួនឯង
- ការរួមបញ្ចូលជាមួយ WordPress Abilities API គឺជ tùy chọn (optional)
- របៀបចាស់ (Legacy mode) គឺជាលំនាំដើម

### បន្ទាប់ v1.12.0 {#after-v1120}

សមត្ថភាពភាគីទីបីដំណើរការដោយស្វ័យប្រវត្តិ៖

- Third-party mode កំណត់ជាលំនាំដើមទៅជា "auto"
- សមត្ថភាពរួមបញ្ចូលដោយផ្ទាល់ជាមួយ WordPress Abilities API
- មិនត្រូវការកំណត់រចនាសម្ព័ន្ធដោយដៃនៅលើ WordPress 7.0+ ទេ
- Legacy mode នៅតែអាចប្រើបានសម្រាប់កំណែ WordPress ចាស់ៗ

## អ្នកណាខ្លះដែលរងផលប៉ះពាល់? {#who-is-affected}

### ការដំឡើងថ្មី (WordPress 7.0+) {#new-installations-wordpress-70}

**មិនបាច់ធ្វើអ្វីទេ។** Third-party mode នឹងត្រូវបានកំណត់ជា "auto" ដោយស្វ័យប្រវត្តិ ហើយសមត្ថភាពនឹងដំណើរការដោយគ្មានបញ្ហា។

### ការដំឡើងដែលមានស្រាប់ {#existing-installations}

**ការកំណត់របស់អ្នកនឹងត្រូវបានរក្សាទុក។** ប្រសិនបើអ្នកធ្លាប់ប្រើ៖

- **Legacy mode**: អ្នកនៅតែស្ថិតក្នុង legacy mode (មិនមានការផ្លាស់ប្តូរទេ)
- **Manual third-party mode**: អ្នកនៅតែស្ថិតក្នុង manual mode (មិនមានការផ្លាស់ប្តូរទេ)
- **Auto mode**: អ្នកនឹងបន្តប្រើ auto mode (មិនមានការផ្លាស់ប្តូរទេ)

### WordPress Versions មុន 7.0 {#wordpress-versions-before-70}

**Legacy mode នៅតែអាចប្រើបាន។** ប្រសិនបើអ្នកកំពុងប្រើ WordPress 6.x ឬចាស់ជាងនេះ៖

- Third-party mode កំណត់ជាលំនាំដើមទៅជា "legacy"
- អ្នកអាចបើក third-party mode ដោយដៃបាន បើអ្នកចង់
- សូមអាប់ដេតទៅ WordPress 7.0+ ដើម្បីប្រើ Abilities API ដែលជាធម្មជាតិ (native)។

## ការយល់ដឹងអំពីរបៀបផ្សេងៗគ្នា (Understanding the Modes) {#understanding-the-modes}

### Auto Mode (លំនាំដើមថ្មី) {#auto-mode-new-default}

**Auto mode** ប្រើការរួមបញ្ចូលដោយផ្ទាល់ជាមួយ WordPress Abilities API៖

- សមត្ថភាពត្រូវបានចុះបញ្ជីតាមរយៈ WordPress hooks
- មានភាពត្រូវគ្នាចំពោះ Abilities API របស់ WordPress 7.0+
- ការរកឃើញសមត្ថភាពភាគីទីបីដោយស្វ័យប្រវត្តិ
- មិនត្រូវការកំណត់រចនាសម្ព័ន្ធដោយដៃទេ

**Khais tsoiv**: WordPress 7.0+ thiab muaj qhuas txhua yam uas tsis yog WordPress (third-party abilities)

### Manual Mode {#manual-mode}

**Manual mode** yuav tsum tsim khoom tsim khoom tshwj xeeb:

- Koj yuav tsum tsim khoom los tsoij tias kuv yuav tuaj yeem thov qhuas txhua yam uas tsis yog WordPress (third-party abilities)
- U mam luam rau kev tswj hmoom lossis kev tuaj yeem thov qhuas txhua yam uas koj xav los tuaj yeem
- Yuav tsum muaj kev tsoij cov ntaub ntawv ua nrob (configuration files)

Kuv yuav kawm khoom tshwj xeeb, tab sis muaj kev thov tsim khoom ntau dua.

**Khais tsoiv**: Kev tswj hmoom lossis kev tuaj yeem thov qhuas txhua yam uas koj xav los tuaj yeemloss los tsim khoom tshwj xeeb

### Legacy Mode {#legacy-mode}

**Legacy mode** yuav siv cov lus tsim khoom tsim khoom tsis txhob hauv WordPress (third-party ability system) uas tsis muaj:

- Cov ntaub ntawv thov qhuas txhua yam uas Koj yuav tsum tsim khoom los
- Muaj kev hmoom rau WordPress phiên tseem ceeb txawm tias tsis yog 7.0+
- Tsis muaj kev tsoij hauv WordPress tsis txhob hauv nrho (native)

Tsis txhob hauv, tab sis muaj kev tsim khoom los.

**Khais tsoiv**: WordPress 6.x lossis tsis muaj, lossis tha koj xav muaj kev hmoom rau legacy compatibility

## Tsoij tias Koj yuav tuaj yeem (Checking Your Current Mode) {#checking-your-current-mode}

### Via Admin Panel {#via-admin-panel}

1. Tsus tsim los **WordPress Admin** → **Superdav AI Agent** → **Settings**
2. Qhia cov ntaub ntawv **Third-Party Mode**
3. Koj yuav paub tias koj yuav tuaj yeem (mode) ceeb thiab muaj kev tsoij los tsim khoom nws

### Via Code {#via-code}

```php
$mode = get_option( 'superdav_third_party_mode' );
echo $mode; // 'auto', 'manual', lossis 'legacy'
```

## Tsim khoom koj yuav tuaj yeem (Changing Your Mode) {#changing-your-mode}

### Switch to Auto Mode {#switch-to-auto-mode}

Yog koj muaj WordPress 7.0+ thiab xav siv auto mode:

1. Tsus tsim los **Superdav AI Agent** → **Settings**
2. Qhia **Third-Party Mode**
3. Kev thov **Auto (WordPress Abilities API)**
4. Thov **Save**

Superdav AI Agent yuav tsum tsim khoom thiab tsoij cov lus tsim khoom tsis txhob hauv WordPress (third-party abilities) txawm tias koj xav los siv.

### Switch to Manual Mode {#switch-to-manual-mode}

Yog koj xav tsim khoom los tsim khoom los tias kuv yuav tuaj yeem thov qhuas txhua yam uas Koj xav los tuaj yeem:

1. Tsus tsim los **Superdav AI Agent** → **Settings**
2. Qhia **Third-Party Mode**
3. Kev thov **Manual**
4. Thov **Save**
5. Tsoij cov ntaub ntawv ua nrob (configuration file) koj los tsim khoom los tsoij tias kuv yuav tuaj yeem thov qhuas txhua yam uas Koj xav los tuaj yeem

### Switch to Legacy Mode {#switch-to-legacy-mode}

Yog koj muaj kev hmoom rau legacy compatibility:

1. 좸 **Superdav AI Agent** → **Settings** (설정)
2. **Third-Party Mode** (제3자 모드) 찾으세요.
3. **Legacy** (레거시)를 선택하세요.
4. **Save** (저장)을 클릭하세요.

## Auto Mode-nii Benefits (자동 모드의 장점들) {#benefits-of-auto-mode}

### Automatic Discovery (자동으로 능력들을 찾아줌) {#automatic-discovery}

능력들은 다음 것들로부터 자동으로 발견돼요:

- 설치된 plugins (플러그인)
- 활성화된 theme (테마)
- Must-use plugins (필수 사용 플러그인)
- Drop-in plugins (드롭인 플러그인)

수동으로 등록할 필요가 없어요.

### Native Integration (네이티브 통합) {#native-integration}

능력들은 WordPress Abilities API 로랑 연결돼요:

- WordPress core (코어) 와 일치해요.
- WordPress admin (관리자 화면) 과 작동해요.
- Abilities API 를 사용하는 다른 plugins 와도 호환돼요.
- WordPress 가 발전함에 따라 미래에도 문제없어요.

### Simplified Management (간단한 관리) {#simplified-management}

- 고칠 필요 없는 configuration files (설정 파일)가 없어요.
- 수동으로 ability 등록할 필요가 없어요.
- Ability Visibility controls 는 자동으로 작동해요.
- Admin notices 가 분류되지 않은 abilities 에 대해 알려줄 거예요.

### Better Performance (더 나은 성능) {#better-performance}

- Abilities 는 캐시(cache)돼요.
- 필요할 때만 지연 로딩(Lazy-loaded) 돼요.
- WordPress 7.0+ 에서 최적화되어 있어요.

## Migration Path (이동 경로) {#migration-path}

### If You're on WordPress 6.x (WordPress 6.x를 사용 중이라면) {#if-youre-on-wordpress-6x}

1. **Upgrade to WordPress 7.0+** (준비되면)
2. **Update Superdav AI Agent** 를 v1.12.0+ 로 업데이트하세요.
3. **Change third-party mode to Auto** (선택 사항이에요; legacy 모드도 계속 작동해요)
4. 올바른 접근 제어(access controls) 가 적용되었는지 확인하기 위해 **ability visibility** 를 검토하세요.

### If You're on WordPress 7.0+ (WordPress 7.0+를 사용 중이라면) {#if-youre-on-wordpress-70}

1. **Update Superdav AI Agent** 를 v1.12.0+ 로 업데이트하세요.
2. **third-party mode 가 Auto 에 설정되어 있는지 확인하세요** (기본값으로 되어 있을 거예요).
3. 올바른 접근 제어(access controls) 가 적용되었는지 확인하기 위해 **ability visibility** 를 검토하세요.
4. 작동하는지 확인하기 위해 **third-party abilities** 를 테스트해보세요.

## Troubleshooting (문제 해결) {#troubleshooting}

### Abilities aren't loading in auto mode (자동 모드에서 능력들이 로드되지 않을 때) {#abilities-arent-loading-in-auto-mode}

- WordPress 7.0+ 인지 확인하세요.
- third-party mode 가 "Auto"로 설정되어 있는지 확인하세요.
- ability 를 제공하는 플러그인이 활성화되어 있는지 확인하세요.
- 등록 오류(registration errors) 에 대해 WordPress error logs 를 확인해보세요.

### I want to keep legacy mode (레거시 모드를 유지하고 싶을 때) {#i-want-to-keep-legacy-mode}

- **Settings** → **Third-Party Mode** 로 가세요.
- **Legacy** 를 선택하세요.
- **Save** 를 클릭하세요.
- Legacy mode 는 계속 작동할 거예요.

### Kuv tsis tuau kuv tsoom {#my-custom-abilities-arent-showing}
- Kiểm tra xem các ability của bạn đã được đăng ký qua WordPress hooks chưa
- Xem lại xem chúng có thực hiện Abilities API đúng cách không
- Xem log lỗi của WordPress
- Sử dụng trang admin **Ability Visibility** để xem tất cả các ability đã đăng ký

### Kuv ra "unclassified ability" notices {#im-getting-unclassified-ability-notices}
- Cái này bình thường với các ability bên thứ ba mới
- Xem và phân loại chúng trong thông báo admin
- Xem **Ability Visibility** để biết thêm chi tiết về việc phân loại

## Backward Compatibility (Khả năng tương thích ngược) {#backward-compatibility}

### Các cấu hình đã có {#existing-configurations}
Nếu bạn đã có các cấu hình ability của bên thứ ba:

- **Legacy mode**: Cấu hình của bạn vẫn hoạt động
- **Manual mode**: Cấu hình của bạn vẫn hoạt động
- **Auto mode**: Cấu hình của bạn sẽ bị bỏ qua (auto mode sẽ tiếp quản)

Để giữ cho cấu hình tùy chỉnh của bạn, hãy ở chế độ Manual hoặc Legacy.

### Thời gian ngừng hỗ trợ (Deprecation Timeline) {#deprecation-timeline}
- **v1.12.0**: Các chế độ Legacy và Manual vẫn được hỗ trợ đầy đủ
- **v1.13.0+**: Chế độ Legacy có thể hiển thị thông báo ngừng hỗ trợ
- **v2.0.0**: Chế độ Legacy có thể bị loại bỏ (Sẽ thông báo sau)

## Best Practices (Các phương pháp tốt nhất) {#best-practices}

### Cho các cài đặt mới {#for-new-installations}
- Sử dụng Auto mode (đây là mặc định)
- Để Superdav AI Agent tự khám phá ability một cách tự động
- Sử dụng Ability Visibility để kiểm soát quyền truy cập

### Cho các cài đặt đã có {#for-existing-installations}
- Nâng cấp lên WordPress 7.0+ khi có thể
- Chuyển sang Auto mode để quản lý đơn giản hơn
- Xem lại và phân loại ability bằng Ability Visibility

### Cho các ability tùy chỉnh {#for-custom-abilities}
- Đăng ký ability qua WordPress hooks (Abilities API)
- Tránh sử dụng custom ability registries
- Kiểm tra trên WordPress 7.0+ với Auto mode

## Các bước tiếp theo {#next-steps}

1. **ກວດສອບເວີຊັນ WordPress ຂອງທ່ານ**: ເພື່ອໃຫ້ໃຊ້ Auto mode ໄດ້, ກະລຸນາກວດເບິ່ງວ່າທ່ານໃຊ້ WordPress 7.0 ຫຼື ສູງກວ່າບໍ່.
2. **ທົບທວນໂໝດ third-party ຂອງທ່ານ**: ໄປທີ່ Settings (ການຕັ້ງຄ່າ) ແລະ ກວດສອບໂໝດປັດຈຸບັນຂອງມັນ.
3. **ອັບເດດຖ້າຈຳເປັນ**: ຖ້າທ່ານໃຊ້ WordPress 7.0 ຫຼື ສູງກວ່າ, ໃຫ້ສະຫຼັບໄປໃຊ້ Auto mode.
4. **ຈັດປະເພດຄວາມສາມາດ (Classify abilities)**: ກວດສອບ ແລະ ຈັດປະເພດຄວາມສາມາດທີ່ຍັງບໍ່ໄດ້ຖືກຈັດປະເພດໃສ່.
5. **ທົດສອບ**: ເພື່ອຢືນຢັນວ່າ third-party abilities ຂອງທ່ານເຮັດວຽກຖືກຕ້ອງແລ້ວ.

## ຫົວຂໍ້ທີ່ກ່ຽວຂ້ອງ (Related Topics) {#related-topics}

- **Ability Visibility**: ຄວບຄຸມວ່າ ability ໃດຈະສະແດງອອກຢູ່ໃສ
- **WordPress Abilities API**: ຮຽນຮູ້ກ່ຽວກັບການລົງທະບຽນ ability ຂອງ WordPress ແບບຕົ້ນສະບັບ
- **Third-Party Ability Development**: ສ້າງ abilities ທີ່ເຮັດວຽກຮ່ວມກັບ Auto mode
