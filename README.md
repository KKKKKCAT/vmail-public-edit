# vmail 個性化修改

## 改 vmail 生成的名稱 (生成規則為名稱+3位隨機數字)
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
