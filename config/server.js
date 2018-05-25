const port = process.env.PORT || 3000

let database="nomnombento"
const mongoUri = `mongodb://paradeigm:marketing@paradeigm-shard-00-00-ymseq.mongodb.net:27017,paradeigm-shard-00-01-ymseq.mongodb.net:27017,paradeigm-shard-00-02-ymseq.mongodb.net:27017/${database}?ssl=true&replicaSet=paradeigm-shard-0&authSource=admin`


if(!mongoUri){throw new Error('No MongoUri Provided')}

module.exports = {
  port,mongoUri
}
