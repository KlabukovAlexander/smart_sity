const Direction = require('../database/models/Direction/DirectionRepository');
const Indicator = require('../database/models/Indicator/IndicatorRepository');


const directions = [
    {
        name: "Городское управление",
        indicators: [

        ]
    },
    {
        name: "Умное ЖКХ",
        indicators: [

        ]
    },
    {
        name: "Инновации города",
        indicators: [
            
        ]
    },
    {
        name: "Транспортная сеть",
        indicators: [
            {
                name: 'Количество ДТП в городе на 10 тыс. человек (обратный показатель)',
                type: 'common'
            },
            {
                name: 'Уровень загруженности дорог (обратный показатель)',
                type: 'common'
            },
            {
                name: 'Наличие системы автоматической фото-видео фиксации нарушений ПДД',
                type: 'binary'
            },
            {
                name: 'Доля зафиксированных нарушений ПДД с применением камер видеонаблюдения высокой четкости',
                type: 'amount'
            },
            {
                name: 'Наличие системы администрирования городского парковочного простанства',
                type: 'binary'
            },
            {
                name: 'Наличие интеллектуального управления городским общесвенным транспортом',
                type: 'binary'
            },
            {
                name: 'Наличие системы интеллектуального управления движением',
                type: 'binary'
            },
            {
                name: 'Доля светофоров, подключенных к системе интеллектуального управления движением',
                type: 'amount'
            },
            {
                name: 'Наличие безопасных и комфортных мест ожидания общественного транспорта',
                type: 'binary'
            },
            {
                name: 'Доля умных мест ожидания общественного транспорта на территории городских земель',
                type: 'amount'
            },
            {
                name: 'Наличие системы мониторинга состояния дорожного полотна',
                type: 'binary'
            },
        ]
    },
    {
        name: "Общественная безопасность",
        indicators: [

        ]
    },
    {
        name: "Экологическая безопасность",
        indicators: [

        ]
    },
    {
        name: "Туризм и сервис",
        indicators: [

        ]
    },
    {
        name: "Социальные услуги",
        indicators: [

        ]
    },
    {
        name: "Экономическое состояние",
        indicators: [

        ]
    },
    {
        name: "Инфраструктура сетей связи",
        indicators: [

        ]
    },
]

module.exports = async (city_id) => {
    try {
        for (direction of directions) {
            const newDirection = await Direction.save(city_id, direction.name);
            for (indicator of direction.indicators) {
                const newIndicator = await Indicator.save({direction_id: newDirection.id, ...indicator});
            }
        }
    } catch {
        console.log('ERROR add directions')
    }
}
