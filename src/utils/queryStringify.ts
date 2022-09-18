export default function queryStringify(data: string): string {
    return `?${Object.entries(data).map(pair => pair.join('=')).join('&')}`
}
