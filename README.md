
# 🎬 Video Streaming App (YouTube Clone)

A **frontend-only YouTube Clone** built with **React**, replicating YouTube’s core UI and interactions. The app provides a modern, responsive video browsing experience with theme toggle, search, and dynamic routing.


## 🚀 Project Overview

This project replicates YouTube’s **UI and interactive features**. Users can browse trending videos, search for content, view video details, explore categories, and switch between light/dark modes. Built with **React + Context API + React Router**, the app focuses on **modern design, responsiveness, and smooth user experience**.


## 🎯 Project Goals

* Develop an **interactive UI** replicating YouTube’s design.
* Implement **responsive layout** for mobile, tablet, and desktop.
* Manage **likes, dislikes, and views** dynamically using React state.
* Enhance UX with **animations, hover effects, and skeleton loaders**.
* Enable **search functionality** and **category-based navigation**.
* Support **light/dark mode** with React Context API.
* Deploy the project on **Netlify/Vercel**.


## ✨ Features & Functionalities

### 🔹 Homepage (Video Feed)

* Displays a list of trending videos with:

  * Thumbnail
  * Title
  * Channel name & profile picture
  * Views & upload time
* Clicking a video navigates to the **Video Details Page**.

### 🔹 Navigation & Routing

* **Top Navbar** with:

  * Search bar
  * Profile icon (future authentication expansion)
* **Left Sidebar** with categories:
  `Home, Trending, Music, Gaming, Technology, etc.`
* **React Router DOM** for seamless navigation.

### 🔹 Video Details Page

* **Video Player UI**
* Below the player:

  * Video title & description
  * Like/Dislike buttons (dynamic state updates)
  * Subscribe button (UI only)
  * Comment section

### 🔹 Related Videos (Sidebar)

* Displays **suggested videos**.
* Clicking a video loads its details page.

### 🔹 Search Functionality

* Search bar in navbar.
* Search results page with **dynamic filtering**.

### 🔹 Light/Dark Mode Toggle

* Toggle between themes using **React Context API**.

### 🔹 UI/UX Enhancements

* Hover effects on thumbnails & buttons.
* Smooth page transitions with animations.
* **Skeleton loaders** for video thumbnails.

### 🔹 Fully Responsive Design

* Mobile-first layout with **Bootstrap Grid & CSS Media Queries**.
* Adapts seamlessly to tablets & desktops.


## 🛠️ Technologies Used

* **React** (Functional Components + Hooks)
* **React Router DOM** (routing)
* **React Icons** (icons)
* **Context API** (theme + global state)
* **CSS3** (layout & styling)


## 📂 Folder Structure

```
src/
├─ assets/          # images, icons, logos
├─ Components/      # reusable UI components (Navbar, Sidebar, VideoCard, etc.)
├─ Pages/           # main pages (Home, VideoDetails, SearchResults)
├─ context/         # ThemeContext (light/dark mode)
├─ data.js          # mock/static data
├─ App.jsx          # main app component
├─ index.css        # global styles
└─ main.jsx         # React entry point
```

## ⚡ Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/evitabarboza/YouTube-Clone.git
   cd YouTube-Clone
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Open in browser:
   [http://localhost:5173](http://localhost:5173) (Vite default)


## 🎮 Usage

* **Browse videos** on the homepage.
* **Click a video** → navigate to video details page.
* **Search** using the search bar.
* **Switch themes** with the sun/moon toggle.
* **Resize browser** → responsive navbar & sidebar.


## 🎨 Customization

* Replace `assets/` with your own images/icons.
* Update `ThemeContext` to add new themes or colors.
* Modify `index.css` or `Components/*.css` for custom styling.

## 📸 Screenshots

### Light Mode
<img width="1892" height="875" alt="Screenshot 2025-08-17 211557" src="https://github.com/user-attachments/assets/aa16a2e9-89a9-41b8-b21b-fd716d9c741a" />


### Dark Mode

<img width="1889" height="874" alt="Screenshot 2025-08-17 211640" src="https://github.com/user-attachments/assets/28409be2-a823-4af7-a5c8-94d276dec1da" />



## 🚀 Deployment

This project is deployed on **Vercel**.
👉 [Live Demo](https://youtube-clone-git-main-evita-barbozas-projects.vercel.app/)

## 📜 License

This project is **open-source** and available under the **MIT License**.

