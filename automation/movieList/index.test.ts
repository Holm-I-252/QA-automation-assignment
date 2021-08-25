import { Builder, Capabilities, By } from "selenium-webdriver"
import { beforeAll, afterAll, test } from "@jest/globals"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://localhost:5500/movieList/index.html')
})

afterAll(async () => {
    await driver.quit()
})

test('Can add a new movie', async () => {
    let movieInput = await driver.findElement(By.xpath("/html/body/main/section/form/input"))
    let enterButton = await driver.findElement(By.xpath('/html/body/main/section/form/button'))
    await movieInput.sendKeys('Tenet')
    await enterButton.click()
    await driver.sleep(3000)
})

test('Can cross off a movie', async () => {
    let crossOff = await driver.findElement(By.xpath('/html/body/main/ul/li/span'))
    await crossOff.click()
    await driver.sleep(2000)

    await crossOff.click()
    await driver.sleep(2000)
})

test('Can delete a movie', async () => {
    let deleteButon = await driver.findElement(By.xpath('//*[@id="Tenet"]'))
    await deleteButon.click()
    await driver.sleep(2000)
})