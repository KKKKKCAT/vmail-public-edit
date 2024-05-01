# vmail 個性化修改

項目：https://github.com/oiov/vmail

---

## 改 vmail 生成的名稱 (生成規則為名稱+3位隨機數字)
![](https://raw.githubusercontent.com/KKKKKCAT/vmail-public-edit/main/namelist_example.png)
1. 創建namelist文件：```apps/remix/app/routes/namelist.ts```
- 完整例子：https://github.com/KKKKKCAT/vmail-public-edit/blob/main/namelist.ts

2. 修改_h._index.tsx： ```apps/remix/app/routes/_h._index.tsx```
- 插入第15行 ```import { NameList } from "./namelist"; ```
- 修改原版第136行：```const mailbox = `${randomName("", getRandomCharacter())}@${domains.length > 1 ? selectDomain : domains[0]}`;```
- 改為：
```
const randomIndex = Math.floor(Math.random() * NameList.length);
const randomNum = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
const mailbox = `${NameList[randomIndex]}${randomNum}@${domains.length > 1 ? selectDomain : domains[0]}`;
```
- 完整例子：https://github.com/KKKKKCAT/vmail-public-edit/blob/main/_h._index.tsx

---
## 增加密碼保護
1. 修改_h.tsx：```apps/remix/app/routes/_h.tsx```
- 密碼設定請修改第15行 ```if (password === "pass") {``` 默認密碼為pass
```
import { Outlet } from "@remix-run/react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useState } from "react";

export default function HomeLayout() {
  const [password, setPassword] = useState("");
  const [accessGranted, setAccessGranted] = useState(false);

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const verifyPassword = () => {
    if (password === "pass") {
      setAccessGranted(true);
    } else {
      alert("密碼錯誤！");
    }
  };

  return (
    <div className="mx-auto min-h-screen flex flex-col bg-[#1f2023]">
      <Header />
      {accessGranted ? (
        <Outlet />
      ) : (
        <div className="flex-grow flex items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="請輸入密碼"
              className="mb-4 p-2"
            />
            <button onClick={verifyPassword} className="px-4 py-2 bg-blue-500 text-white rounded">
              驗證
            </button>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}
```
完整例子：https://github.com/KKKKKCAT/vmail-public-edit/blob/main/_h.tsx
