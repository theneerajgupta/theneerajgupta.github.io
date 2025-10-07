import { useNavigate, useParams } from "react-router-dom";
import { ERROR_MESSAGES } from "./errorMessage";

export default function ErrorPage() {
    const navigate = useNavigate();
    const params = useParams<{ code: string }>();

    const code = params.code || "404";
    const message = ERROR_MESSAGES[code] || "Something went wrong";

    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center gap-4 bg-base-200">
            <div className="text-[150px] md:text-[400px] leading-[1] font-medium">{code}</div>
            <div className="text-3xl md:text-5xl font-extralight">{message}</div>
            <button
                className="btn btn-outline btn-primary btn-lg border-2 rounded-none mt-8"
                onClick={() => navigate("/")}
            >
                BACK TO HOME
            </button>
        </div>
    );
}
