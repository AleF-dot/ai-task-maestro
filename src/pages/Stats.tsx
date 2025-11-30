import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Stats() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-heading font-bold text-foreground">Estadísticas</h1>
        <p className="text-muted-foreground">Análisis de productividad y hábitos</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Tareas Completadas</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Gráfico de tareas...</p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Horas de Sueño</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Gráfico de sueño...</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
