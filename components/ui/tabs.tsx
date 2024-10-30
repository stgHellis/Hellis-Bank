import React, { createContext, useContext, useState } from "react";

const TabsContext = createContext<{
  activeTab: string;
  setActiveTab: (tab: string) => void;
}>({ activeTab: "", setActiveTab: () => {} });

export const Tabs: React.FC<{
  children: React.ReactNode;
  defaultValue: string;
}> = ({ children, defaultValue }) => {
  const [activeTab, setActiveTab] = useState(defaultValue);
  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div>{children}</div>
    </TabsContext.Provider>
  );
};

export const TabsList: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <div className="flex border-b">{children}</div>;
};

export const TabsTrigger: React.FC<{
  value: string;
  children: React.ReactNode;
}> = ({ value, children }) => {
  const { activeTab, setActiveTab } = useContext(TabsContext);
  return (
    <button
      className={`px-4 py-2 ${
        activeTab === value ? "border-b-2 border-blue-500" : ""
      }`}
      onClick={() => setActiveTab(value)}
    >
      {children}
    </button>
  );
};

export const TabsContent: React.FC<{
  value: string;
  children: React.ReactNode;
}> = ({ value, children }) => {
  const { activeTab } = useContext(TabsContext);
  if (activeTab !== value) return null;
  return <div>{children}</div>;
};
