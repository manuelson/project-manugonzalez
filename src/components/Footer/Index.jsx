
export function Footer() {

    return (
        <footer className="container my-5 mt-5 pb-5 pt-5">
            <hr />
            <div className="d-flex justify-content-between">
                <small className="text-grey-only">2024
                    <span className="hidden md:inline-flex"> - Nothing reserved :)</span>
                </small>
                <small className="text-grey-only">Built with
                    <a href="https://react.dev/" className="text-advice" target='_blank'> React</a> and
                    <a href="https://supabase.com/" className="text-advice target='_blank'"> Supabase</a>
                </small>
            </div>
        </footer>
    )
}