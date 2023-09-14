export class ModuleNotRegistered extends Error {
  public constructor() {
    super(
      `First, you need to register the RequestIpModule module in the root module.`,
    );
  }
}
