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
