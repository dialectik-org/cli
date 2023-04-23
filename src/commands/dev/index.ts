import { Args, Command, Flags } from '@oclif/core'

export default class Dev extends Command {
  static description = 'Starts Dev Server'

  static examples = [
    '$ dialectik dev ./hello/hello.md --id Hello',
  ]

  static flags = {
    id: Flags.string({char: 'i', description: 'Source identifier', required: false}),
    style: Flags.string({char: 's', description: 'CSS style source', required: false}),
  }

  static args = {
    source: Args.string({description: 'Markdown source to compile', required: true}),
  }

  async run(): Promise<void> {
    const {args, flags} = await this.parse(Dev)
    this.log(`Compile ${args.source}`)
    this.log(process.cwd())
    if (flags.id) {
      this.log(`Id: ${flags.id}`)
    }

    if (flags.style) {
      this.log(`Style: ${flags.style}`)
    }

    try {
      const compiler = await import('@dialectik/compiler')
      const task : any = {
        id: flags.id,
        targetType: 'HTML',
        sources: [args.source],
        styles: flags.style ? [flags.style] : [],
        components: 'Default',
        prismStyle: undefined,
        externalStyle: false,
        static: false,
        inlineCss: false,
        inlineImage: false,
        inlineJs: false,
        license: false,
      }
      compiler.start(task, process.cwd())
    } catch (error) {
      console.error('Error importing compiler module:', error)
    }
  }
}
