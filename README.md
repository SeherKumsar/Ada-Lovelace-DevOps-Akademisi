# Ada-Lovelace-DevOps-Akademisi

## Week 1
#### 24.02.2024
- [example-app](example-app)

#### 25.02.2024
- [file-app](file-app)
- [db-app](db-app)

#### Assigment1
- [assigment1](assigment1)

- Projeyi çalıştırmak için:
- Veritabanını Query1.sql sorgusu ile oluşturun.
- `cd assigment1` komutu ile assigment1 klasörüne gidin.
- `npm install` komutu ile gerekli paketleri yükleyin.
- [mysql.js](./assigment1/helper/mysql.js) dosyasındaki password parametresine MySQL şifrenizi ekleyerek değiştirin ve const password = require("./password"); parametresini silin.
- `nodemon app.js` komutu ile projeyi başlatın.
- Tarayıcıda `http://localhost:3000` adresine gidin.
- Öğrenci ekleme, silme ve listeleme işlemlerini gerçekleştirebilirsiniz.

    •	http://localhost:3000/students adresiyle tüm öğrenciler görüntülenir.

    •	http://localhost:3000/students/add/Emin/23/85/90 ile öğrencinin isim, yaş, midterm notu ve final notu bilgileri girilerek eklenir.

    •	http://localhost:3000/students sayfasına girilerek güncel liste görüntülenir. Görüntülenen liste içerisinde kayıtlı id lerden biri belirlenir. (Örneğin id:7)

    •	http://localhost:3000/students/average/7 adresine gidilerek 7 numaralı öğrencinin not ortalaması hesaplanır.

    •	http://localhost:3000/students/delete/7 adresine gidilerek 7 numaralı id silinebilir.

## Week 2
#### 