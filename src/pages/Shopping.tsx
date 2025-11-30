import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Shopping() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-heading font-bold text-foreground">Compras</h1>
        <p className="text-muted-foreground">Lista de compras basada en tu planificación</p>
      </div>

      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Lista de Compras</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Las compras se cargarán desde tu backend...</p>
        </CardContent>
      </Card>
    </div>
  );
}
