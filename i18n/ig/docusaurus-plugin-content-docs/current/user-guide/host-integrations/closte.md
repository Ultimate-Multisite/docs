---
title: Nkwado Closte
sidebar_position: 7
_i18n_hash: 8f07c74ab2f7df614f502e0cc089c3e0
---
# Integracja z Closte

## Przegląd
Closte to platform hostingu WordPress zarządzana, zbudowana na infrastrukturze Google Cloud. Ta integracja umożliwia automatyczne synchronizowanie domen i zarządzanie certyfikatami SSL między Ultimate Multisite a Closte.

## Funkcje
- Automatyczne synchronizowanie domen
- Zarządzanie certyfikatami SSL
- Wsparcie dla domen typu Wildcard (wildcard domain support)
- Nie potrzebujesz żadnej konfiguracji, jeśli hostujesz na Closte

## Wymagania
Jeśli używasz Closte, musisz zdefiniować stałą poniżej w pliku `wp-config.php`:

```php
define('CLOSTE_CLIENT_API_KEY', 'twoja_api_key');
```

Ta stała jest zazwyczaj już zdefiniowana, jeśli hostujesz na Closte.

## Instrukcje Konfiguracji

### 1. Sprawdź swój Klucz API Closte

Jeśli hostujesz na Closte, stała `CLOSTE_CLIENT_API_KEY` powinna być już zdefiniowana w Twoim pliku `wp-config.php`. Możesz to sprawdzić, sprawdź swój plik `wp-config.php`.

### 2. Włącz Integrację

1. W panelu administracyjnym WordPress przejdź do Ultimate Multisite > Settings (Ustawienia)
2. Przejdź do zakładki "Domain Mapping" (Mapowanie Domen)
3. Przewiń w dół do sekcji "Host Integrations" (Integracje Hostów)
4. Włącz integrację Closte
5. Kliknij "Save Changes" (Zapisz zmiany)

## Jak to Działa

Kiedy dom jest mapowany w Ultimate Multisite:

1. Integracja wysyła żądanie do API Closte, aby dodać domenę do Twojej aplikacji
2. Closte automatycznie zajmuje się wydawaniem certyfikatów SSL
3. Kiedy usuniesz mapowanie domeny, integracja usunie tę domenę z Closte

Integracja działa również z ustawieniem interwału sprawdzania DNS w Ultimate Multisite, co pozwala Ci skonfigurować, jak często system sprawdza propagację DNS i wydawanie certyfikatów SSL.

## Tworzenie Rekordu Domeny

Integration này đảm bảo rằng khi bạn tạo hoặc nhân bản một trang web, một bản ghi tên miền sẽ được tự động tạo ra. Điều này đặc biệt quan trọng cho tích hợp Closte, vì việc tạo bản ghi tên miền sẽ kích hoạt API của Closte để tạo tên miền và chứng chỉ SSL.

## Khắc phục sự cố

### Sự cố kết nối API
- Kiểm tra xem khóa API Closte của bạn có đúng không
- Đảm bảo rằng tài khoản Closte của bạn có đủ quyền cần thiết

### Sự cố Chứng chỉ SSL
- Closte có thể mất một chút thời gian để cấp chứng chỉ SSL (thường là 5-10 phút)
- Kiểm tra xem tên miền của bạn có đang trỏ đúng đến địa chỉ IP máy chủ Closte của bạn không
- Kiểm tra các bản ghi DNS cho tên miền của bạn để đảm bảo chúng được cấu hình chính xác

### Tên miền chưa được thêm
- Kiểm tra nhật ký Ultimate Multisite xem có bất kỳ thông báo lỗi nào không
- Xác minh rằng tên miền đã không được thêm vào Closte rồi
- Đảm bảo rằng các bản ghi DNS của tên miền của bạn đã được cấu hình đúng

### Khoảng thời gian kiểm tra DNS
- Nếu việc cấp chứng chỉ SSL mất quá nhiều thời gian, bạn có thể điều chỉnh khoảng thời gian kiểm tra DNS trong cài đặt Ánh xạ Tên miền (Domain Mapping settings)
- Khoảng thời gian mặc định là 300 giây (5 phút), nhưng bạn có thể đặt nó thấp nhất là 10 giây để kiểm tra nhanh hơn trong quá trình thử nghiệm
