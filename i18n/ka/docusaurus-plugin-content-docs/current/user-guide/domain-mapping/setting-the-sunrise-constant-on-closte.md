---
title: Sunrise-ის კონსტანტის დაყენება Closte-ზე
sidebar_position: 16
_i18n_hash: ce55527b126282d167eec4e3a8f824ea
---
# Sunrise константы Closte-ზე დაყენება {#setting-the-sunrise-constant-to-true-on-closte}

ზოგიერთი ჰოსტინგის პროვაიდერი უსაფრთხოების მიზეზებით ბლოკავს wp-config.php ფაილს. ეს ნიშნავს, რომ Ultimate Multisite-მა ვერ შეძლებს ამ ფაილის ავტომატურ რედაქტირებას საჭირო კონსტანტების ჩასმისთვის დომეინის മാპინგისა და სხვა ფუნქციონალების მუშაობისთვის. Closte არის ასეთი ჰოსტერი.

თუმცა, Closte-ს აქვს საშუალება, უსაფრთხო გზით დაამატოთ კონსტანტები wp-config.php-ში. თქვენ უბრალოდ უნდა გააკეთოთ ქვემოთ მოცემული ნაბიჯები:

## Closte-ის დეშბორში {#on-the-closte-dashboard}

პირველ რიგში, [შედით თქვენს Closte ანგარიშზე](https://app.closte.com/), დააწკაპუნეთ Sites მენიუ ელემენტზე, შემდეგ დააწკაპუნეთ Dashboard-ის ბმულზე იმ საიტზე, რომელზეც ამ მომენტში მუშაობთ:

<!-- Screenshot unavailable: Closte dashboard showing Sites menu and Dashboard link -->

ეკრანის მარცხენა მხარეს ახალი მენიუს ელემენტების სია გაჩნდება. გამოიყენეთ ეს მენიუ და გადადით **Settings** (პარამეტრები) გვერდზე:

<!-- Screenshot unavailable: Closte left sidebar menu showing Settings option -->

შემდეგ, **Settings**-ის განყოფილებაში იპოვეთ WP-Config ტაბი, შემდეგ კი ამ ტაბის ქვეშ არსებული "Additional wp-config.php content" (დამატებითი wp-config.php შინაარსი) ველი:

<!-- Screenshot unavailable: Closte Settings page with WP-Config tab showing Additional wp-config.php content field -->

Ultimate Multisite-ის ინსტალაციის კონტექსტში, თქვენ დაგჭირდებათ ამ ფილტრში sunrise констанტის დამატება. უბრალოდ დაამატეთ ახალი სტრიქონი და ჩასვით ქვემოთ მოცემული სტრიქონი. ამის შემდეგ დააჭირეთ **Save All** (ყველაფრის შენახვა) ღილაკს.

define('SUNRISE', true);

ეს არის ყველაფერი, თქვენ მზად ხართ. დაბრუნდით Ultimate Multisite-ის ინსტალაციის wizards-ზე და განაახლეთ გვერდი პროცესის გასაგრძელებლად.
