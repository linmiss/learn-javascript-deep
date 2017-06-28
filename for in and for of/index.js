let data = {
    "success": true,
    "info": "获取成功",
    "main_banks": [
        {
            "id": 1,
            "created_at": "2017-06-22T12:34:17+08:00",
            "updated_at": "2017-06-22T12:34:17+08:00",
            "deleted_at": null,
            "jin_jian_id": "1",
            "card": "1", //银行卡号
            "bank_name": "平安银行", //银行名称
            "user_name": "黄明芬", //持卡人姓名
            "bank_id": "29966014862" //银行卡id， 银行卡每条交易流水里包含此id
        },
        {
            "id": 2,
            "created_at": "2017-06-22T12:45:05+08:00",
            "updated_at": "2017-06-22T12:45:05+08:00",
            "deleted_at": null,
            "jin_jian_id": "1",
            "card": "2",
            "bank_name": "招商银行",
            "user_name": "黄明芬",
            "bank_id": "29970102456"
        },
        {
            "id": 2,
            "created_at": "2017-06-22T12:45:05+08:00",
            "updated_at": "2017-06-22T12:45:05+08:00",
            "deleted_at": null,
            "jin_jian_id": "1",
            "card": "建行银行",
            "bank_name": "建行银行",
            "user_name": "黄明芬",
            "bank_id": "29970102456"
        },
        {
            "id": 2,
            "created_at": "2017-06-22T12:45:05+08:00",
            "updated_at": "2017-06-22T12:45:05+08:00",
            "deleted_at": null,
            "jin_jian_id": "1",
            "card": "建行银行",
            "bank_name": "建行银行",
            "user_name": "黄明芬",
            "bank_id": "29970102456"
        }
    ]
}
function forJson(data) {
    let json = {}
    data.forEach( item => {
        if(json[item.bank_name]) {
            json[item.bank_name].push(item.card)
        } else {
            json[item.bank_name] = [item.card]
        }
    })
    return json
}
console.log(forJson(data.main_banks))