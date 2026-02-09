import PublicLayout from "@/layouts/PublicLayout";
import { Head, usePage } from "@inertiajs/react";

export default function home() {
    
    return (
        <PublicLayout>
            <Head title="Home" />
            <h1>Welcome to the Home Page</h1>

        </PublicLayout>
    );
}
