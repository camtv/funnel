const express = require('express')
var cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())

app.post('/api/error_events',(req, res) =>  {		
		console.log(req.body);
		SendTelegramMessage(req.body);
		res.status = 200;
		res.send("OK");
	}
);

const PORT = process.env.PORT || 50000
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})


const request = require('request')


function SendTelegramMessage(Data) {

	const TOKEN="1230899865:AAHL25nKmZhLFA5bkI9J8bEfjKuBtppJS6Q"
	const CHAT_ID="421527695"
	const URL="https://api.telegram.org/bot"+ TOKEN +"/sendMessage"	

	var String = "💸 ERRORE CTVPAY\n"+JSON.stringify(Data);

	request.post(
	URL,
	{
		json: {
			chat_id: CHAT_ID,
			text: String,
			parse_mode:'Markdown'
		}
	},
	(error, res, body) => {
		if (error) {
		console.error(error)
		return
		}
		console.log(`statusCode: ${res.statusCode}`)
		console.log(body)
	}
	)
}
