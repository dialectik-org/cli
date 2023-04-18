import { Args, Command, Flags } from '@oclif/core'

export default class Compile extends Command {
  static description = 'Compile MD source'

  static examples = [
    '$ dialecli compile ./hello/hello.md --id Hello',
  ]

  static flags = {
    id: Flags.string({char: 'i', description: 'Source identifier', required: false}),
    style: Flags.string({char: 's', description: 'CSS style source', required: false}),
  }

  static args = {
    source: Args.string({description: 'Source to compile', required: true}),
  }

  async run(): Promise<void> {
    const {args, flags} = await this.parse(Compile)
    this.log(`Compile ${args.source}`)
    if (flags.id) {
      this.log(`Id: ${flags.id}`)
    }

    if (flags.style) {
      this.log(`Style: ${flags.style}`)
    }
  }
}
