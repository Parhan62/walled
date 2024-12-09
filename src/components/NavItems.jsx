import { useState } from "react";

function NavItems({ menu, activeTab, handleClick }) {
    return (
      <div className="flex gap-x-8">
        {menu.map((item, index) => (
          <a onClick={() => handleClick(item.title)} className={activeTab !== item.title? "text-black": "text[#19918F] font bold"}
           key={index} href={item.link}>{item.title}</a>
        ))}
      </div>
    );
  }
  
  export default NavItems;
  // kalo statusnya aktif amak dia warnaya hijau kalau gk aktif ya warna hitam
  // kita harus bikin kondisi
  // 