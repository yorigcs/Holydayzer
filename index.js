import express from 'express';
import dayjs from 'dayjs';
const server = express();

const holidays = [
    { date: "1/1/2022", name: "Confraternização mundial" },
    { date: "1/3/2022", name: "Carnaval" },
    { date: "4/17/2022", name: "Páscoa" },
    { date: "4/21/2022", name: "Tiradentes" },
    { date: "5/1/2022", name: "Dia do trabalho" },
    { date: "6/16/2022", name: "Corpus Christi" },
    { date: "9/7/2022", name: "Independência do Brasil" },
    { date: "10/12/2022", name: "Nossa Senhora Aparecida" },
    { date: "11/2/2022", name: "Finados" },
    { date: "11/15/2022", name: "Proclamação da República" },
    { date: "12/25/2022", name: "Natal" }
];

server.get('/holidays/:month?', (req, res) => {
    const month = req.params?.month;
    if(month) {
        const getMonthHolidays = holidays.filter( day=> day.date.split('/',1).join('') === month);
        res.send(getMonthHolidays);
    } else {
        res.send(holidays);
    }
    

});

server.get('/is-today-holidays', (req, res) => {
    const isHoliday = holidays.filter(day => day.date === dayjs().format('M/DD/YYYY'));
    isHoliday.length > 0
    ? res.send(`Sim, hoje é ${isHoliday[0].name}`)
    : res.send(`Não, hoje não é feriado`);

});


server.listen(4000);