import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, LogOut } from "lucide-react";
import PortfolioEditor from "@/components/PortfolioEditor";

const Dashboard = () => {
  const { user, signOut, loading } = useAuth();
  const navigate = useNavigate();

  if (loading) {
    return <div className="flex h-screen items-center justify-center"><Loader2 className="h-8 w-8 animate-spin" /></div>;
  }

  const handleSignOut = async () => {
    await signOut();
    navigate("/login");
  };

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Bem-vindo, {user?.user_metadata?.name || "Usuário"}</h1>
          <p className="text-muted-foreground">{user?.email}</p>
        </div>
        <Button variant="outline" onClick={handleSignOut} className="gap-2">
          <LogOut className="h-4 w-4" /> Sair
        </Button>
      </div>

      <Tabs defaultValue="portfolio" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="portfolio">Portfólio</TabsTrigger>
          <TabsTrigger value="squads">Squads</TabsTrigger>
        </TabsList>
        
        <TabsContent value="portfolio">
          <PortfolioEditor />
        </TabsContent>
        
        <TabsContent value="squads">
          <Card>
            <CardHeader><CardTitle>Squads</CardTitle></CardHeader>
            <CardContent>Conteúdo dos Squads em breve...</CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Dashboard;