import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Tasks() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-heading font-bold text-foreground">Lista de Tareas</h1>
        <p className="text-muted-foreground">Todas tus tareas del día</p>
      </div>

      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Tareas de Hoy</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Las tareas se cargarán desde tu backend...</p>
        </CardContent>
      </Card>
    </div>
  );
}
