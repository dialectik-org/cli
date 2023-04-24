import { Hook } from '@oclif/core'

const checkForUpdatesHook: Hook.Postrun = async function (opts) {
  if (opts.Command.id !== 'check') {
    try {
      const checker = await import('../utils/checker.js')
      await checker.checkForUpdates()
    } catch (error: any) {
      console.error('Error importing checker module:', error)
    }
  }
}

export default checkForUpdatesHook

