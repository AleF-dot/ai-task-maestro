import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Calendar() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-heading font-bold text-foreground">Calendario</h1>
        <p className="text-muted-foreground">Vista mensual, semanal y diaria</p>
      </div>

      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Calendario Mensual</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">El calendario se cargará desde tu backend...</p>
        </CardContent>
      </Card>
    </div>
  );
}
