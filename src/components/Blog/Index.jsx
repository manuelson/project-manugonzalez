
export function Blog() {

    return (
        <>
            <section id="intro" className="container my-14">
                <div className="md:w-3/5">
                    <h1 className="mb-2">
                        About my <span className="text-advice">Blog</span></h1>
                    <p className="dark:text-grey-light-900 md:text-largest">
                        All about web development. Want to hear more? You can also find me on <a target="_blank" href="https://twitter.com/manuelsoon" className="text-advice">Twitter</a>.
                    </p>
                </div>
            </section>

            <section id="blog" className="container mt-5">
                <h2 className="h6">Blog</h2>
                <hr />
                <div className="d-grid gap-4 blog ">
                    <div className="d-flex align-items-center blog-box w-100 justify-content-center">
                        <span className="text-advice">Coming soon</span>
                    </div>
                </div>
            </section>
        </>
    )
}