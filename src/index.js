import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./styles.css";

/**
 * Data
 * ------------------------
 */
const user = {
  name: "Hakan Yiğit Özen",
  location: "İstanbul",
  foodType: "Turkish Delight",
  age: 24,
  likes: "JavaScript and React",
  twitterUsername: "HakanJev",
  avatar:
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj7mtwyMUAZv43YS3akEeF-rFHFVZQlS5p9ukfJUWceh7tJyWSog3s8EwQYnEFQtdOexZ9MS-fKnhy61nyZzn4f0z5GeL0s9FWBbl3EPshFr0pE5uXs0YDKOxDNyRHOouS9X7VMdC0jOj16C5NMFIAygcch3U43OckU-dg319GsWQlmfJOo9lOZEsEBNw/s16000/SSS.jpg"
};

/**
 * Verileri göstermemiz gereken React bileşenimiz
 * ------------------------
 */
function App() {
  return (
    <div className="App">
      {/* Kullanıcı verilerini burada göster */}
      <div className="user-deets">
        <img src={user.avatar} alt={user.name} />
        <h1 className="name">{user.name}</h1>
        <p className="status">Location</p>
        <p className="special">{user.location}</p>
        <p className="status">Eats</p>
        <p className="special">{user.foodType}</p>
        <p className="status">Age</p>
        <p className="special">{user.age}</p>
        <p className="status">Likes</p>
        <p className="special">{user.likes}</p>
        <p className="status">Twitter</p>
        <p className="link">@{user.twitterUsername}</p>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
