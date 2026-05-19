import { useState } from "react";
import { usePortfolio } from "../hooks/usePortfolio";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/contexts/AuthContext";

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  url: string;
}

const PortfolioEditor = () => {
  const { user } = useAuth();
  const { items, addItem, removeItem } = usePortfolio(user?.id);
  const [title, setTitle] = useState("");

  const handleAdd = () => {
    if (!title) return;
    addItem({ id: "", title, description: "", url: "" });
    setTitle("");
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <Input placeholder="Nome do projeto" value={title} onChange={(e) => setTitle(e.target.value)} />
        <Button onClick={handleAdd}>Adicionar</Button>
      </div>
      <div className="grid gap-2">
        {items.map((item) => (
          <div key={item.id} className="flex justify-between p-3 border rounded">
            <span>{item.title}</span>
            <Button variant="destructive" size="sm" onClick={() => removeItem(item.id)}>Remover</Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioEditor;