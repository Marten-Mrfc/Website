import Header from "@/components/layout/Header";
import ProjectsTimeline from "@/components/projects/ProjectsTimeline";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#121217" }}>
      <Header />
      <main>
        <ProjectsTimeline />
      </main>
    </div>
  );
}
