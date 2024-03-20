import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Break from "../../ui/Break";

import styles from "./TabNav.module.css";

const TabNav = () => {
  const tabs = [
    { name: "Home Feed", id: "#1", to: " " },
    { name: "Latest", id: "#2", to: "/home/latest" },
    { name: "Hot", id: "#3", to: "/home/hot" },
    { name: "Discover", id: "#4", to: "/home/discover" },
    { name: "Your Communities", id: "#5", to: "/home/communities" },
  ];

  const [tabSelect, setTabSelect] = useState(tabs[0].id);

  const tabs_section = (
    <nav className={styles.tab_nav}>
      <div className={styles.section_control}>
        <ul className={styles.tabs_list}>
          {tabs.map((tab) => (
            <NavLink
              to={tab.to}
              className={tabSelect === tab.id ? styles.selected : undefined}
              key={tab.id}
              onClick={() => changeTabHandler(tab.id)}
            >
              {tab.name}
            </NavLink>
          ))}
        </ul>
        <Break />
      </div>
    </nav>
  );

  const changeTabHandler = (id) => {
    setTabSelect(id);
  };

  return (
    <React.Fragment>
      <div className={styles.feed}>
        {tabs_section}
        <Outlet />
      </div>
    </React.Fragment>
  );
};

export default TabNav;
