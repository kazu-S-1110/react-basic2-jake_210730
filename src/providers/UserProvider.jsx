import { useState, createContext } from 'react';

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);

  return (
    // useContextの注意点として、stateが更新されると
    // 参照先が全てが再レンダリングされてしまう。またreactは親コンポーネントが更新されたら子コンポーネントも更新されるのでとてもよくない。対策としてmemoを使用するなど行う
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};
