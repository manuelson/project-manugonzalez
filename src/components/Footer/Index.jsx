
export function Footer() {

    return (
        <footer className="container my-5 mt-5 pb-5 pt-5">
            <hr />
            <div className="d-flex justify-content-between">
                <small className="text-grey-only">2024
                    <span className="hidden md:inline-flex"> - Nothing reserved :)</span>
                </small>
                <small className="text-grey-only">Built with love in
                    <a href="https://react.dev/" className="text-advice"> React native</a> and
                    <a href="https://supabase.com/" className="text-advice"> Supabase</a>
                </small>
            </div>
        </footer>
    )
}