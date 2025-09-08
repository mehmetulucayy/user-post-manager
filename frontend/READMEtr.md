# User & Post Manager (Frontend)

Bu proje, bir web geliştirme ödevinin ilk aşamasını tamamlayan, modern teknolojilerle geliştirilmiş, kullanıcı ve gönderi verilerini yönetmek için tasarlanmış bir Single Page Application (SPA) uygulamasıdır. [cite_start]Proje, "Web Development Assignment" dokümanında belirtilen gereksinimlere uygun olarak geliştirilmiştir[cite: 1].

## Proje Amacı ve Kapsamı

Projenin temel amacı, temel frontend becerilerini ve modern araçlarla temiz bir kullanıcı arayüzü oluşturma yeteneğini sergilemektir. Bu kapsamda, **JSONPlaceholder** gibi sahte bir API'den veriler çekilerek aşağıdaki fonksiyonlar uygulanmıştır:

* **Kullanıcı Yönetimi:** Kullanıcı listesini görüntüler, yeni kullanıcı ekler, mevcut kullanıcıları günceller ve siler.
* **Gönderi Yönetimi:** Gönderi listesini görüntüler, yeni gönderi ekler, mevcut gönderileri günceller ve siler.
* [cite_start]**İlişkisel Veri Gösterimi:** `userId` alanı aracılığıyla gönderilerin hangi kullanıcılara ait olduğu ilişkisi kurulmuştur[cite: 1].

Projenin tamamı **ilk aşamanın** gerekliliklerini yerine getirmektedir ve bu aşamada frontend, kendi sahte veri kaynağından bağımsız olarak çalışabilir.

## Kullanılan Teknolojiler

Bu projenin temelini oluşturan teknolojiler ve seçim nedenleri aşağıda açıklanmıştır:

* **React:** Bileşen tabanlı yapısı sayesinde kodun yeniden kullanılabilirliğini ve okunabilirliğini artırmak için kullanılmıştır.
* **Vite:** Geliştirme ortamında anında modül güncellemeleri (Hot Module Replacement) ve hızlı derleme (build) süreleri sunarak geliştirme deneyimini optimize eder.
* **TypeScript:** Statik tip kontrolü ile projenin daha ölçeklenebilir ve hata riskinin daha düşük olmasını sağlar. Bu sayede veri yapıları daha güvenli bir şekilde yönetilebilir.
* **ESLint:** Kod kalitesini ve projenin genelindeki kod stilini korumak için standart kurallar uygulanmıştır. [cite_start]Bu, ekiple çalışırken kod tutarlılığını sağlamak açısından kritiktir[cite: 1].
* **CSS Modules:** Bileşen bazlı stil yönetimi sayesinde stil çakışmalarını önler ve bakım kolaylığı sağlar. Her bileşenin kendi stil dosyası bulunur.

---

## Tasarım ve Stilleme Yaklaşımı

Projenin stil kuralları, temiz ve minimalist bir arayüz oluşturmak amacıyla CSS modülleri kullanılarak yazılmıştır. **Normalde projelerimde Tailwind CSS gibi utility-first (yardımcı sınıf odaklı) bir framework'ü tercih etsem de**, ödevin temel gereksinimlerine ve sadeliğe odaklanmak için bu projede bu yöntemi kullandım. [cite_start]Bu yaklaşım, ödevde belirtilen **temel ama temiz UI/UX** gerekliliğini karşılamak için bilinçli bir karardır[cite: 1].

---

## Kurulum Talimatları

Projeyi yerel makinenizde çalıştırmak için aşağıdaki adımları sırayla uygulamanız yeterlidir.

1.  **Repository'i Klonlayın:**
    ```bash
    git clone [repository-link]
    ```

2.  **Frontend Dizinine Gidin:**
    ```bash
    cd frontend
    ```

3.  **Bağımlılıkları Yükleme:**
    Projenin düzgün çalışması için gerekli tüm Node.js modüllerini yükleyin:
    ```bash
    npm install
    ```

## Projeyi Başlatma

Kurulum tamamlandıktan sonra, projeyi geliştirme modunda başlatmak için aşağıdaki komutu kullanabilirsiniz:

```bash
npm run dev