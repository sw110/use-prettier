const prettier = require("prettier")
const code = `
                    const a = 1;
                    const b = 2
                `
console.log(
  prettier.format(code, {
    semi: false,
    parser: "babel"
  })
)
console.log(prettier.format(code, { semi: true, parser: "babel" }))

// const a = 1
// const b = 2

// const a = 1;
// const b = 2;
