import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Expenses() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-heading font-bold text-foreground">Gastos</h1>
        <p className="text-muted-foreground">Seguimiento de gastos con Mercado Pago</p>
      </div>

      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Resumen de Gastos</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Los gastos se cargarán desde tu backend...</p>
        </CardContent>
      </Card>
    </div>
  );
}
