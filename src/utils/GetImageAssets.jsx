export function GetImageAssets(asset) {

    return new URL(`../assets/${asset}`, import.meta.url).href
}