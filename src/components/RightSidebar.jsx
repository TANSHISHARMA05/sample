// import "./../styles/RightSidebar.css";
// import { useState } from "react";


// const suggestions = [
//   {
//     id: 1,
//     name: "shivani",
//     username: "shivani",
//   },
//   {
//     id: 2,
//     name: "keshav75",
//     username: "keshav75",
//   },
//    {
//     id: 3,
//     name: "amit75",
//     username: "amit75",
//   },
//    {
//     id: 2,
//     name: "simran75",
//     username: "simran75",
//   },

// ];

// export default function RightSidebar() {
//   const [search, setSearch] = useState("");
//   return (

     

//     <div className="rightSidebar">
//             {/* 🔍 Search Bar */}
//       <div className="searchBox">
//         <input
//           type="text"
//           placeholder="Search users..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />
//       </div>

//       {/* Profile Section */}
//       <div className="profile">
//         <img
//           src="https://i.pravatar.cc/150?img=12"
//           alt="profile"
//           className="profile-img"
//         />
//         <div className="profile-info">
//           <strong id="name">patel.mernstack</strong>
//           <span> Full Stack Developer</span>
//          </div>
//       </div>

//       {/* Suggestions */}
//       <div className="suggestions-header">
//         <span>Suggested for you</span>
//         <span className="see-all">See All</span>
//       </div>

//       {suggestions.map((user) => (
//         <div className="suggestion" key={user.id}>
//           <div className="suggestion-left">
//             <div className="avatar">
//               {user.name.charAt(0).toUpperCase()}
//             </div>
//             <div>
//               <strong>{user.username}</strong>
//               <span>Bio here...</span>
//             </div>
//           </div>
//           <button className="follow-btn">Follow</button>
//         </div>
//       ))}
//     </div>
//   );
// } 


import "./../styles/RightSidebar.css";
import { useState } from "react";

const suggestions = [
  { id: 1, name: "shivani", username: "shivani" },
  { id: 2, name: "keshav75", username: "keshav75" },
  { id: 3, name: "amit75", username: "amit75" },
  { id: 4, name: "simran75", username: "simran75" },
];

export default function RightSidebar() {
  const [search, setSearch] = useState("");
  const [theme, setTheme] = useState("dark"); // 🌗 theme state

  return (
    <div className={`rightSidebar ${theme}`}>

      {/* 🌗 Theme Toggle (Instagram style) */}
      <div className="theme-toggle">
        <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          {theme === "dark" ? "☀ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>

      {/* 🔍 Search Bar */}
      <div className="searchBox">
        <input 
          id="newbox"
          type="text"
          placeholder="Search users..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* 👤 Profile Section */}
      <div className="profile">
        <img
          src="https://i.pravatar.cc/150?img=12"
          alt="profile"
          className="profile-img"
        />
        <div className="profile-info">
          <strong id="name">patel.mernstack</strong>
          <span id="fullstack"> Full Stack Developer</span>
        </div>
      </div>

      {/* Suggestions Header */}
      <div className="suggestions-header">
        <span className="suggestion-head">Suggested for you</span>
        <span className="see-all">See All</span>
      </div>

      {/* Suggestions List */}
      {suggestions.map((user) => (
        <div className="suggestion" key={user.id}>
          <div className="suggestion-left">
            <div className="avatar">
              {user.name.charAt(0).toUpperCase()}
            </div>
            <div className="userbio">
              <strong>{user.username}</strong>
              <span>Bio here...</span>
            </div>
          </div>
          <button className="follow-btn">Follow</button>
        </div>
      ))}
    </div>
  );
}




