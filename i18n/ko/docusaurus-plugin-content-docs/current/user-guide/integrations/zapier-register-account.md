---
title: Zapier를 통해 계정 등록
sidebar_position: 1
_i18n_hash: b77221f8098a0280ce78f481e328f9af
---
# 이벤트: Zapier를 통해 계정 등록

이 기사 [Integrating Ultimate Multisite with Zapier](zapier.md)에서는 Zapier를 사용하여 트리거와 이벤트에 따라 Ultimate Multisite 내에서 다양한 작업을 수행하는 방법에 대해 논의했습니다. 이 기사에서는 타사 애플리케이션을 통합하는 방법을 보여 드립니다. Google Sheets를 데이터 소스로 사용하고 정보를 Ultimate Multisite에 전송하여 계정을 등록할 것입니다.

먼저 Google Drive에 **Google Sheet**를 만들어야 합니다. 나중에 데이터를 쉽게 매핑할 수 있도록 각 열을 올바르게 정의했는지 확인하세요.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-7wnYotvYtO.png)After creating a Google sheet, you can log in to your Zapier account and start creating a zap.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-C0khOzCSCF.png)Under the search field for **"App event"** select **"Google Sheets"**

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-Cj2rk0zpOO.png)

그런 다음 \"**Event**\" 필드에서 \"**New spreadsheet row**\"를 선택하고 \"**Continue**\"를 누르세요.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-Y6z9NX6HAn.png)다음 단계에서는 **Google Sheet**가 저장된 **Google Account**를 선택하라는 요청이 표시됩니다. 올바른 Google 계정이 지정되었는지 확인하세요.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-536o0FgLI1.png)

**"Set up trigger"** 아래에서 데이터를 가져올 Google 스프레드시트와 워크시트를 선택하고 지정해야 합니다. 해당 항목을 입력하고 \"**Continue**\"를 누르세요.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-4juCX9m6M2.png)다음은 \"**test your trigger**\"를 수행하여 Google 시트가 제대로 연결되었는지 확인하는 단계입니다.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-E1RjprMVNM.png)테스트가 성공하면 스프레드시트의 일부 값을 표시하는 결과를 확인할 수 있습니다. \"**Continue**\"를 클릭하여 진행하세요.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-FNVMJRdoBs.png)다음 단계는 Ultimate Multisite에서 계정을 생성하거나 등록할 두 번째 작업을 설정하는 것입니다. 검색 필드에서 \"**Ultimate Multisite(2.0.2)**\"를 선택하세요.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-bbSevglDSJ.png)

\"**Event**\" 필드에서 \"**Register an Account in Ultimate Multisite**\"를 선택한 다음 \"**Continue**\" 버튼을 클릭하세요.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-DZTN6Hno0w.png)\"**Set up an action**\" 아래에서 고객 데이터, 멤버십, 제품 등과 관련된 다양한 필드를 확인할 수 있습니다. Google 시트의 값을 매핑하고 해당 값이 채워져야 할 적절한 필드에 할당할 수 있습니다. 아래 스크린샷에 표시된 대로입니다.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-c1ozo05Uam.png)값을 매핑한 후 작업을 테스트할 수 있습니다.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-UKI9kdBjIc.png)
