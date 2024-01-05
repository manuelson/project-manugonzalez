import { useRouteError } from "react-router-dom";

export function ErrorPage() {
    const error = useRouteError();

    return (
        <div className="d-flex align-items-center justify-content-center vh-100">
            <div className="text-center">
                <h1 className="display-1 fw-bold">{error.status}</h1>
                <p className="fs-3"> <span className="text-advice">Opps!</span> Page {error.statusText}</p>
                <p className="text-small">{error.data}</p>
                <a href="/" className="text-advice pt-5">Back to Home</a>
            </div>
        </div>
    );
}