import React, { useState } from 'react';
//import jsonServer from '../api/jsonServer';

const WaterContext = React.createContext(null);

// export const WaterProvider = ({ children }) => {
//     const [currentUser, setCurrentUser] = useState({ userName: ' ', password: ' ', id: 0, isLogin: false });

//         return <WaterContext.Provider value={{ currentUser: currentUser }}>
//             {children}
//         </WaterContext.Provider>;
    

// }

class WaterProvider extends React.Component {
    
    render() {
      return (
        <WaterContext.Provider value="Mahmoud Eid">
            {this.props.children}
        </WaterContext.Provider>
      )
    }
  }

export default WaterContext;