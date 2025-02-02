import React, { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [token, setToken] = useState(localStorage.getItem("JwtToken"));

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     const requestOptions = {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: "Bearer " + token,
  //       },
  //     };

  //     const response = await fetch(
  //       "http://127.0.0.1:8000/api/users/me",
  //       requestOptions
  //     );

  //     if (!response.ok) {
  //       setToken(null);
  //     }
  //     localStorage.setItem("LeadsToken", token);
  //   };
  //   fetchUser();
  // }, [token]);

  return (
    <UserContext.Provider value={[token, setToken]}>
      {props.children}
    </UserContext.Provider>
  );
};
// import React, { createContext, useEffect, useState } from "react";

// export const UserContext = createContext();

// export const UserProvider = (props) => {
//   const [token, setToken] = useState(localStorage.getItem("leadToken"));

//   useEffect(() => {
//     const fetchUser = async () => {
//       const requestOptions = {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: "Bearer " + token,
//         },
//       };
//       const response = await fetch(
//         "http://127.0.0.1:8000/api/users/me",
//         requestOptions
//       );

//       if (!response.ok) {
//         setToken(null);
//       }
//       localStorage.setItem("leadToken", token);
//     };
//     fetchUser();
//   }, [token]);

//   return (
//     <UserContext.Provider value={[token, setToken]}>
//       {props.children}
//     </UserContext.Provider>
//   );
// };