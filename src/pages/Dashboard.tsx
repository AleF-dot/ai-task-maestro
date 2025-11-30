import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Clock } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-heading font-bold text-foreground">Tarea del Día</h1>
        <p className="text-muted-foreground">Tu próxima tarea pendiente</p>
      </div>

      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Estudiar React Hooks</span>
            <Clock className="w-5 h-5 text-accent" />
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <p className="text-muted-foreground">Duración estimada: 2 horas</p>
            <p className="text-muted-foreground">Categoría: Estudio</p>
            <p className="text-muted-foreground">Prioridad: Alta</p>
          </div>
          
          <div className="flex gap-2">
            <Button className="flex-1">
              <CheckCircle2 className="w-4 h-4 mr-2" />
              Completada
            </Button>
            <Button variant="secondary" className="flex-1">
              No Completada
            </Button>
          </div>

          <div className="pt-4 border-t border-border space-y-2">
            <p className="text-sm font-medium">Feedback opcional:</p>
            <div className="grid grid-cols-2 gap-2">
              <Button variant="outline" size="sm">Editar duración</Button>
              <Button variant="outline" size="sm">Editar nombre</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
