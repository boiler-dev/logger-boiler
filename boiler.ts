import { ActionBoiler } from "boiler-dev"

export const generate: ActionBoiler = async () => {
  const actions = []

  actions.push({
    action: "write",
    path: "src/logger.ts",
    sourcePath: "tsignore/logger.ts",
  })

  actions.push({
    action: "write",
    path: "test/logger.spec.ts",
    sourcePath: "tsignore/logger.spec.ts",
  })

  return actions
}
