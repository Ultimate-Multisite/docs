---
title: ダშბორდის გაგება
sidebar_position: 7
_i18n_hash: 4869a2f03eb529c49c821a22eb6b9647
---
# Ultimate Multisite Dashboard-ის გაგება

Before we dive into more advanced configuration options and the operational aspects of Ultimate Multisite, let's take a look at the dashboard.

როგორც ბევრ WordPress плаგინს처럼, Ultimate Multisite ქმნის ქსელურ დონის მენიუს ჩანაწერს სახელწოდებით **Ultimate Multisite**, რომლის ქვეშ რამდენიმე ქვემენიუს ჩანაწერია.

## ქსელური დაფის ვიჯეტები (Network Dashboard Widgets) {#network-dashboard-widgets}

Ultimate Multisite რამდენიმე სასარგებლო ვიჯეტს ინjects-ავს ქსელურ დონის დაფაში. ამ დაფას მიწვდომა შეგიძლიათ: **My Sites → Network Admin → Dashboard**. ვიჯეტები შექმნილია ინფორმაციისა და საერთო ოპერაციების მარტივი წვდომისთვის ქსელური ადმინისტრატორისთვის.

![Network Dashboard with Ultimate Multisite widgets](/img/admin/network-dashboard-full.png)

### პირველი ნაბიჯები (First Steps) {#first-steps}

![First Steps widget](/img/admin/network-dashboard-first-steps.png)

ეს ვიჯეტი ჩნდება Ultimate Multisite-ის ახალ ინსტალაციაზე და ქსელურ ადმინისტრატორს სთავაზობს დამატებითი ამოცანების შესრულებას, როგორიცაა გადახდის მეთოდის კონფიგურირება და ტესტის ანგარიშის შექმნა.

### შეჯამება (Summary) {#summary}

![Summary widget](/img/admin/network-dashboard-summary.png)

Summary ვიჯეტი აცნობებს დღის სალარმოებების რაოდენობასა და მათ შემოსავალზე. MRR (Monthly Recurring Revenue) მიუთითებს პროგნოზირებულ საერთო შემოსავალზე მომხმარებლებისთვის, რომლებსაც შემოსავლიანი წევრობები აქვთ.

### აქტივობის ნაკადი (Activity Stream) {#activity-stream}

![Activity Stream widget](/img/admin/network-dashboard-activity-stream.png)

ეს ვიჯეტი აცნობებს Ultimate Multisite-ზე მომხდარი მოვლენების შესახებ. მოვლენებში შედის სალარმოებები, გაუქმებები, საიტების შექმნა და წაშლა, სხვა აქტივობებიც.

უფრო დეტალური აღწერილობისთვის გთხოვთ, იხილოთ დოკუმენტაციის Events განყოფილება.

### ახლა (Right Now) {#right-now}

![Right Now widget](/img/admin/network-dashboard-right-now.png)

ეს ユーティლიტარული ვიჯეტი აჩვენებს ქსელის მომხმარებლებისა და საიტების მოკლე მიმოხილვას. ზედა ნაწილში არსებული სწრაფი შტუტკები საშუალებას გაძლევთ ახალი საიტის ან მომხმარებლის შექმნა ერთი დაწუკოდ.

### ახალი ამბები და დისკუსიები {#news-and-discussions}

![News and Discussions widget](/img/admin/network-dashboard-news.png)

ეს ვიჯეტი იტვირთება და აჩვენებს Ultimate Multisite-ის უახლეს სიახლეებს. ყურადღება მიაქციეთ ამ ვიჯეტს განახლებების, კრიტიკული ბაგებისა და უსაფრთხოების გამოსწორებების შესახებ ინფორმაციისთვის.

## Ultimate Multisite Dashboard {#ultimate-multisite-dashboard}

სადაც ქსელის დონის დაფა წარმოადგენს მთლიან ინფორმაციას ქსელის შესახებ, Ultimate Multisite-ის დაფა (რომელიც Ultimate Multisite მენიუს ზედა დონეზეა განთავსებული) წარმოადგენს სერვისის შესახებ ინფორმაციას.

![Ultimate Multisite Dashboard](/img/admin/um-dashboard-top.png)

### ყოველთვიური განმეორებადი შემოსავლის ზრდა (Monthly Recurring Revenue Growth) {#monthly-recurring-revenue-growth}

MRR (ყოველთვიური განმეორებადი შემოსავალი) გრაფიკი აჩვენებს შემოსავლების ყოველთვიურ დაშლას 12-თვირიანი კალენდარული პერიოდის განმავლობაში.

![MRR Growth chart](/img/admin/um-dashboard-mrr.png)

ახალი შემოსავალი აღინიშნება ლურჯ ფერით, ხოლო გაუქმებები பிரதிபலდები წითლ ფერით.

### თარიღის დიაპაზონის მხარდაჭერა {#date-range-support}

მომხმარებლებისა და აქტივობის რაოდენობის მიხედვით, სტატისტიკა შეიძლება გადატვირთული გახდეს. დაფაში ჩაშენებული თარიღის დიაპაზონის მხარდაჭერა საშუალებას აძლევს ქსელის ადმინისტრატორს ფოკუსირება მხოლოდ საჭირო ინფორმაციასა და დროის პერიოდზე.

![Date range selector and stats](/img/admin/um-dashboard-date-range.png)

თარიღის დიაპაზონი განსაზღვრავს იმ ინფორმაციის პერიოდს, რომელიც აჩვენებს ქვედა ვიჯეტების მიერ – მათ შორის შემოსავალს, ახალ წევრობას, ქვეყანით დარეგისტრირებულ მომხმარებლებს, ფორმით დარეგისტრირებულ მომხმარებლებებს და ყველაზე მეტად ეწვეულ საიტებს.

![Dashboard statistics widgets](/img/admin/um-dashboard-stats.png)

:::tip
**Most Visited Sites** ვიჯეტის დასამუშავებლად, გაააქტიურეთ ვიზიტების ამოთვლა **Ultimate Multisite → Settings → Sites → Enable Visits Limitation and Counting**-ში.
:::
