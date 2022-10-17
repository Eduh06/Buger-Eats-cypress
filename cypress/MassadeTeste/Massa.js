

export default {

    entregador: function () {

        var data = {
            nome: 'Eduardo',
            cpf: '00075625800',
            email: 'eduardo.teste@gmail.com',
            whatsapp: '47895663256',

            endereco: {
                cep: '08900-970',
                rua: 'Rua Marcondes Flores',
                numero: '453',
                complemento: 'Uma casa muito engraçada sem bugs',
                bairro: 'Centro',
                cidade_uf: 'Guararema/SP'
            },
            metodoDeEntrega: 'Moto',
            cnh: 'cnh-digital.jpg'
        }

        return data

    }
}