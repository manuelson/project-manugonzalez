import {Skill} from "../Skill/Index.jsx";
import {
    BootstrapSvg,
    CssSvg, GithubSvg,
    HtmlSvg,
    JavascriptSvg, LaravelSvg, MagentoSvg, MysqlSvg,
    PhpSvg,
    ReactSvg,
    TailwindSvg,
    TypescriptSvg
} from "../SvgIcons/Index.jsx";

export function Skills() {

    return (
        <section id="skills" className="container mt-5">
            <h2 className="h6">
                Skills
            </h2>
            <hr />
            <ul className="row gap-3 mx-0 my-0">
                <Skill icon={<ReactSvg/>} text='React' />
                <Skill icon={<JavascriptSvg/>} text='Javascript' />
                <Skill icon={<TypescriptSvg/>} text='Typescript' />
            </ul>
            <ul className="row gap-3 mt-3 mx-0 my-0">
                <Skill icon={<PhpSvg/>} text='PHP' />
                <Skill icon={<BootstrapSvg/>} text='Bootstrap' />
                <Skill icon={<HtmlSvg/>} text='Html' />
            </ul>
            <ul className="row gap-3 mt-3  mx-0 my-0">
                <Skill icon={<CssSvg/>} text='CSS' />
                <Skill icon={<TailwindSvg/>} text='Tailwind' />
                <Skill icon={<GithubSvg/>} text='Github' />
            </ul>
            <ul className="row gap-3 mt-3  mx-0 my-0">
                <Skill icon={<LaravelSvg/>} text='Laravel' />
                <Skill icon={<MagentoSvg/>} text='Magento e-commerce' />
                <Skill icon={<MysqlSvg/>} text='Mysql' />
            </ul>
        </section>
    )
}