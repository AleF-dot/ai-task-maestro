# Documentación de API Backend

Esta aplicación espera que tu backend exponga los siguientes endpoints:

## Variables de Entorno

Crea un archivo `.env` en la raíz con:

```env
VITE_SUPABASE_URL=https://tu-proyecto.supabase.co
VITE_SUPABASE_ANON_KEY=tu-anon-key
VITE_API_URL=http://localhost:3000/api
```

## Endpoints Requeridos

### 1. Chat con IA

**POST** `/api/chat`

Request:
```json
{
  "messages": [
    { "role": "user", "content": "Hoy completé la tarea de estudiar" },
    { "role": "assistant", "content": "¡Excelente! ¿Quieres reorganizar tus tareas?" }
  ]
}
```

Response:
```json
{
  "message": "Respuesta del asistente IA"
}
```

### 2. Feedback de Tareas

**POST** `/api/tasks/feedback`

Request:
```json
{
  "taskId": "uuid",
  "completed": true,
  "timeSpent": 120,
  "difficulty": 3,
  "satisfaction": 4
}
```

Response:
```json
{
  "success": true,
  "updatedPlan": { /* JSON del plan actualizado */ }
}
```

### 3. Reorganizar Tareas

**POST** `/api/tasks/reorganize`

Request:
```json
{
  "changes": {
    "taskId": "uuid",
    "newDate": "2024-01-15",
    "newTime": "14:00"
  }
}
```

Response:
```json
{
  "success": true,
  "updatedPlan": { /* JSON del plan actualizado */ }
}
```

## Formato del JSON de Planificación

Tu backend debe generar JSONs con esta estructura:

```json
{
  "weekStart": "2024-01-15",
  "weekEnd": "2024-01-21",
  "days": [
    {
      "date": "2024-01-15",
      "tasks": [
        {
          "id": "uuid",
          "title": "Estudiar React",
          "duration": 120,
          "category": "estudio",
          "priority": "high",
          "time": "09:00",
          "completed": false
        }
      ]
    }
  ]
}
```

## Categorías de Tareas

- `comidas`
- `estudio`
- `limpieza`
- `ejercicio`
- `mandados`
- `trabajo`
- `personal`

## Supabase

Tu instancia de Supabase debe tener las siguientes tablas:

### users (auth.users ya existe)

### tasks
```sql
CREATE TABLE tasks (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id),
  title TEXT NOT NULL,
  duration INTEGER,
  category TEXT,
  priority TEXT,
  scheduled_date DATE,
  scheduled_time TIME,
  completed BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

### task_feedback
```sql
CREATE TABLE task_feedback (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  task_id UUID REFERENCES tasks(id),
  time_spent INTEGER,
  difficulty INTEGER,
  satisfaction INTEGER,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

### plans
```sql
CREATE TABLE plans (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id),
  plan_json JSONB NOT NULL,
  week_start DATE,
  week_end DATE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```
