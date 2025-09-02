# 🩺 Medivac

Medivac is a **family health management platform** that consolidates all your medical data into a single, easy-to-use dashboard.  
It provides real-time insights into vitals such as **Blood Pressure, Heart Rate, and more**, helping families stay informed and proactive about their health.

---

**Note: THIS SITE IS UNDER DEVELOPMENT AND SOON WILL BE COMPLETLY OPERATIONAL(ETA:20:09:2025)**

## 🌟 Features

- 📊 **Family Dashboard** – Centralized health records for every family member.
- 💓 **Vitals Tracking** – Blood pressure, heart rate, glucose levels, and more.
- 🧑‍🤝‍🧑 **Multi-user Access** – Manage multiple family profiles in one account.
- 🔔 **Smart Alerts** – Notifications for abnormal vitals or missed check-ups.
- 📅 **Health Timeline** – View trends and history of medical data.
- 🔒 **Secure by Design** – HIPAA-ready architecture with role-based access.

---

## 🏗️ Tech Stack

**Frontend:**
- ⚛️ React.js with Tailwind CSS (UI/UX)
- React Router (navigation)
- Axios / Fetch (API calls)

**Backend:**
- 🟢 Node.js + Express (REST API)
- MongoDB (NoSQL database for storing health records)
- JWT Authentication (secure login system)

**Integrations:**
- 📡 IoT Device Sync (BP monitor, smartwatches, glucometers)
- 🌍 Geolocation API (location-aware services)
- 📈 Chart.js / Recharts (visualization of vitals)

---

## 🚀 Getting Started

### Prerequisites
Make sure you have installed:
- Node.js >= 18
- MongoDB (local or Atlas)
- Git

### Installation

```bash
# Clone repository
git clone https://github.com/your-username/medivac.git
cd medivac

# Install dependencies
npm install

# Setup environment variables
cp .env.example .env

# Run development server
npm run dev
