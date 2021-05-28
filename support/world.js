import { setWorldConstructor } from "cucumber"
import { TransformHelper, PageMapHelper } from "./helpers"

function CustomWorld() {
  this.transform = TransformHelper
  this.pageMap = PageMapHelper
}

setWorldConstructor(CustomWorld)
