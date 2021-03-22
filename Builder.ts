export class Builder {
  constructor(public name: string) {
  }

  build = (): string => {
    return this.name.toUpperCase();
  }
}
