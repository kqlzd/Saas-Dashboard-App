# 📊 SaaS Dashboard

A modern SaaS admin dashboard built with React, TypeScript, and Chakra UI — featuring customer management, analytics, and Stripe payments.

![React](https://img.shields.io/badge/React-18-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Chakra UI](https://img.shields.io/badge/Chakra_UI-v3-teal?logo=chakraui)
![Zustand](https://img.shields.io/badge/Zustand-state-orange)
![Stripe](https://img.shields.io/badge/Stripe-payments-purple?logo=stripe)

---

## ✨ Features

- 🔐 **Authentication** — Mock login with role-based access (admin/user)
- 📊 **Dashboard** — Stats, charts, and recent customers overview
- 👥 **Customer Management** — Add, edit, delete customers with search
- 📈 **Analytics** — User growth charts and distribution stats
- 💳 **Stripe Payments** — Checkout integration with Stripe Elements
- 🌙 **Dark Mode** — Full dark/light theme support
- 🔒 **Protected Routes** — Auth-based route protection

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| [React 18](https://react.dev) | UI framework |
| [TypeScript](https://www.typescriptlang.org) | Type safety |
| [Vite](https://vitejs.dev) | Build tool |
| [Chakra UI v3](https://chakra-ui.com) | UI components |
| [Zustand](https://zustand-demo.pmnd.rs) | State management |
| [React Router v6](https://reactrouter.com) | Routing |
| [Recharts](https://recharts.org) | Charts |
| [Stripe](https://stripe.com) | Payment processing |
| [Lucide React](https://lucide.dev) | Icons |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 20.19+ or 22.12+

### Installation

```bash
# Clone the repository
git clone https://github.com/username/saas-dashboard.git
cd saas-dashboard

# Install dependencies
npm install
```

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_STRIPE_PUBLIC_KEY=your_stripe_public_key
```

### Run the App

```bash
npm run dev
```

---

## 🔑 Demo Credentials

| Role | Email | Password |
|---|---|---|
| Admin | admin@test.com | admin123 |
| User | user@test.com | user123 |

---

## 📁 Project Structure

```
src/
├── components/
│   ├── ActivityTimeline/
│   ├── AddUserModal/
│   ├── AvatarComponent/
│   ├── Charts/
│   ├── EditUserModal/
│   ├── Layout/
│   ├── Navbar/
│   ├── ProtectedRoute/
│   ├── Sidebar/
│   ├── Table/
│   └── Widgets/
├── context/
│   ├── AuthContext.tsx
│   └── ThemeContext.tsx
├── data/
│   ├── mockAuth.tsx
│   └── mockUsers.tsx
├── hooks/
│   ├── useAuth.ts
│   ├── useThemeContext.ts
│   └── ...
├── pages/
│   ├── Analytics/
│   ├── CheckoutPage/
│   ├── Dashboard/
│   ├── Login/
│   └── Users/
├── providers/
│   └── stripe-provider.tsx
├── routes/
│   └── dashboard-routes.tsx
├── store/
│   └── index.tsx
└── App.jsx
```

---

## 📸 Pages

- **/** — Dashboard with stats and charts
- **/users** — Customer management table
- **/analytics** — Analytics charts and activity feed
- **/checkout** — Stripe payment checkout
- **/login** — Authentication page

---

## 🔮 Roadmap

- [ ] Real backend integration (Supabase/Firebase)
- [ ] Real user authentication
- [ ] Export customers to CSV
- [ ] Notifications system
- [ ] Mobile responsive improvements

---

## 📄 License

MIT
