import { useState, useEffect } from "react";

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  url: string;
}

const STORAGE_KEY = "squadfinder_portfolio";

export const usePortfolio = (userId: string | undefined) => {
  const [items, setItems] = useState<PortfolioItem[]>([]);

  useEffect(() => {
    if (!userId) return;
    const data = localStorage.getItem(`${STORAGE_KEY}_${userId}`);
    if (data) setItems(JSON.parse(data));
  }, [userId]);

  const addItem = (item: PortfolioItem) => {
    const newItems = [...items, { ...item, id: Date.now().toString() }];
    setItems(newItems);
    if (userId) localStorage.setItem(`${STORAGE_KEY}_${userId}`, JSON.stringify(newItems));
  };

  const removeItem = (id: string) => {
    const newItems = items.filter(i => i.id !== id);
    setItems(newItems);
    if (userId) localStorage.setItem(`${STORAGE_KEY}_${userId}`, JSON.stringify(newItems));
  };

  return { items, addItem, removeItem };
};