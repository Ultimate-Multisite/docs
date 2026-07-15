---
title: Сыртқа экспорт һәм импорт
sidebar_position: 12
_i18n_hash: 6536f9ebee269a8553a57733e4cb03fc
---
# Экспорт жана импорт

Ultimate Multisite 2.9.0 да **Tools > Export & Import** (Куралдар > Экспорт жана импорт) бөлүмүнөн бир сайтты ZIP файлы катары пакеттөө, андан ошол ZIP-ти калыбына келтирүү же бир сайтты бири-бирдиктүү Ultimate Multisite жана бир сайттуу WordPress орнотуулары арасында жылдыруу керек болгон учурда бир гана **Export & Import** куралын кошот.

## Зарыл укуштар (permissions) {#required-permissions}

Сиз экспорту же импортту жүргүзгүңүз келген сайттагы WordPress **Tools** менюсуна кирүүгө мүмкүнчүлүгү бар администратор катары киришиңиз керек. Multisite тармагында, сеть-уровду Ultimate Multisite куралдарынан подсайттарды экспорту же импорттоо учурунда сеть администратору эсебинен колдонуңуз.

Экспорт ZIP жүктөп алуу үчүн аутентификацияланган жүктөө конети аркылуу көрсөтүлөт, ошондуктан жүгүртүү аяктаганча администратор сессиясын активде болгоңуз жана түзүлгөн жүктөө URL'лерин публик жерде бөлүшпөңүз.

## Сайтты ZIP-ке экспорту {#exporting-a-site-to-a-zip}

1. Копилоону каалаганыңызды WordPress администраторунда, **Tools > Export & Import** (Куралдар > Экспорт жана импорт) баракчасына кириңиз.
2. Экспорт аймагын ачып, пакеттөөңүз келген сайтты тандаңыз.
3. Эгерде ошол опциялар бар болсо, жүктөлгөн файлдарды (uploads), плагиндерди (plugins) жана темаларды (themes) кошууну тандырыңыз.
4. Экспортту баштаңыз жана процесс аяктаганча күтүңүз. Чоң сайттар ZIP даяр болгонго чейин артында аякташы мүмкүн.
5. Аяктаган ZIP-ти экспорлар тизмесинен жүктөп алыңыз.

ZIP файлын коопсуз жерде сактаңыз. Ал сайттын мазмунун, жөнгө салууларын (settings), медиа файлдарын жана танланган код активдерине болгон маалыматтарды камтышы мүмкүн.

## Экспорттун ичиндеги нерселер {#what-the-export-includes}

Экспорт ZIP төмөнкүлөрдү камтый алат:

- Тандалган сайттын базалык мазмуну жана конфигурациясы.
- Жүкөлгөн файлдар (uploads) кошулдурган учурда медиа файлдары.
- Ошол опциялар тандалганда плагиндер жана темалар.
- Сайтты баштаган орнотуучу жерде сайтты кайра куруу үчүн Export & Import куралы тарабынан колдонулган импорт метадата (metadata).

ZIP faylın tam boyutu medya miktarına, seçtiğiniz eklentilere ve sitenin veritabanı tablolarının boyutuna bağlıdır.

## Bir siteyi ZIP'ten içe aktarma {#importing-a-site-from-a-zip}

1. Hedef WordPress sitesinde **Araçlar > Dışa Aktar ve İçe Aktar** bölümüne gidin.
2. İçe aktarma alanını açın ve Dışa Aktar ve İçe Aktar aracıyla oluşturduğunuz ZIP dosyasını yükleyin.
3. Eğer sitenin yeni bir adresi kullanması gerekiyorsa, değiştirilecek URL'yi girin; orijinal URL'yi korumak için alanı boş bırakabilirsiniz.
4. İçe aktarma bittikten sonra yüklediğiniz ZIP dosyasını silip silmeyeceğinizi seçin.
5. **İçe Aktarmayı Başlat** butonuna tıklayın.
6. İçe aktarmanın bitmesini bekleyin. Süreci tamamlanmadan durdurmanız gerekiyorsa yalnızca **İçe Aktarmayı İptal Et** kullanın.
7. Normal trafiğe veya müşterilerin erişimine izin vermeden önce içe aktarılan siteyi kontrol edin.

Tek bir sitedeki WordPress kurulumunda, bir ZIP dosyası mevcut siteyi içe aktarılan siteyle değiştirir. Başlamadan önce hedef sitenin tam yedeğini alın ve aynı anda aynı site için birden fazla içe aktarma işlemine başlamaktan kaçının.

## Sınırlamalar ve uyumluluk notları {#limitations-and-compatibility-notes}

Очень большие папки с загрузками или медиабиблиотеки могут создавать большие ZIP-файлы. Перед экспортом или импортом больших сайтов обязательно проверьте лимиты загрузок PHP, лимиты выполнения, свободное место на диске, оперативную память и настройки таймаута сервера.
Очень большие медиабиблиотеки могут потребовать перемещения во время окна технического обслуживания с низкой нагрузкой.
Целевая установка WordPress должна работать с совместимыми версиями WordPress, PHP, Ultimate Multisite, плагинов и тем.
Импорт односайтового сайта заменяет целевой сайт. Это не инструмент для объединения (слияния).
Перемещение из мультисайта в односайт и из односайта в мультисайт поддерживается только тогда, когда целевая среда может работать с плагинами, темами, URL-адресами и необходимыми компонентами Ultimate Multisite экспортированного сайта.
Сохраняйте ZIP-файл конфиденциальным. Он может содержать содержимое базы данных, загруженные файлы и настройки экспортированного сайта.

Для более старых рабочих процессов экспорта на уровне сети смотрите [Экспорт сайта](/user-guide/administration/site-export).
