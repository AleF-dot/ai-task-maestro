import { Home, Calendar, MessageSquare, ShoppingCart, DollarSign, BarChart3, ListTodo } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const menuItems = [
  { title: "Tarea del Día", icon: Home, path: "/" },
  { title: "Lista de Tareas", icon: ListTodo, path: "/tasks" },
  { title: "Calendario", icon: Calendar, path: "/calendar" },
  { title: "Chat IA", icon: MessageSquare, path: "/chat" },
  { title: "Compras", icon: ShoppingCart, path: "/shopping" },
  { title: "Gastos", icon: DollarSign, path: "/expenses" },
  { title: "Estadísticas", icon: BarChart3, path: "/stats" },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent className="bg-card">
        <SidebarGroup>
          <SidebarGroupLabel className="text-lg font-heading font-semibold text-primary mb-4">
            TaskFlow AI
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.path}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.path}>
                      <item.icon className="w-5 h-5" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
