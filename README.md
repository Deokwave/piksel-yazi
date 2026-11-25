# piksel-yazi

GitHub sayfalarımızdaki başlıklarda kullandığımız 5x7 piksel yazı tipi. Türkçe büyük harflerin hepsi var (Ç, Ğ, İ, Ö, Ş, Ü), rakamlar ve birkaç işaret de. `svg()` fonksiyonu bir metni keskin kenarlı bir SVG'ye çeviriyor.

```
npm run build
node dist/ornek.js "MERHABA DÜNYA" > ornek.svg
```

Ölçek ve renk de verebilirsin: `node dist/ornek.js "DEOKWAVE" 8 "#5fd4ff"`. Ölçek 1 ile 16 arasında olmalı.

© 2026 Deokwave. Tüm hakları saklıdır.
