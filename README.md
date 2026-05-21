# Global Cyber Threat Map

A real-time traffic visualization system designed to track and display global network anomalies. 

This project goes beyond simple data visualization. It serves as a live, end-to-end demonstration of modern DevOps practices, taking a raw Node.js application and wrapping it in a secure, containerized, and fully automated deployment pipeline.

## 🚀 The "Why"
I built this project to bridge the gap between "writing code" and "running production infrastructure." The goal wasn't just to make the map work, but to make it *durable*. 

I wanted to ensure that if I push a single line of code to GitHub, my infrastructure automatically builds, tests, deploys, and secures that update without me ever having to touch the server manually.

## 🛠 Tech Stack
* **Frontend:** HTML5, JavaScript, Three.js (for high-performance 3D rendering).
* **Backend:** Node.js & Express.
* **Containerization:** Docker (ensuring environment parity between dev and prod).
* **CI/CD:** GitHub Actions (the engine for the automated build-and-deploy pipeline).
* **Reverse Proxy & SSL:** Caddy (handles automatic HTTPS via Let's Encrypt).
* **Cloud Infrastructure:** Oracle Cloud (Ubuntu VM).

## 🏗 Architectural Highlights
This application isn't just "hosted"—it's architected for reliability:

* **Automated CI/CD Pipeline:** Every push to the `main` branch triggers a workflow that containerizes the application and securely deploys it to the production server. This eliminates manual server configuration and ensures deployments are repeatable.
* **Container-First Workflow:** By using Docker, I've decoupled the application from the host OS. This means the app runs exactly the same in my local environment as it does on the cloud server.
* **Secure Reverse Proxy:** I implemented Caddy to sit in front of the application. It automatically manages SSL/TLS certificates and handles HTTPS traffic, ensuring that the connection is secure and trusted by modern browsers.
* **Resilient Networking:** The infrastructure is hardened with specific firewall ingress rules, allowing only the necessary traffic (HTTP/HTTPS) to reach the application, following the principle of least privilege.

## 📦 How to Run Locally
If you want to view or contribute to the map, it takes just a few commands to get it running in a container:

1. **Clone the repo:**
   ```bash
   git clone https://github.com/yourusername/cyber-threat-map.git
   cd cyber-threat-map
   ```
2. **Build the container:**
   ```bash
   docker build -t threat-map .
   ```
3. **Run the container:**
   ```bash
   docker run -p 3000:3000 threat-map
   ```
4. **Access the app:** Open http://localhost:3000 in your browser.

📈 The Journey
This project was a deep dive into the following phases:

* Application Logic: Building the visualization engine and data handling.
* Containerization: Defining the environment and entry points via Dockerfile.
* CI/CD Orchestration: Configuring GitHub Actions for automated deployment.
* Infrastructure Hardening: Securing the Linux VM and configuring firewall rules.
* HTTPS Implementation: Managing the ACME challenge lifecycle for secure, trusted access.

Built with passion for robust infrastructure and clean, performant code.
