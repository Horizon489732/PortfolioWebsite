# Portfolio Website

A **full-stack personal portfolio** featuring a **Next.js frontend** with an interactive 3D avatar and a contact form using **EmailJS**.  

**Live demo:** [hien-tran.vercel.app](https://hien-tran.vercel.app/)

---

## Features

### Frontend (Next.js)
- Interactive **3D avatar** with animations (GLTF + FBX).  
- **Contact form** sending messages via **EmailJS**.  
- Responsive, mobile-first design with Tailwind CSS.  
- Uses `@react-three/fiber` and `@react-three/drei` for 3D rendering.  

### Backends (functional but on hold)
- **Django:** Factorization using Elliptic Curve with Lenstra theorem (planned).  
- **Spring Boot:** Computation of Legendre's Theorem & Lagrange's Descent (planned).
- > ⚠️ These backends are working locally but **not planned for deployment** at this time.  

### Deployment
- Frontend deployed on **Vercel**.  
- Backend services are kept local for experimentation.

---

## Technologies

- **Frontend:** React, Next.js, Tailwind CSS, Three.js  
- **3D Models & Animations:** GLTF + FBX, SkeletonUtils; models from [Ready Player Me](https://readyplayer.me/) and animations from [Mixamo](https://www.mixamo.com/#/)  
- **Email Handling:** EmailJS  
- **Backend (planned):** Django (Python), Spring Boot (Java)  
- **Deployment & DevOps:** Vercel, Docker  

---

## Folder Structure

```bash
/frontend           # Next.js frontend
  /public/model     # 3D models and animations
  /src              # React components
/javabackend/       # Django app for Lenstra Theorem (planned)
/pythonbackend/     # Spring Boot app for Legendre & Lagrange (planned)
docker-compose.yml  # Full stack orchestration (optional)
```
---


# Run Locally

## Prerequisites

* [Docker](https://www.docker.com/get-started) & [Docker Compose](https://docs.docker.com/compose/install/)
* [Node.js](https://nodejs.org/en/) (if running frontend separately)
* [Python](https://www.python.org/) & [pip](https://pip.pypa.io/en/stable/) (if running Django separately)
* Java & Maven (if running Spring Boot separately)

## Option 1: Using Docker Compose (Recommended)

1. Clone the repository:

```bash
git clone https://github.com/Horizon489732/PortfolioWebsite.git
cd PortfolioWebsite
```

2. Ensure environment variables are set if needed (e.g., `.env` file).

3. Start all services:

```bash
docker-compose up --build
```

4. Access the application:

* Frontend: [http://localhost:3000](http://localhost:3000)
* Django API: [http://localhost:8000](http://localhost:8000)
* Spring Boot [http://localhost:8080](http://localhost:8080)

5. Stop the services:

```bash
docker-compose down
```

## Option 2: Running Services Individually

### Frontend (Next.js)

```bash
cd frontend
npm install
npm run dev
```

Access: [http://localhost:3000](http://localhost:3000)

### Django Backend

```bash
cd pythonbackend
pip install -r requirements.txt
python manage.py runserver
```

Access: [http://localhost:8000](http://localhost:8000)

### Spring Boot Backend

```bash
cd javabackend
./mvnw spring-boot:run
```

Access: [http://localhost:8080](http://localhost:8080)

> **Note:** Option 2 is useful for development or debugging specific services but requires manual setup and coordination.
