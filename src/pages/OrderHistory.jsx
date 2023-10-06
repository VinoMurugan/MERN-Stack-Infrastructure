
// // import * as usersService from '../utilities/users-service'
// import { checkToken } from "../utilities/users-service";

// export const OrderHistoryPage = function () {
//   const handleCheckToken = async function () {
//     checkToken();
//   };

//     return (
//       <>
//       <h1>OrderHistoryPage</h1>
//       <button onClick={handleCheckToken}>Check When My Login Expires</button>
//       </>
//     )
//   }

import { checkToken } from "../utilities/users-service";

export default function OrderHistoryPage() {
  async function handleCheckToken(evt) {
    evt.preventDefault();
    checkToken();
  }
  return (
    <div>
      <h1>OrderHistoryPage</h1>
      <button onClick={handleCheckToken}>Check When My Login Expires</button>
    </div>
  );
}