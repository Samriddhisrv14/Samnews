# 📰 Hindustan News Clone – Next.js + Tailwind + NewsAPI

A modern, fast, responsive news website inspired by **Hindustan**, built using **Next.js 16**, **Tailwind CSS**, and **NewsAPI**.

🌍 **Live Demo:** *[https://samnews.vercel.app/](https://samnews.vercel.app/)*

📦 **GitHub Repo:** *[https://github.com/Samriddhisrv14/Samnews](https://github.com/Samriddhisrv14/Samnews)*

---

## 🚀 Features

* Fully responsive UI
* Top Story Hero section
* Latest News with thumbnails
* Trending Sidebar
* Category-based news pages
* Clickable cards redirecting to original articles
* API route for secure server-side news fetching
* Environment variable support
* Deployed on Vercel

---

## 🛠️ Tech Stack

* Next.js 16 (App Router)
* Tailwind CSS
* NewsAPI
* React Server Components
* Vercel Hosting

---

## 📂 Project Structure

```
newswebsite/
│
├── app/
│   ├── page.js
│   ├── layout.js
│   ├── globals.css
│   ├── api/
│   │    └── news/route.js
│   └── category/[name]/page.js
│
├── components/
│   ├── Hero.js
│   └── NewsCard.js
│
├── public/
├── .env.local
├── next.config.mjs
└── README.md
```

---

## 🔧 Installation

### 1️⃣ Clone the project

```
git clone YOUR_REPOSITORY_LINK_HERE
cd newswebsite
```

### 2️⃣ Install dependencies

```
npm install
```

### 3️⃣ Add environment variables

Create a `.env.local` file:

```
NEWS_API_KEY=YOUR_NEWS_API_KEY
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

### 4️⃣ Start development server

```
npm run dev
```

Visit: [http://localhost:3000](http://localhost:3000)

---

## 🌐 Deployment (Vercel)

You must add environment variables on Vercel:

```
NEWS_API_KEY=YOUR_NEWS_API_KEY
NEXT_PUBLIC_BASE_URL=YOUR_DEPLOYED_URL
```

---

## 🔗 API Used (NewsAPI)

### Top Headlines

```
GET https://newsapi.org/v2/top-headlines?country=us&apiKey=API_KEY
```

### Category-Based

```
GET https://newsapi.org/v2/top-headlines?category=business&apiKey=API_KEY
```

---

## 📸 Screenshots

### ScreenShot 1

![ScreenShot 1](assets/Image1.png)

### ScreenShot 2

![ScreenShot 2](assets/Image2.png)

---

## 🧩 Future Enhancements

* Dark mode
* Infinite scroll
* Search functionality
* PWA support
* Bookmark articles

---

## 🤝 Contributing

Pull requests are welcome. For major changes, open an issue to discuss them first.
Mail me at : **samriddhisrv1401@gmail.com**

---

## 📜 License

MIT License — free to use and modify.
