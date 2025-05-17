# 🛒 Next.js FakeStore E-commerce Clone

This is a simple e-commerce frontend project built with **Next.js App Router**, styled using **CSS Modules (`page.module.css`)**, and populated with data from [FakeStore API](https://fakestoreapi.com/).

---

## 📦 Features

- ✅ **App Router** using `src/app/` directory
- ✅ Pages: `/products`, `/product/details/[id]`, `/cart`, `/profile`
- ✅ Responsive **Amazon-style NavBar**
- ✅ **Product listing** page with dynamic styling
- ✅ **Product details** page with individual product view
- ✅ **Cart page** with quantity control (1–10)
- ✅ **Profile page** fetching and displaying user info
- ✅ Uses `useEffect`, `useState`, `async/await`

---

## 🧠 Tech Stack

- **Next.js** (App Router)
- **React** (`useEffect`, `useState`)
- **CSS Modules**
- **React Icons**
- **FakeStore API**

---

## 🔗 API Endpoints Used

- **Products**: `https://fakestoreapi.com/products`
- **Product by ID**: `https://fakestoreapi.com/products/:id`
- **Cart**: `https://fakestoreapi.com/carts/2`
- **User Profile**: `https://fakestoreapi.com/users/3`

---

## 🛠️ Setup Instructions

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/fakestore-nextjs.git
   cd fakestore-nextjs

   ```

2. **Install dependencies**
   npm install

3. **Run the development server**
   npm run dev

4. Open http://localhost:3000 to view it in the browser.

---

📸 Pages Preview
🛍️ Products Page
Displays a grid of products like an e-commerce store.

🧾 Cart Page
Displays items in cart with quantity control (1–10), pricing, summary, and coupon section.

👤 Profile Page
Displays user profile info (name, email, phone, address).

🔎 Product Details Page
Clicking a product takes you to a full detail page with title, description, price, and image.

---

📌 Notes
The cart data only provides product IDs and quantities, so product info is fetched per ID.

The NavBar and Cart mimic the Amazon design using react-icons and basic flexbox.

📃 License
This project is for educational/demo purposes using publicly available API data.

---
