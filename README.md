
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
    "textDari": "زمان بهترین داور است",
    "textPashto": "وخت تر ټولو ښه قاضي دی",
    "translationEn": "Time is the best judge",
    "meaning": "صبر کن، حقیقت خودش آشکار خواهد شد.",
    "category": "نصیحت"
  },
  {
    "id": 2,
    "textDari": "آنچه را که برای خود نمی‌پسندی، برای دیگران هم مپسند",
    "textPashto": "څه چې ځان ته نه خوښوي، بل ته یې مه غواړه",
    "translationEn": "Don't wish for others what you wouldn't want for yourself",
    "meaning": "dds",
    "category": "نصیحت"
  },
  {
    "id": 3,
    "textDari": "زمان، بهترین داور است ",
    "textPashto": "وخت تر ټولو ښه قاضي دی",
    "translationEn": " Time is the best judge",
    "meaning": "صبر کن، حقیقت خودش آشکار خواهد شد.",
    "category": "نصیحت"
  },
  {
    "id": 4,
    "textDari": "سالی که نکوست، از بهارش پیداست",
    "textPashto": "ښه کال د پسرلي نه پېژندل کېږي",
    "translationEn": "A good year is known by its spring",
    "meaning": "از اول کار می‌شود فهمید که آخرش چطور می‌شود",
    "category": "سرگرمی"
  },
  {
    "id": 5,
    "textDari": "دیگ به دیگ می‌گوید رویت سیاه!",
    "textPashto": "کاسې کاسې ته وایي، ته تور مخې",
    "translationEn": "The pot calls the kettle black",
    "meaning": "کسی که خودش مشکل دارد، به دیگران ایراد می‌گیرد",
    "category": "سرگرمی"
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




