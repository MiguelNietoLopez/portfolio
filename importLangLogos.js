export default function importLangLogos()
{
    var langLogosJson;
    fetch("./languagesToRender.json").then(res => {langLogosJson = res});
    return langLogosJson
};