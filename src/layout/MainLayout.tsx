import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

import { Outlet } from "react-router-dom";

export default function MainLayout() {
    return (
        <div className="flex flex-col">
            <div className="flex flex-col min-h-screen">
                <Navbar />
                <main className="flex grow flex-col overflow-hidden">
                    <Outlet />
                </main>
            </div>
            <Footer />
        </div>
    );
}