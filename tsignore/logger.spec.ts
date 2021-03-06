import loaded, { Fn2 } from "../src/loaded"
import patch from "../src/patch"
import tinyId from "../src/tinyId"
import logger from "../src/logger"

describe("logger", () => {
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
})
