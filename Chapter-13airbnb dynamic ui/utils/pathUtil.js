import path from 'path'
import { fileURLToPath } from 'url'

// ye to __dirname hai ye commanJS ka variable hai jo const require me use hoga agr moduleJS me use krna hai to fileURLToPath use krna hoga
// ye fileURLToPath ek function hai jo current file ka url leta hai aur path deta hai
// dirname v ek function hai jo path ko leta hai with file name fir o current folder return krta hai


export default path.dirname(path.dirname(fileURLToPath(import.meta.url)));

// क्या होता है:
// fileURLToPath(import.meta.url) = /home/.../utils/pathUtil.js
// First -> path.dirname() = /home/.../utils (utils folder)
// Second -> path.dirname() = /home/.../Chapter-11 airbnb Routes (root) ✓