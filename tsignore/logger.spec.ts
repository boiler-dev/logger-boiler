import loaded, { Fn2 } from "./loaded"
import patch from "./patch"
import tinyId from "./tiny-id"

import logger from "../src/logger"

const { fn2 } = loaded.load({
  logger,
  patch,
  tinyId,
}) as { fn2: Fn2 }

it("logs", () => {
  fn2.run({
    hi: () => {},
    world: () => {},
  })
})
