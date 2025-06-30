# Expo React Native Template - Dark Mode & Navigation Ready

🚀 **Profesyonel Expo React Native Başlangıç Şablonu**  
React Navigation ile entegre, manuel tema geçişi (Dark/Light Mode) destekli, modüler ve kullanıma hazır başlangıç projesi.

---

## Özellikler

- ✅ **Expo CLI ile kolay başlangıç**  
- ✅ **React Navigation Bottom Tabs ile sekmeli navigasyon**  
- ✅ **Dark Mode & Light Mode arasında manuel geçiş butonu**  
- ✅ **Tema yönetimi Context API ile merkezi olarak yapılır**  
- ✅ **Tema renkleri tamamen özelleştirilebilir**  
- ✅ **Modüler dosya yapısı:** `src/screens`, `src/components`, `src/navigation`, `src/context`, `src/themes`  
- ✅ **Kolay genişletilebilirlik ve tekrar kullanılabilirlik**  
- ✅ **React Native için modern kod standartları ve best practice’ler**

---

## Başlarken

### Önkoşullar

- Node.js (https://nodejs.org)  
- Expo CLI (`npm install -g expo-cli`)  
- Git (opsiyonel)

---

### Kurulum

```bash
git clone https://github.com/kullaniciadi/expo-template-mrm.git
cd expo-template-mrm
npm install
```

---

### Çalıştırma

```bash
npm start
```

Expo Developer Tools otomatik açılır. Telefonunla QR kodu okutabilir veya Android/iOS emülatörde çalıştırabilirsin.

---

## Dosya Yapısı

```
expo-template-mrm/
├── src/
│   ├── components/       # Ortak bileşenler
│   ├── context/          # Tema Context ve Provider
│   ├── navigation/       # Navigasyon yapılandırmaları
│   ├── screens/          # Ekran bileşenleri
│   ├── themes/           # Light ve Dark tema renkleri
│   └── AppNavigator.js   # Navigasyon ana yapısı
├── App.js                # Uygulama girişi, context sarar
├── babel.config.js
├── package.json
└── .gitignore
```

---

## Temel Kullanım

### Tema Yönetimi

- `src/context/ThemeContext.js` dosyasındaki `ThemeProvider` ile tema durumu (`isDark`) ve `toggleTheme` fonksiyonu yönetilir.
- Navigasyon barındaki **güneş / ay** ikonuna tıklayarak temalar arasında geçiş yapılır.
- Ekranlarda `useTheme()` hook’u kullanılarak tema renkleri (yazı, arka plan vb.) dinamik olarak uygulanır.

### Navigasyon

- `src/AppNavigator.js` içinde Bottom Tabs navigasyonu kuruludur.
- `Home` ve `Settings` ekranları örnek olarak kullanılır.
- Navigasyon ve tema renkleri entegre edilmiştir.

---

## Özelleştirme ve Geliştirme

- Yeni ekranlar eklemek için `src/screens` klasörüne yeni dosyalar oluşturup `AppNavigator.js`'e import ederek tablara veya stacklere ekleyebilirsin.
- Tema renklerini değiştirmek veya yeni renk paletleri eklemek için `src/themes/themes.js` dosyasını düzenle.
- Ortak bileşenleri `src/components` altında topla, böylece proje ölçeklenebilir.

---

## İleri Düzey Öneriler

- **AsyncStorage ile temayı kaydetme:** Kullanıcı seçimini depola, uygulama açıldığında son temayı uygula.  
- **Context API ile global durum yönetimi genişletme:** Redux, MobX gibi durum yönetimlerini ekleyebilirsin.  
- **Authentication Stack:** Login, Register ekranları için ayrı navigasyon yapıları oluştur.  
- **Özel tema toggle butonu:** Daha şık ve animasyonlu butonlar kullanabilirsin.

---

## Katkıda Bulunma

Proje açık kaynak!  
Hatalar, öneriler ve geliştirmeler için PR açmaktan çekinme.

---

## Lisans

MIT © [muhammederencennetkusu]
