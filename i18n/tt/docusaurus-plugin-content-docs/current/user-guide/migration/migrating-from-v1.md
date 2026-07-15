---
title: V1-den köçürmek
sidebar_position: 17
_i18n_hash: 1deefaf09206b741c89be6666fe2143c
---
# V1-den geçmek (Migrasyon)

## Ultimate Multisite orijinal 1.x sürüm ailesinden 2.x sürüm ailesine geçti. {#ultimate-multisite-has-switched-from-its-original-1x-family-of-releases-to-the-2x-family-of-releases}

Ultimate Multisite sürüm 2.0 ve sonrası kod tabanının tamamen yeniden yazılması demektir, bu da eski versiyon ile yeni versiyon arasında çok az ortak nokta olduğu anlamına gelir. Bu nedenle, 1.x'ten 2.x'e yükseltme yaparken verilerinizin yeni versiyonların anlayabileceği bir formata taşınması gerekecek.

Neyse ki, Ultimate Multisite 2.0+ **çekirdeğe (core) yerleşik bir migratörle birlikte gelir**; bu migratör eski versiyondan gelen verileri algılayıp bunları yeni formata dönüştürebilir. Bu geçiş, 2.0+'ın **Kurulum Sihirbazı (Setup Wizard)** sırasında gerçekleşir.

Bu ders, migratörün nasıl çalıştığını, başarısızlık durumlarında ne yapmanız gerektiğini ve bu süreçte ortaya çıkabilecek sorunları nasıl gidereceğinizi anlatıyor.

_**ÖNEMLİ: 1.x sürümünden 2.0 sürüme yükseltmeye başlamadan önce lütfen sitenizin veritabanının yedeğini aldığınızdan emin olun**_

## İlk adımlar {#first-steps}

İlk adım, eklenti .zip dosyasını indirmek ve ağ yöneticisi panelinizde 2.0 sürümünü kurmaktır.

[install and activate version 2.0](../getting-started/installing-ultimate-multisite.md) yaptıktan sonra sistem, Multisite'ınızın eski versiyonla çalıştığını otomatik olarak algılayacak ve bu mesajı eklenti sayfasının en üstünde göreceksiniz.

_**NOT:** Eğer Multisite'ınızda Ultimate Multisite 1.x kuruluysa, eklentiyi indirdiğiniz sürümle değiştirmek için bir seçeneğiniz olacak. Lütfen **Mevcut olanı yüklenen ile değiştir** butonuna tıklayın._

<!-- Ekran görüntüsü mevcut değil: v1'i yüklenen v2 sürümüyle değiştirme seçeneğini gösteren eklenti sayfası -->

Следващая страница покажет вам, какие старые дополнения (legacy add-ons) у вас установлены вместе с версией 1.x. Там будет инструкция о том, совместима ли используемая вами версия с версией 2.0 или вам нужно установить обновленную версию дополнения после миграции.

<!-- Screenshot unavailable: Message on the top of the plugins page about updating to v2.0, with list of add-ons that need updating -->

Когда будете готовы продолжить, вы можете нажать кнопку с надписью **Visit the Installer to finish the upgrade** (Посетить установщик, чтобы завершить обновление).

<!-- Screenshot unavailable: Button saying Visit the Installer to finish the upgrade -->

Затем вас перенаправит на страницу мастера установки с приветственными сообщениями. Вам нужно просто нажать **Get Started** (Начать), чтобы перейти на следующую страницу.

<!-- Screenshot unavailable: Setup Wizard welcoming page with Get Started button -->

После нажатия **Get Started** вас перенаправит на Pre-install Checks_._ Здесь вы увидите информацию о вашей Системе и установке WordPress, а также узнаете, соответствует ли она требованиям Ultimate Multisite.

<!-- Screenshot unavailable: Pre-install Checks page showing system requirements confirmation -->

Следующий шаг — ввести ваш лицензионный ключ Ultimate Multisite и активировать плагин. Это гарантирует, что все функции, включая дополнения, будут доступны на вашем сайте.

<!-- Screenshot unavailable: License activation page with license key input and Agree and Activate button -->

После ввода ключа нажмите **Agree & Activate** (Согласиться и активировать).

После активации лицензии вы можете начать фактическую установку, нажав **Install** (Установить) на следующей странице. Это автоматически создаст необходимые файлы и базу данных, которые нужны для работы версии 2.0.

## Теперь миграция {#now-the-migration}

Мигратор имеет встроенную функцию безопасности, которая проверяет весь ваш мультисайт Ultimate Multisite, чтобы убедиться, что все ваши данные могут быть перенесены без каких-либо проблем. Нажмите кнопку **Run Check** (Запустить проверку), чтобы начать процесс.

После запуска проверки у вас есть два варианта: результат может быть либо **с ошибкой**, либо **без ошибки**.

### С ошибкой {#with-error}

Если вы получите сообщение об ошибке, вам нужно обратиться в нашу службу поддержки, чтобы они могли помочь вам исправить эту ошибку. Обязательно **предоставьте лог ошибки** при создании заявки (тикета). Вы можете скачать лог или нажать на ссылку «contact our support team» (связаться с нашей службой поддержки). Это откроет виджет помощи справа от вашей страницы, где поля будут заполнены для вас, включая логи ошибок в описании.

_**Поскольку система нашла ошибку, вы не сможете продолжить миграцию до версии 2.0. Вы сможете откатиться к версии 1.x, чтобы возобновить работу вашей сети до исправления ошибки.**_

### Без ошибки {#without-error}

Если система не находит ошибок, вы увидите сообщение об успехе и кнопку **Migrate** (Мигрировать) внизу, которая позволит вам продолжить миграцию. На этой странице вам напомнят создать резервную копию вашей базы данных перед дальнейшими действиями, что мы настоятельно рекомендуем. Нажмите **Migrate**, если у вас уже есть резервная копия.

И это всё!

Вы либо можете продолжить настройку Мастера, чтобы обновить свой логотип и другие вещи в вашей сети, либо начать пользоваться меню и новым интерфейсом вашей версии Ultimate Multisite 2.0. Смело начинайте поиграть!
