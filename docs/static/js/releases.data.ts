export default {
    // get data from local
    async load() {
        const getReleases = await fetch(
            'https://server.pakeplus.com/public/latest/version'
        )
        const data = await getReleases.json()
        console.log('getReleases data', JSON.stringify(data))
        return data
    },
}
