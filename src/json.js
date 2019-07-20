const json = `
    {
        code:0,
        message:'success',
              data:{
            userId:0,
            name:'sw'
        }
    }
`

const prettier = require("prettier")

const format = json => prettier.format(json, { parser: "json" })

console.log(format(json))
