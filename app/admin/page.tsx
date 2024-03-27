import dynamic from "next/dynamic";
import { redirect } from "next/navigation";

import { IsAdmin } from "@/lib/admin";

const App = dynamic(() => import("./app"), { ssr: false });

const AdminPage = () => {
  if (!IsAdmin()) {
    redirect("/");
  }

  return <App />;
};

export default AdminPage;
