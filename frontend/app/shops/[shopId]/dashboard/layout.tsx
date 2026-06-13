import DashboardSidebar from "@/src/components/DashboardSidebar";
import DashboardTopbar from "@/src/components/DashboardNavbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Sidebar */}
      <DashboardSidebar />

      {/* Main Content */}
      <div className="lg:ml-[280px]">
        {/* Topbar */}
        <DashboardTopbar />

        {/* Page Content */}
        <main className="p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}