/* 1. Box Model - النموذج الصندوقي */

/* خاصية العرض والارتفاع */
width: 200px;      /* عرض العنصر */
height: 100px;     /* ارتفاع العنصر */

/* الحشوة (المساحة بين المحتوى والحدود) */
padding: 10px;     /* حشوة داخلية حول المحتوى */

/* الحدود */
border: 2px solid black; /* سمك، نوع، ولون الحدود */

/* المسافة الخارجية */
margin: 20px;     /* المسافة بين العنصر والعناصر الأخرى */

/* 2. الأزرار */

/* شكل زر بسيط */
button {
  background-color: #4CAF50; /* لون الخلفية أخضر */
  color: white;              /* لون النص أبيض */
  padding: 10px 20px;        /* حشوة داخلية أفقياً وعمودياً */
  border: none;              /* بدون حدود */
  border-radius: 5px;        /* زوايا مدورة */
  cursor: pointer;           /* شكل المؤشر عند المرور فوق الزر */
}

/* تأثير عند المرور فوق الزر */
button:hover {
  background-color: #45a049;
}

/* 3. النصوص */

/* محاذاة النص */
text-align: center;   /* توسيط النص */
text-align: right;    /* محاذاة لليمين */
text-align: left;     /* محاذاة لليسار */

/* حجم الخط */
font-size: 16px;

/* نوع الخط */
font-family: Arial, sans-serif;

/* لون النص */
color: #333333;

/* 4. الخلفيات */

/* لون الخلفية */
background-color: #f0f0f0;

/* صورة الخلفية */
background-image: url('image.jpg');

/* تكرار صورة الخلفية */
background-repeat: no-repeat;

/* موضع صورة الخلفية */
background-position: center;

/* 5. العرض والارتفاع التلقائي */

/* لجعل العنصر يملأ العرض */
width: 100%;

/* لجعل ارتفاع العنصر تلقائي حسب المحتوى */
height: auto;

/* 6. عرض العنصر كصندوق */

/* جعل العنصر مربع */
width: 100px;
height: 100px;

/* 7. عرض العنصر ككتلة أو عنصر داخلي */

/* عنصر كتلة */
display: block;

/* عنصر داخلي */
display: inline-block;

/* 8. التحكم في الظهور */

/* إخفاء العنصر */
display: none;

/* إظهار العنصر */
display: block; /* أو inline-block حسب الحاجة */

/* 9. محاذاة العناصر داخل الصندوق */

/* المحاذاة الرأسية والأفقية مع flexbox */
display: flex;
justify-content: center;  /* محاذاة أفقية */
align-items: center;      /* محاذاة رأسية */

/* 10. الظلال */

/* ظل للنص */
text-shadow: 2px 2px 4px #000000;

/* ظل للصندوق */
box-shadow: 0 4px 8px rgba(0,0,0,0.2);

/* 11. تغيير شكل المؤشر */

cursor: pointer;  /* عند المرور فوق العنصر يظهر مؤشر اليد */

/* 12. التدرجات */

/* تدرج لوني في الخلفية */
background: linear-gradient(to right, #ff7e5f, #feb47b);

