
# Afghan Proverbs & Sayings API

## project Description

This is a simple RESTful API built with Node.js and Express to manage Afghan proverbs and sayings.  
It allows users to create, read, update, delete Afghan proverbs in Dari or Pashto.

---

## 🚀 How to Run the Project Locally

###  Clone the repository

```bash
git clone https://github.com/somayaataee/afghan-proverbs-api.git
cd afghan-proverbs-api
```
###  Install dependencies

```bash
npm install
```

###  Run the server

```bash
npm run dev
```

Visit: `http://localhost:3000`

---
##  Example Requests & Responses (using curl)

###  Get All Proverbs (GET /proverbs)

```bash
curl http://localhost:3000/jokes

```
**Response:**
```json
[
  {
    "id": 1,
    "textDari": "نه سیخ بسوزه، نه کباب!",
    "textPashto": "نه سیخ وسوزی، نه کباب",
    "translationEn": "Neither the skewer burns, nor the kebab",
    "meaning": "تلاش برای آشتی دادن یا حفظ تعادل بین دو طرف",
    "category": "نصیحت"
  },
  {
    "id": 2,
    "textDari": "کسی که خواب است، می‌شود بیدارش کرد؛ ولی کسی که خودش را به خواب زده، نه!",
    "textPashto": "چا چې سترګې پټې کړې وې، هغه نه شي راويښولی",
    "translationEn": "You can wake someone who is asleep, but not someone pretending to sleep",
    "meaning": "با کسی که خودش را به نفهمی زده، نمی‌شود بحث منطقی کرد",
    "category": "نصیحت"
  },
  {
    "id": 3,
    "textDari": "شتر در خواب بیند پنبه دانه!",
    "textPashto": "اوښ په خوب کې د پنبې دانې ویني",
    "translationEn": "The camel dreams of cotton seeds",
    "meaning": "آدم‌های خیال‌پرداز که آرزوهای بزرگ اما غیرواقعی دارند",
    "category": "طنز"
  },
  {
    "id": 4,
    "textDari": "هر گلی بوی خود دارد!",
    "textPashto": "هر ګل خپل بوی لري",
    "translationEn": "Every flower has its own scent",
    "meaning": "هر کسی ویژگی خاص خودش را دارد",
    "category": "سرگرمی"
  },
  {
    "id": 5,
    "textDari": "مرغی که صبح خیزد، دانه‌اش را پیدا کند",
    "textPashto": "چرګ چې سهار وخیژي، خپله دانه پیدا کوي",
    "translationEn": "The early bird finds its grain",
    "meaning": "کسانی که زود شروع کنند، موفق‌تر خواهند بود",
    "category": "نصیحت"
  },
  {
    "id": 6,
    "textDari": "کل به کله می‌خندد!",
    "textPashto": "ګنجی بل ګنجی ته خاندي",
    "translationEn": "The bald laughs at the bald",
    "meaning": "کسی که خودش همان عیب را دارد، دیگران را مسخره می‌کند",
    "category": "طنز"
  }
]
```

---
### Add a new proverb

 (POST /submit)

{
    "id": 1,
    "textDari": "دیگ به دیگ می‌گوید رویت سیاه!",
    "textPashto": "کاسې کاسې ته وایي، ته تور مخې",
    "translationEn": "The pot calls the kettle black",
    "meaning": "کسی که خودش مشکل دارد، به دیگران ایراد می‌گیرد",
    "category": "سرگرمی"
}

---
###  Update Proverb 

    (PUT /jokes/:id)

---
###   Delete Proverb (DELETE /jokes/:id)

```bash
curl -X DELETE http://localhost:3000/jokes/1
```

---
##  Deployed API (Render)

🔗 https://afghan-proverbs-api.up.railway.app

---
## Tech Stack

- Node.js + Express  
- json file  
- Hosted on Railway  
- Tested with Postman and curl  

---
## Author

Somaya Ataie  
[https://github.com/somayaataee](https://github.com/somayaataee)




