import { Args, Command, Flags } from '@oclif/core'

export default class H5P extends Command {
  static description = 'Compile Markdown (.md) source to H5P component.'

  static examples = [
    '$ dialectik compile to h5p ./hello/hello.md --id Hello',
  ]

  static aliases = ['compile:to:h5p'];

  static flags = {
    id: Flags.string({char: 'i', description: 'Source identifier', required: false}),
    style: Flags.string({char: 's', description: 'CSS style source', required: false}),
    target: Flags.string({char: 't', description: 'Target directory', required: false}),
    temporary: Flags.string({char: 'm', description: 'Specify react project temporary directory', required: false}),
  }

  static args = {
    source: Args.string({description: 'Markdown source to compile', required: true}),
  }

  async run(): Promise<void> {
    const {args, flags} = await this.parse(H5P)
    this.log(`Compile ${args.source}`)
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
        targetType: 'H5P',
        targetDir: flags.target,
        sources: [args.source],
        styles: flags.style ? [flags.style] : [],
        components: 'Default',
        prismStyle: undefined,
        externalStyle: false,
        static: false,
        inlineCss: undefined,
        inlineImage: undefined,
        inlineJs: undefined,
        license: flags.license,
        tmpDir: flags.temporary,
      }
      compiler.compile(task, process.cwd())
    } catch (error) {
      console.error('Error importing compiler module:', error)
    }
  }
}
