import {Skill} from "src/components/Skill.jsx";
import {
    BootstrapSvg,
    CssSvg, GithubSvg,
    HtmlSvg,
    JavascriptSvg, LaravelSvg, MagentoSvg, MysqlSvg,
    PhpSvg,
    ReactSvg,
    TailwindSvg,
    TypescriptSvg,
    SymfonySvg
} from "src/components/SvgIcons.jsx";

export function Skills() {

    return (
        <section id="skills" className="container mt-5">
            <h2 className="h6">
                Skills
            </h2>
            <hr />
            <h2 className="text-small mt-4 text-grey">Frontend</h2>
            <ul className=" mx-0 my-0 skills">
                <Skill icon={<ReactSvg/>} text='React' />
                <Skill icon={<JavascriptSvg/>} text='Javascript' />
                <Skill icon={<TypescriptSvg/>} text='Typescript' />
                <Skill icon={<BootstrapSvg/>} text='Bootstrap' />
                <Skill icon={<TailwindSvg/>} text='Tailwind' />
                <Skill icon={<HtmlSvg/>} text='HTML' />
                <Skill icon={<CssSvg/>} text='CSS' />
            </ul>
            <h2 className="text-small mt-4 text-grey">Backend</h2>
            <ul className=" mx-0 my-0 skills">
                <Skill icon={<PhpSvg/>} text='PHP' />
                <Skill icon={<LaravelSvg/>} text='Laravel' />
                <Skill icon={<SymfonySvg/>} text='Symfony' />
                <Skill icon={<MagentoSvg/>} text='Magento' />
                <Skill icon={<GithubSvg/>} text='Github' />
                <Skill icon={<MysqlSvg/>} text='Mysql' />
            </ul>
        </section>
    )
}