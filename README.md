# Levnatvorbawebu.cz

A modern one-page portfolio and presentation website for web development services. The project is built on the latest React + Vite + Tailwind stack with an emphasis on maximum speed (Lighthouse 100/100) and clean code.

## 🛠 Tech stack

This project uses a modern frontend ecosystem:

* **[React 18](https://react.dev/)** – UI library
* **[TypeScript](https://www.typescriptlang.org/)** – Type safety
* **[Vite](https://vitejs.dev/)** – Lightning-fast build tool
* **[Tailwind CSS v4](https://tailwindcss.com/)** – Styling (version 4.0 alpha/beta)
* **[Framer Motion](https://www.framer.com/motion/)** – Animation
* **React Icons** – Icon sets (Heroicons, etc.)

---

## 🔑 Configuration (Secrets)

This project uses environment variables to handle sensitive data (like the Contact Form Access Key).

1.  **Get your Access Key:** Go to [Web3Forms](https://web3forms.com/) and generate your key.
2.  **Create `.env` file:** Create a file named `.env` in the root directory of the project.
3.  **Add the key:** Paste the following line into the file:

```env
VITE_WEB3FORMS_ACCESS_KEY=your-secret-access-key-here
```



## How to run it local

### 1. Requirements
Make sure you have **Node.js** installed (recommended version 18+).

### 2. Neccessery packages
Download the project and install the necessary packages:

```bash
npm install
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
npm run dev
```
