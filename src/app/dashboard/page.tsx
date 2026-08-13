import DashboardClient from "@/components/dashboard/DashboardClient";
import BackButton from "@/components/common/BackButton";

export default function DashboardPage() {
  return (
    <main className="w-full max-w-4xl mx-auto px-4 py-12">
      <BackButton />
      <DashboardClient />
    </main>
  );
}
