const db = require('bdConfig')

module.exports = class BancoDeDados {
    static async getDolar() {
        return await db.exec('select data, valor_dolar from valores_dolar')
    }
}