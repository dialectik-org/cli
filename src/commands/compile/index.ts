import { Args, Command, Flags } from '@oclif/core'

export default class Compile extends Command {
  static description = 'Compile Markdown (.md) source'

  static examples = [
    '$ dialecli compile ./hello/hello.md --id Hello',
  ]

  static flags = {
    id: Flags.string({char: 'i', description: 'Source identifier', required: false}),
    style: Flags.string({char: 's', description: 'CSS style source', required: false}),
    target: Flags.string({char: 't', description: 'Target directory', required: false}),
    nobundlestyle: Flags.boolean({ char: 'c', description: 'Do not bundle style (see style flag)', required: false  }),
    nobundlejs: Flags.boolean({ char: 'j', description: 'Do not bundle js', required: false  }),
    nobundleimage: Flags.boolean({ char: 'p', description: 'Do not bundle Image', required: false  }),
    license: Flags.boolean({ char: 'l', description: 'Generate webpack license', required: false  }),
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

    this.log(`Do not bundle Js: ${flags.nobundlejs}`)

    if (flags.style === undefined && flags.nobundlestyle) {
      this.warn('Flag "nobundlestyle" ignored because flag style not set')
    } else {
      this.log(`Do not bundle Style: ${flags.nobundlestyle}`)
    }

    this.log(`Do not bundle Image: ${flags.nobundleimage}`)
    this.log(`License: ${flags.license ?? false}`)

    try {
      const compiler = await import('@dialectik/compiler')
      const task : any = {
        id: flags.id,
        targetType: 'HTML',
        targetDir: flags.target,
        sources: [args.source],
        styles: flags.style ? [flags.style] : [],
        components: 'Default',
        prismStyle: undefined,
        externalStyle: false,
        static: false,
        inlineCss: !flags.nobundlestyle,
        inlineImage: !flags.nobundleimage,
        inlineJs: !flags.nobundlejs,
        license: flags.license,
      }
      compiler.compile(task, process.cwd())
    } catch (error) {
      console.error('Error importing compiler module:', error)
    }
  }
}
