# 🎲 สุ่มไอเดียโปรเจกต์ — Product × TSIC Business Domain

เว็บหน้าเดียวที่สุ่ม **2 ส่วน** พร้อมกัน เพื่อตอบว่า "จะทำโปรเจกต์อะไรต่อดี"

1. **จะสร้างอะไร** — เว็บ, แอปมือถือ, IoT, AI, SaaS, CLI, เกม, คีออสก์ ฯลฯ (48 ประเภท)
2. **ให้ธุรกิจแบบไหน** — โดเมนธุรกิจ **1,034 รายการ** ที่ผูกกับ **รหัส TSIC ของไทย** ทั้งหมด
   ครอบคลุมทั้ง 21 หมวด (A–U) และครบทั้ง 88 หมู่ (division)

ผลลัพธ์ที่ได้คือโจทย์ที่จับต้องได้ เช่น
*"สร้าง **กล้อง AI ที่ขอบเครือข่าย** สำหรับ **Cold-chain truck temperature compliance** — TSIC 4923"*

## เกี่ยวกับรหัส TSIC

โดเมนธุรกิจทุกรายการผูกกับ **รหัส TSIC 4 หลัก** (ระดับ class) — TSIC 2009 ของไทยอ้างอิงตาม
ISIC Rev.4 ในระดับ 4 หลัก จึงนำรหัสไปเทียบกับรายการ TSIC ทางการได้ตรง ๆ และในหน้าเว็บมีลิงก์
ค้นหารหัสของทุกผลลัพธ์ให้ด้วย

หนึ่งรหัสมีได้หลายไอเดีย เพราะหนึ่ง class คืออุตสาหกรรมทั้งหมวด (เช่น `4923` การขนส่งสินค้าทางถนน
มีทั้งงาน route optimisation, cold chain, driver telematics)

> ⚠️ ก่อนนำรหัสไปใช้จดทะเบียนหรือยื่นเอกสาร ให้ตรวจ **รหัสย่อย 5 หลัก** กับแหล่งข้อมูลทางการ —
> สำนักงานสถิติแห่งชาติ (NSO) และ [DBD DataWarehouse](https://datawarehouse.dbd.go.th/)
> ของกรมพัฒนาธุรกิจการค้า เพราะหลักที่ 5 เป็นรหัสที่ไทยกำหนดเพิ่มเอง ไม่ได้อยู่ในไฟล์นี้

## ฟีเจอร์

- 🎲 สุ่มทั้งสองช่อง หรือสุ่มทีละช่อง (🔄) และ **ล็อก** (🔒) ช่องที่พอใจแล้ว
- ⚙️ กรองตามหมวดของสิ่งที่จะสร้าง, หมวด TSIC (A–U) และคำค้น (ค้นได้ทั้งชื่อโดเมน รหัส และชื่อหมู่)
- ⭐ เก็บไอเดียที่ถูกใจ (บันทึกใน `localStorage` ของเบราว์เซอร์เท่านั้น) และ 🕘 ดูประวัติ 12 ครั้งล่าสุด
- 🔗 คัดลอกลิงก์ผลลัพธ์ (`?p=…&c=…&d=…`) เพื่อเปิดผลเดิมซ้ำหรือส่งให้เพื่อน
- ⌨️ คีย์ลัด: `Space` สุ่มใหม่, `1` สุ่มช่องซ้าย, `2` สุ่มช่องขวา
- ไม่มีเซิร์ฟเวอร์ ไม่มี build step ไม่มี dependency — HTML/CSS/JS ล้วน

## รันในเครื่อง

```bash
python3 -m http.server 8000
# เปิด http://localhost:8000
```

(เปิดไฟล์ `index.html` ตรง ๆ ก็ได้ เพราะข้อมูลโหลดผ่าน `<script>` ไม่ใช่ `fetch`)

## Deploy ขึ้น GitHub Pages

โค้ดอยู่บน `main` และมี workflow พร้อม deploy แล้ว เหลือ **เปิด Pages หนึ่งครั้ง** ซึ่งต้องทำจากหน้า
Settings เท่านั้น (workflow เปิดเองไม่ได้ เพราะ `GITHUB_TOKEN` ไม่มีสิทธิ์ระดับ admin ของ repo —
รันแรกจะขึ้น error `Create Pages site failed: Resource not accessible by integration`)

**ขั้นตอน (ทำครั้งเดียว)**
1. เปิด **Settings → Pages**
2. ที่ **Build and deployment → Source** เลือก **GitHub Actions**
3. ไปที่แท็บ **Actions** → workflow *Deploy to GitHub Pages* → กด **Re-run jobs**
   (หรือ push commit ใหม่เข้า `main` ก็ได้ workflow จะรันเอง)

เว็บจะขึ้นที่ **https://jarimnark.github.io/random-sheet/** ภายในไม่กี่นาที

**ทางเลือก — Deploy from a branch (ไม่ใช้ Actions)**
ที่ **Settings → Pages → Source** เลือก **Deploy from a branch** → branch `main`, folder `/ (root)`
แล้วกด Save (ยังต้องเข้า Settings ครั้งแรกเหมือนกัน) — มีไฟล์ `.nojekyll` กัน Jekyll processing ไว้แล้ว

ทุก path ในโปรเจกต์เป็น relative จึงทำงานได้ทั้งใน sub-path (`/random-sheet/`) และ root domain

## โครงสร้างไฟล์

```
index.html                 UI ทั้งหมด
styles.css                 ธีมมืด responsive
app.js                     ตรรกะการสุ่ม ตัวกรอง ล็อก ประวัติ ลิงก์แชร์
data/product-types.js      48 ประเภทสิ่งที่จะสร้าง (พร้อมสแตกและระดับความยาก)
data/tsic-domains.js       21 หมวด + 88 หมู่ + โดเมนธุรกิจ 1,034 รายการ
.github/workflows/pages.yml  deploy ขึ้น GitHub Pages
```

## เพิ่มโดเมนธุรกิจเอง

แก้ `data/tsic-domains.js` แล้วเพิ่มบรรทัดในรูปแบบ `รหัส4หลัก|ชื่อโดเมนธุรกิจ` เข้าไปใน
`TSIC_DOMAINS_RAW` — ไม่ต้องระบุหมวดหรือหมู่ เพราะ `app.js` อนุมานให้จากเลข 2 หลักแรกของรหัส

```
4923|Cold-chain truck temperature compliance
```

บรรทัดที่รหัสผิดรูปแบบหรือเลขหมู่ไม่มีอยู่จริงจะถูกข้ามและแจ้งเตือนใน console
