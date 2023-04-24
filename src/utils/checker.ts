import axios from 'axios'
import { readFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import semver from 'semver'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const packageJsonPath = join(__dirname, '..', '..', 'package.json')
const pkg = JSON.parse(readFileSync(packageJsonPath, 'utf-8'))

export async function checkForUpdates(): Promise<void> {
  try {
    const response = await axios.get(`https://registry.npmjs.org/${pkg.name}`)
    const latestVersion = response.data['dist-tags'].latest

    if (semver.gt(latestVersion, pkg.version)) {
      console.log(`\nA new version of ${pkg.name} is available (${latestVersion}). To update, run:\n`)
      console.log(`npm install -g ${pkg.name}\n`)
    } else {
      console.log(`\n${pkg.name} is up-to-date.\n`)
    }
  } catch (error: any) {
    console.error('Error checking for updates:', error.message)
  }
}
