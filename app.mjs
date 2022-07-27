import puppeteer from 'puppeteer'

const browser = await puppeteer.launch()
const page = await browser.newPage()
await page.goto('file:///Users/misky/Documents/SIDE_PROJECTS/JS/nodejs/new-html2pdf/packages/puppeteer-demo/test.html')

page.pdf({
    displayHeaderFooter: true,
    headerTemplate:
        '<div style="font-size: 14px;"><p style="text-align: center;">        :::date:<span class="date""></span>:::        :::title:<span class="title""></span>:::        :::url:<span class="url""></span>:::        :::pageNumber:<span class="pageNumber""></span>/<span class="totalPages""></span>:::</p></div>',
    footerTemplate: 'this is footer',
    format: 'A4',
    path: './test.pdf',
    landscape: false,
    scale: 1,
    preferCSSPageSize: true,
    margin: {
        top: '21.93mm',
        bottom: '21.93mm',
        left: '11.18mm',
        right: '11.18mm',
    },
}).finally(() => {
    process.exit(0)
})
