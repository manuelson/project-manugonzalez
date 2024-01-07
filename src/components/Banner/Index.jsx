import avatar from "../../assets/avatar-manu-memoji.png";

export function Banner() {

    return (
        <section className="d-md-flex header-banner justify-content-center">
            <img src={avatar} alt="avatar" className="avatar-banner" />
            <div className="mx-5">
                <h1 className="mb-2 title">Manu
                    <span className="text-advice"> Gonzalez</span>,
                    <br /> full-stack developer
                </h1>
                <p className="text-grey justify-content-around text-banner">
                    +11 years of experience in web development.
                    <a className="text-advice" href="https://php.net/" target='_blank'> PHP</a>,
                    <a className="text-advice" href="https://reactjs.org/" target='_blank'> React</a> and
                    <a className="text-advice" href="https://getbootstrap.com/" target='_blank'> Bootstrap CSS</a>
                </p>
            </div>
        </section>
    )
}