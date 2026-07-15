---
title: Kod parçaları
sidebar_position: 1
_i18n_hash: 2284b14474d86f665fa7c84cc305553e
---
# v2 üçün Kod Parçaları

Əsasən, **WordPress** üçün kod parçaları, əks halda xüsusi kiçik bir plugin tələb edə biləcək müəyyən əməliyyatları yerinə yetirmək üçün istifadə olunur. Belə kod parçaları WordPress çekirdek və ya mövzu fayllarından birinə (adətən mövzunuzun functions.php faylı) yerləşdirilə bilər və ya MU plugin kimi istifadə edilə bilər.

Bu məqalədə **Ultimate Multisite v2** ilə istifadə edilə biləcək üç kod parçasını göstərəcəyik:

  * [**Hesab menyu maddəsinin yerini dəyişmək**](#changing-the-position-of-the-account-menu-item)

  * [**İstifadəçinin müəyyən bir plan altında olub-olmadığını və/və ya aktiv abunəlik olub-olmadığını necə yoxlamaq**](#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription)

  * [**Xəritələnmiş domenlərdə Font-Icons ilə CORS problemlərini həll etmək**](#fixing-cors-issues-with-font-icons-in-mapped-domains)

## Hesab menyu maddəsinin yerini dəyişmək {#changing-the-position-of-the-account-menu-item}

Müştərinizin Dashboard-unda (Nəzarət Paneli) Hesab menyu maddəsinin yerini dəyişmək üçün sadəcə aşağıdakı kod parçasını əsas saytınızın aktiv mövzəsinin functions.php faylına əlavə edin. Bu parçanı həm də mu-plugin və ya xüsusi plugin-lərdən birinin içinə yerləşdirə bilərsiniz.

add_filter('wu_my_account_menu_position', function() { return 10; // Tweak this value to place the menu in the desired position.

## İstifadəçinin müəyyən bir plan altında olub-olmadığını və/və ya aktiv abunəlik olub-olmadığını necə yoxlamaq {#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription}

Bir şəbəkə administratoru kimi, abunəlik vəziyyətindən və abunə olduqları plandan asılı olaraq, sadə əməliyyatlar yerinə yetirəcək və ya birbaşa seçilmiş abunəçilərə və ya son istifadəçilərə bir xidməti/funksiyanı təqdim edəcək xüsusi funksiyalar yaratmağınız lazım gələ bilər.

Bu Ultimate Multisite yerli funksiyaları sizə kömək edəcək.

İstifadəçinin müəyyən bir planın üzvü olub-olmadığını yoxlamaq üçün bu funksiyadan istifadə edə bilərsiniz:

wu_has_plan($user_id, $plan_id)

Abunəliyin aktiv olub-olmadığını yoxlamaq üçün isə bu funksiyadan istifadə edə bilərsiniz:

wu_is_active_subscriber($user_id)

Aşağıda, cari istifadəçinin müəyyən bir plan altında olub-olmadığını (_Plan ID 50_) və istifadəçinin abunəliyinin aktiv olub-olmadığını yoxlayan nümunə bir kod parçası verilmişdir.

$user_id = get_current_user_id();$plan_id = 50;if (wu_has_plan($user_id, $plan_id) && wu_is_active_subscriber($user_id)) { // USER IS MEMBER OF PLAN AND HIS SUBSCRIPTION IS ACTIVE, DO STUFF} else { // USER IS NOT A MEMBER OF PLAN -- OR -- HIS SUBSCRIPTION IS NOT ACTIVE, DO OTHER STUFF} // end if;

Qeyd edin ki, _**wu_has_plan**_ funksionallığını göstərməsi üçün "Plan ID" tələb edir.

Bir planın ID-sini almaq üçün **Ultimate Multisite > Products** səhifəsinə keçə bilərsiniz. Hər bir məhsulun ID-si cədvəlin sağ tərəfində göstəriləcək.

Qeyd edin ki, istifadəçilər yalnız bir **Plan**-a abunə ola bilərlər, Paket və ya Xidmətə yox, çünki onlar yalnız bir **Plan** üçün əlavə modullardır.

![Products list showing plan IDs](/img/admin/products-list.png)

## Xəritələnmiş domenlərdə Font-Icons ilə CORS problemlərini həll etmək {#fixing-cors-issues-with-font-icons-in-mapped-domains}
## Xəritələnmiş domenlərdə Font-Icons ilə CORS problemlərini həll etmək {#fixing-cors-issues-with-font-icons-in-mapped-domains-1}

Bir domenü alt-sayta xəritələdikdən sonra, saytın xüsusi fontları yükləməkdə çətinlik çəkdiyini müşahidə edə bilərsiniz. Bu, server parametrlərinizdəki bir cross-origin blokundan qaynaqlanır.

Font faylları demək olar ki, həmişə birbaşa CSS-dən yüklənirsə, domen xəritələmə pluginimiz URL-ləri orijinal domen əvəzinə xəritələnmiş domen istifadə etmək üçün yenidən yazmaq qabiliyyətinə malik deyil. Buna görə də problemi həll etmək üçün server konfiqurasiya fayllarınızı dəyişdirməyiniz lazım olacaq.

Aşağıda Apache və NGINX üçün problemi həll etmək kod parçaları verilmişdir. Bu dəyişikliklər server konfiqurasiya faylları (.htaccess faylları və NGINX konfiq faylları) haqqında təcrübə tələb edir. Əgər bu dəyişiklikləri özünüz etməkdən narahat olursunuzsa, köməyə ehtiyac duyduğunuz zaman bu səhifəni hosting provayderinizin dəstək agentlərinə göndərin.

### Apache {#apache}

.htaccess faylınızda əlavə edin:

<FilesMatch “.(ttf|ttc|otf|eot|woff|font.css|css)$”> Header set Access-Control-Allow-Origin “*”

### NGINX {#nginx}

Server konfiq faylınızda (yerləşmə serverdən serverə dəyişir), əlavə edin:

location ~ .(ttf|ttc|otf|eot|woff|font.css|css)$ { add_header Access-Control-Allow-Origin “*”;}
