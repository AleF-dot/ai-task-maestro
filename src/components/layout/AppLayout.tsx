import { ReactNode } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./AppSidebar";
import { ChatPanel } from "@/components/chat/ChatPanel";

interface AppLayoutProps {
  children: ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-background">
        <AppSidebar />
        
        {/* Main content */}
        <div className="flex-1 flex flex-col lg:flex-row">
          {/* Page content */}
          <main className="flex-1 p-4 lg:p-6">
            <div className="lg:hidden mb-4">
              <SidebarTrigger />
            </div>
            {children}
          </main>
          
          {/* Chat panel - hidden on mobile, shown as route */}
          <div className="hidden lg:block lg:w-96 border-l border-border bg-card">
            <ChatPanel />
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}
