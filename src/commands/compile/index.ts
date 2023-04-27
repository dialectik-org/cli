import { Command } from '@oclif/core'

export default class Compile extends Command {
  static description = 'Compile files into different formats (currently html and h5P).';

  static examples = [
    '$ dialectik compile to html <input file>',
    '$ dialectik compile to h5p <input file>',
  ];

  async run() : Promise<void> {
    this.log("Use for example 'dialectik help compile to html' for more information on a specific subcommand.")
  }
}
