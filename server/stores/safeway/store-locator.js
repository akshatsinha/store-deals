const rp = require('request-promise')
const parseString  = require('xml2js').parseString
const _ = require('lodash')
const cheerio = require('cheerio')

const STORE_LOCATOR_PREFIX = 'http://locator.safeway.com/ajax?&xml_request='
const APP_KEY = 'C8EBB30E-9CDD-11E0-9770-6DB40E5AF53B'

let zip_code = '94404'

let locator_xml = `
    <request>
        <appkey>${APP_KEY}</appkey>
        <geoip>1</geoip>
        <formdata id="locatorsearch">
            <dataview>store_default</dataview>
            <geolocs>
                <geoloc>
                    <addressline>${zip_code}</addressline>
                    <longitude></longitude>
                    <latitude></latitude>
                    <country>US</country>
                </geoloc>
            </geolocs>
            <searchradius>15</searchradius>
            <stateonly>1</stateonly>
            <limit>5</limit>
        </formdata>
    </request>
`

let locator_url = STORE_LOCATOR_PREFIX + encodeURIComponent(locator_xml)
const dateRangeRegex = /^((0?[1-9]|1[012])[- \/.](0?[1-9]|[12][0-9]|3[01])[- \/.](19|20)?[0-9]{2}) - ((0?[1-9]|1[012])[- \/.](0?[1-9]|[12][0-9]|3[01])[- \/.](19|20)?[0-9]{2})$/


rp(locator_url)
    .then((response) => {
        let weekly_ad_urls = []
        parseString(response, (err, result) => {
            _.has(result, 'response')
            && _.has(result.response, 'collection')
            && _.isArray(result.response.collection)
            && _.has(result.response.collection[0], 'poi')
            && _.forEach(result.response.collection[0].poi, (poi) => {
                if (poi.weekly_html[0].length > 0) weekly_ad_urls.push(poi.weekly_html[0])
            })
        })
        return weekly_ad_urls
    }).then((weekly_ad_urls) => {
    // _.forEach(weekly_ad_urls, (url) => {
    //     console.log(url)
    //
    // })

    rp(weekly_ad_urls[0]).then((response) => {
        $ = cheerio.load(response)
        $('#RegionContentMain .circular').each((i, elem) => {
            let circularUrl = $(elem).find('a').attr('href')

            $(elem).find('a span').each((i, e) => {
                let dateRange = $(e).text()
                if (dateRangeRegex.test(dateRange)) {
                    let startDate = dateRange.substring(0, 8)
                    let endDate = dateRange.substring(11, 19)
                    console.log(startDate, endDate)
                }
            })


            // let dataRange = $(elem).find('a span').last().text()
            // console.log('++++++++ ', $(elem).find('a span').last().text())

        })
    })

})