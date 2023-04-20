import { Args, Command, Flags } from '@oclif/core'

export default class Compile extends Command {
  static description = 'Compile Markdown (.md) source'

  static examples = [
    '$ dialecli compile ./hello/hello.md --id Hello',
  ]

  static flags = {
    id: Flags.string({char: 'i', description: 'Source identifier', required: false}),
    style: Flags.string({char: 's', description: 'CSS style source', required: false}),
    inlinestyle: Flags.boolean({ char: 'c', description: 'Inline style (see style flag)', required: false  }),
    inlinejs: Flags.boolean({ char: 'j', description: 'Inline js', required: false  }),
  }

  static args = {
    source: Args.string({description: 'Markdown source to compile', required: true}),
  }

  async run(): Promise<void> {
    const {args, flags} = await this.parse(Compile)
    this.log(`Compile ${args.source}`)
    this.log(process.cwd())
    if (flags.id) {
      this.log(`Id: ${flags.id}`)
    }

    if (flags.style) {
      this.log(`Style: ${flags.style}`)
    }

    if (flags.inlinejs) {
      this.log(`Inline style: ${flags.inlinejs}`)
    }

    if (flags.inlinestyle) {
      if (flags.style === undefined) {
        this.warn('Flag "inlinestyle" ignored because flag style not set')
      } else {
        this.log(`Inline Style: ${flags.inlinestyle}`)
      }
    }

    try {
      const compiler = await import('@dialectik/compiler')
      compiler.compile(
        {
          id: flags.id ?? 'Dialectik Content',
          contentDirSuffix: '',
          targetType: 'HTML',
          sources: [args.source],
          styles: flags.style ? [flags.style] : [],
          components: 'Default',
          prismStyle: undefined,
          externalStyle: false,
          static: false,
          inlineCss: flags.inlinestyle,
          inlineImage: false,
          inlineJs: flags.inlinejs,
        }, process.cwd())
    } catch (error) {
      console.error('Error importing compiler module:', error)
    }
  }
}
