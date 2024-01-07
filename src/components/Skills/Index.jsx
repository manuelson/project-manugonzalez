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
            <h2 className="text-small mt-4">Frontend</h2>
            <ul className=" mx-0 my-0 skills">
                <Skill icon={<ReactSvg/>} text='React' />
                <Skill icon={<JavascriptSvg/>} text='Javascript' />
                <Skill icon={<TypescriptSvg/>} text='Typescript' />
                <Skill icon={<BootstrapSvg/>} text='Bootstrap' />
                <Skill icon={<TailwindSvg/>} text='Tailwind' />
                <Skill icon={<HtmlSvg/>} text='HTML' />
                <Skill icon={<CssSvg/>} text='CSS' />
                <Skill icon='' text='' />
                <Skill icon='' text='' />
            </ul>
            <h2 className="text-small mt-2">Backend</h2>
            <ul className=" mx-0 my-0 skills">
                <Skill icon={<PhpSvg/>} text='PHP' />
                <Skill icon={<GithubSvg/>} text='Github' />
                <Skill icon={<LaravelSvg/>} text='Laravel' />
                <Skill icon={<MagentoSvg/>} text='Magento' />
                <Skill icon={<MysqlSvg/>} text='Mysql' />
                <Skill icon='' text='' />
            </ul>
        </section>
    )
}