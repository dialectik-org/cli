import { Command } from '@oclif/core'

export default class Check extends Command {
  static description = 'Check for updates'
  static examples =  [
    '$ dialectik check version',
  ]

  async run() : Promise<void> {
    try {
      const checker = await import('../utils/checker.js')
      await checker.checkForUpdates()
    } catch (error: any) {
      console.error('Error importing checker module:', error)
    }
  }
}
