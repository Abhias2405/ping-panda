# 🐼 Ping Panda

<div align="center">
  <div>
    <img src="https://img.shields.io/badge/-Next.js-black?style=for-the-badge&logoColor=white&logo=next.js&color=000000" alt="next.js" />
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
    <img src="https://img.shields.io/badge/-Prisma-black?style=for-the-badge&logoColor=white&logo=prisma&color=2D3748" alt="prisma" />
    <img src="https://img.shields.io/badge/-Stripe-black?style=for-the-badge&logoColor=white&logo=stripe&color=008CDD" alt="stripe" />
  </div>

  <h3 align="center">Real-time SaaS Insights Delivered to Discord</h3>

  <div align="center">
    Monitor your SaaS metrics with instant Discord notifications for sales, new users, and more
  </div>
</div>

## 🎯 Overview

Ping Panda helps SaaS businesses monitor their important events in real-time through Discord notifications. When significant events occur in your SaaS (sales, sign-ups, etc.), Ping Panda sends beautifully formatted notifications directly to your Discord server.

## 🚀 Key Features

👉 **Real-time Monitoring**
- Instant Discord notifications
- Custom event categories
- Beautiful message formatting
- Event delivery tracking

👉 **Dashboard**
- Real-time event tracking
- Advanced analytics
- Custom event categories
- Quota management
- Beautiful UI with professional illustrations

👉 **API Integration**
- Simple REST API
- Framework-agnostic
- Flexible data structure
- Secure authentication

👉 **Subscription Management**
- Flexible pricing plans
- Usage quotas
- Stripe integration
- Automated billing

## 💻 Tech Stack

### Frontend
- Next.js 14
- TypeScript
- TailwindCSS
- React Query
- ShadcnUI
- Clerk Authentication

### Backend
- JStack (Server + Next.js + Prisma)
- Neon (Serverless Postgres)
- Discord.js
- Stripe
- Hono.js

### Development Tools
- pnpm (Package Manager)
- Zod (Schema Validation)
- React Hook Form
- date-fns

## 🛠️ Installation

1. **Clone and Install**
```bash
git clone https://github.com/Abhias2405/ping-panda.git
cd ping-panda
pnpm install
```

2. **Environment Setup**
```env
# Core
DATABASE_URL="your-neon-db-url"
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=""
CLERK_SECRET_KEY=""

# Discord
DISCORD_BOT_TOKEN=""
DISCORD_SERVER_ID=""

# Stripe
STRIPE_SECRET_KEY=""
STRIPE_WEBHOOK_SECRET=""
```

3. **Database Setup**
```bash
npx prisma db push
```

4. **Start Development Server**
```bash
pnpm dev
```

## 📚 API Reference

### Create Event
```bash
POST /api/v1/event
Authorization: Bearer <your-api-key>

{
  "category": "sale",
  "data": {
    "amount": 99,
    "plan": "pro",
    "email": "user@example.com"
  }
}
```

## 💡 Key Components

### Event Categories
- Customizable event types
- Preset templates
- Custom colors and emojis
- Real-time updates

### Discord Integration
- Real-time message delivery
- Custom formatting
- Delivery status tracking
- Server management

### Quota System
- Plan-based limits
- Usage tracking
- Automatic upgrades
- Monthly resets

## 🔒 Security

- Clerk Authentication
- API Key Management
- Bearer Token Authentication
- Secure Webhook Processing

## 📊 Monitoring

- Event Delivery Status
- Usage Analytics
- Real-time Updates
- Performance Metrics

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📜 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgements

- Clerk for authentication
- Discord.js team
- Stripe team
- Neon for database
- ShadcnUI contributors
