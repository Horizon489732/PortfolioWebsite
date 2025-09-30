# Portfolio Website

A **full-stack personal portfolio** with a **Next.js frontend**, **Django backend**, and **Spring Boot services**, featuring an interactive 3D avatar and a contact form.  

**Live demo:** [hientranportfolio.onrender.com](https://hientranportfolio.onrender.com/)

---

## Features

### Frontend (Next.js)
- Interactive **3D avatar** with animations (GLTF + FBX).  
- **Contact form** sending messages to backend.  
- Responsive, mobile-first layout with Tailwind CSS.  
- Uses `@react-three/fiber` and `@react-three/drei` for 3D rendering.  

### Backends
- **Django:** Handles Factorization using Elliptic Curve with Lenstra theorem.
- **Spring Boot:** Computes Legendre's Theorem & Lagrange's Descent.  

### Deployment
- Frontend deployed on **Render**.
- Backend services are still being worked on.  

---

## Technologies

- **Frontend:** React, Next.js, Tailwind CSS, Three.js  
- **3D Models:** GLTF + FBX, SkeletonUtils; models from [Ready Player Me](https://readyplayer.me/) and animations from [Mixamo](https://www.mixamo.com/#/)
- **Backend:** Django (Python), Spring Boot (Java)  
- **Deployment:** Render, Docker  


---


## Folder Structure

```bash
/frontend           # Next.js frontend
  /public/model     # 3D models and animations
  /src              # React Components
/javabackend/       # Django app for Lenstra Theorem
/pythonbackend/     # Spring Boot app for Legendre's Theorem & Lagrange's Descent
docker-compose.yml  # Full stack orchestration
```

---


# Run Locally

## Prerequisites

* [Docker](https://www.docker.com/get-started)
* [Docker Compose](https://docs.docker.com/compose/install/)
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
