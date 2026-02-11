---
title: Миграция из V1
sidebar_position: 17
_i18n_hash: ab3379eeae93ce385ad01c599fc181cb
---
# Миграция из V1

## Ultimate Multisite перешёл от своей оригинальной серии выпусков 1.x к серии 2.x

Версия 2.0 и выше Ultimate Multisite представляет собой полную перепись исходного кода, что означает, что между старой и новой версиями почти ничего общего нет. По этой причине при обновлении с 1.x до 2.x ваши данные необходимо перенести в формат, который новые версии смогут понять.

К счастью, Ultimate Multisite 2.0+ **включает в себя мигратор**, встроенный в ядро, который способен обнаруживать данные из старой версии и преобразовывать их в новый формат. Эта миграция происходит во время **Мастера установки** версии 2.0+.

В этом уроке рассматривается, как работает мигратор, что делать в случае неудачи и как устранять проблемы, которые могут возникнуть в процессе.

_**ВАЖНО: Перед тем как начать обновление с версии 1.x до 2.0, убедитесь, что вы создали резервную копию базы данных вашего сайта**_

## Первые шаги

Первый шаг — скачать .zip‑файл плагина и установить версию 2.0 на панели администратора вашей сети.

После того как вы [установите и активируете версию 2.0](../getting-started/installing-ultimate-multisite.md), система автоматически определит, что ваша Multisite работает на устаревшей версии, и вы увидите это сообщение вверху страницы плагина.

_**ПРИМЕЧАНИЕ:** Если на вашей Multisite установлена Ultimate Multisite 1.x, у вас будет возможность заменить плагин на загруженную версию. Пожалуйста, перейдите и нажмите **Заменить текущий на загруженный**._

![](https://support.delta.nextpress.co/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcDRjIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--c2aff9b312e5b7ec95c9e2c5355480d4aa7258fd/Migration.png)

Следующая страница сообщит вам, какие устаревшие дополнения вы установили вместе с версией 1.x. Там будут указания, совместима ли используемая вами версия с версией 2.0 или вам нужно установить обновлённую версию дополнения после миграции.

![Message on the top of the plugins page: Thanks for updating to Ultimate Multisite version 2.0. There's a link below it that leads the user to the version upgrader. Then, there's a list of add-ons that need to be updated.](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-4E9kAFlcb5.png)

Когда вы будете готовы продолжить, вы можете нажать кнопку **Перейти к установщику, чтобы завершить обновление**.

![Framed in red: button saying Visit the Installer to finish the upgrade](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-BnJrjt7Drw.png)

Затем вы попадёте на страницу мастера установки с приветственными сообщениями. Просто нажмите **Начать** (Get Started), чтобы перейти к следующей странице.

![Setup Wizard's welcoming page. Framed in red at the bottom-right corner: Get Started button.](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-1dvRbsEnrN.png)

После нажатия **Начать** (Get Started) вы будете перенаправлены на страницу Предварительные проверки_._. Там будет показана информация о системе и установке WordPress, а также будет сообщено, соответствует ли она **требованиям Ultimate Multisite**.

![Pre-install Checks page showing confirmation messages that the installation meets Ultimate Multisite's requirements. Framed on red, on the bottom-right corner: Go to the next step button.](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-i0SwDNkaEO.png)

Следующий шаг — ввести ключ лицензии Ultimate Multisite и активировать плагин. Это гарантирует, что все функции, включая дополнения, будут доступны на вашем сайте.

![License activation page listing what the support includes and what it doesn't. There's a box on the bottom to insert the plugin's license. Framed in red, on the bottom-right corner: Agree and activate button.](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-QAwmR9oLQL.png)

После ввода ключа нажмите **Согласиться и активировать** (Agree & Activate).

После активации лицензии вы можете начать реальную установку, нажав **Установить** (Install) на следующей странице. Это автоматически создаст необходимые файлы и базу данных, необходимые для работы версии 2.0.

![Installation page showing what will be updated in order to Ultimate Multisite to function. Framed in red, on the bottom-right: Install button](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-FCyBH12y4d.png)

## Теперь миграция

Мигратор имеет встроенную защиту, которая проверит всю вашу Multisite, чтобы убедиться, что все данные Ultimate Multisite можно перенести без проблем. Нажмите кнопку **Запустить проверку** (Run Check), чтобы начать процесс.

![Migration page explaining it will run a check to see if all your data from v1 can be converted. Framed in red, on the bottom-right corner: Run check button](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-vXLXFLjogz.png)

После выполнения проверки у вас есть два варианта: результат может быть **с** ошибкой или **без** ошибки.

### С ошибкой

Если вы получите сообщение об ошибке, вам нужно обратиться в нашу службу поддержки, чтобы они помогли вам исправить ошибку. Убедитесь, что вы **предоставляете журнал ошибок** при создании заявки. Вы можете скачать журнал или нажать ссылку «связаться с нашей службой поддержки». Это откроет виджет помощи справа от вашей страницы с предварительно заполненными полями, включая журналы ошибок в описании.

_**Поскольку система обнаружила ошибку, вы не сможете продолжить миграцию до версии 2.0. Вы можете откатиться к версии 1.x, чтобы продолжить работу сети до исправления ошибки.**_

### Без ошибки

Если система не обнаружит ошибок, вы увидите сообщение об успехе и кнопку **Мигрировать** (Migrate) внизу, которая позволит вам продолжить миграцию. На этой странице вам будет напомнено создать резервную копию базы данных перед продолжением, что мы настоятельно рекомендуем. Нажмите **Мигрировать**, если у вас уже есть резервная копия.

![Migration page showing a success message and a recommendation to create a backup.](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-T5ELIgTX5a.png)

![Framed in red, on the bottom-right corner: Migrate button](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-Y2AfV93rpf.png)

И всё, что нужно!

Вы можете либо продолжить работу мастера установки, чтобы обновить ваш логотип и другие элементы сети, либо начать пользоваться меню Ultimate Multisite версии 2.0 и его новым интерфейсом. Вперёд, и приятного использования.
