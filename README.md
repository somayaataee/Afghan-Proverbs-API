
# Afghan Proverbs & Sayings API

This is a simple RESTful API built with Node.js and Express to manage Afghan proverbs and sayings.  
It allows users to create, read, update, delete Afghan proverbs in Dari or Pashto.

---

## 🚀 How to Run the Project Locally

## Get all proverbs
GET /jokes

### GET a proverbs by id
GET /jokes/:id

### Add a new proverb
POST /submit
{
"textDari":"Enter the dari text",
"textPashto":"Enter the pashto text",
"translationEn":"Enter the En text",
"meaning":"Things must keep moving or they spoil.",
"category":"wisdom"
}


### Update a proverb
PUT /jokes/:id

### Delete a proverbs

git clone https://github.com/somayaataee/afghan-proverbs-api.git
cd afghan-proverbs-api
